// src/components/home/Contact.tsx
// Fecho forte: pergunta grande, uma linha de contexto, formulário logo abaixo
// e os três canais diretos no fim. Ocupa as 12 colunas.
import { getTranslations } from 'next-intl/server';
import Section from '@/components/ui/Section';
import ContactForm from './ContactForm';
import { site } from '@/lib/site';

export default async function Contact() {
  const t = await getTranslations();

  return (
    <Section id='contact' n='06' label={t('sections.contact')} wide>
      <div className='grid gap-12 lg:grid-cols-12 lg:gap-16'>
        <div className='lg:col-span-6'>
          <h2 className='display t-h1 max-w-[14ch]'>{t('contact.title')}</h2>
          <p className='prose-measure t-lead mt-8 text-ink-2'>
            {t('contact.lead')}
          </p>
          <p className='mt-6 font-mono text-xs text-ink-3'>
            {t('contact.responds')}
          </p>
        </div>

        <div className='lg:col-span-6'>
          <ContactForm />
        </div>
      </div>

      <div className='mt-16 border-t border-line pt-6'>
        <p className='eyebrow'>{t('contact.emailDirect')}</p>
        <ul className='mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-10'>
          <li>
            <a href={`mailto:${site.email}`} className='link text-lg'>
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='link text-lg'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target='_blank'
              rel='noopener noreferrer'
              className='link text-lg'
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
