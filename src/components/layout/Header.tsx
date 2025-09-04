'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Brain } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Contato', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <motion.a
            href='#home'
            className='flex items-center gap-2 text-xl font-bold text-white hover:text-purple-400 transition-colors'
            whileHover={{ scale: 1.05 }}
            onClick={e => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <Brain className='w-6 h-6 text-purple-400' />
            <span>Portfolio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-8'>
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className='text-gray-300 hover:text-purple-400 transition-colors font-medium'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-white p-2'
            aria-label='Menu'
          >
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='md:hidden bg-gray-900 border-t border-gray-800'
          >
            <ul className='py-4'>
              {navItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className='block px-4 py-3 text-gray-300 hover:text-purple-400 hover:bg-gray-800 transition-all'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
