// src/components/home/Trajectory.tsx
// Percurso em versão curta: Negócio → Fundador → Operações → Software.
// A versão longa vive em /about.
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { timeline } from '@/content/home';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export default async function Trajectory() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <Section
      id='background'
      n='04'
      label={t('sections.background')}
      title={
        locale === 'pt'
          ? 'A experiência de negócio por trás do código.'
          : 'The business experience behind the code.'
      }
      intro={
        locale === 'pt'
          ? 'Negócio → Fundador → Operações → Software. Passei quinze anos a fabricar produto, negociar com fornecedores, contratar e vender antes de escrever a primeira linha de código profissional. É por isso que consigo ver a operação por trás de cada pedido de software.'
          : 'Business → Founder → Operations → Software. I spent fifteen years manufacturing product, negotiating with suppliers, hiring and selling before writing my first professional line of code. That is why I can see the operation behind every software request.'
      }
    >
      <ol className='border-t border-line'>
        {timeline.map((item, i) => (
          <Reveal
            as='li'
            key={item.year}
            delay={i * 40}
            className='grid gap-1 border-b border-line py-5 sm:grid-cols-12 sm:gap-6'
          >
            <span className='display text-xl sm:col-span-2'>{item.year}</span>
            <span className='text-ink-2 sm:col-span-10'>
              {item.label[locale]}
            </span>
          </Reveal>
        ))}
      </ol>
      <div className='mt-8 flex flex-wrap gap-4'>
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
