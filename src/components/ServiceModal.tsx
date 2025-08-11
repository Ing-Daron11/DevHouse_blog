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
                className={`relative bg-background border border-border rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 animate-slide-in-up ${slideInClass}`}
                onClick={e => e.stopPropagation()} // Evita que el clic dentro del contenido cierre la modal
            >
            {/*--- Btn cerrar ---*/}

                <button 
                    onClick={cerrarModal} 
                    className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                    aria-label="Cerrar">

                    <X className="h-6 w-6" />
                </button>

                <div className="flex items-center mb-6">
                
                    <div className={`icon-wrapper-modal bg-accent/10 mr-4`}>
                        <service.icon className="h-8 w-8 text-accent" />
                    </div>

                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                </div>

                <p className="text-xl text-muted-foreground mb-8">{service.description}</p>

                <div className="prose prose-invert max-w-none">
                    <h3 className="text-2xl font-bold mt-8 mb-4">Lo que obtendrás con este servicio:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {/* Aquí puedes añadir la información detallada por servicio */}
                        <li>**Diseño Responsivo:** Tu sitio se verá perfecto en todos los dispositivos.</li>
                        <li>**Optimización SEO:** Aumentamos tu visibilidad en motores de búsqueda.</li>
                        <li>**Tecnología Moderna:** Usamos las últimas herramientas para un rendimiento superior.</li>
                        <li>**Soporte Dedicado:** Te acompañamos durante y después del lanzamiento.</li>
                    </ul>
                </div>
                
                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/573025922818?text=Hola,%20me%20gustaría%20agendar%20una%20consultoría%20gratuita%20sobre%20mi%20proyecto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center"
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