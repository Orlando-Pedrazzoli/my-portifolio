// src/components/home/Paths.tsx
// Dois caminhos de entrada: recrutadores e clientes, sem dois websites.
// Cada metade é uma superfície de interação real (hover inverte, seta desloca).
import { getLocale } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { paths } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Paths() {
  const locale = (await getLocale()) as Locale;

  return (
    <section className='wrap pb-8'>
      <div className='grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2'>
        {paths.map(p => (
          <Link key={p.href} href={p.href} className='path'>
            <span className='eyebrow'>{p.question[locale]}</span>
            <span className='display path-body text-2xl md:text-3xl'>
              {p.body[locale]}
            </span>
            <span className='path-cta'>
              {p.cta[locale]}
              <ArrowUpRight
                size={16}
                className='path-arrow'
                aria-hidden='true'
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
