import { Check } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const ITEMS = [
  'Satisfacción garantizada: revisamos y ajustamos hasta que estés conforme.',
  'Propuestas claras: sin costos ocultos ni sorpresas.',
  'Comunicación directa: siempre disponibles para resolver tus dudas.',
  'Propiedad total: el código es tuyo, con acceso al repositorio desde el inicio.',
  'Política de devolución: si no cumplimos lo prometido, te devolvemos tu dinero.',
];

const GuaranteesSection = () => (
  <section id="garantias" className="border-b border-border py-24">
    <div className="container">
      <AnimatedSection animation="fade-in-up">
        <span className="kicker">Garantías</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Compromisos por escrito
        </h2>
      </AnimatedSection>

      <ul className="mt-10 max-w-2xl space-y-4">
        {ITEMS.map((item, i) => (
          <AnimatedSection key={item} animation="fade-in-up" delay={i * 60}>
            <li className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          </AnimatedSection>
        ))}
      </ul>
    </div>
  </section>
);

export default GuaranteesSection;
