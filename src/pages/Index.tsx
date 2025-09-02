import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import NewsSection from '@/components/NewsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
