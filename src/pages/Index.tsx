import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import React, { useState } from 'react';

// Define los temas disponibles
const themes = {
  premium: 'premium',
  claro: 'claro',
  dark: 'dark'
};

const Index = () => {
  // El estado inicial del tema, puedes elegir el que prefieras
  const [currentTheme, setCurrentTheme] = useState(themes.premium);

  // Función para cambiar el tema
  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  return (
    // Agrega la clase del tema al div principal
    <div className={`min-h-screen ${currentTheme}`}>
      {/* Selector de tema (ejemplo) */}
      <div className="fixed top-4 right-4 z-50">
        <button 
          onClick={() => handleThemeChange(themes.premium)} 
          className="mr-2 px-4 py-2 rounded-full bg-card text-foreground"
        >
          Premium
        </button>
        <button 
          onClick={() => handleThemeChange(themes.claro)}
          className="mr-2 px-4 py-2 rounded-full bg-card text-foreground"
        >
          Claro
        </button>
        <button 
          onClick={() => handleThemeChange(themes.dark)}
          className="px-4 py-2 rounded-full bg-card text-foreground"
        >
          Dark
        </button>
      </div>

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