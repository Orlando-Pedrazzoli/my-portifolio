'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Coffee, Rocket, Heart } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

// Configuração do site
const SITE_CONFIG = {
  location: 'Lisboa, Portugal',
};

export default function About() {
  const { t, language } = useLanguage();

  // Stats com traduções dinâmicas
  const stats = [
    { label: t('about.stats.experience'), value: '15+', icon: Calendar },
    { label: t('about.stats.projects'), value: '50+', icon: Rocket },
    { label: t('about.stats.clients'), value: '30+', icon: Heart },
    { label: t('about.stats.code'), value: '100k+', icon: Coffee },
  ];

  // Journey com traduções dinâmicas
  const journey =
    language === 'pt'
      ? [
          {
            year: '2010-2023',
            title: 'Empreendedor & CEO',
            description:
              'Fundei e liderei a Elite Surfing, expandindo para mercados internacionais.',
          },
          {
            year: '2023-2024',
            title: 'Transição de Carreira',
            description:
              'Bootcamp intensivo em Full Stack Development, focado em tecnologias modernas.',
          },
          {
            year: '2024',
            title: 'Data Analyst - Accenture',
            description:
              'Análise de dados para cliente multinacional, desenvolvendo soluções automatizadas.',
          },
          {
            year: 'Presente',
            title: 'Full Stack Developer & AI Engineer',
            description:
              'Desenvolvendo aplicações inteligentes que combinam web development com IA.',
          },
        ]
      : [
          {
            year: '2010-2023',
            title: 'Entrepreneur & CEO',
            description:
              'Founded and led Elite Surfing, expanding to international markets.',
          },
          {
            year: '2023-2024',
            title: 'Career Transition',
            description:
              'Intensive Full Stack Development bootcamp, focused on modern technologies.',
          },
          {
            year: '2024',
            title: 'Data Analyst - Accenture',
            description:
              'Data analysis for multinational client, developing automated solutions.',
          },
          {
            year: 'Present',
            title: 'Full Stack Developer & AI Engineer',
            description:
              'Developing intelligent applications that combine web development with AI.',
          },
        ];

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
            {t('about.title')}{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              {t('about.titleHighlight')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'
          >
            {t('about.subtitle')}
          </motion.p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >
            <div className='prose prose-invert max-w-none'>
              <h3 className='text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400'>
                {t('about.heading')}
              </h3>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                {t('about.description1')}
              </p>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                {t('about.description2')}
              </p>
              <p className='text-gray-700 dark:text-gray-300'>
                {t('about.description3')}
              </p>
            </div>

            {/* Location */}
            <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
              <MapPin className='w-5 h-5 text-purple-600 dark:text-purple-400' />
              <span>{SITE_CONFIG.location}</span>
            </div>

            {/* CTA */}
            <div className='flex gap-4'>
              <a
                href='/cv/curriculum.pdf'
                download
                className='px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform'
              >
                {t('about.downloadCV')}
              </a>
              <a
                href='#experience'
                className='px-6 py-3 border border-purple-500 dark:border-purple-400/50 text-purple-700 dark:text-purple-300 font-semibold rounded-lg hover:bg-purple-100 dark:hover:bg-purple-400/10 transition-colors'
              >
                {t('about.viewExperience')}
              </a>
            </div>
          </motion.div>

          {/* Right Column - Timeline & Stats */}
          <div className='space-y-8'>
            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='relative'
            >
              <h4 className='text-xl font-bold mb-6 text-purple-600 dark:text-purple-400'>
                {t('about.journey.title')}
              </h4>
              <div className='space-y-4'>
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='flex gap-4'
                  >
                    <div className='relative'>
                      <div className='w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full' />
                      {index < journey.length - 1 && (
                        <div className='absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-full bg-purple-600/30 dark:bg-purple-400/30' />
                      )}
                    </div>
                    <div className='flex-1 -mt-1'>
                      <span className='text-sm text-purple-600 dark:text-purple-400 font-semibold'>
                        {item.year}
                      </span>
                      <h5 className='text-gray-900 dark:text-white font-semibold'>
                        {item.title}
                      </h5>
                      <p className='text-gray-600 dark:text-gray-400 text-sm mt-1'>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='grid grid-cols-2 gap-4'
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className='bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-300 dark:border-purple-400/20 rounded-lg p-4 text-center'
                >
                  <stat.icon className='w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2' />
                  <div className='text-2xl font-bold text-gray-900 dark:text-white'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-300 dark:border-purple-400/20 rounded-lg p-6'
            >
              <h4 className='text-lg font-bold mb-4 text-purple-600 dark:text-purple-400'>
                {t('about.coreSkills')}
              </h4>
              <div className='flex flex-wrap gap-2'>
                {[
                  'React',
                  'Node.js',
                  'Python',
                  'AI/ML',
                  'TypeScript',
                  'Next.js',
                  'MongoDB',
                  'Docker',
                ].map(skill => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-purple-200 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-400/30 rounded-full text-sm text-purple-700 dark:text-purple-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
