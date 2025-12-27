import * as React from "react"

// Hook personalizado para detectar si la pantalla es móvil
// Devuelve true si el ancho de la ventana es menor al breakpoint definido
const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Estado para indicar si es móvil
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // MediaQuery para detectar el tamaño de pantalla
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    // Función que actualiza el estado según el tamaño
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    // Limpieza del event listener al desmontar
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
