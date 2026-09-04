import { useEffect, useRef, useState } from 'react';

// Hook para animar la aparición de un elemento al hacer scroll
// Devuelve un ref y un booleano indicando si el elemento es visible en pantalla
export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // IntersectionObserver detecta si el elemento entra en el viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Limpieza del observer al desmontar
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};
