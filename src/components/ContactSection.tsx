
// Componente de sección de contacto para mostrar información y formulario de contacto
import React from "react";
import { useState } from "react";
// Iconos utilizados en la sección de contacto
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { toast } from "@/hooks/use-toast";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppFloat } from "./WhatsAppFloat";


// Definición del componente principal de la sección de contacto
export const ContactSection = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });
  // Estado para controlar si el formulario está siendo enviado
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Maneja el envío del formulario de contacto
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío de formulario (puedes reemplazar por lógica real)
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos pronto para discutir tu proyecto.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        service: "",
      });
    }, 2000);
  };

  // Maneja los cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  // Renderizado de la sección de contacto
  return (
    <section className="py-24 relative overflow-hidden mt-0 px-0">
      {/* Fondos decorativos con gradientes */}
      <div className="mt-0 px-0 absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,hsl(205_100%_55%/0.07),transparent_70%)]"></div>
      <div className="mt-0 px-0 absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_30%_70%,hsl(158_100%_45%/0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10 mt-0 py-0">
        {/* Título y descripción */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">¿Listo para empezar?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conversemos sobre tu proyecto. Te ofrecemos una consultoría gratuita
            para evaluar tus necesidades tecnológicas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Formulario de contacto (actualmente comentado, puedes habilitarlo si lo necesitas) */}
          {/* ...formulario aquí... */}

          {/* Información de contacto y beneficios */}
          <AnimatedSection animation="slide-in-left">
            <div className="card-premium h-full flex flex-col justify-between group">
              <div>
                {/* Título de la invitación */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  ¡Agenda tu consultoría gratuita ahora!
                </h3>

                {/* Descripción de la invitación */}
                <p className="text-muted-foreground mb-8 text-lg">
                  Estamos listos para escuchar tu idea y ayudarte a construir la
                  solución digital que necesitas. Recibe asesoría sin
                  compromiso, de manera rápida y directa.
                </p>
              </div>

              {/* Botón de WhatsApp */}
              <a
                href="https://wa.me/573025922818?text=Hola,%20me%20gustaría%20agendar%20una%20consultoría%20gratuita%20sobre%20mi%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-whatsapp flex items-center justify-center mt-auto hover:scale-105 transition-transform duration-300"
              >
                <FaWhatsapp className="mr-3 h-6 w-6" />
                Hablemos por WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Detalles de contacto y razones para elegirnos */}
          <AnimatedSection animation="slide-in-right">
            <div className="space-y-8">
              {/* Tarjeta de información de contacto */}
              <div className="card-premium group">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Información de contacto
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center group-hover-grow">
                    <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground hover:text-accent">
                        looplogicdevhouse@gmail.com
                      </div>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-center group-hover-grow">
                    <a
                      href="https://wa.me/573025922818"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center no-underline"
                    >
                      <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          Teléfono
                        </div>

                        <div className="text-muted-foreground hover:text-accent">
                          +57 302 5922818
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center group-hover-grow">
                    <a
                      href="https://www.instagram.com/looplogicdevhouse?utm_source=qr&igsh=NXZod2lhMzFhYXdq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center no-underline hover:text-primary"
                    >
                      <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                        <FaInstagram className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          Instagram
                        </div>

                        <div className="text-muted-foreground hover:text-accent">
                          looplogicdevhouse
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-center cursor-pointer group-hover-grow">
                    <div className="p-3 bg-gradient-primary rounded-xl mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>

                    <div>
                      <div className="font-semibold text-foreground">
                        Ubicación
                      </div>

                      <div className="text-muted-foreground">
                        Guadalajara de Buga, Colombia
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hover-glow-overlay group-hover:opacity-100"></div>
              </div>

              {/* Tarjeta de beneficios */}
              <div className="card-premium bg-gradient-card border group hover:bg-black/20 transition-colors duration-300">
                <h4 className="text-xl font-bold mb-4">¿Por qué elegirnos?</h4>
                <ul className="space-y-3">
                  {/* Beneficio: Consultoría gratuita */}
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-accent group-hover:text-primary transition-colors duration-300" />
                    <span>Consultoría gratuita</span>
                  </li>
                  {/* Beneficio: Respuesta rápida */}
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-accent group-hover:text-primary transition-colors duration-300" />
                    <span>Respuesta en 24 horas</span>
                  </li>
                  {/* Beneficio: Soporte técnico */}
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-accent group-hover:text-primary transition-colors duration-300" />
                    <span>Soporte técnico continuo</span>
                  </li>
                  {/* Beneficio: Garantía */}
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 text-accent group-hover:text-primary transition-colors duration-300" />
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
