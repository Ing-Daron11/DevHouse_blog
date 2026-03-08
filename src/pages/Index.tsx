
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import AboutUsSection from '@/components/AboutUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ProcessSection from '@/components/ProcessSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import React from 'react';


const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#22313A] font-sans selection:bg-accent/20">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ProcessSection />
      <PartnersSection />
      <TestimonialsSection />
      <BlogSection />
      <GuaranteesSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;