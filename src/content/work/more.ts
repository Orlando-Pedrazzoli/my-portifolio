// src/content/work/more.ts
// Cases secundários: mesmo molde, menos profundidade.
import type { WorkCase } from '../types';

export const centroDentarioColombo: WorkCase = {
  slug: 'centro-dentario-colombo',
  title: 'Centro Dentário Colombo — website',
  headline: {
    pt: 'Presença digital bilingue com portal do paciente — a origem do CDC Manager.',
    en: 'Bilingual digital presence with patient portal — where CDC Manager started.',
  },
  category: {
    pt: 'Website e portal do paciente',
    en: 'Website and patient portal',
  },
  tags: {
    pt: ['Website', 'Portal', 'SEO'],
    en: ['Website', 'Portal', 'SEO'],
  },
  tagline: {
    pt: 'Website institucional bilingue de uma clínica dentária em Lisboa, com portal do paciente e painel de gestão. O projeto que deu origem ao CDC Manager.',
    en: 'Bilingual institutional website for a Lisbon dental clinic, with patient portal and admin panel. The project that led to CDC Manager.',
  },
  client: {
    pt: 'Centro Dentário Colombo, Lisboa',
    en: 'Centro Dentário Colombo, Lisbon',
  },
  year: '2025',
  status: { pt: 'Em produção.', en: 'In production.' },
  liveUrl: 'https://www.centrodentariocolombo.com/',
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/centro-dentario-colombo',
  cover: {
    src: '/work/centro-dentario-colombo/cover.webp',
    caption: { pt: 'Homepage da clínica.', en: 'Clinic homepage.' },
    alt: {
      pt: 'Website do Centro Dentário Colombo',
      en: 'Centro Dentário Colombo website',
    },
  },
  metrics: [],
  context: {
    pt: [
      'Uma clínica num centro comercial com muitos turistas precisava de presença digital em PT/EN, com dez páginas de especialidade com conteúdo clínico validado e atribuição de campanhas via WhatsApp.',
    ],
    en: [
      'A clinic in a shopping centre with many tourists needed a PT/EN digital presence, with ten specialty pages of validated clinical content and campaign attribution via WhatsApp.',
    ],
  },
  problem: {
    pt: [
      'O que começou como landing page tornou-se numa aplicação: a equipa queria gerir prontuários sem conhecimento técnico e os pacientes queriam ver tratamentos, exames e faturas.',
    ],
    en: [
      'What started as a landing page became an application: staff wanted to manage records without technical knowledge and patients wanted to see treatments, exams and invoices.',
    ],
  },
  role: { pt: 'Único developer.', en: 'Sole developer.' },
  solution: {
    pt: [
      'React + Vite + TypeScript no cliente, Express + MongoDB no servidor. Autenticação híbrida: Clerk para pacientes (Google OAuth) e credenciais da clínica para administração. TanStack Query para todo o data fetching.',
    ],
    en: [
      'React + Vite + TypeScript client, Express + MongoDB server. Hybrid auth: Clerk for patients (Google OAuth) and clinic credentials for admin. TanStack Query for all data fetching.',
    ],
  },
  features: {
    pt: [
      'Portal do paciente com tratamentos, exames para download e faturas.',
      'Painel admin com CRUD de pacientes, médicos, tratamentos, exames e faturas; exportação para Excel.',
      'Upload de exames por drag-and-drop para Cloudinary.',
      'SEO com prerender via Puppeteer, JSON-LD (LocalBusiness, MedicalOrganization, FAQPage), imagens responsivas WebP/JPEG.',
      'Cookie consent RGPD granular e páginas legais.',
    ],
    en: [
      'Patient portal with treatments, downloadable exams and invoices.',
      'Admin panel with CRUD for patients, doctors, treatments, exams and invoices; Excel export.',
      'Drag-and-drop exam upload to Cloudinary.',
      'SEO with Puppeteer prerender, JSON-LD (LocalBusiness, MedicalOrganization, FAQPage), responsive WebP/JPEG images.',
      'Granular GDPR cookie consent and legal pages.',
    ],
  },
  decisions: [],
  result: {
    pt: [
      'Site em produção. Foi a confiança construída aqui que levou a clínica a encomendar o sistema de gestão completo.',
    ],
    en: [
      'Site in production. The trust built here led the clinic to commission the full management system.',
    ],
  },
  stack: [
    'React 19',
    'TypeScript',
    'Vite',
    'TanStack Query',
    'Clerk',
    'Express',
    'MongoDB',
    'Cloudinary',
  ],
  figures: [],
};

