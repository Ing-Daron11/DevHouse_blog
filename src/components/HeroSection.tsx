
import { ArrowRight, X } from 'lucide-react';
import React, { useState } from 'react';

const DnaAnimation = () => {
  // Generamos nodos dinámicamente para crear la doble hélice
  const nodes = Array.from({ length: 15 }).map((_, i) => {
    const y = i * 14; // Espaciado vertical
    const rotation = i * 24; // Rotación para simular la espiral
    return (
      <div 
        key={i} 
        className="dna-strand" 
        style={{ top: '50px', transform: `rotateY(${rotation}deg)` }}
      >
        {/* Nodo izquierdo */}
        <div className="dna-node" style={{ transform: `translateX(-30px) translateY(${y}px)` }}></div>
        {/* Línea conectora */}
        <div className="dna-line" style={{ top: `${y + 5}px` }}></div>
        {/* Nodo derecho */}
        <div className="dna-node" style={{ transform: `translateX(30px) translateY(${y}px)` }}></div>
      </div>
    );
  });

  return <div className="dna-container">{nodes}</div>;
};

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ nombre: '', contacto: '', mensaje: '' });
  const [sending, setSending] = useState(false);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Enviar a WhatsApp (solo abre el chat con mensaje prellenado)
    const msg = encodeURIComponent(`Hola, soy ${form.nombre}. ${form.mensaje}\nContacto: ${form.contacto}`);
    window.open(`https://wa.me/573025922818?text=${msg}`, '_blank');
    setSending(false);
    setShowForm(false);
    setShowConfirm(true);
    setForm({ nombre: '', contacto: '', mensaje: '' });
  };

  const closeModal = () => setShowForm(false);
  const closeConfirm = () => setShowConfirm(false);

  return (
    <header className="relative flex items-center justify-center bg-[#F8FAFC] text-[#22313A] overflow-hidden py-8 shadow-none border-b border-[#E6ECF1]" aria-label="Hero principal">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F0F4F8_0%,_#F8FAFC_100%)] z-0 opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-block px-2 py-0.5 rounded-full border border-accent/20 bg-white text-accent text-xs font-medium mb-1 shadow-none">
            Loop & Logic DevHouse
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-1">
            Transformamos ideas en <span className="text-accent font-extrabold">experiencias digitales</span>
          </h1>
          <p className="text-[#487070] text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 font-medium mb-1">
            Tu partner tecnológico especializado en soluciones innovadoras. Desarrollo web, IA y automatización a medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start pt-1">
            <button
              className="px-8 py-4 bg-white border border-accent text-accent hover:bg-accent hover:text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-accent/40 shadow-sm"
              aria-label="Empezar Proyecto"
              onClick={() => setShowForm(true)}
            >
              Empezar Proyecto
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/looplogicdevhouse-dotcom"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border border-accent text-accent hover:bg-accent hover:text-white rounded-xl font-semibold transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accent/20 shadow-sm"
              aria-label="Ver Portafolio"
            >
              <span>Ver Portafolio</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
              {/* Modal de formulario corto */}
              {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E26cc] backdrop-blur-[3px] p-4 animate-fade-in">
                  <div className="relative rounded-3xl modal-shadow max-w-md w-full bg-white p-8" style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>
                    <button onClick={closeModal} className="absolute top-4 right-4 p-2 rounded-full text-2xl text-accent bg-white border border-accent shadow hover:bg-accent hover:text-white transition-all" aria-label="Cerrar">
                      <X className="h-7 w-7" />
                    </button>
                    <h2 className="text-2xl font-extrabold mb-4 text-[#18333D]">Cuéntanos tu necesidad</h2>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <input
                        type="text"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="w-full px-4 py-2 rounded-lg border border-accent/30 focus:border-accent outline-none bg-[#F8FAFC] text-[#18333D] font-medium"
                        value={form.nombre}
                        onChange={handleFormChange}
                      />
                      <input
                        type="text"
                        name="contacto"
                        required
                        placeholder="Email o WhatsApp"
                        className="w-full px-4 py-2 rounded-lg border border-accent/30 focus:border-accent outline-none bg-[#F8FAFC] text-[#18333D] font-medium"
                        value={form.contacto}
                        onChange={handleFormChange}
                      />
                      <textarea
                        name="mensaje"
                        required
                        placeholder="¿Qué necesitas? Cuéntanos sin compromiso."
                        className="w-full px-4 py-2 rounded-lg border border-accent/30 focus:border-accent outline-none bg-[#F8FAFC] text-[#18333D] font-medium min-h-[80px]"
                        value={form.mensaje}
                        onChange={handleFormChange}
                      />
                      <button
                        type="submit"
                        className="btn-agendar-cita w-full mt-2 flex items-center justify-center gap-2"
                        disabled={sending}
                      >
                        {sending ? 'Enviando...' : 'Enviar y ser contactado'}
                        <ArrowRight className="h-5 w-5" />
                      </button>
                      <p className="text-xs text-[#487070] mt-2 text-center">Prometemos contactarte en menos de 6 horas. Sin presiones, solo soluciones.</p>
                    </form>
                  </div>
                </div>
              )}

              {/* Modal de confirmación */}
              {showConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1E26cc] backdrop-blur-[3px] p-4 animate-fade-in">
                  <div className="relative rounded-3xl modal-shadow max-w-md w-full bg-white p-8 text-center" style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>
                    <button onClick={closeConfirm} className="absolute top-4 right-4 p-2 rounded-full text-2xl text-accent bg-white border border-accent shadow hover:bg-accent hover:text-white transition-all" aria-label="Cerrar">
                      <X className="h-7 w-7" />
                    </button>
                    <h2 className="text-2xl font-extrabold mb-4 text-[#18333D]">¡Gracias por confiar en nosotros!</h2>
                    <p className="text-lg text-[#487070] mb-2">Recibimos tu mensaje y te contactaremos en menos de 6 horas.</p>
                    <p className="text-accent font-bold">Nuestro equipo te responderá por el medio que indicaste.</p>
                    <button onClick={closeConfirm} className="btn-agendar-cita w-full mt-6">Cerrar</button>
                  </div>
                </div>
              )}
        </div>

        <div className="relative h-[220px] sm:h-[300px] md:h-[400px] flex items-center justify-center">
          {/* Efecto de brillo detrás del ADN */}
          <div className="absolute inset-0 bg-[#F0F4F8] blur-[60px] rounded-full transform scale-75"></div>
          <DnaAnimation />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;