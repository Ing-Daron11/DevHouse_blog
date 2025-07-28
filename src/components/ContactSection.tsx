import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { toast } from '@/hooks/use-toast';
import { FaInstagram } from 'react-icons/fa';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto para discutir tu proyecto.",
      });
      setFormData({ name: '', email: '', company: '', message: '', service: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,hsl(205_100%_55%/0.07),transparent_70%)]"></div>
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_30%_70%,hsl(158_100%_45%/0.05),transparent_70%)]"></div>      
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">¿Listo para empezar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conversemos sobre tu proyecto. Te ofrecemos una consultoría gratuita para evaluar tus necesidades tecnológicas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <AnimatedSection animation="slide-in-left">
            <div className="card-premium">
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                Cuéntanos sobre tu proyecto
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground"
                      placeholder="Tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="web">Desarrollo Web</option>
                      <option value="ai">Automatizaciones con IA</option>
                      <option value="crm">CRM/ERP</option>
                      <option value="marketing">Marketing Digital</option>
                      <option value="chatbot">Chatbots</option>
                      <option value="custom">Solución a Medida</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle relevante..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slide-in-right">
            <div className="space-y-8">
              <div className="card-premium">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Información de contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground hover:text-primary">looplogicdevhouse@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <a
                      href="https://wa.me/573025922818"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center no-underline">
                      <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Teléfono</div>
                        <div className="text-muted-foreground hover:text-primary">+57 302 5922818</div>
                      </div>
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <a
                      href="https://www.instagram.com/looplogicdevhouse?utm_source=qr&igsh=NXZod2lhMzFhYXdq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center no-underline hover:text-primary">

                      <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                        <FaInstagram className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Instagram</div>
                        <div className="text-muted-foreground hover:text-primary">looplogicdevhouse</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-premium bg-gradient-card border">
                <h4 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                    <span>Consultoría gratuita</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                    <span>Respuesta en 24 horas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                    <span>Soporte técnico continuo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                    <span>Garantía de satisfacción</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};