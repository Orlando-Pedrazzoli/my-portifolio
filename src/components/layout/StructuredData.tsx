// src/components/layout/StructuredData.tsx
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';

export default function StructuredData({ locale }: { locale: Locale }) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Orlando Pedrazzoli',
    url: site.url,
    image: `${site.url}${site.photo}`,
    jobTitle: 'Full Stack Developer',
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
    ],
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Orlando Pedrazzoli',
    url: site.url,
    inLanguage: locale === 'pt' ? 'pt-PT' : 'en',
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
