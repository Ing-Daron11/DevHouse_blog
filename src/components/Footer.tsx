import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaGithub } from 'react-icons/fa';
import { LegalDialog } from './LegalDialog';

const WA = 'https://wa.me/573025922818?text=Hola,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20Loop%20%26%20Logic%20DevHouse.';

const COLS = [
  {
    title: 'Servicios',
    links: [
      'Desarrollo Web',
      'Apps Android',
      'Automatizaciones IA',
      'CRM / ERP',
      'Marketing Digital',
      'Chatbots',
      'Ciberseguridad',
    ].map((label) => ({ label, href: '#servicios' })),
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Compromiso', href: '#compromiso' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
];

const SOCIAL = [
  { icon: FaWhatsapp, href: WA, label: 'WhatsApp' },
  { icon: FaInstagram, href: 'https://www.instagram.com/looplogicdevhouse', label: 'Instagram' },
  { icon: FaGithub, href: 'https://github.com/looplogicdevhouse-dotcom', label: 'GitHub' },
];

const CONTACT = [
  { icon: Mail, text: 'looplogicdevhouse@gmail.com', href: 'mailto:looplogicdevhouse@gmail.com' },
  { icon: Phone, text: '+57 302 5922818', href: WA },
  { icon: MapPin, text: 'Guadalajara de Buga, Colombia', href: 'https://www.google.com/maps/place/Guadalajara+de+Buga,+Valle+del+Cauca,+Colombia' },
];

export const Footer = () => (
  <footer className="bg-background">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="font-display text-xl font-extrabold tracking-tight">
            Dev<span className="text-accent">House</span>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            DevHouse de software. Transformamos ideas en sistemas escalables y bien documentados.
          </p>
          <div className="flex gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Contacto
          </h4>
          <ul className="mt-4 space-y-3">
            {CONTACT.map((c) => (
              <li key={c.text}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="break-words">{c.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Loop &amp; Logic DevHouse. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <LegalDialog topic="privacidad">Privacidad</LegalDialog>
          <LegalDialog topic="terminos">Términos</LegalDialog>
          <LegalDialog topic="cookies">Cookies</LegalDialog>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
