
// HeroSection: Sección principal de bienvenida de la web
// Muestra el nombre, eslogan y llamada a la acción de la empresa
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

// Componente principal de la sección hero
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Fondo decorativo con gradientes y efectos visuales */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(205_100%_55%/0.07),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,hsl(158_100%_45%/0.05),transparent_70%)]"></div>
        {/* Gradiente lineal para transición suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      </div>

      {/* Contenido principal centrado */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Título y logo animado */}
        <AnimatedSection animation="fade-in-up" delay={200}>
          <div className="flex items-center justify-center mb-7">
            <Sparkles className="text-primary mr-3 h-8 w-8" />
            <h1 className="text-3xl md:text-5xl font-bold text-gradient">
              Loop & Logic DevHouse
            </h1>
          </div>
        </AnimatedSection>

        {/* Eslogan animado */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Digitaliza tu negocio</span>
            <br />
            <span className="text-accent-gradient">¡sin complicaciones!</span>
          </h2>
        </AnimatedSection>

        {/* Descripción animada */}
        <AnimatedSection animation="fade-in-up" delay={600}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Somos tu DevHouse especializado en soluciones tecnológicas modernas. 
            Transformamos ideas en experiencias digitales excepcionales.
          </p>
        </AnimatedSection>

        {/* Botón principal animado */}
        <AnimatedSection animation="scale-in" delay={800}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Botón para cotizar */}
            <button className="btn-primary group">
              Cotiza ahora
            </button>
            {/* Botón para ver portafolio */}
            <button className="btn-outline">
              Ver portafolio
            </button>
          </div>
        </AnimatedSection>

        {/* Elementos flotantes decorativos */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse bg-gradient-dark<"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000 bg-gradient-dark"></div>
      </div>
    </section>
  );
};