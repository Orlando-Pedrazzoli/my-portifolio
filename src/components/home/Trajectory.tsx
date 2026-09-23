// src/components/home/Trajectory.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { trajectory } from '@/content/home';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export default async function Trajectory() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <Section id='trajectory' n='05' label={t('sections.trajectory')}>
      <ol className='divide-y divide-line'>
        {trajectory.map((item, i) => (
          <Reveal
            as='li'
            key={item.period}
            delay={i * 40}
            className='grid gap-2 py-8 md:grid-cols-12 md:gap-6'
          >
            <span className='font-mono text-sm text-ink-3 md:col-span-3'>
              {item.period}
            </span>
            <div className='md:col-span-9'>
              <h3 className='display text-2xl'>{item.title[locale]}</h3>
              <p className='mt-3 text-ink-2'>{item.body[locale]}</p>
              {item.link && (
                <Link
                  href={`/work/${item.link.slug}`}
                  className='link mt-3 inline-flex items-center gap-1 font-mono text-xs text-ink'
                >
                  {item.link.label} <ArrowUpRight size={12} />
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
      <div className='mt-8 flex flex-wrap gap-4'>
        <Link href='/about' className='btn'>
          {t('common.fullTrajectory')}
        </Link>
        <a href={site.cv} download className='btn'>
          {t('common.downloadCv')}
        </a>
      </div>
    </Section>
  );
}
