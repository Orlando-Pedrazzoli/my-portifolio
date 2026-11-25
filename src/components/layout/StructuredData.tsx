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
        ? 'Full stack developer em Lisboa que combina engenharia de software com mais de quinze anos a construir e gerir empresas. Estuda e implementa IA em processos reais todos os dias.'
        : 'Full stack developer in Lisbon combining software engineering with 15+ years of building and operating businesses. Studies and implements AI in real company processes every day.',
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
      'Applied artificial intelligence',
      'Generative AI',
      'AI agents',
      'Microsoft Excel',
      'Microsoft Word',
      'Microsoft Outlook',
      'Executive presence',
      'Emotional intelligence',
      'Coaching',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Microsoft Excel 365 (2023)',
        credentialCategory: 'certificate',
        recognizedBy: { '@type': 'Organization', name: 'Percipio' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Microsoft Word 365 (2024)',
        credentialCategory: 'certificate',
        recognizedBy: { '@type': 'Organization', name: 'Percipio' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Microsoft Outlook 365',
        credentialCategory: 'certificate',
        recognizedBy: { '@type': 'Organization', name: 'Percipio' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Agentic AI Fluency',
        credentialCategory: 'certificate',
        url: 'https://www.udacity.com/certificate/e/47f7bb10-e8be-11f1-9a28-dbe138a36106',
        recognizedBy: { '@type': 'Organization', name: 'Udacity' },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Generative AI Fluency',
        credentialCategory: 'certificate',
        url: 'https://www.udacity.com/certificate/e/4520ac0c-e4f0-11f1-9bd6-136af0fefc0d',
        recognizedBy: { '@type': 'Organization', name: 'Udacity' },
      },
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
