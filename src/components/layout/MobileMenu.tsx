// src/components/layout/MobileMenu.tsx
'use client';

import { useEffect, useState } from 'react';
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

  return (
    <div className='md:hidden'>
      <button
        type='button'
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-controls='mobile-nav'
        className='eyebrow text-ink'
      >
        {open ? closeLabel : openLabel}
      </button>

      {open && (
        <nav
          id='mobile-nav'
          className='fixed inset-x-0 top-16 bottom-0 z-40 bg-paper px-[var(--gutter)] pt-10'
        >
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
