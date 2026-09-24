// src/components/home/Capabilities.tsx
// Três capacidades como rows interativas: cada linha é um link para o case
// que a prova. Hover: título no acento, seta desloca. Sem imagem no hover —
// a prova é o case, não uma miniatura.
import { getLocale, getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { capabilities } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Capabilities() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('sections');

  return (
    <Section id='services' n='02' label={t('services')}>
      <ol className='border-t border-line'>
        {capabilities.map((c, i) => (
          <Reveal as='li' key={c.n} delay={i * 40}>
            <Link href={`/work/${c.proof.slug}`} className='cap'>
              <span className='cap-n'>{c.n}</span>
              <span className='cap-main'>
                <span className='display cap-title t-h3'>
                  {c.title[locale]}
                </span>
                <span className='mt-3 block text-ink-2'>{c.body[locale]}</span>
                <span className='cap-proof'>
                  {c.proof.label[locale]}
                  <ArrowRight
                    size={14}
                    className='cap-arrow'
                    aria-hidden='true'
                  />
                </span>
              </span>
              <span className='cap-side' aria-hidden='true'>
                <ArrowRight size={20} className='cap-arrow' />
              </span>
            </Link>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
