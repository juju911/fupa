import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Mail, Linkedin, Award, BookOpen, Users } from 'lucide-react';
import directorPortrait from '@/assets/director-portrait.jpg';

const Team = () => {
  const leadership = [
    {
      name: "Prof. Dr. Kouassi N'Guessan",
      position: "Directeur Général",
      image: directorPortrait,
      expertise: ["Droit des Affaires", "Gouvernance", "Management Stratégique"],
      quote: "L'excellence académique est notre engagement quotidien envers nos étudiants.",
      bio: "Docteur en Droit avec plus de 20 ans d'expérience dans l'enseignement supérieur et la direction d'institutions académiques.",
      email: "directeur@fupa-edu.com"
    },
    {
      name: "Dr. Marie-Claire Adjoumani",
      position: "Doyenne - Faculté de Droit",
      expertise: ["Droit International", "Droit Constitutionnel", "Droits Humains"],
      quote: "Former les juristes de demain avec une vision internationale et éthique.",
      bio: "Ancienne magistrate, docteure en Droit International, spécialiste des institutions africaines.",
      email: "droit@fupa-edu.com"
    },
    {
      name: "Prof. Jean-Baptiste Koné",
      position: "Doyen - Faculté d'Économie",
      expertise: ["Économie du Développement", "Finance", "Économétrie"],
      quote: "L'économie africaine a besoin d'experts formés aux réalités locales et globales.",
      bio: "Ancien consultant Banque Mondiale, expert en développement économique africain.",
      email: "economie@fupa-edu.com"
    },
    {
      name: "Dr. Fatou Traoré",
      position: "Doyenne - Faculté de Gestion",
      expertise: ["Management", "Marketing", "Entrepreneuriat"],
      quote: "Cultiver l'esprit entrepreneurial pour transformer l'Afrique.",
      bio: "MBA Harvard Business School, spécialiste du management africain et de l'entrepreneuriat.",
      email: "gestion@fupa-edu.com"
    }
  ];

  const faculty = [
    {
      name: "Dr. Amadou Diallo",
      position: "Professeur de Droit Commercial",
      expertise: ["Droit OHADA", "Droit des Sociétés"],
      experience: "15 ans"
    },
    {
      name: "Dr. Akissi Yao",
      position: "Professeure d'Économie Internationale",
      expertise: ["Commerce International", "Intégration Régionale"],
      experience: "12 ans"
    },
    {
      name: "Dr. Philippe Kouamé",
      position: "Professeur de Finance",
      expertise: ["Finance d'Entreprise", "Marchés Financiers"],
      experience: "18 ans"
    },
    {
      name: "Dr. Aminata Bah",
      position: "Professeure de Management",
      expertise: ["Leadership", "Gestion des Ressources Humaines"],
      experience: "10 ans"
    }
  ];

  const administration = [
    {
      name: "Sébastien Ouattara",
      position: "Directeur des Admissions",
      department: "Admission & Orientation"
    },
    {
      name: "Mariam Touré",
      position: "Directrice de la Vie Étudiante",
      department: "Affaires Étudiantes"
    },
    {
      name: "Emmanuel Assi",
      position: "Directeur Financier",
      department: "Finance & Administration"
    },
    {
      name: "Isabelle Dosso",
      position: "Directrice des Relations Internationales",
      department: "Partenariats"
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
            Notre Équipe
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Des experts passionnés au service de votre réussite académique et professionnelle
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Direction & Doyens
            </h2>
            <p className="text-xl text-muted-foreground">
              Une équipe dirigeante expérimentée et visionnaire
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {leadership.map((member, index) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                        />
                      ) : (
                        <div className="w-32 h-32 rounded-full bg-gradient-academic mx-auto md:mx-0 flex items-center justify-center">
                          <Users className="h-16 w-16 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-heading font-bold text-primary mb-1">
                        {member.name}
                      </h3>
                      <p className="text-accent font-semibold mb-3">{member.position}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="relative bg-card/50 p-4 rounded-lg mb-4">
                        <Quote className="h-5 w-5 text-primary mb-2" />
                        <p className="text-sm italic text-muted-foreground">
                          "{member.quote}"
                        </p>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {member.bio}
                      </p>
                      
                      <div className="flex gap-3 justify-center md:justify-start">
                        <a 
                          href={`mailto:${member.email}`}
                          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                        <a 
                          href="#"
                          className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Corps Professoral
            </h2>
            <p className="text-xl text-muted-foreground">
              Des enseignants-chercheurs de renommée internationale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((professor, index) => (
              <Card key={professor.name} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-academic mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-primary mb-1">
                    {professor.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-3">
                    {professor.position}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {professor.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs block">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    {professor.experience} d'expérience
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Équipe Administrative
            </h2>
            <p className="text-xl text-muted-foreground">
              Des responsables dédiés à votre accompagnement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {administration.map((staff, index) => (
              <Card key={staff.name} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-primary mb-1">
                    {staff.name}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-2">
                    {staff.position}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {staff.department}
                  </p>
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

export default Team;