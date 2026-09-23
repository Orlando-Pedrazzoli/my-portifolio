// src/content/work/chi-sublime.ts
import type { WorkCase } from '../types';

export const chiSublime: WorkCase = {
  slug: 'chi-sublime',
  title: 'Chi Sublime',
  tagline: {
    pt: 'Plataforma de gestão para um salão de cabeleireiro e estética em Cascais: site, reservas online, área de cliente, ponto de venda, caixa e faturação certificada.',
    en: 'Management platform for a hair and beauty salon in Cascais: website, online booking, client area, point of sale, cash register and certified invoicing.',
  },
  client: { pt: 'Chi Sublime, Cascais', en: 'Chi Sublime, Cascais' },
  year: '2026',
  status: {
    pt: 'Em produção, com faturação certificada ativa.',
    en: 'In production, with certified invoicing live.',
  },
  liveUrl: 'https://www.chisublime.pt/',
  repoUrl: 'https://github.com/Orlando-Pedrazzoli/chi-sublime',
  selected: true,
  cover: {
    src: '/work/chi-sublime/reservar.webp',
    caption: {
      pt: 'Reserva online em três passos — serviço, profissional e horário, confirmação.',
      en: 'Three-step online booking — service, professional and time, confirmation.',
    },
    alt: {
      pt: 'Fluxo de reserva do Chi Sublime',
      en: 'Chi Sublime booking flow',
    },
  },
  context: {
    pt: [
      'Um salão em Cascais geria marcações por telefone e WhatsApp, recebia pagamentos sem faturação integrada e não tinha visibilidade sobre a receita por profissional. O dono queria uma única aplicação para tudo.',
    ],
    en: [
      'A salon in Cascais handled bookings by phone and WhatsApp, took payments without integrated invoicing and had no visibility of revenue per professional. The owner wanted a single application for everything.',
    ],
  },
  problem: {
    pt: [
      'Reservas online têm de respeitar horários da equipa, duração dos serviços e impedir dupla marcação — mesmo com dois clientes a reservar o mesmo slot ao mesmo tempo.',
      'Em Portugal, cobrar significa emitir fatura certificada e comunicá-la à Autoridade Tributária. Isso não pode ser "um botão que às vezes falha".',
    ],
    en: [
      'Online bookings have to respect team hours, service duration and prevent double booking — even with two clients booking the same slot at the same time.',
      'In Portugal, charging means issuing a certified invoice and reporting it to the tax authority. That cannot be "a button that sometimes fails".',
    ],
  },
  role: {
    pt: 'Único developer, incluindo a configuração da conta Moloni e a articulação com o contabilista do cliente sobre regime de IVA e séries de documentos.',
    en: "Sole developer, including setting up the Moloni account and coordinating with the client's accountant on VAT regime and document series.",
  },
  solution: {
    pt: [
      'Aplicação Next.js 16 com três áreas: site público com fluxo de reserva em três passos, área de cliente (perfil, reservas, segurança) e painel de administração (clientes, serviços, equipa, agenda, POS, caixa, receitas e despesas, relatórios).',
      'Motor de disponibilidade com índice único anti-dupla-marcação. Faturação através de uma abstração com dois providers — Mock para desenvolvimento e Moloni em produção — com 35 serviços sincronizados como artigos e faturas-recibo emitidas e comunicadas à AT.',
    ],
    en: [
      'Next.js 16 application with three areas: public site with a three-step booking flow, client area (profile, bookings, security) and admin panel (clients, services, team, schedule, POS, cash register, income and expenses, reports).',
      'Availability engine with a unique anti-double-booking index. Invoicing through an abstraction with two providers — Mock for development and Moloni in production — with 35 services synced as articles and invoice-receipts issued and reported to the tax authority.',
    ],
  },
  features: {
    pt: [
      'Reserva online com horários Ter–Sáb, políticas de antecedência e cancelamento com link por email.',
      'POS/checkout com meios de pagamento múltiplos, NIF opcional do cliente e emissão de fatura-recibo no ato.',
      'Fecho de caixa, despesas recorrentes por cron, relatórios financeiro, de IVA, por profissional e por cliente, com PDF.',
      'Emails com React Email + Resend (confirmação, lembretes, recuperação de password).',
      'Soft-delete em tudo o que tem histórico; contrato uniforme ActionResult nas server actions; valores em cêntimos.',
      'i18n PT/EN por cookie, páginas legais RGPD, Search Console.',
    ],
    en: [
      'Online booking with Tue–Sat hours, lead-time policies and cancellation via email link.',
      'POS/checkout with multiple payment methods, optional client tax number and invoice-receipt issued on the spot.',
      'Cash closing, recurring expenses via cron, financial, VAT, per-professional and per-client reports, with PDF.',
      'Emails with React Email + Resend (confirmation, reminders, password recovery).',
      'Soft-delete on everything with history; uniform ActionResult contract on server actions; amounts in cents.',
      'Cookie-based PT/EN i18n, GDPR legal pages, Search Console.',
    ],
  },
  decisions: [
    {
      title: {
        pt: 'Faturação atrás de uma interface',
        en: 'Invoicing behind an interface',
      },
      body: {
        pt: 'O código de negócio fala com um InvoiceProvider. O Mock permite desenvolver e testar sem tocar na AT; o Moloni é ligado por configuração. Dev e produção partilham a mesma empresa Moloni, por isso o sync corre sempre com a base de dados certa.',
        en: 'Business code talks to an InvoiceProvider. Mock allows development and testing without touching the tax authority; Moloni is switched on by configuration. Dev and production share the same Moloni company, so the sync always runs against the right database.',
      },
    },
    {
      title: {
        pt: 'Profissionais sem conta',
        en: 'Professionals without accounts',
      },
      body: {
        pt: 'Só existem dois papéis, cliente e administrador. A equipa são registos geridos pelo dono. Menos superfície de segurança, menos onboarding, e é como o salão funciona na realidade.',
        en: 'Only two roles exist, client and admin. Team members are records managed by the owner. Less security surface, less onboarding, and it is how the salon actually works.',
      },
    },
  ],
  result: {
    pt: [
      'Reservas online, agenda e faturação certificada a funcionar em produção, com faturas-recibo reais comunicadas à AT.',
    ],
    en: [
      'Online booking, schedule and certified invoicing working in production, with real invoice-receipts reported to the tax authority.',
    ],
  },
  stack: [
    'Next.js 16',
    'TypeScript',
    'MongoDB',
    'NextAuth v5',
    'Moloni API',
    'React Email',
    'Resend',
    'React Hook Form',
    'Zod',
    '@react-pdf/renderer',
    'Vercel',
  ],
  figures: [
    {
      src: '/work/chi-sublime/admin-agenda.webp',
      caption: {
        pt: 'Agenda de administração por profissional.',
        en: 'Admin schedule per professional.',
      },
      alt: { pt: 'Agenda de administração', en: 'Admin schedule' },
    },
    {
      src: '/work/chi-sublime/pos.webp',
      caption: {
        pt: 'Checkout ao balcão com emissão de fatura-recibo.',
        en: 'Front-desk checkout with invoice-receipt issuance.',
      },
      alt: { pt: 'Ponto de venda', en: 'Point of sale' },
    },
  ],
};
