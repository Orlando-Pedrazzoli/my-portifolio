// src/components/layout/Footer.tsx
import { getTranslations } from 'next-intl/server';
import { site } from '@/lib/site';

export default async function Footer() {
  const t = await getTranslations('footer');
  return (
    <footer className='rule'>
      <div className='wrap flex flex-col gap-4 py-10 text-sm text-ink-3 md:flex-row md:items-center md:justify-between'>
        <p>
          © {new Date().getFullYear()} {t('rights')}
        </p>
        <div className='flex gap-6'>
          <a
            href={site.github}
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className='link'>
            Email
          </a>
        </div>
        <p className='font-mono text-xs'>{t('built')}</p>
      </div>
    </footer>
  );
}
