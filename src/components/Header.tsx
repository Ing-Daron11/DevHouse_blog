import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactDialog } from './ContactDialog';

const NAV = [
  { label: 'Servicios', id: 'servicios' },
  { label: 'Trabajo', id: 'trabajo' },
  { label: 'Proceso', id: 'proceso' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Blog', id: 'blog' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors ${
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl font-extrabold tracking-tight text-foreground"
        >
          Dev<span className="text-accent">House</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`text-sm transition-colors hover:text-foreground ${
                active === n.id ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ContactDialog>
            <Button size="sm">Empezar proyecto</Button>
          </ContactDialog>
        </div>

        <button
          className="text-muted-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col py-4">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <ContactDialog>
              <Button size="sm" className="mt-3 w-full">
                Empezar proyecto
              </Button>
            </ContactDialog>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
