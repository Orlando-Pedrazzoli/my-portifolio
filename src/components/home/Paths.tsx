// src/components/home/Paths.tsx
// Dois caminhos de entrada: recrutadores e clientes, sem dois websites.
import { getLocale } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { paths } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Paths() {
  const locale = (await getLocale()) as Locale;

  return (
    <section className='wrap pb-8'>
      <div className='grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2'>
        {paths.map(p => (
          <Link
            key={p.href}
            href={p.href}
            className='card group flex flex-col gap-3 bg-paper p-8 md:p-10'
          >
            <span className='eyebrow'>{p.question[locale]}</span>
            <span className='display card-title text-2xl md:text-3xl'>
              {p.body[locale]}
            </span>
            <span className='mt-2 inline-flex items-center gap-1 font-mono text-xs text-ink'>
              {p.cta[locale]}
              <ArrowRight
                size={12}
                className='transition-transform group-hover:translate-x-0.5'
              />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
