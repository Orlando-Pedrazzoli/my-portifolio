'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sun, Moon, Globe } from 'lucide-react';
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

  // Lock/unlock scroll quando menu abrir/fechar
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    <>
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
              className='flex items-center gap-1.5 text-lg sm:text-xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors z-50'
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
            <div className='flex items-center gap-1 md:hidden z-50'>
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

              {/* Hamburger Menu Button - MODERNO */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='relative w-10 h-10 flex items-center justify-center text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                aria-label='Menu'
                aria-expanded={isMenuOpen}
              >
                <div className='w-6 h-5 flex flex-col justify-center items-center'>
                  <motion.span
                    animate={
                      isMenuOpen
                        ? { rotate: 45, y: 8 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='w-6 h-0.5 bg-current block mb-1.5 origin-center'
                  />
                  <motion.span
                    animate={
                      isMenuOpen
                        ? { opacity: 0, x: -20 }
                        : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='w-6 h-0.5 bg-current block mb-1.5'
                  />
                  <motion.span
                    animate={
                      isMenuOpen
                        ? { rotate: -45, y: -8 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='w-6 h-0.5 bg-current block origin-center'
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Menu - FULLSCREEN MODERNO */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop com blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200 
              }}
              className='fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl z-50 md:hidden overflow-y-auto'
            >
              {/* Menu Header */}
              <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800'>
                <div className='flex items-center gap-2'>
                  <Brain className='w-6 h-6 text-purple-600 dark:text-purple-400' />
                  <span className='text-xl font-bold text-gray-900 dark:text-white'>
                    Menu
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className='p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
                  aria-label='Close menu'
                >
                  <svg
                    className='w-6 h-6 text-gray-700 dark:text-gray-300'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items com Stagger Animation */}
              <nav className='p-6'>
                <ul className='space-y-2'>
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={e => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className='group flex items-center gap-3 px-4 py-4 rounded-xl text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300'
                      >
                        <span className='w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity' />
                        <span className='text-lg font-medium'>
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Menu Footer com Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className='absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50'
              >
                <div className='flex items-center gap-3'>
                  <button
                    onClick={toggleLanguage}
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-gray-200 dark:border-gray-700 transition-all duration-300 font-medium'
                  >
                    <Globe className='w-5 h-5' />
                    <span>{language === 'pt' ? 'English' : 'Português'}</span>
                  </button>

                  <button
                    onClick={e => {
                      handleThemeToggle(e);
                    }}
                    onTouchEnd={handleThemeToggle}
                    className='p-3 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-gray-200 dark:border-gray-700 transition-all duration-300'
                    aria-label='Toggle theme'
                  >
                    {theme === 'dark' ? (
                      <Sun className='w-5 h-5' />
                    ) : (
                      <Moon className='w-5 h-5' />
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}