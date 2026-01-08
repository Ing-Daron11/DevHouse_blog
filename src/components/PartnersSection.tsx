import StepCard from './StepCard';
import { useEffect } from 'react';

const PartnersSection = () => {
  const steps = [
    { n: "01", title: "Descubrimiento", desc: "Analizamos tu modelo de negocio para identificar oportunidades reales de optimización." },
    { n: "02", title: "Estrategia", desc: "Diseñamos la arquitectura técnica y el prototipo visual de tu solución a medida." },
    { n: "03", title: "Desarrollo", desc: "Construimos tu herramienta con código limpio, escalable y de alto rendimiento." },
    { n: "04", title: "QA & Pruebas", desc: "Sometemos el sistema a pruebas rigurosas de carga, seguridad y usabilidad total." },
    { n: "05", title: "Lanzamiento", desc: "Desplegamos tu proyecto y te acompañamos en su soporte y evolución constante." }
  ];

  return (
    <section className="py-6 md:py-8 relative overflow-hidden bg-[#F8FAFC] border-b border-[#E6ECF1] animate-fade-in-up">
      {/* Fondo sutil y armónico */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#F0F4F8_0%,_#F8FAFC_100%)] opacity-90"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Cabecera optimizada */}
        <div className="text-center mb-4 md:mb-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-white mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-accent text-[11px] font-black uppercase tracking-[0.4em]">
              Metodología de Trabajo
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#22313A] mb-3 tracking-tighter leading-none">
            Nuestro <span className="text-accent italic">Proceso</span>
          </h2>
          <p className="text-[#487070] max-w-2xl mx-auto text-xs md:text-sm leading-relaxed">
            Un camino estructurado desde la idea inicial hasta la solución escalable.
          </p>
        </div>

        {/* Grid de 5 pasos con animación de entrada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-1 xl:gap-2">
          {steps.map((step, index) => (
            <div key={step.n} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}>
              <StepCard
                n={step.n}
                title={step.title}
                desc={step.desc}
                isLast={index === steps.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;