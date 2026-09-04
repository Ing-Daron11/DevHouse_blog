import type { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

/**
 * Textos base — NO son asesoría legal. Antes de producción, que un abogado
 * revise y complete según la normativa aplicable (Colombia: Ley 1581 de 2012).
 */
const CONTENT: Record<string, { title: string; body: string[] }> = {
  privacidad: {
    title: 'Política de privacidad',
    body: [
      'Loop & Logic DevHouse recoge únicamente los datos que nos facilitas voluntariamente a través de los formularios de contacto (nombre y medio de contacto) con el fin de responder a tu solicitud.',
      'No compartimos tu información con terceros ni la usamos para fines distintos a los indicados. Puedes solicitar la consulta, actualización o eliminación de tus datos escribiendo a looplogicdevhouse@gmail.com.',
      'Conservamos los datos el tiempo necesario para atender tu consulta y las obligaciones legales derivadas.',
    ],
  },
  terminos: {
    title: 'Términos de uso',
    body: [
      'Este sitio tiene carácter informativo. Los contenidos, servicios y tiempos descritos son orientativos y no constituyen una oferta contractual vinculante.',
      'Cualquier proyecto se rige por la propuesta y el contrato firmados entre las partes, donde se detallan alcance, plazos, precio y garantías.',
      'La marca, textos y elementos gráficos de este sitio pertenecen a Loop & Logic DevHouse.',
    ],
  },
  cookies: {
    title: 'Política de cookies',
    body: [
      'Este sitio no utiliza cookies de seguimiento ni de publicidad.',
      'Solo se emplea almacenamiento técnico imprescindible para el funcionamiento de la página. No se realiza perfilado de usuarios.',
      'Si en el futuro se incorpora analítica, se solicitará tu consentimiento previo.',
    ],
  },
};

export const LegalDialog = ({
  topic,
  children,
}: {
  topic: keyof typeof CONTENT | string;
  children: ReactNode;
}) => {
  const data = CONTENT[topic];
  if (!data) return <>{children}</>;

  return (
    <Dialog>
      <DialogTrigger className="transition-colors hover:text-foreground">
        {children}
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{data.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {data.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="pt-2 text-xs">Última actualización: {new Date().getFullYear()}.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDialog;
