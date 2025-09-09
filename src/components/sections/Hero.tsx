'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Sparkles,
  Code2,
  Brain,
} from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

// Configuração do site
const SITE_CONFIG = {
  name: 'Orlando Pedrazzoli',
  title: 'Full Stack Developer & AI Engineer',
  description:
    'Desenvolvedor Full Stack especializado em criar aplicações web modernas com integração de IA',
  url: 'https://orlandopedrazzoli.com',
  email: 'pedrazzoliorlando@gmail.com',
  github: 'https://github.com/Orlando-Pedrazzoli',
  linkedin: 'https://www.linkedin.com/in/orlandopedrazzoli/',
  phone: '+351 912164220',
  location: 'Lisboa, Portugal',
};

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  const roles = [
    t('hero.roles.fullstack'),
    t('hero.roles.ai'),
    t('hero.roles.problem'),
    t('hero.roles.tech'),
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, mounted, roles]);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16 md:pt-0'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900'>
        <div className='absolute inset-0 bg-white/50 dark:bg-black/20' />

        {/* Animated particles */}
        {mounted && (
          <div className='absolute inset-0'>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-1 h-1 bg-gray-600/20 dark:bg-white/20 rounded-full'
                initial={{
                  x:
                    Math.random() *
                    (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y:
                    Math.random() *
                    (typeof window !== 'undefined' ? window.innerHeight : 800),
                }}
                animate={{
                  x:
                    Math.random() *
                    (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y:
                    Math.random() *
                    (typeof window !== 'undefined' ? window.innerHeight : 800),
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className='absolute top-20 left-20 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl opacity-30 dark:opacity-20'
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
      />
      <motion.div
        className='absolute bottom-20 right-20 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-30 dark:opacity-20'
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
      />

      {/* Main Content - Ajustado com padding adicional no mobile */}
      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8 sm:mt-0'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className='inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 border border-purple-400/50 dark:border-purple-400/30 rounded-full bg-white/80 dark:bg-purple-900/20 backdrop-blur-sm'
          >
            <Sparkles className='w-4 h-4 text-purple-600 dark:text-purple-400' />
            <span className='text-sm text-purple-700 dark:text-purple-300'>
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Name - Ajustado tamanho do texto para mobile */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6'
          >
            {t('hero.greeting')}{' '}
            <span className='bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0'>
              {SITE_CONFIG.name}
            </span>
          </motion.h1>

          {/* Typing Animation - Ajustado tamanho para mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-xl sm:text-2xl md:text-4xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 h-12'
          >
            <span>{text}</span>
            <span className='animate-pulse'>|</span>
          </motion.div>

          {/* Description - Ajustado espaçamento */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className='text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0'
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons - Melhorado para mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0'
          >
            <a
              href='#projects'
              className='group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
            >
              <span className='relative z-10 flex items-center justify-center gap-2'>
                <Brain className='w-5 h-5' />
                {t('hero.cta.projects')}
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity' />
            </a>

            <a
              href='#contact'
              className='group w-full sm:w-auto px-8 py-4 border-2 border-purple-500 dark:border-purple-400/50 text-purple-700 dark:text-purple-300 font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-purple-100 dark:hover:bg-purple-400/10 hover:scale-105'
            >
              <span className='flex items-center justify-center gap-2'>
                <Code2 className='w-5 h-5' />
                {t('hero.cta.contact')}
              </span>
            </a>
          </motion.div>

          {/* Social Links - Ajustado espaçamento */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className='flex gap-4 sm:gap-6 justify-center mt-8 sm:mt-12'
          >
            <motion.a
              href={SITE_CONFIG.github}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className='p-2.5 sm:p-3 border border-gray-300 dark:border-purple-400/30 rounded-lg bg-white/80 dark:bg-purple-900/20 backdrop-blur-sm text-gray-700 dark:text-purple-300 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-purple-600/20 transition-all shadow-md hover:shadow-lg'
              aria-label='GitHub'
            >
              <Github className='w-5 h-5' />
            </motion.a>

            <motion.a
              href={SITE_CONFIG.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className='p-2.5 sm:p-3 border border-gray-300 dark:border-purple-400/30 rounded-lg bg-white/80 dark:bg-purple-900/20 backdrop-blur-sm text-gray-700 dark:text-purple-300 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-purple-600/20 transition-all shadow-md hover:shadow-lg'
              aria-label='LinkedIn'
            >
              <Linkedin className='w-5 h-5' />
            </motion.a>

            <motion.a
              href={`mailto:${SITE_CONFIG.email}`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className='p-2.5 sm:p-3 border border-gray-300 dark:border-purple-400/30 rounded-lg bg-white/80 dark:bg-purple-900/20 backdrop-blur-sm text-gray-700 dark:text-purple-300 hover:text-purple-600 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-purple-600/20 transition-all shadow-md hover:shadow-lg'
              aria-label='Email'
            >
              <Mail className='w-5 h-5' />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Ajustado posição para mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 1.5, repeat: Infinity },
          }}
          className='absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2'
        >
          <ChevronDown className='w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-purple-400/50' />
        </motion.div>
      </div>
    </section>
  );
}
