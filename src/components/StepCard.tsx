import { CheckCircle2, ChevronRight } from 'lucide-react';
import React from 'react';

interface StepCardProps {
  n: string;
  title: string;
  desc: string;
  isLast: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ n, title, desc, isLast }) => (
  <div 
    className="group relative flex flex-col p-6 xl:p-6 rounded-[1.5rem] border border-[#E6ECF1] bg-white shadow-[0_4px_24px_0_rgba(34,49,58,0.06)] transition-all duration-500 hover:border-accent/40 hover:shadow-lg hover:-translate-y-2 min-h-[320px] lg:min-h-[300px] animate-fade-in-up"
  >
    {/* Número de fondo estilizado */}
    <span className="absolute top-6 right-8 text-6xl font-black text-[#22313A]/10 group-hover:text-accent/20 transition-all duration-700 pointer-events-none italic">
      {n}
    </span>
    <div className="relative z-10 flex flex-col h-full">
      {/* Badge de Paso */}
      <div className="mb-5">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 border border-accent/10 group-hover:border-accent/50 transition-all duration-500 shadow-sm">
          <span className="text-accent font-black text-lg">{n}</span>
        </div>
      </div>
      <h3 className="text-[#22313A] text-xl xl:text-3xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#487070] text-xl xl:text-xl leading-relaxed mb-6 group-hover:text-accent/80 transition-colors duration-300">
        {desc}
      </p>
      {/* Footer de Card con Icono Dinámico */}
      <div className="mt-auto flex items-center justify-between">
        <div className="h-8 w-8 rounded-full border border-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
          <CheckCircle2 className="h-4 w-4 text-accent/60 group-hover:text-white" />
        </div>
        {!isLast && (
          <ChevronRight className="hidden lg:block h-5 w-5 text-accent/10 group-hover:text-accent/40 group-hover:translate-x-2 transition-all duration-500" />
        )}
      </div>
    </div>
    {/* Efectos Visuales de Hover */}
    <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_20px_rgba(165,236,96,0.04)] bg-gradient-to-b from-accent/5 to-transparent"></div>
    {/* Barra de Progreso Neon */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 bg-accent group-hover:w-[60%] transition-all duration-700 rounded-full shadow-[0_0_8px_rgba(165,236,96,0.3)]"></div>
  </div>
);

export default StepCard;