'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

// Configuração do site
const SITE_CONFIG = {
  name: 'Orlando Pedrazzoli',
  email: 'pedrazzoliorlando@gmail.com',
  github: 'https://github.com/Orlando-Pedrazzoli',
  linkedin: 'https://www.linkedin.com/in/orlandopedrazzoli/',
  website: 'orlandopedrazzoli.com',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Links rápidos com traduções
  const quickLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  // Texto sobre
  const aboutText =
    language === 'pt'
      ? 'Full Stack Developer e AI Engineer criando soluções inovadoras que combinam desenvolvimento web moderno com inteligência artificial.'
      : 'Full Stack Developer and AI Engineer creating innovative solutions that combine modern web development with artificial intelligence.';

  const quickLinksTitle = language === 'pt' ? 'Links Rápidos' : 'Quick Links';
  const connectTitle = language === 'pt' ? 'Conecte-se' : 'Connect';

  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* About */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              {t('nav.about')}
            </h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              {aboutText}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              {quickLinksTitle}
            </h3>
            <ul className='space-y-2 text-sm'>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
              {connectTitle}
            </h3>
            <div className='flex gap-4 mb-4'>
              <motion.a
                href={SITE_CONFIG.github}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                className='p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white hover:bg-purple-600 transition-all'
                aria-label='GitHub'
              >
                <Github className='w-5 h-5' />
              </motion.a>
              <motion.a
                href={SITE_CONFIG.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                className='p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white hover:bg-purple-600 transition-all'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5' />
              </motion.a>
              <motion.a
                href={`mailto:${SITE_CONFIG.email}`}
                whileHover={{ scale: 1.2 }}
                className='p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white hover:bg-purple-600 transition-all'
                aria-label='Email'
              >
                <Mail className='w-5 h-5' />
              </motion.a>
            </div>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              {SITE_CONFIG.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between'>
          <div className='text-gray-600 dark:text-gray-400 text-sm'>
            <p>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <a
              href={`https://${SITE_CONFIG.website}`}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
            >
              {SITE_CONFIG.website}
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='mt-4 sm:mt-0 p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors'
            aria-label={language === 'pt' ? 'Voltar ao topo' : 'Back to top'}
          >
            <ArrowUp className='w-5 h-5' />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
