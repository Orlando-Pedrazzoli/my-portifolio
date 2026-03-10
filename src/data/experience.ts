export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Self-employed';
  startDate: string;
  endDate: string | 'Present';
  description: string;
  responsibilities: string[];
  technologies?: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Pedrazzoli Digital (Freelance)',
    location: 'Lisboa, Portugal',
    type: 'Freelance',
    startDate: 'Jun 2024',
    endDate: 'Present',
    description:
      'Desenvolvimento de websites e aplicacoes web para pequenas e medias empresas, desde landing pages ate plataformas e-commerce completas com pagamentos, envios e paineis administrativos.',
    responsibilities: [
      'Desenvolvimento de aplicacoes full stack com React, Next.js, Node.js e MongoDB',
      'Criacao de e-commerce com Stripe (cartao, boleto), PIX manual e calculo de frete via Melhor Envio',
      'Implementacao de autenticacao JWT e Clerk com portais de acesso para clientes e administradores',
      'Integracao de APIs externas: Stripe Webhooks, Melhor Envio, WhatsApp Business, EmailJS, Resend',
      'SEO tecnico com JSON-LD, sitemaps, Google Search Console e meta tags dinamicas',
      'Deploy e manutencao de aplicacoes em producao no Vercel',
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
      'Seis projetos entregues e em producao, incluindo e-commerce, SaaS e websites institucionais',
    ],
  },
  {
    id: 2,
    title: 'Data Analyst',
    company: 'Accenture Portugal',
    location: 'Lisboa, Portugal',
    type: 'Full-time',
    startDate: 'May 2024',
    endDate: 'Present',
    description:
      'Analise de conteudo para o projeto Meta, avaliando publicacoes no mercado portugues segundo as politicas da plataforma. Trabalho que exige atencao ao detalhe, conhecimento das guidelines e tomada de decisao consistente.',
    responsibilities: [
      'Analise de conteudo digital segundo as politicas de comunidade da Meta',
      'Avaliacao e classificacao de publicacoes no mercado portugues',
      'Documentacao de decisoes e feedback para melhoria dos processos',
      'Colaboracao com equipas internacionais para alinhar criterios de moderacao',
    ],
    technologies: ['Ferramentas internas Meta', 'Excel', 'Jira', 'Confluence'],
    achievements: [
      'Consistencia acima da media da equipa nos indicadores de qualidade',
    ],
  },
  {
    id: 3,
    title: 'Full Stack Development — Transicao de Carreira',
    company: 'Ironhack (Bootcamp)',
    location: 'Lisboa, Portugal',
    type: 'Full-time',
    startDate: 'Sep 2023',
    endDate: 'Jun 2024',
    description:
      'Bootcamp intensivo de desenvolvimento web full stack na Ironhack, com foco no stack MERN. Periodo de aprendizagem acelerada onde construi os primeiros projetos reais e estabeleci as bases tecnicas para trabalhar como developer.',
    responsibilities: [
      'Conclusao do bootcamp Full Stack Development com foco em MERN Stack',
      'Desenvolvimento de projetos reais do zero ate producao durante o curso',
      'Estudo aprofundado de React, Next.js, Node.js, Express e MongoDB',
      'Aprendizagem de boas praticas: Git workflow, code review, testes basicos',
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
    achievements: ['Graduacao no topo da turma no bootcamp'],
  },
  {
    id: 4,
    title: 'Founder & CEO',
    company: 'Elite Surfing',
    location: 'Brasil / Portugal',
    type: 'Self-employed',
    startDate: 'Mar 2010',
    endDate: 'Present',
    description:
      'Fundei a Elite Surfing em 2010 como marca de acessorios de surf no Brasil. Durante mais de uma decada geri todos os aspectos do negocio — produto, operacoes, equipa, vendas e expansao internacional. Apos mudar para Portugal, fiz a transicao do modelo de negocio e hoje giro o e-commerce elitesurfing.com.br, que construi do zero com o stack MERN.',
    responsibilities: [
      'Gestao completa do negocio: produto, operacoes, equipa e financas',
      'Lideranca de equipa de ate 15 pessoas',
      'Desenvolvimento e lancamento de produtos proprios',
      'Expansao para mercados internacionais',
      'Negociacao com fornecedores e parceiros de distribuicao',
      'Transicao do negocio fisico para e-commerce proprio construido de raiz',
    ],
    achievements: [
      'Construcao de empresa do zero com mais de uma decada de operacao',
      'E-commerce elitesurfing.com.br desenvolvido inteiramente por mim com React, Node.js, MongoDB e Stripe',
    ],
  },
  {
    id: 5,
    title: 'Production Manager',
    company: 'PLP Importacao e Exportacao Ltda',
    location: 'Sao Paulo, Brasil',
    type: 'Full-time',
    startDate: 'Nov 2005',
    endDate: 'Jan 2010',
    description:
      'Gestao de producao para marcas de surf como FCS, Creatures of Leisure e Gorilla Grip. Responsavel pelo ciclo completo de producao, desde concecao ate entrega.',
    responsibilities: [
      'Gestao do ciclo completo de producao',
      'Coordenacao com fornecedores nacionais e internacionais',
      'Desenvolvimento de linha completa de acessorios de surf',
      'Controlo de qualidade e otimizacao de custos',
    ],
    achievements: ['Reducao de custos de producao em 25%'],
  },
];

export const getExperienceById = (id: number) => {
  return experiences.find(exp => exp.id === id);
};

export const getCurrentExperience = () => {
  return experiences.filter(exp => exp.endDate === 'Present');
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
