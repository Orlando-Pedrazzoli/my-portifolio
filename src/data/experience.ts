import type { Language } from '@/lib/translations';

export interface BilingualText {
  pt: string;
  en: string;
}

export interface Experience {
  id: number;
  title: BilingualText;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Self-employed';
  startDate: BilingualText;
  endDate: BilingualText;
  description: BilingualText;
  responsibilities: BilingualText[];
  technologies?: string[];
  achievements?: BilingualText[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: {
      pt: 'Full Stack Developer',
      en: 'Full Stack Developer',
    },
    company: 'Pedrazzoli Digital (Freelance)',
    location: 'Lisboa, Portugal',
    type: 'Freelance',
    startDate: { pt: 'Jan 2024', en: 'Jan 2024' },
    endDate: { pt: 'Presente', en: 'Present' },
    description: {
      pt: 'Desenvolvimento de aplicações web full stack para clientes em Portugal e Brasil. Mais de 10 projetos entregues e em produção.',
      en: 'Building full stack web applications for clients in Portugal and Brazil. 10+ projects delivered and in production.',
    },
    responsibilities: [
      {
        pt: 'Desenvolvimento de plataformas e-commerce com integrações Stripe e Pagar.me (PIX, Boleto, cartão de crédito parcelado), incluindo processamento de webhooks para confirmação de pedidos',
        en: 'Developed e-commerce platforms with Stripe and Pagar.me integrations handling PIX, Boleto, and credit card installment payments, including webhook processing for order confirmation',
      },
      {
        pt: 'Design de REST APIs com Express e Next.js API Routes: CRUD de produtos, sincronização de carrinho, fluxos de checkout, cálculo de frete via Melhor Envio, validação de cupons e notificações por email',
        en: 'Designed REST APIs with Express and Next.js API Routes: product CRUD, cart sync, checkout flows, shipping via Melhor Envio, promo code validation, and email notifications',
      },
      {
        pt: 'Construção de plataformas SaaS com faturação de assinaturas Stripe, dashboards de utilizador e controlo de acesso baseado em roles com JWT, Clerk e Better-auth',
        en: 'Built SaaS platforms with Stripe subscription billing, user dashboards, and role-based access control using JWT, Clerk, and Better-auth',
      },
      {
        pt: 'Entrega de sistemas de gestão de restaurantes, plataformas de reservas com preços dinâmicos, websites para escritórios de advocacia, portais de clínicas dentárias, plataformas imobiliárias e ferramentas de gestão B2B',
        en: 'Delivered restaurant management systems, booking platforms with dynamic pricing, law firm websites, dental clinic portals, real estate platforms, and B2B order management tools',
      },
    ],
    technologies: [
      'React 18/19',
      'Next.js 14-16',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'Mongoose',
      'Prisma',
      'Drizzle ORM',
      'Stripe',
      'Pagar.me V5',
      'Clerk',
      'NextAuth',
      'Better-auth',
      'JWT',
      'Tailwind CSS v3/v4',
      'Vite',
      'Framer Motion',
      'GSAP',
      'Three.js',
      'Cloudinary',
      'Nodemailer',
      'MailerLite',
      'Melhor Envio API',
      'Radix UI',
      'shadcn/ui',
      'React Hook Form',
      'Zod',
      'Vercel',
    ],
    achievements: [
      {
        pt: 'Mais de 10 projetos entregues e em produção, incluindo e-commerce, SaaS, sistemas de gestão e websites institucionais',
        en: '10+ projects delivered and in production, including e-commerce, SaaS, management systems, and institutional websites',
      },
    ],
  },
  {
    id: 2,
    title: {
      pt: 'Content Operations Analyst',
      en: 'Content Operations Analyst',
    },
    company: 'Accenture Portugal',
    location: 'Lisboa, Portugal',
    type: 'Full-time',
    startDate: { pt: 'Mai 2024', en: 'May 2024' },
    endDate: { pt: 'Presente', en: 'Present' },
    description: {
      pt: 'Análise de conteúdo e garantia de qualidade para uma plataforma digital de grande escala, avaliando conteúdo segundo mais de 25 políticas de comunidade.',
      en: 'Content analysis and quality assurance for a large-scale digital platform, evaluating content against 25+ community policies.',
    },
    responsibilities: [
      {
        pt: 'Análise de conteúdo e garantia de qualidade segundo mais de 25 políticas de comunidade',
        en: 'Content analysis and quality assurance evaluating content against 25+ community policies',
      },
      {
        pt: 'Identificação de ineficiências nos processos e proposta de melhorias que ajudaram a equipa a exceder consistentemente os targets de performance',
        en: 'Identified workflow inefficiencies and proposed process improvements that helped the team consistently exceed performance targets',
      },
      {
        pt: 'Desenvolvimento de uma ferramenta interna de moderação com IA (CM Policy Hub) usando Next.js, TypeScript e Google Gemini API com motor de decision tree e deteção por keywords em 25 políticas',
        en: 'Built an internal AI-powered moderation tool (CM Policy Hub) with Next.js, TypeScript, and Google Gemini API — decision tree engine with keyword detection across 25 policies',
      },
    ],
    technologies: ['Next.js', 'TypeScript', 'Google Gemini API', 'Zustand'],
    achievements: [
      {
        pt: 'Consistência acima da média da equipa nos indicadores de qualidade',
        en: 'Above-average team consistency in quality indicators',
      },
    ],
  },
  {
    id: 3,
    title: {
      pt: 'Full Stack Development — Transição de Carreira',
      en: 'Full Stack Development — Career Transition',
    },
    company: 'Ironhack (Bootcamp)',
    location: 'Lisboa, Portugal',
    type: 'Part-time',
    startDate: { pt: 'Set 2023', en: 'Sep 2023' },
    endDate: { pt: 'Mar 2024', en: 'Mar 2024' },
    description: {
      pt: 'Bootcamp part-time de desenvolvimento web full stack na Ironhack (400+ horas), com foco no stack MERN.',
      en: 'Part-time full stack web development bootcamp at Ironhack (400+ hours), focused on the MERN stack.',
    },
    responsibilities: [
      {
        pt: 'Conclusão do bootcamp Full Stack Development com foco em MERN Stack',
        en: 'Completed Full Stack Development bootcamp focused on MERN Stack',
      },
      {
        pt: 'Desenvolvimento de projetos reais do zero até produção durante o curso',
        en: 'Development of real projects from scratch to production during the course',
      },
      {
        pt: 'Estudo aprofundado de React, Node.js, Express e MongoDB',
        en: 'In-depth study of React, Node.js, Express and MongoDB',
      },
      {
        pt: 'Aprendizagem de boas práticas: Git workflow, code review, REST APIs, JWT Auth',
        en: 'Learning best practices: Git workflow, code review, REST APIs, JWT Auth',
      },
    ],
    technologies: [
      'JavaScript ES6+',
      'React 18',
      'Node.js',
      'Express',
      'MongoDB',
      'HTML5/CSS3',
      'Tailwind CSS',
      'Git/GitHub',
      'REST APIs',
      'JWT Auth',
    ],
    achievements: [
      {
        pt: 'Graduação no topo da turma no bootcamp',
        en: 'Graduated top of the class at the bootcamp',
      },
    ],
  },
  {
    id: 4,
    title: {
      pt: 'Founder & CEO',
      en: 'Founder & CEO',
    },
    company: 'Elite Surfing',
    location: 'Brasil / Portugal',
    type: 'Self-employed',
    startDate: { pt: 'Mar 2010', en: 'Mar 2010' },
    endDate: { pt: 'Presente', en: 'Present' },
    description: {
      pt: 'Fundei a Elite Surfing em 2010 como fabricante de acessórios de surf no Brasil. Escalei a empresa de zero para R$200k/mês de faturação com 16 funcionários e uma rede nacional de distribuidores.',
      en: 'Founded Elite Surfing in 2010 as a surf accessories manufacturer in Brazil. Scaled the company from zero to R$200k/month revenue with 16 employees and a national distributor network.',
    },
    responsibilities: [
      {
        pt: 'Gestão de todas as operações: desenvolvimento de produto, fabricação, negociação com fornecedores, controlo de qualidade, contratação, estratégia de vendas e finanças',
        en: 'Managed all operations: product development, manufacturing, supplier negotiations, quality control, hiring, sales strategy, and finances',
      },
      {
        pt: 'Negociação de contrato de sublicenciamento com a Wakum Acessórios em 2014, mantendo a propriedade da marca e rendimento de royalties',
        en: 'Negotiated a sublicensing deal with Wakum Acessorios in 2014, retaining brand ownership and royalty income',
      },
      {
        pt: 'Construção da plataforma e-commerce elitesurfing.com.br do zero com React, Node.js, Express, MongoDB e Stripe',
        en: 'Built the e-commerce platform elitesurfing.com.br from scratch with React, Node.js, Express, MongoDB, and Stripe',
      },
    ],
    achievements: [
      {
        pt: 'Empresa escalada de zero para R$200k/mês com 16 funcionários e rede nacional de distribuição',
        en: 'Scaled company from zero to R$200k/month with 16 employees and national distribution network',
      },
      {
        pt: 'Plataforma e-commerce elitesurfing.com.br desenvolvida inteiramente por mim com React, Node.js, MongoDB e Stripe',
        en: 'E-commerce platform elitesurfing.com.br fully developed by me with React, Node.js, MongoDB and Stripe',
      },
    ],
  },
  {
    id: 5,
    title: {
      pt: 'Founder & Owner',
      en: 'Founder & Owner',
    },
    company: 'Go Portugal Tours',
    location: 'Lisboa, Portugal',
    type: 'Self-employed',
    startDate: { pt: 'Ago 2017', en: 'Aug 2017' },
    endDate: { pt: 'Dez 2021', en: 'Dec 2021' },
    description: {
      pt: 'Fundei e operei uma empresa de tours privados e transfers no aeroporto na região de Lisboa com uma frota de 3 veículos.',
      en: 'Founded and operated a private tour and airport transfer company in the Lisbon region with a fleet of 3 vehicles.',
    },
    responsibilities: [
      {
        pt: 'Gestão de reservas, relações com clientes, planeamento de rotas e logística para turistas internacionais',
        en: 'Managed bookings, client relations, route planning, and logistics for international tourists',
      },
      {
        pt: 'Encerramento do negócio durante a pandemia COVID-19 e venda da frota de veículos',
        en: 'Closed the business during the COVID-19 pandemic and sold the vehicle fleet',
      },
    ],
    achievements: [
      {
        pt: 'Experiência que inspirou o website Go Portugal Tours (goportugaltours.com) — plataforma de reservas Next.js com 24 tours e preços dinâmicos',
        en: 'Experience that later inspired the Go Portugal Tours website (goportugaltours.com) — a Next.js booking platform with 24 tours and dynamic pricing',
      },
    ],
  },
  {
    id: 6,
    title: {
      pt: 'Production Manager',
      en: 'Production Manager',
    },
    company: 'PLP Importacao e Exportacao Ltda',
    location: 'Grande Sao Paulo, Brasil',
    type: 'Full-time',
    startDate: { pt: 'Jan 2006', en: 'Jan 2006' },
    endDate: { pt: 'Jan 2010', en: 'Jan 2010' },
    description: {
      pt: 'Contratado após vender a minha empresa anterior (ISC SA Ltda) para integrar o maior fabricante de acessórios de surf do Brasil. Implementei toda a cadeia de produção para marcas internacionais.',
      en: 'Hired after selling my previous company (ISC SA Ltda) to join the largest surf accessories manufacturer in Brazil. Implemented the entire production chain for international brands.',
    },
    responsibilities: [
      {
        pt: 'Implementação de toda a cadeia de produção para as marcas FCS, Creatures of Leisure, Gorilla Grip e Bullys',
        en: 'Implemented the full production chain for surf accessories brands FCS, Creatures of Leisure, Gorilla Grip, and Bullys',
      },
      {
        pt: 'Gestão de recrutamento, planeamento de produção, controlo de custos, garantia de qualidade e relatórios de performance',
        en: 'Managed recruitment, production planning, cost control, quality assurance, and performance reporting',
      },
    ],
    achievements: [
      {
        pt: 'Triplicou o faturamento da empresa no primeiro ano através de melhorias de eficiência na produção e reestruturação do modelo de vendas',
        en: 'Tripled the company revenue in the first year through production efficiency improvements and a restructured sales model',
      },
    ],
  },
  {
    id: 7,
    title: {
      pt: 'Founder & CEO',
      en: 'Founder & CEO',
    },
    company: 'ISC SA Ltda (International Surfing Company South America)',
    location: 'Grande Sao Paulo, Brasil',
    type: 'Self-employed',
    startDate: { pt: 'Jan 2002', en: 'Jan 2002' },
    endDate: { pt: 'Dez 2006', en: 'Dec 2006' },
    description: {
      pt: 'Fundei aos 21 anos após garantir a licença exclusiva para importar e distribuir a marca australiana de surf Wet Dreams em toda a América do Sul.',
      en: 'Founded at 21 after securing the exclusive South American license for Australian surf brand Wet Dreams.',
    },
    responsibilities: [
      {
        pt: 'Construção de uma rede nacional de distribuição ao longo de toda a costa brasileira',
        en: 'Built a national distribution network across the entire Brazilian coast',
      },
      {
        pt: 'Transição de importação para fabricação local em dois anos, reduzindo custos e eliminando dependência de importações',
        en: 'Transitioned from import to local manufacturing within two years, reducing costs and eliminating import dependency',
      },
    ],
    achievements: [
      {
        pt: 'Venda da empresa em 2006, sendo recrutado pela PLP, a maior empresa do setor',
        en: 'Sold the company in 2006 and was recruited by PLP, the largest company in the sector',
      },
    ],
  },
  {
    id: 8,
    title: {
      pt: 'Production Assistant',
      en: 'Production Assistant',
    },
    company: 'Wet Dreams Australia',
    location: 'Perth, Austrália',
    type: 'Full-time',
    startDate: { pt: 'Jan 2001', en: 'Jan 2001' },
    endDate: { pt: 'Dez 2001', en: 'Dec 2001' },
    description: {
      pt: 'Trabalho na linha de produção completa de uma fábrica de acessórios de surf durante um gap year na Austrália.',
      en: 'Worked across the full production line of a surf accessories manufacturer during a gap year in Australia.',
    },
    responsibilities: [
      {
        pt: 'Fabricação, controlo de qualidade, embalagem e logística de acessórios de surf',
        en: 'Manufacturing, quality control, packaging, and logistics for surf accessories',
      },
    ],
    achievements: [
      {
        pt: 'Experiência que proporcionou o conhecimento da indústria e contactos de fornecedores que levaram à fundação da ISC SA Ltda em 2002',
        en: 'Experience that provided the industry knowledge and supplier contacts that led to founding ISC SA Ltda in 2002',
      },
    ],
  },
];

export const getText = (text: BilingualText, language: Language): string => {
  return text[language];
};

export const getExperienceById = (id: number) => {
  return experiences.find(exp => exp.id === id);
};

export const getCurrentExperience = () => {
  return experiences.filter(exp => exp.endDate.en === 'Present');
};

export const getTotalYearsOfExperience = () => {
  const techStart = new Date('2023-09-01');
  const now = new Date();
  const techYears =
    (now.getTime() - techStart.getTime()) / (1000 * 60 * 60 * 24 * 365);

  const totalStart = new Date('2001-01-01');
  const totalYears =
    (now.getTime() - totalStart.getTime()) / (1000 * 60 * 60 * 24 * 365);

  return {
    tech: Math.round(techYears * 10) / 10,
    total: Math.round(totalYears),
  };
};

export const getTechnologyStats = () => {
  const allTechs = new Set<string>();
  experiences.forEach(exp => {
    exp.technologies?.forEach(tech => allTechs.add(tech));
  });
  return allTechs.size;
};
