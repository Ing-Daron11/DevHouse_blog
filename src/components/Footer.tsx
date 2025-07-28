import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const message = "Hola, me interesa conocer más sobre los servicios de Loop & Logic DevHouse. ¿Podrían darme más información?";

  return (
    <footer className="relative bg-gradient-dark border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(205_100%_55%/0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <AnimatedSection animation="fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center">
                <Sparkles className="text-primary mr-2 h-6 w-6" />
                <h3 className="text-xl font-bold text-gradient">
                  Loop & Logic DevHouse
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tu partner tecnológico especializado en soluciones digitales innovadoras. 
                Transformamos ideas en experiencias excepcionales.
              </p>
              <div className="flex space-x-4">
                <a
                  href={`https://wa.me/3025922818?text=${message}`}
                  className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors duration-300 group"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-5 w-5 text-green-500 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Servicios</h4>
              <ul className="space-y-3">
                {[
                  'Desarrollo Web',
                  'Automatizaciones IA',
                  'CRM/ERP',
                  'Marketing Digital',
                  'Chatbots',
                  'Soluciones a Medida'
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#servicios"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Company */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Empresa</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Nosotros', href: '#nosotros' },
                  { label: 'Portafolio', href: '#portafolio' },
                  { label: 'Casos de Éxito', href: '#testimonios' },
                  { label: 'Blog', href: '#blog' },
                  { label: 'Carreras', href: '#carreras' },
                  { label: 'Contacto', href: '#contacto' }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                  <a
                    href="mailto:looplogicdevhouse@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    looplogicdevhouse@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                  <a
                    href="https://wa.me/573025922818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    +57 302 5922818
                  </a>
                </div>
                <div className="flex items-center">
                  <FaInstagram className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/looplogicdevhouse?utm_source=qr&igsh=NXZod2lhMzFhYXdq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    looplogicdevhouse
                  </a>     
                </div>
                  
                <div className='flex items-center'>
                  <MapPin className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    Guadalajara de Buga, Colombia.
                  </span>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection animation="fade-in-up" delay={400}>
          <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Loop & Logic DevHouse. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#privacidad"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacidad
              </a>
              <a
                href="#terminos"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Términos
              </a>
              <a
                href="#cookies"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Cookies
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};