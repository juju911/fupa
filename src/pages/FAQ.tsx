import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Mail, Clock, HelpCircle, Users, GraduationCap, CreditCard } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: "Admission & Candidature",
      icon: <GraduationCap className="h-5 w-5" />,
      questions: [
        {
          question: "Quelles sont les conditions pour intégrer FUPA ?",
          answer: "Pour intégrer FUPA, vous devez avoir le baccalauréat (toutes séries) avec une moyenne minimale de 10/20. Nous acceptons également les passerelles (BTS/DUT) et les équivalences de diplômes étrangers après évaluation."
        },
        {
          question: "Comment se déroule le processus d'admission ?",
          answer: "Le processus comprend : 1) Dépôt du dossier de candidature (avril-juillet), 2) Étude du dossier par nos commissions, 3) Entretien individuel et/ou test écrit si nécessaire, 4) Notification des résultats (août), 5) Confirmation d'inscription avec paiement."
        },
        {
          question: "Peut-on s'inscrire en cours d'année ?",
          answer: "Les inscriptions se font principalement en septembre. Cependant, des inscriptions tardives peuvent être acceptées jusqu'en octobre selon les places disponibles et après validation pédagogique."
        },
        {
          question: "Y a-t-il des bourses d'études disponibles ?",
          answer: "FUPA propose des réductions de frais pour les étudiants méritants (excellents résultats), les situations sociales particulières, et les fratries. Des partenariats avec des organismes permettent aussi des financements."
        }
      ]
    },
    {
      title: "Programmes & Pédagogie",
      icon: <HelpCircle className="h-5 w-5" />,
      questions: [
        {
          question: "Quels diplômes délivre FUPA ?",
          answer: "FUPA délivre des Licences (Bac+3) et Masters (Bac+5) en Droit, Économie et Gestion, reconnus par l'État ivoirien et dans l'espace CAMES. Nous proposons aussi des certificats de formation continue."
        },
        {
          question: "Les diplômes sont-ils reconnus internationalement ?",
          answer: "Oui, nos diplômes sont reconnus dans l'espace CAMES (16 pays africains) et par nos universités partenaires en Europe et en Amérique du Nord grâce à nos accords de coopération académique."
        },
        {
          question: "Combien d'étudiants par classe ?",
          answer: "Nous privilégions les petites promotions avec maximum 35 étudiants par classe en Licence et 25 en Master pour garantir un encadrement personnalisé et des échanges de qualité avec les enseignants."
        },
        {
          question: "Y a-t-il des stages obligatoires ?",
          answer: "Oui, chaque programme inclut des stages pratiques : 2 mois en Licence (fin de 2ème année) et 3-6 mois en Master. Nous aidons les étudiants à trouver des stages dans nos entreprises partenaires."
        }
      ]
    },
    {
      title: "Vie Étudiante",
      icon: <Users className="h-5 w-5" />,
      questions: [
        {
          question: "Existe-t-il des logements étudiants ?",
          answer: "FUPA ne dispose pas de résidences universitaires mais nous aidons les étudiants à trouver des logements près du campus. Nous avons des partenariats avec des résidences privées offrant des tarifs préférentiels."
        },
        {
          question: "Quelles activités extra-académiques proposez-vous ?",
          answer: "FUPA dispose de nombreux clubs : débat juridique, entrepreneuriat, chorale, théâtre, association caritative. Nous organisons aussi des conférences, forums métiers, et événements culturels tout au long de l'année."
        },
        {
          question: "Comment se passe l'intégration des nouveaux étudiants ?",
          answer: "Chaque rentrée commence par une semaine d'intégration avec : présentation de l'université, visite du campus, activités ludiques, rencontres avec les anciens, et présentation des clubs et associations."
        },
        {
          question: "Y a-t-il une bibliothèque sur le campus ?",
          answer: "Oui, notre bibliothèque moderne dispose de plus de 15,000 ouvrages, bases de données numériques, espaces de travail silencieux, salles de groupe, et un accès WiFi haut débit. Ouverte 6j/7."
        }
      ]
    },
    {
      title: "Frais & Paiements",
      icon: <CreditCard className="h-5 w-5" />,
      questions: [
        {
          question: "Quel est le coût total des études ?",
          answer: "Licence : 3,250,000 FCFA/an (750,000 inscription + 2,500,000 scolarité). Master : 4,500,000 FCFA/an (1,000,000 inscription + 3,500,000 scolarité). Réduction de 5% pour paiement unique avant septembre."
        },
        {
          question: "Peut-on payer en plusieurs fois ?",
          answer: "Oui, nous proposons : paiement en 3 fois (40%-30%-30%) ou mensuel sur 9 mois. Le premier versement est obligatoire à l'inscription pour confirmer la place."
        },
        {
          question: "Que comprennent les frais de scolarité ?",
          answer: "Les frais incluent : cours, examens, documentation pédagogique, accès bibliothèque et WiFi, activités étudiantes, assurance scolaire, et suivi pédagogique personnalisé. Les stages et certains événements peuvent nécessiter des frais supplémentaires."
        },
        {
          question: "Quels sont les moyens de paiement acceptés ?",
          answer: "Nous acceptons : espèces, chèques, virements bancaires, cartes bancaires, et mobile money (Orange Money, MTN MoMo). Un reçu officiel est délivré pour chaque paiement."
        }
      ]
    }
  ];

  const contactMethods = [
    {
      title: "Par téléphone",
      icon: <Phone className="h-6 w-6" />,
      info: "+225 27 22 52 35 27",
      schedule: "Lun-Ven : 8h-17h",
      color: "bg-primary"
    },
    {
      title: "Par email",
      icon: <Mail className="h-6 w-6" />,
      info: "admission@fupa-edu.com",
      schedule: "Réponse sous 24h",
      color: "bg-accent"
    },
    {
      title: "Sur place",
      icon: <Users className="h-6 w-6" />,
      info: "2 Plateaux Aghien",
      schedule: "Lun-Ven : 8h-16h",
      color: "bg-gradient-academic"
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
            Questions Fréquentes
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Trouvez rapidement les réponses à toutes vos questions sur FUPA
          </p>
        </div>
      </section>

      {/* FAQ par catégories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="mb-8 hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <div className="p-2 bg-gradient-academic rounded-lg text-white">
                    {category.icon}
                  </div>
                  {category.title}
                  <Badge variant="secondary" className="ml-auto">
                    {category.questions.length} questions
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section statistiques FAQ */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Besoin d'aide supplémentaire ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 ${method.color} rounded-full flex items-center justify-center mb-4 text-white`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-primary">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="font-semibold text-lg">{method.info}</div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {method.schedule}
                  </div>
                  <Button className="w-full btn-academic">
                    Contacter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Questions populaires */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Questions les Plus Fréquentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Les questions que se posent le plus souvent nos futurs étudiants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  "Puis-je travailler pendant mes études ?"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Oui, nos cours sont organisés pour permettre aux étudiants de concilier études et activité professionnelle. 
                  Certains programmes proposent des cours du soir ou en weekend.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  "Comment se déroulent les examens ?"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contrôles continus + examens de fin de semestre. Possibilité de rattrapage en septembre. 
                  Système LMD avec capitalisation des crédits acquis.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  "Quelle est la durée des études ?"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Licence : 3 ans (6 semestres). Master : 2 ans (4 semestres). 
                  Possibilité d'accélération ou de parcours personnalisé selon le profil.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  "Y a-t-il un suivi après diplomation ?"
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Oui, nous avons un réseau alumni actif, un service d'aide à l'insertion professionnelle, 
                  et des formations continues pour nos diplômés.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-academic text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Votre Question n'est pas ici ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            N'hésitez pas à nous contacter, nous sommes là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <MessageCircle className="h-5 w-5 mr-2" />
              Poser une question
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              Nous appeler
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;