// src/components/home/Stack.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import { stack } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Stack() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <Section id='stack' n='05' label={t('sections.stack')}>
      <dl className='grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
        {stack.map(g => (
          <div key={g.title.en}>
            <dt className='eyebrow mb-3'>{g.title[locale]}</dt>
            <dd className='text-ink-2'>{g.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
      <Link
        href='/about#stack'
        className='link mt-10 inline-flex items-center gap-1 font-mono text-xs text-ink'
      >
        {t('common.fullStack')} <ArrowUpRight size={12} />
      </Link>
    </Section>
  );
}
