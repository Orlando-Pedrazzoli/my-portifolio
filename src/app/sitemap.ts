// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { work } from '@/content/work';
import { absoluteUrl, languageAlternates } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ['', '/about', ...work.map(w => `/work/${w.slug}`)];
  return paths.map(p => ({
    url: absoluteUrl(routing.defaultLocale, p),
    lastModified: now,
    changeFrequency: p === '' ? 'monthly' : 'yearly',
    priority: p === '' ? 1 : p.startsWith('/work/') ? 0.8 : 0.6,
    alternates: { languages: languageAlternates(p) },
  }));
}
