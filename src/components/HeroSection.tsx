
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
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-20">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-4">
            Loop & Logic DevHouse
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Transformamos ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">experiencias digitales</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            Tu partner tecnológico especializado en soluciones innovadoras. Desarrollo web, IA y automatización a medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
              Empezar Proyecto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gray-700 hover:border-green-500/50 hover:bg-green-500/5 text-white rounded-lg font-semibold transition-all">
              Ver Portafolio
            </button>
          </div>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
          {/* Efecto de brillo detrás del ADN */}
          <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full transform scale-75"></div>
          <DnaAnimation />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;