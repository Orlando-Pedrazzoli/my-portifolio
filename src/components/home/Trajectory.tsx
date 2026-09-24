// src/components/home/Trajectory.tsx
// Percurso em versão curta: uma frase grande, o eixo Negócio → Software e
// uma timeline vertical. A versão longa vive em /about.
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { background, timeline } from '@/content/home';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export default async function Trajectory() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <Section id='background' n='04' label={t('sections.background')}>
      <p className='eyebrow'>{background.path[locale]}</p>
      <h2 className='display t-h2 mt-4 max-w-[18ch]'>
        {background.statement[locale]}
      </h2>
      <p className='prose-measure t-lead mt-6 text-ink-2'>
        {background.lead[locale]}
      </p>

      <ol className='timeline mt-14'>
        {timeline.map((item, i) => (
          <Reveal
            as='li'
            key={item.year}
            delay={i * 40}
            className='timeline-item'
          >
            <span className='timeline-dot' aria-hidden='true' />
            <span className='font-mono text-xs text-ink-3'>{item.year}</span>
            <span className='display mt-1 block text-lg md:text-xl'>
              {item.label[locale]}
            </span>
          </Reveal>
        ))}
      </ol>

      <div className='mt-12 flex flex-wrap gap-4'>
        <Link href='/about' className='btn'>
          {t('common.fullBackground')} <ArrowRight size={16} />
        </Link>
        <a
          href={site.cv}
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
        >
          {t('common.downloadCv')}
        </a>
      </div>
    </Section>
  );
}
