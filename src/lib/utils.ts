import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Utilidad para combinar clases condicionales y evitar duplicados
// Usa clsx para condicionales y tailwind-merge para unificar clases de Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
