// src/components/home/Hero.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowDown } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { hero } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Hero() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <section
      className='wrap'
      style={{ paddingBlock: 'clamp(4rem, 12vw, 9rem) clamp(3rem, 8vw, 6rem)' }}
    >
      <p className='eyebrow mb-8'>
        Orlando Pedrazzoli — Full stack developer, Lisboa
      </p>

      <h1 className='display max-w-[18ch] text-[clamp(2.6rem,7vw,5.5rem)]'>
        {hero.statement[locale]}
      </h1>

      <p className='prose-measure mt-10 text-lg leading-relaxed text-ink-2 md:text-xl'>
        {hero.lead[locale]}
      </p>

      <div className='mt-10 flex flex-wrap gap-4'>
        <Link href='/#work' className='btn btn-solid'>
          {t('sections.work')} <ArrowDown size={16} />
        </Link>
        <Link href='/#contact' className='btn'>
          {t('sections.contact')}
        </Link>
      </div>

      <dl className='mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-3'>
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
