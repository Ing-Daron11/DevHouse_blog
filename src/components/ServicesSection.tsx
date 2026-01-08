import { Code, Cpu, Database, Globe, Layout, Shield, ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import React, { useRef, useState } from 'react';

const services = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Desarrollo Web",
    description: "Sitios web modernos, ultra-rápidos y optimizados para SEO con las últimas tecnologías."
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Automatizaciones IA",
    description: "Implementación de modelos de inteligencia artificial para optimizar tus procesos operativos."
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: "CRM/ERP",
    description: "Sistemas de gestión empresarial robustos, a medida y 100% escalables en la nube."
  },
  {
    icon: <Layout className="w-7 h-7" />,
    title: "Marketing Digital",
    description: "Estrategias basadas en datos para posicionar tu marca y maximizar el retorno de inversión."
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "Chatbots",
    description: "Asistentes virtuales inteligentes con NLP para atención al cliente automatizada 24/7."
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Ciberseguridad",
    description: "Protección avanzada de datos, auditorías de vulnerabilidad y blindaje de sistemas."
  }
];

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Navegación con flechas
  const scrollToIndex = (idx) => {
    if (carouselRef.current) {
      const child = carouselRef.current.children[idx];
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        setActiveIndex(idx);
      }
    }
  };

  // Abrir modal con el servicio seleccionado
  const handleOpenModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  // Cerrar modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="py-14 relative bg-[#f8fafc]">
      {/* Mantenemos la coherencia visual con el gradiente radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F0F4F8_0%,_#F8FAFC_100%)] opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block opacity-80">
            Soluciones de Vanguardia
          </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#22313A] mb-6 tracking-tight">
              Nuestros {/* ... */}
          </h2>
          <div className="flex justify-center gap-1">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <div className="h-1 w-4 bg-accent rounded-full"></div>
          </div>
        </div>

        {/* Carrusel con flechas y dots */}
        <div className="relative">
          {/* Flechas de navegación */}
          <button
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#18333D]/80 border border-accent/30 rounded-full w-12 h-12 flex items-center justify-center text-accent hover:bg-accent/10 transition-all"
            onClick={() => scrollToIndex(Math.max(activeIndex - 1, 0))}
            disabled={activeIndex === 0}
            style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#18333D]/80 border border-accent/30 rounded-full w-12 h-12 flex items-center justify-center text-accent hover:bg-accent/10 transition-all"
            onClick={() => scrollToIndex(Math.min(activeIndex + 1, services.length - 1))}
            disabled={activeIndex === services.length - 1}
            style={{ opacity: activeIndex === services.length - 1 ? 0.5 : 1 }}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory no-scrollbar scroll-smooth px-2"
            style={{ scrollPaddingLeft: '2rem', scrollPaddingRight: '2rem' }}
            role="list"
            tabIndex={0}
            aria-label="Carrusel de servicios"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`min-w-[280px] md:min-w-[340px] group relative flex flex-col p-6 rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:border-accent/30 hover:-translate-y-2 snap-center overflow-hidden ${activeIndex === index ? 'border-accent shadow-2xl scale-105' : ''} ${index === 0 ? 'ml-2' : ''} ${index === services.length - 1 ? 'mr-2' : ''}`}
                role="listitem"
                tabIndex={-1}
              >
                {/* Reflejo de luz en la esquina */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-green-100 blur-[50px] group-hover:bg-accent/20 transition-all duration-500"></div>

                {/* Icono con contenedor de diseño */}
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-white rounded-2xl flex items-center justify-center text-accent mb-8 border border-green-100 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500 shadow-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg group-hover:text-gray-900 transition-colors">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <button
                    className="text-sm font-bold text-white bg-accent px-5 py-2 rounded-xl flex items-center gap-2 group/btn uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-accent shadow hover:bg-accent/90 transition-all"
                    onClick={() => handleOpenModal(service)}
                  >
                    Saber más
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>

                {/* Barra de progreso decorativa abajo */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>

          {/* Dots indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${activeIndex === idx ? 'bg-accent' : 'bg-white/10'} transition-all`}
                aria-label={`Ir al servicio ${idx + 1}`}
                onClick={() => scrollToIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* Indicador visual de scroll (opcional) */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent w-1/3 animate-pulse"></div>
          </div>
        </div>
      {/* Modal de servicio */}
      {modalOpen && selectedService && (
        <ServiceModal
          isOpen={modalOpen}
          service={selectedService}
          onClose={handleCloseModal}
        />
      )}
      </div>
    </section>
  );
};

// Importar ServiceModal
import ServiceModal from './ServiceModal';

export default ServicesSection;