
import { Eye, HeartHandshake, MessageCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import React from "react";

const AboutUsSection = () => (
  <section className="py-16 bg-white" id="about-us">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <AnimatedSection animation="fade-in-up" className="mb-6" delay={0}>
        <h2 className="text-4xl font-extrabold modal-title">Sobre Nosotros</h2>
      </AnimatedSection>
      <div className="flex justify-center gap-8 mb-6">
        <AnimatedSection animation="scale-in" delay={100} className="flex flex-col items-center">
          <Eye className="w-10 h-10 text-accent mb-2 transition-transform duration-500 hover:scale-125" />
          <span className="font-bold text-accent">Transparencia</span>
        </AnimatedSection>
        <AnimatedSection animation="scale-in" delay={200} className="flex flex-col items-center">
          <HeartHandshake className="w-10 h-10 text-accent mb-2 transition-transform duration-500 hover:scale-125" />
          <span className="font-bold text-accent">Sinceridad</span>
        </AnimatedSection>
        <AnimatedSection animation="scale-in" delay={300} className="flex flex-col items-center">
          <MessageCircle className="w-10 h-10 text-accent mb-2 transition-transform duration-500 hover:scale-125" />
          <span className="font-bold text-accent">Comunicación</span>
        </AnimatedSection>
      </div>
      <AnimatedSection animation="slide-in-left" delay={400}>
        <p className="mb-4 text-lg text-gray-700" style={{fontFamily: "'Barlow Condensed', Arial, sans-serif"}}>
          En DevHouse, creemos en la transparencia, la sinceridad y la comunicación directa. Nuestro equipo está comprometido a ayudarte a crecer digitalmente, brindando soluciones honestas y personalizadas.
        </p>
      </AnimatedSection>
      <AnimatedSection animation="slide-in-right" delay={500}>
        <p className="text-gray-600" style={{fontFamily: "'Barlow Condensed', Arial, sans-serif"}}>
          Nos apasiona crear relaciones duraderas con nuestros clientes, acompañándolos en cada paso del proceso y asegurando resultados reales. ¡Conócenos y descubre cómo podemos ayudarte!
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutUsSection;
