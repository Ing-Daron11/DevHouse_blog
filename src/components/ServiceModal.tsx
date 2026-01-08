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
            className={`fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm p-4 animate-fade-in ${fadeInClass}`}
            onClick={cerrarModal} // Cierra la modal si se hace clic fuera del contenido
            onAnimationEnd={animacionFin}
        >
            <div 
                className={`relative border border-gray-200 rounded-3xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-0 md:p-0 animate-slide-in-up ${slideInClass}`}
                style={{
                    background: 'linear-gradient(135deg, #ffffff 80%, #e3f6ed 100%)',
                    boxShadow: '0 12px 40px -8px rgba(34,49,58,0.16), 0 0 30px hsla(160,81%,65%,0.08)',
                    border: '1.5px solid #e0e7ef',
                    backdropFilter: 'blur(8px) saturate(1.1)',
                    WebkitBackdropFilter: 'blur(8px) saturate(1.1)'
                }}
                onClick={e => e.stopPropagation()} // Evita que el clic dentro del contenido cierre la modal
            >
            {/*--- Btn cerrar ---*/}

                <button 
                    onClick={cerrarModal} 
                    className="absolute top-4 right-4 p-2 rounded-full text-accent hover:bg-accent/20 hover:text-gray-900 transition-colors shadow-lg backdrop-blur"
                    aria-label="Cerrar">
                    <X className="h-6 w-6" />
                </button>

                <div className="flex items-center mb-8 px-8 pt-8">
                    <div className="icon-wrapper bg-gradient-to-br from-[#e3f6ed] to-[#A5EC60] p-4 rounded-2xl shadow-lg mr-6 border border-green-100">
                        {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 drop-shadow mb-0">{service.title}</h2>
                </div>

                <p className="text-lg md:text-xl text-gray-700 mb-8 px-8 font-medium">{service.description}</p>

                                <div className="prose max-w-none px-8">
                                    <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">¿Por qué elegir este servicio?</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                {service.title === "Desarrollo Web" && (
                                                    <>
                                                        <li><span className="font-bold text-foreground">Diseño Responsivo:</span> Tu sitio se verá perfecto en todos los dispositivos.</li>
                                                        <li><span className="font-bold text-foreground">Optimización SEO:</span> Aumentamos tu visibilidad en motores de búsqueda.</li>
                                                        <li><span className="font-bold text-foreground">Performance:</span> Carga ultra-rápida y puntuaciones altas en Google.</li>
                                                        <li><span className="font-bold text-foreground">Integración fácil:</span> Con sistemas y herramientas modernas.</li>
                                                    </>
                                                )}
                                                {service.title === "Automatizaciones IA" && (
                                                    <>
                                                        <li><span className="font-bold text-foreground">Modelos personalizados:</span> IA adaptada a tu negocio.</li>
                                                        <li><span className="font-bold text-foreground">Automatización de tareas:</span> Reduce tiempos y errores humanos.</li>
                                                        <li><span className="font-bold text-foreground">Análisis predictivo:</span> Toma decisiones basadas en datos.</li>
                                                        <li><span className="font-bold text-foreground">Integración con tus sistemas:</span> Sin fricciones.</li>
                                                    </>
                                                )}
                                                {service.title === "CRM/ERP" && (
                                                    <>
                                                        <li><span className="font-bold text-foreground">Gestión centralizada:</span> Control total de clientes y procesos.</li>
                                                        <li><span className="font-bold text-foreground">Escalabilidad:</span> Crece junto a tu empresa.</li>
                                                        <li><span className="font-bold text-foreground">Seguridad avanzada:</span> Protege tus datos empresariales.</li>
                                                        <li><span className="font-bold text-foreground">Reportes inteligentes:</span> Visualiza métricas clave.</li>
                                                    </>
                                                )}
                                                {service.title === "Marketing Digital" && (
                                                    <>
                                                        <li><span className="font-bold text-foreground">Estrategias personalizadas:</span> Para tu nicho y público objetivo.</li>
                                                        <li><span className="font-bold text-foreground">Gestión de campañas:</span> En redes sociales y Google Ads.</li>
                                                        <li><span className="font-bold text-foreground">Análisis de resultados:</span> Optimización continua.</li>
                                                        <li><span className="font-bold text-foreground">Creatividad y diseño:</span> Contenidos que impactan.</li>
                                                    </>
                                                )}
                                                {service.title === "Chatbots" && (
                                                    <>
                                                        <li><span className="font-bold text-foreground">Atención 24/7:</span> Respuestas automáticas y personalizadas.</li>
                                                        <li><span className="font-bold text-foreground">Procesamiento de lenguaje natural:</span> Conversaciones fluidas.</li>
                                                        <li><span className="font-bold text-foreground">Integración multicanal:</span> WhatsApp, web, redes sociales.</li>
                                                        <li><span className="font-bold text-foreground">Entrenamiento continuo:</span> Mejora constante del bot.</li>
                                                    </>
                                                )}
                                                {service.title === "Ciberseguridad" && (
                                                    <>
                                                        <li><span className="font-bold text-foreground">Auditoría de vulnerabilidades:</span> Identificamos y corregimos riesgos.</li>
                                                        <li><span className="font-bold text-foreground">Protección de datos:</span> Cumplimiento de normativas.</li>
                                                        <li><span className="font-bold text-foreground">Monitoreo 24/7:</span> Detección proactiva de amenazas.</li>
                                                        <li><span className="font-bold text-foreground">Capacitación:</span> Formación para tu equipo en buenas prácticas.</li>
                                                    </>
                                                )}
                                        </ul>
                                </div>
                
                <div className="mt-12 text-center pb-8">
                    <a
                        href="https://wa.me/573025922818?text=Hola,%20me%20gustaría%20agendar%20una%20consultoría%20gratuita%20sobre%20mi%20proyecto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center shadow-lg bg-accent text-white hover:bg-accent/90 rounded-xl px-6 py-3 font-semibold text-base"
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