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
import { useLanguage } from '@/components/providers/LanguageProvider';

// Configuração do site
const SITE_CONFIG = {
  email: 'pedrazzoliorlando@gmail.com',
  phone: '+351 912 164 220',
  location: 'Lisboa, Portugal',
  github: 'https://github.com/Orlando-Pedrazzoli',
  linkedin: 'https://www.linkedin.com/in/orlandopedrazzoli/',
};

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
  const { t, language } = useLanguage();

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
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: Phone,
      label: language === 'pt' ? 'Telefone' : 'Phone',
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: MapPin,
      label: language === 'pt' ? 'Localização' : 'Location',
      value: SITE_CONFIG.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: SITE_CONFIG.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: SITE_CONFIG.linkedin,
    },
  ];

  // Serviços disponíveis com traduções
  const services =
    language === 'pt'
      ? [
          'Desenvolvimento Full Stack',
          'Integração de IA/ML',
          'Consultoria Técnica',
          'Desenvolvimento de MVPs',
        ]
      : [
          'Full Stack Development',
          'AI/ML Integration',
          'Technical Consulting',
          'MVP Development',
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
            <span className='text-gray-900 dark:text-white'>
              {t('contact.title')}{' '}
            </span>
            <span className='bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
              {t('contact.titleHighlight')}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'
          >
            {t('contact.subtitle')}
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
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                  >
                    {t('contact.form.name')}
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors'
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                  >
                    {t('contact.form.email')}
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors'
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  {t('contact.form.subject')}
                </label>
                <select
                  id='subject'
                  name='subject'
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors'
                >
                  <option value=''>
                    {t('contact.form.subjectPlaceholder')}
                  </option>
                  <option value='project'>
                    {t('contact.form.subjectOptions.project')}
                  </option>
                  <option value='collaboration'>
                    {t('contact.form.subjectOptions.collaboration')}
                  </option>
                  <option value='job'>
                    {t('contact.form.subjectOptions.job')}
                  </option>
                  <option value='other'>
                    {t('contact.form.subjectOptions.other')}
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id='message'
                  name='message'
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors resize-none'
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={`
                  w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300
                  ${
                    isSubmitting
                      ? 'bg-gray-400 dark:bg-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-[1.02] shadow-lg hover:shadow-xl'
                  }
                  text-white flex items-center justify-center gap-2
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <Send className='w-5 h-5' />
                    {t('contact.form.send')}
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-400/30 rounded-lg text-green-700 dark:text-green-400'
                >
                  <CheckCircle className='w-5 h-5' />
                  {t('contact.form.success')}
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-400/30 rounded-lg text-red-700 dark:text-red-400'
                >
                  <AlertCircle className='w-5 h-5' />
                  {t('contact.form.error')}
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
              <h3 className='text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6'>
                {t('contact.directContact')}
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
                    className='flex items-center gap-4 p-4 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group shadow-sm hover:shadow-md'
                  >
                    <div className='p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg'>
                      <info.icon className='w-5 h-5 text-white' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        {info.label}
                      </p>
                      <p className='text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6'>
                {t('contact.socialNetworks')}
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
                    className='p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 hover:border-transparent transition-all group shadow-sm hover:shadow-lg'
                    aria-label={social.label}
                  >
                    <social.icon className='w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors' />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-400/20 rounded-lg'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='relative'>
                  <div className='w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full'></div>
                  <div className='absolute inset-0 w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-ping'></div>
                </div>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  {t('contact.available.title')}
                </h4>
              </div>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                {t('contact.available.description')}
              </p>
              <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
                {services.map((service, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <span className='text-purple-600 dark:text-purple-400 mt-0.5'>
                      ✓
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className='text-center p-6 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm'
            >
              <p className='text-gray-700 dark:text-gray-300'>
                {t('contact.responseTime')}{' '}
                <span className='text-purple-600 dark:text-purple-400 font-semibold'>
                  {t('contact.hours')}
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
