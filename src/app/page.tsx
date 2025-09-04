import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className='relative bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-x-hidden transition-colors'>
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
    </main>
  );
}
