import { useState, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const WHATSAPP_NUMBER = '573025922818';

/** Short lead form that opens WhatsApp with a prefilled message. */
export const ContactDialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nombre: '', contacto: '', mensaje: '' });
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola, soy ${form.nombre}. ${form.mensaje}\nContacto: ${form.contacto}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener');
    setForm({ nombre: '', contacto: '', mensaje: '' });
    setDone(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setDone(false);
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {done ? (
          <div className="py-4 text-center">
            <DialogHeader>
              <DialogTitle>Mensaje en camino</DialogTitle>
              <DialogDescription>
                Abrimos WhatsApp con tu mensaje. Te respondemos en menos de 6 horas.
              </DialogDescription>
            </DialogHeader>
            <Button className="mt-6 w-full" onClick={() => setOpen(false)}>
              Cerrar
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Cuéntanos tu proyecto</DialogTitle>
              <DialogDescription>
                Respuesta en menos de 6 horas. Sin compromiso.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="mt-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cd-nombre">Nombre</Label>
                <Input
                  id="cd-nombre"
                  required
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cd-contacto">Email o WhatsApp</Label>
                <Input
                  id="cd-contacto"
                  required
                  value={form.contacto}
                  onChange={(e) => setForm({ ...form, contacto: e.target.value })}
                  placeholder="Cómo te contactamos"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cd-mensaje">¿Qué necesitas?</Label>
                <Textarea
                  id="cd-mensaje"
                  required
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  placeholder="Describe brevemente tu idea o problema"
                  className="min-h-24"
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                Enviar <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
