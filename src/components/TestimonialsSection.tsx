import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Volume2, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aminata Koné",
      program: "Master Droit des Affaires",
      quote: "FUPA m'a donné les outils pour réussir mais aussi un réseau formidable. Les activités du club de débat ont développé ma confiance en moi.",
      achievement: "Stagiaire chez un cabinet d'avocats international",
      type: "text"
    },
    {
      name: "Koné Bintou",
      program: "Étudiante FUPA",
      title: "Mon parcours à FUPA m'a transformée",
      description: "Découvrez comment FUPA a changé ma vision de l'excellence académique.",
      audioUrl: "https://soundcloud.com/fupa-612180871/kone-bintou?si=68b1a68a9fcb4dcda93704a37005ade5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      type: "audio"
    },
    {
      name: "Jean-Claude Assi",
      program: "Licence Économie",
      quote: "L'ambiance familiale de FUPA et les projets entrepreneuriaux m'ont permis de créer ma première entreprise pendant mes études.",
      achievement: "Fondateur d'une startup fintech",
      type: "text"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Témoignages de Notre Communauté
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez les expériences de nos étudiants et leurs réussites
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    testimonial.type === 'audio' 
                      ? 'bg-gradient-to-br from-primary to-accent' 
                      : 'bg-gradient-academic'
                  }`}>
                    {testimonial.type === 'audio' ? (
                      <Volume2 className="h-10 w-10 text-white" />
                    ) : (
                      <Users className="h-10 w-10 text-white" />
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-2">
                    {testimonial.program}
                  </p>
                  {testimonial.achievement && (
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.achievement}
                    </Badge>
                  )}
                </div>
                
                {testimonial.type === 'text' ? (
                  <div className="relative bg-card/50 p-4 rounded-lg">
                    <div className="text-4xl text-primary mb-2">"</div>
                    <p className="text-sm italic text-muted-foreground">
                      {testimonial.quote}
                    </p>
                  </div>
                ) : (
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
                      Écouter
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/vie-etudiante">
            <Button size="lg" className="btn-academic">
              Voir tous les témoignages
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;