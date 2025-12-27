import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import React, { useState } from 'react';

// Página principal: Index
// Muestra todas las secciones principales del sitio y permite cambiar el tema visual

// Define los temas disponibles

const Index = () => {

  return (
    // Aplica la clase del tema al contenedor principal
    <div className="min-h-screen">

      {/* Secciones principales de la web */}
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;