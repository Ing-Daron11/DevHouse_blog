import { Globe, Brain, Database, TrendingUp, MessageCircle, Zap, Code, ShieldCheck, Palette, Lightbulb, BellRing } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { title } from 'process';

const services = [
  {
    icon: Globe,
    title: 'Diseño y Desarrollo Web',
    description: 'Creamos sitios web modernos y atractivos, 100% adaptables a cualquier dispositivo (responsive), optimizados para captar clientes y posicionamiento SEO.'
  },
  {
    icon: Brain,
    title: 'Automatizaciones con IA',
    description: 'Integramos Inteligencia Artificial para optimizar procesos clave, mejorar la eficiencia operativa y potenciar el crecimiento de tu negocio.'
  },
  {
    icon: Database,
    title: 'CRMs y ERPs',
    description: 'Implementamos sistemas CRMs y ERPs personalizados para centralizar tu información, optimizar la gestión y asegurar el crecimiento escalable de tu empresa.'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Desarrollamos estrategias digitales integrales que aumentan tu visibilidad online, atraen a tu público ideal y generan resultados medibles en ventas.'
  },
  {
    icon: MessageCircle,
    title: 'Chatbots y WhatsApp Business',
    description: 'Automatizamos tu atención al cliente 24/7 con chatbots inteligentes y WhatsApp Business API, ofreciendo respuestas instantáneas y una experiencia superior.'
  },
  {
    icon: Zap,
    title: 'Soluciones a Medida',
    description: 'Creamos tecnología específica para resolver los desafíos únicos de tu industria. Innovación con un soporte constante para asegurar tu éxito a largo plazo.'
  },

  //--- NUEVOS SERVICIOS --- //
  {
    icon: ShieldCheck,
    title: 'Ciberseguridad y Protección de Datos',
    description: 'Protegemos tu información y sistemas con soluciones robustas de ciberseguridad, garantizando la integridad y confidencialidad de tus activos digitales.'
  },
  {
    icon: Palette, 
    title: 'Identidad Visual y Branding Digital',
    description: 'Construimos una marca digital coherente y atractiva, desde el diseño de logo hasta la guía de estilo, que resuene con tu audiencia.'
  },
  {
    icon: BellRing,
    title: 'Soporte Técnico Especializado',
    description: 'Ofrecemos soporte técnico proactivo y reactivo para todas tus soluciones digitales, asegurando la continuidad operativa y minimizando interrupciones.'
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient*/}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Nuestros Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel digital
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-in-up"
              delay={index * 100}
              className="h-full"
            >
              <div className="card-floating h-full group cursor-pointer">
                <div className="flex items-center mb-6">
                  <div className="icon-wrapper">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover glow effect */}
                <div className="hover-glow-overlay"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};