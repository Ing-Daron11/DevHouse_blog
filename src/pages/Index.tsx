import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500/30">
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;