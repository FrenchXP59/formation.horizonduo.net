import { useEffect, useRef, useState, type RefObject } from "react";

type Props = {
  /** Référence vers l'élément autour duquel la scène gravite (le portrait). */
  anchorRef: RefObject<HTMLElement>;
  /** Appelé à chaque changement de phase (Analyser, Concevoir, Animer, Évaluer). */
  onPhase?: (index: number, name: string) => void;
};

/**
 * Scène 3D de particules derrière le contenu du hero.
 * Three.js est chargé à la demande (import dynamique) : le premier affichage du site n'est pas ralenti.
 */
export default function HeroScene({ anchorRef, onPhase }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phaseCb = useRef(onPhase);
  phaseCb.current = onPhase;

  useEffect(() => {
    let dispose: (() => void) | undefined;
    let cancelled = false;

    (async () => {
      const canvas = canvasRef.current;
      const anchor = anchorRef.current;
      if (!canvas || !anchor) return;
      // Pas de WebGL : on n'affiche rien, le hero reste intact.
      const test = document.createElement("canvas");
      if (!test.getContext("webgl") && !test.getContext("experimental-webgl")) return;

      const [THREE, { mountHeroScene }] = await Promise.all([
        import("three"),
        import("@/lib/heroScene"),
      ]);
      if (cancelled) return;
      dispose = mountHeroScene(THREE, canvas, anchor, {
        onPhase: (i: number, n: string) => phaseCb.current?.(i, n),
      });
    })();

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, [anchorRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
    />
  );
}

/** Petit libellé de phase à placer sous le portrait. */
export function HeroPhaseLabel({ phase }: { phase: { i: number; name: string } | null }) {
  const [shown, setShown] = useState(phase);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!phase) return;
    setVisible(false);
    const t = setTimeout(() => { setShown(phase); setVisible(true); }, 250);
    return () => clearTimeout(t);
  }, [phase]);
  if (!shown) return null;
  return (
    <p
      aria-live="off"
      className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {String(shown.i + 1).padStart(2, "0")} · {shown.name}
    </p>
  );
}