export const eliteSurfingBrasil: WorkCase = {
  slug: 'elite-surfing-brasil',
  title: 'Elite Surfing Brasil',
  headline: {
    pt: 'Três canais de venda — consumidor, B2B e dropshipping — sobre um único stock.',
    en: 'Three sales channels — consumer, B2B and dropshipping — on a single stock.',
  },
  category: {
    pt: 'E-commerce multicanal',
    en: 'Multichannel e-commerce',
  },
  tags: {
    pt: ['E-commerce', 'B2B', 'Pagamentos'],
    en: ['E-commerce', 'B2B', 'Payments'],
  },
  tagline: {
    pt: 'E-commerce da marca de acessórios de surf que fundei em 2010, construído do zero: pagamentos, frete, B2B para revendedores, vendas diretas e dropshipping.',
    en: 'E-commerce for the surf accessories brand I founded in 2010, built from scratch: payments, shipping, B2B for resellers, direct sales and dropshipping.',
  },
  client: {
    pt: 'Elite Surfing (marca própria)',
    en: 'Elite Surfing (own brand)',
  },
  year: '2025 – 2026',
  status: { pt: 'Em produção.', en: 'In production.' },
  liveUrl: 'https://www.elitesurfing.com.br/',
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/Elite-Surfing-Brasil',
  cover: {
    src: '/work/elite-surfing-brasil/cover.webp',
    caption: { pt: 'Homepage da loja.', en: 'Store homepage.' },
    alt: { pt: 'Loja Elite Surfing Brasil', en: 'Elite Surfing Brasil store' },
  },
  metrics: [],
  context: {
    pt: [
      'Sou o cliente. Conheço o produto, os revendedores e as transportadoras, e quis uma loja que servisse tanto o consumidor final como a rede B2B.',
    ],
    en: [
      'I am the client. I know the product, the resellers and the carriers, and wanted a store serving both end consumers and the B2B network.',
    ],
  },
  problem: {
    pt: [
      'Revendedores compram com CNPJ e descontos por escalão; consumidores compram com PIX e parcelas; parceiros vendem o catálogo nas suas próprias lojas. Três canais, um stock.',
    ],
    en: [
      'Resellers buy with a company tax number and tiered discounts; consumers buy with PIX and installments; partners sell the catalog in their own stores. Three channels, one stock.',
    ],
  },
  role: {
    pt: 'Único developer e dono do negócio.',
    en: 'Sole developer and business owner.',
  },
  solution: {
    pt: [
      'Monorepo React/Vite + Express/MongoDB. Pagamentos migrados de Pagar.me para Mercado Pago (Card Brick, PIX com QR dinâmico, boleto, webhook HMAC). Melhor Envio com sincronização de tracking por webhook e polling. Área B2B com preenchimento automático por CNPJ (BrasilAPI) e escalões de desconto. Vendas diretas com romaneio e partilha por WhatsApp. Dropshipping com a Rio Surf Shop via plugin WordPress e chaves de API por parceiro.',
    ],
    en: [
      'React/Vite + Express/MongoDB monorepo. Payments migrated from Pagar.me to Mercado Pago (Card Brick, dynamic-QR PIX, boleto, HMAC webhook). Melhor Envio with tracking sync via webhook and polling. B2B area with company-number autofill (BrasilAPI) and discount tiers. Direct sales with packing lists and WhatsApp sharing. Dropshipping with Rio Surf Shop via a WordPress plugin and per-partner API keys.',
    ],
  },
  features: {
    pt: [
      'Carrinho persistente com merge no login, checkout como convidado, cupões geridos no painel.',
      'Reviews verificados ligados a pedidos reais.',
      'Anti-fraude com validação de CPF e blocklist.',
      'Blog WSL com rankings e calendário geridos no painel para tráfego orgânico.',
      'JWT em cookies httpOnly com middleware separado para clientes e administração.',
    ],
    en: [
      'Persistent cart with merge on login, guest checkout, admin-managed coupons.',
      'Verified reviews tied to real orders.',
      'Anti-fraud with CPF validation and blocklist.',
      'WSL blog with admin-managed rankings and calendar for organic traffic.',
      'JWT in httpOnly cookies with separate middleware for customers and admin.',
    ],
  },
  decisions: [],
  result: {
    pt: [
      'Loja em produção a vender para consumidores, revendedores e parceiros de dropshipping. A arquitetura foi migrada para Next.js no projeto Surfers Paradise.',
    ],
    en: [
      'Store in production selling to consumers, resellers and dropshipping partners. The architecture was migrated to Next.js in the Surfers Paradise project.',
    ],
  },
  stack: [
    'React 19',
    'Vite',
    'Express',
    'MongoDB',
    'Mercado Pago',
    'Melhor Envio',
    'Cloudinary',
    'Resend',
    'JWT',
  ],
  figures: [],
};

