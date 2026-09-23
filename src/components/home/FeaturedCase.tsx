// src/components/home/FeaturedCase.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Figure from '@/components/ui/Figure';
import Reveal from '@/components/ui/Reveal';
import { featured } from '@/content/work';
import type { Locale } from '@/i18n/routing';

export default async function FeaturedCase() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();
  const c = featured;

  return (
    <Section
      id='featured'
      n='02'
      label={t('sections.featured')}
      title={c.title}
    >
      <p className='prose-measure text-lg text-ink-2 md:text-xl'>
        {c.tagline[locale]}
      </p>

      {c.cover && (
        <Reveal className='mt-10'>
          <Figure
            figure={c.cover}
            priority
            sizes='(min-width: 1024px) 70vw, 100vw'
          />
        </Reveal>
      )}

      <div className='mt-12 grid gap-10 md:grid-cols-2'>
        <div>
          <h3 className='eyebrow mb-3'>{t('common.problem')}</h3>
          <p className='text-ink-2'>{c.problem[locale][0]}</p>
        </div>
        <div>
          <h3 className='eyebrow mb-3'>{t('common.solution')}</h3>
          <p className='text-ink-2'>{c.solution[locale][0]}</p>
        </div>
      </div>

      <dl className='mt-12 grid gap-6 border-t border-line pt-6 sm:grid-cols-3'>
        <div>
          <dt className='display text-3xl'>34 / 37</dt>
          <dd className='mt-1 text-sm text-ink-3'>
            {locale === 'pt'
              ? 'requisitos de stakeholders entregues'
              : 'stakeholder requirements delivered'}
          </dd>
        </div>
        <div>
          <dt className='display text-3xl'>749</dt>
          <dd className='mt-1 text-sm text-ink-3'>
            {locale === 'pt'
              ? 'atos clínicos migrados do sistema legado'
              : 'clinical acts migrated from the legacy system'}
          </dd>
        </div>
        <div>
          <dt className='display text-3xl'>25+</dt>
          <dd className='mt-1 text-sm text-ink-3'>
            {locale === 'pt'
              ? 'modelos de dados, 3 áreas, 2 clínicas'
              : 'data models, 3 areas, 2 clinics'}
          </dd>
        </div>
      </dl>

      <div className='mt-10 grid gap-6 md:grid-cols-2'>
        {c.figures.slice(0, 2).map(f => (
          <Figure
            key={f.src}
            figure={f}
            sizes='(min-width: 768px) 35vw, 100vw'
          />
        ))}
      </div>

      <Link href={`/work/${c.slug}`} className='btn btn-solid mt-12'>
        {t('common.readCase')} <ArrowRight size={16} />
      </Link>
    </Section>
  );
}
