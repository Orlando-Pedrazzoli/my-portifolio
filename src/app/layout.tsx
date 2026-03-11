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
    default:
      'Orlando Pedrazzoli | Desenvolvedor Full Stack em Lisboa | React, Next.js, Node.js',
    template: '%s | Orlando Pedrazzoli',
  },
  description:
    'Desenvolvedor Full Stack em Lisboa, Portugal. Criação de websites, e-commerce, landing pages e aplicações web com React, Next.js, Node.js e MongoDB. Projetos reais em produção para clientes em Portugal e Brasil.',
  keywords: [
    'Desenvolvedor Full Stack Lisboa',
    'Full Stack Developer Lisbon',
    'Criação de websites Portugal',
    'React developer Lisboa',
    'Next.js developer Portugal',
    'E-commerce developer',
    'Freelance web developer Lisboa',
    'Desenvolvimento web Portugal',
    'MERN stack developer',
    'Node.js developer Portugal',
    'Orlando Pedrazzoli',
  ],
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
    title: 'Orlando Pedrazzoli | Desenvolvedor Full Stack em Lisboa',
    description:
      'Criação de websites, e-commerce e aplicações web com React, Next.js e Node.js. Projetos reais em produção para clientes em Portugal e Brasil.',
    url: 'https://www.orlandopedrazzoli.com',
    siteName: 'Orlando Pedrazzoli — Full Stack Developer',
    locale: 'pt_PT',
    alternateLocale: ['pt_BR', 'en_US'],
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orlando Pedrazzoli — Desenvolvedor Full Stack em Lisboa, Portugal',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlando Pedrazzoli | Full Stack Developer em Lisboa',
    description:
      'Websites, e-commerce e aplicações web com React, Next.js e Node.js. Projetos reais em produção.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://www.orlandopedrazzoli.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt' suppressHydrationWarning>
      <head>
        <StructuredData />
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
