export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: 'AI/ML' | 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Elite Surfing Portugal - E-commerce Premium',
    description:
      'Plataforma e-commerce completa especializada em produtos de surf com pagamentos Stripe, sistema de reviews, carrinho persistente e painel administrativo',
    longDescription:
      'Elite Surfing é uma plataforma de e-commerce moderna e completa, atualmente em produção atendendo surfistas em Portugal e Europa. O projeto oferece uma experiência de compra premium com carrinho persistente que mantém produtos mesmo após logout, integração com Stripe para pagamentos seguros e opção de pagamento na entrega (COD), sistema avançado de reviews verificados pós-compra, painel administrativo completo para gestão de produtos e pedidos, e sistema de cupons promocionais com desconto de 30%. A arquitetura Full Stack utiliza React 19.1.0 com Vite para performance excepcional, Node.js/Express com MongoDB no backend, autenticação JWT com cookies httpOnly para máxima segurança, Cloudinary para otimização e CDN de imagens, e EmailJS para notificações automáticas de pedidos. O site está otimizado para SEO com meta tags completas, sitemap.xml e integração com Google Search Console.',
    image: '/elite-tumb.png',
    technologies: [
      'React 19.1.0',
      'Node.js 18.x',
      'Express 4.21.2',
      'MongoDB Atlas',
      'Mongoose 8.14.2',
      'Stripe 17.7.0',
      'JWT 9.0.2',
      'Bcrypt.js 3.0.2',
      'Tailwind CSS 4.1.6',
      'Vite 6.2.0',
      'React Router v7.6.0',
      'Cloudinary 2.6.1',
      'EmailJS 4.4.1',
      'Axios 1.9.0',
      'Swiper 11.2.6',
      'React Hot Toast 2.5.2',
      'Lucide React 0.510.0',
      'Nodemailer 7.0.4',
      'Multer 1.4.5',
      'React Cookie Consent 9.0.0',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/yourusername/elitesurfing',
    liveUrl: 'https://www.elitesurfing.pt/',
    highlights: [
      '🛒 Sistema de carrinho persistente com sincronização servidor/localStorage',
      '💳 Pagamentos seguros via Stripe com webhooks e opção COD (pagamento na entrega)',
      '⭐ Sistema completo de reviews verificados pós-compra com rating de 5 estrelas',
      '📱 Design totalmente responsivo Mobile-First otimizado para todos dispositivos',
      '🔒 Autenticação JWT com cookies httpOnly e refresh tokens para máxima segurança',
      '👨‍💼 Painel administrativo completo para gestão de produtos, estoque e pedidos',
      '📧 Notificações automáticas por email com templates HTML personalizados',
      '🎁 Sistema de cupons promocionais com desconto de até 30%',
      '🚚 Gestão de múltiplos endereços de entrega por usuário',
      '🔍 Busca avançada e filtros por categoria com experiência fluida',
      '📸 Upload e otimização de imagens via Cloudinary CDN',
      '🍪 Compliance GDPR com cookie consent banner',
      '📊 Dashboard de vendas com estatísticas em tempo real',
      '🌍 SEO otimizado com meta tags, Open Graph, sitemap.xml e Search Console',
      '⚡ Performance excepcional: lazy loading, code splitting, cache estratégico',
      '🔄 Sistema de rastreamento de pedidos com status em tempo real',
      '💰 Conversão de moeda automática (EUR) e cálculo de impostos',
      '📱 PWA capabilities com service worker para funcionamento offline',
    ],
  },
  {
    id: 2,
    title: 'Plataforma Imobiliária - Raquel Perez Century 21',
    description:
      'Sistema completo de gestão imobiliária com busca avançada, mapas interativos e integração WhatsApp',
    longDescription:
      'Desenvolvi uma plataforma completa de gestão imobiliária para a consultora Raquel Perez (Century 21), oferecendo uma experiência moderna para compra, venda e arrendamento de imóveis na região de Lisboa, Sintra, Almada e Mafra. O sistema conta com autenticação JWT segura, gestão completa de anúncios, mapas interativos com Leaflet, integração direta com WhatsApp para contato rápido, sistema de favoritos e chat em tempo real. A arquitetura Full Stack utiliza React 18 com Vite no frontend para máxima performance, e Node.js/Express/Prisma/MongoDB no backend, hospedado no Vercel com Cloudinary para otimização de imagens.',
    image: '/raquel-tumb.png',
    technologies: [
      'React 18.2',
      'Node.js',
      'Express 4.18',
      'MongoDB Atlas',
      'Prisma ORM 5.11',
      'JWT Auth',
      'Leaflet Maps',
      'Sass 1.71',
      'Vite 5.1',
      'Cloudinary',
      'Zustand 4.5',
      'React Router v6',
      'Axios',
      'React Quill',
      'DOMPurify',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/yourusername/raquelperez-imoveis',
    liveUrl: 'https://cm-hub.vercel.app/',
    highlights: [
      'Sistema completo de autenticação JWT com httpOnly cookies',
      'Busca avançada com filtros por localização, tipo, preço e características',
      'Mapas interativos com Leaflet/OpenStreetMap e localização precisa',
      'Integração WhatsApp para contato direto com botão flutuante',
      'Upload de imagens otimizado com Cloudinary CDN',
      'Design responsivo Mobile-First com Sass e breakpoints customizados',
      'Painel administrativo completo para gestão de anúncios',
      'Sistema de mensagens interno e chat em tempo real',
      'PWA capabilities com lazy loading para performance otimizada',
      'Sistema de favoritos para salvar imóveis de interesse',
    ],
  },
  {
    id: 3,
    title: 'FollowerScan - Análise Avançada de Seguidores do Instagram',
    description:
      'Aplicação web para análise detalhada de seguidores do Instagram com detector de bloqueios, processamento 100% local e insights avançados',
    longDescription:
      'FollowerScan é uma aplicação web revolucionária que permite aos usuários analisar seus dados do Instagram de forma completamente privada e segura. Com processamento 100% client-side, a aplicação oferece um detector avançado de bloqueios com 60-90% de precisão, análise de 12+ tipos de arquivos JSON, sistema de histórico inteligente para comparação temporal, e uma interface moderna inspirada no Instagram. O sistema processa arquivos ZIP diretamente no navegador, identifica quem não te segue de volta, detecta possíveis bloqueios, analiza unfollows recentes e fornece insights detalhados sobre a saúde social do perfil. Desenvolvido com Next.js 14 e TypeScript, utiliza Framer Motion para animações fluidas e mantém total privacidade dos dados do usuário.',
    image: '/follower-tumb.png',
    technologies: [
      'Next.js 14.0.4',
      'React 18',
      'TypeScript 5',
      'Tailwind CSS 3.3',
      'Framer Motion 10.18',
      'Radix UI',
      'JSZip 3.10.1',
      'Recharts 2.15.4',
      'React Dropzone 14.2.3',
      'Lucide React 0.294',
      'React Hot Toast 2.4.1',
      'jsPDF 2.5.1',
      'Class Variance Authority',
      'Tailwind Merge',
      'PostCSS',
      'Autoprefixer',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/yourusername/followerscan',
    liveUrl: 'https://www.followerscan.com/',
    highlights: [
      '🔐 Processamento 100% local - nenhum dado sai do navegador do usuário',
      '🚀 Detector avançado de bloqueios com algoritmo proprietário (60-90% precisão)',
      '📊 Análise de 12+ tipos diferentes de arquivos JSON do Instagram',
      '💾 Sistema de histórico com até 10 análises salvas no localStorage',
      '🔍 Identificação automática de quem não te segue de volta',
      '⚡ Processamento de arquivos ZIP com extração automática via JSZip',
      '📈 Dashboard com estatísticas detalhadas e visualizações interativas',
      '🎨 Interface moderna com gradiente Instagram e animações Framer Motion',
      '📱 Design totalmente responsivo com abordagem Mobile-First',
      '🔄 Comparação temporal entre análises para detectar mudanças',
      '👻 Detecção de unfollows recentes (ghosts) e análise de padrões',
      '⭐ Categorização avançada: VIPs, Red Flags, Crushes, Fans e Stalkers',
      '💯 Score de Saúde Social com recomendações personalizadas',
      '📤 Exportação de dados em CSV com listas segmentadas',
      '🛡️ Zero tracking, sem cookies, apenas localStorage para persistência',
    ],
  },
  {
    id: 4,
    title: 'Seo - Mobilidade Executiva',
    description:
      'Site profissional para serviço de motorista executiva com formulário multi-step, integração WhatsApp e sistema de necessidades especiais',
    longDescription:
      'Desenvolvi um site profissional completo para serviços de motorista executiva premium no Brasil, utilizando as mais modernas tecnologias. O projeto conta com formulário multi-step avançado com validação em tempo real, integração WhatsApp Business para agendamentos, sistema completo de necessidades especiais (acessibilidade, pets, bagagem extra), calculadora automática de preços baseada em distância, e design responsivo otimizado para mobile. A plataforma oferece suporte corporativo com campos para CNPJ e faturamento, além de total compliance com LGPD para proteção de dados dos clientes.',
    image: '/seo-tumb.png',
    technologies: [
      'Next.js 15.0.3',
      'React 19.0',
      'TypeScript 5.6',
      'Tailwind CSS 3.4',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Framer Motion',
      'Google Maps API',
      'WhatsApp Business API',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/yourusername/executive-driver',
    liveUrl: 'https://seo-driver.vercel.app/',
    highlights: [
      'Formulário multi-step com validação em tempo real usando React Hook Form + Zod',
      'Integração WhatsApp Business para agendamentos automáticos',
      'Sistema completo de necessidades especiais (cadeirante, pets, bagagem)',
      'Calculadora automática de preços baseada em distância via Google Maps',
      'Design responsivo Mobile-First com animações Framer Motion',
      'Compliance total com LGPD para proteção de dados',
      'Suporte corporativo com campos CNPJ e faturamento empresarial',
      'Arquitetura moderna com Next.js 15 App Router e Server Components',
    ],
  },
  {
    id: 5,
    title: 'Street Paint - Centro Automotivo Premium',
    description:
      'Site completo para oficina de reparação automóvel com sistema de orçamento interativo, chatbot assistente e integração WhatsApp Business',
    longDescription:
      'Desenvolvi uma plataforma web moderna e responsiva para a Street Paint, oficina líder em reparação automóvel em Sintra com mais de 15 anos de experiência. O projeto revoluciona a experiência digital dos clientes com um sistema inovador de orçamento estimado interativo, onde os usuários podem selecionar visualmente as peças danificadas em 6 tipos diferentes de veículos (Sport, Hatchback, Sedan, SUV, Van, Pickup) e receber orçamentos instantâneos. A plataforma conta com chatbot assistente 24/7 com IA conversacional, integração completa com WhatsApp Business, galeria interativa de serviços com sistema before/after, exibição de 19 avaliações reais do Google (4.9★), mapas interativos com navegação GPS, e formulário de orçamento multi-step com upload de imagens. O site alcança métricas excepcionais no Lighthouse com 95/100 em Performance e 98/100 em Acessibilidade.',
    image: '/oficina-tumb.png',
    technologies: [
      'React 18.2',
      'Vite 5.0.8',
      'React Router DOM 6.30',
      'EmailJS 4.4.1',
      'JavaScript ES6+',
      'CSS3 Moderno',
      'WhatsApp Business API',
      'Google Maps API',
      'Vercel',
      'Mobile-First Design',
      'Framer Motion',
      'Lighthouse Optimization',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/yourusername/street-paint',
    liveUrl: 'https://streetpaint.pt/',
    highlights: [
      '🚗 Sistema de Orçamento Interativo com seleção visual de peças por tipo de veículo',
      '💬 Chatbot assistente 24/7 com base de conhecimento e quick replies',
      '📱 Integração completa com WhatsApp Business para orçamentos e atendimento',
      '⭐ Exibição de 19 avaliações reais do Google com rating 4.9/5.0',
      '🗺️ Mapas interativos com Google Maps e navegação GPS (Google Maps/Waze)',
      '🎠 Galeria de 8 serviços com carrossel interativo e sistema before/after',
      '📋 Formulário de orçamento multi-step com upload de imagens via Cloudinary',
      '⚡ Performance otimizada: 95/100 Lighthouse, lazy loading, code splitting',
      '📱 Design totalmente responsivo Mobile-First com CSS Grid e Flexbox',
      '🕒 Indicador de horário em tempo real (Aberto/Fechado)',
      '🏆 500+ clientes satisfeitos, 15+ anos de experiência, 2 anos de garantia',
      '♿ Acessibilidade WCAG AA com ARIA labels e navegação por teclado',
      '🔍 SEO otimizado com meta tags, Open Graph e Schema.org markup',
      '🚀 Deploy automatizado no Vercel com cache headers otimizados',
      '🛡️ Segurança: HTTPS enforced, CSP headers, input sanitization',
    ],
  },

  {
    id: 6,
    title: 'Go Portugal - Tours Privados Exclusivos',
    description:
      'Website profissional para serviço de tours privados e transporte turístico em Portugal',
    longDescription:
      'Desenvolvi uma plataforma completa para empresa de turismo privado em Portugal, com sistema de reservas online, catálogo de 20+ tours personalizados, galeria interativa e integração com WhatsApp. O site oferece experiência otimizada para conversão com design responsivo e performance aprimorada.',
    image: '/goportugaltumb.png',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Hook Form',
      'Zod',
      'EmailJS',
    ],
    category: 'Full Stack',
    featured: false,
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/prime-tours',
    liveUrl: 'https://www.goportugaltours.com/',
    highlights: [
      'Sistema de preços dinâmico por passageiros',
      'SEO otimizado para turismo',
      'Formulário de reservas integrado',
    ],
  },
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id);
};
