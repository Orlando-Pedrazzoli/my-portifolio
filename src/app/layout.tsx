import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import StructuredData from '@/components/SEO/StructuredData';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.orlandopedrazzoli.com'),
  title: {
    default: 'Orlando Pedrazzoli | Full Stack Developer | Lisboa',
    template: '%s | Orlando Pedrazzoli',
  },
  description:
    'Orlando Pedrazzoli - Desenvolvedor Full Stack em Lisboa. Criação de websites profissionais, e-commerce, landing pages e aplicações web com React, Next.js e Node.js.',
  authors: [
    { name: 'Orlando Pedrazzoli', url: 'https://www.orlandopedrazzoli.com' },
  ],
  creator: 'Orlando Pedrazzoli',
  publisher: 'Orlando Pedrazzoli',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Orlando Pedrazzoli | Full Stack Developer | Lisboa',
    description:
      'Desenvolvedor Full Stack especializado em criar websites profissionais, e-commerce e aplicações web modernas com React, Next.js e Node.js.',
    url: 'https://www.orlandopedrazzoli.com',
    siteName: 'Orlando Pedrazzoli',
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'pt_PT'],
    type: 'website',
    images: [
      {
        url: 'https://www.orlandopedrazzoli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orlando Pedrazzoli - Full Stack Developer em Lisboa',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlando Pedrazzoli | Full Stack Developer',
    description:
      'Desenvolvimento de websites profissionais, e-commerce e aplicações web. React, Next.js, Node.js.',
    images: ['https://www.orlandopedrazzoli.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/myico.ico', type: 'image/x-icon' }],
    shortcut: '/myico.ico',
    apple: [{ url: '/myico.ico' }],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.orlandopedrazzoli.com',
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
        <StructuredData />
        <link rel='icon' href='/myico.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        {/* Theme initialization — prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'light';var r=document.documentElement;if(t==='dark'){r.classList.add('dark');r.style.colorScheme='dark'}else{r.classList.remove('dark');r.style.colorScheme='light'}})()`,
          }}
        />
      </head>
      <body
        className='bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors'
        suppressHydrationWarning
      >
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
