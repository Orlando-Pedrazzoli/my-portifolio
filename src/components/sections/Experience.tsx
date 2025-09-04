'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { Calendar, MapPin, Building, Briefcase, ChevronRight } from 'lucide-react'

export default function Experience() {
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
            Minha{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experiência
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Uma jornada de crescimento contínuo e transformação profissional
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400 opacity-30" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative flex flex-col md:flex-row gap-8 mb-12
                ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
              `}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-4 border-gray-900 z-10" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:ml-auto'} pl-16 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`
                    bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 
                    rounded-lg p-6 backdrop-blur-sm
                    ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                  `}
                >
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? 'md:flex md:flex-row-reverse md:justify-between' : 'md:flex md:justify-between'}`}>
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className={`flex items-center gap-2 text-purple-400 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className={`mt-2 md:mt-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`flex items-center gap-2 text-gray-400 text-sm ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-gray-400 text-sm mt-1 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-gray-300 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities.length > 0 && (
                    <div className="mb-4">
                      <h4 className={`text-sm font-semibold text-purple-400 mb-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        Principais Responsabilidades
                      </h4>
                      <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.responsibilities.slice(0, 3).map((resp, i) => (
                          <li key={i} className={`text-sm text-gray-400 flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-purple-900/30 text-purple-400 border border-purple-400/30 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 5 && (
                        <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                          +{exp.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className={`flex items-center gap-2 text-green-400 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="font-semibold">🏆 Conquista Principal:</span>
                        <span className="text-gray-300">{exp.achievements[0]}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Anos de Experiência', value: '15+', icon: '🎯' },
            { label: 'Empresas', value: '5', icon: '🏢' },
            { label: 'Projetos Completos', value: '50+', icon: '🚀' },
            { label: 'Tecnologias', value: '30+', icon: '💻' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 rounded-lg p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          
            href="/cv/curriculum.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform"
          >
            Download CV Completo
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}