import { useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle,
  FileText,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Quote,
  Sparkles,
  Star,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import HeroScene, { HeroPhaseLabel } from "@/components/HeroScene";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const portraitRef = useRef<HTMLImageElement>(null);
  const [heroPhase, setHeroPhase] = useState<{ i: number; name: string } | null>(null);

  const calendlyLink = "https://calendly.com/frederic-legrand59/rdv-formation";
  const linkedinLink = "https://www.linkedin.com/in/frederic-legrand-horizonduo";
  const emailLink = "mailto:contact@horizonduo.net?subject=Demande%20de%20devis";

  const navItems = [
    { label: "IA & formations", id: "ia-formations" },
    { label: "Expertise", id: "expertise" },
    { label: "Interventions", id: "interventions" },
    { label: "Références 2026-2027", id: "references" },
    { label: "Réalisations", id: "realisations" },
    { label: "Partenaires", id: "partenaires" },
    { label: "Témoignages", id: "temoignages" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string): void => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
    const heading = element.querySelector("h2, h3");
    if (heading) {
      (heading as HTMLElement).setAttribute("tabindex", "-1");
      (heading as HTMLElement).focus({ preventScroll: true });
    }
    setMenuOpen(false);
  };

  const proofPoints = [
    "20 ans d'expérience managériale terrain",
    "Formations IA, RH et ingénierie pédagogique",
    "Interventions en enseignement supérieur et en entreprise",
    "Veille IA, Skills, automatisation et contenus multimédias",
  ];

  const aiTrainingThemes = [
    "IA générative en entreprise",
    "Création de contenus rédactionnels et visuels avec l'IA",
    "Développement de l'activité grâce à l'IA",
    "IA appliquée aux fonctions commerciales",
    "IA appliquée au marketing et à la communication",
    "IA appliquée aux ressources humaines (IA & RH)",
  ];

  const expertiseBlocks = [
    {
      title: "Veille IA & sources",
      icon: FileText,
      description: "Suivre les évolutions, confronter les informations et transformer la veille en applications pédagogiques.",
      items: ["Veille technologique", "NotebookLM", "Contrôle des sources"],
    },
    {
      title: "Choix des modèles IA",
      icon: Brain,
      description: "Comparer les modèles selon les usages, leurs limites, le coût, le contexte et les données mobilisées.",
      items: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    },
    {
      title: "Skills & automatisation",
      icon: Workflow,
      description: "Concevoir des méthodes réutilisables et des workflows avec des étapes de vérification humaine.",
      items: ["Skills", "Assistants spécialisés", "Agents", "Make / n8n"],
    },
    {
      title: "Motion design & médias",
      icon: Sparkles,
      description: "Produire des briefs, des scénarios et des ressources multimédias au service de l'apprentissage.",
      items: ["Motion design", "Podcasts", "Vidéos", "Supports accessibles"],
    },
  ];

  const interventions = [
    {
      title: "IA & transformation des usages",
      icon: Brain,
      tone: "bg-purple-50 border-purple-200 text-purple-700",
      description: "Passer des outils IA aux cas pratiques métier, avec une pédagogie claire, responsable et directement applicable.",
      points: [
        "Comparer les outils selon les besoins",
        "Construire des prompts et workflows utiles",
        "Concevoir des ateliers IA métier",
      ],
      examples: ["IA appliquée au marketing et à la communication", "Création de contenus avec IA générative", "Atelier IA & PME"],
    },
    {
      title: "Ingénierie pédagogique",
      icon: GraduationCap,
      tone: "bg-blue-50 border-blue-200 text-blue-700",
      description: "Créer des parcours, supports, exercices et évaluations alignés avec les objectifs pédagogiques et les référentiels.",
      points: [
        "Structurer une progression pédagogique",
        "Adapter les contenus au niveau des apprenants",
        "Créer quiz, cas pratiques et mises en situation",
      ],
      examples: ["Conception de modules IA certifiants", "Amélioration de supports existants", "Adaptation aux référentiels RS"],
    },
    {
      title: "Management & performance",
      icon: Users,
      tone: "bg-green-50 border-green-200 text-green-700",
      description: "Développer la posture managériale, l'efficacité collective, le pilotage de projets et la communication d'équipe.",
      points: [
        "Renforcer la posture et la communication",
        "Piloter une équipe ou un projet complexe",
        "Relier management, IA et performance terrain",
      ],
      examples: ["Posture managériale", "Management de projets", "Performance d'équipe"],
    },
    {
      title: "Commercial, marketing & RH",
      icon: Target,
      tone: "bg-orange-50 border-orange-200 text-orange-700",
      description: "Relier relation client, développement commercial, marketing, communication et ressources humaines.",
      points: [
        "Outiller les équipes commerciales et RH",
        "Appliquer l'IA aux fonctions métier",
        "Développer des plans d'action concrets",
      ],
      examples: ["Techniques de vente", "Marketing et communication", "Ressources humaines"],
    },
  ];

  const realisations = [
    {
      title: "Skills & assistants pédagogiques",
      icon: Workflow,
      description: "Création de méthodes réutilisables pour structurer des supports, nettoyer des sous-titres, préparer des exercices ou vérifier les contenus générés.",
    },
    {
      title: "Veille & recherche sourcée",
      icon: FileText,
      description: "Organisation de la veille IA, comparaison des modèles et exploitation de documents avec NotebookLM, tout en conservant un contrôle des sources et des résultats.",
    },
    {
      title: "Motion design & contenus multimédias",
      icon: Sparkles,
      description: "Conception de scripts, storyboards, vidéos courtes, podcasts et ressources pédagogiques, avec une attention portée à l'accessibilité.",
    },
    {
      title: "Applications pédagogiques",
      icon: Layers,
      description: "Développement de quiz, simulateurs et outils interactifs pour personnaliser les activités et faciliter la mise en pratique des compétences.",
    },
  ];

  const partners = [
    { name: "AMOS", label: "Sport Business School", icon: Award },
    { name: "EDHEC", label: "Hackathons IA via 361 Degrés", icon: GraduationCap },
    { name: "Axio Formation", label: "Formation professionnelle", icon: Target },
    { name: "Digital College", label: "Formation digitale", icon: Briefcase },
    { name: "ECOR / ECAR", label: "École de commerce", icon: BookOpen },
    { name: "Exchange College", label: "Enseignement supérieur", icon: GraduationCap },
  ];

  const testimonials = [
    {
      quote: "Des contenus clairs, structurés et interactifs.",
      author: "Bertrand Mortier",
      role: "Responsable pédagogique, AMOS - Sport Business School",
      context: "Intervention IA auprès d'étudiants de 1re et 2e année post-bac, mai 2026",
    },
    {
      quote: "Une pédagogie adaptée aux besoins réels des apprenants.",
      author: "Ranjan Seelallsing",
      role: "Gestion de projets, communication RH & institutionnelle",
      context: "Certification RS7288 - IA appliquée au marketing et à la communication, mai 2026",
    },
    {
      quote: "Préparation rigoureuse et pédagogie novatrice.",
      author: "Thibault Béchet-Hervy",
      role: "Accompagnement transformation & performance",
      context: "Collaboration formation, décembre 2025",
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Formateur IA, RH et ingénierie pédagogique | Frédéric Legrand</title>
        <meta
          name="description"
          content="Frédéric Legrand, formateur IA et concepteur pédagogique. Formations IA & RH, veille technologique, Skills, automatisation, motion design et interventions AMOS, EDHEC et Axio."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://formation.horizonduo.net/" />
        <meta property="og:title" content="Formations IA & ingénierie pédagogique - Frédéric Legrand" />
        <meta property="og:description" content="Veille IA, Skills, IA & RH, automatisation et ingénierie pédagogique : des interventions et réalisations concrètes pour les entreprises et l'enseignement supérieur." />
        <meta property="og:image" content="https://formation.horizonduo.net/og-preview.png" />
        <meta property="og:url" content="https://formation.horizonduo.net/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none"
        >
          Aller au contenu principal
        </a>

        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border shadow-sm" role="banner">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center gap-4">
            <button
              onClick={() => scrollTo("hero")}
              className="text-lg md:text-xl font-bold text-primary hover:underline focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1 text-left"
              aria-label="Retour à l'accueil"
            >
              Frédéric Legrand
            </button>

            <nav className="hidden xl:flex gap-4 text-sm font-medium" aria-label="Navigation principale">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="xl:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="focus:ring-2 focus:ring-primary focus:outline-none rounded-md p-1"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav id="mobile-menu" className="xl:hidden bg-white border-t border-border" role="navigation" aria-label="Menu mobile">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-4 py-3 hover:bg-muted focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </header>

        <main id="main-content">
          <section id="hero" className="relative min-h-[92vh] flex items-center gradient-hero overflow-hidden" aria-label="Présentation">
            <div className="absolute inset-0 bg-black/10" />
            <HeroScene anchorRef={portraitRef} onPhase={(i, name) => setHeroPhase({ i, name })} />
            <div className="relative z-10 container mx-auto px-4 py-14">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center max-w-6xl mx-auto">
                <div className="text-center lg:text-left">
                  <img
                    ref={portraitRef}
                    src="/images/frederic_legrand_portrait_1.webp"
                    alt="Frédéric Legrand - formateur IA et ingénierie pédagogique"
                    width="192"
                    height="192"
                    loading="eager"
                    className="w-44 h-44 md:w-48 md:h-48 rounded-full mx-auto lg:mx-0 mb-6 shadow-card object-cover border-4 border-white/30"
                  />
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    <Badge className="bg-white/90 text-primary hover:bg-white">IA appliquée</Badge>
                    <Badge className="bg-white/90 text-primary hover:bg-white">Référentiels RS</Badge>
                    <Badge className="bg-white/90 text-primary hover:bg-white">Pédagogie active</Badge>
                  </div>
                  <HeroPhaseLabel phase={heroPhase} />
                </div>

                <div className="text-center lg:text-left text-white">
                  <p className="text-base md:text-lg font-semibold text-white/85 mb-3">
                    Frédéric Legrand — formateur IA, concepteur pédagogique et auteur
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                    Transformer l'IA en compétences et outils concrets
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                    Formations IA et RH, ingénierie pédagogique, veille technologique et automatisation pour l'enseignement supérieur et les professionnels.
                  </p>
                  <p className="text-lg text-white/80 mb-8 max-w-3xl">
                    Je confronte les modèles, construis des Skills et des outils pédagogiques, et transforme les nouveautés de l'IA en ateliers, supports et cas pratiques directement mobilisables.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left">
                    {proofPoints.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-white/90">
                        <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                    <Button size="lg" className="gradient-accent shadow-accent text-white border-0 hover:scale-105 transition-smooth px-8 py-3 text-lg font-semibold" asChild>
                      <a href={calendlyLink} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir Calendly pour planifier un échange">
                        <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                        Planifier un échange
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/50 text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold" asChild>
                      <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="Visiter le profil LinkedIn">
                        <Linkedin className="mr-2 h-5 w-5" aria-hidden="true" />
                        Voir LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="ia-formations" className="py-20 bg-white" aria-labelledby="heading-ia-formations">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 id="heading-ia-formations" className="text-4xl font-bold mb-4 text-foreground">IA & formations certifiantes</h2>
                <p className="text-xl text-muted-foreground">
                  Je participe à la conception, l'animation et l'amélioration de formations IA professionnelles, notamment sur des parcours certifiants et des référentiels RS.
                </p>
              </div>

              <div className="grid lg:grid-cols-[1fr_1fr] gap-8 max-w-6xl mx-auto items-start">
                <Card className="shadow-card border-0 bg-secondary/25">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Brain className="h-7 w-7 text-primary" aria-hidden="true" />
                      Thématiques IA travaillées
                    </CardTitle>
                    <CardDescription>
                      Des contenus pensés pour passer rapidement de la découverte des outils à leur usage métier.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {aiTrainingThemes.map((theme) => (
                        <div key={theme} className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-soft">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                          <span className="text-sm font-medium">{theme}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <GraduationCap className="h-7 w-7 text-primary" aria-hidden="true" />
                      Ce que j'apporte
                    </CardTitle>
                    <CardDescription>
                      Un pont entre veille IA quotidienne, expérience terrain et pédagogie active.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "Ingénierie pédagogique et structuration de parcours",
                        "Création de contenus, exercices, quiz et cas pratiques",
                        "Veille technologique sur les modèles, agents et outils IA",
                        "Adaptation aux référentiels de certification et aux niveaux des apprenants",
                        "Comparaison des outils selon les usages métiers, les limites et les coûts",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Star className="h-5 w-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="expertise" className="py-20 bg-amber-50/30" aria-labelledby="heading-expertise">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 id="heading-expertise" className="text-4xl font-bold mb-4 text-foreground">Expertise IA terrain</h2>
                <p className="text-xl text-muted-foreground">
                  Une veille continue me permet de suivre l'évolution des modèles, des Skills, des agents et des nouveaux outils de production. Chaque nouveauté est évaluée à l'aune de sa pertinence pédagogique, de ses limites et de ses sources.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
                {expertiseBlocks.map((block) => {
                  const IconComponent = block.icon;
                  return (
                    <Card key={block.title} className="shadow-soft border-0 bg-white">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                          <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl">{block.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{block.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {block.items.map((item) => (
                            <Badge key={item} variant="secondary" className="text-sm">{item}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-card p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Mon angle différenciant</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Je ne transmets pas uniquement la maîtrise d'applications. Je montre comment organiser une veille fiable, sélectionner le bon modèle, concevoir des Skills et des workflows réutilisables, puis contrôler les productions. La finalité reste l'apprentissage, la qualité des résultats et l'autonomie des apprenants.
                </p>
              </div>
            </div>
          </section>

          <section id="interventions" className="py-20 bg-white" aria-labelledby="heading-interventions">
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <h2 id="heading-interventions" className="text-4xl font-bold mb-4 text-foreground">Interventions & domaines d'expertise</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Des formats modulables : formation, conception pédagogique, amélioration de supports, ateliers ou accompagnement.
                </p>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {interventions.map((intervention) => {
                  const IconComponent = intervention.icon;
                  return (
                    <Card key={intervention.title} className={`${intervention.tone} border-2 shadow-soft h-full`}>
                      <CardHeader>
                        <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center mb-3 shadow-soft">
                          <IconComponent className="h-7 w-7" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{intervention.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">{intervention.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-5">
                        <div className="space-y-2">
                          {intervention.points.map((point) => (
                            <div key={point} className="flex items-start gap-2 text-sm text-foreground">
                              <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {intervention.examples.map((example) => (
                            <Badge key={example} variant="outline" className="bg-white/70 text-foreground">{example}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="references" className="py-20 bg-secondary/20" aria-labelledby="heading-references">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 id="heading-references" className="text-4xl font-bold mb-4 text-foreground">Interventions récentes & programmées</h2>
                <p className="text-xl text-muted-foreground">
                  Des missions concrètes en enseignement supérieur et en formation professionnelle. Les cours à venir sont signalés comme programmés.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                <Card className="border-0 bg-white shadow-card h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Réalisé · septembre 2026</Badge>
                    <CardTitle className="text-2xl">Hackathons IA — EDHEC</CardTitle>
                    <CardDescription>2 septembre à Lille · 7 septembre à Nice</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Animation de hackathons autour de l'intelligence artificielle auprès d'étudiants de l'EDHEC, dans le cadre d'une collaboration avec 361 Degrés.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-white shadow-card h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Programmé · 2026-2027</Badge>
                    <CardTitle className="text-2xl">AMOS — Bachelor 1 à Mastère 2</CardTitle>
                    <CardDescription>Cours planifiés de novembre 2026 à avril 2027</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Fondamentaux de l'IA, IA appliquée au marketing et à la communication, automatisation, productivité et projet de concours de vente. Une progression adaptée aux niveaux et aux compétences visées.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-white shadow-card h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Formations professionnelles · 2026</Badge>
                    <CardTitle className="text-2xl">Axio — IA & RH et usages métier</CardTitle>
                    <CardDescription>Formation professionnelle et parcours certifiants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Interventions en IA appliquée aux ressources humaines, au marketing et à la communication, avec des cas pratiques, des évaluations et des supports adaptés. Session collective IA & RH programmée en octobre 2026.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-white shadow-card h-full">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">Réalisé · juillet 2026</Badge>
                    <CardTitle className="text-2xl">Pédagogie IA & accessibilité</CardTitle>
                    <CardDescription>Formation incluant un apprenant non-voyant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Adaptation d'un parcours IA générative avec supports structurés, ressources audio, exercices concrets et attention particulière à l'accessibilité et aux besoins des apprenants.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="realisations" className="py-20 bg-amber-50/30" aria-labelledby="heading-realisations">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 id="heading-realisations" className="text-4xl font-bold mb-4 text-foreground">Réalisations concrètes</h2>
                <p className="text-xl text-muted-foreground">
                  Des réalisations qui relient expérimentation, veille, choix des modèles et ingénierie pédagogique.
                </p>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {realisations.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={item.title} className="shadow-card bg-white border-0 h-full">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                          <IconComponent className="h-7 w-7 text-primary" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-2xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="partenaires" className="py-20 bg-white" aria-labelledby="heading-partenaires">
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <h2 id="heading-partenaires" className="text-4xl font-bold mb-4 text-foreground">Écoles & partenaires</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Interventions et collaborations avec des écoles, organismes et acteurs de la formation professionnelle.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
                {partners.map((partner) => {
                  const IconComponent = partner.icon;
                  return (
                    <Card key={partner.name} className="bg-secondary/20 text-center shadow-soft hover:shadow-card transition-smooth border-0 h-full">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-7 w-7 text-primary" aria-hidden="true" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{partner.name}</h3>
                        <p className="text-sm text-muted-foreground">{partner.label}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="temoignages" className="py-20 gradient-secondary" aria-labelledby="heading-temoignages">
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <h2 id="heading-temoignages" className="text-4xl font-bold mb-4 text-foreground">Recommandations LinkedIn</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Trois recommandations récentes valident la même promesse : clarté, adaptation aux apprenants et passage à l'action.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.author} className="shadow-card bg-white border-0 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
                        <div className="flex items-center gap-1" aria-label="Recommandation LinkedIn">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                      <CardDescription className="text-lg italic text-foreground">
                        "{testimonial.quote}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground mt-3">{testimonial.context}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button variant="outline" asChild>
                  <a href={`${linkedinLink}/details/recommendations/`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" aria-hidden="true" />
                    Voir les recommandations complètes
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section id="certifications" className="py-16 bg-white" aria-labelledby="heading-certifications">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="gradient-primary shadow-card border-0 text-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle id="heading-certifications" className="text-2xl mb-4">Formations certifiantes & référentiels RS</CardTitle>
                    <CardDescription className="text-white/90 text-lg">
                      Selon le contexte, les parcours peuvent s'inscrire dans le cadre de certifications ou de référentiels portés par des partenaires habilités.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-white/80 text-lg">
                      Je peux vous aider à clarifier le besoin, le format, le référentiel visé et les modalités adaptées.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 gradient-hero" aria-labelledby="heading-contact">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 id="heading-contact" className="text-4xl font-bold mb-8 text-white">Échangeons sur votre projet</h2>
                <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                  Formation IA, conception pédagogique, atelier métier ou création d'outils : réservons un créneau pour cadrer votre besoin.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <Button size="lg" className="gradient-accent shadow-accent text-white border-0 hover:scale-105 transition-smooth px-8 py-4 text-lg font-semibold" asChild>
                    <a href={calendlyLink} target="_blank" rel="noopener noreferrer" aria-label="Réserver un échange via Calendly">
                      <Calendar className="mr-2 h-6 w-6" aria-hidden="true" />
                      Réserver un échange
                    </a>
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="Visiter mon profil LinkedIn" className="flex items-center gap-3 text-white/90 hover:underline focus:ring-2 focus:ring-white rounded-md focus:outline-none px-2 py-1">
                    <Linkedin className="h-6 w-6" aria-hidden="true" />
                    <span className="text-lg">LinkedIn</span>
                  </a>
                  <a href={emailLink} aria-label="Envoyer un email à contact@horizonduo.net" className="flex items-center gap-3 text-white/90 hover:underline focus:ring-2 focus:ring-white rounded-md focus:outline-none px-2 py-1">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                    <span className="text-lg">contact@horizonduo.net</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer role="contentinfo" className="bg-foreground text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white/80">
              © 2026 Frédéric Legrand - Formateur, concepteur pédagogique et micro-entrepreneur. Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}
