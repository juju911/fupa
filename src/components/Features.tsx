import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Globe, Briefcase, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Programmes Reconnus",
      description: "Diplômes accrédités et reconnus par l'État, conçus selon les standards internationaux d'excellence académique."
    },
    {
      icon: Users,
      title: "Encadrement Personnalisé",
      description: "Ratio étudiant-professeur optimal garantissant un suivi individualisé et une attention particulière à chaque apprenant."
    },
    {
      icon: Award,
      title: "Excellence Académique",
      description: "Corps professoral qualifié d'enseignants-chercheurs dédiés à la transmission du savoir et à l'innovation pédagogique."
    },
    {
      icon: Globe,
      title: "Ouverture Internationale",
      description: "Partenariats avec des universités prestigieuses et opportunités d'échanges académiques à l'international."
    },
    {
      icon: Briefcase,
      title: "Insertion Professionnelle",
      description: "Accompagnement carrière, stages en entreprise et réseau alumni actif pour faciliter l'insertion professionnelle."
    },
    {
      icon: Star,
      title: "Innovation Pédagogique",
      description: "Méthodes d'enseignement modernes, outils numériques avancés et approches pédagogiques innovantes."
    }
  ];

  return (
    <section className="section-academic py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title">
            Pourquoi Choisir la FUPA ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les atouts qui font de la FUPA un choix d'excellence pour votre formation universitaire 
            et votre développement professionnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="card-feature group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-card-title">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-heading font-bold text-primary-foreground mb-8">
            La FUPA en Chiffres
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-primary-foreground">Programmes de formation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">2000+</div>
              <div className="text-primary-foreground">Diplômés depuis 2010</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-primary-foreground">Taux de réussite</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <div className="text-primary-foreground">Partenaires internationaux</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;