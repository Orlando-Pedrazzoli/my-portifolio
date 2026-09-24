// src/components/layout/LocaleSwitch.tsx
'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { locales } from '@/i18n/routing';

/** Troca para o outro idioma mantendo a mesma rota. */
export default function LocaleSwitch({ label }: { label: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const other = locales.find(l => l !== locale) ?? locales[0];

  return (
    <Link
      href={pathname}
      locale={other}
      className='eyebrow link text-ink-2 hover:text-ink'
      aria-label={label}
    >
      {other.toUpperCase()}
    </Link>
  );
}
