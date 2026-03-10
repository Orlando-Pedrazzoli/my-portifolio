'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, getSkillsByCategory } from '@/data/skills';
import type { Skill } from '@/data/skills';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const { t, language } = useLanguage();

  const specialSkills =
    language === 'pt'
      ? [
          {
            title: 'Resolucao de Problemas',
            desc: 'Analise e resolucao de problemas complexos',
          },
          {
            title: 'Lideranca de Equipe',
            desc: '15+ anos liderando equipes',
          },
          {
            title: 'Estrategia de Negocios',
            desc: 'Visao estrategica de negocios',
          },
          {
            title: 'Aprendizado Rapido',
            desc: 'Adaptacao rapida a novas tecnologias',
          },
        ]
      : [
          {
            title: 'Problem Solving',
            desc: 'Analysis and resolution of complex problems',
          },
          {
            title: 'Team Leadership',
            desc: '15+ years leading teams',
          },
          {
            title: 'Business Strategy',
            desc: 'Strategic business vision',
          },
          {
            title: 'Fast Learning',
            desc: 'Quick adaptation to new technologies',
          },
        ];

  const getLevelDots = (level: number) => {
    if (level >= 90) return 5;
    if (level >= 80) return 4;
    if (level >= 70) return 3;
    return 2;
  };

  return (
    <div className='max-w-7xl mx-auto'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl sm:text-5xl font-bold mb-4'
          >
            <span className='text-gray-900 dark:text-white'>
              {t('skills.title')}{' '}
            </span>
            <span className='bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
              {t('skills.titleHighlight')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'
          >
            {t('skills.subtitle')}
          </motion.p>
        </div>

        {/* Category Tabs — Clean, no emojis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center gap-2 mb-12'
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(category.name)}
              className={`relative px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700/60 border border-gray-200 dark:border-gray-700/50'
              }`}
            >
              <span className='flex items-center gap-2'>
                <span>{category.name}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded ${
                    activeCategory === category.name
                      ? 'bg-white/20 dark:bg-gray-900/20'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  {
                    getSkillsByCategory(category.name as Skill['category'])
                      .length
                  }
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid — Modern card layout with accent bar + dots */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
          >
            {getSkillsByCategory(activeCategory as Skill['category']).map(
              (skill, index) => {
                const dots = getLevelDots(skill.level);

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className='group relative bg-white dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/40 rounded-xl p-5 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-md dark:hover:shadow-purple-500/5'
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        {/* Color accent bar */}
                        <div
                          className='w-1 h-8 rounded-full opacity-70 group-hover:opacity-100 transition-opacity'
                          style={{
                            backgroundColor: skill.color || '#9333ea',
                          }}
                        />
                        <h3 className='text-[15px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors'>
                          {skill.name}
                        </h3>
                      </div>

                      {/* Proficiency dots */}
                      <div className='flex items-center gap-1'>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i < dots
                                ? 'bg-gray-700 dark:bg-gray-300 group-hover:bg-purple-600 dark:group-hover:bg-purple-400'
                                : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              },
            )}
          </motion.div>
        </AnimatePresence>

        {/* Business Skills — Clean cards with gradient accent line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='mt-16'
        >
          <h3 className='text-2xl font-bold mb-8 text-center'>
            <span className='bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
              {t('skills.special.title')}
            </span>
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {specialSkills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className='group relative bg-white dark:bg-gray-800/50 border border-gray-200/80 dark:border-gray-700/40 rounded-xl p-6 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-md'
              >
                {/* Subtle gradient accent on hover */}
                <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                <div className='relative'>
                  <div className='w-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 rounded-full mb-4' />
                  <h4 className='text-gray-900 dark:text-white font-semibold mb-2'>
                    {item.title}
                  </h4>
                  <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed'>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='mt-12 text-center'
        >
          <h4 className='text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4'>
            {t('skills.learning')}
          </h4>
          <div className='flex flex-wrap justify-center gap-2.5'>
            {[
              'Testing (Vitest / Playwright)',
              'Docker basics',
              'PostgreSQL / Prisma',
              'Server Components (RSC)',
              'CI/CD (GitHub Actions)',
            ].map(tech => (
              <span
                key={tech}
                className='px-4 py-2 bg-gray-50 dark:bg-gray-800/60 border border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-600 dark:text-gray-400 font-medium hover:border-purple-400 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300'
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
