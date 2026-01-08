
import { ArrowRight } from 'lucide-react';

const DnaAnimation = () => {
  // Generamos nodos dinámicamente para crear la doble hélice
  const nodes = Array.from({ length: 15 }).map((_, i) => {
    const y = i * 14; // Espaciado vertical
    const rotation = i * 24; // Rotación para simular la espiral
    return (
      <div 
        key={i} 
        className="dna-strand" 
        style={{ top: '50px', transform: `rotateY(${rotation}deg)` }}
      >
        {/* Nodo izquierdo */}
        <div className="dna-node" style={{ transform: `translateX(-30px) translateY(${y}px)` }}></div>
        {/* Línea conectora */}
        <div className="dna-line" style={{ top: `${y + 5}px` }}></div>
        {/* Nodo derecho */}
        <div className="dna-node" style={{ transform: `translateX(30px) translateY(${y}px)` }}></div>
      </div>
    );
  });

  return <div className="dna-container">{nodes}</div>;
};

const HeroSection = () => {
  return (
    <header className="relative flex items-center justify-center bg-[#F8FAFC] text-[#22313A] overflow-hidden py-8 shadow-none border-b border-[#E6ECF1]" aria-label="Hero principal">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F0F4F8_0%,_#F8FAFC_100%)] z-0 opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-block px-2 py-0.5 rounded-full border border-accent/20 bg-white text-accent text-xs font-medium mb-1 shadow-none">
            Loop & Logic DevHouse
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-1">
            Transformamos ideas en <span className="text-accent font-extrabold">experiencias digitales</span>
          </h1>
          <p className="text-[#487070] text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 font-medium mb-1">
            Tu partner tecnológico especializado en soluciones innovadoras. Desarrollo web, IA y automatización a medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start pt-1">
            <button className="px-8 py-4 bg-white border border-accent text-accent hover:bg-accent hover:text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-accent/40 shadow-sm" aria-label="Empezar Proyecto">
              Empezar Proyecto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border border-accent text-accent hover:bg-accent hover:text-white rounded-xl font-semibold transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent/20 shadow-sm" aria-label="Ver Portafolio">
              <span>Ver Portafolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative h-[220px] sm:h-[300px] md:h-[400px] flex items-center justify-center">
          {/* Efecto de brillo detrás del ADN */}
          <div className="absolute inset-0 bg-[#F0F4F8] blur-[60px] rounded-full transform scale-75"></div>
          <DnaAnimation />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;