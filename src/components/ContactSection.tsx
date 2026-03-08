
import { CheckCircle2, Mail, Phone, MessageCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const ContactSection = () => {
  return (
    <section className="py-8 bg-[#F8FAFC] text-[#22313A] border-b border-[#E6ECF1]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          
          <div className="space-y-3">
            <AnimatedSection animation="fade-in-up" delay={0}>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-1 modal-title flex items-center gap-3 justify-center">
                <MessageCircle className="w-8 h-8 text-accent transition-transform duration-500 hover:scale-125" />
                Déjanos hacer el trabajo
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-left" delay={100}>
              <span className="block text-[#487070] text-xl font-bold mb-2">para que te enfoques en lo que importa.</span>
            </AnimatedSection>
            <p className="text-[#487070] text-sm mb-1">
              Nuestro equipo de expertos está listo para llevar tu idea al siguiente nivel. Sin complicaciones, solo resultados.
            </p>
            
            <div className="space-y-1">
              {[
                "Soporte técnico especializado",
                "Desarrollo ágil y escalable",
                "Consultoría estratégica gratuita"
              ].map((item, index) => (
                <AnimatedSection key={index} animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} delay={200 + index * 100}>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent w-6 h-6 transition-transform duration-500 hover:scale-125" />
                    <span className="text-[#487070]">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="scale-in" delay={500}>
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <a href="mailto:looplogicdevhouse@gmail.com" className="btn-contacto">
                  <Mail className="w-6 h-6" /> Email
                </a>
                <a href="tel:+573025922818" className="btn-contacto">
                  <Phone className="w-6 h-6" /> Llamar
                </a>
                <a href="https://wa.me/573025922818" target="_blank" rel="noopener noreferrer" className="btn-contacto">
                  <MessageCircle className="w-6 h-6" /> WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-accent-glow/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/80 border border-accent/20 rounded-3xl p-8 md:p-12 shadow-xl backdrop-blur-md card-contacto-glass">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-2 border-accent">D</div>
                  <div>
                    <h4 className="font-bold text-lg text-[#18333D]">DevHouse Team</h4>
                    <p className="text-sm text-accent font-semibold">Disponible para nuevos proyectos</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-lg rounded-tl-none text-base text-[#487070] shadow-sm border border-[#E6ECF1]">
                    Hola, estamos interesados en desarrollar una plataforma web con IA.
                  </div>
                  <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg rounded-tr-none text-base text-accent ml-auto max-w-[90%] shadow-md font-semibold">
                    ¡Claro! En DevHouse somos expertos en eso. ¿Agendamos una llamada?
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
