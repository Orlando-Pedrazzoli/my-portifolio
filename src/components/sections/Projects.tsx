'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { Github, ExternalLink, Play, ChevronRight, X } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t, language } = useLanguage();

  const categories =
    language === 'pt'
      ? ['Todos', 'Full Stack', 'Frontend', 'Backend']
      : ['All', 'Full Stack', 'Frontend', 'Backend'];

  const getCategoryInEnglish = (category: string) => {
    const map: { [key: string]: string } = {
      Todos: 'All',
    };
    return map[category] || category;
  };

  const englishCategory = getCategoryInEnglish(selectedCategory);

  const filteredProjects =
    englishCategory === 'All'
      ? projects
      : projects.filter(p => p.category === englishCategory);

  const categoryEmoji = (cat: string) => {
    switch (cat) {
      case 'Full Stack':
        return '🚀';
      case 'Frontend':
        return '🎨';
      case 'Backend':
        return '⚙️';
      default:
        return '💻';
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
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className='group relative'
              >
                <div className='relative bg-white dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 hover:border-purple-200 dark:hover:border-purple-500/30 hover:-translate-y-1'>
                  {/* Project Image */}
                  <div className='relative h-52 overflow-hidden'>
                    {project.image &&
                    project.image !== '' &&
                    !project.image.includes('placeholder') ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className='object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          onError={e => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback =
                              target.parentElement?.querySelector(
                                '.fallback-icon',
                              );
                            if (fallback) {
                              fallback.classList.remove('hidden');
                            }
                          }}
                        />
                        <div className='fallback-icon absolute inset-0 flex items-center justify-center hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900'>
                          <span className='text-5xl opacity-30'>
                            {categoryEmoji(project.category)}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900'>
                        <span className='text-5xl opacity-30'>
                          {categoryEmoji(project.category)}
                        </span>
                      </div>
                    )}

                    {/* Gradient overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500' />

                    {/* Action buttons — appear on hover */}
                    <div className='absolute bottom-4 right-4 flex items-center gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-2.5 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/25 transition-colors'
                          aria-label='GitHub'
                        >
                          <Github className='w-4 h-4 text-white' />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-2.5 bg-white/15 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/25 transition-colors'
                          aria-label='Live Demo'
                        >
                          <ExternalLink className='w-4 h-4 text-white' />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className='p-2.5 bg-purple-500/80 backdrop-blur-md rounded-xl border border-purple-400/30 hover:bg-purple-500 transition-colors'
                        aria-label='View Details'
                      >
                        <Play className='w-4 h-4 text-white' />
                      </button>
                    </div>

                    {/* Category pill — bottom left over image */}
                    <div className='absolute bottom-4 left-4'>
                      <span className='text-[11px] tracking-wide uppercase font-semibold px-3 py-1.5 bg-white/15 backdrop-blur-md text-white rounded-lg border border-white/20'>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className='p-6'>
                    <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>
                      {project.title}
                    </h3>

                    <p className='text-gray-500 dark:text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed'>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className='flex flex-wrap gap-1.5 mb-5'>
                      {project.technologies.slice(0, 3).map(tech => (
                        <span
                          key={tech}
                          className='text-[11px] font-medium px-2.5 py-1 bg-gray-50 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 rounded-md border border-gray-100 dark:border-gray-700/50'
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className='text-[11px] font-medium px-2.5 py-1 bg-gray-50 dark:bg-gray-800/80 text-gray-500 dark:text-gray-500 rounded-md border border-gray-100 dark:border-gray-700/50'>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View More */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className='flex items-center gap-1.5 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors text-sm font-medium group/btn'
                    >
                      {t('projects.viewDetails')}
                      <ChevronRight className='w-4 h-4 transition-transform group-hover/btn:translate-x-0.5' />
                    </button>
                  </div>
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
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm'
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className='bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl'
              onClick={e => e.stopPropagation()}
            >
              <div className='p-8'>
                <div className='flex justify-between items-start mb-6'>
                  <div>
                    <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight'>
                      {selectedProject.title}
                    </h3>
                    <span className='inline-block text-xs tracking-wide uppercase font-semibold px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 rounded-lg'>
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className='p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors flex-shrink-0 ml-4'
                  >
                    <X className='w-5 h-5 text-gray-500 dark:text-gray-400' />
                  </button>
                </div>

                <p className='text-gray-600 dark:text-gray-300 mb-8 leading-relaxed'>
                  {selectedProject.longDescription ||
                    selectedProject.description}
                </p>

                {selectedProject.highlights && (
                  <div className='mb-8'>
                    <h4 className='text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4'>
                      {t('projects.highlights')}
                    </h4>
                    <ul className='space-y-2.5'>
                      {selectedProject.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-1'
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className='mb-8'>
                  <h4 className='text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4'>
                    {t('projects.technologies')}
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className='text-sm px-3 py-1.5 bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-100 dark:border-gray-700/50'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex gap-3 pt-2'>
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-xl transition-colors text-sm font-medium'
                    >
                      <Github className='w-4 h-4' />
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all text-sm font-medium'
                    >
                      <ExternalLink className='w-4 h-4' />
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
