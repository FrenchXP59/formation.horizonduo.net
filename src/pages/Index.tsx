import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Mail,
  Linkedin,
  Users,
  TrendingUp,
  Brain,
  Target,
  CheckCircle,
  Star,
  Award,
  BookOpen,
  Briefcase,
  Plus,
  Clock,
  GraduationCap,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const calendlyLink = "https://calendly.com/frederic-legrand59/rdv-formation";
  const linkedinLink = "https://www.linkedin.com/in/frederic-legrand-horizonduo";
  const emailLink = "mailto:contact@horizonduo.net?subject=Demande%20de%20devis";

const modules = [
  {
    id: "vente",
    title: "Techniques de vente B2B",
    description: "Renforcer les compétences commerciales et la posture conseil",
    icon: Target,
    color: "orange",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-500",
    hoverShadow: "hover:shadow-orange-200",
    catalog: [
      { title: "Technique de vente et de conseil", duration: "15h", type: "Bachelor" },
      { title: "Performance commerciale de la stratégie", duration: "19h", type: "Master 2" },
      { title: "Maîtriser les techniques de vente en environnement pro", duration: "14h", type: "CPF" }
    ]
  },
  {
    id: "management",
    title: "Management de la performance",
    description: "Développer l'efficacité collective et la posture managériale",
    icon: Users,
    color: "blue",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
    hoverShadow: "hover:shadow-blue-200",
    catalog: [
      { title: "Posture managériale & accompagnement disciplinaire", duration: "15.5h", type: "Bachelor" },
      { title: "Management de projets complexes", duration: "4h", type: "Master 1" },
      { title: "Manager la performance d’une équipe", duration: "21h", type: "CPF" }
    ]
  },
  {
    id: "rh",
    title: "Ressources humaines",
    description: "Outiller les RH pour piloter efficacement les équipes",
    icon: Briefcase,
    color: "green",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconBg: "bg-green-500",
    hoverShadow: "hover:shadow-green-200",
    catalog: [
      { title: "Tableau de bord RH : suivi des activités du personnel", duration: "10.5h", type: "Master" },
      { title: "Stratégie de segmentation & fidélisation client", duration: "14h", type: "Master" },
      { title: "L’essentiel de la gestion RH", duration: "21h", type: "CPF" }
    ]
  },
  {
    id: "ia",
    title: "IA & transformation digitale",
    description: "Intégrer l'IA dans les usages professionnels de manière responsable",
    icon: Brain,
    color: "purple",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-500",
    hoverShadow: "hover:shadow-purple-200",
    catalog: [
      { title: "IA & éthique appliquée à l’entreprise", duration: "3.5h", type: "BTS" },
      { title: "Atelier IA & PME (applications concrètes)", duration: "3h", type: "Atelier" },
      { title: "Création de contenus avec IA générative", duration: "21h", type: "CPF" }
    ]
  }
];


 
  return (
    <div className="min-h-screen">
      {/* 🧭 NAVBAR STICKY */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => handleScroll("hero")}
            className="text-xl font-bold text-primary hover:underline"
          >
            Frédéric Legrand
          </button>

     <div className="hidden md:flex gap-6 text-sm font-medium">
  {[
    { label: "À propos", id: "a-propos" },
    { label: "Modules", id: "modules" },
    { label: "Partenaires", id: "partenaires" },
    { label: "CPF", id: "cpf" },
    { label: "Contact", id: "contact" },
  ].map((item) => (
    <button
      key={item.id}
      onClick={() => handleScroll(item.id)}
      className="relative hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary after:transition-all"
    >
      {item.label}
    </button>
  ))}
</div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

       {menuOpen && (
  <div className="md:hidden bg-white border-t border-border">
    <button
      onClick={() => handleScroll("a-propos")}
      className="block w-full text-left px-4 py-2 hover:bg-muted"
    >
      À propos
    </button>
    <button
      onClick={() => handleScroll("modules")}
      className="block w-full text-left px-4 py-2 hover:bg-muted"
    >
      Modules
    </button>
    <button
      onClick={() => handleScroll("partenaires")}
      className="block w-full text-left px-4 py-2 hover:bg-muted"
    >
      Partenaires
    </button>
    <button
      onClick={() => handleScroll("cpf")}
      className="block w-full text-left px-4 py-2 hover:bg-muted"
    >
      CPF
    </button>
    <button
      onClick={() => handleScroll("contact")}
      className="block w-full text-left px-4 py-2 hover:bg-muted"
    >
      Contact
    </button>
  </div>
)}
</header>
        {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-hero">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/images/frederic_legrand_portrait_1.webp" 
                alt="Frédéric Legrand - Formateur professionnel"
                className="w-48 h-48 rounded-full mx-auto mb-6 shadow-card object-cover border-4 border-white/20"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Frédéric Legrand
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2 font-medium">
              De manager à formateur : j’accompagne vos équipes sur les enjeux humains & digitaux.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Des formations concrètes, centrées sur le management, la relation client & l’IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="gradient-accent shadow-accent text-white border-0 hover:scale-105 transition-smooth px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  📅 Planifier un échange
                </a>
              </Button>
            </div>
         <div className="flex justify-center gap-6 mt-4">
  <a 
    href={linkedinLink} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="Lien LinkedIn"
    className="flex items-center gap-2 text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-full transition-all"
  >
    <Linkedin className="h-6 w-6" />
    <span className="text-base font-medium">LinkedIn</span>
  </a>
  <a 
    href="mailto:contact@horizonduo.net" 
    aria-label="Envoyer un email"
    className="flex items-center gap-2 text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-full transition-all"
  >
    <Mail className="h-6 w-6" />
    <span className="text-base font-medium">Email</span>
  </a>
</div>
          </div>
        </div>
      </section>
  

      {/* À propos */}
      <section id="a-propos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">À propos</h2>
            <div className="bg-secondary/30 rounded-2xl p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
        Après plus de 20 ans comme manager dans le secteur financier, j’ai choisi de me reconvertir dans la formation professionnelle pour transmettre mon expérience du terrain.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
               Je forme des publics variés (étudiants, alternants, professionnels) sur des sujets concrets : management, relation client, RH, IA appliquée. Mon approche : transmettre des outils pratiques et renforcer les postures managériales à l’ère du digital.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">Management</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">Relation Client</Badge>
          
                <Badge variant="secondary" className="px-4 py-2 text-sm">Ressources Humaines</Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">IA Appliquée</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules enseignés */}
      <section id="modules" className="py-20 bg-amber-50/30"> {/* Modules */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Modules enseignés</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des formations adaptées aux enjeux actuels des entreprises
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {modules.map((module) => {
              const IconComponent = module.icon;
              return (
                <Dialog key={module.id}>
                  <DialogTrigger asChild>
                    <Card className={`${module.bgColor} ${module.borderColor} border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${module.hoverShadow} hover:shadow-xl group`}>
                      <CardHeader className="text-center pb-4 relative">
                        <div className={`w-16 h-16 ${module.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                        <CardDescription className="text-center text-sm">
                          {module.description}
                        </CardDescription>
                        <div className="absolute bottom-2 right-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`w-8 h-8 ${module.iconBg} rounded-full flex items-center justify-center`}>
                            <Plus className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="text-center">
                          <Badge variant="outline" className={`${module.color === 'orange' ? 'border-orange-300 text-orange-700' : 
                            module.color === 'blue' ? 'border-blue-300 text-blue-700' :
                            module.color === 'green' ? 'border-green-300 text-green-700' :
                            'border-purple-300 text-purple-700'} bg-white/50`}>
                            Voir le catalogue
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${module.iconBg} rounded-full flex items-center justify-center`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <DialogTitle className="text-2xl">{module.title}</DialogTitle>
                          <DialogDescription className="text-base mt-1">
                            {module.description}
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Catalogue des formations
                      </h3>
                      {module.catalog.map((formation, index) => (
                        <Card key={index} className={`${module.bgColor} border-l-4 ${
                          module.color === 'orange' ? 'border-l-orange-500' :
                          module.color === 'blue' ? 'border-l-blue-500' :
                          module.color === 'green' ? 'border-l-green-500' :
                          'border-l-purple-500'
                        }`}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-base">{formation.title}</h4>
                              <Badge variant="secondary" className="ml-2 shrink-0">
                                {formation.type}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{formation.duration}</span>
                              </div>
                              {formation.type === 'CPF' && (
                                <div className="flex items-center gap-1 text-green-600">
                                  <CheckCircle className="h-4 w-4" />
                                  <span>Éligible CPF</span>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Modalités</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Formations disponibles en présentiel, distanciel ou format hybride. 
                          Adaptation possible selon vos besoins spécifiques.
                        </p>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <Button 
  className="flex-1 gradient-accent text-white"
  asChild
>
  <a 
    href="https://calendly.com/frederic-legrand59/rdv-formation" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Calendar className="mr-2 h-4 w-4" />
    Réserver une formation
  </a>
</Button>
                        <Button 
  variant="outline" 
  className="flex-1"
  asChild
>
  <a href="mailto:contact@horizonduo.net?subject=Demande%20de%20devis">
    <Mail className="mr-2 h-4 w-4" />
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

      {/* Partenaires & écoles */}
      <section id="partenaires" className="py-20 bg-white"> {/* Partenaires */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Partenaires & écoles</h2>
            <p className="text-xl text-muted-foreground">
              Collaborations avec des établissements reconnus
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary/20 rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">ECOR / ECAR</h3>
              <p className="text-sm text-muted-foreground">École de commerce</p>
            </div>
            <div className="bg-secondary/20 rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Digital College</h3>
              <p className="text-sm text-muted-foreground">Formation digitale</p>
            </div>
            <div className="bg-secondary/20 rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Exchange College</h3>
              <p className="text-sm text-muted-foreground">Enseignement supérieur</p>
            </div>
            <div className="bg-secondary/20 rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-smooth">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Axio Formation</h3>
              <p className="text-sm text-muted-foreground">Formation professionnelle</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-20 gradient-secondary"> {/* Témoignages */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Témoignages</h2>
            <p className="text-xl text-muted-foreground">
              Ce que disent mes étudiants et partenaires
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card bg-white border-0">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  "Intervention claire et concrète, très appréciée des étudiants."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sm">Responsable pédagogique, Lille</p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-white border-0">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  "Un formateur moderne et innovant."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sm">Étudiant Master 2</p>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-white border-0">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <CardDescription className="text-base italic">
                  "Une vraie valeur ajoutée sur l'IA et le CRM."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sm">Responsable formation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     {/* Encadré CPF */}
<section id="cpf" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <Card className="gradient-primary shadow-card border-0 text-white">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl mb-4">Formations éligibles au CPF</CardTitle>
          <CardDescription className="text-white/90 text-lg">
            ✅ Formations éligibles au CPF grâce à mes partenaires de formation
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-white/80 text-lg">
            Vous souhaitez utiliser votre CPF pour suivre l’une de mes formations ?<br />
            Parlons-en ensemble : je vous accompagne dans les démarches.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

         {/* Section Contact (dernier bloc) */}
      <section id="contact" className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-white">Contactez-moi</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Prêt à développer vos compétences ? Réservons un créneau pour discuter de vos besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="gradient-accent shadow-accent text-white border-0 hover:scale-105 transition-smooth px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a 
                  href={calendlyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-6 w-6" />
                  📅 Réserver un échange (Calendly)
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a 
                href={linkedinLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 hover:underline"
              >
                <Linkedin className="h-6 w-6" />
                <span className="text-lg">LinkedIn</span>
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <Mail className="h-6 w-6" />
                <span className="text-lg">contact@horizonduo.net</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
         <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © 2024 Frédéric Legrand - Formateur professionnel. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

