import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';

export const metadata: Metadata = {
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
  openGraph: {
    title: 'Orlando Pedrazzoli | Full Stack Developer & AI Engineer',
    description:
      'Desenvolvedor Full Stack especializado em criar aplicações web modernas com integração de IA',
    url: 'https://orlandopedrazzoli.com',
    siteName: 'Orlando Pedrazzoli Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Você pode adicionar uma imagem para preview em redes sociais
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
    canonical: 'https://orlandopedrazzoli.com',
    languages: {
      'pt-BR': 'https://orlandopedrazzoli.com/pt',
      'en-US': 'https://orlandopedrazzoli.com/en',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR' suppressHydrationWarning>
      <head>
        {/* Favicon fallbacks para garantir compatibilidade */}
        <link rel='icon' href='/myico.ico' sizes='any' />
        <link rel='icon' type='image/x-icon' href='/myico.ico' />
        <link rel='shortcut icon' href='/myico.ico' />
        <link rel='apple-touch-icon' href='/myico.ico' />
      </head>
      <body className='bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors'>
        <LanguageProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
