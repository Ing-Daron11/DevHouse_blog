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

// Hook para animar un contador numérico cuando el elemento es visible
// Devuelve un ref y el valor actual del contador
export const useCounterAnimation = (endValue: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Observer para detectar visibilidad del elemento
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          let start = 0;
          const increment = endValue / (duration / 16);
          
          // Animación del contador
          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
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
  }, [endValue, duration, isVisible]);

  return { ref, count };
};