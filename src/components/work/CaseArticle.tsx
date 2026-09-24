// src/components/work/CaseArticle.tsx
// Case study como narrativa: contexto → problema → papel → restrições →
// solução (screenshots que explicam) → o que foi construído → decisões →
// arquitetura → resultado → o que mudaria → stack.
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Figure from '@/components/ui/Figure';
import Reveal from '@/components/ui/Reveal';
import type { WorkCase } from '@/content/types';
import type { Locale } from '@/i18n/routing';

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className='rule grid gap-4 py-12 md:grid-cols-12 md:gap-8'>
      <h2 className='eyebrow md:col-span-3 md:sticky md:top-24 md:self-start'>
        {label}
      </h2>
      <div className='space-y-4 text-ink-2 md:col-span-9'>{children}</div>
    </section>
  );
}

export default async function CaseArticle({ c }: { c: WorkCase }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('common');

  return (
    <article
      className='wrap'
      style={{ paddingBlock: 'clamp(3rem, 8vw, 6rem)' }}
    >
      <Link
        href='/#work'
        className='link inline-flex items-center gap-1 font-mono text-xs text-ink-3'
      >
        <ArrowLeft size={12} /> {t('backHome')}
      </Link>

      {/* Hero do case: nome, frase de impacto, meta, métricas */}
      <header className='mt-8'>
        <p className='eyebrow'>
          {c.title} · {c.category[locale]} · {c.year}
        </p>
        <h1 className='display t-h1 mt-4 max-w-[20ch]'>{c.headline[locale]}</h1>
        <p className='prose-measure t-lead mt-6 text-ink-2'>
          {c.tagline[locale]}
        </p>

        <ul className='mt-6 flex flex-wrap gap-2' aria-label='Tags'>
          {c.tags[locale].map(tag => (
            <li key={tag} className='tag'>
              {tag}
            </li>
          ))}
        </ul>

        <dl className='mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-3'>
          <div>
            <dt className='eyebrow'>{t('client')}</dt>
            <dd className='mt-1 text-sm'>{c.client[locale]}</dd>
          </div>
          <div>
            <dt className='eyebrow'>{t('status')}</dt>
            <dd className='mt-1 text-sm'>{c.status[locale]}</dd>
          </div>
          <div className='flex flex-wrap gap-4 self-start sm:justify-end'>
            {c.liveUrl && (
              <a
                href={c.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='link inline-flex items-center gap-1 text-sm'
              >
                {t('visit')} <ArrowUpRight size={12} />
              </a>
            )}
            {c.repoUrl && (
              <a
                href={c.repoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='link inline-flex items-center gap-1 text-sm'
              >
                {t('repo')} <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </dl>

        {c.metrics.length > 0 && (
          <dl className='mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-3'>
            {c.metrics.map(m => (
              <div key={m.value}>
                <dt className='display text-3xl md:text-4xl'>{m.value}</dt>
                <dd className='mt-1 text-sm text-ink-3'>{m.label[locale]}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      {c.cover && (
        <Reveal className='mt-12'>
          <Figure
            figure={c.cover}
            priority
            sizes='(min-width: 1280px) 80rem, 100vw'
          />
        </Reveal>
      )}

      <div className='mt-12'>
        <Block label={t('context')}>
          {c.context[locale].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Block>

        <Block label={t('problem')}>
          {c.problem[locale].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Block>

        <Block label={t('role')}>
          <p className='text-ink'>{c.role[locale]}</p>
        </Block>

        {c.constraints && (
          <Block label={t('constraints')}>
            <ul className='grid gap-3 sm:grid-cols-2'>
              {c.constraints[locale].map((item, i) => (
                <li key={i} className='border-l-2 border-line-strong pl-4'>
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        <Block label={t('solution')}>
          {c.solution[locale].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Block>

        {/* Screenshots grandes — cada legenda explica uma decisão, não só o ecrã */}
        {c.figures.length > 0 && (
          <div className='rule grid gap-10 py-12 md:grid-cols-2'>
            {c.figures.map((f, i) => (
              <Reveal
                key={f.src ?? i}
                className={
                  i === 0 && c.figures.length % 2 === 1 ? 'md:col-span-2' : ''
                }
              >
                <Figure figure={f} sizes='(min-width: 768px) 40rem, 100vw' />
              </Reveal>
            ))}
          </div>
        )}

        <Block label={t('features')}>
          <ul className='list-disc space-y-2 pl-5'>
            {c.features[locale].map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </Block>

        {c.decisions.length > 0 && (
          <Block label={t('decisions')}>
            <div className='grid gap-px border border-line bg-line sm:grid-cols-2'>
              {c.decisions.map(d => (
                <div key={d.title.en} className='bg-paper p-6'>
                  <h3 className='display text-xl text-ink'>
                    {d.title[locale]}
                  </h3>
                  <p className='mt-3 text-sm'>{d.body[locale]}</p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {c.architecture && (
          <Block label={t('architecture')}>
            {c.architecture[locale].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Block>
        )}

        <Block label={t('result')}>
          {c.result[locale].map((p, i) => (
            <p key={i} className='text-ink'>
              {p}
            </p>
          ))}
        </Block>

        {c.learned && (
          <Block label={t('learned')}>
            {c.learned[locale].map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Block>
        )}

        <Block label={t('stack')}>
          <p className='font-mono text-sm'>{c.stack.join(' · ')}</p>
        </Block>
      </div>
    </article>
  );
}
