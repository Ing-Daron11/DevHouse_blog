import { Phone, FileText, MessageCircle, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import React from "react";

const ProcessSection = () => (
  <section className="py-16 bg-[#F3F6F9]" id="proceso">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-4xl font-extrabold mb-8 text-center modal-title text-[#18333D]">Nuestro Proceso</h2>
      <ol className="relative border-l-4 border-accent ml-4">
        <AnimatedSection animation="slide-in-left" delay={0}>
          <li className="mb-10 ml-6 flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full ring-4 ring-white shadow-lg transition-transform duration-500 hover:scale-125">
              <Phone className="w-6 h-6 text-accent" />
            </span>
            <div>
              <h3 className="font-semibold text-xl modal-title">Contacto inicial</h3>
              <p className="text-gray-600">Escuchamos tus necesidades y respondemos todas tus dudas con total sinceridad.</p>
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection animation="slide-in-right" delay={100}>
          <li className="mb-10 ml-6 flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full ring-4 ring-white shadow-lg transition-transform duration-500 hover:scale-125">
              <FileText className="w-6 h-6 text-accent" />
            </span>
            <div>
              <h3 className="font-semibold text-xl modal-title">Propuesta transparente</h3>
              <p className="text-gray-600">Te presentamos una propuesta clara, sin letras pequeñas ni costos ocultos.</p>
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection animation="slide-in-left" delay={200}>
          <li className="mb-10 ml-6 flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full ring-4 ring-white shadow-lg transition-transform duration-500 hover:scale-125">
              <MessageCircle className="w-6 h-6 text-accent" />
            </span>
            <div>
              <h3 className="font-semibold text-xl modal-title">Ejecución y comunicación</h3>
              <p className="text-gray-600">Trabajamos contigo en cada etapa, manteniéndote informado y escuchando tu feedback.</p>
            </div>
          </li>
        </AnimatedSection>
        <AnimatedSection animation="slide-in-right" delay={300}>
          <li className="ml-6 flex items-start gap-4">
            <span className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full ring-4 ring-white shadow-lg transition-transform duration-500 hover:scale-125">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </span>
            <div>
              <h3 className="font-semibold text-xl modal-title">Entrega y acompañamiento</h3>
              <p className="text-gray-600">Entregamos resultados y seguimos a tu lado para cualquier ajuste o consulta.</p>
            </div>
          </li>
        </AnimatedSection>
      </ol>
    </div>
  </section>
);

export default ProcessSection;
