import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence Académique",
      description: "Formation de qualité supérieure avec des standards internationaux"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Encadrement Personnalisé",
      description: "Accompagnement individualisé pour la réussite de chaque étudiant"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Ouverture Internationale",
      description: "Partenariats avec des universités de renommée mondiale"
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Infrastructure Moderne",
      description: "Campus équipé des dernières technologies pédagogiques"
    }
  ];

  const partners = [
    "Université Paris-Dauphine",
    "Université de Bordeaux",
    "Groupe ESC Toulouse",
    "Université Laval (Canada)",
    "Université Cheikh Anta Diop",
    "Institut Africain de Management"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-academic text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            À Propos de FUPA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Une institution de formation de qualité au service de l'excellence académique
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-academic rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-primary">Notre Histoire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Créées par des professionnels expérimentés, les FUPA sont devenues une référence 
                  en matière de formation supérieure en sciences juridiques, économiques et de gestion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-academic rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-primary">Notre Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fournir aux apprenants des formations adaptées aux exigences du marché du travail 
                  dans un environnement international en constante évolution.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-gradient-academic rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-primary">Notre Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Être l'université privée de référence en Afrique de l'Ouest, reconnue pour 
                  l'excellence de ses programmes et l'employabilité de ses diplômés.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes fondamentaux qui guident notre action éducative
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-academic rounded-full flex items-center justify-center mb-4 text-white">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Nos Partenariats
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des collaborations académiques et professionnelles de prestige
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Partenariats Académiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {partners.map((partner, index) => (
                    <Badge key={partner} variant="secondary" className="justify-start p-3 text-sm animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      {partner}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Partenariats Professionnels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    Cabinet d'avocats internationaux
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    Institutions financières africaines
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    Organisations internationales
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    Entreprises multinationales
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    Institutions gouvernementales
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;