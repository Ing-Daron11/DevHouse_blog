import { Star, Quote } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useCounterAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'María González',
    company: 'CEO, TechStart',
    text: 'Loop & Logic transformó completamente nuestro negocio. Su enfoque profesional y soluciones innovadoras superaron todas nuestras expectativas.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b332c265?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Carlos Mendoza',
    company: 'Director, InnovateCorp',
    text: 'El equipo de desarrollo más profesional con el que hemos trabajado. Entregaron un CRM personalizado que revolucionó nuestros procesos.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Ana Rodríguez',
    company: 'Fundadora, DigitalFlow',
    text: 'Su chatbot con IA aumentó nuestra conversión en un 300%. Tecnología de vanguardia con un servicio excepcional.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

const StatsCounter = ({ value, label }: { value: number; label: string }) => {
  const { ref, count } = useCounterAnimation(value);
  
  return (
    <div ref={ref as any} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}+
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Nuestro Compromiso: Tu Éxito Digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            En Loop & Logic, nos dedicamos a transformar negocios como el tuyo. Conoce lo que te garantizamos al trabajar con nosotros.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"> {/* Ajustado a 4 columnas */}
          {/* Reemplazamos las estadísticas falsas por pilares de tu servicio */}
          <AnimatedSection animation="fade-in-up" delay={0} className="text-center">
            <div className="card-floating p-6 h-full">
              <h3 className="text-4xl font-bold text-gradient mb-2">100%</h3> {/* Esto es una promesa, no una estadística */}
              <p className="text-muted-foreground">Enfoque en tu Crecimiento</p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={100} className="text-center">
            <div className="card-floating p-6 h-full">
              <h3 className="text-4xl font-bold text-gradient mb-2">Tecnología</h3>
              <p className="text-muted-foreground">De Vanguardia Aplicada</p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={200} className="text-center">
            <div className="card-floating p-6 h-full">
              <h3 className="text-4xl font-bold text-gradient mb-2">Resultados</h3>
              <p className="text-muted-foreground">Medibles y Sostenibles</p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={300} className="text-center">
            <div className="card-floating p-6 h-full">
              <h3 className="text-4xl font-bold text-gradient mb-2">Soporte</h3>
              <p className="text-muted-foreground">Continuo y Cercano</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Sustituimos los testimonios por "Lo que nuestros clientes experimentarán" o "Nuestros Pilares de Servicio" */}
        <AnimatedSection animation="fade-in-up" delay={400} className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Lo que Cada Cliente Experimenta con Loop & Logic:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Puedes poner 2 o 3 columnas si prefieres */}
            <div className="card-floating p-6 text-left">
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Un enfoque verdaderamente profesional y soluciones digitales innovadoras que están diseñadas para superar tus expectativas y transformar tu negocio."
              </p>
              <p className="font-semibold text-foreground">- Enfoque y Visión</p>
            </div>
            <div className="card-floating p-6 text-left">
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Un equipo de desarrollo dedicado que entregará soluciones personalizadas y sistemas optimizados para revolucionar tus procesos internos."
              </p>
              <p className="font-semibold text-foreground">- Eficiencia y Personalización</p>
            </div>
            {/* Puedes añadir una tercera si usas grid-cols-3 */}
            <div className="card-floating p-6 text-left md:col-span-2 lg:col-span-1 mx-auto w-full"> {/* Asegura que esta ocupe el espacio si es grid-cols-3 */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Tecnología de vanguardia que impulsará tu conversión y un servicio excepcional, siempre disponible para asegurar tu éxito continuo."
              </p>
              <p className="font-semibold text-foreground">- Innovación y Soporte</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>  
  );
};