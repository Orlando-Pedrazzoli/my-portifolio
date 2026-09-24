// src/components/home/Principles.tsx
// Editorial: número, conceito e uma frase memorável sempre visíveis; o detalhe
// abre por disclosure nativa (<details>), sem JS. `name` torna o grupo
// exclusivo nos browsers que o suportam; nos outros, abrem independentemente.
import { getLocale, getTranslations } from 'next-intl/server';
import { Plus } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { principles } from '@/content/home';
import type { Locale } from '@/i18n/routing';

export default async function Principles() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('sections');

  return (
    <Section
      id='principles'
      n='03'
      label={t('principles')}
      title={locale === 'pt' ? 'Como faço engenharia' : 'How I engineer'}
    >
      <div className='border-t border-line'>
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 40}>
            <details className='disclosure' name='principles'>
              <summary className='disclosure-summary'>
                <span className='font-mono text-xs text-ink-3'>{p.n}</span>
                <span className='min-w-0'>
                  <span className='eyebrow block'>{p.title[locale]}</span>
                  <span className='display mt-2 block text-xl md:text-2xl'>
                    {p.lead[locale]}
                  </span>
                </span>
                <Plus
                  size={18}
                  className='disclosure-icon'
                  aria-hidden='true'
                />
              </summary>
              <div className='disclosure-body'>
                <p className='prose-measure text-ink-2'>{p.body[locale]}</p>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
