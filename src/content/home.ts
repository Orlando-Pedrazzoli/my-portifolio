// src/content/home.ts
import type { Bilingual } from './types';

export const hero = {
  statement: {
    pt: 'Construo software para negócios reais — do problema ao produto em produção.',
    en: 'I build software for real businesses — from the problem to the product in production.',
  } satisfies Bilingual,
  lead: {
    pt: 'Full stack developer em Lisboa. Antes de escrever código passei quinze anos a fundar e gerir empresas, e é isso que trago para cada projeto: transformar processos, dores e ideias de negócio em sistemas que funcionam. E-commerce com pagamentos reais, plataformas de gestão, SaaS, e um sistema de gestão clínica prestes a entrar em produção.',
    en: 'Full stack developer in Lisbon. Before writing code I spent fifteen years founding and running companies, and that is what I bring to every project: turning processes, pain points and business ideas into systems that work. E-commerce with real payments, management platforms, SaaS, and a clinic management system about to go into production.',
  } satisfies Bilingual,
  facts: [
    {
      value: '10+',
      label: {
        pt: 'projetos em produção para clientes',
        en: 'client projects in production',
      },
    },
    {
      value: '20',
      label: {
        pt: 'anos a construir negócios',
        en: 'years building businesses',
      },
    },
    {
      value: 'PT · BR',
      label: {
        pt: 'clientes em Portugal e no Brasil',
        en: 'clients in Portugal and Brazil',
      },
    },
  ],
};

export interface Capability {
  n: string;
  title: Bilingual;
  body: Bilingual;
  proof: { label: Bilingual; slug: string };
}

export const capabilities: Capability[] = [
  {
    n: '01',
    title: { pt: 'Desenvolvimento de produto', en: 'Product development' },
    body: {
      pt: 'Pegar numa necessidade de negócio — muitas vezes mal definida — e levá-la até um produto que pessoas usam todos os dias. Levantamento de requisitos com stakeholders, faseamento, entrega e iteração com feedback real.',
      en: 'Taking a business need — often loosely defined — all the way to a product people use every day. Requirements with stakeholders, phasing, delivery and iteration on real feedback.',
    },
    proof: {
      label: {
        pt: 'CDC Manager: 37 requisitos de stakeholders, 7 fases',
        en: 'CDC Manager: 37 stakeholder requirements, 7 phases',
      },
      slug: 'cdc-manager',
    },
  },
  {
    n: '02',
    title: { pt: 'Engenharia full stack', en: 'Full stack engineering' },
    body: {
      pt: 'Aplicações completas: interface, API, base de dados, autenticação, emails transacionais, uploads, integrações de pagamento e logística. Tudo em TypeScript, do modelo de dados ao componente.',
      en: 'Complete applications: interface, API, database, authentication, transactional email, uploads, payment and logistics integrations. All in TypeScript, from the data model to the component.',
    },
    proof: {
      label: {
        pt: 'Surfers Paradise: checkout com PIX, boleto e cartão',
        en: 'Surfers Paradise: checkout with PIX, boleto and card',
      },
      slug: 'surfers-paradise',
    },
  },
  {
    n: '03',
    title: { pt: 'Arquitetura de software', en: 'Software architecture' },
    body: {
      pt: 'Sistemas que aguentam o crescimento sem se partirem: dados financeiros imutáveis, transações atómicas, RBAC, multi-tenancy, fronteiras claras entre cliente e servidor.',
      en: 'Systems that hold up as they grow: immutable financial data, atomic transactions, RBAC, multi-tenancy, clear client/server boundaries.',
    },
    proof: {
      label: {
        pt: 'CDC Manager: motor financeiro em cêntimos, never-delete',
        en: 'CDC Manager: integer-cents financial engine, never-delete',
      },
      slug: 'cdc-manager',
    },
  },
  {
    n: '04',
    title: { pt: 'Automação e IA', en: 'Automation & AI' },
    body: {
      pt: 'Automatizar o que é repetitivo e crítico: importações idempotentes de catálogos legados com dry-run, despesas recorrentes e lembretes por cron, faturação certificada comunicada à AT sem intervenção manual. IA onde faz sentido, não como decoração.',
      en: 'Automating what is repetitive and critical: idempotent imports of legacy catalogs with dry-run, recurring expenses and reminders via cron, certified invoicing reported to the tax authority with no manual step. AI where it makes sense, not as decoration.',
    },
    proof: {
      label: {
        pt: 'Chi Sublime: faturação certificada via Moloni, crons de caixa',
        en: 'Chi Sublime: certified invoicing via Moloni, cash crons',
      },
      slug: 'chi-sublime',
    },
  },
  {
    n: '05',
    title: {
      pt: 'UX e desenvolvimento de interfaces',
      en: 'UX & interface development',
    },
    body: {
      pt: 'Interfaces desenhadas para quem as usa: uma rececionista com o telefone a tocar, um médico a consultar a agenda no telemóvel, um cliente a marcar às 23h. Mobile-first, acessível, rápido.',
      en: 'Interfaces designed for the people using them: a receptionist with the phone ringing, a doctor checking the schedule on their phone, a customer booking at 11pm. Mobile-first, accessible, fast.',
    },
    proof: {
      label: {
        pt: 'Chi Sublime: reserva online em 3 passos',
        en: 'Chi Sublime: 3-step online booking',
      },
      slug: 'chi-sublime',
    },
  },
];

