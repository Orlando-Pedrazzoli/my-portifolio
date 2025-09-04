'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='bg-gray-900 border-t border-gray-800 py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* About */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>Sobre</h3>
            <p className='text-gray-400 text-sm'>
              Full Stack Developer e AI Engineer criando soluções inovadoras que
              combinam desenvolvimento web moderno com inteligência artificial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Links Rápidos
            </h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#about'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href='#experience'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 hover:text-purple-400 transition-colors'
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Conecte-se
            </h3>
            <div className='flex gap-4 mb-4'>
              <motion.a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                className='p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all'
                aria-label='GitHub'
              >
                <Github className='w-5 h-5' />
              </motion.a>
              <motion.a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2 }}
                className='p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5' />
              </motion.a>
              <motion.a
                href='mailto:seu@email.com'
                whileHover={{ scale: 1.2 }}
                className='p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-purple-600 transition-all'
                aria-label='Email'
              >
                <Mail className='w-5 h-5' />
              </motion.a>
            </div>
            <p className='text-gray-400 text-sm'>seu@email.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between'>
          <p className='text-gray-400 text-sm flex items-center gap-1'>
            © {currentYear} Feito com <Heart className='w-4 h-4 text-red-500' />{' '}
            por Seu Nome
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='mt-4 sm:mt-0 p-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors'
            aria-label='Voltar ao topo'
          >
            <ArrowUp className='w-5 h-5' />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
