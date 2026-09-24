// src/components/home/Principles.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { principles } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Principles() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('sections');

  return (
    <Section id='principles' n='03' label={t('principles')}>
      <div className='grid gap-px border border-line bg-line sm:grid-cols-2'>
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 40} className='bg-paper p-8'>
            <span className='font-mono text-xs text-ink-3'>{p.n}</span>
            <h3 className='display mt-4 text-2xl'>{p.title[locale]}</h3>
            <p className='mt-3 text-ink-2'>{p.body[locale]}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
