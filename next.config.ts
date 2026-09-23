// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { generateImagesManifest } from './scripts/images-manifest.mjs';

// Gera src/content/images.json ao carregar a config — corre em `next dev`,
// `next build` e `npm run build`, sem depender de hooks pre*/post* do npm.
generateImagesManifest();

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Servir as imagens diretamente de /public. O optimizador da Vercel
    // (/_next/image) devolve 402 quando a conta excede a quota de Image
    // Optimization, partilhada por todos os projetos — e o site fica sem
    // screenshots. Os JPGs em public/work já vão redimensionados.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
