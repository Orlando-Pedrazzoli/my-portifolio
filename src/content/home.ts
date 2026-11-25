// src/content/home.ts
import type { Bilingual } from './types';

/* --------------------------------------------------------------------------
   HERO — a afirmação fica estável (é o posicionamento, e o H1).
   A bancada ao lado é a interação: escolher um trabalho levanta as peças
   distintivas desse trabalho. Não é a stack completa — essa está no case.
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
    pt: 'Full stack developer em Lisboa. Combino engenharia de software com mais de quinze anos a criar e gerir empresas. É essa experiência que me permite transformar problemas de negócio em websites, e-commerce, SaaS e sistemas de gestão prontos para produção.',
    en: 'Full stack developer based in Lisbon. I combine software engineering with 15+ years of building and operating businesses, and use that to take websites, e-commerce platforms, SaaS products and business systems from idea to production.',
  } satisfies Bilingual,
  /* Mobile prioriza (progressive disclosure): ~25% mais curto. */
  leadShort: {
    pt: 'Full stack developer em Lisboa. Construo websites, e-commerce, SaaS e sistemas de gestão — da ideia à produção.',
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
   BANCADA — a interação do hero. Cada trabalho levanta só as peças que o
   distinguem (não a stack inteira). "Tudo" não escolhe kit: as peças
   ficam pousadas até alguém tocar. IA levanta o método, não um produto.
   -------------------------------------------------------------------------- */
export type BenchIcon = 'all' | 'product' | 'shop' | 'ops' | 'practice';

export interface BenchPiece {
  id: string;
  name: Bilingual;
  note: Bilingual;
}

export interface BenchJob {
  id: string;
  label: Bilingual;
  icon: BenchIcon;
  /** Ids de `bench.pieces`. Vazio = a olhar, sem kit. */
  pieces: string[];
  /** Três linhas; a última vai no acento. */
  title: Bilingual<[string, string, string]>;
  href: string;
  cta: Bilingual;
  proof: Bilingual;
}

export const bench = {
  defaultJob: 'product',
  picker: {
    pt: 'O que estás a construir?',
    en: 'What are you building?',
  } satisfies Bilingual,
  hint: {
    pt: 'Toca numa peça para a adicionar ou tirar.',
    en: 'Tap a piece to add or remove it.',
  } satisfies Bilingual,
  preview: { pt: 'Pré-visualização', en: 'Preview' } satisfies Bilingual,
  inKit: { pt: 'No kit', en: 'In the kit' } satisfies Bilingual,
  outKit: { pt: 'Fora do kit', en: 'Not in the kit' } satisfies Bilingual,
  pieceOne: { pt: 'peça', en: 'piece' } satisfies Bilingual,
  pieceMany: { pt: 'peças', en: 'pieces' } satisfies Bilingual,
  empty: {
    pt: 'Toca nas peças para montar um kit.',
    en: 'Tap pieces to build a kit.',
  } satisfies Bilingual,
  custom: { pt: 'Personalizado', en: 'Custom' } satisfies Bilingual,
  yours: { pt: 'As tuas peças', en: 'Your picks' } satisfies Bilingual,
  reset: { pt: 'Repor o kit', en: 'Reset the kit' } satisfies Bilingual,
  addAria: { pt: 'Adicionar ao kit', en: 'Add to the kit' } satisfies Bilingual,
  removeAria: {
    pt: 'Tirar do kit',
    en: 'Remove from the kit',
  } satisfies Bilingual,
  pieces: [
    { id: 'next', name: { pt: 'Next.js', en: 'Next.js' }, note: { pt: 'App', en: 'App' } },
    {
      id: 'ts',
      name: { pt: 'TypeScript', en: 'TypeScript' },
      note: { pt: 'Tipos', en: 'Types' },
    },
    {
      id: 'mongo',
      name: { pt: 'MongoDB', en: 'MongoDB' },
      note: { pt: 'Dados', en: 'Data' },
    },
    {
      id: 'auth',
      name: { pt: 'NextAuth', en: 'NextAuth' },
      note: { pt: 'Sessões', en: 'Sessions' },
    },
    {
      id: 'zod',
      name: { pt: 'Zod', en: 'Zod' },
      note: { pt: 'Validação', en: 'Validation' },
    },
    {
      id: 'mp',
      name: { pt: 'Mercado Pago', en: 'Mercado Pago' },
      note: { pt: 'Pagamentos', en: 'Payments' },
    },
    {
      id: 'moloni',
      name: { pt: 'Moloni', en: 'Moloni' },
      note: { pt: 'Faturação', en: 'Invoicing' },
    },
    {
      id: 'cron',
      name: { pt: 'Crons', en: 'Crons' },
      note: { pt: 'Recorrência', en: 'Recurrence' },
    },
    {
      id: 'process',
      name: { pt: 'Processo', en: 'Process' },
      note: { pt: 'Primeiro', en: 'First' },
    },
    {
      id: 'human',
      name: { pt: 'Revisão humana', en: 'Human review' },
      note: { pt: 'No circuito', en: 'In the loop' },
    },
    {
      id: 'limits',
      name: { pt: 'Dados e custo', en: 'Data and cost' },
      note: { pt: 'Com limite', en: 'Capped' },
    },
    {
      id: 'measure',
      name: { pt: 'Medir', en: 'Measure' },
      note: { pt: 'Antes de alargar', en: 'Before widening' },
    },
  ] satisfies BenchPiece[] as BenchPiece[],
  jobs: [
    {
      id: 'all',
      label: { pt: 'Tudo', en: 'All' },
      icon: 'all',
      pieces: [],
      title: {
        pt: ['Escolhe', 'um trabalho.', 'Ou as peças.'],
        en: ['Pick', 'a job.', 'Or the pieces.'],
      },
      href: '/#work',
      cta: { pt: 'Ver trabalho', en: 'See the work' },
      proof: { pt: 'As tuas peças', en: 'Your picks' },
    },
    {
      id: 'product',
      label: { pt: 'Um produto', en: 'A product' },
      icon: 'product',
      pieces: ['next', 'ts', 'mongo', 'auth', 'zod'],
      title: {
        pt: ['Um produto', 'clínico,', 'em produção.'],
        en: ['A clinic', 'product,', 'in production.'],
      },
      href: '/work/cdc-manager',
      cta: { pt: 'Ver este trabalho', en: 'See this work' },
      proof: { pt: 'CDC Manager', en: 'CDC Manager' },
    },
    {
      id: 'shop',
      label: { pt: 'Uma loja', en: 'A shop' },
      icon: 'shop',
      pieces: ['next', 'ts', 'mongo', 'mp'],
      title: {
        pt: ['Uma loja', 'com pagamento', 'a funcionar.'],
        en: ['A shop', 'with payments', 'that work.'],
      },
      href: '/work/surfers-paradise',
      cta: { pt: 'Ver este trabalho', en: 'See this work' },
      proof: { pt: 'Surfers Paradise', en: 'Surfers Paradise' },
    },
    {
      id: 'ops',
      label: { pt: 'Uma operação', en: 'An operation' },
      icon: 'ops',
      pieces: ['next', 'ts', 'moloni', 'cron'],
      title: {
        pt: ['Agenda,', 'caixa e', 'faturação.'],
        en: ['Schedule,', 'the till and', 'invoices.'],
      },
      href: '/work/chi-sublime',
      cta: { pt: 'Ver este trabalho', en: 'See this work' },
      proof: { pt: 'Chi Sublime', en: 'Chi Sublime' },
    },
    {
      id: 'practice',
      label: { pt: 'IA no processo', en: 'AI in the process' },
      icon: 'practice',
      pieces: ['process', 'human', 'limits', 'measure'],
      title: {
        pt: ['IA no', 'processo,', 'não no cartaz.'],
        en: ['AI in the', 'process,', 'not the poster.'],
      },
      href: '/#ai',
      cta: { pt: 'Ver a prática', en: 'See the practice' },
      proof: { pt: 'IA aplicada', en: 'Applied AI' },
    },
  ] satisfies BenchJob[] as BenchJob[],
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
      pt: 'Vê a minha experiência, competências, certificações e CV.',
      en: 'See my experience, skills, certifications and CV.',
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
      pt: 'Do problema de negócio ao produto pronto para produção: levantamento de requisitos com as pessoas responsáveis pelo negócio, modelação do domínio, faseamento, entrega e iteração com feedback real.',
      en: 'From business problem to production-ready product: requirements with stakeholders, domain modelling, phasing, delivery and iteration on real feedback.',
    },
    proof: {
      label: {
        pt: 'CDC Manager: 37 requisitos do cliente, 7 fases',
        en: 'CDC Manager: 37 stakeholder requirements, 7 phases',
      },
      slug: 'cdc-manager',
    },
  },
  {
    n: '02',
    title: { pt: 'Aplicações full stack', en: 'Full stack applications' },
    body: {
      pt: 'Interfaces, APIs, bases de dados, autenticação, pagamentos, emails transacionais e integrações com sistemas de logística e faturação. Tudo em TypeScript, do modelo de dados ao componente.',
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
    title: { pt: 'Automação de processos', en: 'Business automation' },
    body: {
      pt: 'Automatizar fluxos repetitivos e processos operacionais: importações idempotentes de dados legados, lembretes e despesas recorrentes por cron, faturação certificada comunicada à AT sem intervenção manual. IA onde faz sentido — com prática diária, revisão humana e um critério de qualidade, não como decoração.',
      en: 'Automating repetitive workflows and operational processes: idempotent imports of legacy data, reminders and recurring expenses via cron, certified invoicing reported to the tax authority with no manual step. AI where it makes sense — daily practice, a human in the loop and a quality bar, not as decoration.',
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
      pt: 'Marcações duplicadas, cobranças duplicadas e stock negativo são impedidos ao nível da base de dados, não da interface.',
      en: 'Double booking, double charging and negative stock are prevented by transactions, not in the UI.',
    },
    body: {
      pt: 'O sistema impede marcações duplicadas, cobranças duplicadas e stock negativo na base de dados — não apenas na interface. Se o estado diverge do esperado, a operação aborta e nada fica a meio.',
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
    pt: 'Passei quinze anos a fabricar produtos, negociar com fornecedores, contratar e vender antes de escrever a minha primeira linha de código profissional. É por isso que vejo a operação por trás de cada pedido de software.',
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
      pt: 'Content Operations Analyst. Microsoft 365 no trabalho diário e formação Accenture em presença executiva, inteligência emocional e coaching. Em paralelo, continuo a construir produtos para clientes em Portugal e no Brasil através da Pedrazzoli Digital.',
      en: 'Content Operations Analyst. Microsoft 365 in daily work, and Accenture training in executive presence, emotional intelligence and coaching. In parallel, I keep building products for clients in Portugal and Brazil through Pedrazzoli Digital.',
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

/* Home: uma linha só. O site já provou que sei programar; a lista completa
   vive em /about#stack. */
export const stackShort = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Stripe',
  'Mercado Pago',
  'Vercel',
];

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
  {
    title: { pt: 'Inteligência artificial', en: 'Artificial intelligence' },
    items: [
      'IA aplicada a processos',
      'LLMs em fluxos de trabalho',
      'Revisão humana',
      'Avaliação de qualidade',
      'Privacidade e limite de custo',
      'Automação reversível',
    ],
  },
];

/* --------------------------------------------------------------------------
   IA APLICADA — prática diária. Sem case inventado: o método é a prova.
   -------------------------------------------------------------------------- */
export interface Practice {
  n: string;
  title: Bilingual;
  body: Bilingual;
}

export const aiPractice = {
  statement: {
    pt: 'IA no processo, não no cartaz.',
    en: 'AI in the process, not on the poster.',
  } satisfies Bilingual,
  lead: {
    pt: 'Estudo e implemento inteligência artificial todos os dias. Posso introduzir o uso de IA em qualquer empresa — operações, conteúdo, atendimento, documentos ou produto — desde que o trabalho repetitivo saia e o controlo fique.',
    en: 'I study and implement artificial intelligence every day. I can introduce AI into any company — operations, content, support, documents or product — as long as the repetitive work leaves and control stays.',
  } satisfies Bilingual,
  practices: [
    {
      n: '01',
      title: { pt: 'Começar pelo processo', en: 'Start with the process' },
      body: {
        pt: 'Antes do modelo: quem faz a tarefa, quantas vezes, e o que acontece quando alguém se engana. A IA entra numa etapa concreta, não num departamento inteiro de uma vez.',
        en: 'Before the model: who does the task, how often, and what happens when someone gets it wrong. AI enters one concrete step, not a whole department at once.',
      },
    },
    {
      n: '02',
      title: { pt: 'Humano no circuito', en: 'A human in the loop' },
      body: {
        pt: 'Onde a decisão tem consequência — dinheiro, cliente, conteúdo publicado, dados pessoais — uma pessoa revê. A IA prepara. Não assina sozinha.',
        en: 'Where a decision has consequences — money, a client, published content, personal data — a person reviews it. AI prepares. It does not sign alone.',
      },
    },
    {
      n: '03',
      title: { pt: 'Dados, custo e reversão', en: 'Data, cost and reversal' },
      body: {
        pt: 'Nada sensível numa ferramenta pública. Gasto e latência com limite antes de escalar. A primeira versão tem de poder ser desligada sem partir a operação.',
        en: 'Nothing sensitive goes into a public tool. Spend and latency are capped before anything scales. The first version has to be switchable off without breaking the operation.',
      },
    },
    {
      n: '04',
      title: { pt: 'Medir antes de alargar', en: 'Measure before you widen it' },
      body: {
        pt: 'Uma tarefa, um critério de qualidade, uso real. Só depois o mesmo padrão noutro processo. Prática diária — não um piloto que ninguém volta a abrir.',
        en: 'One task, one quality bar, real use. Only then the same pattern on another process. Daily practice — not a pilot nobody opens again.',
      },
    },
  ] satisfies Practice[],
};

/* --------------------------------------------------------------------------
   CERTIFICAÇÕES — só o que se verifica. Percipio tem número. Udacity tem
   página pública de conclusão de curso (fluência, não nanodegree).
   Liderança à parte: módulos Accenture, sem número.
   -------------------------------------------------------------------------- */
export interface Certificate {
  name: string;
  id: string;
  duration: string;
  /** Página pública de verificação, quando existe. */
  url?: string;
}

export interface CertificateGroup {
  issuer: string;
  title: Bilingual;
  date: Bilingual;
  items: Certificate[];
}

export const certifications: CertificateGroup[] = [
  {
    issuer: 'Udacity',
    title: { pt: 'Fluência em IA', en: 'AI fluency' },
    date: { pt: 'novembro de 2026', en: 'November 2026' },
    items: [
      {
        name: 'Generative AI Fluency',
        id: '4520ac0c-e4f0-11f1-9bd6-136af0fefc0d',
        duration: '7 h',
        url: 'https://www.udacity.com/certificate/e/4520ac0c-e4f0-11f1-9bd6-136af0fefc0d',
      },
      {
        name: 'Agentic AI Fluency',
        id: '47f7bb10-e8be-11f1-9a28-dbe138a36106',
        duration: '6 h',
        url: 'https://www.udacity.com/certificate/e/47f7bb10-e8be-11f1-9a28-dbe138a36106',
      },
    ],
  },
  {
    issuer: 'Percipio',
    title: {
      pt: 'Microsoft Excel 365 (2023)',
      en: 'Microsoft Excel 365 (2023)',
    },
    date: { pt: '29 de outubro de 2026', en: '29 October 2026' },
    items: [
      {
        name: 'Getting started in Excel 365 (2023)',
        id: '2627168',
        duration: '43 min',
      },
      {
        name: 'Formatting cells in Excel 365 (2023)',
        id: '2627227',
        duration: '34 min',
      },
      {
        name: 'Exploring essential functions in Excel 365 (2023)',
        id: '2627233',
        duration: '43 min',
      },
      {
        name: 'Getting started with charts in Excel 365 (2023)',
        id: '2627243',
        duration: '48 min',
      },
    ],
  },
  {
    issuer: 'Percipio',
    title: {
      pt: 'Microsoft Word 365 (2024) e Word para a Web',
      en: 'Microsoft Word 365 (2024) and Word for the Web',
    },
    date: { pt: '19 de novembro de 2026', en: '19 November 2026' },
    items: [
      {
        name: 'Getting started in Word 365 (2024)',
        id: '2627275',
        duration: '43 min',
      },
      {
        name: 'Working with text in Word 365 (2024)',
        id: '2627122',
        duration: '49 min',
      },
      {
        name: 'Managing documents in Word 365 (2024)',
        id: '2627334',
        duration: '51 min',
      },
      {
        name: 'Formatting text and shaping documents in Word for the Web',
        id: '2627391',
        duration: '43 min',
      },
    ],
  },
  {
    issuer: 'Percipio',
    title: { pt: 'Microsoft Outlook 365', en: 'Microsoft Outlook 365' },
    date: { pt: '19 de novembro de 2026', en: '19 November 2026' },
    items: [
      {
        name: 'Getting started in Outlook 365',
        id: '2627427',
        duration: '33 min',
      },
      {
        name: 'Getting Started with Outlook Mail Web',
        id: '2629168',
        duration: '30 min',
      },
      {
        name: 'Managing the calendar in Outlook 365',
        id: '2629321',
        duration: '48 min',
      },
    ],
  },
];

export const leadership = {
  issuer: 'Accenture',
  program: 'Leadership Foundations',
  note: {
    pt: 'Formação interna. Uso isto no trabalho com clientes, pares e conteúdo — não é um certificado Percipio, por isso não tem número.',
    en: 'Internal training. I use this with clients, peers and content work — it is not a Percipio certificate, so it has no number.',
  } satisfies Bilingual,
  items: [
    {
      title: { pt: 'Presença executiva', en: 'Executive presence' },
      body: {
        pt: 'Confiança, clareza e credibilidade. A forma de aparecer muda com a audiência — liderança, pares, clientes, equipas transversais — sem perder consistência.',
        en: 'Confidence, clarity and credibility. How you show up changes with the audience — leadership, peers, clients, cross-functional teams — without losing consistency.',
      },
    },
    {
      title: { pt: 'Inteligência emocional', en: 'Emotional intelligence' },
      body: {
        pt: 'Autoconsciência, autogestão, consciência social e gestão de relações. Serve para feedback, conflito e trabalho sob pressão.',
        en: 'Self-awareness, self-management, social awareness and relationship management. It is how feedback, conflict and pressure get handled.',
      },
    },
    {
      title: { pt: 'Coaching', en: 'Coaching' },
      body: {
        pt: 'Modelo DEEP: definir o foco, ampliar a consciência, explorar escolhas e planear a ação. Perguntar antes de dizer.',
        en: 'The DEEP model: determine the focus, enhance awareness, explore choices and plan for action. Ask before you tell.',
      },
    },
  ],
};
