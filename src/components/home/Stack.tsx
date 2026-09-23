// src/components/home/Stack.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import Section from '@/components/ui/Section';
import { stack } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Stack() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('sections');

  return (
    <Section id='stack' n='06' label={t('stack')}>
      <dl className='grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
        {stack.map(g => (
          <div key={g.title.en}>
            <dt className='eyebrow mb-3'>{g.title[locale]}</dt>
            <dd className='text-ink-2'>{g.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
