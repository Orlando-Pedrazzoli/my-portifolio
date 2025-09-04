'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'seu@email.com',
      href: 'mailto:seu@email.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+351 XXX XXX XXX',
      href: 'tel:+351XXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Lisboa, Portugal',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
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
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl sm:text-5xl font-bold mb-4'
          >
            Vamos{' '}
            <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              Conversar
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-gray-400 text-lg max-w-2xl mx-auto'
          >
            Tem um projeto em mente? Vamos trabalhar juntos para criar algo
            incrível
          </motion.p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Nome
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors'
                    placeholder='Seu nome'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-300 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors'
                    placeholder='seu@email.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Assunto
                </label>
                <select
                  id='subject'
                  name='subject'
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors'
                >
                  <option value=''>Selecione um assunto</option>
                  <option value='project'>Novo Projeto</option>
                  <option value='collaboration'>Colaboração</option>
                  <option value='job'>Oportunidade de Trabalho</option>
                  <option value='other'>Outro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-300 mb-2'
                >
                  Mensagem
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors resize-none'
                  placeholder='Conte-me sobre seu projeto...'
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={`
                  w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300
                  ${
                    isSubmitting
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-[1.02]'
                  }
                  text-white flex items-center justify-center gap-2
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className='w-5 h-5' />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 p-4 bg-green-900/30 border border-green-400/30 rounded-lg text-green-400'
                >
                  <CheckCircle className='w-5 h-5' />
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 p-4 bg-red-900/30 border border-red-400/30 rounded-lg text-red-400'
                >
                  <AlertCircle className='w-5 h-5' />
                  Ops! Algo deu errado. Por favor, tente novamente.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-bold text-purple-400 mb-6'>
                Contato Direto
              </h3>
              <div className='space-y-4'>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className='flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all group'
                  >
                    <div className='p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg'>
                      <info.icon className='w-5 h-5 text-white' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>{info.label}</p>
                      <p className='text-white group-hover:text-purple-400 transition-colors'>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-purple-400 mb-6'>
                Redes Sociais
              </h3>
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className='p-4 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all group'
                    aria-label={social.label}
                  >
                    <social.icon className='w-6 h-6 text-gray-400 group-hover:text-white transition-colors' />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/20 rounded-lg'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='relative'>
                  <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                  <div className='absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping'></div>
                </div>
                <h4 className='text-lg font-semibold text-white'>
                  Disponível para Projetos
                </h4>
              </div>
              <p className='text-gray-300 mb-4'>
                Atualmente estou aceitando novos projetos freelance e
                oportunidades de trabalho remoto ou presencial.
              </p>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5'>✓</span>
                  <span>Desenvolvimento Full Stack</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5'>✓</span>
                  <span>Integração de IA/ML</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5'>✓</span>
                  <span>Consultoria Técnica</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-400 mt-0.5'>✓</span>
                  <span>Desenvolvimento de MVPs</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='text-center p-6 bg-gray-800/50 border border-gray-700 rounded-lg'
            >
              <p className='text-gray-300'>
                Normalmente respondo em até{' '}
                <span className='text-purple-400 font-semibold'>24 horas</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
