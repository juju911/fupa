import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Phone, Mail } from 'lucide-react';
import campusHero from '@/assets/campus-hero.jpg';
import directorPortrait from '@/assets/director-portrait.jpg';

const HeroSection = () => {
  return (
    <section className="section-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={campusHero} 
          alt="Campus FUPA" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-hero mb-6">
              Façonnez votre <span className="text-secondary">Avenir</span> avec Excellence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Rejoignez la FUPA, une institution d'excellence académique qui forme les leaders de demain 
              avec des programmes reconnus et un encadrement personnalisé.
            </p>
            
            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">95%</div>
                <div className="text-sm text-primary-foreground/80">Taux de réussite</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-primary-foreground/80">Formations</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">2000+</div>
                <div className="text-sm text-primary-foreground/80">Diplômés</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-gold text-lg px-8">
                <Mail className="mr-2 h-5 w-5" />
                Demander des informations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Télécharger la brochure
              </Button>
            </div>
          </div>

          {/* Director Message */}
          <div className="bg-primary-foreground/95 backdrop-blur-sm rounded-xl p-8 shadow-elegant animate-fade-up">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src={directorPortrait} 
                alt="Directeur Général FUPA" 
                className="w-20 h-20 rounded-full object-cover border-4 border-secondary"
              />
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  Message du Directeur Général
                </h3>
                <p className="text-sm text-muted-foreground">
                  Prof. Dr. Kouamé N'Guessan
                </p>
              </div>
            </div>
            
            <blockquote className="text-foreground leading-relaxed mb-4">
              "Bienvenue à la FUPA, où l'excellence académique rencontre l'innovation pédagogique. 
              Nous nous engageons à former les leaders éclairés de demain dans un environnement 
              stimulant qui privilégie la réussite de chaque étudiant."
            </blockquote>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                +225 27 22 52 35 27
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                direction@fupa-edu.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;