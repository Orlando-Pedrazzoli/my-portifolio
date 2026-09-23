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
    <Section id='principles' n='04' label={t('principles')}>
      <div className='grid gap-x-12 gap-y-10 md:grid-cols-2'>
        {principles.map((p, i) => (
          <Reveal key={p.title.en} delay={i * 40}>
            <h3 className='display text-2xl'>{p.title[locale]}</h3>
            <p className='mt-3 text-ink-2'>{p.body[locale]}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
