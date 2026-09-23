// src/content/work/surfers-paradise.ts
import type { WorkCase } from '../types';

export const surfersParadise: WorkCase = {
  slug: 'surfers-paradise',
  title: 'Surfers Paradise',
  tagline: {
    pt: 'E-commerce completo para uma loja de surf com 20 anos de mercado no Brasil: catálogo, checkout com PIX, boleto e cartão, logística e painel de gestão.',
    en: 'Complete e-commerce for a surf shop with 20 years in the Brazilian market: catalog, checkout with PIX, boleto and card, logistics and admin panel.',
  },
  client: { pt: 'Surfers Paradise, Brasil', en: 'Surfers Paradise, Brazil' },
  year: '2026',
  status: { pt: 'Em produção.', en: 'In production.' },
  liveUrl: 'https://www.surfersparadise.com.br/',
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/surfers-paradise',
  selected: true,
  cover: {
    src: '/work/surfers-paradise/home.webp',
    caption: {
      pt: 'Homepage — banners geridos no painel, marcas em destaque, produtos com preço PIX e parcelas.',
      en: 'Homepage — admin-managed banners, featured brands, products with PIX price and installments.',
    },
    alt: {
      pt: 'Homepage da Surfers Paradise',
      en: 'Surfers Paradise homepage',
    },
  },
  context: {
    pt: [
      'Uma loja física de surf com duas décadas de história queria vender online com a mesma profundidade de catálogo das grandes lojas brasileiras do setor: pranchas, wetsuits, quilhas, acessórios, dezenas de marcas.',
      'Já tinha construído o e-commerce da Elite Surfing em React/Vite + Express. Este projeto foi a oportunidade de migrar essa arquitetura para um monorepo Next.js e resolver de raiz o que tinha aprendido.',
    ],
    en: [
      'A physical surf shop with two decades of history wanted to sell online with the same catalog depth as the big Brazilian stores in the sector: boards, wetsuits, fins, accessories, dozens of brands.',
      'I had already built the Elite Surfing e-commerce in React/Vite + Express. This project was the chance to migrate that architecture to a Next.js monorepo and fix at the root what I had learned.',
    ],
  },
  problem: {
    pt: [
      'Produtos de surf não são "um produto com variantes": uma prancha 5\'10 e a mesma prancha 6\'3 têm preço, stock, SKU e fotos diferentes. O modelo de dados tinha de refletir isso sem transformar o catálogo num pesadelo de gestão.',
      'O mercado brasileiro exige PIX, boleto e cartão parcelado, cálculo de frete por CEP com várias transportadoras, nota fiscal, e proteção contra fraude — tudo com o cliente a sair se o checkout demorar.',
    ],
    en: [
      'Surf products are not "one product with variants": a 5\'10 board and the same board in 6\'3 have different price, stock, SKU and photos. The data model had to reflect that without turning the catalog into a management nightmare.',
      'The Brazilian market requires PIX, boleto and installment cards, shipping by postal code across several carriers, fiscal invoices, and fraud protection — all while the customer leaves if checkout is slow.',
    ],
  },
  role: {
    pt: 'Único developer: arquitetura, modelo de dados, integrações de pagamento e logística, painel de administração, SEO e catalogação inicial com a cliente.',
    en: 'Sole developer: architecture, data model, payment and logistics integrations, admin panel, SEO and initial cataloging with the client.',
  },
  solution: {
    pt: [
      'Monorepo Next.js 16 com 17 modelos Mongoose e cerca de 60 rotas de API. Sistema de "família de produtos": cada tamanho ou cor é um produto independente agrupado por família, com uma variante principal nas listagens e botões de troca na página do produto.',
      'Checkout com revalidação de preços e stock no servidor, cupões validados server-side, pagamentos via Mercado Pago (Card Payment Brick, PIX com QR dinâmico, boleto) com webhook assinado, e cron para cancelar pedidos expirados.',
    ],
    en: [
      'Next.js 16 monorepo with 17 Mongoose models and around 60 API routes. "Product family" system: each size or colour is an independent product grouped by family, with a main variant in listings and switch buttons on the product page.',
      'Checkout with server-side price and stock revalidation, server-validated coupons, payments via Mercado Pago (Card Payment Brick, dynamic-QR PIX, boleto) with signed webhook, and a cron to cancel expired orders.',
    ],
  },
  features: {
    pt: [
      'Painel de administração: categorias hierárquicas (3 níveis), marcas, produtos com imagens múltiplas e SEO, banners por posição, cupões, fornecedores, pedidos.',
      'Melhor Envio com todos os 9 scopes: cotação por CEP, carteira, geração e impressão de etiquetas.',
      'Importação de NF-e de fornecedores (XML) para entrada de stock, item a item.',
      'Ponto de venda (POS) para vendas na loja física, fecho de caixa e romaneios.',
      'Anti-fraude: bloqueio silencioso, validação de CPF, deteção de texto aleatório, emails descartáveis, verificação de velocidade.',
      'Login com Google e email/password (OTP), recuperação de password, retoma de pagamentos PIX/boleto pendentes.',
      'Blog, newsletter LGPD com cupões, wishlist, reviews, SEO com sitemap gerado a partir do MongoDB.',
    ],
    en: [
      'Admin panel: hierarchical categories (3 levels), brands, products with multiple images and SEO, banners by position, coupons, suppliers, orders.',
      'Melhor Envio with all 9 scopes: quotes by postal code, wallet, label generation and printing.',
      'Supplier NF-e (XML) import for stock intake, item by item.',
      'Point of sale (POS) for in-store sales, cash closing and packing lists.',
      'Anti-fraud: silent block, CPF validation, gibberish detection, disposable emails, velocity checks.',
      'Google and email/password login (OTP), password recovery, resume of pending PIX/boleto payments.',
      'Blog, LGPD-compliant newsletter with coupons, wishlist, reviews, SEO with a sitemap generated from MongoDB.',
    ],
  },
  decisions: [
    {
      title: {
        pt: 'Variantes como produtos independentes',
        en: 'Variants as independent products',
      },
      body: {
        pt: 'Em vez de opções dentro de um produto, cada tamanho/cor é um documento próprio com productFamily, variantType e isMainVariant. Custa mais no cadastro, mas o stock, o SKU e as fotos ficam certos — que é o que interessa a quem embala.',
        en: 'Instead of options inside a product, each size/colour is its own document with productFamily, variantType and isMainVariant. It costs more at data entry, but stock, SKU and photos stay correct — which is what matters to the person packing.',
      },
    },
    {
      title: {
        pt: 'Mercado Pago em vez de Pagar.me',
        en: 'Mercado Pago instead of Pagar.me',
      },
      body: {
        pt: 'O checkout foi construído em Pagar.me V5 e migrado para Mercado Pago quando as condições comerciais e a estabilidade do PIX justificaram. A abstração de pagamentos permitiu trocar sem tocar no resto do checkout.',
        en: 'Checkout was built on Pagar.me V5 and migrated to Mercado Pago when commercial terms and PIX stability justified it. The payments abstraction allowed the swap without touching the rest of checkout.',
      },
    },
  ],
  result: {
    pt: [
      'Loja em produção com catálogo, pagamentos, frete e nota fiscal a funcionar de ponta a ponta, e um painel que a equipa da loja opera sem apoio técnico.',
      'A arquitetura tornou-se a base de dois projetos seguintes para outras marcas do setor.',
    ],
    en: [
      'Store in production with catalog, payments, shipping and fiscal invoices working end to end, and a panel the shop team operates without technical support.',
      'The architecture became the base for two subsequent projects for other brands in the sector.',
    ],
  },
  stack: [
    'Next.js 16',
    'TypeScript',
    'MongoDB',
    'Mongoose',
    'NextAuth v5',
    'Mercado Pago',
    'Melhor Envio',
    'Resend',
    'Cloudinary',
    'Zod',
    'Vercel',
  ],
  figures: [
    {
      src: '/work/surfers-paradise/produto.webp',
      caption: {
        pt: 'Página de produto — troca de variantes da família, preço PIX, parcelas e frete por CEP.',
        en: 'Product page — family variant switching, PIX price, installments and shipping by postal code.',
      },
      alt: { pt: 'Página de produto', en: 'Product page' },
    },
    {
      src: '/work/surfers-paradise/admin-produto.webp',
      caption: {
        pt: 'Painel — formulário de produto com família, variante, imagens e SEO.',
        en: 'Admin — product form with family, variant, images and SEO.',
      },
      alt: { pt: 'Painel de administração', en: 'Admin panel' },
    },
  ],
};
