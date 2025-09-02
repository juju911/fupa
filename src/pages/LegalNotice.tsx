import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, Globe, Shield, AlertTriangle, FileText } from 'lucide-react';

const LegalNotice = () => {
  const sections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Éditeur du site",
      content: (
        <div className="space-y-3">
          <p><strong>Facultés Universitaires Privées d'Abidjan (FUPA)</strong></p>
          <p><strong>Adresse :</strong> 2 Plateaux Aghien, Carrefour Opéra – Abidjan, Côte d'Ivoire</p>
          <p><strong>Téléphone :</strong> +225 27 22 52 35 27</p>
          <p><strong>Email :</strong> contact@fupa-edu.com</p>
          <p><strong>Site web :</strong> www.fupa-edu.com</p>
          <p><strong>Représentant légal :</strong> Dr. Kouamé N'Guessan</p>
        </div>
      )
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Hébergement",
      content: (
        <div className="space-y-3">
          <p><strong>Le site est hébergé par :</strong> LWS.FR</p>
          <p><strong>Adresse :</strong> RCS Paris B 851 993 683</p>
          <p><strong>Email :</strong> abuse@lws.fr</p>
        </div>
      )
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Propriété intellectuelle",
      content: (
        <div className="space-y-3">
          <p>
            L'ensemble des contenus du site (textes, images, logos, documents, vidéos) 
            est la propriété exclusive de la FUPA ou de ses partenaires.
          </p>
          <p>
            <strong>Toute reproduction, même partielle, est interdite sans autorisation préalable.</strong>
          </p>
        </div>
      )
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Responsabilité",
      content: (
        <div className="space-y-3">
          <p>
            Les informations présentes sur ce site sont fournies à titre indicatif. 
            La FUPA s'efforce de les maintenir à jour mais ne peut être tenue responsable 
            des erreurs, omissions ou inexactitudes.
          </p>
        </div>
      )
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Liens externes",
      content: (
        <div className="space-y-3">
          <p>
            Le site peut contenir des liens vers d'autres sites. La FUPA décline 
            toute responsabilité concernant le contenu de ces sites tiers.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="section-hero pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero font-heading font-bold text-primary mb-6">
            Mentions Légales
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Informations légales relatives au site institutionnel de la FUPA
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="card-academic animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                      {section.icon}
                    </div>
                    <span className="text-primary">{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground leading-relaxed">
                  {section.content}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalNotice;