import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BULLETS: Record<string, string[]> = {
  'Desarrollo Web': [
    'Diseño responsivo — impecable en todos los dispositivos',
    'Optimización SEO y Core Web Vitals',
    'Carga ultra-rápida y puntuaciones altas en Lighthouse',
    'Integración con sistemas y herramientas modernas',
  ],
  'Apps Android': [
    'Android nativo o multiplataforma con React Native o Flutter',
    'Rendimiento fluido: animaciones y arranque rápido',
    'Integración con notificaciones push, cámara, GPS y pagos',
    'Publicación en Google Play y soporte de versiones',
  ],
  'Automatizaciones IA': [
    'Modelos y agentes adaptados a tu negocio',
    'Automatización de tareas: menos tiempo, menos errores',
    'Análisis predictivo para decidir con datos',
    'Integración con tus sistemas sin fricción',
  ],
  'CRM / ERP': [
    'Gestión centralizada de clientes y procesos',
    'Escalabilidad: crece junto a tu empresa',
    'Seguridad avanzada de datos empresariales',
    'Reportes e indicadores clave en tiempo real',
  ],
  'Marketing Digital': [
    'Estrategias por nicho y público objetivo',
    'Gestión de campañas en redes y Google Ads',
    'Analítica y optimización continua',
    'Contenido y diseño que convierten',
  ],
  Chatbots: [
    'Atención 24/7 con respuestas personalizadas',
    'Procesamiento de lenguaje natural fluido',
    'Multicanal: WhatsApp, web y redes',
    'Entrenamiento continuo del asistente',
  ],
  Ciberseguridad: [
    'Auditoría de vulnerabilidades y remediación',
    'Protección de datos y cumplimiento normativo',
    'Monitoreo y detección proactiva de amenazas',
    'Capacitación en buenas prácticas para tu equipo',
  ],
};

const WA_LINK =
  'https://wa.me/573025922818?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consultor%C3%ADa%20gratuita%20sobre%20mi%20proyecto.';

const ServiceModal = ({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) => (
  <Dialog open={!!service} onOpenChange={(v) => !v && onClose()}>
    <DialogContent className="sm:max-w-lg">
      {service && (
        <>
          <DialogHeader>
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-secondary text-accent">
              <service.icon className="h-5 w-5" />
            </span>
            <DialogTitle className="mt-3 text-xl">{service.title}</DialogTitle>
            <DialogDescription>{service.description}</DialogDescription>
          </DialogHeader>

          <ul className="mt-2 space-y-3">
            {(BULLETS[service.title] ?? []).map((b) => (
              <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <Button asChild className="mt-4 w-full gap-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Agenda una consultoría gratuita <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </>
      )}
    </DialogContent>
  </Dialog>
);

export default ServiceModal;
