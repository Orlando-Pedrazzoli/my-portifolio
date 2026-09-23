// src/components/home/Contact.tsx
import { getLocale, getTranslations } from 'next-intl/server';
import Section from '@/components/ui/Section';
import ContactForm from './ContactForm';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export default async function Contact() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('sections');

  return (
    <Section
      id='contact'
      n='07'
      label={t('contact')}
      title={
        locale === 'pt'
          ? 'Tens um problema que precisa de software? Fala comigo.'
          : 'Have a problem that needs software? Talk to me.'
      }
    >
      <div className='grid gap-12 md:grid-cols-12'>
        <div className='md:col-span-5'>
          <p className='text-ink-2'>
            {locale === 'pt'
              ? 'Disponível para projetos freelance, colaborações e oportunidades em Lisboa ou remoto.'
              : 'Available for freelance projects, collaborations and opportunities in Lisbon or remote.'}
          </p>
          <ul className='mt-8 space-y-3'>
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
                className='link'
              >
                linkedin.com/in/orlandopedrazzoli
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target='_blank'
                rel='noopener noreferrer'
                className='link'
              >
                github.com/Orlando-Pedrazzoli
              </a>
            </li>
          </ul>
        </div>
        <div className='md:col-span-7'>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