export interface Principle {
  title: Bilingual;
  body: Bilingual;
}

export const principles: Principle[] = [
  {
    title: {
      pt: 'Dinheiro em cêntimos inteiros.',
      en: 'Money in integer cents.',
    },
    body: {
      pt: 'Nunca floats. Cada ato, fatura ou linha de pedido congela preço e comissão no momento do registo. Alterar a tabela depois nunca altera o passado.',
      en: 'Never floats. Every act, invoice or order line freezes price and commission at the moment it is recorded. Changing the price table later never rewrites the past.',
    },
  },
  {
    title: { pt: 'Nunca apagar.', en: 'Never delete.' },
    body: {
      pt: 'Registos anulam-se com autor e motivo. Stock corrige-se com movimentos. Faturas anulam-se por nota de crédito. O histórico é um ativo.',
      en: 'Records are voided with author and reason. Stock is corrected with movements. Invoices are voided by credit note. History is an asset.',
    },
  },
  {
    title: {
      pt: 'Invariantes por transação.',
      en: 'Invariants by transaction.',
    },
    body: {
      pt: 'Dupla marcação, dupla cobrança e stock negativo são impedidos na base de dados, não na interface. Se o estado divergir do esperado, a operação aborta.',
      en: 'Double booking, double charging and negative stock are prevented at the database, not in the UI. If state diverges from what was expected, the operation aborts.',
    },
  },
  {
    title: {
      pt: 'Regras de negócio no servidor.',
      en: 'Business rules on the server.',
    },
    body: {
      pt: 'Preços revalidados no checkout, cupões validados server-side, permissões verificadas em cada action. O cliente é uma sugestão; o servidor decide.',
      en: 'Prices revalidated at checkout, coupons validated server-side, permissions checked on every action. The client is a suggestion; the server decides.',
    },
  },
  {
    title: { pt: 'Entregar limpo.', en: 'Ship clean.' },
    body: {
      pt: 'TypeScript estrito, `tsc` sem erros antes de cada entrega, caminho do ficheiro na primeira linha de cada ficheiro, Prettier. Convenções chatas poupam semanas.',
      en: 'Strict TypeScript, error-free `tsc` before every delivery, file path on the first line of every file, Prettier. Boring conventions save weeks.',
    },
  },
];

export interface TrajectoryItem {
  period: string;
  title: Bilingual;
  body: Bilingual;
  link?: { label: string; slug: string };
}

