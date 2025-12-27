  import { ArrowRight, X } from 'lucide-react';
  import React, { useEffect, useState } from 'react';

const ServiceModal = ({ isOpen, service, onClose}) => {
    const [isClosing, setIsClosing] = useState(false);
    
    useEffect (() => {
        if (isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);
    
    if (!isOpen || !service) return null;

    //--- Animacion ---//
    const fadeInClass = isOpen && !isClosing ? 'animate-fade-in' : 'animate-fade-out';
    const slideInClass = isOpen && !isClosing ? 'animate-slide-in-up' : 'animate-slide-out-down';


    const animacionFin = () => {
        if (isClosing) {
            onClose();
        }
    };

    const cerrarModal = () => {
        setIsClosing(true); // Solo activamos el estado de cierre
    };
    

     return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4 animate-fade-in ${fadeInClass}`}
            onClick={cerrarModal} // Cierra la modal si se hace clic fuera del contenido
            onAnimationEnd={animacionFin}
        >
                        <div 
                                className={`relative bg-background border border-border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-0 md:p-0 animate-slide-in-up ${slideInClass}`}
                                style={{
                                    background: 'var(--gradient-glass)',
                                    boxShadow: '0 20px 50px -12px rgba(0,0,0,0.8), 0 0 30px hsla(80,81%,65%,0.15)',
                                    border: '1.5px solid hsl(var(--accent) / 0.15)',
                                    backdropFilter: 'blur(18px) saturate(1.2)',
                                    WebkitBackdropFilter: 'blur(18px) saturate(1.2)'
                                }}
                                onClick={e => e.stopPropagation()} // Evita que el clic dentro del contenido cierre la modal
                        >
            {/*--- Btn cerrar ---*/}

                <button 
                    onClick={cerrarModal} 
                    className="absolute top-4 right-4 p-2 rounded-full text-accent hover:bg-accent/20 hover:text-foreground transition-colors shadow-lg backdrop-blur"
                    aria-label="Cerrar">
                    <X className="h-6 w-6" />
                </button>

                <div className="flex items-center mb-8 px-8 pt-8">
                    <div className="icon-wrapper bg-gradient-to-br from-[#1C621B] to-[#A5EC60] p-4 rounded-2xl shadow-lg mr-6">
                        <service.icon className="h-10 w-10 text-white drop-shadow-[0_0_12px_rgba(165,236,96,0.5)]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground drop-shadow mb-0">{service.title}</h2>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 px-8">{service.description}</p>

                <div className="prose prose-invert max-w-none px-8">
                    <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">¿Por qué elegir este servicio?</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><span className="font-bold text-foreground">Diseño Responsivo:</span> Tu sitio se verá perfecto en todos los dispositivos.</li>
                        <li><span className="font-bold text-foreground">Optimización SEO:</span> Aumentamos tu visibilidad en motores de búsqueda.</li>
                        <li><span className="font-bold text-foreground">Tecnología Moderna:</span> Usamos las últimas herramientas para un rendimiento superior.</li>
                        <li><span className="font-bold text-foreground">Soporte Dedicado:</span> Te acompañamos durante y después del lanzamiento.</li>
                    </ul>
                </div>
                
                <div className="mt-12 text-center pb-8">
                    <a
                        href="https://wa.me/573025922818?text=Hola,%20me%20gustaría%20agendar%20una%20consultoría%20gratuita%20sobre%20mi%20proyecto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center shadow-lg"
                    >                                        
                        Agenda una Consultoría Gratuita
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;