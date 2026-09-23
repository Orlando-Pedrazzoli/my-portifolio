// src/components/layout/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * Sem provider: o estado vive na classe .dark do <html>, iniciada pelo script
 * inline do layout (evita flash). Aqui só lemos e alternamos.
 */
export default function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setDark(next);
  };

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={label}
      className='grid h-9 w-9 place-items-center text-ink-2 hover:text-ink'
    >
      {dark === null ? (
        <span className='h-4 w-4' />
      ) : dark ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}
