// src/app/[locale]/work/[slug]/twitter-image.tsx
// Mesma imagem que o Open Graph — o Twitter/X card usa twitter:image, que só
// é emitido por este ficheiro (opengraph-image.tsx só emite og:image).
export {
  default,
  generateStaticParams,
  size,
  contentType,
  alt,
} from './opengraph-image';
