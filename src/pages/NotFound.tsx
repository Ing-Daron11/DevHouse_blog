import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <p className="font-display text-sm font-semibold text-accent">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Página no encontrada</h1>
        <p className="mt-2 text-muted-foreground">La ruta que buscas no existe.</p>
        <Button asChild className="mt-6">
          <a href="/DevHouse_blog/">Volver al inicio</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
