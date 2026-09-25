// src/lib/site.ts
import { routing, type Locale } from '@/i18n/routing';
import manifest from '@/content/images.json';

export const site = {
  name: 'Orlando Pedrazzoli',
  url: 'https://www.orlandopedrazzoli.com',
  email: 'pedrazzoliorlando@gmail.com',
  github: 'https://github.com/Orlando-Pedrazzoli',
  linkedin: 'https://www.linkedin.com/in/orlandopedrazzoli/',
  location: 'Lisboa, Portugal',
  cv: '/cv/curriculum.pdf',
  photo: '/img_orlando.jpg',
  /** Data da última revisão de conteúdo. Atualizar quando o conteúdo muda
      de facto — alimenta o lastModified do sitemap (não a data do build). */
  contentUpdated: '2026-09-25',
} as const;

/** Código hreflang / BCP 47 de cada locale. PT é explicitamente pt-PT:
    o site posiciona-se em Lisboa, não em português "neutro". */
export const hreflang: Record<Locale, string> = {
  en: 'en',
  pt: 'pt-PT',
};

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
  for (const l of routing.locales) map[hreflang[l]] = absoluteUrl(l, path);
  map['x-default'] = absoluteUrl(routing.defaultLocale, path);
  return map;
}

type Manifest = Record<string, { width: number; height: number }>;
const images = manifest as Manifest;
const EXTENSIONS = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];

/**
 * Resolve uma imagem de /public/work no manifesto gerado em build
 * (scripts/images-manifest.mjs). Aceita qualquer extensão: se o conteúdo diz
 * "x.webp" e existe "x.jpg", usa o .jpg. Devolve null se não existir.
 * Partilhado por Figure (UI), metadata (og:image) e JSON-LD, para que
 * nenhum deles aponte para um ficheiro que não existe.
 */
export function resolveImage(src: string) {
  if (images[src]) return { src, ...images[src] };
  const base = src.replace(/\.[a-z0-9]+$/i, '');
  for (const ext of EXTENSIONS) {
    const key = base + ext;
    if (images[key]) return { src: key, ...images[key] };
  }
  return null;
}
