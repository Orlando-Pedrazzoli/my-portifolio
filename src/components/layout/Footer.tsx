// src/components/layout/Footer.tsx
import { getTranslations } from 'next-intl/server';
import { site } from '@/lib/site';

export default async function Footer() {
  const t = await getTranslations();
  return (
    <footer className='rule'>
      <div className='wrap grid gap-8 py-12 md:grid-cols-12'>
        <div className='md:col-span-6'>
          <p className='display text-2xl'>Orlando Pedrazzoli</p>
          <p className='mt-2 text-sm text-ink-2'>
            {t('footer.role')}
            <br />
            {t('footer.location')}
          </p>
        </div>
        <div className='flex flex-col gap-3 text-sm md:col-span-3'>
          <a
            href={site.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='link self-start'
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target='_blank'
            rel='noopener noreferrer'
            className='link self-start'
          >
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className='link self-start'>
            Email
          </a>
        </div>
        <div className='flex flex-col gap-3 text-sm md:col-span-3'>
          <a
            href={site.cv}
            target='_blank'
            rel='noopener noreferrer'
            className='link self-start'
          >
            {t('nav.resume')}
          </a>
        </div>
        <p className='font-mono text-xs text-ink-3 md:col-span-12'>
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
