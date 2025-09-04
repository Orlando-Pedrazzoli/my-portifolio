'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, getFeaturedProjects } from '@/data/projects'
import { Github, ExternalLink, Play, ChevronRight, Sparkles } from 'lucide-react'
import type { Project } from '@/data/projects'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['All', 'AI/ML', 'Full Stack', 'Frontend', 'Backend']
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Meus{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Explorando a interseção entre desenvolvimento web e inteligência artificial
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg overflow-hidden backdrop-blur-sm"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
                    <span className="flex items-center gap-1 text-xs font-semibold text-white">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-20">
                      {project.category === 'AI/ML' ? '🤖' : '💻'}
                    </span>
                  </div>
                  
                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {project.liveUrl && (
                      
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                      aria-label="View Details"
                    >
                      <Play className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs px-2 py-1 bg-purple-900/30 text-purple-400 border border-purple-400/30 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View More */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    Ver Detalhes
                    <ChevronRight className="w-4 h-4" />
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-gray-900 border border-gray-700 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-400 border border-purple-400/30 rounded-full text-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span className="text-2xl text-gray-400">×</span>
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{selectedProject.longDescription || selectedProject.description}</p>

                {selectedProject.highlights && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Destaques</h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="text-purple-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Ver Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}