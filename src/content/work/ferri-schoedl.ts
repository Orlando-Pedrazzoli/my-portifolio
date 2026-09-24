// src/content/work/ferri-schoedl.ts
import type { WorkCase } from '../types';

export const ferriSchoedl: WorkCase = {
  slug: 'ferri-schoedl',
  title: 'Ferri Schoedl Advocacia',
  headline: {
    pt: 'Um escritório de advocacia que é também editora e escola.',
    en: 'A law firm that is also a publisher and a school.',
  },
  category: {
    pt: 'Site institucional com loja e cursos',
    en: 'Institutional site with shop and courses',
  },
  tags: {
    pt: ['E-commerce', 'Conteúdo pago', 'Stripe'],
    en: ['E-commerce', 'Paid content', 'Stripe'],
  },
  tagline: {
    pt: 'Site institucional de um escritório de advocacia em São Paulo com loja de livros jurídicos, cursos preparatórios e publicações — pagamentos Stripe e leitura protegida.',
    en: 'Institutional site for a São Paulo law firm with a legal bookstore, preparatory courses and publications — Stripe payments and protected reading.',
  },
  client: {
    pt: 'Ferri Schoedl Advocacia, São Paulo',
    en: 'Ferri Schoedl Advocacia, São Paulo',
  },
  year: '2026',
  status: {
    pt: 'Em produção; cálculo de frete real em implementação.',
    en: 'In production; real shipping calculation in progress.',
  },
  liveUrl: 'https://ferrischoedl.adv.br/',
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/ferri-schoedl',
  selected: false,
  cover: {
    src: '/work/ferri-schoedl/home.webp',
    caption: {
      pt: 'Homepage — áreas de atuação, publicações e loja.',
      en: 'Homepage — practice areas, publications and shop.',
    },
    alt: { pt: 'Homepage Ferri Schoedl', en: 'Ferri Schoedl homepage' },
  },
  metrics: [],
  context: {
    pt: [
      'Um escritório com seis áreas de atuação e um sócio autor de 10 livros e 23 artigos queria um site que fosse ao mesmo tempo cartão de visita, editora e escola: vender livros em papel e digital e cursos com materiais por aula.',
    ],
    en: [
      'A firm with six practice areas and a partner who has authored 10 books and 23 articles wanted a site that was simultaneously business card, publisher and school: selling print and digital books and courses with per-lesson materials.',
    ],
  },
  problem: {
    pt: [
      'Quem compra um livro jurídico não quer criar conta antes de pagar, mas depois de pagar precisa de uma conta para ler. O fluxo tinha de converter convidado em utilizador sem fricção.',
      'PDF e ePub comprados têm de ficar atrás de autenticação e associados à compra.',
    ],
    en: [
      "Someone buying a legal book doesn't want to create an account before paying, but after paying they need one to read. The flow had to convert guest into user without friction.",
      'Purchased PDFs and ePubs must sit behind authentication and be tied to the purchase.',
    ],
  },
  role: {
    pt: 'Único developer, incluindo DNS, domínio e configuração de email transacional num subdomínio isolado do alojamento antigo do cliente.',
    en: "Sole developer, including DNS, domain and transactional email setup on a subdomain isolated from the client's legacy hosting.",
  },
  constraints: {
    pt: [
      'Comprar sem criar conta; ler depois de comprar com conta. O fluxo tinha de converter sem fricção.',
      'Email transacional num subdomínio isolado do alojamento antigo do cliente.',
    ],
    en: [
      'Buy without an account; read after buying with one. The flow had to convert without friction.',
      "Transactional email on a subdomain isolated from the client's legacy hosting.",
    ],
  },
  solution: {
    pt: [
      'Next.js com checkout Stripe live, modelo Purchase, leitor de livros, rotas protegidas de download, gate de checkout por OTP (verificar email → entrar ou registar), conversão de convidado em utilizador com definição de password pós-compra, e painel de administração para livros, cursos, artigos, conteúdo do site e pedidos.',
    ],
    en: [
      'Next.js with live Stripe checkout, Purchase model, book reader, protected download routes, OTP checkout gate (verify email → sign in or register), guest-to-user conversion with post-purchase password setup, and an admin panel for books, courses, articles, site content and orders.',
    ],
  },
  features: {
    pt: [
      'Seis áreas de atuação com páginas próprias; página de publicações com 10 livros e 23 artigos.',
      'Cursos com materiais PDF por aula.',
      'Tema claro/escuro, conformidade LGPD.',
      'Resend em subdomínio dedicado (send.) com DKIM, sem tocar no email corporativo em cPanel.',
    ],
    en: [
      'Six practice areas with their own pages; publications page with 10 books and 23 articles.',
      'Courses with PDF materials per lesson.',
      'Light/dark theme, LGPD compliance.',
      'Resend on a dedicated subdomain (send.) with DKIM, without touching corporate email on cPanel.',
    ],
  },
  decisions: [
    {
      title: {
        pt: 'OTP antes do pagamento, password depois',
        en: 'OTP before payment, password after',
      },
      body: {
        pt: 'O email é verificado por código antes do checkout. Se já existe conta, entra; se não, a compra cria-a e a password define-se depois. Ninguém abandona o carrinho por causa de um formulário de registo.',
        en: 'Email is verified by code before checkout. If an account exists, sign in; if not, the purchase creates it and the password is set afterwards. Nobody abandons the cart because of a sign-up form.',
      },
    },
  ],
  result: {
    pt: [
      'Site e loja em produção com vendas via Stripe; painel operado pela equipa do escritório.',
    ],
    en: [
      "Site and shop in production with Stripe sales; panel operated by the firm's team.",
    ],
  },
  stack: [
    'Next.js 15',
    'TypeScript',
    'MongoDB',
    'NextAuth',
    'Stripe',
    'Resend',
    'Cloudinary',
    'Tailwind CSS v4',
    'Vercel',
  ],
  figures: [],
};
