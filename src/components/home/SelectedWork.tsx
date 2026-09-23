// src/components/home/SelectedWork.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Figure from '@/components/ui/Figure';
import Reveal from '@/components/ui/Reveal';
import { selectedWork, moreWork } from '@/content/work';
import type { Locale } from '@/i18n/routing';

export default async function SelectedWork() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <Section id='work' n='03' label={t('sections.work')}>
      <div className='space-y-20'>
        {selectedWork.map((c, i) => (
          <Reveal
            as='article'
            key={c.slug}
            className='grid gap-8 md:grid-cols-12'
          >
            <div
              className={
                i % 2 === 0 ? 'md:col-span-7' : 'md:col-span-7 md:order-2'
              }
            >
              {c.cover && (
                <Link href={`/work/${c.slug}`} aria-label={c.title}>
                  <Figure
                    figure={c.cover}
                    bare
                    sizes='(min-width: 1024px) 45vw, 100vw'
                  />
                </Link>
              )}
            </div>
            <div className='md:col-span-5'>
              <p className='eyebrow'>
                {c.client[locale]} · {c.year}
              </p>
              <h3 className='display mt-3 text-3xl'>
                <Link href={`/work/${c.slug}`} className='link'>
                  {c.title}
                </Link>
              </h3>
              <p className='mt-4 text-ink-2'>{c.tagline[locale]}</p>
              <dl className='mt-6 space-y-3 text-sm'>
                <div>
                  <dt className='eyebrow'>{t('common.problem')}</dt>
                  <dd className='mt-1 text-ink-2'>{c.problem[locale][0]}</dd>
                </div>
                <div>
                  <dt className='eyebrow'>{t('common.result')}</dt>
                  <dd className='mt-1 text-ink-2'>{c.result[locale][0]}</dd>
                </div>
              </dl>
              <Link
                href={`/work/${c.slug}`}
                className='link mt-6 inline-flex items-center gap-1 font-mono text-xs text-ink'
              >
                {t('common.readCase')} <ArrowUpRight size={12} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Outros projetos — lista compacta, sem cards */}
      <ul className='mt-20 divide-y divide-line border-y border-line'>
        {moreWork.map(c => (
          <li key={c.slug}>
            <Link
              href={`/work/${c.slug}`}
              className='group grid items-baseline gap-2 py-4 sm:grid-cols-12'
            >
              <span className='display text-xl sm:col-span-4'>{c.title}</span>
              <span className='text-sm text-ink-2 sm:col-span-7'>
                {c.tagline[locale]}
              </span>
              <span className='hidden justify-self-end text-ink-3 group-hover:text-ink sm:col-span-1 sm:block'>
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
