// src/components/layout/MobileMenu.tsx
'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';

interface Item {
  href: string;
  label: string;
}

export default function MobileMenu({
  items,
  resume,
  openLabel,
  closeLabel,
}: {
  items: Item[];
  resume: Item;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Fecha com Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className='md:hidden'>
      {/* Ícone em vez de texto: 44×44 de área de toque, label só para AT. */}
      <button
        type='button'
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls='mobile-nav'
        aria-label={open ? closeLabel : openLabel}
        className='-mr-2 grid h-11 w-11 place-items-center text-ink'
      >
        {open ? (
          <X size={22} aria-hidden='true' />
        ) : (
          <Menu size={22} aria-hidden='true' />
        )}
      </button>

      {open && (
        <nav id='mobile-nav' className='mobile-nav'>
          <ul className='space-y-6'>
            {items.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className='display text-4xl'
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className='pt-4'>
              <a
                href={resume.href}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => setOpen(false)}
                className='btn'
              >
                {resume.label}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
