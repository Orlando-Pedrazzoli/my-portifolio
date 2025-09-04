'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Coffee, Rocket, Target, Heart } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Anos de Experiência', value: '15+', icon: Calendar },
    { label: 'Projetos Completos', value: '50+', icon: Rocket },
    { label: 'Clientes Satisfeitos', value: '30+', icon: Heart },
    { label: 'Linhas de Código', value: '100k+', icon: Coffee },
  ];

  const journey = [
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
            Sobre{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              Mim
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-gray-400 text-lg max-w-2xl mx-auto'
          >
            De empreendedor a desenvolvedor, minha jornada é sobre transformação
            e paixão por tecnologia
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
              <h3 className='text-2xl font-bold mb-4 text-purple-400'>
                Da Gestão Empresarial ao Código
              </h3>
              <p className='text-gray-300 mb-4'>
                Após 15 anos liderando minha própria empresa no setor de surf,
                decidi fazer uma transição de carreira para tecnologia. Minha
                experiência em gestão, estratégia e resolução de problemas
                complexos me dá uma perspectiva única no desenvolvimento de
                software.
              </p>
              <p className='text-gray-300 mb-4'>
                Hoje, combino minha experiência empresarial com habilidades
                técnicas em Full Stack Development e Inteligência Artificial
                para criar soluções que não apenas funcionam, mas que
                transformam negócios.
              </p>
              <p className='text-gray-300'>
                Meu foco está em desenvolver aplicações web modernas e
                escaláveis, com integração de IA para automatizar processos e
                gerar insights valiosos para empresas de todos os tamanhos.
              </p>
            </div>

            {/* Location */}
            <div className='flex items-center gap-2 text-gray-400'>
              <MapPin className='w-5 h-5 text-purple-400' />
              <span>Lisboa, Portugal</span>
            </div>

            {/* CTA */}
            <div className='flex gap-4'>
              <a
                href='/cv/curriculum.pdf'
                download
                className='px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform'
              >
                Download CV
              </a>
              <a
                href='#experience'
                className='px-6 py-3 border border-purple-400/50 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-colors'
              >
                Ver Experiência
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
              <h4 className='text-xl font-bold mb-6 text-purple-400'>
                Minha Jornada
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
                      <div className='w-3 h-3 bg-purple-400 rounded-full' />
                      {index < journey.length - 1 && (
                        <div className='absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-full bg-purple-400/30' />
                      )}
                    </div>
                    <div className='flex-1 -mt-1'>
                      <span className='text-sm text-purple-400 font-semibold'>
                        {item.year}
                      </span>
                      <h5 className='text-white font-semibold'>{item.title}</h5>
                      <p className='text-gray-400 text-sm mt-1'>
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
                  className='bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 rounded-lg p-4 text-center'
                >
                  <stat.icon className='w-8 h-8 text-purple-400 mx-auto mb-2' />
                  <div className='text-2xl font-bold text-white'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-gray-400'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 rounded-lg p-6'
            >
              <h4 className='text-lg font-bold mb-4 text-purple-400'>
                Core Skills
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
                    className='px-3 py-1 bg-purple-900/30 border border-purple-400/30 rounded-full text-sm text-purple-300'
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
