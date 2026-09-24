// src/components/layout/StructuredData.tsx
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

/** Person + WebSite em todas as páginas. O /about acrescenta ProfilePage. */
export default function StructuredData({ locale }: { locale: Locale }) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: 'Orlando Pedrazzoli',
    url: site.url,
    image: `${site.url}${site.photo}`,
    jobTitle: 'Full Stack Developer',
    description:
      locale === 'pt'
        ? 'Full stack developer em Lisboa que combina engenharia de software com mais de quinze anos a construir e gerir empresas.'
        : 'Full stack developer in Lisbon combining software engineering with 15+ years of building and operating businesses.',
    sameAs: [site.github, site.linkedin],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Pedrazzoli Digital',
        url: 'https://pedrazzolidigital.com',
      },
      { '@type': 'Organization', name: 'Accenture Portugal' },
    ],
    alumniOf: { '@type': 'EducationalOrganization', name: 'Ironhack' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lisboa',
      addressCountry: 'PT',
    },
    knowsLanguage: ['pt', 'en', 'es'],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Software Architecture',
      'E-commerce',
      'SaaS',
      'Business automation',
    ],
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Orlando Pedrazzoli',
    url: site.url,
    inLanguage: locale === 'pt' ? 'pt-PT' : 'en',
    author: { '@id': `${site.url}/#person` },
  };
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
