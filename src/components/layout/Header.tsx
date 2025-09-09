'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Brain, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função de toggle de tema com fix para iOS
  const handleThemeToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Vibração tátil no iOS (se suportado)
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }

    // Toggle do tema
    toggleTheme();

    // Forçar atualização no iOS
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
      setTimeout(() => {
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
      }, 100);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14 sm:h-16'>
          {/* Logo */}
          <a
            href='#home'
            className='flex items-center gap-1.5 text-lg sm:text-xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
            onClick={e => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <Brain className='w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400' />
            <span>Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
              {navItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className='text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-2'>
              {/* Language Toggle Desktop */}
              <motion.button
                onClick={toggleLanguage}
                className='px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label='Toggle language'
              >
                <Globe className='w-4 h-4' />
                <span className='text-sm font-medium'>
                  {language === 'pt' ? 'EN' : 'PT'}
                </span>
              </motion.button>

              {/* Theme Toggle Desktop */}
              <motion.button
                onClick={handleThemeToggle}
                onTouchEnd={handleThemeToggle}
                className='p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label='Toggle theme'
              >
                {theme === 'dark' ? (
                  <Sun className='w-5 h-5' />
                ) : (
                  <Moon className='w-5 h-5' />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className='flex items-center gap-1 md:hidden'>
            {/* Mobile Language Toggle - Compact */}
            <button
              onClick={toggleLanguage}
              className='flex items-center gap-1 px-2 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
              aria-label='Toggle language'
            >
              <Globe className='w-4 h-4' />
              <span>{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>

            {/* Mobile Theme Toggle - Fix para iOS */}
            <button
              onClick={handleThemeToggle}
              onTouchEnd={handleThemeToggle}
              className='p-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors theme-toggle-button relative z-50'
              aria-label='Toggle theme'
              style={{
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                userSelect: 'none',
                WebkitUserSelect: 'none',
              }}
            >
              {theme === 'dark' ? (
                <Sun className='w-5 h-5 pointer-events-none' />
              ) : (
                <Moon className='w-5 h-5 pointer-events-none' />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
              aria-label='Menu'
            >
              {isMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800'
          >
            <ul className='py-2'>
              {navItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className='block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
