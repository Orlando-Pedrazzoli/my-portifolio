// src/components/layout/BrandLink.tsx
// Logo + nome. Fora da home navega para "/"; já na home, o Link não navega
// (mesma rota), por isso fazemos scroll ao topo e limpamos o hash à mão.
'use client';

import type { MouseEvent, ReactNode } from 'react';
import { Link, usePathname } from '@/i18n/navigation';

export default function BrandLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== '/') return;
    e.preventDefault();
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }

  return (
    <Link
      href='/'
      onClick={onClick}
      className={className}
      aria-label='Orlando Pedrazzoli — home'
    >
      {children}
    </Link>
  );
}
