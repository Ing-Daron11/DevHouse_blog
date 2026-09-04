import { Rocket, Zap, TrendingUp, LifeBuoy } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const COMMITMENTS = [
  { icon: Rocket, title: 'Crecimiento digital', body: 'Tu objetivo de negocio guía cada decisión técnica.' },
  { icon: Zap, title: 'Tecnología actual', body: 'Stack moderno para soluciones robustas y escalables.' },
  { icon: TrendingUp, title: 'Resultados medibles', body: 'Métricas desde el primer sprint, no promesas.' },
  { icon: LifeBuoy, title: 'Soporte continuo', body: 'Seguimos a tu lado tras el lanzamiento.' },
];

const METRICS = [
  { value: '<6h', label: 'primera respuesta' },
  { value: '2 sem', label: 'a primer entregable' },
  { value: '100%', label: 'propiedad del código' },
  { value: '30 días', label: 'de soporte incluido' },
];

/**
 * TODO(contenido): cuando haya testimonios reales (nombre, cargo, empresa, foto
 * opcional y frase), poblar TESTIMONIALS y se renderiza la grilla automáticamente.
 */
interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
const TESTIMONIALS: Testimonial[] = [];

const WA_LINK =
  'https://wa.me/573025922818?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20gratuita%20sobre%20mi%20proyecto.';

export const TestimonialsSection = () => (
  <section id="compromiso" className="section-alt border-b border-border py-24">
    <div className="container">
      <AnimatedSection animation="fade-in-up">
        <span className="kicker">Compromiso</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Lo que garantizamos al trabajar contigo
        </h2>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {COMMITMENTS.map((c, i) => (
          <AnimatedSection key={c.title} animation="fade-in-up" delay={i * 80}>
            <Card className="h-full">
              <CardHeader>
                <c.icon className="h-6 w-6 text-accent" />
                <CardTitle className="text-base">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{c.body}</CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {TESTIMONIALS.length > 0 ? (
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="h-full">
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-card p-6 text-center">
              <p className="font-display text-3xl font-bold text-foreground">{m.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      <AnimatedSection animation="fade-in-up" className="mt-16 text-center">
        <h3 className="text-2xl font-bold tracking-tight">¿Listo para impulsar tu negocio?</h3>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Una llamada de 20 minutos para revisar tu idea y decirte cómo la abordaríamos.
        </p>
        <Button asChild size="lg" className="mt-6">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            Agenda una consultoría gratuita
          </a>
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

export default TestimonialsSection;
