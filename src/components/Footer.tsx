// Footer: Pie de página con información de contacto, servicios y enlaces sociales
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

// Componente principal del pie de página
export const Footer = () => {
  // Año actual para copyright
  const currentYear = new Date().getFullYear();

  // Mensaje predefinido para WhatsApp
  const message = "Hola, me interesa conocer más sobre los servicios de Loop & Logic DevHouse. ¿Podrían darme más información?";

  // Enlaces a redes sociales
  const socialLinks = [
    {
      name: 'WhatsApp',
      href: `https://wa.me/3025922818?text=${message}`,
      icon: FaWhatsapp,
      colorClass: 'text-green-500', // El color estándar de WhatsApp
      hoverColorClass: 'group-hover:text-green-400', // Un verde más claro al hacer hover
      ariaLabel: 'WhatsApp de Loop & Logic DevHouse',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/looplogicdevhouse?utm_source=qr&igsh=NXZod2lhMzFhYXdq',
      icon: FaInstagram,
      colorClass: 'text-[#833AB4]', // Púrpura de Instagram
      hoverColorClass: 'group-hover:text-purple-400', // Un púrpura más claro al hacer hover
      ariaLabel: 'Instagram de Loop & Logic DevHouse',
    },
  ];
  
  // Enlaces a servicios principales
  const serviceLinks = [
    { label: 'Desarrollo Web', href: '#servicios' },
    { label: 'Automatizaciones IA', href: '#servicios' },
    { label: 'CRM/ERP', href: '#servicios' },
    { label: 'Marketing Digital', href: '#servicios' },
    { label: 'Chatbots', href: '#servicios' },
    { label: 'Soluciones a Medida', href: '#servicios' },
    { label: 'Ciberseguridad', href: '#servicios' },
    { label: 'Identidad Visual', href: '#servicios' },
    { label: 'Soporte Técnico', href: '#servicios' },
  ];

  // Enlaces a políticas y legales
  const otrosLinks = [
    { label: 'Privacidad', href: '#privacidad' },
    { label: 'Términos', href: '#terminos' },
    { label: 'Cookies', href: '#cookies' }
  ];

  // Información de contacto
  const infoContacto = [
    {
      icon: Mail,
      text: 'looplogicdevhouse@gmail.com',
      href: 'mailto:looplogicdevhouse@gmail.com',
      ariaLabel: 'Enviar correo a Loop & Logic DevHouse',
      type: 'email'
    },
    {
      icon: Phone,
      text: '+57 302 5922818',
      href: `https://wa.me/573025922818?text=${message}`,
      ariaLabel: 'Contactar por WhatsApp',
      type: 'phone'
    },
    {
      icon: MapPin,
      text: 'Guadalajara de Buga, Colombia.',
      href: 'https://www.google.com/maps/place/Guadalajara+de+Buga,+Valle+del+Cauca,+Colombia',
      ariaLabel: 'Ver ubicación en Google Maps',
      type: 'location'
    }
  ];

  return (
    <footer className="relative bg-gradient-dark border-t border-border/50">
      {/* Fondo decorativo con gradiente */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(205_100%_55%/0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Información de la empresa y redes sociales */}
          <AnimatedSection animation="fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Sparkles className="text-primary mr-2 h-7 w-7" />
                <h3 className="text-xl font-bold text-gradient">
                  Loop & Logic DevHouse
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tu partner tecnológico especializado en soluciones digitales innovadoras. 
                Transformamos ideas en experiencias excepcionales.
              </p>

              {/* Enlaces sociales */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-lg hover:bg-accent-foreground/20 transition-colors duration-300 group flex items-center justify-center"
                    aria-label={social.ariaLabel}
                  >
                    <social.icon className={`h-5 w-5 ${social.colorClass} ${social.hoverColorClass} transition-colors`} />
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Servicios */}
          <AnimatedSection animation="fade-in-up" delay={100}>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Servicios</h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Empresa */}
          <AnimatedSection animation="fade-in-up" delay={200}>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Empresa</h4>
              <ul className="space-y-3">
                {/* Enlaces de la empresa */}
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
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Contacto */}
          <AnimatedSection animation="fade-in-up" delay={300}>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Contacto</h4>
              <div className="space-y-4">
                {/* Información de contacto: email, teléfono, ubicación */}
                {infoContacto.map((item) => (
                  <div key={item.text} className="flex items-start"> 
                    <item.icon className="h-4 w-4 text-accent mr-3 flex-shrink-0 mt-1" />
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.type !== 'email' ? "_blank" : "_self"}
                        rel={item.type !== 'email' ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm break-words"
                        aria-label={item.ariaLabel}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm">
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Barra inferior de copyright y políticas */}
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