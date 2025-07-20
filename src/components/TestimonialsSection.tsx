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
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Casos de Éxito</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a empresas como la tuya a alcanzar el éxito digital
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fade-in-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <StatsCounter value={150} label="Proyectos Exitosos" />
            <StatsCounter value={98} label="% Satisfacción" />
            <StatsCounter value={50} label="Empresas Atendidas" />
            <StatsCounter value={24} label="Meses Experiencia" />
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="scale-in"
              delay={index * 150}
            >
              <div className="card-floating text-center relative">
                <Quote className="h-8 w-8 text-primary mx-auto mb-6 opacity-50" />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-8 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-gradient-primary rounded-full"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};