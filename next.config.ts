import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Otimização de imagens
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
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 ano
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compressão e otimização
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  productionBrowserSourceMaps: false,

  // Redirecionamentos SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/projetos',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/contato',
        destination: '/#contact',
        permanent: true,
      },
      {
        source: '/sobre',
        destination: '/#about',
        permanent: true,
      },
    ];
  },

  // Headers de segurança e SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache para assets estáticos
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(js|css|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Rewrites para URLs amigáveis
  async rewrites() {
    return [
      // Rewrite para seções do site
      {
        source: '/about',
        destination: '/#about',
      },
      {
        source: '/skills',
        destination: '/#skills',
      },
      {
        source: '/projects',
        destination: '/#projects',
      },
      {
        source: '/experience',
        destination: '/#experience',
      },
      {
        source: '/contact',
        destination: '/#contact',
      },
    ];
  },

  // Configurações experimentais para melhor performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Webpack customizado para otimização
  webpack: (config, { dev, isServer }) => {
    // Otimizações de produção
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        minimize: true,
        sideEffects: false,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            common: {
              name: 'common',
              chunks: 'all',
              minChunks: 2,
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },

  // Configuração do output
  output: 'standalone',

  // Trailing slash para URLs consistentes
  trailingSlash: false,

  // React Strict Mode para melhor desenvolvimento
  reactStrictMode: true,

  // Configuração de ambiente
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://orlandopedrazzoli.com',
    NEXT_PUBLIC_SITE_NAME: 'Orlando Pedrazzoli',
    NEXT_PUBLIC_SITE_DESCRIPTION:
      'Full Stack Developer & AI Engineer - Criador de Websites',
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || '',
  },
};

export default nextConfig;
