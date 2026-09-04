import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from './ContactDialog';

const CAPABILITIES = [
  'Aplicaciones web',
  'Apps Android',
  'Automatización con IA',
  'CRM / ERP a medida',
  'Bases de datos y APIs',
];

const HeroSection = () => (
  <section id="top" className="border-b border-border" aria-label="Inicio">
    <div className="container py-20 md:py-28">
      <p className="kicker">DevHouse · Buga, Colombia</p>

      <div className="mt-6 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-7xl">
            Construimos el software que tu negocio necesita.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Aplicaciones web, apps Android y sistemas a medida. Código limpio,
            escalable y documentado — con acceso al repositorio desde el día uno.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactDialog>
              <Button size="lg" className="gap-2">
                Empezar proyecto <ArrowRight className="h-4 w-4" />
              </Button>
            </ContactDialog>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://github.com/looplogicdevhouse-dotcom" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> Ver código
              </a>
            </Button>
          </div>
        </div>

        <ul className="border-t border-border">
          {CAPABILITIES.map((c, i) => (
            <li
              key={c}
              className="flex items-baseline gap-4 border-b border-border py-3.5"
            >
              <span className="font-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm text-foreground">{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-border pt-6">
        <div>
          <span className="font-display text-2xl font-bold">&lt;6 h</span>
          <span className="ml-2 text-sm text-muted-foreground">primera respuesta</span>
        </div>
        <div>
          <span className="font-display text-2xl font-bold">5 fases</span>
          <span className="ml-2 text-sm text-muted-foreground">de entrega</span>
        </div>
        <div>
          <span className="font-display text-2xl font-bold">100%</span>
          <span className="ml-2 text-sm text-muted-foreground">propiedad del código</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
