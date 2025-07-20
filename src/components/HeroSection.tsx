import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(205_100%_55%/0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,hsl(158_100%_45%/0.08),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedSection animation="fade-in-up" delay={200}>
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="text-primary mr-3 h-8 w-8" />
            <h1 className="text-3xl md:text-5xl font-bold text-gradient">
              Loop & Logic DevHouse
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={400}>
          <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Digitaliza tu negocio</span>
            <br />
            <span className="text-accent-gradient">sin complicarte</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={600}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Somos tu DevHouse especializado en soluciones tecnológicas modernas. 
            Transformamos ideas en experiencias digitales excepcionales.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale-in" delay={800}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary group">
              Cotiza ahora
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="btn-outline">
              Ver portafolio
            </button>
          </div>
        </AnimatedSection>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};