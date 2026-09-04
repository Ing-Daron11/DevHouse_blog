import { AnimatedSection } from './AnimatedSection';
import { Card } from '@/components/ui/card';

const STEPS = [
  { n: '01', title: 'Descubrimiento', desc: 'Analizamos tu modelo de negocio para encontrar oportunidades reales de optimización.' },
  { n: '02', title: 'Estrategia', desc: 'Definimos la arquitectura técnica y el prototipo visual de tu solución a medida.' },
  { n: '03', title: 'Desarrollo', desc: 'Construimos con código limpio, escalable y revisado, en entregas iterativas.' },
  { n: '04', title: 'QA & Pruebas', desc: 'Pruebas de carga, seguridad y usabilidad antes de tocar producción.' },
  { n: '05', title: 'Lanzamiento', desc: 'Desplegamos, medimos y te acompañamos en el soporte y la evolución.' },
];

const ProcessSection = () => (
  <section id="proceso" className="section-alt border-b border-border py-24">
    <div className="container">
      <AnimatedSection animation="fade-in-up">
        <span className="kicker">Proceso</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          De la idea al sistema en producción
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Un camino estructurado y predecible. Sabes en qué fase estás y qué sigue.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <AnimatedSection key={s.n} animation="fade-in-up" delay={i * 80}>
            <Card className="h-full p-5">
              <span className="font-display text-3xl font-bold text-accent">{s.n}</span>
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
