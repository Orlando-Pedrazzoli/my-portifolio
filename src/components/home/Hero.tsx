// src/components/home/Hero.tsx
// Composição em duas colunas (desktop): afirmação + lead + CTAs à esquerda,
// índice de capacidades discreto à direita. Mobile: uma coluna, lead curto.
import { getLocale } from 'next-intl/server';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { hero } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Hero() {
  const locale = (await getLocale()) as Locale;

  return (
    <section
      className='wrap'
      style={{
        paddingBlock: 'clamp(3.5rem, 10vw, 8rem) clamp(3rem, 7vw, 5rem)',
      }}
    >
      <div className='grid gap-12 lg:grid-cols-12 lg:gap-8'>
        {/* Coluna principal */}
        <div className='lg:col-span-8'>
          <p className='eyebrow mb-6 md:mb-8'>
            Orlando Pedrazzoli — {hero.role[locale]}
          </p>

          <h1 className='display t-h1 max-w-[18ch]'>
            {hero.statement[locale]}
          </h1>

          {/* Desktop explica; mobile prioriza. Conteúdo distinto por breakpoint,
              nunca o mesmo texto truncado por CSS. */}
          <p className='prose-measure t-lead mt-8 text-ink-2 md:hidden'>
            {hero.leadShort[locale]}
          </p>
          <p className='prose-measure t-lead mt-10 hidden text-ink-2 md:block'>
            {hero.lead[locale]}
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-10'>
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

        {/* Índice de capacidades — só em desktop, alinhado à base da coluna.
            Estático por decisão: quebra o vazio à direita sem virar dashboard. */}
        <aside
          className='hidden self-end lg:col-span-3 lg:col-start-10 lg:block'
          aria-label={locale === 'pt' ? 'O que construo' : 'What I build'}
        >
          <ol className='index'>
            {hero.index.map(c => (
              <li key={c.n} className='index-row'>
                <Link href='/#services' className='index-link'>
                  <span className='index-n'>{c.n}</span>
                  <span className='index-title'>{c.title[locale]}</span>
                </Link>
                <ul className='index-items'>
                  {c.items[locale].map(item => (
                    <li key={item}>
                      <span aria-hidden='true'>→ </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      {/* Prova imediata — os mesmos números em todo o site.
          Editorial: número grande, label pequeno, separadores subtis. */}
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
