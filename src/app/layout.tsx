import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import StructuredData from '@/components/SEO/StructuredData';

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

// Metadata OTIMIZADA PARA SEO - Orlando Pedrazzoli
export const metadata: Metadata = {
  metadataBase: new URL('https://www.orlandopedrazzoli.com'),
  title: {
    default:
      'Orlando Pedrazzoli | Full Stack Developer & AI Engineer | Criador de Websites | Lisboa',
    template: '%s | Orlando Pedrazzoli - Developer',
  },
  description:
    'Orlando Pedrazzoli - Desenvolvedor Full Stack e Especialista em IA em Lisboa. Criação de websites profissionais, e-commerce, landing pages, automação com N8N, integração com ChatGPT. Desenvolvimento web moderno com React, Next.js, Node.js. Transformo ideias em soluções digitais.',
  keywords: [
    // Nome e Marca Pessoal
    'Orlando Pedrazzoli',
    'Orlando Pedrazzoli desenvolvedor',
    'Orlando Pedrazzoli developer',
    'Orlando Pedrazzoli Lisboa',
    'Orlando Pedrazzoli Portugal',

    // Português - Serviços Principais
    'criador de websites',
    'criação de sites',
    'desenvolvimento de sites',
    'fazer website',
    'criar site profissional',
    'desenvolver e-commerce',
    'criar loja online',
    'landing page profissional',
    'desenvolvimento web Lisboa',
    'programador Lisboa',
    'desenvolvedor freelance Portugal',
    'criação de aplicações web',
    'desenvolvimento de aplicativos',

    // Português - Tecnologias e Especialidades
    'automação com N8N',
    'integração ChatGPT',
    'integração inteligência artificial',
    'automação de processos',
    'desenvolvimento Full Stack',
    'programador React',
    'desenvolvedor Next.js',
    'especialista Node.js',
    'MongoDB desenvolvimento',
    'API REST desenvolvimento',
    'webhook automação',
    'Zapier alternativa N8N',
    'Make integromat automação',

    // English - Main Services
    'website creator',
    'web developer',
    'website builder',
    'professional website development',
    'e-commerce development',
    'online store creation',
    'landing page development',
    'web development Lisbon',
    'programmer Lisbon',
    'freelance developer Portugal',
    'web application development',
    'custom software development',

    // English - Technologies and Specialties
    'N8N automation',
    'ChatGPT integration',
    'AI integration specialist',
    'process automation',
    'Full Stack Developer',
    'React developer',
    'Next.js expert',
    'Node.js specialist',
    'MongoDB developer',
    'REST API development',
    'webhook automation',
    'workflow automation',

    // Serviços Específicos
    'criar site imobiliária',
    'sistema de gestão online',
    'plataforma SaaS desenvolvimento',
    'MVP desenvolvimento',
    'prototipagem rápida',
    'consultoria tecnológica',
    'transformação digital',
    'modernização de sistemas',
    'migração de sistemas',
    'otimização de performance',
    'SEO técnico',
    'PWA desenvolvimento',
    'aplicação web progressiva',

    // Stack Tecnológico
    'React',
    'React 18',
    'React 19',
    'Next.js',
    'Next.js 14',
    'Next.js 15',
    'TypeScript',
    'JavaScript ES6',
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'FastAPI',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Prisma ORM',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
    'Docker',
    'Kubernetes',
    'AWS',
    'Google Cloud',
    'Vercel',
    'Netlify',
    'LangChain',
    'OpenAI API',
    'Stripe pagamentos',
    'PayPal integração',

    // Localização e Mercado
    'Lisboa',
    'Portugal',
    'Lisbon',
    'desenvolvedor Lisboa',
    'programador Portugal',
    'developer Lisbon',
    'programmer Portugal',
    'desenvolvedor Sintra',
    'desenvolvedor Cascais',
    'desenvolvedor Porto',
    'remote developer',
    'desenvolvedor remoto',
    'freelancer Portugal',
    'freelancer Lisboa',
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
  category: 'technology',
  classification:
    'Web Development, Software Development, AI Integration, Automation',
  applicationName: 'Orlando Pedrazzoli - Full Stack Developer & AI Engineer',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title:
      'Orlando Pedrazzoli | Criador de Websites & Desenvolvedor Full Stack | Lisboa',
    description:
      'Especialista em criar websites profissionais, e-commerce, aplicações web modernas com IA. Automação N8N, ChatGPT, React, Next.js. Transformo sua ideia em realidade digital.',
    url: 'https://www.orlandopedrazzoli.com',
    siteName: 'Orlando Pedrazzoli - Developer Portfolio',
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'pt_PT'],
    type: 'website',
    images: [
      {
        url: 'https://www.orlandopedrazzoli.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Orlando Pedrazzoli - Full Stack Developer & AI Engineer - Criador de Websites em Lisboa',
        type: 'image/jpeg',
      },
      {
        url: 'https://www.orlandopedrazzoli.com/orlando-photo.jpg',
        width: 800,
        height: 800,
        alt: 'Orlando Pedrazzoli - Developer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@orlandopedrazzoli',
    creator: '@orlandopedrazzoli',
    title: 'Orlando Pedrazzoli | Criador de Websites & Full Stack Developer',
    description:
      'Desenvolvimento de websites profissionais, e-commerce, aplicações web com IA. Especialista em React, Next.js, Node.js, automação N8N.',
    images: ['https://www.orlandopedrazzoli.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
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
    languages: {
      'pt-BR': 'https://www.orlandopedrazzoli.com/pt',
      'en-US': 'https://www.orlandopedrazzoli.com/en',
      'pt-PT': 'https://www.orlandopedrazzoli.com/pt-pt',
    },
    types: {
      'application/rss+xml': 'https://www.orlandopedrazzoli.com/feed.xml',
    },
  },
  verification: {
    google: 'seu-codigo-google-search-console', // Adicione seu código do Google Search Console
    yandex: 'seu-codigo-yandex',
    yahoo: 'seu-codigo-yahoo',
    // Para Bing, use a meta tag other['msvalidate.01']
  },
  other: {
    'msvalidate.01': 'seu-codigo-bing', // Verificação do Bing
    'og:logo': 'https://www.orlandopedrazzoli.com/logo.png',
    'og:email': 'pedrazzoliorlando@gmail.com',
    'og:phone_number': '+351 912 164 220',
    'og:latitude': '38.7223',
    'og:longitude': '-9.1393',
    'og:street-address': 'Lisboa, Portugal',
    'og:locality': 'Lisboa',
    'og:region': 'Lisboa',
    'og:postal-code': '1000-000',
    'og:country-name': 'Portugal',
    'article:author': 'Orlando Pedrazzoli',
    'article:publisher': 'https://www.orlandopedrazzoli.com',
    'msapplication-TileColor': '#9333ea',
    'msapplication-TileImage': '/mstile-144x144.png',
    'apple-mobile-web-app-title': 'Orlando Pedrazzoli',
    'application-name': 'Orlando Pedrazzoli Portfolio',
    'msapplication-tooltip':
      'Orlando Pedrazzoli - Full Stack Developer & AI Engineer',
    'msapplication-starturl': 'https://www.orlandopedrazzoli.com',
    'msapplication-navbutton-color': '#9333ea',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#9333ea',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'x-ua-compatible': 'IE=edge',
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
        {/* Estrutura de dados Schema.org para SEO */}
        <StructuredData />

        {/* Favicon tags explícitas para garantir que funcionem em todos os lugares */}
        <link rel='icon' href='/myico.ico' />
        <link rel='shortcut icon' href='/myico.ico' />

        {/* Preconnect para otimização de performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='dns-prefetch' href='https://www.google-analytics.com' />

        {/* Meta tags adicionais para SEO */}
        <meta name='author' content='Orlando Pedrazzoli' />
        <meta name='designer' content='Orlando Pedrazzoli' />
        <meta name='reply-to' content='pedrazzoliorlando@gmail.com' />
        <meta name='owner' content='Orlando Pedrazzoli' />
        <meta name='url' content='https://www.orlandopedrazzoli.com' />
        <meta
          name='identifier-URL'
          content='https://www.orlandopedrazzoli.com'
        />
        <meta name='coverage' content='Worldwide' />
        <meta name='distribution' content='Global' />
        <meta name='rating' content='General' />

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
        itemScope
        itemType='https://schema.org/WebPage'
      >
        {/* Providers envolvendo TODO o conteúdo */}
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className='min-h-screen' itemProp='mainContentOfPage'>
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
