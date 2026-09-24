// src/lib/site.ts
import { routing, type Locale } from '@/i18n/routing';

export const site = {
  name: 'Orlando Pedrazzoli',
  url: 'https://www.orlandopedrazzoli.com',
  email: 'pedrazzoliorlando@gmail.com',
  github: 'https://github.com/Orlando-Pedrazzoli',
  linkedin: 'https://www.linkedin.com/in/orlandopedrazzoli/',
  location: 'Lisboa, Portugal',
  cv: '/cv/curriculum.pdf',
  photo: '/img_orlando.jpg',
} as const;

/**
 * URL absoluto de uma rota num idioma, respeitando `localePrefix: 'as-needed'`
 * (o idioma por defeito não tem prefixo). Usado em canonical, hreflang,
 * Open Graph, sitemap e JSON-LD — um único sítio a saber a regra.
 */
export function absoluteUrl(locale: Locale, path = '') {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${site.url}${prefix}${path}`;
}

/** Mapa hreflang de uma rota, com x-default no idioma principal. */
export function languageAlternates(path = '') {
  const map: Record<string, string> = {};
  for (const l of routing.locales) map[l] = absoluteUrl(l, path);
  map['x-default'] = absoluteUrl(routing.defaultLocale, path);
  return map;
}
