import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Plus,
  Quote,
  Sparkles,
  Star,
  Target,
  Users,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const calendlyLink = "https://calendly.com/frederic-legrand59/rdv-formation";
  const linkedinLink = "https://www.linkedin.com/in/frederic-legrand-horizonduo";
  const emailLink = "mailto:contact@horizonduo.net?subject=Demande%20de%20devis";

  const navItems = [
    { label: "IA & formations", id: "ia-formations" },
    { label: "Expertise", id: "expertise" },
    { label: "Réalisations", id: "realisations" },
    { label: "Partenaires", id: "partenaires" },
    { label: "Témoignages", id: "temoignages" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const focusableEl = el.querySelector("h2, h3");
      if (focusableEl) {
        (focusableEl as HTMLElement).setAttribute("tabindex", "-1");
        (focusableEl as HTMLElement).focus({ preventScroll: true });
      }
      setMenuOpen(false);
    }
  };

  const proofPoints = [
    "20 ans d'expérience managériale terrain",
    "Formations IA professionnelles et certifiantes",
    "Interventions BTS, Bachelor, Master et professionnels",
    "Création d'outils, cas pratiques et contenus interactifs",
  ];

  const aiTrainingThemes = [
    "IA générative en entreprise",
    "Création de contenus rédactionnels et visuels avec l'IA",
    "Développement de l'activité grâce à l'IA",
    "IA appliquée aux fonctions commerciales",
    "IA appliquée au marketing et à la communication",
    "IA appliquée aux ressources humaines",
  ];

  const expertiseBlocks = [
    {
      title: "Assistants IA",
      icon: Brain,
      items: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    },
    {
      title: "Recherche documentaire",
      icon: FileText,
      items: ["NotebookLM", "Projects ChatGPT", "Espaces documentaires IA"],
    },
    {
      title: "Agents & automatisation",
      icon: Workflow,
      items: ["Mode Agent ChatGPT", "Antigravity", "Make", "Workflows IA"],
    },
    {
      title: "Création de contenus",
      icon: Sparkles,
      items: ["Canva", "HeyGen", "Runway", "Suno"],
    },
  ];

  const modules = [
    {
      id: "ia",
      title: "IA & transformation des usages",
      description: "Passer des outils IA aux cas pratiques métier, avec une pédagogie claire et responsable.",
      icon: Brain,
      color: "purple",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-500",
      hoverShadow: "hover:shadow-purple-200",
      outcomes: [
        "Comparer les bons outils selon les besoins",
        "Construire des prompts et workflows utiles",
        "Transformer un usage IA en exercice opérationnel",
      ],
      catalog: [
        { title: "IA appliquée au marketing et à la communication", duration: "Certification RS", type: "Professionnels" },
        { title: "Création de contenus avec IA générative", duration: "21h", type: "CPF", cpfCode: "RS6776" },
        { title: "Atelier IA & PME : applications concrètes", duration: "3h", type: "Atelier" },
      ],
    },
    {
      id: "pedagogie",
      title: "Ingénierie pédagogique",
      description: "Concevoir des supports, exercices, quiz et cas pratiques alignés avec des référentiels.",
      icon: GraduationCap,
      color: "blue",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-500",
      hoverShadow: "hover:shadow-blue-200",
      outcomes: [
        "Structurer une progression pédagogique",
        "Adapter les contenus à un public précis",
        "Créer des activités interactives et évaluables",
      ],
      catalog: [
        { title: "Conception de modules IA certifiants", duration: "Sur mesure", type: "RS" },
        { title: "Création d'exercices et cas pratiques", duration: "Sur mesure", type: "Formation" },
        { title: "Amélioration de supports existants", duration: "Audit", type: "Conseil" },
      ],
    },
    {
      id: "management",
      title: "Management & performance",
      description: "Développer la posture managériale, l'efficacité collective et le pilotage de projets.",
      icon: Users,
      color: "green",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-500",
      hoverShadow: "hover:shadow-green-200",
      outcomes: [
        "Renforcer la posture et la communication",
        "Piloter une équipe ou un projet complexe",
        "Relier management, IA et performance terrain",
      ],
      catalog: [
        { title: "Posture managériale & accompagnement disciplinaire", duration: "15.5h", type: "Bachelor" },
        { title: "Management de projets complexes", duration: "4h", type: "Master 1" },
        { title: "Manager la performance d'une équipe", duration: "21h", type: "CPF", cpfCode: "RS6910" },
      ],
    },
    {
      id: "commercial",
      title: "Commercial, marketing & RH",
      description: "Relier relation client, développement commercial, marketing et ressources humaines.",
      icon: Target,
      color: "orange",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-500",
      hoverShadow: "hover:shadow-orange-200",
      outcomes: [
        "Outiller les équipes commerciales et RH",
        "Appliquer l'IA aux fonctions métier",
        "Développer des contenus et plans d'action concrets",
      ],
      catalog: [
        { title: "Techniques de vente et posture conseil", duration: "15h", type: "Bachelor" },
        { title: "Performance commerciale de la stratégie", duration: "19h", type: "Master 2" },
        { title: "L'essentiel de la gestion RH", duration: "21h", type: "CPF" },
      ],
    },
  ];

  const realisations = [
    {
      title: "Applications pédagogiques",
      icon: Layers,
      description: "Quiz, simulateurs, applications de formation et outils interactifs pour rendre les apprentissages plus concrets.",
    },
    {
      title: "Horizon Duo",
      icon: BookOpen,
      description: "Production de contenus autour de l'IA, de la bourse et des voyages : articles, podcasts, vidéos et applications web.",
    },
    {
      title: "Contenus digitaux",
      icon: FileText,
      description: "Podcasts IA, vidéos pédagogiques, livres publiés et contenus conçus pour transmettre simplement des sujets complexes.",
    },
  ];

  const partners = [
    { name: "AMOS", label: "Sport Business School", icon: Award },
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
        <title>Formations IA, management et pédagogie | Frédéric Legrand</title>
        <meta
          name="description"
          content="Frédéric Legrand conçoit et anime des formations IA, management, marketing, RH et développement commercial. Ingénierie pédagogique, certifications RS, outils interactifs et cas pratiques."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://formation.horizonduo.net/" />
        <meta property="og:title" content="Formations IA & ingénierie pédagogique - Frédéric Legrand" />
        <meta property="og:description" content="Formations IA certifiantes, cas pratiques métier, conception pédagogique et outils interactifs pour l'enseignement supérieur et les professionnels." />
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
              onClick={() => handleScroll("hero")}
              className="text-lg md:text-xl font-bold text-primary hover:underline focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1 text-left"
              aria-label="Retour à l'accueil"
            >
              Frédéric Legrand
            </button>

            <nav className="hidden lg:flex gap-5 text-sm font-medium" aria-label="Navigation principale">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="relative hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all focus:ring-2 focus:ring-primary focus:outline-none rounded-md px-2 py-1"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="lg:hidden">
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
            <nav id="mobile-menu" className="lg:hidden bg-white border-t border-border" role="navigation" aria-label="Menu mobile">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
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
            <div className="relative z-10 container mx-auto px-4 py-14">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center max-w-6xl mx-auto">
                <div className="text-center lg:text-left">
                  <img
                    src="/images/frederic_legrand_portrait_1.webp"
                    alt="Frédéric Legrand - formateur IA et ingénierie pédagogique"
                    width="192"
                    height="192"
                    loading="eager"
                    className="w-44 h-44 md:w-48 md:h-48 rounded-full mx-auto lg:mx-0 mb-6 shadow-card object-cover border-4 border-white/30"
                  />
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    <Badge className="bg-white/90 text-primary hover:bg-white">IA appliquée</Badge>
                    <Badge className="bg-white/90 text-primary hover:bg-white">Certifications RS</Badge>
                    <Badge className="bg-white/90 text-primary hover:bg-white">Pédagogie active</Badge>
                  </div>
                </div>

                <div className="text-center lg:text-left text-white">
                  <p className="text-base md:text-lg font-semibold text-white/85 mb-3">
                    Frédéric Legrand - formateur, concepteur pédagogique et auteur
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
                    Transformer l'IA en compétences concrètes
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
                    Formations IA, management, marketing, RH et développement commercial pour l'enseignement supérieur et les professionnels.
                  </p>
                  <p className="text-lg text-white/80 mb-8 max-w-3xl">
                    J'aide les équipes et les apprenants à comprendre les outils, choisir les bons usages et produire des cas pratiques directement applicables.
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
                  Mon positionnement ne repose pas sur un outil unique : je compare les modèles, les versions, les fenêtres de contexte, les capacités de recherche et les usages métier.
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
                  J'explique quand utiliser ChatGPT, Claude, Gemini, Perplexity, NotebookLM ou un agent IA, mais aussi quand ne pas les utiliser. L'enjeu est de relier le bon outil au bon contexte : recherche, synthèse documentaire, création, automatisation, formation ou production opérationnelle.
                </p>
              </div>
            </div>
          </section>

          <section id="modules" className="py-20 bg-white" aria-labelledby="heading-modules">
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <h2 id="heading-modules" className="text-4xl font-bold mb-4 text-foreground">Offres & domaines d'intervention</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Des interventions modulables : formation, conception pédagogique, amélioration de supports, ateliers ou accompagnement.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {modules.map((module) => {
                  const IconComponent = module.icon;
                  return (
                    <Dialog key={module.id}>
                      <DialogTrigger asChild>
                        <Card className={`${module.bgColor} ${module.borderColor} border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${module.hoverShadow} hover:shadow-xl group h-full`}>
                          <CardHeader className="text-center pb-4 relative">
                            <div className={`w-16 h-16 ${module.iconBg} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="h-8 w-8 text-white" aria-hidden="true" />
                            </div>
                            <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                            <CardDescription className="text-center text-sm">{module.description}</CardDescription>
                            <div className="absolute bottom-2 right-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                              <div className={`w-8 h-8 ${module.iconBg} rounded-lg flex items-center justify-center`}>
                                <Plus className="h-4 w-4 text-white" aria-hidden="true" />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Badge variant="outline" className="bg-white/60">Voir les exemples</Badge>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" aria-describedby={`dialog-description-${module.id}`}>
                        <DialogHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 ${module.iconBg} rounded-lg flex items-center justify-center shrink-0`}>
                              <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                              <DialogTitle className="text-2xl">{module.title}</DialogTitle>
                              <DialogDescription id={`dialog-description-${module.id}`} className="text-base mt-1">
                                {module.description}
                              </DialogDescription>
                            </div>
                          </div>
                        </DialogHeader>
                        <div className="space-y-5">
                          <div>
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <Target className="h-5 w-5" aria-hidden="true" />
                              Résultats recherchés
                            </h3>
                            <div className="space-y-2">
                              {module.outcomes.map((outcome) => (
                                <div key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                  <span>{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                              <BookOpen className="h-5 w-5" aria-hidden="true" />
                              Exemples de formats
                            </h3>
                            {module.catalog.map((formation, index) => (
                              <Card key={index} className={`${module.bgColor} border-l-4 ${
                                module.color === "orange" ? "border-l-orange-500" :
                                module.color === "blue" ? "border-l-blue-500" :
                                module.color === "green" ? "border-l-green-500" :
                                "border-l-purple-500"
                              } mb-3`}>
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-start gap-3 mb-2">
                                    <h4 className="font-semibold text-base">{formation.title}</h4>
                                    <Badge variant="secondary" className="shrink-0">{formation.type}</Badge>
                                  </div>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" aria-hidden="true" />
                                      <span>{formation.duration}</span>
                                    </div>
                                    {formation.cpfCode && (
                                      <div className="flex items-center gap-1 text-green-700">
                                        <CheckCircle className="h-4 w-4" aria-hidden="true" />
                                        <span>{formation.cpfCode}</span>
                                      </div>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <Button className="flex-1 gradient-accent text-white" asChild>
                              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" aria-label="Réserver un échange via Calendly">
                                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                                Échanger sur ce besoin
                              </a>
                            </Button>
                            <Button variant="outline" className="flex-1" asChild>
                              <a href={emailLink} aria-label="Demander un devis par email">
                                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                                Demander un devis
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="realisations" className="py-20 bg-amber-50/30" aria-labelledby="heading-realisations">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-14">
                <h2 id="heading-realisations" className="text-4xl font-bold mb-4 text-foreground">Réalisations concrètes</h2>
                <p className="text-xl text-muted-foreground">
                  Je combine formation, création de contenus et développement d'outils pour rendre les apprentissages plus vivants.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
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

          <section id="cpf" className="py-16 bg-white" aria-labelledby="heading-cpf">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Card className="gradient-primary shadow-card border-0 text-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle id="heading-cpf" className="text-2xl mb-4">Formations certifiantes et CPF</CardTitle>
                    <CardDescription className="text-white/90 text-lg">
                      Certaines formations peuvent être mobilisées via le CPF lorsqu'elles sont portées par mes partenaires certifiés.
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
