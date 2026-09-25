// src/app/sitemap.ts
// Uma entrada <url> por idioma e por rota (recomendação do Google para
// sites multilingues: cada versão lista-se a si própria e às restantes via
// xhtml:link). lastModified vem de site.contentUpdated, não da data do
// build — senão todas as páginas "mudam" em cada deploy.
import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { work } from '@/content/work';
import { site, absoluteUrl, languageAlternates } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.contentUpdated);
  const paths = ['', '/about', ...work.map(w => `/work/${w.slug}`)];
  return paths.flatMap(p =>
    routing.locales.map(locale => ({
      url: absoluteUrl(locale, p),
      lastModified,
      changeFrequency: p === '' ? ('monthly' as const) : ('yearly' as const),
      priority: p === '' ? 1 : p.startsWith('/work/') ? 0.8 : 0.6,
      alternates: { languages: languageAlternates(p) },
    })),
  );
}
