import { MessageCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      '¡Hola! Me interesa conocer más sobre los servicios de Loop & Logic DevHouse. ¿Podrían darme más información?'
    );
    const whatsappUrl = `https://wa.me/573025922818?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatedSection animation="scale-in" delay={1000}>
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          ¡Chatea con nosotros!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-white"></div>
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
      </button>
    </AnimatedSection>
  );
};