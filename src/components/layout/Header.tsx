// src/components/layout/Header.tsx
// Mobile: duas linhas — marca em cima, controlos em baixo (PT · tema · CTA · menu),
// cada um com espaço próprio. Desktop (md+): uma linha, como antes.
// A altura vive em --header-h (globals.css) para scroll-padding e menu.
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
    <header className='header sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm'>
      <div className='wrap flex flex-col md:h-16 md:flex-row md:items-center md:justify-between'>
        {/* Linha 1 (mobile) / esquerda (desktop): marca */}
        <div className='flex h-12 items-center border-b border-line md:h-auto md:border-0'>
          <Link
            href='/'
            className='flex items-center gap-2.5 text-ink md:gap-3'
            aria-label='Orlando Pedrazzoli — home'
          >
            {/* Marca "OP" como máscara: herda a cor da tinta em ambos os temas */}
            <span aria-hidden='true' className='logo-mark' />
            <span className='whitespace-nowrap text-sm font-medium tracking-tight'>
              Orlando Pedrazzoli
            </span>
          </Link>
        </div>

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

        {/* Linha 2 (mobile) / direita (desktop): controlos */}
        <div className='flex h-11 items-center justify-between md:h-auto md:justify-end md:gap-4'>
          <div className='flex items-center gap-3 md:gap-4'>
            <LocaleSwitch label={t('language')} />
            <ThemeToggle label={t('theme')} />
          </div>
          <div className='flex items-center gap-3 md:gap-4'>
            <a
              href={site.cv}
              target='_blank'
              rel='noopener noreferrer'
              className='link hidden text-sm text-ink-2 hover:text-ink md:inline'
            >
              {t('resume')}
            </a>
            <Link href='/#contact' className='btn btn-solid btn-sm'>
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
      </div>
    </header>
  );
}
