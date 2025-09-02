import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Users, Award } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      date: "15 Décembre 2024",
      category: "Admissions",
      title: "Ouverture des inscriptions pour l'année académique 2025-2026",
      excerpt: "Les inscriptions sont désormais ouvertes pour tous nos programmes de Licence et Master. Places limitées.",
      link: "#",
      urgent: true
    },
    {
      date: "10 Décembre 2024",
      category: "Évènement",
      title: "Journée Portes Ouvertes - Samedi 20 Janvier 2025",
      excerpt: "Découvrez nos formations, rencontrez nos enseignants et visitez notre campus moderne.",
      link: "#",
      urgent: false
    },
    {
      date: "5 Décembre 2024",
      category: "Académique",
      title: "Soutenance de thèses de fin d'études Master",
      excerpt: "Nos étudiants de Master présentent leurs projets de recherche devant un jury d'experts.",
      link: "#",
      urgent: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section-title">
            Actualités & Évènements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Restez informé des dernières nouvelles, évènements et opportunités de la FUPA.
          </p>
        </div>

        {/* Bandeau d'actualité urgent */}
        <div className="bg-gradient-primary text-primary-foreground rounded-xl p-6 mb-12 shadow-elegant">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-secondary rounded-full p-2">
                <Users className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">
                  Inscriptions 2025-2026 Ouvertes !
                </h3>
                <p className="text-primary-foreground/80">
                  Rejoignez l'excellence académique - Places limitées, inscrivez-vous dès maintenant.
                </p>
              </div>
            </div>
            <Button className="btn-gold hidden md:inline-flex">
              Je m'inscris
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Grid des actualités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className={`card-academic group cursor-pointer ${item.urgent ? 'ring-2 ring-secondary' : ''}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    item.category === 'Admissions' ? 'bg-secondary/20 text-secondary-dark' :
                    item.category === 'Évènement' ? 'bg-primary/20 text-primary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {item.category}
                  </span>
                  {item.urgent && (
                    <span className="text-xs font-medium px-2 py-1 bg-destructive/20 text-destructive rounded-full">
                      Urgent
                    </span>
                  )}
                </div>
                
                <h3 className="text-card-title group-hover:text-primary-light transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bouton voir toutes les actualités */}
        <div className="text-center">
          <Button variant="outline" className="btn-outline-academic" size="lg">
            Voir toutes les actualités
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;