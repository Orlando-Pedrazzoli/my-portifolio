// src/content/home.ts
import type { Bilingual } from './types';

/* --------------------------------------------------------------------------
   HERO — posicionamento: developer que percebe o negócio por trás do software.
   Sem lista de tecnologias aqui; isso vive mais abaixo.
   -------------------------------------------------------------------------- */
export const hero = {
  role: {
    pt: 'Full Stack Developer',
    en: 'Full Stack Developer',
  } satisfies Bilingual,
  /* Opção B da revisão: liga experiência empresarial e engenharia sem explicar. */
  statement: {
    pt: 'Construo software a partir de como os negócios funcionam de verdade.',
    en: 'I build software around how businesses actually work.',
  } satisfies Bilingual,
  /* Desktop explica. */
  lead: {
    pt: 'Full stack developer em Lisboa. Combino engenharia de software com mais de quinze anos a fundar e gerir empresas — e uso isso para levar websites, e-commerce, SaaS e sistemas de gestão da ideia até produção.',
    en: 'Full stack developer based in Lisbon. I combine software engineering with 15+ years of building and operating businesses, and use that to take websites, e-commerce platforms, SaaS products and business systems from idea to production.',
  } satisfies Bilingual,
  /* Mobile prioriza (progressive disclosure): ~25% mais curto. */
  leadShort: {
    pt: 'Full stack developer em Lisboa. Construo websites, e-commerce, SaaS e sistemas de gestão — da ideia até produção.',
    en: 'Full stack developer based in Lisbon. I build websites, e-commerce, SaaS and business systems — from idea to production.',
  } satisfies Bilingual,
  /* CTAs com funções distintas: header "Let's talk", hero "Start a project",
     fim "Start a conversation". */
  cta: {
    work: { pt: 'Ver trabalho selecionado', en: 'View selected work' },
    project: { pt: 'Começar um projeto', en: 'Start a project' },
  },
  availability: {
    pt: 'Lisboa, Portugal · Disponível para freelance e oportunidades remotas',
    en: 'Lisbon, Portugal · Available for freelance & remote opportunities',
  } satisfies Bilingual,
  /* Índice de capacidades — coluna direita do hero em desktop. Estático,
     em mono; aponta para "O que construo". Nomes iguais aos de `capabilities`. */
  index: [
    {
      n: '01',
      title: { pt: 'Desenvolvimento de produto', en: 'Product development' },
      items: {
        pt: ['SaaS', 'Sistemas de gestão', 'Plataformas de operações'],
        en: ['SaaS', 'Business systems', 'Operations platforms'],
      },
    },
    {
      n: '02',
      title: { pt: 'Aplicações full stack', en: 'Full stack applications' },
      items: {
        pt: ['E-commerce', 'APIs e integrações', 'Pagamentos'],
        en: ['E-commerce', 'APIs & integrations', 'Payments'],
      },
    },
    {
      n: '03',
      title: { pt: 'Automação de negócio', en: 'Business automation' },
      items: {
        pt: [
          'Faturação certificada',
          'Importações de dados',
          'Crons e webhooks',
        ],
        en: ['Certified invoicing', 'Data imports', 'Crons & webhooks'],
      },
    },
  ] satisfies { n: string; title: Bilingual; items: Bilingual<string[]> }[],
  /* Números normalizados — os mesmos em todo o site. */
  facts: [
    {
      value: '10+',
      label: { pt: 'projetos em produção', en: 'production projects' },
    },
    {
      value: '15+',
      label: {
        pt: 'anos a construir negócios',
        en: 'years building businesses',
      },
    },
    {
      value: '20+',
      label: {
        pt: 'anos de experiência profissional',
        en: 'years professional experience',
      },
    },
    {
      value: 'PT / BR',
      label: {
        pt: 'mercados em que trabalho',
        en: 'markets worked across',
      },
    },
  ],
};

/* --------------------------------------------------------------------------
   DOIS CAMINHOS — recrutadores e clientes, sem dois websites.
   -------------------------------------------------------------------------- */
export interface Path {
  question: Bilingual;
  body: Bilingual;
  cta: Bilingual;
  href: string;
  external?: boolean;
}

