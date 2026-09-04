import { Eye, HeartHandshake, MessagesSquare } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const VALUES = [
  {
    icon: Eye,
    title: 'Transparencia',
    body: 'Ves el repositorio, los avances y las decisiones técnicas desde el día uno. Sin cajas negras.',
  },
  {
    icon: HeartHandshake,
    title: 'Sinceridad',
    body: 'Si algo no conviene a tu negocio, te lo decimos. Propuestas claras, sin costos ocultos.',
  },
  {
    icon: MessagesSquare,
    title: 'Comunicación',
    body: 'Un canal directo con quien escribe el código. Feedback continuo en cada etapa.',
  },
];

const AboutUsSection = () => (
  <section id="nosotros" className="border-b border-border py-24">
    <div className="container">
      <AnimatedSection animation="fade-in-up">
        <span className="kicker">Nosotros</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Un equipo pequeño que trata tu proyecto como propio
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          En DevHouse construimos relaciones largas, no entregables sueltos. Te acompañamos
          desde la idea hasta el soporte, con resultados medibles en cada paso.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {VALUES.map((v, i) => (
          <AnimatedSection key={v.title} animation="fade-in-up" delay={i * 100}>
            <Card className="h-full">
              <CardHeader>
                <v.icon className="h-6 w-6 text-accent" />
                <CardTitle className="text-lg">{v.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{v.body}</CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUsSection;
