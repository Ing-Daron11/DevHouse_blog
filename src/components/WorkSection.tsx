import { ArrowUpRight, Github } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/**
 * TODO(contenido): reemplazar con proyectos reales.
 * Cada item: título, qué resolvía, stack, y link (demo o repo). Un screenshot
 * por proyecto sube mucho la credibilidad — añadir <img> arriba de CardHeader.
 */
interface Project {
  title: string;
  summary: string;
  stack: string[];
  href?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Plataforma de reservas',
    summary: 'App web multi-tenant con panel de administración, pagos y notificaciones automáticas.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Automatización de soporte con IA',
    summary: 'Agente que clasifica tickets, responde consultas frecuentes y escala a un humano cuando hace falta.',
    stack: ['Python', 'OpenAI', 'FastAPI'],
  },
  {
    title: 'CRM a medida',
    summary: 'Gestión de clientes, pipeline de ventas y reportes en tiempo real para un equipo comercial.',
    stack: ['React', 'TypeScript', 'Docker'],
  },
];

const WorkSection = () => (
  <section id="trabajo" className="border-b border-border py-24">
    <div className="container">
      <AnimatedSection animation="fade-in-up">
        <span className="kicker">Trabajo</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Proyectos recientes</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Una muestra del tipo de sistemas que construimos. ¿Quieres ver algo parecido al tuyo? Escríbenos.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <AnimatedSection key={p.title} animation="fade-in-up" delay={i * 80}>
            <Card className="flex h-full flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{p.summary}</CardDescription>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="font-mono text-[11px]">
                    {s}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection animation="fade-in-up" className="mt-10">
        <Button asChild variant="outline" className="gap-2">
          <a href="https://github.com/looplogicdevhouse-dotcom" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" /> Más en GitHub
          </a>
        </Button>
      </AnimatedSection>
    </div>
  </section>
);

export default WorkSection;
