import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  FileText, 
  Calendar,
  Euro, 
  CheckCircle, 
  Clock, 
  Users, 
  GraduationCap,
  Download,
  Send,
  CreditCard,
  PiggyBank
} from 'lucide-react';

const Admissions = () => {
  const requirements = {
    nouveauxBacheliers: [
      "Baccalauréat toutes séries (minimum 10/20)",
      "Copie certifiée conforme du diplôme",
      "Relevé de notes du baccalauréat",
      "Acte de naissance ou CNI",
      "4 photos d'identité récentes",
      "Certificat médical",
      "Dossier de candidature complété"
    ],
    passerelles: [
      "Diplôme BTS/DUT ou équivalent",
      "Relevés de notes des 2 années post-bac",
      "Attestation de niveau d'études",
      "Lettre de motivation",
      "CV détaillé",
      "Recommandations académiques"
    ],
    equivalences: [
      "Diplômes étrangers avec équivalence",
      "Traduction certifiée des documents",
      "Évaluation du dossier par commission",
      "Entretien de motivation",
      "Test de niveau si nécessaire"
    ]
  };

  const calendar = [
    {
      event: "Ouverture des candidatures",
      dates: "15 Avril - 15 Juillet",
      description: "Période de dépôt des dossiers de candidature"
    },
    {
      event: "Étude des dossiers",
      dates: "16 Juillet - 31 Juillet", 
      description: "Examen des candidatures par les commissions"
    },
    {
      event: "Entretiens & Tests",
      dates: "1er - 15 Août",
      description: "Entretiens individuels et tests d'admission"
    },
    {
      event: "Publication des résultats",
      dates: "20 Août",
      description: "Notification des décisions d'admission"
    },
    {
      event: "Confirmation d'inscription",
      dates: "21 Août - 5 Septembre",
      description: "Validation définitive avec paiement"
    },
    {
      event: "Rentrée académique",
      dates: "11 Septembre",
      description: "Début des cours et semaine d'intégration"
    }
  ];

  const fees = {
    licence: {
      droits: "750,000 FCFA",
      scolarite: "2,500,000 FCFA",
      total: "3,250,000 FCFA"
    },
    master: {
      droits: "1,000,000 FCFA", 
      scolarite: "3,500,000 FCFA",
      total: "4,500,000 FCFA"
    }
  };

  const paymentOptions = [
    {
      title: "Paiement unique",
      discount: "5% de réduction",
      description: "Règlement intégral avant le 30 septembre",
      icon: <PiggyBank className="h-6 w-6" />
    },
    {
      title: "Paiement en 3 fois",
      schedule: "40% - 30% - 30%",
      description: "3 échéances réparties sur l'année",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      title: "Paiement mensuel", 
      schedule: "9 versements",
      description: "Facilité de paiement étalée",
      icon: <Calendar className="h-6 w-6" />
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
            Admissions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Rejoignez FUPA et commencez votre parcours vers l'excellence académique
          </p>
        </div>
      </section>

      {/* Conditions d'admission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Conditions d'Admission
            </h2>
            <p className="text-xl text-muted-foreground">
              Différentes voies d'accès selon votre profil
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-academic rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary">Nouveaux Bacheliers</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {requirements.nouveauxBacheliers.map((req, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary">Passerelles (Bac+2)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {requirements.passerelles.map((req, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-academic rounded-lg">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary">Équivalences</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {requirements.equivalences.map((req, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendrier académique */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Calendrier d'Admission 2024-2025
            </h2>
            <p className="text-xl text-muted-foreground">
              Étapes clés du processus d'admission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calendar.map((item, index) => (
              <Card key={item.event} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-academic rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">{item.event}</CardTitle>
                      <Badge variant="secondary" className="mt-1">{item.dates}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Frais de scolarité */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Frais de Scolarité
            </h2>
            <p className="text-xl text-muted-foreground">
              Tarifs transparents et modalités de paiement flexibles
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-academic rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary">Programmes de Licence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-card/50 rounded">
                  <span>Droits d'inscription</span>
                  <Badge variant="secondary">{fees.licence.droits}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-card/50 rounded">
                  <span>Frais de scolarité annuelle</span>
                  <Badge variant="secondary">{fees.licence.scolarite}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded font-semibold">
                  <span className="text-primary">Total annuel</span>
                  <Badge className="bg-primary text-white">{fees.licence.total}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-primary">Programmes de Master</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-card/50 rounded">
                  <span>Droits d'inscription</span>
                  <Badge variant="secondary">{fees.master.droits}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-card/50 rounded">
                  <span>Frais de scolarité annuelle</span>
                  <Badge variant="secondary">{fees.master.scolarite}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded font-semibold">
                  <span className="text-primary">Total annuel</span>
                  <Badge className="bg-primary text-white">{fees.master.total}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Modalités de paiement */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Modalités de Paiement
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {paymentOptions.map((option, index) => (
              <Card key={option.title} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-academic rounded-full flex items-center justify-center mb-3 text-white">
                    {option.icon}
                  </div>
                  <CardTitle className="text-primary">{option.title}</CardTitle>
                  {option.discount && <Badge variant="destructive">{option.discount}</Badge>}
                  {option.schedule && <Badge variant="secondary">{option.schedule}</Badge>}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de pré-inscription */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Procédure d'Inscription en Ligne
            </h2>
            <p className="text-xl text-muted-foreground">
              Commencez votre candidature dès maintenant
            </p>
          </div>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-primary">Formulaire de Pré-inscription</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="votre.email@exemple.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input id="phone" placeholder="+225 XX XX XX XX XX" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="program">Programme souhaité *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un programme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="licence-droit">Licence en Droit</SelectItem>
                      <SelectItem value="licence-economie">Licence en Économie</SelectItem>
                      <SelectItem value="licence-gestion">Licence en Gestion</SelectItem>
                      <SelectItem value="master-droit">Master en Droit Privé</SelectItem>
                      <SelectItem value="master-economie">Master en Économie Appliquée</SelectItem>
                      <SelectItem value="master-gestion">Master en Gestion des Entreprises</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="level">Niveau d'études *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Votre niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bac">Bachelier</SelectItem>
                      <SelectItem value="bac2">Bac+2 (BTS/DUT)</SelectItem>
                      <SelectItem value="licence">Licence/Bac+3</SelectItem>
                      <SelectItem value="master">Master/Bac+5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="motivation">Motivation *</Label>
                <Textarea 
                  id="motivation" 
                  placeholder="Expliquez brièvement votre motivation pour intégrer FUPA..."
                  className="h-32"
                />
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 btn-academic">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer la candidature
                </Button>
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger le dossier
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-academic text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Besoin d'aide pour votre candidature ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Notre équipe d'admission est là pour vous accompagner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Users className="h-5 w-5 mr-2" />
              Prendre rendez-vous
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Download className="h-5 w-5 mr-2" />
              Guide du candidat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;