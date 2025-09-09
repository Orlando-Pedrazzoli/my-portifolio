'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import {
  Github,
  ExternalLink,
  Play,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, language } = useLanguage();

  // Categorias com traduções
  const categories =
    language === 'pt'
      ? ['Todos', 'IA/ML', 'Full Stack', 'Frontend', 'Backend']
      : ['All', 'AI/ML', 'Full Stack', 'Frontend', 'Backend'];

  // Mapear categoria selecionada para inglês (usado no filtro)
  const getCategoryInEnglish = (category: string) => {
    const map: { [key: string]: string } = {
      Todos: 'All',
      'IA/ML': 'AI/ML',
    };
    return map[category] || category;
  };

  const englishCategory = getCategoryInEnglish(selectedCategory);

  const filteredProjects =
    englishCategory === 'All'
      ? projects
      : projects.filter(p => p.category === englishCategory);

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
              {t('projects.title')}{' '}
            </span>
            <span className='bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
              {t('projects.titleHighlight')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'
          >
            {t('projects.subtitle')}
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-12'
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300
                ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className='group relative bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all'
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className='absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full'>
                    <span className='flex items-center gap-1 text-xs font-semibold text-white'>
                      <Sparkles className='w-3 h-3' />
                      {t('projects.featured')}
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className='relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20'>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-6xl opacity-30 dark:opacity-20'>
                      {project.category === 'AI/ML' ? '🤖' : '💻'}
                    </span>
                  </div>

                  {/* Overlay with actions */}
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors'
                        aria-label='GitHub'
                      >
                        <Github className='w-5 h-5 text-white' />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors'
                        aria-label='Live Demo'
                      >
                        <ExternalLink className='w-5 h-5 text-white' />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className='p-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors'
                      aria-label='View Details'
                    >
                      <Play className='w-5 h-5 text-white' />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className='p-6'>
                  <div className='mb-3'>
                    <span className='text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-300 dark:border-purple-400/30 rounded-full font-medium'>
                      {project.category}
                    </span>
                  </div>

                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                    {project.title}
                  </h3>

                  <p className='text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2'>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-700'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-700'>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View More */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className='flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-sm font-medium'
                  >
                    {t('projects.viewDetails')}
                    <ChevronRight className='w-4 h-4' />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto'
              onClick={e => e.stopPropagation()}
            >
              <div className='p-8'>
                <div className='flex justify-between items-start mb-6'>
                  <div>
                    <h3 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
                      {selectedProject.title}
                    </h3>
                    <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border border-purple-300 dark:border-purple-400/30 rounded-full text-sm font-medium'>
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors'
                  >
                    <span className='text-2xl text-gray-600 dark:text-gray-400'>
                      ×
                    </span>
                  </button>
                </div>

                <p className='text-gray-700 dark:text-gray-300 mb-6'>
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>

                {selectedProject.highlights && (
                  <div className='mb-6'>
                    <h4 className='text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3'>
                      {t('projects.highlights')}
                    </h4>
                    <ul className='space-y-2'>
                      {selectedProject.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className='flex items-start gap-2 text-gray-700 dark:text-gray-300'
                        >
                          <span className='text-purple-600 dark:text-purple-400 mt-1'>
                            •
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className='mb-6'>
                  <h4 className='text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3'>
                    {t('projects.technologies')}
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex gap-4'>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors'
                    >
                      <Github className='w-5 h-5' />
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all'
                    >
                      <ExternalLink className='w-5 h-5' />
                      {t('projects.viewDemo')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
