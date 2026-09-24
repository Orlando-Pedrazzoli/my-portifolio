// src/components/home/Hero.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { hero } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Hero() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <section
      className='wrap'
      style={{
        paddingBlock: 'clamp(4rem, 11vw, 8.5rem) clamp(3rem, 7vw, 5rem)',
      }}
    >
      <p className='eyebrow mb-8'>Orlando Pedrazzoli — {hero.role[locale]}</p>

      <h1 className='display t-h1 max-w-[16ch]'>{hero.statement[locale]}</h1>

      <p className='prose-measure t-lead mt-10 text-ink-2'>
        {hero.lead[locale]}
      </p>

      <div className='mt-10 flex flex-wrap gap-4'>
        <Link href='/#work' className='btn btn-solid'>
          {t('sections.work')} <ArrowDown size={16} />
        </Link>
        <Link href='/#contact' className='btn'>
          {t('nav.talk')} <ArrowRight size={16} />
        </Link>
      </div>

      <p className='mt-6 font-mono text-xs text-ink-3'>
        {hero.availability[locale]}
      </p>

      {/* Prova imediata — os mesmos números em todo o site */}
      <dl className='mt-16 grid grid-cols-2 gap-6 border-t border-line pt-6 lg:grid-cols-4'>
        {hero.facts.map(f => (
          <div key={f.value}>
            <dt className='display text-3xl md:text-4xl'>{f.value}</dt>
            <dd className='mt-1 text-sm text-ink-3'>{f.label[locale]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
