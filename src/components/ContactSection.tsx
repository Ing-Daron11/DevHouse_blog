
import { CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-8 bg-[#F8FAFC] text-[#22313A] border-b border-[#E6ECF1]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-1">
              Déjanos hacer el trabajo, <br />
              <span className="text-[#487070]">para que te enfoques en lo que importa.</span>
            </h2>
            <p className="text-[#487070] text-sm mb-1">
              Nuestro equipo de expertos está listo para llevar tu idea al siguiente nivel. Sin complicaciones, solo resultados.
            </p>
            
            <div className="space-y-1">
              {[
                "Soporte técnico especializado",
                "Desarrollo ágil y escalable",
                "Consultoría estratégica gratuita"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-6 h-6" />
                  <span className="text-[#487070]">{item}</span>
                </div>
              ))}
            </div>

             <button className="mt-4 px-8 py-2 bg-accent text-white hover:bg-accent/90 rounded-xl font-bold transition-colors w-full md:w-auto shadow-sm">
              Contáctanos Ahora
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-accent-glow/10 rounded-2xl blur-2xl"></div>
             <div className="relative bg-white border border-[#E6ECF1] rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">D</div>
                  <div>
                    <h4 className="font-bold">DevHouse Team</h4>
                     <p className="text-sm text-accent">Disponible para nuevos proyectos</p>
                  </div>
                </div>
                <div className="space-y-4">
                   <div className="bg-[#F8FAFC] p-4 rounded-lg rounded-tl-none text-sm text-[#487070]">
                     Hola, estamos interesados en desarrollar una plataforma web con IA.
                   </div>
                   <div className="bg-accent/10 border border-accent/10 p-4 rounded-lg rounded-tr-none text-sm text-accent ml-auto max-w-[90%]">
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
