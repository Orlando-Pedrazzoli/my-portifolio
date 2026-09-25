// src/app/[locale]/work/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { work, getCase } from '@/content/work';
import { site, absoluteUrl, languageAlternates, resolveImage } from '@/lib/site';
import CaseArticle from '@/components/work/CaseArticle';
import NextProject from '@/components/work/NextProject';

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
  // Title curto (≈50 chars antes do template " — Orlando Pedrazzoli"); a
  // headline completa fica no og:title e no H1. A imagem OG/Twitter vem de
  // ./opengraph-image.tsx e ./twitter-image.tsx (file-based metadata tem
  // prioridade sobre o que está aqui e no layout).
  const title = `${c.title} — ${c.category[l]}`;
  return {
    title,
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
      locale: l === 'pt' ? 'pt_PT' : 'en_US',
      authors: [site.name],
    },
  };
}

export default async function WorkPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const c = getCase(slug);
  if (!c) notFound();
  const l = locale as Locale;
  // Próximo projeto na ordem de apresentação; o último volta ao primeiro.
  const next = work[(work.indexOf(c) + 1) % work.length];

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
  const cover = c.cover?.src ? resolveImage(c.cover.src) : null;
  const creativeWork = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${absoluteUrl(l, `/work/${slug}`)}#work`,
    name: c.title,
    headline: c.headline[l],
    description: c.tagline[l],
    url: absoluteUrl(l, `/work/${slug}`),
    image: cover ? `${site.url}${cover.src}` : undefined,
    inLanguage: l === 'pt' ? 'pt-PT' : 'en',
    // Ano de início do projeto ("2025 – 2026" → 2025).
    dateCreated: c.year.slice(0, 4),
    genre: c.category[l],
    keywords: [...c.tags[l], ...c.stack].join(', '),
    author: { '@id': `${site.url}/#person` },
    creator: { '@id': `${site.url}/#person` },
    isPartOf: { '@type': 'WebSite', url: site.url, name: site.name },
    ...(c.liveUrl ? { sameAs: c.liveUrl } : {}),
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
      {next.slug !== c.slug && <NextProject c={next} />}
    </>
  );
}
