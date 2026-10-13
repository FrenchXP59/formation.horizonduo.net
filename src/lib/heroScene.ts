// @ts-nocheck
// heroScene — scène de particules 3D qui gravite autour du portrait.
// Cycle : Analyser → Concevoir → Animer → Évaluer (4 formes, un « plan » caméra par forme).
// Usage : const stop = mountHeroScene(THREE, canvas, portraitEl, { onPhase }) ; stop() pour nettoyer.
export function mountHeroScene(THREE, canvas, anchor, opts = {}) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = Math.min(window.innerWidth, window.innerHeight) < 700;
  const N = small ? 3500 : 7500;
  const PHASES = ['Analyser', 'Concevoir', 'Animer', 'Évaluer'];

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: !!opts.capture });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  // Couleurs envoyées telles quelles (comportement validé lors du test) : pas de conversion sRGB/linéaire.
  if (THREE.ColorManagement) THREE.ColorManagement.enabled = false;
  if ('outputColorSpace' in renderer && THREE.LinearSRGBColorSpace) renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  const scene = new THREE.Scene();
  const DIST = 12, FOV = 35;
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
  camera.position.set(0, 0, DIST);
  camera.lookAt(0, 0, 0);

  const rnd = (a, b) => a + Math.random() * (b - a);
  const gauss = () => { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };

  // Unité : rayon du portrait ≈ 0.4. Les formes restent autour, sans envahir la colonne de texte.
  // 0. Analyser — nébuleuse spirale inclinée : la donnée brute
  function nebula() {
    const a = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const arm = i % 3, t = Math.random(), ang = t * Math.PI * 2.6 + arm * 2.094, r = 0.55 + t * 0.75;
      a[i*3] = Math.cos(ang) * r + gauss() * 0.06;
      a[i*3+1] = Math.sin(ang) * r * 0.42 + gauss() * 0.06;
      a[i*3+2] = Math.sin(ang) * r * 0.6 + gauss() * 0.08;
    }
    return a;
  }
  // 1. Concevoir — réseau en anneaux concentriques : un parcours structuré
  const rings = [{ r: 0.62, n: 8 }, { r: 0.92, n: 12 }, { r: 1.22, n: 16 }];
  const nodes = [];
  rings.forEach((rg, ri) => { for (let k = 0; k < rg.n; k++) { const ang = (k / rg.n) * Math.PI * 2 + ri * 0.2; nodes.push({ v: new THREE.Vector3(Math.cos(ang) * rg.r, Math.sin(ang) * rg.r, Math.sin(ang * 3) * 0.08), ri }); } });
  const links = [];
  for (let i = 0; i < nodes.length; i++) for (let j = 0; j < nodes.length; j++) {
    if (nodes[j].ri === nodes[i].ri + 1 && nodes[i].v.distanceTo(nodes[j].v) < 0.55) links.push([nodes[i].v, nodes[j].v]);
  }
  function network() {
    const a = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      let p;
      if (i % 4 === 0) { const [A, B] = links[i % links.length]; const t = Math.random(); p = A.clone().lerp(B, t); }
      else { const n = nodes[i % nodes.length].v; p = new THREE.Vector3(n.x + gauss() * 0.035, n.y + gauss() * 0.035, n.z + gauss() * 0.035); }
      a[i*3] = p.x; a[i*3+1] = p.y; a[i*3+2] = p.z;
    }
    return a;
  }
  // 2. Animer — orbites croisées (gyroscope) : l'échange formateur / groupe
  function orbits() {
    const a = new Float32Array(N * 3), m = new THREE.Matrix4(), v = new THREE.Vector3();
    const tilts = [[0.0, 0.0], [1.15, 0.5], [-1.15, 0.5]];
    for (let i = 0; i < N; i++) {
      const k = i % 3, th = Math.random() * Math.PI * 2, R = 0.78 + k * 0.17 + gauss() * 0.012;
      v.set(Math.cos(th) * R, Math.sin(th) * R * 0.32, Math.sin(th) * R);
      m.makeRotationFromEuler(new THREE.Euler(tilts[k][1], 0, tilts[k][0]));
      v.applyMatrix4(m);
      a[i*3] = v.x; a[i*3+1] = v.y; a[i*3+2] = v.z;
    }
    return a;
  }
  // 3. Évaluer — sphère de Fibonacci + anneau gradué : la mesure
  function sphere() {
    const a = new Float32Array(N * 3), g = Math.PI * (3 - Math.sqrt(5)), M = Math.floor(N * 0.72);
    for (let i = 0; i < N; i++) {
      if (i < M) { const y = 1 - (i / (M - 1)) * 2, r = Math.sqrt(1 - y * y), th = g * i, R = 0.72; a[i*3] = Math.cos(th) * r * R; a[i*3+1] = y * R; a[i*3+2] = Math.sin(th) * r * R; }
      else { const tick = (i % 40 === 0), th = tick ? Math.round(Math.random() * 60) / 60 * Math.PI * 2 : Math.random() * Math.PI * 2, R = 1.08 + (tick ? rnd(0, 0.07) : gauss() * 0.006); a[i*3] = Math.cos(th) * R; a[i*3+1] = Math.sin(th) * R * 0.22; a[i*3+2] = Math.sin(th) * R * 0.5; }
    }
    return a;
  }
  const shapes = [nebula(), network(), orbits(), sphere()];

  const geo = new THREE.BufferGeometry();
  const seed = new Float32Array(N), tint = new Float32Array(N);
  // 0 = bleu nuit (structure), 1 = orange (étincelles), 2 = blanc lumineux (majorité)
  for (let i = 0; i < N; i++) { seed[i] = Math.random(); const r = Math.random(); tint[i] = r < 0.12 ? 1 : (r < 0.30 ? 0 : 2); }
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shapes[0]), 3));
  geo.setAttribute('aTo', new THREE.BufferAttribute(new Float32Array(shapes[0]), 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  geo.setAttribute('aTint', new THREE.BufferAttribute(tint, 1));

  // Palette du site : bleu nuit (texte), bleu primaire, orange accent
  const uniforms = {
    uT: { value: 0 }, uMix: { value: 1 }, uPx: { value: 1 },
    uNavy: { value: new THREE.Color('hsl(210, 45%, 24%)') },
    uBlue: { value: new THREE.Color('hsl(210, 55%, 96%)') },
    uOrange: { value: new THREE.Color('hsl(25, 88%, 58%)') }
  };
  const mat = new THREE.ShaderMaterial({
    uniforms, transparent: true, depthWrite: false, blending: THREE.NormalBlending,
    vertexShader: `
      attribute vec3 aTo; attribute float aSeed; attribute float aTint;
      uniform float uT, uMix, uPx;
      varying float vA; varying float vTint;
      float ease(float x){return x<.5?4.*x*x*x:1.-pow(-2.*x+2.,3.)/2.;}
      void main(){
        float d=aSeed*.35;
        float m=ease(clamp((uMix-d)/.65,0.,1.));
        vec3 p=mix(position,aTo,m);
        float arc=sin(m*3.14159);
        p+=normalize(p+vec3(.001))*arc*(.12+aSeed*.3);
        p+=vec3(sin(uT*.6+aSeed*40.),cos(uT*.5+aSeed*31.),sin(uT*.4+aSeed*17.))*.008;
        vec4 mv=modelViewMatrix*vec4(p,1.);
        gl_Position=projectionMatrix*mv;
        float tw=.8+.2*sin(uT*2.+aSeed*60.);
        gl_PointSize=(2.4+aSeed*3.4+(aTint==1.?2.:0.))*tw*uPx*(${DIST.toFixed(1)}/-mv.z);
        vA=(.55+.45*aSeed)*(1.-arc*.25);
        vTint=aTint;
      }`,
    fragmentShader: `
      uniform vec3 uNavy,uBlue,uOrange; varying float vA; varying float vTint;
      void main(){
        float r=length(gl_PointCoord-.5);
        float core=smoothstep(.22,.0,r);
        float halo=exp(-r*r*14.)*.55;
        float a=(core+halo)*vA;
        if(a<.02)discard;
        vec3 col=vTint>1.5?uBlue:(vTint>.5?uOrange:uNavy);
        col=mix(col,vec3(1.),core*(vTint>.5?.55:.0));
        gl_FragColor=vec4(col,min(a,1.)*(vTint<.5?.75:1.));
      }`
  });
  const points = new THREE.Points(geo, mat);
  const group = new THREE.Group();
  group.add(points);
  scene.add(group);

  const lp = [];
  links.forEach(([A, B]) => lp.push(A.x, A.y, A.z, B.x, B.y, B.z));
  const lgeo = new THREE.BufferGeometry();
  lgeo.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
  const lmat = new THREE.LineBasicMaterial({ color: new THREE.Color('hsl(210, 45%, 30%)'), transparent: true, opacity: 0, depthWrite: false });
  group.add(new THREE.LineSegments(lgeo, lmat));

  // Un « plan » par phase : inclinaison et vitesse de rotation de la scène
  const shots = [
    { rx: 0.35, rz: -0.15, spin: 0.10 },
    { rx: 0.0,  rz: 0.0,   spin: 0.05 },
    { rx: -0.2, rz: 0.25,  spin: 0.28 },
    { rx: 0.15, rz: -0.08, spin: 0.08 }
  ];
  const rot = { x: shots[0].rx, z: shots[0].rz };

  let W = 1, H = 1;
  const halfH = Math.tan((FOV / 2) * Math.PI / 180) * DIST;
  let push = 1;
  function place() {
    const c = canvas.getBoundingClientRect(), r = anchor.getBoundingClientRect();
    if (!c.width || !c.height) return;
    const cx = (r.left + r.width / 2 - c.left) / c.width * 2 - 1;
    const cy = -((r.top + r.height / 2 - c.top) / c.height * 2 - 1);
    group.position.set(cx * halfH * camera.aspect, cy * halfH, 0);
    const portraitR = (r.width / 2) / c.height * 2 * halfH;
    const s = portraitR / 0.5;
    group.scale.setScalar(s * push);
    uniforms.uPx.value = renderer.getPixelRatio();
  }
  function resize() {
    W = canvas.clientWidth; H = canvas.clientHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
    place();
    // Changer la taille du canvas efface l'image : en mode fixe (pas de boucle d'animation), on la redessine.
    if (reduce) renderer.render(scene, camera);
  }
  const ro = new ResizeObserver(resize); ro.observe(canvas);
  resize();

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const onMove = e => { mouse.tx = e.clientX / window.innerWidth - 0.5; mouse.ty = e.clientY / window.innerHeight - 0.5; };
  window.addEventListener('pointermove', onMove, { passive: true });

  let visible = true;
  const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; }, { threshold: 0 });
  io.observe(canvas);

  const PHASE = 5.5, MORPH = 2.2;
  let phase = 0, phaseStart = performance.now(), start = phaseStart, raf = 0;
  opts.onPhase && opts.onPhase(0, PHASES[0]);

  function goto(next) {
    const pos = geo.attributes.position.array, to = geo.attributes.aTo.array;
    pos.set(to); to.set(shapes[next]);
    geo.attributes.position.needsUpdate = true; geo.attributes.aTo.needsUpdate = true;
    uniforms.uMix.value = 0; phase = next;
    opts.onPhase && opts.onPhase(next, PHASES[next]);
  }
  if (opts.capture) window.__heroGoto = n => { phaseStart = performance.now(); goto(n); };

  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!visible || document.hidden) return;
    const t = (now - start) / 1000;
    uniforms.uT.value = t;
    if ((now - phaseStart) / 1000 > PHASE) { phaseStart = now; goto((phase + 1) % shapes.length); }
    const local = (now - phaseStart) / 1000;
    uniforms.uMix.value = Math.min(1, local / MORPH);
    const target = phase === 1 ? Math.max(0, (uniforms.uMix.value - 0.6) / 0.4) * 0.28 : 0;
    lmat.opacity += (target - lmat.opacity) * 0.06;

    const s = shots[phase];
    mouse.x += (mouse.tx - mouse.x) * 0.04; mouse.y += (mouse.ty - mouse.y) * 0.04;
    rot.x += (s.rx + mouse.y * 0.35 - rot.x) * 0.025;
    rot.z += (s.rz - rot.z) * 0.025;
    group.rotation.x = rot.x;
    group.rotation.z = rot.z;
    group.rotation.y += s.spin * 0.016 + mouse.x * 0.002;
    // léger travelling avant pendant chaque plan
    push = 1 + Math.min(1, local / PHASE) * 0.07 + Math.sin(t * 0.2) * 0.01;
    place();
    renderer.render(scene, camera);
  }

  if (reduce) {
    geo.attributes.position.array.set(shapes[3]); geo.attributes.aTo.array.set(shapes[3]);
    geo.attributes.position.needsUpdate = geo.attributes.aTo.needsUpdate = true;
    group.rotation.set(shots[3].rx, 0.6, shots[3].rz);
    opts.onPhase && opts.onPhase(3, PHASES[3]);
    place();
    renderer.render(scene, camera);
    // Le portrait peut bouger après le chargement (polices, images) : on recale l'image fixe.
    const onLayout = () => { place(); renderer.render(scene, camera); };
    window.addEventListener('load', onLayout, { once: true });
    setTimeout(onLayout, 1200);
  } else {
    raf = requestAnimationFrame(frame);
  }

  return function dispose() {
    cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
    window.removeEventListener('pointermove', onMove);
    geo.dispose(); mat.dispose(); lgeo.dispose(); lmat.dispose(); renderer.dispose();
  };
}
