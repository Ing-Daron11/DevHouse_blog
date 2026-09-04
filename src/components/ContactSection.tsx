import { Check, Mail, Phone, MessageCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PERKS = [
  'Soporte técnico especializado',
  'Desarrollo ágil y escalable',
  'Consultoría estratégica gratuita',
];

const CHANNELS = [
  { icon: Mail, label: 'Email', href: 'mailto:looplogicdevhouse@gmail.com' },
  { icon: Phone, label: 'Llamar', href: 'tel:+573025922818' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/573025922818' },
];

const ContactSection = () => (
  <section id="contacto" className="border-b border-border py-24">
    <div className="container grid gap-12 md:grid-cols-2 md:items-center">
      <AnimatedSection animation="fade-in-up" className="space-y-6">
        <span className="kicker">Contacto</span>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Déjanos el desarrollo, tú enfócate en el negocio
        </h2>
        <p className="text-muted-foreground">
          Nuestro equipo está listo para llevar tu idea a producción. Sin complicaciones,
          solo resultados.
        </p>

        <ul className="space-y-3">
          {PERKS.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-accent" />
              {p}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {CHANNELS.map((c) => (
            <Button key={c.label} asChild variant="outline" className="gap-2">
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <c.icon className="h-4 w-4" /> {c.label}
              </a>
            </Button>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={120}>
        <Card>
          <CardContent className="space-y-5 pt-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary font-mono text-sm text-accent">
                LL
              </span>
              <div>
                <p className="font-semibold">DevHouse Team</p>
                <p className="font-mono text-xs text-accent">disponible para nuevos proyectos</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="max-w-[85%] rounded-lg rounded-tl-sm border border-border bg-secondary/50 p-3 text-sm text-muted-foreground">
                Hola, queremos desarrollar una plataforma web con IA.
              </div>
              <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm border border-accent/30 bg-accent/10 p-3 text-sm text-foreground">
                ¡Perfecto! Es justo lo nuestro. ¿Agendamos una llamada de 20 min?
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
