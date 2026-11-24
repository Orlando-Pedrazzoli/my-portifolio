// src/components/home/Hero.tsx
// Afirmação estável (é o H1). Ao lado, no desktop, e por baixo no mobile:
// a bancada — escolher um trabalho levanta as peças desse trabalho.
import { getLocale } from 'next-intl/server';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { hero } from '@/content/home';
import Workbench from '@/components/home/Workbench';
import type { Locale } from '@/i18n/routing';

export default async function Hero() {
  const locale = (await getLocale()) as Locale;

  return (
    <section
      className='wrap'
      style={{
        paddingBlock: 'clamp(3rem, 6vw, 5.5rem) clamp(3rem, 7vw, 5rem)',
      }}
    >
      <div className='grid items-start gap-12 lg:grid-cols-12 lg:items-center lg:gap-10'>
        <div className='lg:col-span-6'>
          <p className='eyebrow mb-6 md:mb-8'>
            Orlando Pedrazzoli — {hero.role[locale]}
          </p>

          <h1 className='display text-[clamp(2.5rem,5.2vw,4.25rem)]'>
            {hero.statement[locale]}
          </h1>

          <p className='prose-measure t-lead mt-8 text-ink-2 md:hidden'>
            {hero.leadShort[locale]}
          </p>
          <p className='prose-measure t-lead mt-8 hidden text-ink-2 md:block'>
            {hero.lead[locale]}
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4'>
            <Link href='/#work' className='btn btn-solid justify-center'>
              {hero.cta.work[locale]} <ArrowDown size={16} />
            </Link>
            <Link href='/#contact' className='btn justify-center'>
              {hero.cta.project[locale]} <ArrowRight size={16} />
            </Link>
          </div>

          <p className='mt-6 font-mono text-xs text-ink-3'>
            {hero.availability[locale]}
          </p>
        </div>

        <div className='min-w-0 lg:col-span-6'>
          <Workbench locale={locale} />
        </div>
      </div>

      <dl className='facts mt-14 md:mt-16'>
        {hero.facts.map(f => (
          <div key={f.value} className='fact'>
            <dt className='display text-3xl md:text-4xl'>{f.value}</dt>
            <dd className='mt-1 text-sm text-ink-3'>{f.label[locale]}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
