import { Star, Quote, TrendingUp, Zap, Rocket, LifeBuoy } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <AnimatedSection animation="fade-in-up" delay={0} className="text-center">
              <div className="card-floating p-6 h-full group"> {/* Añade 'group' para efectos hover */}
                  <div className="flex justify-center mb-4">
                      {/* Icono de crecimiento/flecha ascendente */}
                      <Rocket className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" /> 
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Crecimiento Digital</h3>
                  <p className="text-muted-foreground">Tu éxito es nuestra prioridad absoluta, garantizamos un enfoque del 100%.</p>
              </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={100} className="text-center">
            <div className="card-floating p-6 h-full group card-floating-accent-glow">
                <div className="flex justify-center mb-4">
                    {/* Icono de tecnología/engranaje/chip */}
                    <Zap className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tecnología de Vanguardia</h3>
                <p className="text-muted-foreground">Aplicamos las últimas innovaciones para soluciones robustas y escalables.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200} className="text-center">
              <div className="card-floating p-6 h-full group">
                  <div className="flex justify-center mb-4">
                      {/* Icono de resultados/gráfico/medalla */}
                      <TrendingUp className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Resultados Medibles</h3>
                  <p className="text-muted-foreground">Estrategias basadas en datos para un impacto real y sostenible.</p>
              </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={300} className="text-center">
              <div className="card-floating p-6 h-full group card-floating-accent-glow">
                  <div className="flex justify-center mb-4">
                      {/* Icono de soporte/auriculares/escudo */}
                      <LifeBuoy className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Soporte Continuo</h3>
                  <p className="text-muted-foreground">Nuestro equipo siempre listo para asistirte en cada etapa.</p>
              </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-in-up" delay={400} className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-gradient">La Experiencia Loop & Logic</h3> {/* Título más corto y con gradiente */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Ajuste a 3 columnas en LG */}
            <div className="card-floating p-6 text-left relative overflow-hidden"> {/* Añadir relative y overflow-hidden */}
                <Quote className="absolute top-4 left-4 h-16 w-16 text-accent/10 -z-0" /> {/* Icono de comillas grande y sutil */}
                <p className="text-muted-foreground leading-relaxed mb-4 relative z-10"> {/* Z-index para el texto */}
                  "Un enfoque verdaderamente profesional y soluciones digitales innovadoras que están diseñadas para superar tus expectativas y transformar tu negocio."
                </p>
                <p className="font-semibold text-foreground relative z-10">- Enfoque y Visión</p>
            </div>

            <div className="card-floating p-6 text-left relative overflow-hidden card-floating-accent-glow">
                <Quote className="absolute top-4 left-4 h-16 w-16 text-accent/10 -z-0" />
                <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                  "Un equipo de desarrollo dedicado que entregará soluciones personalizadas y sistemas optimizados para revolucionar tus procesos internos."
                </p>
                <p className="font-semibold text-foreground relative z-10">- Eficiencia y Personalización</p>
            </div>
            
            <div className="card-floating p-6 text-left relative overflow-hidden md:col-span-2 lg:col-span-1 mx-auto w-full">
                <Quote className="absolute top-4 left-4 h-16 w-16 text-accent/10 -z-0" />
                <p className="text-muted-foreground leading-relaxed mb-4 relative z-10">
                  "Tecnología de vanguardia que impulsará tu conversión y un servicio excepcional, siempre disponible para asegurar tu éxito continuo."
                </p>
                <p className="font-semibold text-foreground relative z-10">- Innovación y Soporte</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={500} className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6 text-foreground">¿Listo para impulsar tu negocio?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubre cómo nuestras soluciones personalizadas pueden transformar tu presencia digital.
          </p>
          <button className="btn-primary">Agenda una Consultoría Gratuita</button>
      </AnimatedSection>
      </div>
    </section>  
  );
};