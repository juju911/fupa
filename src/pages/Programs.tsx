import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Download, Clock, Users, Award, GraduationCap } from 'lucide-react';

const Programs = () => {
  const licences = [
    {
      title: "Licence en Droit",
      duration: "3 ans",
      specializations: ["Droit Privé", "Droit Public", "Droit des Affaires"],
      description: "Formation complète aux fondamentaux juridiques avec spécialisation progressive",
      requirements: "Baccalauréat toutes séries",
      career: ["Avocat", "Magistrat", "Juriste d'entreprise", "Notaire"]
    },
    {
      title: "Licence en Économie",
      duration: "3 ans", 
      specializations: ["Économie Générale", "Économie du Développement", "Économie Internationale"],
      description: "Solide formation en analyse économique et outils quantitatifs",
      requirements: "Baccalauréat C, D, E ou équivalent",
      career: ["Économiste", "Analyste financier", "Consultant", "Chercheur"]
    },
    {
      title: "Licence en Gestion",
      duration: "3 ans",
      specializations: ["Management", "Marketing", "Finance", "Ressources Humaines"],
      description: "Formation pratique aux métiers du management et de la gestion",
      requirements: "Baccalauréat toutes séries",
      career: ["Manager", "Entrepreneur", "Consultant", "Directeur commercial"]
    }
  ];

  const masters = [
    {
      title: "Master en Droit Privé",
      duration: "2 ans",
      specializations: ["Droit des Contrats", "Droit des Sociétés", "Droit de la Famille"],
      description: "Expertise approfondie en droit privé avec focus sur la pratique professionnelle",
      requirements: "Licence en Droit ou équivalent",
      thesis: "Mémoire de recherche obligatoire"
    },
    {
      title: "Master en Économie Appliquée", 
      duration: "2 ans",
      specializations: ["Politique Économique", "Économie du Développement", "Économétrie"],
      description: "Formation avancée pour les métiers de l'expertise économique",
      requirements: "Licence en Économie ou disciplines connexes",
      thesis: "Projet de recherche appliquée"
    },
    {
      title: "Master en Gestion des Entreprises",
      duration: "2 ans",
      specializations: ["Management Stratégique", "Finance d'Entreprise", "Marketing Digital"],
      description: "MBA africain pour les futurs dirigeants d'entreprise",
      requirements: "Licence + 3 ans d'expérience professionnelle",
      thesis: "Business plan ou étude de cas"
    },
    {
      title: "Master en Audit et Contrôle de Gestion",
      duration: "2 ans",
      specializations: ["Audit Interne", "Contrôle de Gestion", "Comptabilité Internationale"],
      description: "Formation d'experts en audit et pilotage financier",
      requirements: "Licence en Gestion, Comptabilité ou équivalent",
      thesis: "Mission d'audit en entreprise"
    }
  ];

  const formations = [
    {
      title: "Formation Continue Professionnelle",
      programs: ["Droit OHADA", "Fiscalité Moderne", "Management de Projet", "Leadership"],
      format: "Cours du soir et week-ends",
      duration: "3-6 mois par module"
    },
    {
      title: "Certificats d'Excellence",
      programs: ["Arbitrage Commercial", "Compliance", "Digital Marketing", "Entrepreneuriat"],
      format: "Formation intensive",
      duration: "2-4 semaines"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-academic text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Nos Formations
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Des programmes d'excellence reconnus sur le marché africain et international
          </p>
        </div>
      </section>

      {/* Licences */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Programmes de Licence
            </h2>
            <p className="text-xl text-muted-foreground">
              Formations de base (Bac+3) dans nos trois domaines d'expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {licences.map((program, index) => (
              <Card key={program.title} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-academic rounded-lg">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">{program.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Spécialisations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.specializations.map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Conditions:</h4>
                    <p className="text-sm text-muted-foreground">{program.requirements}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Débouchés:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.career.map((job) => (
                        <Badge key={job} variant="outline" className="text-xs">
                          {job}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full btn-academic mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger la brochure
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masters */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Programmes de Master
            </h2>
            <p className="text-xl text-muted-foreground">
              Formations spécialisées (Bac+5) pour l'expertise et la recherche
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {masters.map((program, index) => (
              <Card key={program.title} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">{program.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Spécialisations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.specializations.map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Conditions d'admission:</h4>
                    <p className="text-sm text-muted-foreground">{program.requirements}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Projet de fin d'études:</h4>
                    <p className="text-sm text-muted-foreground">{program.thesis}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 btn-academic">
                      <Download className="h-4 w-4 mr-2" />
                      Brochure
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Users className="h-4 w-4 mr-2" />
                      Candidater
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formation Continue */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Formation Continue & Certificats
            </h2>
            <p className="text-xl text-muted-foreground">
              Perfectionnement professionnel pour les actifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {formations.map((category, index) => (
              <Card key={category.title} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-academic rounded-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-primary">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Programmes disponibles:</h4>
                    <div className="grid gap-2">
                      {category.programs.map((program) => (
                        <div key={program} className="flex items-center gap-2 p-2 bg-card/50 rounded">
                          <BookOpen className="h-4 w-4 text-primary" />
                          <span className="text-sm">{program}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span><strong>Format:</strong> {category.format}</span>
                    <span><strong>Durée:</strong> {category.duration}</span>
                  </div>

                  <Button className="w-full btn-academic">
                    <Download className="h-4 w-4 mr-2" />
                    Catalogue complet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-academic text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Prêt à rejoindre FUPA ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Découvrez nos modalités d'admission et démarrez votre parcours d'excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Download className="h-5 w-5 mr-2" />
              Télécharger toutes les brochures
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Users className="h-5 w-5 mr-2" />
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;