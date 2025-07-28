
import { FaWhatsapp } from "react-icons/fa";
import {useState} from "react";

export const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa conocer más sobre los servicios de Loop & Logic DevHouse. ¿Podrían darme más información?"
    );

    const whatsappUrl = `https://wa.me/3025922818?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div className="mb-2 px-3 py-2 bg-white text-gray-800 rounded-lg text-sm font-medium shadow-lg z-[10000] whitespace-nowrap" style={{ position: "absolute", bottom: 0, right: 70 }}>
          ¡Chatea con nosotros!
        </div>
      )}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:bg-green-400 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
        style={{ width: 56, height: 56 }}
      >
        <FaWhatsapp className="h-6 w-6" />
      </button>
    </div>
  );
};