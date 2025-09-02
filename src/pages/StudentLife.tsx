import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Music, 
  Trophy, 
  Book, 
  Heart, 
  Globe,
  Camera, 
  Mic,
  Drama,
  Calculator,
  Briefcase,
  Star,
  Volume2,
  Play
} from 'lucide-react';

const StudentLife = () => {
  const clubs = [
    {
      name: "Club de Débat Juridique",
      icon: <Mic className="h-6 w-6" />,
      description: "Développement de l'art oratoire et de l'argumentation juridique",
      activities: ["Débats inter-universitaires", "Concours d'éloquence", "Simulation de procès"],
      members: "45+ étudiants"
    },
    {
      name: "Association des Économistes FUPA",
      icon: <Calculator className="h-6 w-6" />,
      description: "Promotion de la culture économique et entrepreneuriale",
      activities: ["Conférences économiques", "Business plan contest", "Visites d'entreprises"],
      members: "60+ étudiants"
    },
    {
      name: "Club Entrepreneuriat & Innovation",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Accompagnement des projets entrepreneuriaux étudiants",
      activities: ["Incubation de startups", "Pitch sessions", "Mentorat"],
      members: "35+ étudiants"
    },
    {
      name: "Chorale FUPA Voices",
      icon: <Music className="h-6 w-6" />,
      description: "Expression artistique et représentation de l'université",
      activities: ["Concerts", "Cérémonies officielles", "Festivals culturels"],
      members: "25+ étudiants"
    },
    {
      name: "Club Théâtre & Arts",
      icon: <Drama className="h-6 w-6" />,
      description: "Développement des talents artistiques et de la créativité",
      activities: ["Pièces de théâtre", "Sketches", "Festivals d'arts"],
      members: "30+ étudiants"
    },
    {
      name: "Association Caritative FUPA Care",
      icon: <Heart className="h-6 w-6" />,
      description: "Actions solidaires et développement communautaire",
      activities: ["Aide aux démunis", "Parrainage scolaire", "Campagnes de sensibilisation"],
      members: "50+ étudiants"
    }
  ];

  const activities = [
    {
      title: "Semaine d'Intégration",
      period: "Septembre",
      description: "Accueil chaleureux des nouveaux étudiants avec activités ludiques et pédagogiques"
    },
    {
      title: "Forum des Métiers",
      period: "Novembre", 
      description: "Rencontres avec des professionnels et découverte des opportunités de carrière"
    },
    {
      title: "Journées Culturelles FUPA",
      period: "Février",
      description: "Célébration de la diversité culturelle avec spectacles et expositions"
    },
    {
      title: "Concours d'Excellence Académique",
      period: "Avril",
      description: "Compétitions intellectuelles et récompenses des meilleurs étudiants"
    },
    {
      title: "Gala de Fin d'Année",
      period: "Juin",
      description: "Soirée festive de clôture avec remise des diplômes et prix d'excellence"
    }
  ];

  const testimonials = [
    {
      name: "Aminata Koné",
      program: "Master Droit des Affaires",
      photo: null,
      quote: "FUPA m'a donné les outils pour réussir mais aussi un réseau formidable. Les activités du club de débat ont développé ma confiance en moi.",
      achievement: "Stagiaire chez un cabinet d'avocats international"
    },
    {
      name: "Jean-Claude Assi",
      program: "Licence Économie",
      photo: null,
      quote: "L'ambiance familiale de FUPA et les projets entrepreneuriaux m'ont permis de créer ma première entreprise pendant mes études.",
      achievement: "Fondateur d'une startup fintech"
    },
    {
      name: "Marie-Josée Bamba",
      program: "Master Gestion",
      photo: null,
      quote: "Les activités culturelles et caritatives de FUPA ont enrichi mon parcours au-delà du cursus académique. Une expérience humaine unique.",
      achievement: "Responsable RSE dans une multinationale"
    }
  ];

  const audioTestimonials = [
    {
      name: "Koné Bintou",
      program: "Étudiante FUPA",
      audioUrl: "https://soundcloud.com/fupa-612180871/kone-bintou?si=68b1a68a9fcb4dcda93704a37005ade5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      title: "Mon parcours à FUPA m'a transformée",
      description: "Découvrez comment FUPA a changé ma vision de l'excellence académique et m'a préparée pour l'avenir."
    },
    {
      name: "Seka Patrice",
      program: "Étudiant FUPA",
      audioUrl: "https://soundcloud.com/fupa-612180871/seka-patrice?si=ef281d8f998344e19bd86ce80b46483f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      title: "Une formation qui ouvre toutes les portes",
      description: "Écoutez mon témoignage sur la qualité de l'enseignement et les opportunités offertes par FUPA."
    },
    {
      name: "Parent d'étudiant",
      program: "Témoignage parental",
      audioUrl: "https://soundcloud.com/fupa-612180871/m-loup?si=a5738613392347bfb8d70178277afdfa&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      title: "Le choix parfait pour mon enfant",
      description: "Un parent partage son expérience et sa satisfaction du choix de FUPA pour l'éducation de son enfant."
    }
  ];

  const facilities = [
    {
      name: "Bibliothèque Moderne",
      description: "Plus de 15,000 ouvrages et bases de données numériques",
      features: ["Espaces de travail silencieux", "Accès WiFi haut débit", "Salles de groupe"]
    },
    {
      name: "Campus Connecté",
      description: "Infrastructure numérique de pointe pour l'apprentissage",
      features: ["Amphithéâtres équipés", "Visioconférences", "Plateforme e-learning"]
    },
    {
      name: "Espaces de Vie",
      description: "Lieux de détente et de convivialité pour les étudiants",
      features: ["Cafétéria", "Espaces verts", "Salles de réunion étudiantes"]
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
            Vie Étudiante
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Une expérience universitaire riche en apprentissages, rencontres et épanouissement personnel
          </p>
        </div>
      </section>

      {/* Clubs & Associations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Clubs & Associations
            </h2>
            <p className="text-xl text-muted-foreground">
              Développez vos talents et créez des liens durables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <Card key={club.name} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gradient-academic rounded-lg text-white">
                      {club.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">{club.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">
                        <Users className="h-3 w-3 mr-1" />
                        {club.members}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Activités:</h4>
                    <ul className="space-y-1">
                      {club.activities.map((activity) => (
                        <li key={activity} className="flex items-center gap-2 text-sm">
                          <Star className="h-3 w-3 text-accent" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full btn-academic">
                    Rejoindre le club
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activités Culturelles */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Activités & Événements
            </h2>
            <p className="text-xl text-muted-foreground">
              Un calendrier riche en événements tout au long de l'année
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {activities.map((activity, index) => (
              <Card key={activity.title} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-academic rounded-full flex items-center justify-center mb-3">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-primary">{activity.title}</CardTitle>
                  <Badge variant="outline" className="mx-auto">
                    {activity.period}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Témoignages d'Étudiants
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez l'expérience FUPA à travers les yeux de nos étudiants
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-academic mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-primary mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-accent font-semibold mb-2">
                      {testimonial.program}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.achievement}
                    </Badge>
                  </div>
                  
                  <div className="relative bg-card/50 p-4 rounded-lg">
                    <div className="text-4xl text-primary mb-2">"</div>
                    <p className="text-sm italic text-muted-foreground">
                      {testimonial.quote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Témoignages Audio */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                Témoignages Audio
              </h3>
              <p className="text-lg text-muted-foreground">
                Écoutez les expériences de nos étudiants et parents
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {audioTestimonials.map((testimonial, index) => (
                <Card key={testimonial.name} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                        <Volume2 className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-primary mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-accent font-semibold mb-2">
                        {testimonial.program}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{testimonial.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {testimonial.description}
                        </p>
                      </div>
                      
                      <Button 
                        className="w-full btn-academic"
                        onClick={() => window.open(testimonial.audioUrl, '_blank')}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Écouter le témoignage
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Nos Infrastructures
            </h2>
            <p className="text-xl text-muted-foreground">
              Un cadre d'études moderne et stimulant
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={facility.name} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent rounded-lg">
                      <Book className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-primary">{facility.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Équipements:</h4>
                    <ul className="space-y-1">
                      {facility.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Star className="h-3 w-3 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            Rejoignez la Communauté FUPA
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Vivez une expérience universitaire enrichissante dans un environnement stimulant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Camera className="h-5 w-5 mr-2" />
              Galerie Photos/Vidéos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Users className="h-5 w-5 mr-2" />
              Candidater maintenant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentLife;