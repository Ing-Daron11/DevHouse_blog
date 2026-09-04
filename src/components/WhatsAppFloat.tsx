import { FaWhatsapp } from 'react-icons/fa';

const MSG = encodeURIComponent(
  '¡Hola! Me interesa conocer más sobre los servicios de Loop & Logic DevHouse.',
);

export const WhatsAppFloat = () => (
  <a
    href={`https://wa.me/573025922818?text=${MSG}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="group fixed bottom-6 right-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-accent shadow-lg transition-transform hover:scale-105"
  >
    <FaWhatsapp className="h-5 w-5" />
    <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 text-xs text-foreground opacity-0 transition-opacity group-hover:opacity-100">
      Chatea con nosotros
    </span>
  </a>
);

export default WhatsAppFloat;
