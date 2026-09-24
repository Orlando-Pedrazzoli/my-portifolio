// src/components/home/SelectedWork.tsx
// O centro da homepage. Case principal em composição horizontal full-width
// (produto em cima, narrativa e métricas em baixo); os três cases seguintes
// em linhas alternadas texto/imagem; o resto numa lista compacta.
// Mobile: imagem primeiro, texto depois; métricas empilhadas.
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Figure from '@/components/ui/Figure';
import Reveal from '@/components/ui/Reveal';
import { featured, selectedWork, moreWork } from '@/content/work';
import type { WorkCase } from '@/content/types';
import type { Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

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

/** Prova: "● Production · 2026". Diferença entre construído e a correr. */
function Status({ c, locale }: { c: WorkCase; locale: Locale }) {
  if (!c.statusShort) return null;
  return (
    <p className='status'>
      <span className='status-dot' aria-hidden='true' />
      {c.statusShort[locale]}
      <span className='text-ink-3'> · {c.year}</span>
    </p>
  );
}

export default async function SelectedWork() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('common');
  const ts = await getTranslations('sections');
  const rest = selectedWork.slice(1);
  const f = featured;

  return (
    <Section id='work' n='01' label={ts('work')} wide>
      {/* ------------------------------------------------------------------
          Case principal — full width. A imagem manda; o texto vem depois.
          ------------------------------------------------------------------ */}
      <Reveal as='article'>
        {f.cover && (
          <div className='grid grid-cols-12 gap-4 md:gap-6'>
            <Link
              href={`/work/${f.slug}`}
              aria-label={f.title}
              className={cn(
                'card col-span-12',
                f.coverAside && 'lg:col-span-9',
              )}
            >
              <Figure
                figure={f.cover}
                bare
                priority
                sizes='(min-width: 1280px) 60rem, (min-width: 1024px) 75vw, 100vw'
              />
              {f.coverLabel && (
                <p className='eyebrow mt-3'>{f.coverLabel[locale]}</p>
              )}
            </Link>

            {f.coverAside && (
              <Link
                href={`/work/${f.slug}`}
                aria-label={f.coverAside.alt[locale]}
                className='card col-span-7 self-end sm:col-span-5 lg:col-span-3'
              >
                <Figure
                  figure={f.coverAside}
                  bare
                  className='figure-phone'
                  sizes='(min-width: 1024px) 16vw, 45vw'
                />
                {f.coverAsideLabel && (
                  <p className='eyebrow mt-3'>{f.coverAsideLabel[locale]}</p>
                )}
              </Link>
            )}
          </div>
        )}

        <div className='mt-10 grid gap-10 border-t border-line pt-8 lg:grid-cols-12 lg:gap-12'>
          <div className='lg:col-span-7'>
            <p className='eyebrow'>
              {f.title} · {f.category[locale]}
            </p>
            <h3 className='display t-h2 mt-4 max-w-[20ch]'>
              <Link href={`/work/${f.slug}`} className='link'>
                {f.headline[locale]}
              </Link>
            </h3>
            <p className='prose-measure mt-5 text-ink-2'>{f.tagline[locale]}</p>
            <div className='mt-6'>
              <Tags c={f} locale={locale} />
            </div>
          </div>

          <div className='flex flex-col lg:col-span-5'>
            {f.metrics.length > 0 && (
              <dl className='metrics'>
                {f.metrics.map(m => (
                  <div key={m.value} className='metric'>
                    <dt className='display text-3xl'>{m.value}</dt>
                    <dd className='mt-1 text-sm text-ink-3'>
                      {m.label[locale]}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
            <div className='mt-8 flex flex-wrap items-center justify-between gap-4'>
              <Status c={f} locale={locale} />
              <Link href={`/work/${f.slug}`} className='btn btn-solid'>
                {t('readCase')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ------------------------------------------------------------------
          Três cases seguintes — linhas alternadas. Ritmo: texto/imagem,
          imagem/texto, texto/imagem. Mobile: imagem sempre primeiro.
          ------------------------------------------------------------------ */}
      <div className='mt-24 divide-y divide-line border-t border-line'>
        {rest.map((c, i) => {
          const imageLeft = i % 2 === 1;
          return (
            <Reveal
              as='article'
              key={c.slug}
              className='grid gap-6 py-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-16'
            >
              <div
                className={cn(
                  'order-first lg:col-span-7',
                  imageLeft ? 'lg:order-first' : 'lg:order-last',
                )}
              >
                {c.cover && (
                  <Link
                    href={`/work/${c.slug}`}
                    aria-label={c.title}
                    className='card block'
                  >
                    <Figure
                      figure={c.cover}
                      bare
                      sizes='(min-width: 1280px) 45rem, (min-width: 1024px) 55vw, 100vw'
                    />
                  </Link>
                )}
              </div>

              <div className='lg:col-span-5'>
                <p className='eyebrow'>
                  {c.title} · {c.category[locale]}
                </p>
                <h3 className='display t-h3 mt-4'>
                  <Link href={`/work/${c.slug}`} className='link'>
                    {c.headline[locale]}
                  </Link>
                </h3>
                <p className='mt-4 text-ink-2'>{c.tagline[locale]}</p>
                <div className='mt-5'>
                  <Tags c={c} locale={locale} />
                </div>

                {c.metrics[0] && (
                  <p className='mt-6 border-t border-line pt-4'>
                    <span className='display text-2xl'>
                      {c.metrics[0].value}
                    </span>{' '}
                    <span className='text-sm text-ink-3'>
                      {c.metrics[0].label[locale]}
                    </span>
                  </p>
                )}

                <div className='mt-6 flex flex-wrap items-center justify-between gap-4'>
                  <Status c={c} locale={locale} />
                  <Link
                    href={`/work/${c.slug}`}
                    className='link inline-flex items-center gap-1 font-mono text-xs text-ink'
                  >
                    {t('viewCase')} <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ------------------------------------------------------------------
          Mais trabalho — lista compacta, sem cards.
          ------------------------------------------------------------------ */}
      <div className='mt-20'>
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
