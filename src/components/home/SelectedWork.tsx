// src/components/home/SelectedWork.tsx
// O centro da homepage: um case principal em destaque, três cases em cards
// orientados ao negócio (não à tecnologia), e uma lista compacta do resto.
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Figure from '@/components/ui/Figure';
import Reveal from '@/components/ui/Reveal';
import { featured, selectedWork, moreWork } from '@/content/work';
import type { WorkCase } from '@/content/types';
import type { Locale } from '@/i18n/routing';

function Tags({ c, locale }: { c: WorkCase; locale: Locale }) {
  return (
    <ul className='flex flex-wrap gap-2' aria-label='Tags'>
      {c.tags[locale].map(tag => (
        <li key={tag} className='tag'>
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default async function SelectedWork() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('common');
  const ts = await getTranslations('sections');
  const rest = selectedWork.slice(1);

  return (
    <Section id='work' n='01' label={ts('work')} wide>
      {/* Case principal */}
      <Reveal as='article' className='grid gap-8 lg:grid-cols-12 lg:gap-12'>
        <div className='lg:col-span-7'>
          {featured.cover && (
            <Link
              href={`/work/${featured.slug}`}
              aria-label={featured.title}
              className='card'
            >
              <Figure
                figure={featured.cover}
                bare
                priority
                sizes='(min-width: 1024px) 60vw, 100vw'
              />
            </Link>
          )}
        </div>
        <div className='flex flex-col lg:col-span-5'>
          <p className='eyebrow'>
            {featured.title} · {featured.category[locale]}
          </p>
          <h3 className='display t-h3 mt-4'>
            <Link href={`/work/${featured.slug}`} className='link'>
              {featured.headline[locale]}
            </Link>
          </h3>
          <p className='mt-5 text-ink-2'>{featured.tagline[locale]}</p>
          <div className='mt-6'>
            <Tags c={featured} locale={locale} />
          </div>

          {featured.metrics.length > 0 && (
            <dl className='mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6'>
              {featured.metrics.map(m => (
                <div key={m.value}>
                  <dt className='display text-2xl md:text-3xl'>{m.value}</dt>
                  <dd className='mt-1 text-xs text-ink-3'>{m.label[locale]}</dd>
                </div>
              ))}
            </dl>
          )}

          <Link
            href={`/work/${featured.slug}`}
            className='btn btn-solid mt-8 self-start'
          >
            {t('readCase')} <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>

      {/* Três cases seguintes — cards */}
      <div className='mt-20 grid gap-x-8 gap-y-16 md:grid-cols-3'>
        {rest.map((c, i) => (
          <Reveal as='article' key={c.slug} delay={i * 60}>
            <Link href={`/work/${c.slug}`} className='card group block'>
              {c.cover && (
                <Figure
                  figure={c.cover}
                  bare
                  sizes='(min-width: 768px) 30vw, 100vw'
                />
              )}
              <p className='eyebrow mt-5'>
                {c.title} · {c.category[locale]}
              </p>
              <h3 className='display card-title mt-3 text-xl md:text-2xl'>
                {c.headline[locale]}
              </h3>
              <p className='mt-3 text-sm text-ink-2'>{c.tagline[locale]}</p>
            </Link>
            <div className='mt-4'>
              <Tags c={c} locale={locale} />
            </div>
            {c.metrics[0] && (
              <p className='mt-4 border-t border-line pt-3 text-sm'>
                <span className='display text-lg'>{c.metrics[0].value}</span>{' '}
                <span className='text-ink-3'>{c.metrics[0].label[locale]}</span>
              </p>
            )}
            <Link
              href={`/work/${c.slug}`}
              className='link mt-4 inline-flex items-center gap-1 font-mono text-xs text-ink'
            >
              {t('viewCase')} <ArrowUpRight size={12} />
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Mais trabalho — lista compacta, sem cards */}
      <div className='mt-24'>
        <p className='eyebrow'>{ts('moreWork')}</p>
        <ul className='mt-4 divide-y divide-line border-y border-line'>
          {moreWork.map(c => (
            <li key={c.slug}>
              <Link
                href={`/work/${c.slug}`}
                className='group grid items-baseline gap-2 py-5 sm:grid-cols-12 sm:gap-6'
              >
                <span className='display text-lg sm:col-span-3'>{c.title}</span>
                <span className='text-sm text-ink-2 sm:col-span-6'>
                  {c.headline[locale]}
                </span>
                <span className='hidden font-mono text-xs text-ink-3 sm:col-span-2 sm:block'>
                  {c.category[locale]}
                </span>
                <span className='hidden justify-self-end text-ink-3 group-hover:text-ink sm:col-span-1 sm:block'>
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
