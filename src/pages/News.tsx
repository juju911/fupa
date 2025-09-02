import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Trophy, Users, BookOpen, GraduationCap } from 'lucide-react';

const News = () => {
  const featuredNews = {
    date: "15 Décembre 2024",
    category: "Urgent",
    title: "Inscription pour la rentrée de Janvier 2025 - Dernières places disponibles",
    excerpt: "Ne manquez pas cette opportunité unique ! Les inscriptions pour le semestre de janvier sont ouvertes avec des places limitées dans nos programmes phares.",
    image: "/api/placeholder/600/300",
    urgent: true
  };

  const newsItems = [
    {
      date: "12 Décembre 2024",
      category: "Académique",
      title: "Soutenance de thèse exceptionnelle en Droit des Affaires",
      excerpt: "L'étudiant Jean-Baptiste Koffi soutiendra sa thèse sur 'L'arbitrage commercial en Afrique de l'Ouest' devant un jury international.",
      image: "/api/placeholder/400/250",
      author: "Dr. Kouamé N'Guessan",
      readTime: "3 min"
    },
    {
      date: "10 Décembre 2024",
      category: "Événement",
      title: "Journée Portes Ouvertes - 20 Décembre 2024",
      excerpt: "Découvrez nos formations, rencontrez l'équipe pédagogique et visitez nos installations modernes lors de notre journée portes ouvertes.",
      image: "/api/placeholder/400/250",
      author: "Service Communication",
      readTime: "2 min"
    },
    {
      date: "8 Décembre 2024",
      category: "Partenariat",
      title: "Nouveau partenariat avec l'Université de Toulouse",
      excerpt: "La FUPA signe un accord de coopération avec l'Université de Toulouse pour des échanges d'étudiants et de professeurs.",
      image: "/api/placeholder/400/250",
      author: "Direction des Relations Internationales",
      readTime: "4 min"
    },
    {
      date: "5 Décembre 2024",
      category: "Réussite",
      title: "Nos étudiants brillent au concours national d'économie",
      excerpt: "Trois étudiants de la FUPA se classent dans le top 10 du concours national d'économie organisé par le Ministère de l'Enseignement Supérieur.",
      image: "/api/placeholder/400/250",
      author: "Département d'Économie",
      readTime: "3 min"
    },
    {
      date: "3 Décembre 2024",
      category: "Innovation",
      title: "Lancement de la plateforme e-learning FUPA Digital",
      excerpt: "Une nouvelle plateforme d'apprentissage en ligne pour compléter les cours en présentiel et offrir plus de flexibilité aux étudiants.",
      image: "/api/placeholder/400/250",
      author: "Service IT",
      readTime: "5 min"
    },
    {
      date: "1er Décembre 2024",
      category: "Recherche",
      title: "Publication remarquée sur l'économie numérique en Afrique",
      excerpt: "Le Pr. Marie Diabaté publie une étude sur l'impact de l'économie numérique dans le développement des pays africains.",
      image: "/api/placeholder/400/250",
      author: "Pr. Marie Diabaté",
      readTime: "6 min"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Académique': return <BookOpen className="h-4 w-4" />;
      case 'Événement': return <Calendar className="h-4 w-4" />;
      case 'Partenariat': return <Users className="h-4 w-4" />;
      case 'Réussite': return <Trophy className="h-4 w-4" />;
      case 'Innovation': return <GraduationCap className="h-4 w-4" />;
      case 'Recherche': return <BookOpen className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Urgent': return 'bg-red-100 text-red-800';
      case 'Académique': return 'bg-blue-100 text-blue-800';
      case 'Événement': return 'bg-green-100 text-green-800';
      case 'Partenariat': return 'bg-purple-100 text-purple-800';
      case 'Réussite': return 'bg-yellow-100 text-yellow-800';
      case 'Innovation': return 'bg-indigo-100 text-indigo-800';
      case 'Recherche': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="section-hero pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero font-heading font-bold text-primary mb-6">
            Actualités & Événements
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Restez informé des dernières nouvelles, événements et réalisations de la FUPA
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className={`card-academic ${featuredNews.urgent ? 'border-red-200 bg-red-50/50' : ''} animate-fade-in`}>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge className={`${getCategoryColor(featuredNews.category)} animate-pulse`}>
                      {featuredNews.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredNews.date}
                    </div>
                  </div>
                  <h2 className="text-card-title font-heading font-semibold text-primary mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <Button className="btn-academic group">
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="lg:order-last">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-64 object-cover rounded-lg shadow-elegant"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="card-academic hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className={`absolute top-3 left-3 ${getCategoryColor(item.category)}`}>
                    <div className="flex items-center space-x-1">
                      {getCategoryIcon(item.category)}
                      <span>{item.category}</span>
                    </div>
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-heading font-semibold text-primary hover:text-secondary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      {item.author}
                    </div>
                    <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary-foreground group">
                      Lire plus
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-section-title font-heading font-semibold text-primary mb-4">
            Ne manquez aucune actualité
          </h3>
          <p className="text-muted-foreground mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles de la FUPA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button className="btn-academic">
              S'abonner
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;