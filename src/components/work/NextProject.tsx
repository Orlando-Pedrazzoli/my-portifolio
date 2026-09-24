// src/components/work/NextProject.tsx
// Fecho do case study: em vez de footer, o próximo projeto. Cria o fluxo
// CDC → Surfers → Chi → GrowKind → … sem obrigar a voltar a /#work.
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Figure from '@/components/ui/Figure';
import type { WorkCase } from '@/content/types';
import type { Locale } from '@/i18n/routing';

export default async function NextProject({ c }: { c: WorkCase }) {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('common');

  return (
    <section className='rule' aria-labelledby='next-project'>
      <Link href={`/work/${c.slug}`} className='next-project'>
        <div className='wrap grid gap-8 py-14 md:grid-cols-12 md:items-center md:gap-12 md:py-20'>
          <div className='md:col-span-7'>
            <p id='next-project' className='eyebrow'>
              {t('nextProject')}
            </p>
            <p className='display mt-4 text-sm text-ink-3'>{c.title}</p>
            <p className='display t-h2 mt-2 max-w-[18ch] next-project-title'>
              {c.headline[locale]}
            </p>
            <p className='prose-measure mt-5 text-ink-2'>{c.tagline[locale]}</p>
            <span className='next-project-cta'>
              {t('viewCase')}
              <ArrowRight
                size={16}
                className='next-project-arrow'
                aria-hidden='true'
              />
            </span>
          </div>
          {c.cover && (
            <div className='md:col-span-5'>
              <Figure
                figure={c.cover}
                bare
                sizes='(min-width: 768px) 35vw, 100vw'
              />
            </div>
          )}
        </div>
      </Link>
    </section>
  );
}
