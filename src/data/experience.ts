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
    title: 'Full Stack Developer & AI Engineer',
    company: 'Freelance',
    location: 'Lisboa, Portugal',
    type: 'Freelance',
    startDate: 'Jun 2024',
    endDate: 'Present',
    description:
      'Desenvolvendo aplicações web inteligentes combinando tecnologias full-stack modernas com capacidades de IA de ponta. Especializado em React 19, Next.js 15, Node.js 18 e integrações avançadas.',
    responsibilities: [
      'Desenvolvimento de aplicações web end-to-end com React 19.1.0, Next.js 14/15 e Node.js 18.x',
      'Implementação de funcionalidades de IA usando OpenAI API, LangChain e modelos ML customizados',
      'Criação de e-commerce completos com Stripe, sistemas de reviews e painéis administrativos',
      'Desenvolvimento de interfaces responsivas Mobile-First com Tailwind CSS e Framer Motion',
      'Integração de sistemas de pagamento (Stripe, COD) com webhooks e segurança avançada',
      'Implementação de autenticação JWT com httpOnly cookies e refresh tokens',
      'Otimização de performance com Vite, lazy loading e code splitting',
      'Integração com WhatsApp Business API e sistemas de chat em tempo real',
      'Deploy em Vercel com CI/CD pipelines e otimização de cache',
      'Desenvolvimento de PWAs com service workers para funcionamento offline',
    ],
    technologies: [
      'React 19.1.0',
      'Next.js 15.0.3',
      'TypeScript 5.6',
      'Node.js 18.x',
      'Express 4.21.2',
      'MongoDB Atlas',
      'Mongoose 8.14.2',
      'Prisma ORM 5.11',
      'Stripe 17.7.0',
      'JWT 9.0.2',
      'Bcrypt.js',
      'Tailwind CSS 3.4',
      'Vite 6.2.0',
      'Framer Motion 10.18',
      'Cloudinary',
      'EmailJS',
      'WhatsApp API',
      'Google Maps API',
      'Leaflet Maps',
      'Zustand 4.5',
      'React Hook Form',
      'Zod',
      'N8N',
      'OpenAI API',
      'LangChain',
      'Vercel',
      'Docker',
      'AWS',
      'Lighthouse Optimization',
      'SEO/Schema.org',
    ],
    achievements: [
      'Entregue 6+ aplicações completas incluindo e-commerces e plataformas SaaS',
      'Redução de 40% nos custos operacionais dos clientes através de automação',
      '99.9% de uptime em aplicações em produção',
      'Lighthouse scores: 95+ Performance, 98+ Acessibilidade',
      'Implementação de sistemas de bloqueio detection com 90% de precisão (FollowerScan)',
    ],
  },
  {
    id: 2,
    title: 'Data Analyst',
    company: 'Accenture Portugal',
    location: 'Lisboa Metropolitan Area',
    type: 'Full-time',
    startDate: 'May 2024',
    endDate: 'Present',
    description:
      'Análise de dados em plataforma digital para cliente multinacional, aplicando padrões de comunidade através de insights data-driven e desenvolvimento de soluções automatizadas.',
    responsibilities: [
      'Análise de grandes datasets para identificar tendências e riscos de conteúdo',
      'Desenvolvimento de sistemas de relatórios automatizados usando Python e SQL',
      'Criação de visualizações de dados com Tableau e Power BI',
      'Implementação de modelos de machine learning para detecção de padrões',
      'Colaboração com equipes cross-funcionais para resolver problemas complexos',
      'Desenvolvimento de scripts Python para automação de processos',
      'Otimização de queries SQL para melhor performance',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'PostgreSQL',
      'Tableau',
      'Power BI',
      'Excel Avançado',
      'Machine Learning',
      'Scikit-learn',
      'TensorFlow',
      'Git',
      'Jira',
      'Confluence',
    ],
    achievements: [
      'Melhoria de 35% na eficiência de moderação de conteúdo',
      'Desenvolvimento de automação economizando 20 horas/semana',
      'Treinamento de membros da equipe em técnicas avançadas de análise de dados',
      'Criação de dashboard executivo para tomada de decisões estratégicas',
    ],
  },
  {
    id: 3,
    title: 'Full Stack Development - Transição de Carreira',
    company: 'Bootcamp & Self-Study',
    location: 'Lisboa, Portugal',
    type: 'Full-time',
    startDate: 'Sep 2023',
    endDate: 'Jun 2024',
    description:
      'Período intensivo de aprendizado e desenvolvimento de habilidades em tecnologias web modernas, IA/ML e melhores práticas de desenvolvimento.',
    responsibilities: [
      'Conclusão de bootcamp Full Stack Development com foco em MERN Stack',
      'Desenvolvimento de 20+ projetos reais do zero até produção',
      'Estudo aprofundado de React 18/19, Next.js 14/15, Node.js e TypeScript',
      'Aprendizado de fundamentos e aplicações práticas de IA/ML',
      'Contribuições para projetos open-source no GitHub',
      'Participação em hackathons e meetups tecnológicos',
      'Desenvolvimento de portfólio profissional com projetos em produção',
    ],
    technologies: [
      'JavaScript ES6+',
      'React 18',
      'Next.js 14',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'TypeScript',
      'Python',
      'Django',
      'FastAPI',
      'HTML5/CSS3',
      'Tailwind CSS',
      'Git/GitHub',
      'Docker',
      'AWS Basics',
      'REST APIs',
      'GraphQL',
      'JWT Auth',
      'Testing',
      'CI/CD',
    ],
    achievements: [
      'Graduação no topo da turma no bootcamp',
      'Portfolio com 10+ aplicações production-ready',
      'Certificações em React, Node.js, Python e Cloud Computing',
      'Desenvolvimento de 3 projetos reais para clientes durante o bootcamp',
    ],
  },
  {
    id: 4,
    title: 'Founder & CEO',
    company: 'Elite Surfing',
    location: 'Brasil / Remote',
    type: 'Self-employed',
    startDate: 'Mar 2010',
    endDate: 'Present',
    description:
      'Fundei e liderei empresa de sucesso na indústria do surf, gerenciando todos os aspectos desde estratégia até operações, incluindo desenvolvimento de e-commerce próprio.',
    responsibilities: [
      'Liderança de visão estratégica e iniciativas de crescimento',
      'Supervisão de operações end-to-end e logística internacional',
      'Desenvolvimento de produtos inovadores e gestão de portfolio',
      'Expansão de mercado nacional e internacional (5+ países)',
      'Gestão de equipe de 15+ funcionários',
      'Negociação de parcerias estratégicas e acordos de distribuição',
      'Implementação de sistemas de e-commerce e automação de processos',
      'Desenvolvimento de estratégias de marketing digital e SEO',
    ],
    achievements: [
      'Construção de empresa do zero até faturamento de 7 dígitos anuais',
      'Estabelecimento de rede de distribuição em 5 países',
      'Desenvolvimento de 3 designs patenteados de produtos',
      'Transição bem-sucedida do modelo de negócios durante mudança para Portugal',
      'Implementação de e-commerce próprio aumentando vendas em 200%',
      'Elite Surfing Portugal (www.elitesurfing.pt) - e-commerce desenvolvido do zero',
    ],
  },
  {
    id: 5,
    title: 'Production Manager',
    company: 'PLP Importação e Exportação Ltda',
    location: 'São Paulo, Brasil',
    type: 'Full-time',
    startDate: 'Nov 2005',
    endDate: 'Jan 2010',
    description:
      'Gerenciamento de operações de produção para marcas importantes de surf incluindo FCS, Creatures of Leisure e Gorilla Grip.',
    responsibilities: [
      'Gestão do ciclo completo de produção desde concepção até entrega',
      'Liderança de processos de recrutamento e treinamento',
      'Desenvolvimento de linha completa de acessórios de surf',
      'Gestão de custos de produção e otimização de eficiência',
      'Garantia de padrões de controle de qualidade',
      'Coordenação com fornecedores internacionais',
      'Implementação de sistemas de gestão de estoque',
    ],
    achievements: [
      'Redução de custos de produção em 25%',
      'Melhoria de tempos de entrega em 40%',
      'Lançamento de 50+ produtos de sucesso',
      'Implementação de sistema de qualidade ISO 9001',
    ],
  },
];

export const getExperienceById = (id: number) => {
  return experiences.find(exp => exp.id === id);
};

export const getCurrentExperience = () => {
  return experiences.filter(exp => exp.endDate === 'Present');
};

export const getTotalYearsOfExperience = () => {
  // Experiência em tecnologia
  const techStart = new Date('2023-09-01');
  const now = new Date();
  const techYears =
    (now.getTime() - techStart.getTime()) / (1000 * 60 * 60 * 24 * 365);

  // Experiência total profissional
  const totalStart = new Date('2005-11-01');
  const totalYears =
    (now.getTime() - totalStart.getTime()) / (1000 * 60 * 60 * 24 * 365);

  return {
    tech: Math.round(techYears * 10) / 10,
    total: Math.round(totalYears),
  };
};

// Estatísticas de tecnologias
export const getTechnologyStats = () => {
  const allTechs = new Set<string>();
  experiences.forEach(exp => {
    exp.technologies?.forEach(tech => allTechs.add(tech));
  });
  return allTechs.size;
};

// Projetos desenvolvidos
export const getProjectCount = () => {
  // Baseado nos seus projetos reais compartilhados
  return 50; // Ajuste conforme necessário
};
