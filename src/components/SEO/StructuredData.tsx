// components/SEO/StructuredData.tsx
// Schema.org Structured Data para melhor SEO
// Orlando Pedrazzoli - Full Stack Developer

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Orlando Pedrazzoli',
    alternateName: 'Orlando Pedrazzoli Developer',
    url: 'https://www.orlandopedrazzoli.com',
    image: 'https://www.orlandopedrazzoli.com/orlando-photo.jpg',
    sameAs: [
      'https://github.com/Orlando-Pedrazzoli',
      'https://www.linkedin.com/in/orlandopedrazzoli/',
      'https://www.instagram.com/orlandopedrazzoli',
      'https://www.twitter.com/orlandopedrazzoli',
    ],
    jobTitle: [
      'Full Stack Developer',
      'AI Engineer',
      'Website Creator',
      'Criador de Websites',
      'Desenvolvedor Full Stack',
      'Software Engineer',
      'N8N Automation Specialist',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    alumniOf: {
      '@type': 'EducationOrganization',
      name: 'Full Stack Development Bootcamp',
    },
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'AI Integration',
      'Machine Learning',
      'N8N Automation',
      'ChatGPT Integration',
      'E-commerce Development',
      'Landing Page Development',
      'Website Creation',
      'Criação de Sites',
      'Desenvolvimento Web',
      'Automação de Processos',
    ],
    knowsLanguage: ['pt-BR', 'en-US', 'es'],
    nationality: 'Brazilian',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisboa',
      addressRegion: 'Lisboa',
      addressCountry: 'PT',
    },
    email: 'pedrazzoliorlando@gmail.com',
    telephone: '+351912164220',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Orlando Pedrazzoli - Full Stack Developer Portfolio',
    alternateName: [
      'Orlando Pedrazzoli Website',
      'Orlando Pedrazzoli Developer',
      'Orlando Pedrazzoli Criador de Sites',
    ],
    url: 'https://www.orlandopedrazzoli.com',
    description:
      'Portfolio profissional de Orlando Pedrazzoli - Desenvolvedor Full Stack e especialista em IA. Criação de websites, e-commerce, automação com N8N, integração ChatGPT.',
    publisher: {
      '@type': 'Person',
      name: 'Orlando Pedrazzoli',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.orlandopedrazzoli.com/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['pt-BR', 'en-US'],
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Orlando Pedrazzoli - Web Development Services',
    image: 'https://www.orlandopedrazzoli.com/logo.png',
    url: 'https://www.orlandopedrazzoli.com',
    telephone: '+351912164220',
    email: 'pedrazzoliorlando@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisboa',
      addressRegion: 'Lisboa',
      postalCode: '1000-000',
      addressCountry: 'PT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.7223,
      longitude: -9.1393,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '€€',
    serviceType: [
      'Web Development',
      'Website Creation',
      'E-commerce Development',
      'Landing Page Design',
      'N8N Automation',
      'ChatGPT Integration',
      'Full Stack Development',
      'React Development',
      'Next.js Development',
      'Node.js Development',
      'API Development',
      'Database Design',
      'UI/UX Design',
      'Mobile Responsive Design',
      'SEO Optimization',
      'Performance Optimization',
      'Criação de Sites',
      'Desenvolvimento de E-commerce',
      'Automação com N8N',
      'Integração com IA',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Portugal',
      },
      {
        '@type': 'Country',
        name: 'Brazil',
      },
      {
        '@type': 'Place',
        name: 'Europe',
      },
      {
        '@type': 'Place',
        name: 'Worldwide (Remote)',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description: 'Criação de websites profissionais responsivos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
            description: 'Desenvolvimento de lojas online completas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'N8N Automation',
            description: 'Automação de processos com N8N',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Integration',
            description: 'Integração com ChatGPT e outras IAs',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '30',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.orlandopedrazzoli.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projetos',
        item: 'https://www.orlandopedrazzoli.com/#projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contato',
        item: 'https://www.orlandopedrazzoli.com/#contact',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quais serviços Orlando Pedrazzoli oferece?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Orlando Pedrazzoli oferece desenvolvimento Full Stack, criação de websites profissionais, desenvolvimento de e-commerce, landing pages, automação com N8N, integração com ChatGPT e outras IAs, consultoria técnica e desenvolvimento de MVPs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does Orlando Pedrazzoli offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Orlando Pedrazzoli offers Full Stack development, professional website creation, e-commerce development, landing pages, N8N automation, ChatGPT and AI integration, technical consulting, and MVP development.',
        },
      },
      {
        '@type': 'Question',
        name: 'Onde Orlando Pedrazzoli está localizado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Orlando Pedrazzoli está baseado em Lisboa, Portugal, mas atende clientes em todo o mundo através de trabalho remoto.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quais tecnologias Orlando Pedrazzoli domina?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Orlando domina React, Next.js, Node.js, TypeScript, Python, MongoDB, PostgreSQL, Docker, AWS, Vercel, além de especialização em N8N para automação e integração com APIs de IA como ChatGPT.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
