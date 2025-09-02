import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Database, Users, Lock, Eye, Cookie, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Collecte des données personnelles",
      content: (
        <div className="space-y-3">
          <p>
            La FUPA peut collecter des informations personnelles lors des inscriptions, 
            demandes de renseignements, newsletters ou participations à des événements.
          </p>
          <p><strong>Exemples :</strong> nom, prénom, email, téléphone, adresse, informations académiques.</p>
        </div>
      )
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Utilisation des données",
      content: (
        <div className="space-y-3">
          <p><strong>Les données sont utilisées uniquement pour :</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>gérer les inscriptions et la scolarité,</li>
            <li>communiquer avec les étudiants et parents,</li>
            <li>envoyer des informations institutionnelles,</li>
            <li>améliorer la qualité des services.</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Partage des données",
      content: (
        <div className="space-y-3">
          <p><strong>Les données ne sont jamais vendues ni cédées à des tiers.</strong></p>
          <p>Elles peuvent être partagées uniquement avec :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>des partenaires académiques,</li>
            <li>des prestataires techniques (hébergement, maintenance).</li>
          </ul>
        </div>
      )
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Protection des données",
      content: (
        <div className="space-y-3">
          <p>
            La FUPA met en œuvre des mesures techniques et organisationnelles pour 
            sécuriser les données contre toute perte, vol ou accès non autorisé.
          </p>
        </div>
      )
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Droits des utilisateurs",
      content: (
        <div className="space-y-3">
          <p>
            Conformément à la réglementation, chaque utilisateur dispose d'un droit 
            d'accès, de rectification et de suppression de ses données personnelles.
          </p>
          <p><strong>Demande par email à :</strong> contact@fupa-edu.com</p>
        </div>
      )
    },
    {
      icon: <Cookie className="h-6 w-6" />,
      title: "Cookies",
      content: (
        <div className="space-y-3">
          <p>
            Le site utilise des cookies pour améliorer l'expérience utilisateur 
            et analyser la fréquentation.
          </p>
          <p>
            Chaque utilisateur peut configurer son navigateur pour refuser ou 
            limiter les cookies.
          </p>
        </div>
      )
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Modification",
      content: (
        <div className="space-y-3">
          <p>
            Cette politique peut être mise à jour. La date de dernière mise à jour 
            sera affichée en haut de la page.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Dernière mise à jour :</strong> Décembre 2024
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
            Politique de Confidentialité
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Protection et utilisation des données personnelles à la FUPA
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

export default PrivacyPolicy;