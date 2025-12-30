
import { CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Déjanos hacer el trabajo, <br />
              <span className="text-gray-400">para que te enfoques en lo que importa.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Nuestro equipo de expertos está listo para llevar tu idea al siguiente nivel. Sin complicaciones, solo resultados.
            </p>
            
            <div className="space-y-4">
              {[
                "Soporte técnico especializado",
                "Desarrollo ágil y escalable",
                "Consultoría estratégica gratuita"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-6 h-6" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-bold transition-colors w-full md:w-auto">
              Contáctanos Ahora
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-xl">D</div>
                  <div>
                    <h4 className="font-bold">DevHouse Team</h4>
                    <p className="text-sm text-green-400">Disponible para nuevos proyectos</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800 p-4 rounded-lg rounded-tl-none text-sm text-gray-300">
                    Hola, estamos interesados en desarrollar una plataforma web con IA.
                  </div>
                  <div className="bg-green-900/30 border border-green-500/20 p-4 rounded-lg rounded-tr-none text-sm text-white ml-auto max-w-[90%]">
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
