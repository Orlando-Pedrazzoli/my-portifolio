import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {},

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.orlandopedrazzoli.com',
      },
      {
        protocol: 'https',
        hostname: 'orlandopedrazzoli.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    // Cache de 24h em dev, 30 dias em prod — permite atualizar imagens sem loucura
    minimumCacheTTL:
      process.env.NODE_ENV === 'development' ? 0 : 60 * 60 * 24 * 30,
  },

  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,

  // Redirecionamentos SEO
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },
      { source: '/portfolio', destination: '/#projects', permanent: true },
      { source: '/projetos', destination: '/#projects', permanent: true },
      { source: '/contato', destination: '/#contact', permanent: true },
      { source: '/sobre', destination: '/#about', permanent: true },
    ];
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache longo só para assets com hash no nome (Next.js já faz isso)
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Imagens e fontes: cache de 7 dias com revalidação
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  env: {
    NEXT_PUBLIC_SITE_URL: 'https://orlandopedrazzoli.com',
    NEXT_PUBLIC_SITE_NAME: 'Orlando Pedrazzoli',
  },
};

export default nextConfig;
