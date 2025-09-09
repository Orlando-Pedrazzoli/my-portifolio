import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import Script from 'next/script';

// Viewport export separado (Next.js 15)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

// Metadata com URL CORRETA
export const metadata: Metadata = {
  metadataBase: new URL('https://orlandopedrazzolidev.vercel.app'),
  title: 'Orlando Pedrazzoli | Full Stack Developer & AI Engineer',
  description:
    'Desenvolvedor Full Stack especializado em criar aplicações web modernas com integração de IA. React, Node.js, Python, AI/ML.',
  keywords: [
    'Orlando Pedrazzoli',
    'Full Stack Developer',
    'AI Engineer',
    'React Developer',
    'Node.js',
    'Python',
    'Web Development',
    'Lisboa',
    'Portugal',
    'Desenvolvedor',
    'Programador',
  ],
  authors: [{ name: 'Orlando Pedrazzoli' }],
  creator: 'Orlando Pedrazzoli',
  publisher: 'Orlando Pedrazzoli',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: 'Orlando Pedrazzoli Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'Orlando Pedrazzoli | Full Stack Developer & AI Engineer',
    description:
      'Desenvolvedor Full Stack especializado em criar aplicações web modernas com integração de IA',
    url: 'https://orlandopedrazzolidev.vercel.app',
    siteName: 'Orlando Pedrazzoli Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orlando Pedrazzoli - Full Stack Developer & AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlando Pedrazzoli | Full Stack Developer & AI Engineer',
    description:
      'Desenvolvedor Full Stack especializado em criar aplicações web modernas com integração de IA',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/myico.ico' },
      { url: '/myico.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/myico.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/myico.ico',
    apple: [
      { url: '/myico.ico' },
      { url: '/myico.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://orlandopedrazzolidev.vercel.app',
    languages: {
      'pt-BR': 'https://orlandopedrazzolidev.vercel.app/pt',
      'en-US': 'https://orlandopedrazzolidev.vercel.app/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <head>
        {/* Theme initialization script - prevents FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const theme = savedTheme || 'light';
                const root = document.documentElement;
                
                if (theme === 'dark') {
                  root.classList.add('dark');
                  root.style.colorScheme = 'dark';
                } else {
                  root.classList.remove('dark');
                  root.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />

        {/* Prevenir Safari Reader Mode */}
        <meta name='format-detection' content='telephone=no' />
        <meta name='x-apple-disable-message-reformatting' />

        {/* Favicon fallbacks */}
        <link rel='icon' href='/myico.ico' sizes='any' />
        <link rel='icon' type='image/x-icon' href='/myico.ico' />
        <link rel='shortcut icon' href='/myico.ico' />
        <link rel='apple-touch-icon' href='/myico.ico' />

        {/* iOS specific */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />

        {/* Dynamic theme color */}
        <meta
          name='theme-color'
          content='#ffffff'
          media='(prefers-color-scheme: light)'
        />
        <meta
          name='theme-color'
          content='#0a0a0a'
          media='(prefers-color-scheme: dark)'
        />
      </head>
      <body
        className='bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors'
        suppressHydrationWarning
      >
        {/* Providers envolvendo TODO o conteúdo */}
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className='min-h-screen'>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
