// FILE: src/hooks/useIntersectionObserver.ts
// =====================================
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options?: UseIntersectionObserverProps
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: options?.threshold ?? 0.1,
        root: options?.root ?? null,
        rootMargin: options?.rootMargin ?? '0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options?.threshold, options?.root, options?.rootMargin]);

  return { ref, isIntersecting };
}
