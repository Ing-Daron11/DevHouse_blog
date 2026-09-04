import { useState } from 'react';
import { Code2, Cpu, Database, Globe, LineChart, Shield, Smartphone, ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ServiceModal, { type Service } from './ServiceModal';

const services: Service[] = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Aplicaciones y sitios rápidos, accesibles y optimizados para SEO con stack moderno.',
  },
  {
    icon: Smartphone,
    title: 'Apps Android',
    description: 'Apps Android nativas y multiplataforma con React Native o Flutter, publicadas en Google Play.',
  },
  {
    icon: Cpu,
    title: 'Automatizaciones IA',
    description: 'Modelos y agentes que eliminan tareas repetitivas e integran tus sistemas.',
  },
  {
    icon: Database,
    title: 'CRM / ERP',
    description: 'Sistemas de gestión a medida, escalables y desplegados en la nube.',
  },
  {
    icon: LineChart,
    title: 'Marketing Digital',
    description: 'Estrategia basada en datos para posicionar tu marca y maximizar el ROI.',
  },
  {
    icon: Code2,
    title: 'Chatbots',
    description: 'Asistentes con NLP para atención automatizada 24/7 en web y WhatsApp.',
  },
  {
    icon: Shield,
    title: 'Ciberseguridad',
    description: 'Auditorías de vulnerabilidad, protección de datos y blindaje de sistemas.',
  },
];

const ServicesSection = () => {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="servicios" className="section-alt border-b border-border py-24">
      <div className="container">
        <AnimatedSection animation="fade-in-up">
          <span className="kicker">Servicios</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Lo que construimos
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Seis áreas, un mismo estándar de ingeniería: código revisado, pruebas y documentación.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} animation="fade-in-up" delay={(i % 3) * 80}>
              <button
                onClick={() => setSelected(s)}
                className="group h-full w-full text-left"
              >
                <Card className="h-full transition-colors hover:border-accent/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary text-accent">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    <CardTitle className="mt-4 text-lg">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{s.description}</CardDescription>
                  </CardContent>
                </Card>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default ServicesSection;
