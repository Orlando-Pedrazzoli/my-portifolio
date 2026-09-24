// src/app/[locale]/work/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { work, getCase } from '@/content/work';
import { site, absoluteUrl, languageAlternates } from '@/lib/site';
import CaseArticle from '@/components/work/CaseArticle';

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    work.map(w => ({ locale, slug: w.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  const l = locale as Locale;
  const path = `/work/${slug}`;
  return {
    title: `${c.title} — ${c.headline[l]}`,
    description: c.tagline[l],
    alternates: {
      canonical: absoluteUrl(l, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title: `${c.title} — ${c.headline[l]}`,
      description: c.tagline[l],
      url: absoluteUrl(l, path),
      type: 'article',
      images: c.cover?.src ? [{ url: c.cover.src }] : undefined,
    },
  };
}

export default async function WorkPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const c = getCase(slug);
  if (!c) notFound();
  const l = locale as Locale;

  // JSON-LD do case: breadcrumb + a peça como CreativeWork do autor.
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl(l) },
      {
        '@type': 'ListItem',
        position: 2,
        name: l === 'pt' ? 'Trabalho' : 'Work',
        item: absoluteUrl(l, '/#work'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: c.title,
        item: absoluteUrl(l, `/work/${slug}`),
      },
    ],
  };
  const creativeWork = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: c.title,
    headline: c.headline[l],
    description: c.tagline[l],
    url: absoluteUrl(l, `/work/${slug}`),
    image: c.cover?.src ? `${site.url}${c.cover.src}` : undefined,
    inLanguage: l === 'pt' ? 'pt-PT' : 'en',
    author: { '@type': 'Person', name: site.name, url: site.url },
    keywords: c.stack.join(', '),
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }}
      />
      <CaseArticle c={c} />
    </>
  );
}
