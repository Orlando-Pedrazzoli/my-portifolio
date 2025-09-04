'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills';
import type { Skill } from '@/data/skills';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const { t, language } = useLanguage();

  // Competências especiais com traduções
  const specialSkills =
    language === 'pt'
      ? [
          {
            title: 'Resolução de Problemas',
            desc: 'Análise e resolução de problemas complexos',
          },
          {
            title: 'Liderança de Equipe',
            desc: '15+ anos liderando equipes',
          },
          {
            title: 'Estratégia de Negócios',
            desc: 'Visão estratégica de negócios',
          },
          {
            title: 'Aprendizado Rápido',
            desc: 'Adaptação rápida a novas tecnologias',
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

  // Função para traduzir níveis
  const getSkillLevelLabel = (level: number) => {
    if (level >= 90) {
      return t('skills.level.expert');
    } else if (level >= 75) {
      return t('skills.level.advanced');
    } else {
      return t('skills.level.intermediate');
    }
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

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center gap-4 mb-12'
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={`
                px-6 py-3 rounded-lg font-semibold transition-all duration-300
                ${
                  activeCategory === category.name
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
                }
              `}
            >
              <span className='flex items-center gap-2'>
                <span className='text-xl'>{category.icon}</span>
                <span>{category.name}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {getSkillsByCategory(activeCategory as Skill['category']).map(
            (skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className='bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md dark:shadow-none hover:shadow-lg dark:hover:shadow-purple-500/10 transition-all'
              >
                <div className='flex justify-between items-start mb-4'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                    {skill.name}
                  </h3>
                  <span className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className='absolute top-0 left-0 h-full rounded-full'
                    style={{
                      background: `linear-gradient(to right, ${
                        skill.color || '#9333ea'
                      }, ${skill.color || '#3b82f6'})`,
                    }}
                  />
                </div>

                {/* Skill Level Label */}
                <div className='mt-3'>
                  <span
                    className={`
                      text-xs px-2 py-1 rounded-full font-medium
                      ${
                        skill.level >= 90
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-400/30'
                          : skill.level >= 75
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-400/30'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-400/30'
                      }
                    `}
                  >
                    {getSkillLevelLabel(skill.level)}
                  </span>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        {/* Special Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='mt-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-400/20 rounded-lg p-8'
        >
          <h3 className='text-2xl font-bold mb-6 text-center'>
            <span className='bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
              {t('skills.special.title')}
            </span>
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {specialSkills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className='text-center'
              >
                <div className='w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg'>
                  <span className='text-2xl font-bold text-white'>
                    {index + 1}
                  </span>
                </div>
                <h4 className='text-gray-900 dark:text-white font-semibold mb-2'>
                  {item.title}
                </h4>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className='mt-12 text-center'
        >
          <h4 className='text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4'>
            🚀 {t('skills.learning')}
          </h4>
          <div className='flex flex-wrap justify-center gap-3'>
            {[
              'Rust',
              'Web3',
              'Advanced AI/ML',
              'Cloud Architecture',
              'Kubernetes',
            ].map(tech => (
              <span
                key={tech}
                className='px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-300 dark:border-purple-400/30 rounded-full text-sm text-purple-700 dark:text-purple-300 font-medium'
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