export const paths: Path[] = [
  {
    question: { pt: 'A recrutar?', en: 'Hiring?' },
    body: {
      pt: 'Vê a minha experiência, competências técnicas e CV.',
      en: 'See my experience, technical skills and CV.',
    },
    cta: { pt: 'Ver percurso e CV', en: 'View resume' },
    href: '/about',
  },
  {
    question: { pt: 'A construir algo?', en: 'Building something?' },
    body: {
      pt: 'Vê como abordo problemas de negócio e software em produção.',
      en: 'See how I approach business problems and production software.',
    },
    cta: { pt: 'Ver trabalho', en: 'View work' },
    href: '/#work',
  },
];

/* --------------------------------------------------------------------------
   O QUE CONSTRUO — três capacidades, cada uma com prova num case.
   -------------------------------------------------------------------------- */
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
      pt: 'Do problema de negócio ao produto pronto para produção: levantamento de requisitos com stakeholders, modelação do domínio, faseamento, entrega e iteração com feedback real.',
      en: 'From business problem to production-ready product: requirements with stakeholders, domain modelling, phasing, delivery and iteration on real feedback.',
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
    title: { pt: 'Aplicações full stack', en: 'Full stack applications' },
    body: {
      pt: 'Frontend, APIs, bases de dados, autenticação, pagamentos, emails transacionais e integrações de logística e faturação. Tudo em TypeScript, do modelo de dados ao componente.',
      en: 'Frontend, APIs, databases, authentication, payments, transactional email and logistics and invoicing integrations. All in TypeScript, from the data model to the component.',
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
    title: { pt: 'Automação de negócio', en: 'Business automation' },
    body: {
      pt: 'Automatizar fluxos repetitivos e processos operacionais: importações idempotentes de dados legados, lembretes e despesas recorrentes por cron, faturação certificada comunicada à AT sem intervenção manual. IA onde faz sentido, não como decoração.',
      en: 'Automating repetitive workflows and operational processes: idempotent imports of legacy data, reminders and recurring expenses via cron, certified invoicing reported to the tax authority with no manual step. AI where it makes sense, not as decoration.',
    },
    proof: {
      label: {
        pt: 'Chi Sublime: faturação certificada via Moloni, crons de caixa',
        en: 'Chi Sublime: certified invoicing via Moloni, cash crons',
      },
      slug: 'chi-sublime',
    },
  },
];

/* --------------------------------------------------------------------------
   PRINCÍPIOS DE ENGENHARIA — quatro, com nome de conceito e frase concreta.
   -------------------------------------------------------------------------- */
export interface Principle {
  n: string;
  title: Bilingual;
  /** Uma frase memorável, sempre visível. O `body` abre por disclosure. */
  lead: Bilingual;
  body: Bilingual;
}

export const principles: Principle[] = [
  {
    n: '01',
    title: { pt: 'Integridade dos dados', en: 'Data integrity' },
    lead: {
      pt: 'Valores financeiros em cêntimos inteiros, nunca floats.',
      en: 'Financial values are stored in integer cents, never floats.',
    },
    body: {
      pt: 'Valores financeiros em cêntimos inteiros, nunca floats. Cada ato, fatura ou linha de pedido congela preço e comissão no momento do registo. Nada é apagado: registos anulam-se com autor e motivo, stock corrige-se com movimentos, faturas anulam-se por nota de crédito.',
      en: 'Financial values are stored in integer cents, never floats. Every act, invoice or order line freezes price and commission at the moment it is recorded. Nothing is deleted: records are voided with author and reason, stock is corrected with movements, invoices are voided by credit note.',
    },
  },
  {
    n: '02',
    title: { pt: 'Autoridade do servidor', en: 'Server authority' },
    lead: {
      pt: 'O cliente é uma sugestão. O servidor decide.',
      en: 'The client is a suggestion. The server decides.',
    },
    body: {
      pt: 'Preços revalidados no checkout, cupões validados server-side, permissões verificadas em cada action. O cliente é uma sugestão; o servidor decide.',
      en: 'Prices are revalidated at checkout, coupons are validated server-side, permissions are checked on every action. The client is a suggestion; the server decides.',
    },
  },
  {
    n: '03',
    title: { pt: 'Resiliência operacional', en: 'Operational resilience' },
    lead: {
      pt: 'Dupla marcação, dupla cobrança e stock negativo são impedidos por transação, não na interface.',
      en: 'Double booking, double charging and negative stock are prevented by transactions, not in the UI.',
    },
    body: {
      pt: 'Dupla marcação, dupla cobrança e stock negativo são impedidos por transação na base de dados, não na interface. Se o estado diverge do esperado, a operação aborta e nada fica a meio.',
      en: 'Double booking, double charging and negative stock are prevented by database transactions, not in the UI. If state diverges from what was expected, the operation aborts and nothing is left half done.',
    },
  },
  {
    n: '04',
    title: { pt: 'Manutenibilidade', en: 'Maintainability' },
    lead: {
      pt: 'Convenções chatas poupam semanas.',
      en: 'Boring conventions save weeks.',
    },
    body: {
      pt: 'TypeScript estrito, `tsc` sem erros antes de cada entrega, convenções previsíveis e fronteira clara entre cliente e servidor. Convenções chatas poupam semanas.',
      en: 'Strict TypeScript, error-free `tsc` before every delivery, predictable conventions and a clear separation between client and server. Boring conventions save weeks.',
    },
  },
];

