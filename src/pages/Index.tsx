import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StackSection from '@/components/StackSection';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import ProcessSection from '@/components/ProcessSection';
import AboutUsSection from '@/components/AboutUsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <HeroSection />
      <StackSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <AboutUsSection />
      <TestimonialsSection />
      <GuaranteesSection />
      <BlogSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
