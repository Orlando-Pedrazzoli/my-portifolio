// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { work } from '@/content/work';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ['', '/about', ...work.map(w => `/work/${w.slug}`)];
  return paths.map(p => ({
    url: `${site.url}${p}`,
    lastModified: now,
    alternates: {
      languages: { pt: `${site.url}${p}`, en: `${site.url}/en${p}` },
    },
  }));
}
