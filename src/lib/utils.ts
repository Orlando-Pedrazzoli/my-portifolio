import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Combinar classes do Tailwind de forma otimizada
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formatar data
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });
}

// Scroll suave para seção
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Detectar se está no mobile
export function isMobile() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

// Delay para animações
export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Truncar texto
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Gerar gradiente aleatório
export function generateGradient() {
  const gradients = [
    'from-purple-600 to-blue-600',
    'from-pink-600 to-purple-600',
    'from-blue-600 to-cyan-600',
    'from-green-600 to-blue-600',
    'from-orange-600 to-pink-600',
    'from-indigo-600 to-purple-600',
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}

// Calcular tempo de leitura
export function calculateReadTime(text: string) {
  const wordsPerMinute = 200;
  const words = text.split(' ').length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min de leitura`;
}

// Validar email
export function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Copiar para clipboard
export async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// Formatar número grande
export function formatNumber(num: number) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

// Debounce function com tipagem correta
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function com tipagem correta
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
