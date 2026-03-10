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
    title: 'Elite Surfing Brasil — E-commerce Full Stack',
    description:
      'Plataforma e-commerce completa para o mercado brasileiro com pagamentos via Stripe, PIX e Boleto, integração de frete Melhor Envio, painel administrativo com vendas diretas e CRM',
    longDescription:
      'Plataforma e-commerce que construí do zero para o mercado brasileiro de surf. A loja processa pagamentos reais (cartão de crédito via Stripe, boleto bancário e PIX com fluxo manual), calcula frete em tempo real via Melhor Envio comparando múltiplas transportadoras (Correios, Jadlog, Azul Cargo), e exibe parcelamento em cada produto. O projeto conta com mais de 40 componentes, 12 arquivos de rotas API, painel administrativo com sistema de vendas diretas (romaneio), blog com conteúdo WSL para SEO orgânico, CRM básico para gestão de clientes, sistema de reviews verificados pós-compra, carrinho persistente com sincronização servidor/localStorage, checkout como convidado, cupons promocionais e todas as páginas institucionais exigidas pelo Código de Defesa do Consumidor. Monorepo com frontend React e backend Express, ambos deployados no Vercel.',
    image: '/elite-tumb.png',
    technologies: [
      'React 19',
      'Vite',
      'Tailwind CSS',
      'Node.js 18',
      'Express',
      'MongoDB Atlas',
      'Mongoose',
      'Stripe',
      'JWT',
      'Bcrypt.js',
      'Cloudinary',
      'Resend',
      'Melhor Envio API',
      'Axios',
      'Swiper',
      'EmailJS',
      'React Router v7',
      'Lucide React',
      'React Hot Toast',
      'Multer',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/elite-surfing-brasil',
    liveUrl: 'https://www.elitesurfing.com.br/',
    highlights: [
      '💳 3 métodos de pagamento: Stripe (cartão com parcelamento), Boleto bancário e PIX (fluxo manual com QR code)',
      '🚚 Integração Melhor Envio com cálculo de frete por CEP comparando Correios, Jadlog e Azul Cargo',
      '🛒 Carrinho persistente com sincronização servidor/localStorage e merge no login',
      '⭐ Reviews verificados vinculados a pedidos reais — só compradores podem avaliar',
      '📦 Painel admin com gestão de produtos, pedidos, geração de etiquetas e Vendas Diretas (romaneio)',
      '👥 CRM básico para gestão de clientes fora do sistema de cadastro do site',
      '📝 Blog com rankings WSL, calendário de eventos e histórico de campeões para tráfego orgânico',
      '🎁 Cupons promocionais com validação server-side e frete grátis por valor mínimo',
      '👤 Checkout como convidado — compra sem necessidade de criar conta',
      '📧 Emails transacionais via Resend (confirmação de pedido e atualização de status)',
      '🔒 JWT em cookies httpOnly com middleware separado para clientes e admin',
      '🔍 SEO com JSON-LD (Product, Organization, BreadcrumbList), sitemap.xml e Google Search Console',
      '📱 Páginas institucionais: FAQ, Política de Privacidade, Termos de Uso, Política de Reembolso',
      '📸 Galeria de produtos com zoom modal via Cloudinary CDN',
      '💬 WhatsApp Business flutuante para suporte ao cliente',
    ],
  },
  {
    id: 2,
    title: 'Centro Dentário Colombo — Website Bilíngue com Portal do Paciente',
    description:
      'Website profissional e sistema de gestão para clínica dentária real em Lisboa com portal do paciente, painel administrativo, autenticação Clerk e compliance GDPR',
    longDescription:
      'Website e sistema de gestão completo para uma clínica dentária real no Centro Comercial Colombo, Lisboa. O que começou como uma landing page simples evoluiu para uma aplicação completa com painel administrativo onde a equipa da clínica gere prontuários sem conhecimento técnico, portal do paciente onde clientes visualizam tratamentos, exames e faturas, suporte bilíngue PT/EN (a clínica atende muitos turistas), e sistema de cookie consent GDPR. Todo o projeto é TypeScript — o primeiro onde apliquei tipagem end-to-end, desde os serviços API com Axios até os componentes. Autenticação híbrida com Clerk para pacientes e credenciais por variável de ambiente para admin. Data fetching com TanStack React Query eliminando bugs de stale data e race conditions.',
    image: '/raquel-tumb.png',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite 7',
      'Tailwind CSS 3',
      'React Router 7',
      'TanStack React Query',
      'Clerk',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'Mongoose',
      'Cloudinary',
      'React Helmet Async',
      'React Dropzone',
      'Lucide React',
      'date-fns',
      'xlsx (SheetJS)',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/centro-dentario-colombo',
    liveUrl: 'https://www.centrodentariocolombo.com/',
    highlights: [
      '🏥 Portal do paciente com dashboard de tratamentos, exames (download) e faturas',
      '🔐 Autenticação híbrida: Clerk (pacientes com Google OAuth) + verificação por ID da clínica',
      '👨‍⚕️ Painel admin: CRUD de pacientes com tabelas ordenáveis, busca e input masking (NIF, telefone PT)',
      '🌍 Sistema bilíngue PT/EN completo com LanguageContext e arquivos de locale separados',
      '📋 Gestão de médicos, tratamentos, exames e faturas com formulários tipados',
      '📤 Upload de exames via drag-and-drop (React Dropzone) armazenados no Cloudinary',
      '📊 Exportação de dados para Excel (.xlsx) via SheetJS',
      '🍪 Cookie consent GDPR com controle granular por categoria (necessários, analytics, marketing)',
      '🔄 TanStack React Query para todo data fetching — cache, loading states e refetch automático',
      '📝 TypeScript end-to-end: interfaces tipadas em /types, serviços API tipados, props tipadas',
      '🔍 SEO com JSON-LD (LocalBusiness, MedicalOrganization, FAQPage) e NoIndexSEO para áreas privadas',
      '📄 Páginas legais: Política de Privacidade e Política de Cookies (obrigatórias na UE)',
    ],
  },
  {
    id: 3,
    title: 'FollowerScan — Análise de Seguidores Instagram com SaaS',
    description:
      'Aplicação web que analisa exports do Instagram para identificar quem não te segue de volta, detectar bloqueios e rastrear mudanças — processamento 100% no navegador com modelo freemium via Clerk e Stripe',
    longDescription:
      'Ferramenta SaaS que analisa os dados exportados do Instagram para identificar quem não segue de volta, detectar possíveis bloqueios e rastrear mudanças de seguidores ao longo do tempo. O diferencial principal é que todo o processamento acontece no navegador — o servidor nunca vê os dados do Instagram. O parser TypeScript processa 12+ tipos de arquivos JSON do export do Instagram (seguidores, seguindo, close friends, bloqueados, unfollows recentes, solicitações pendentes, etc.), faz cross-reference para análise de relacionamentos e tem um algoritmo de detecção de bloqueios com 60-90% de precisão. O modelo SaaS usa Clerk para autenticação e Stripe para assinaturas — usuários free acessam análise básica, usuários pagos desbloqueiam o dashboard completo. Relatórios podem ser exportados em PDF gerado client-side com jsPDF.',
    image: '/follower-tumb.png',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 3',
      'Framer Motion',
      'Radix UI',
      'Clerk',
      'Stripe',
      'JSZip',
      'jsPDF',
      'jspdf-autotable',
      'React Dropzone',
      'Recharts',
      'class-variance-authority',
      'tailwind-merge',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/followerscan',
    liveUrl: 'https://www.followerscan.com/',
    highlights: [
      '🔐 Processamento 100% client-side — dados do Instagram nunca tocam o servidor',
      '🔍 Parser TypeScript que processa 12+ tipos de arquivos JSON do export do Instagram',
      '🚫 Detector de bloqueios com algoritmo baseado em múltiplos data points (60-90% precisão)',
      '💰 Modelo SaaS freemium: análise básica grátis, dashboard completo por assinatura',
      '🔑 Autenticação via Clerk (email/password, Google OAuth) com rotas protegidas',
      '💳 Stripe Checkout Sessions + webhooks para gestão de assinaturas',
      '📊 Dashboard com estatísticas detalhadas e visualizações via Recharts',
      '📄 Exportação de relatórios em PDF gerados no navegador (jsPDF + autotable)',
      '📦 Upload e extração de ZIP direto no browser via JSZip',
      '⚡ Categorização: VIPs, Red Flags, mutual followers, unfollows recentes',
      '🔄 Histórico de análises em localStorage para comparação temporal',
      '📱 UI com Radix UI primitives (Dialog, Progress, Tabs, Toast) + Framer Motion',
      '📋 Páginas legais: Privacy Policy, Terms, Cookies, GDPR, FAQ',
      '🗺️ Sitemap e robots.txt dinâmicos via Next.js',
    ],
  },
  {
    id: 4,
    title: 'Pedrazzoli Digital — Landing Page de Conversão',
    description:
      'Landing page para a minha agência de desenvolvimento web focada no mercado brasileiro, com conversão contextual via WhatsApp, dark mode, scroll animations e Tailwind CSS v4',
    longDescription:
      'Landing page da minha marca freelance de desenvolvimento web, targeting pequenos e médios empresários brasileiros. Cada seção do site funil para uma mensagem contextual no WhatsApp com o interesse do visitante já pré-preenchido — se o visitante está vendo o plano "E-commerce", a mensagem já menciona esse plano e preço. O site tem 12 seções: Hero, tipos de negócio que atendo, features incluídas, processo de trabalho, portfólio real, 3 planos de preço + manutenção mensal, tech stack, depoimentos, sobre mim, FAQ, mapa Brasil/Portugal e CTA final. Todo o conteúdo está separado dos componentes em arquivos de dados. Projeto onde experimentei Tailwind CSS v4 com @theme directive, cores oklch e plugin Vite ao invés de PostCSS. Dark/light mode com 3 fontes de verdade (toggle manual, localStorage, prefers-color-scheme). Scroll animations com IntersectionObserver customizado.',
    image: '/seo-tumb.png',
    technologies: [
      'React 19',
      'Vite 7',
      'Tailwind CSS v4',
      'Framer Motion',
      'React Router 7',
      'Lucide React',
      'React Hot Toast',
    ],
    category: 'Frontend',
    featured: true,
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/pedrazzoli-digital',
    liveUrl: 'https://pedrazzolidigital.com/',
    highlights: [
      '💬 Conversão contextual: cada CTA gera URL WhatsApp com mensagem pré-preenchida baseada na seção/plano',
      '📁 Separação total conteúdo/componente — todo texto em /data, componentes só renderizam',
      '🌗 Dark mode completo com 3 fontes: toggle manual → localStorage → prefers-color-scheme',
      '✨ Scroll animations com IntersectionObserver customizado (useInView hook) — CSS-based, não JS-driven',
      '🎨 Tailwind CSS v4: @theme directive, cores oklch, plugin Vite ao invés de PostCSS',
      '🔤 Tipografia: Plus Jakarta Sans (body) + Instrument Serif (headings) — evita o look "AI-generated"',
      '💼 12 tipos de negócio atendidos, 12 features incluídas, 3 planos de preço + manutenção',
      '🗂️ Portfólio com projetos reais e processo de trabalho step-by-step',
      '🌍 WorldMap visual mostrando cobertura Brasil + Portugal',
      '🍪 Cookie consent GDPR com CookieProvider',
      '🔍 SEO com meta tags dinâmicas via manipulação DOM direta (sem react-helmet)',
      '📱 Design responsivo com navbar blur-on-scroll e menu fullscreen mobile',
    ],
  },
  {
    id: 5,
    title: 'Street Paint — Oficina com Orçamento Visual Interativo',
    description:
      'Website para oficina de chapa e pintura em Sintra com sistema inovador de orçamento interativo via SVG — o cliente seleciona peças danificadas no diagrama do veículo e recebe estimativa instantânea',
    longDescription:
      'Website que construí para uma oficina de reparação automóvel real em Sintra, Portugal, com mais de 15 anos de experiência. O destaque técnico é um estimador de orçamento interativo onde os clientes selecionam o tipo de veículo (6 opções: sport, hatchback, sedan, SUV, van, pickup) e clicam nas peças danificadas diretamente num diagrama SVG do veículo. Cada peça tem uma faixa de preço e o total atualiza em tempo real. O orçamento é enviado diretamente para o WhatsApp da oficina com todos os detalhes. Esta abordagem reduziu as chamadas de "quanto custa?" e gerou leads pré-qualificados. O site também funciona em português e espanhol (a oficina atende muitos clientes hispanófonos na zona de Sintra). Stack deliberadamente lean — sem framework CSS, todo CSS customizado por componente para atender requisitos visuais específicos da marca.',
    image: '/oficina-tumb.png',
    technologies: [
      'React 18',
      'Vite 5',
      'React Router 6',
      'EmailJS',
      'CSS3 Custom',
      'JavaScript ES6+',
      'SVG Interativo',
      'WhatsApp Business API',
      'Node.js',
      'Express',
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/street-paint',
    liveUrl: 'https://streetpaint.pt/',
    highlights: [
      '🚗 Orçamento interativo: seleção de 6 tipos de veículo → clique em peças danificadas no SVG → total em tempo real',
      '🎯 SVG hotspots com path definitions separados por tipo de veículo, com hover states e seleção visual',
      '📱 Resumo do orçamento enviado direto para WhatsApp da oficina com um toque',
      '🌐 Bilíngue PT/ES com LanguageContext e arquivo de tradução por componente (13 arquivos)',
      '⭐ 19 avaliações reais do Google (4.9/5.0) exibidas em carrossel',
      '🕒 Indicador de Aberto/Fechado em tempo real baseado no dia e horário atual',
      '📞 Botões flutuantes WhatsApp + click-to-call — elementos de maior conversão do site',
      '🎨 CSS 100% customizado por componente (sem framework) para atender design específico da marca',
      '🍪 Cookie consent GDPR com estado persistente',
      '🔍 Sitemap gerado no build (postbuild script) + meta tags e Open Graph por página',
      '📱 Design responsivo Mobile-First com CSS Grid e Flexbox',
    ],
  },
  {
    id: 6,
    title: 'Go Portugal Tours — Website de Reservas com Preço Dinâmico',
    description:
      'Website de reservas para serviço de tours privados em Portugal com 24 tours, preços dinâmicos por número de passageiros, formulário validado com Zod e suporte bilíngue PT/EN',
    longDescription:
      'Website de reservas para uma empresa de tours privados e transporte turístico baseada em Oeiras, Portugal. O site apresenta 24 tours pelo país (transfers aeroporto, day trips a Sintra, Fátima, Porto, Algarve, regiões vinícolas) com preços dinâmicos que mudam baseado no número de passageiros (1-2, 3-4, 5-6, 7-8). Os tours são data-driven — adicionar um novo tour é só adicionar um objeto ao arquivo de dados, a página é gerada automaticamente via rotas dinâmicas. Conteúdo bilíngue PT/EN com arquivos de dados separados por idioma (não apenas labels traduzidos, mas copy de marketing diferente para cada tour). Formulário de reserva com React Hook Form + validação Zod em tempo real. UI construída com Radix UI primitives (Accordion, Dialog, Select, Toast) estilizados com CVA e tailwind-merge.',
    image: '/goportugaltumb.png',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS 3',
      'Framer Motion',
      'Radix UI',
      'React Hook Form',
      'Zod',
      '@hookform/resolvers',
      'EmailJS',
      'next-intl',
      'Swiper',
      'Lucide React',
      'class-variance-authority',
      'tailwind-merge',
    ],
    category: 'Full Stack',
    featured: false,
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/go-portugal-tours',
    liveUrl: 'https://www.goportugaltours.com/',
    highlights: [
      '💰 Preço dinâmico por grupo: cada tour tem 4 faixas de preço (1-2, 3-4, 5-6, 7-8 passageiros)',
      '📄 24 tours data-driven — rotas dinâmicas [slug] geradas automaticamente a partir de arquivos de dados',
      '🌍 Bilíngue PT/EN com arquivos de dados separados (copy de marketing diferente, não só tradução)',
      '📝 Formulário de reserva com React Hook Form + Zod: validação real-time, data futura, email, passageiros',
      '🎯 Script de validação de rotas no build (validate-routes.js) — verifica slugs e links internos',
      '🧩 UI com Radix UI primitives: Accordion (FAQ), Dialog (preview), Select, Toast + CVA variants',
      '💬 WhatsApp flutuante com mensagem pré-preenchida incluindo nome do tour',
      '📧 Submissão de reservas via EmailJS direto para o email do cliente',
      '🗺️ Breadcrumbs de navegação em páginas de detalhe do tour',
      '📱 MobileFix component para correções de viewport em dispositivos móveis',
    ],
  },
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectById = (id: number) => {
  return projects.find((project) => project.id === id);
};