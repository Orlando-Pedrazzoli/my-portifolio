// src/components/work/CaseNav.tsx
// Orientação em páginas longas. Desktop (xl+): índice vertical fixo à direita,
// número + etiqueta, secção ativa a cheio. Mobile/tablet: barra sticky abaixo
// do header com a secção atual e uma linha de progresso de leitura.
// Client component: IntersectionObserver para a secção ativa, scroll para o
// progresso. Sem Framer Motion — só CSS.
'use client';

import { useEffect, useState } from 'react';

export interface CaseNavItem {
  id: string;
  label: string;
}

export default function CaseNav({ items }: { items: CaseNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  const [progress, setProgress] = useState(0);

  // Secção ativa: a última cujo topo já passou a linha dos 35% da viewport.
  useEffect(() => {
    const els = items
      .map(i => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;

    const update = () => {
      const line = window.innerHeight * 0.35;
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);

  const activeIndex = Math.max(
    0,
    items.findIndex(i => i.id === active),
  );

  return (
    <>
      {/* Desktop */}
      <nav className='case-nav' aria-label='Case study'>
        <ol>
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className='case-nav-link'
                aria-current={item.id === active ? 'location' : undefined}
              >
                <span className='case-nav-n'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className='case-nav-label'>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Mobile / tablet */}
      <div className='case-bar' aria-hidden='true'>
        <div className='wrap flex items-center justify-between'>
          <span className='eyebrow text-ink'>
            {String(activeIndex + 1).padStart(2, '0')}{' '}
            {items[activeIndex]?.label}
          </span>
          <span className='eyebrow'>
            {activeIndex + 1} / {items.length}
          </span>
        </div>
        <span
          className='case-bar-progress'
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </>
  );
}
