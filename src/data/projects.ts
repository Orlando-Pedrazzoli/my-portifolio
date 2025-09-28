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
    liveUrl: 'https://raquelperez-five.vercel.app/',
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
    id: 2,
    title: 'FollowerScan - Análise Avançada de Seguidores do Instagram',
    description:
      'Aplicação web para análise detalhada de seguidores do Instagram com detector de bloqueios, processamento 100% local e insights avançados',
    longDescription:
      'FollowerScan é uma aplicação web revolucionária que permite aos usuários analisar seus dados do Instagram de forma completamente privada e segura. Com processamento 100% client-side, a aplicação oferece um detector avançado de bloqueios com 60-90% de precisão, análise de 12+ tipos de arquivos JSON, sistema de histórico inteligente para comparação temporal, e uma interface moderna inspirada no Instagram. O sistema processa arquivos ZIP diretamente no navegador, identifica quem não te segue de volta, detecta possíveis bloqueios, analisa unfollows recentes e fornece insights detalhados sobre a saúde social do perfil. Desenvolvido com Next.js 14 e TypeScript, utiliza Framer Motion para animações fluidas e mantém total privacidade dos dados do usuário.',
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
    id: 3,
    title: 'E-Commerce Platform with AI Recommendations',
    description:
      'Full-stack e-commerce solution with personalized AI product recommendations',
    longDescription:
      'Created a modern e-commerce platform featuring an AI-powered recommendation engine that increases conversion rates through personalized product suggestions. Built with Next.js for SSR/SSG optimization and integrated with Stripe for secure payments.',
    image: '/seo-tumb.png',
    technologies: [
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'Stripe',
      'TensorFlow.js',
      'Docker',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/yourusername/ecommerce-ai',
    liveUrl: 'https://seo-driver.vercel.app/',
    highlights: [
      '30% increase in conversion rate',
      'Handles 10k+ concurrent users',
      'PWA with offline support',
      '99.9% uptime',
    ],
  },
  {
    id: 4,
    title: 'Computer Vision Quality Inspector',
    description:
      'Automated quality control system using computer vision for manufacturing',
    longDescription:
      'Implemented an industrial-grade computer vision system that detects defects in manufacturing processes with high accuracy, reducing manual inspection time. The system uses YOLOv8 for object detection and provides real-time feedback through WebSocket connections.',
    image: '/oficina-tumb.png',
    technologies: [
      'Python',
      'OpenCV',
      'YOLOv8',
      'PyTorch',
      'FastAPI',
      'React',
      'WebSocket',
    ],
    category: 'AI/ML',
    featured: false,
    githubUrl: 'https://github.com/yourusername/cv-inspector',
    liveUrl: 'https://oficina-chapa-pintura.vercel.app/',
    highlights: [
      '99.2% defect detection rate',
      'Real-time processing',
      'Reduced inspection costs by 60%',
    ],
  },
  {
    id: 5,
    title: 'Blockchain Supply Chain Tracker',
    description:
      'Decentralized supply chain management system with smart contracts',
    longDescription:
      'Built a transparent supply chain tracking system using blockchain technology to ensure product authenticity and traceability. The platform uses smart contracts for automation and IPFS for decentralized storage.',
    image: '/elite-tumb.png',
    technologies: [
      'Solidity',
      'Web3.js',
      'React',
      'Node.js',
      'IPFS',
      'Hardhat',
      'GraphQL',
    ],
    category: 'Full Stack',
    featured: false,
    githubUrl: 'https://github.com/yourusername/supply-chain-dapp',
    liveUrl: 'https://www.elitesurfing.pt/',
    highlights: [
      'Immutable tracking records',
      'Smart contract automation',
      'Multi-party verification',
    ],
  },
  {
    id: 6,
    title: 'Health Monitoring Dashboard',
    description:
      'Real-time health metrics visualization with predictive analytics',
    longDescription:
      'Developed a comprehensive health monitoring system that tracks vital signs and uses ML to predict potential health issues. The platform ensures HIPAA compliance and provides real-time alerts for medical professionals.',
    image: '/salgados-tumb.png',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Chart.js',
      'TensorFlow.js',
      'WebRTC',
      'AWS',
    ],
    category: 'Full Stack',
    featured: false,
    githubUrl: 'https://github.com/yourusername/health-monitor',
    liveUrl: 'https://premiumsalgados.vercel.app/',
    highlights: [
      'Real-time vital monitoring',
      'Predictive health alerts',
      'HIPAA compliant',
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
