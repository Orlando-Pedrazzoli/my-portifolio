import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';

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

// Metadata com URL CORRETA e FAVICONS configurados
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
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/myico.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
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
        {/* Favicon tags explícitas para garantir que funcionem em todos os lugares */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' type='image/x-icon' href='/myico.ico' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/myico.ico' />

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

        {/* iOS Light Mode Fix */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
                
                if (isIOS) {
                  function fixIOSLightMode() {
                    const theme = localStorage.getItem('theme') || 'light';
                    const root = document.documentElement;
                    
                    if (theme === 'light' && !root.classList.contains('dark')) {
                      root.setAttribute('data-ios-light', 'true');
                      
                      // Force webkit text fill color reset
                      if (document.body) {
                        document.body.style.webkitTextFillColor = '';
                      }
                      
                      requestAnimationFrame(() => {
                        const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span:not(.bg-gradient-to-r), div:not(.bg-gradient-to-r)');
                        textElements.forEach(el => {
                          if (el instanceof HTMLElement && !el.className.includes('text-transparent')) {
                            el.style.webkitTextFillColor = '';
                          }
                        });
                      });
                    } else {
                      root.removeAttribute('data-ios-light');
                    }
                  }
                  
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', fixIOSLightMode);
                  } else {
                    fixIOSLightMode();
                  }
                  
                  window.addEventListener('storage', function(e) {
                    if (e.key === 'theme') {
                      setTimeout(fixIOSLightMode, 100);
                    }
                  });
                }
              })();
            `,
          }}
        />

        {/* Fix específico para Header e Hero no iOS Light Mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
                
                if (isIOS) {
                  function fixHeaderHero() {
                    const theme = localStorage.getItem('theme') || 'light';
                    
                    if (theme === 'light') {
                      // Fix header Portfolio text
                      const logoText = document.querySelector('header a[href="#home"] span');
                      if (logoText && !logoText.classList.contains('text-purple-600')) {
                        logoText.style.color = '#111827';
                        logoText.style.webkitTextFillColor = '#111827';
                      }
                      
                      // Fix header buttons and icons
                      const headerButtons = document.querySelectorAll('header button');
                      headerButtons.forEach(btn => {
                        if (btn instanceof HTMLElement) {
                          btn.style.webkitTextFillColor = '';
                          const svg = btn.querySelector('svg');
                          if (svg && !svg.classList.contains('text-purple-600')) {
                            svg.style.color = '#374151';
                          }
                        }
                      });
                      
                      // Fix hero Hi I am text
                      const heroH1 = document.querySelector('section:first-of-type h1, #home h1');
                      if (heroH1 instanceof HTMLElement) {
                        // Get the first text node (before the gradient span)
                        const textNodes = Array.from(heroH1.childNodes).filter(
                          node => node.nodeType === Node.TEXT_NODE
                        );
                        if (textNodes.length > 0) {
                          heroH1.style.color = '#111827';
                          heroH1.style.webkitTextFillColor = '#111827';
                        }
                      }
                      
                      // Fix typing animation
                      const typingDiv = document.querySelector('section:first-of-type .text-xl, #home .text-xl');
                      if (typingDiv instanceof HTMLElement) {
                        typingDiv.style.color = '#374151';
                        typingDiv.style.webkitTextFillColor = '#374151';
                        
                        // Fix cursor
                        const cursor = typingDiv.querySelector('.animate-pulse');
                        if (cursor instanceof HTMLElement) {
                          cursor.style.color = '#374151';
                          cursor.style.webkitTextFillColor = '#374151';
                        }
                      }
                      
                      // Fix Get in Touch button
                      const contactBtn = document.querySelector('a[href="#contact"]:not(.bg-gradient-to-r)');
                      if (contactBtn instanceof HTMLElement) {
                        contactBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                        contactBtn.style.borderColor = '#9333ea';
                        contactBtn.style.color = '#9333ea';
                        
                        const btnText = contactBtn.querySelector('span');
                        if (btnText) {
                          btnText.style.color = '#9333ea';
                          btnText.style.webkitTextFillColor = '#9333ea';
                        }
                      }
                      
                      // Preserve gradient texts
                      const gradientTexts = document.querySelectorAll('.bg-gradient-to-r.bg-clip-text.text-transparent');
                      gradientTexts.forEach(el => {
                        if (el instanceof HTMLElement) {
                          el.style.webkitTextFillColor = 'transparent';
                          el.style.backgroundClip = 'text';
                          el.style.webkitBackgroundClip = 'text';
                        }
                      });
                    }
                  }
                  
                  // Run on different load states
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', fixHeaderHero);
                  } else {
                    fixHeaderHero();
                  }
                  
                  // Run after full page load
                  window.addEventListener('load', function() {
                    setTimeout(fixHeaderHero, 100);
                  });
                  
                  // Run when theme changes
                  window.addEventListener('storage', function(e) {
                    if (e.key === 'theme') {
                      setTimeout(fixHeaderHero, 150);
                    }
                  });
                  
                  // Run on orientation change
                  window.addEventListener('orientationchange', function() {
                    setTimeout(fixHeaderHero, 200);
                  });
                  
                  // Run when clicking theme toggle
                  document.addEventListener('click', function(e) {
                    if (e.target && e.target.closest && e.target.closest('.theme-toggle-button')) {
                      setTimeout(fixHeaderHero, 100);
                    }
                  });
                }
              })();
            `,
          }}
        />

        {/* Prevenir Safari Reader Mode */}
        <meta name='format-detection' content='telephone=no' />
        <meta name='x-apple-disable-message-reformatting' />

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
