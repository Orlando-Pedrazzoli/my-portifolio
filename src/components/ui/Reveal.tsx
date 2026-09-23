// src/components/ui/Reveal.tsx
'use client';

import { createElement, useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'article';
  delay?: number;
}

/** Fade + translate de 10px ao entrar no viewport, uma vez. Respeita reduced-motion via CSS. */
export default function Reveal({
  children,
  className,
  as = 'div',
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add('is-in');
            io.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // createElement em vez de <Tag>: o tipo do ref não depende da tag escolhida.
  return createElement(
    as,
    {
      ref,
      className: cn('reveal', className),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
}
