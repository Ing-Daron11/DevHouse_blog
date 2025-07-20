import { Globe, Brain, Database, TrendingUp, MessageCircle, Zap } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const services = [
  {
    icon: Globe,
    title: 'Diseño y Desarrollo Web',
    description: 'Sitios web modernos, responsivos y optimizados para conversión con las últimas tecnologías.'
  },
  {
    icon: Brain,
    title: 'Automatizaciones con IA',
    description: 'Integra inteligencia artificial para automatizar procesos y mejorar la eficiencia de tu negocio.'
  },
  {
    icon: Database,
    title: 'CRMs y ERPs',
    description: 'Sistemas de gestión empresarial personalizados que escalan con tu negocio.'
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estrategias digitales integrales para hacer crecer tu presencia online y generar más ventas.'
  },
  {
    icon: MessageCircle,
    title: 'Chatbots y WhatsApp Business',
    description: 'Automatiza la atención al cliente con chatbots inteligentes y WhatsApp Business API.'
  },
  {
    icon: Zap,
    title: 'Soluciones a Medida',
    description: 'Desarrollamos tecnología específica para resolver los desafíos únicos de tu industria.'
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
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
                  <div className="p-3 bg-gradient-primary rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
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
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};