export const goPortugalTours: WorkCase = {
  slug: 'go-portugal-tours',
  title: 'Go Portugal Tours',
  headline: {
    pt: 'Um site de reservas construído por quem já operou o negócio.',
    en: 'A booking site built by someone who ran the business.',
  },
  category: {
    pt: 'Site de reservas de tours',
    en: 'Tour booking site',
  },
  tags: {
    pt: ['Website', 'Reservas', 'i18n'],
    en: ['Website', 'Booking', 'i18n'],
  },
  tagline: {
    pt: 'Site de reservas para tours privados em Portugal: 24 tours data-driven, preços por número de passageiros, formulários validados, PT/EN.',
    en: 'Booking site for private tours in Portugal: 24 data-driven tours, pricing by passenger count, validated forms, PT/EN.',
  },
  client: { pt: 'Go Portugal Tours', en: 'Go Portugal Tours' },
  year: '2025',
  status: { pt: 'Em produção.', en: 'In production.' },
  liveUrl: 'https://www.goportugaltours.com/',
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/go-portugal-tours',
  cover: {
    src: '/work/go-portugal-tours/cover.webp',
    caption: {
      pt: 'Página de tour com preço por grupo.',
      en: 'Tour page with group pricing.',
    },
    alt: { pt: 'Go Portugal Tours', en: 'Go Portugal Tours' },
  },
  metrics: [],
  context: {
    pt: [
      'Geri uma empresa de tours de 2017 a 2021. Sei o que um cliente pergunta antes de reservar e o que o operador precisa de saber para responder.',
    ],
    en: [
      'I ran a tours company from 2017 to 2021. I know what a client asks before booking and what the operator needs to answer.',
    ],
  },
  problem: {
    pt: [
      'Preço de tour privado depende do grupo (1-2, 3-4, 5-6, 7-8). Cada tour precisa de copy de marketing própria em cada idioma, não uma tradução.',
    ],
    en: [
      'Private tour pricing depends on group size (1-2, 3-4, 5-6, 7-8). Each tour needs its own marketing copy in each language, not a translation.',
    ],
  },
  role: { pt: 'Único developer.', en: 'Sole developer.' },
  solution: {
    pt: [
      'Next.js 14 com rotas dinâmicas geradas a partir de ficheiros de dados por idioma, quatro escalões de preço por tour, React Hook Form + Zod, Radix UI, script de validação de rotas no build.',
    ],
    en: [
      'Next.js 14 with dynamic routes generated from per-language data files, four price tiers per tour, React Hook Form + Zod, Radix UI, build-time route validation script.',
    ],
  },
  features: {
    pt: ['Adicionar um tour é adicionar um objeto; a página nasce sozinha.'],
    en: ['Adding a tour means adding an object; the page appears on its own.'],
  },
  decisions: [],
  result: { pt: ['Site em produção.'], en: ['Site in production.'] },
  stack: [
    'Next.js 14',
    'TypeScript',
    'next-intl',
    'React Hook Form',
    'Zod',
    'Radix UI',
  ],
  figures: [],
};

export const streetPaint: WorkCase = {
  slug: 'street-paint',
  title: 'Street Paint',
  headline: {
    pt: 'Pré-qualificar orçamentos antes do primeiro contacto humano.',
    en: 'Pre-qualifying estimates before the first human contact.',
  },
  category: {
    pt: 'Site com orçamento interativo',
    en: 'Site with interactive estimator',
  },
  tags: {
    pt: ['Website', 'Leads', 'SVG'],
    en: ['Website', 'Leads', 'SVG'],
  },
  tagline: {
    pt: 'Site de uma oficina de chapa e pintura em Sintra com orçamento interativo: o cliente clica nas peças danificadas num diagrama SVG e recebe uma estimativa enviada para o WhatsApp da oficina.',
    en: "Site for an auto body shop in Sintra with an interactive estimate: the customer clicks damaged parts on an SVG diagram and gets an estimate sent to the shop's WhatsApp.",
  },
  client: { pt: 'Street Paint, Sintra', en: 'Street Paint, Sintra' },
  year: '2025',
  status: { pt: 'Em produção.', en: 'In production.' },
  liveUrl: 'https://streetpaint.pt/',
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/street-paint',
  cover: {
    src: '/work/street-paint/cover.webp',
    caption: { pt: 'Estimador interativo.', en: 'Interactive estimator.' },
    alt: { pt: 'Street Paint', en: 'Street Paint' },
  },
  metrics: [],
  context: {
    pt: [
      'A oficina recebia dezenas de chamadas "quanto custa?" sem informação suficiente para responder.',
    ],
    en: [
      'The shop received dozens of "how much?" calls without enough information to answer.',
    ],
  },
  problem: {
    pt: ['Pré-qualificar o pedido antes do contacto humano.'],
    en: ['Pre-qualify the request before human contact.'],
  },
  role: { pt: 'Único developer.', en: 'Sole developer.' },
  solution: {
    pt: [
      'Seis tipos de veículo com hotspots SVG por peça, faixas de preço e total em tempo real; resumo enviado para o WhatsApp com um toque. PT/ES, indicador aberto/fechado, reviews reais do Google.',
    ],
    en: [
      'Six vehicle types with per-part SVG hotspots, price ranges and a real-time total; summary sent to WhatsApp in one tap. PT/ES, open/closed indicator, real Google reviews.',
    ],
  },
  features: {
    pt: ['CSS 100% próprio para respeitar a marca.'],
    en: ['100% custom CSS to respect the brand.'],
  },
  decisions: [],
  result: {
    pt: ['Menos chamadas sem contexto, leads pré-qualificados.'],
    en: ['Fewer context-free calls, pre-qualified leads.'],
  },
  stack: ['React 18', 'Vite', 'SVG', 'Express', 'MongoDB'],
  figures: [],
};
