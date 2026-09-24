// src/content/work/growkind-world.ts
import type { WorkCase } from '../types';

export const growkindWorld: WorkCase = {
  slug: 'growkind-world',
  title: 'GrowKind World',
  headline: {
    pt: 'Publicar um método educativo como produto digital pago, em dois idiomas.',
    en: 'Publishing an educational method as a paid digital product, in two languages.',
  },
  category: {
    pt: 'Plataforma editorial e de cursos',
    en: 'Publishing and courses platform',
  },
  tags: {
    pt: ['Produto', 'Conteúdo pago', 'i18n'],
    en: ['Product', 'Paid content', 'i18n'],
  },
  tagline: {
    pt: 'Plataforma educativa e editorial dedicada à infância neurodivergente: livro digital com paywall, cursos por módulo, loja e i18n completo.',
    en: 'Educational and publishing platform for neurodivergent childhood: digital book with paywall, module-based courses, shop and full i18n.',
  },
  client: { pt: 'GrowKind World', en: 'GrowKind World' },
  year: '2026',
  status: {
    pt: 'Em produção, Stripe em modo live.',
    en: 'In production, Stripe in live mode.',
  },
  liveUrl: 'https://growkindworld.com/',
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/growkind-world',
  selected: true,
  cover: {
    src: '/work/growkind-world/leitor.webp',
    caption: {
      pt: 'Leitor do livro — navegação por capítulos com paywall a partir de um ponto definido.',
      en: 'Book reader — chapter navigation with paywall from a defined point.',
    },
    alt: { pt: 'Leitor do livro GrowKind', en: 'GrowKind book reader' },
  },
  metrics: [
    {
      value: '30',
      label: {
        pt: 'capítulos no leitor com paywall',
        en: 'chapters in the reader with paywall',
      },
    },
    {
      value: '433+',
      label: {
        pt: 'chaves de tradução PT/EN',
        en: 'PT/EN translation keys',
      },
    },
  ],
  context: {
    pt: [
      'Um autor e educador queria publicar o seu método (RDF) e um livro de 30 capítulos como produto digital, com cursos separados para famílias e para profissionais, em português e inglês desde o primeiro dia.',
    ],
    en: [
      'An author and educator wanted to publish his method (RDF) and a 30-chapter book as a digital product, with separate courses for families and professionals, in Portuguese and English from day one.',
    ],
  },
  problem: {
    pt: [
      'Conteúdo pago tem de ficar realmente protegido — os PDFs dos cursos não podem estar num URL público — e ao mesmo tempo o leitor tem de ser agradável de usar num telemóvel à noite.',
      'i18n "a sério" significa duas cópias editoriais completas, não etiquetas traduzidas.',
    ],
    en: [
      'Paid content has to be genuinely protected — course PDFs cannot sit on a public URL — while the reader has to be pleasant to use on a phone at night.',
      'Real i18n means two complete editorial copies, not translated labels.',
    ],
  },
  role: {
    pt: 'Único developer: arquitetura, leitor, paywall, integração Stripe, entrega protegida de conteúdo, i18n e SEO.',
    en: 'Sole developer: architecture, reader, paywall, Stripe integration, protected content delivery, i18n and SEO.',
  },
  constraints: {
    pt: [
      'Conteúdo pago realmente protegido: nenhum PDF acessível por URL público.',
      'Duas cópias editoriais completas, não etiquetas traduzidas.',
      'Leitor agradável num telemóvel, à noite, para pais cansados.',
    ],
    en: [
      'Paid content genuinely protected: no PDF reachable by public URL.',
      'Two complete editorial copies, not translated labels.',
      'A reader that is pleasant on a phone, at night, for tired parents.',
    ],
  },
  solution: {
    pt: [
      'Next.js com rotas por locale (next-intl, 433+ chaves), leitor de livro com navegação por capítulos e paywall, módulos de curso servidos por rota protegida e consciente do idioma, checkout Stripe e whitelist de administradores.',
    ],
    en: [
      'Next.js with per-locale routes (next-intl, 433+ keys), book reader with chapter navigation and paywall, course modules served by a protected, locale-aware route, Stripe checkout and an admin whitelist.',
    ],
  },
  features: {
    pt: [
      'BookReader com 30 capítulos, vista de leitura e ChapterNav.',
      'Ficheiros de curso fora de /public, servidos por /api/curso/[curso]/[modulo] após verificação de compra.',
      'Página do método RDF com diagrama SVG animado.',
      'SEO nativo do Next.js: metadata por idioma, JSON-LD, sitemap e robots.',
      'Loja com Printful (print on demand) e Stripe; captura de email com Brevo.',
    ],
    en: [
      'BookReader with 30 chapters, reading view and ChapterNav.',
      'Course files outside /public, served via /api/curso/[curso]/[modulo] after purchase verification.',
      'RDF method page with an animated SVG diagram.',
      'Native Next.js SEO: per-locale metadata, JSON-LD, sitemap and robots.',
      'Shop with Printful (print on demand) and Stripe; email capture with Brevo.',
    ],
  },
  decisions: [
    {
      title: {
        pt: 'Conteúdo privado fora do bundle',
        en: 'Private content outside the bundle',
      },
      body: {
        pt: 'Os módulos vivem numa pasta private/ lida apenas pelo servidor. O URL nunca aponta para o ficheiro; aponta para uma rota que verifica a sessão e a compra antes de responder.',
        en: 'Modules live in a private/ folder read only by the server. The URL never points at the file; it points at a route that checks session and purchase before responding.',
      },
    },
  ],
  result: {
    pt: ['Plataforma em produção, bilingue, com vendas reais via Stripe.'],
    en: ['Platform in production, bilingual, with real sales through Stripe.'],
  },
  learned: {
    pt: [
      'Servir ficheiros privados por rota autenticada foi simples e robusto; a parte cara foi manter as duas cópias editoriais sincronizadas — numa próxima versão o conteúdo viveria num CMS com fluxo de tradução.',
    ],
    en: [
      'Serving private files through an authenticated route was simple and robust; the expensive part was keeping the two editorial copies in sync — next time the content would live in a CMS with a translation workflow.',
    ],
  },
  stack: [
    'Next.js 15',
    'TypeScript',
    'MongoDB',
    'NextAuth',
    'Stripe',
    'next-intl',
    'Cloudinary',
    'Resend',
    'Vercel',
  ],
  figures: [],
};
