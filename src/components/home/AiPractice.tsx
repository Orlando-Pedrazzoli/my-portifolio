// Prática de IA: quatro critérios, sem case inventado. A prova é o método.
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import { aiPractice } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function AiPractice() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <Section
      id='ai'
      n='04'
      label={t('sections.ai')}
      title={aiPractice.statement[locale]}
      intro={aiPractice.lead[locale]}
    >
      <ol className='grid border-t border-line sm:grid-cols-2'>
        {aiPractice.practices.map(p => (
          <li
            key={p.n}
            className='border-b border-line py-8 sm:odd:pr-8 sm:even:border-l sm:even:pl-8'
          >
            <span className='font-mono text-xs text-ink-3'>{p.n}</span>
            <h3 className='display mt-3 text-xl md:text-2xl'>
              {p.title[locale]}
            </h3>
            <p className='mt-3 text-ink-2'>{p.body[locale]}</p>
          </li>
        ))}
      </ol>
      <Link
        href='/about#certificacoes'
        className='link mt-8 inline-flex items-center gap-1 font-mono text-xs text-ink'
      >
        {t('common.certifications')} <ArrowUpRight size={12} />
      </Link>
    </Section>
  );
}
