// src/components/home/Capabilities.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { capabilities } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Capabilities() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('sections');

  return (
    <Section id='capabilities' n='01' label={t('capabilities')}>
      <ol className='divide-y divide-line'>
        {capabilities.map((c, i) => (
          <Reveal
            as='li'
            key={c.n}
            delay={i * 40}
            className='grid gap-3 py-8 md:grid-cols-12 md:gap-6'
          >
            <span className='font-mono text-sm text-ink-3 md:col-span-1'>
              {c.n}
            </span>
            <h3 className='display text-2xl md:col-span-4 md:text-3xl'>
              {c.title[locale]}
            </h3>
            <div className='md:col-span-7'>
              <p className='text-ink-2'>{c.body[locale]}</p>
              <Link
                href={`/work/${c.proof.slug}`}
                className='link mt-4 inline-flex items-center gap-1 font-mono text-xs text-ink'
              >
                {c.proof.label[locale]} <ArrowUpRight size={12} />
              </Link>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
