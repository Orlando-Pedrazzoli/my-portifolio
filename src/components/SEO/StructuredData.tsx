// components/SEO/StructuredData.tsx
// Schema.org Structured Data — honest, validated, penalty-safe

export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Orlando Pedrazzoli',
    url: 'https://www.orlandopedrazzoli.com',
    image: 'https://www.orlandopedrazzoli.com/orlando-photo.jpg',
    sameAs: [
      'https://github.com/Orlando-Pedrazzoli',
      'https://www.linkedin.com/in/orlandopedrazzoli/',
      'https://www.instagram.com/opcreate',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Pedrazzoli Digital',
        url: 'https://pedrazzolidigital.com',
      },
      {
        '@type': 'Organization',
        name: 'Accenture Portugal',
        url: 'https://www.accenture.com/pt-pt',
      },
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Ironhack',
      url: 'https://www.ironhack.com',
    },
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'MongoDB',
      'Express.js',
      'Tailwind CSS',
      'E-commerce Development',
      'Web Development',
    ],
    knowsLanguage: [
      { '@type': 'Language', name: 'Portuguese' },
      { '@type': 'Language', name: 'English' },
      { '@type': 'Language', name: 'Spanish' },
    ],
    nationality: {
      '@type': 'Country',
      name: 'Brazil',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisboa',
      addressRegion: 'Lisboa',
      addressCountry: 'PT',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Orlando Pedrazzoli — Full Stack Developer',
    url: 'https://www.orlandopedrazzoli.com',
    description:
      'Portfolio profissional de Orlando Pedrazzoli — Desenvolvedor Full Stack em Lisboa. Criação de websites, e-commerce e aplicações web com React, Next.js e Node.js.',
    author: {
      '@type': 'Person',
      name: 'Orlando Pedrazzoli',
    },
    inLanguage: ['pt', 'en'],
  };

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pedrazzoli Digital — Web Development',
    description:
      'Desenvolvimento Full Stack freelance — websites, e-commerce, landing pages e aplicações web.',
    url: 'https://www.orlandopedrazzoli.com',
    email: 'pedrazzoliorlando@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisboa',
      addressRegion: 'Lisboa',
      addressCountry: 'PT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.7223,
      longitude: -9.1393,
    },
    priceRange: '$$',
    serviceType: [
      'Web Development',
      'E-commerce Development',
      'Landing Page Development',
      'Full Stack Development',
      'React Development',
      'Next.js Development',
    ],
    areaServed: [
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'Brazil' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Desenvolvimento Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description:
              'Criação de websites profissionais e responsivos com React e Next.js.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
            description:
              'Desenvolvimento de lojas online com pagamentos, gestão de pedidos e painel admin.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Pages',
            description:
              'Landing pages otimizadas para conversão com SEO e performance.',
          },
        },
      ],
    },
  };

  // ProfilePage schema — better suited for portfolio than BreadcrumbList
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Orlando Pedrazzoli',
      url: 'https://www.orlandopedrazzoli.com',
    },
    dateCreated: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}