/* --------------------------------------------------------------------------
   PERCURSO — versão curta (home) e versão longa (/about).
   -------------------------------------------------------------------------- */
export const background = {
  statement: {
    pt: 'Aprendi negócio antes de aprender software.',
    en: 'I learned business before I learned software.',
  } satisfies Bilingual,
  path: {
    pt: 'Negócio → Fundador → Operações → Software',
    en: 'Business → Founder → Operations → Software',
  } satisfies Bilingual,
  lead: {
    pt: 'Quinze anos a fabricar produto, negociar com fornecedores, contratar e vender antes da primeira linha de código profissional. É por isso que vejo a operação por trás de cada pedido de software.',
    en: 'Fifteen years manufacturing product, negotiating with suppliers, hiring and selling before my first professional line of code. That is why I see the operation behind every software request.',
  } satisfies Bilingual,
};

export interface TimelineItem {
  year: string;
  label: Bilingual;
}

export const timeline: TimelineItem[] = [
  {
    year: '2002',
    label: {
      pt: 'Fundei a primeira empresa (ISC, acessórios de surf)',
      en: 'Founded first company (ISC, surf accessories)',
    },
  },
  {
    year: '2010',
    label: {
      pt: 'Fundei a Elite Surfing — 16 funcionários, distribuição nacional',
      en: 'Founded Elite Surfing — 16 employees, national distribution',
    },
  },
  {
    year: '2017',
    label: {
      pt: 'Mudança para Portugal; fundei a Go Portugal Tours',
      en: 'Moved to Portugal; founded Go Portugal Tours',
    },
  },
  {
    year: '2023',
    label: {
      pt: 'Transição para desenvolvimento de software',
      en: 'Transitioned to software development',
    },
  },
  {
    year: '2024',
    label: {
      pt: 'Full Stack Developer · Pedrazzoli Digital + Accenture',
      en: 'Full Stack Developer · Pedrazzoli Digital + Accenture',
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

/* --------------------------------------------------------------------------
   STACK — versão curta (home) e completa (/about).
   -------------------------------------------------------------------------- */
export interface StackGroup {
  title: Bilingual;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    title: { pt: 'Core', en: 'Core' },
    items: ['TypeScript', 'React', 'Next.js', 'Node.js'],
  },
  {
    title: { pt: 'Dados', en: 'Data' },
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma'],
  },
  {
    title: { pt: 'Produto', en: 'Product' },
    items: ['Stripe', 'Mercado Pago', 'Autenticação', 'APIs', 'Webhooks'],
  },
  {
    title: { pt: 'Interface', en: 'Interface' },
    items: ['Tailwind CSS', 'Radix UI', 'Framer Motion'],
  },
  {
    title: { pt: 'Infraestrutura', en: 'Infrastructure' },
    items: ['Vercel', 'GitHub', 'CI/CD'],
  },
];

export const fullStack: StackGroup[] = [
  {
    title: { pt: 'Aplicação', en: 'Application' },
    items: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Server Actions',
      'Vite',
    ],
  },
  {
    title: { pt: 'Dados', en: 'Data' },
    items: [
      'MongoDB Atlas',
      'Mongoose',
      'Transações',
      'PostgreSQL',
      'Prisma / Drizzle',
      'Zod',
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
      'React Email',
      'Cloudinary',
      'Printful',
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
      'TanStack Query',
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
      'Google Search Console',
    ],
  },
];
