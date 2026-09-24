// src/components/layout/Header.tsx
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { site } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import LocaleSwitch from './LocaleSwitch';
import MobileMenu from './MobileMenu';

export default async function Header() {
  const t = await getTranslations('nav');
  const items = [
    { href: '/#work', label: t('work') },
    { href: '/#services', label: t('services') },
    { href: '/about', label: t('about') },
  ];
  const mobileItems = [...items, { href: '/#contact', label: t('contact') }];

  return (
    <header className='sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm'>
      <div className='wrap flex h-16 items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-3 text-ink'
          aria-label='Orlando Pedrazzoli — home'
        >
          {/* Marca "OP" como máscara: herda a cor da tinta em ambos os temas */}
          <span aria-hidden='true' className='logo-mark' />
          <span className='text-sm font-medium tracking-tight'>
            Orlando Pedrazzoli
          </span>
        </Link>

        <nav
          className='hidden items-center gap-8 md:flex'
          aria-label='Principal'
        >
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='link text-sm text-ink-2 hover:text-ink'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-4'>
          <LocaleSwitch label={t('language')} />
          <ThemeToggle label={t('theme')} />
          <a
            href={site.cv}
            target='_blank'
            rel='noopener noreferrer'
            className='link hidden text-sm text-ink-2 hover:text-ink md:inline'
          >
            {t('resume')}
          </a>
          <Link
            href='/#contact'
            className='btn btn-solid btn-sm hidden md:inline-flex'
          >
            {t('talk')}
          </Link>
          <MobileMenu
            items={mobileItems}
            resume={{ href: site.cv, label: t('resume') }}
            openLabel={t('menu')}
            closeLabel={t('close')}
          />
        </div>
      </div>
    </header>
  );
}