export const trajectory: TrajectoryItem[] = [
  {
    period: '2002 – 2017',
    title: {
      pt: 'Empresas de acessórios de surf, Brasil',
      en: 'Surf accessories companies, Brazil',
    },
    body: {
      pt: 'Fundei a ISC aos 21 anos com a licença sul-americana de uma marca australiana, vendi-a em 2006 e fui recrutado para gerir a produção do maior fabricante do setor no Brasil. Em 2010 fundei a Elite Surfing, que cresceu até 16 funcionários e uma rede nacional de distribuidores; sublicenciada em 2014, mantém-se ativa. Foi aqui que aprendi produto, produção, vendas e o que dói numa operação.',
      en: "Founded ISC at 21 with the South American license of an Australian brand, sold it in 2006 and was recruited to run production at Brazil's largest manufacturer in the sector. In 2010 I founded Elite Surfing, which grew to 16 employees and a national distributor network; sublicensed in 2014, it is still active. This is where I learned product, production, sales and what hurts in an operation.",
    },
    link: { label: 'elitesurfing.com.br', slug: 'elite-surfing-brasil' },
  },
  {
    period: '2017 – 2021',
    title: { pt: 'Go Portugal Tours, Lisboa', en: 'Go Portugal Tours, Lisbon' },
    body: {
      pt: 'Mudei-me para Portugal e fundei uma empresa de tours privados e transfers. Reservas, logística, clientes internacionais. Encerrada na pandemia. O site de reservas que existe hoje nasceu dessa experiência.',
      en: 'Moved to Portugal and founded a private tours and transfers company. Bookings, logistics, international clients. Closed during the pandemic. The booking site that exists today came out of that experience.',
    },
    link: { label: 'goportugaltours.com', slug: 'go-portugal-tours' },
  },
  {
    period: '2023 – 2024',
    title: { pt: 'Transição para software', en: 'Transition to software' },
    body: {
      pt: 'Bootcamp full stack na Ironhack (part-time, 400+ horas, MERN). Desde então, mais de dez projetos em produção para clientes em Portugal e no Brasil através da Pedrazzoli Digital.',
      en: 'Full stack bootcamp at Ironhack (part-time, 400+ hours, MERN). Since then, over ten projects in production for clients in Portugal and Brazil through Pedrazzoli Digital.',
    },
  },
  {
    period: '2024 – hoje',
    title: { pt: 'Accenture Portugal', en: 'Accenture Portugal' },
    body: {
      pt: 'Content Operations Analyst. Em paralelo, continuo a construir produtos para clientes em Portugal e no Brasil através da Pedrazzoli Digital.',
      en: 'Content Operations Analyst. In parallel, I keep building products for clients in Portugal and Brazil through Pedrazzoli Digital.',
    },
  },
];

export interface StackGroup {
  title: Bilingual;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    title: { pt: 'Aplicação', en: 'Application' },
    items: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Server Actions',
    ],
  },
  {
    title: { pt: 'Dados', en: 'Data' },
    items: [
      'MongoDB Atlas',
      'Mongoose',
      'Transações',
      'Zod',
      'Prisma / Drizzle',
    ],
  },
  {
    title: { pt: 'Autenticação', en: 'Auth' },
    items: ['NextAuth v5', 'Clerk', 'JWT', 'RBAC', 'OTP por email'],
  },
  {
    title: { pt: 'Integrações', en: 'Integrations' },
    items: [
      'Stripe',
      'Mercado Pago',
      'Melhor Envio',
      'Moloni',
      'Resend',
      'Cloudinary',
    ],
  },
  {
    title: { pt: 'Interface', en: 'Interface' },
    items: [
      'Tailwind CSS v4',
      'Radix UI',
      'Framer Motion',
      'React Hook Form',
      'next-intl',
    ],
  },
  {
    title: { pt: 'Operação', en: 'Operations' },
    items: [
      'Vercel',
      'Cron jobs',
      'Webhooks',
      'GitHub',
      'SEO técnico (JSON-LD, sitemaps)',
    ],
  },
];
