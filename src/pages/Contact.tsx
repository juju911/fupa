import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Facebook, 
  Twitter, 
  MessageCircle,
  Building,
  Users,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      title: "Adresse",
      icon: <MapPin className="h-6 w-6" />,
      details: [
        "2 Plateaux Aghien",
        "Carrefour Opéra",
        "Abidjan, Côte d'Ivoire"
      ],
      color: "bg-primary"
    },
    {
      title: "Téléphone",
      icon: <Phone className="h-6 w-6" />,
      details: [
        "+225 27 22 52 35 27",
        "+225 01 02 03 04 05",
        "WhatsApp disponible"
      ],
      color: "bg-accent"
    },
    {
      title: "Email",
      icon: <Mail className="h-6 w-6" />,
      details: [
        "contact@fupa-edu.com",
        "admission@fupa-edu.com", 
        "info@fupa-edu.com"
      ],
      color: "bg-gradient-academic"
    },
    {
      title: "Horaires",
      icon: <Clock className="h-6 w-6" />,
      details: [
        "Lundi - Vendredi : 8h - 17h",
        "Samedi : 8h - 12h",
        "Dimanche : Fermé"
      ],
      color: "bg-accent"
    }
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      handle: "@fupa.abidjan",
      url: "https://facebook.com/fupa.abidjan",
      color: "bg-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      handle: "@FUPA_Abidjan",
      url: "https://twitter.com/fupa_abidjan", 
      color: "bg-sky-500"
    },
    {
      name: "TikTok",
      icon: <MessageCircle className="h-5 w-5" />,
      handle: "@fupa_officiel",
      url: "https://tiktok.com/@fupa_officiel",
      color: "bg-pink-600"
    }
  ];

  const departments = [
    {
      name: "Direction Générale",
      contact: "direction@fupa-edu.com",
      phone: "+225 27 22 52 35 27",
      icon: <Building className="h-5 w-5" />
    },
    {
      name: "Admissions",
      contact: "admission@fupa-edu.com", 
      phone: "+225 27 22 52 35 28",
      icon: <Users className="h-5 w-5" />
    },
    {
      name: "Vie Étudiante",
      contact: "etudiants@fupa-edu.com",
      phone: "+225 27 22 52 35 29",
      icon: <Calendar className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-academic text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet académique
          </p>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Nos Coordonnées
            </h2>
            <p className="text-xl text-muted-foreground">
              Plusieurs moyens pour nous joindre facilement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 ${info.color} rounded-full flex items-center justify-center mb-4 text-white`}>
                    {info.icon}
                  </div>
                  <CardTitle className="text-primary">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Envoyez-nous un Message
            </h2>
            <p className="text-xl text-muted-foreground">
              Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
            </p>
          </div>

          <Card className="hover:shadow-elegant transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-primary">Formulaire de Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactFirstName">Prénom *</Label>
                  <Input id="contactFirstName" placeholder="Votre prénom" />
                </div>
                <div>
                  <Label htmlFor="contactLastName">Nom *</Label>
                  <Input id="contactLastName" placeholder="Votre nom" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactEmail">Email *</Label>
                  <Input id="contactEmail" type="email" placeholder="votre.email@exemple.com" />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Téléphone</Label>
                  <Input id="contactPhone" placeholder="+225 XX XX XX XX XX" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactSubject">Sujet de votre demande *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un sujet" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admission">Demande d'admission</SelectItem>
                      <SelectItem value="info-programmes">Informations sur les programmes</SelectItem>
                      <SelectItem value="frais">Questions sur les frais</SelectItem>
                      <SelectItem value="vie-etudiante">Vie étudiante</SelectItem>
                      <SelectItem value="partenariats">Partenariats</SelectItem>
                      <SelectItem value="autre">Autre demande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="contactDepartment">Service destinataire</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admission">Service Admissions</SelectItem>
                      <SelectItem value="direction">Direction</SelectItem>
                      <SelectItem value="vie-etudiante">Vie Étudiante</SelectItem>
                      <SelectItem value="scolarite">Scolarité</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="contactMessage">Votre message *</Label>
                <Textarea 
                  id="contactMessage" 
                  placeholder="Décrivez votre demande en détail..."
                  className="h-32"
                />
              </div>

              <Button className="w-full btn-academic">
                <Send className="h-4 w-4 mr-2" />
                Envoyer le message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services et départements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Contacts par Service
            </h2>
            <p className="text-xl text-muted-foreground">
              Contactez directement le service concerné par votre demande
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={dept.name} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-academic rounded-lg text-white">
                      {dept.icon}
                    </div>
                    <CardTitle className="text-primary">{dept.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-accent" />
                    <span className="font-medium">{dept.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="font-medium">{dept.phone}</span>
                  </div>
                  <Button className="w-full btn-academic">
                    Contacter ce service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Réseaux sociaux */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Suivez-nous sur les Réseaux Sociaux
            </h2>
            <p className="text-xl text-muted-foreground">
              Restez informés de toutes nos actualités et événements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {socialMedia.map((social, index) => (
              <Card key={social.name} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 ${social.color} rounded-full flex items-center justify-center mb-4 text-white`}>
                    {social.icon}
                  </div>
                  <CardTitle className="text-primary">{social.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-medium">{social.handle}</p>
                  <Button className="w-full btn-academic">
                    Suivre sur {social.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plan d'accès */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Plan d'Accès
            </h2>
            <p className="text-xl text-muted-foreground">
              Trouvez facilement notre campus
            </p>
          </div>

          <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-academic text-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-6 w-6" />
                  <h3 className="text-xl font-heading font-bold">Campus FUPA</h3>
                </div>
                <p className="text-white/90">
                  2 Plateaux Aghien, Carrefour Opéra<br />
                  Abidjan, Côte d'Ivoire
                </p>
              </div>
              
              {/* Ici on peut intégrer Google Maps ou une carte */}
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Carte Google Maps intégrée<br />
                    (À configurer avec les coordonnées exactes)
                  </p>
                  <Button className="mt-4 btn-academic">
                    Ouvrir dans Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-academic text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Prêt à nous rencontrer ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Venez découvrir notre campus et rencontrer nos équipes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Calendar className="h-5 w-5 mr-2" />
              Prendre rendez-vous
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <MapPin className="h-5 w-5 mr-2" />
              Itinéraire
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;