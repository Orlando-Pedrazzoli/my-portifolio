// src/app/[locale]/work/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';
import { work, getCase } from '@/content/work';
import { site } from '@/lib/site';
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
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return {
    title: c.title,
    description: c.tagline[l],
    alternates: {
      canonical: `${site.url}${prefix}/work/${slug}`,
      languages: {
        pt: `${site.url}/work/${slug}`,
        en: `${site.url}/en/work/${slug}`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.tagline[l],
      images: c.cover?.src ? [{ url: c.cover.src }] : undefined,
    },
  };
}

export default async function WorkPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const c = getCase(slug);
  if (!c) notFound();
  return <CaseArticle c={c} />;
}
