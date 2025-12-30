import { Code, Cpu, Database, Globe, Layout, Shield } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y optimizados para SEO."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Automatizaciones IA",
    description: "Implementación de inteligencia artificial para optimizar procesos."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "CRM/ERP",
    description: "Sistemas de gestión empresarial a medida y escalables."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Marketing Digital",
    description: "Estrategias para posicionar tu marca en el mundo digital."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Chatbots",
    description: "Asistentes virtuales inteligentes para atención al cliente 24/7."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ciberseguridad",
    description: "Protección de datos y auditorías de seguridad."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para escalar tu negocio.
          </p>
        </div>

        {/* Carrusel Horizontal */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar px-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="min-w-[300px] md:min-w-[350px] bg-gray-900/50 border border-gray-800 p-8 rounded-2xl snap-center hover:border-green-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6">
                <button className="text-sm font-medium text-green-500 hover:text-green-400 flex items-center gap-1">
                  Saber más <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;