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
    startDate: { pt: 'Jun 2024', en: 'Jun 2024' },
    endDate: { pt: 'Presente', en: 'Present' },
    description: {
      pt: 'Desenvolvimento de websites e aplicações web para pequenas e médias empresas, desde landing pages até plataformas e-commerce completas com pagamentos, envios e painéis administrativos.',
      en: 'Building websites and web applications for small and medium businesses, from landing pages to full e-commerce platforms with payments, shipping and admin panels.',
    },
    responsibilities: [
      {
        pt: 'Desenvolvimento de aplicações full stack com React, Next.js, Node.js e MongoDB',
        en: 'Full stack application development with React, Next.js, Node.js and MongoDB',
      },
      {
        pt: 'Criação de e-commerce com Stripe (cartão, boleto), PIX manual e cálculo de frete via Melhor Envio',
        en: 'E-commerce development with Stripe (card, boleto), manual PIX and shipping via Melhor Envio',
      },
      {
        pt: 'Implementação de autenticação JWT e Clerk com portais de acesso para clientes e administradores',
        en: 'JWT and Clerk authentication with client and admin access portals',
      },
      {
        pt: 'Integração de APIs externas: Stripe Webhooks, Melhor Envio, WhatsApp Business, EmailJS, Resend',
        en: 'External API integrations: Stripe Webhooks, Melhor Envio, WhatsApp Business, EmailJS, Resend',
      },
      {
        pt: 'SEO técnico com JSON-LD, sitemaps, Google Search Console e meta tags dinâmicas',
        en: 'Technical SEO with JSON-LD, sitemaps, Google Search Console and dynamic meta tags',
      },
      {
        pt: 'Deploy e manutenção de aplicações em produção no Vercel',
        en: 'Deployment and maintenance of production applications on Vercel',
      },
    ],
    technologies: [
      'React 19',
      'Next.js 14–16',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'Mongoose',
      'Stripe',
      'Clerk',
      'JWT',
      'Tailwind CSS',
      'Vite',
      'Framer Motion',
      'Cloudinary',
      'EmailJS',
      'Resend',
      'Melhor Envio API',
      'TanStack React Query',
      'React Hook Form',
      'Zod',
      'Vercel',
    ],
    achievements: [
      {
        pt: 'Seis projetos entregues e em produção, incluindo e-commerce, SaaS e websites institucionais',
        en: 'Six projects delivered and in production, including e-commerce, SaaS and institutional websites',
      },
    ],
  },
  {
    id: 2,
    title: {
      pt: 'Data Analyst',
      en: 'Data Analyst',
    },
    company: 'Accenture Portugal',
    location: 'Lisboa, Portugal',
    type: 'Full-time',
    startDate: { pt: 'Mai 2024', en: 'May 2024' },
    endDate: { pt: 'Presente', en: 'Present' },
    description: {
      pt: 'Análise de conteúdo para o projeto Meta, avaliando publicações no mercado português segundo as políticas da plataforma. Trabalho que exige atenção ao detalhe, conhecimento das guidelines e tomada de decisão consistente.',
      en: 'Content analysis for the Meta project, evaluating posts in the Portuguese market according to platform policies. Work that requires attention to detail, knowledge of guidelines and consistent decision-making.',
    },
    responsibilities: [
      {
        pt: 'Análise de conteúdo digital segundo as políticas de comunidade da Meta',
        en: "Digital content analysis according to Meta's community policies",
      },
      {
        pt: 'Avaliação e classificação de publicações no mercado português',
        en: 'Evaluation and classification of posts in the Portuguese market',
      },
      {
        pt: 'Documentação de decisões e feedback para melhoria dos processos',
        en: 'Decision documentation and feedback for process improvement',
      },
      {
        pt: 'Colaboração com equipas internacionais para alinhar critérios de moderação',
        en: 'Collaboration with international teams to align moderation criteria',
      },
    ],
    technologies: ['Meta Internal Tools', 'Excel', 'Jira', 'Confluence'],
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
    type: 'Full-time',
    startDate: { pt: 'Set 2023', en: 'Sep 2023' },
    endDate: { pt: 'Jun 2024', en: 'Jun 2024' },
    description: {
      pt: 'Bootcamp intensivo de desenvolvimento web full stack na Ironhack, com foco no stack MERN. Período de aprendizagem acelerada onde construí os primeiros projetos reais e estabeleci as bases técnicas para trabalhar como developer.',
      en: 'Intensive full stack web development bootcamp at Ironhack, focused on the MERN stack. An accelerated learning period where I built my first real projects and established the technical foundations for working as a developer.',
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
        pt: 'Estudo aprofundado de React, Next.js, Node.js, Express e MongoDB',
        en: 'In-depth study of React, Next.js, Node.js, Express and MongoDB',
      },
      {
        pt: 'Aprendizagem de boas práticas: Git workflow, code review, testes básicos',
        en: 'Learning best practices: Git workflow, code review, basic testing',
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
      pt: 'Fundei a Elite Surfing em 2010 como marca de acessórios de surf no Brasil. Durante mais de uma década geri todos os aspetos do negócio — produto, operações, equipa, vendas e expansão internacional. Após mudar para Portugal, fiz a transição do modelo de negócio e hoje giro o e-commerce elitesurfing.com.br, que construí do zero com o stack MERN.',
      en: 'Founded Elite Surfing in 2010 as a surf accessories brand in Brazil. For over a decade I managed all aspects of the business — product, operations, team, sales and international expansion. After moving to Portugal, I transitioned the business model and now run the e-commerce elitesurfing.com.br, which I built from scratch with the MERN stack.',
    },
    responsibilities: [
      {
        pt: 'Gestão completa do negócio: produto, operações, equipa e finanças',
        en: 'Full business management: product, operations, team and finances',
      },
      {
        pt: 'Liderança de equipa de até 15 pessoas',
        en: 'Leadership of a team of up to 15 people',
      },
      {
        pt: 'Desenvolvimento e lançamento de produtos próprios',
        en: 'Development and launch of own products',
      },
      {
        pt: 'Expansão para mercados internacionais',
        en: 'Expansion into international markets',
      },
      {
        pt: 'Negociação com fornecedores e parceiros de distribuição',
        en: 'Negotiation with suppliers and distribution partners',
      },
      {
        pt: 'Transição do negócio físico para e-commerce próprio construído de raiz',
        en: 'Transition from physical business to custom-built e-commerce',
      },
    ],
    achievements: [
      {
        pt: 'Construção de empresa do zero com mais de uma década de operação',
        en: 'Built a company from scratch with over a decade of operation',
      },
      {
        pt: 'E-commerce elitesurfing.com.br desenvolvido inteiramente por mim com React, Node.js, MongoDB e Stripe',
        en: 'E-commerce elitesurfing.com.br fully developed by me with React, Node.js, MongoDB and Stripe',
      },
    ],
  },
  {
    id: 5,
    title: {
      pt: 'Production Manager',
      en: 'Production Manager',
    },
    company: 'PLP Importação e Exportação Ltda',
    location: 'São Paulo, Brasil',
    type: 'Full-time',
    startDate: { pt: 'Nov 2005', en: 'Nov 2005' },
    endDate: { pt: 'Jan 2010', en: 'Jan 2010' },
    description: {
      pt: 'Gestão de produção para marcas de surf como FCS, Creatures of Leisure e Gorilla Grip. Responsável pelo ciclo completo de produção, desde conceção até entrega.',
      en: 'Production management for surf brands such as FCS, Creatures of Leisure and Gorilla Grip. Responsible for the full production cycle, from design to delivery.',
    },
    responsibilities: [
      {
        pt: 'Gestão do ciclo completo de produção',
        en: 'Full production cycle management',
      },
      {
        pt: 'Coordenação com fornecedores nacionais e internacionais',
        en: 'Coordination with national and international suppliers',
      },
      {
        pt: 'Desenvolvimento de linha completa de acessórios de surf',
        en: 'Development of a complete surf accessories product line',
      },
      {
        pt: 'Controlo de qualidade e otimização de custos',
        en: 'Quality control and cost optimization',
      },
    ],
    achievements: [
      {
        pt: 'Redução de custos de produção em 25%',
        en: '25% reduction in production costs',
      },
    ],
  },
];

// Helper para extrair texto no idioma correto
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

  const totalStart = new Date('2005-11-01');
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
