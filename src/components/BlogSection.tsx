import { ArrowUpRight, Rss } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/**
 * TODO(contenido): añadir posts reales aquí. Con al menos uno, la grilla
 * reemplaza al estado "próximamente" automáticamente.
 */
interface Post {
  tag: string;
  title: string;
  excerpt: string;
  href: string;
}
const POSTS: Post[] = [];

const WA_LINK =
  'https://wa.me/573025922818?text=Hola,%20quiero%20que%20me%20avisen%20cuando%20publiquen%20en%20el%20blog.';

const BlogSection = () => (
  <section id="blog" className="section-alt border-b border-border py-24">
    <div className="container">
      <AnimatedSection animation="fade-in-up">
        <span className="kicker">Blog</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Notas de ingeniería</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Aprendizajes reales de nuestros proyectos: decisiones técnicas, errores y cómo los resolvimos.
        </p>
      </AnimatedSection>

      {POSTS.length > 0 ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {POSTS.map((p, i) => (
            <AnimatedSection key={p.title} animation="fade-in-up" delay={i * 100}>
              <a href={p.href} className="block h-full">
                <Card className="group h-full transition-colors hover:border-accent/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="font-mono">{p.tag}</Badge>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </div>
                    <CardTitle className="mt-3 text-xl">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{p.excerpt}</CardDescription>
                  </CardContent>
                </Card>
              </a>
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <AnimatedSection animation="fade-in-up" className="mt-12">
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-start gap-4 py-10">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary text-accent">
                <Rss className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Estamos escribiendo el primero</p>
                <p className="mt-1 max-w-md text-sm text-muted-foreground">
                  Documentamos cada proyecto y pronto lo compartimos aquí. ¿Quieres que te avisemos?
                </p>
              </div>
              <Button asChild size="sm" variant="outline">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Avísenme
                </a>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      )}
    </div>
  </section>
);

export default BlogSection;
