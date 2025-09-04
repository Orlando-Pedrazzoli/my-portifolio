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

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mounted, setMounted] = useState(false);

  const roles = [
    'Full Stack Developer',
    'AI Engineer',
    'Problem Solver',
    'Tech Innovator',
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
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900'>
        <div className='absolute inset-0 bg-black/20' />

        {/* Animated particles */}
        {mounted && (
          <div className='absolute inset-0'>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-1 h-1 bg-white/20 rounded-full'
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
        className='absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20'
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
        className='absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20'
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
      />

      {/* Main Content */}
      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
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
            className='inline-flex items-center gap-2 px-4 py-2 mb-8 border border-purple-400/30 rounded-full bg-purple-900/20 backdrop-blur-sm'
          >
            <Sparkles className='w-4 h-4 text-purple-400' />
            <span className='text-sm text-purple-300'>
              AI-Powered Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='text-5xl sm:text-7xl font-bold text-white mb-6'
          >
            Olá, eu sou{' '}
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              Seu Nome
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='text-2xl sm:text-4xl text-gray-300 mb-8 h-12'
          >
            <span>{text}</span>
            <span className='animate-pulse'>|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className='text-lg text-gray-400 max-w-2xl mx-auto mb-12'
          >
            Transformando ideias em soluções inteligentes. Especializado em
            construir aplicações web modernas com integração de IA de ponta.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <a
              href='#projects'
              className='group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105'
            >
              <span className='relative z-10 flex items-center gap-2'>
                <Brain className='w-5 h-5' />
                Ver Projetos AI
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity' />
            </a>

            <a
              href='#contact'
              className='group px-8 py-4 border-2 border-purple-400/50 text-purple-300 font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-purple-400/10 hover:scale-105'
            >
              <span className='flex items-center gap-2'>
                <Code2 className='w-5 h-5' />
                Entrar em Contato
              </span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className='flex gap-6 justify-center mt-12'
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              {
                icon: Linkedin,
                href: 'https://linkedin.com',
                label: 'LinkedIn',
              },
              { icon: Mail, href: 'mailto:seu@email.com', label: 'Email' },
            ].map(social => (
              <motion.a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className='p-3 border border-purple-400/30 rounded-lg bg-purple-900/20 backdrop-blur-sm text-purple-300 hover:text-white hover:bg-purple-600/20 transition-all'
                aria-label={social.label}
              >
                <social.icon className='w-5 h-5' />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: { duration: 1.5, repeat: Infinity },
          }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
        >
          <ChevronDown className='w-8 h-8 text-purple-400/50' />
        </motion.div>
      </div>
    </section>
  );
}
