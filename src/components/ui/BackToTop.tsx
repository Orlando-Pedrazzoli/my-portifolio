// src/components/ui/BackToTop.tsx
// Botão "voltar ao topo", fixo no canto inferior direito. Aparece depois de
// um viewport de scroll, detetado por IntersectionObserver num sentinela
// (sem listener de scroll). Fora da árvore de foco quando invisível
// (visibility: hidden em CSS), respeita reduced-motion e devolve o foco ao
// <main> depois de subir. z-index abaixo do painel do menu mobile (40).
'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function BackToTop() {
  const t = useTranslations('common');
  const sentinel = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    // O sentinela está a 100vh do topo: quando sai por cima, mostramos.
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function scrollToTop() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    const main = document.querySelector<HTMLElement>('main');
    main?.focus({ preventScroll: true });
  }

  return (
    <>
      <div ref={sentinel} aria-hidden className='back-to-top-sentinel' />
      <button
        type='button'
        onClick={scrollToTop}
        aria-label={t('backToTop')}
        data-visible={visible || undefined}
        className='back-to-top'
      >
        <svg
          aria-hidden
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M8 13V3M3.5 7.5 8 3l4.5 4.5' />
        </svg>
      </button>
    </>
  );
}
