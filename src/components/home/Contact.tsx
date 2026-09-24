// src/components/home/Contact.tsx
import { getTranslations } from 'next-intl/server';
import Section from '@/components/ui/Section';
import ContactForm from './ContactForm';
import { site } from '@/lib/site';

export default async function Contact() {
  const t = await getTranslations();

  return (
    <Section
      id='contact'
      n='06'
      label={t('sections.contact')}
      title={t('contact.title')}
    >
      <div className='grid gap-12 md:grid-cols-12'>
        <div className='md:col-span-5'>
          <p className='t-lead text-ink-2'>{t('contact.lead')}</p>
          <p className='mt-6 font-mono text-xs text-ink-3'>
            {t('contact.responds')}
          </p>
          <p className='mt-10 eyebrow'>{t('contact.emailDirect')}</p>
          <ul className='mt-3 space-y-3'>
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
