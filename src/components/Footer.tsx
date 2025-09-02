import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  Youtube,
  Download,
  BookOpen,
  Users,
  GraduationCap
} from 'lucide-react';
import fupaLogo from '@/assets/fupa-logo.png';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { useState, useEffect } from 'react';

const Footer = () => {
  const { submitNewsletterForm, isLoading } = useFormSubmission();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    const result = await submitNewsletterForm({ email });
    if (result.success) {
      setEmail('');
    }
  };
  const quickLinks = [
    { name: 'Admissions', href: '#admissions' },
    { name: 'Formations', href: '#programs' },
    { name: 'Calendrier académique', href: '#calendar' },
    { name: 'Frais de scolarité', href: '#fees' },
    { name: 'Bourses d\'études', href: '#scholarships' },
  ];

  const programs = [
    { name: 'Licence en Droit', href: '#law' },
    { name: 'Master en Économie', href: '#economics' },
    { name: 'Licence en Gestion', href: '#management' },
    { name: 'Master en Droit Privé', href: '#private-law' },
    { name: 'Formation Continue', href: '#continuing-education' },
  ];

  const resources = [
    { name: 'Brochure FUPA 2025', href: '#brochure', icon: Download },
    { name: 'Règlement intérieur', href: '#regulations', icon: BookOpen },
    { name: 'Guide de l\'étudiant', href: '#student-guide', icon: Users },
    { name: 'Catalogue des cours', href: '#catalog', icon: GraduationCap },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-2">
                Restez Informé
              </h3>
              <p className="text-primary-foreground/80">
                Recevez les dernières actualités, événements et opportunités de la FUPA.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="btn-gold px-8" disabled={isLoading}>
                {isLoading ? 'Inscription...' : 'S\'abonner'}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Institution Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={fupaLogo} 
                alt="FUPA Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-heading font-semibold text-lg">FUPA</h3>
                <p className="text-sm text-primary-foreground/80">Excellence Académique</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Facultés Universitaires Privées d'Abidjan - Votre partenaire pour une formation 
              d'excellence et une insertion professionnelle réussie.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  2 Plateaux Aghien Carrefour Opéra<br />
                  Abidjan, Côte d'Ivoire
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  +225 27 22 52 35 27
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-sm text-primary-foreground/80">
                  contact@fupa-edu.com
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Nos Formations
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">
              Ressources
            </h4>
            <ul className="space-y-3">
              {resources.map((resource) => {
                const Icon = resource.icon;
                return (
                  <li key={resource.name}>
                    <a 
                      href={resource.href}
                      className="flex items-center space-x-2 text-sm text-primary-foreground/80 hover:text-secondary transition-colors duration-200 group"
                    >
                      <Icon className="h-4 w-4 group-hover:text-secondary" />
                      <span>{resource.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-medium mb-4">Suivez-nous</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/fupaabidjan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                  aria-label="Facebook FUPA"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/Fupa_Abidjan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                  aria-label="Twitter FUPA"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/fupa_abidjan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                  aria-label="Instagram FUPA"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com/@fupaabidjan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200"
                  aria-label="YouTube FUPA"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © 2024 Facultés Universitaires Privées d'Abidjan (FUPA). Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Conditions d'utilisation
              </a>
              <a href="/legal-notice" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;