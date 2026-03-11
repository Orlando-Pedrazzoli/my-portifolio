import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title:
    'Orlando Pedrazzoli | Desenvolvedor Full Stack em Lisboa | React, Next.js, Node.js',
  description:
    'Desenvolvedor Full Stack em Lisboa com projetos reais em produção. Websites, e-commerce, landing pages e aplicações web com React, Next.js, Node.js e MongoDB. Disponível para projetos freelance.',
  alternates: {
    canonical: 'https://www.orlandopedrazzoli.com',
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id='about' className='py-20 px-4 bg-gray-50 dark:bg-gray-950'>
        <About />
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 px-4 bg-white dark:bg-gray-900/50'>
        <Skills />
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-4 bg-gray-50 dark:bg-gray-950'>
        <Projects />
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        className='py-20 px-4 bg-white dark:bg-gray-900/50'
      >
        <Experience />
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 px-4 bg-gray-50 dark:bg-gray-950'>
        <Contact />
      </section>
    </>
  );
}
