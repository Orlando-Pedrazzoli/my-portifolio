import type { Language } from '@/lib/translations';
import type { BilingualText } from './experience';

export interface Project {
  id: number;
  title: string;
  description: BilingualText;
  longDescription?: BilingualText;
  image: string;
  technologies: string[];
  category: 'AI/ML' | 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile';
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  highlights?: BilingualText[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Elite Surfing Brasil — E-commerce Full Stack',
    description: {
      pt: 'Plataforma e-commerce completa para o mercado brasileiro com pagamentos via Stripe, PIX e Boleto, integração de frete Melhor Envio, painel administrativo com vendas diretas e CRM',
      en: 'Full e-commerce platform for the Brazilian market with Stripe, PIX and Boleto payments, Melhor Envio shipping integration, admin panel with direct sales and CRM',
    },
    longDescription: {
      pt: 'Plataforma e-commerce que construí do zero para o mercado brasileiro de surf. A loja processa pagamentos reais (cartão de crédito via Stripe, boleto bancário e PIX com fluxo manual), calcula frete em tempo real via Melhor Envio comparando múltiplas transportadoras (Correios, Jadlog, Azul Cargo), e exibe parcelamento em cada produto. O projeto conta com mais de 40 componentes, 12 arquivos de rotas API, painel administrativo com sistema de vendas diretas (romaneio), blog com conteúdo WSL para SEO orgânico, CRM básico para gestão de clientes, sistema de reviews verificados pós-compra, carrinho persistente com sincronização servidor/localStorage, checkout como convidado, cupons promocionais e todas as páginas institucionais exigidas pelo Código de Defesa do Consumidor. Monorepo com frontend React e backend Express, ambos deployados no Vercel.',
      en: 'E-commerce platform I built from scratch for the Brazilian surf market. The store processes real payments (credit card via Stripe, boleto bancário and PIX with manual flow), calculates shipping in real time via Melhor Envio comparing multiple carriers (Correios, Jadlog, Azul Cargo), and displays installment options per product. The project has over 40 components, 12 API route files, admin panel with direct sales system (romaneio), blog with WSL content for organic SEO, basic CRM for client management, verified post-purchase reviews, persistent cart with server/localStorage sync, guest checkout, promo coupons and all institutional pages required by the Brazilian Consumer Protection Code. Monorepo with React frontend and Express backend, both deployed on Vercel.',
    },
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
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/elite-surfing-brasil',
    liveUrl: 'https://www.elitesurfing.com.br/',
    highlights: [
      {
        pt: '3 métodos de pagamento: Stripe (cartão com parcelamento), Boleto bancário e PIX (fluxo manual com QR code)',
        en: '3 payment methods: Stripe (card with installments), Boleto bancário and PIX (manual flow with QR code)',
      },
      {
        pt: 'Integração Melhor Envio com cálculo de frete por CEP comparando Correios, Jadlog e Azul Cargo',
        en: 'Melhor Envio integration with shipping calculation by ZIP code comparing Correios, Jadlog and Azul Cargo',
      },
      {
        pt: 'Carrinho persistente com sincronização servidor/localStorage e merge no login',
        en: 'Persistent cart with server/localStorage sync and merge on login',
      },
      {
        pt: 'Reviews verificados vinculados a pedidos reais — só compradores podem avaliar',
        en: 'Verified reviews linked to real orders — only buyers can review',
      },
      {
        pt: 'Painel admin com gestão de produtos, pedidos, geração de etiquetas e Vendas Diretas (romaneio)',
        en: 'Admin panel with product management, orders, label generation and Direct Sales (romaneio)',
      },
      {
        pt: 'CRM básico para gestão de clientes fora do sistema de cadastro do site',
        en: 'Basic CRM for client management outside the site registration system',
      },
      {
        pt: 'Blog com rankings WSL, calendário de eventos e histórico de campeões para tráfego orgânico',
        en: 'Blog with WSL rankings, event calendar and champions history for organic traffic',
      },
      {
        pt: 'Cupons promocionais com validação server-side e frete grátis por valor mínimo',
        en: 'Promo coupons with server-side validation and free shipping by minimum value',
      },
      {
        pt: 'Checkout como convidado — compra sem necessidade de criar conta',
        en: 'Guest checkout — purchase without account creation',
      },
      {
        pt: 'Emails transacionais via Resend (confirmação de pedido e atualização de status)',
        en: 'Transactional emails via Resend (order confirmation and status updates)',
      },
      {
        pt: 'JWT em cookies httpOnly com middleware separado para clientes e admin',
        en: 'JWT in httpOnly cookies with separate middleware for clients and admin',
      },
      {
        pt: 'SEO com JSON-LD (Product, Organization, BreadcrumbList), sitemap.xml e Google Search Console',
        en: 'SEO with JSON-LD (Product, Organization, BreadcrumbList), sitemap.xml and Google Search Console',
      },
      {
        pt: 'Páginas institucionais: FAQ, Política de Privacidade, Termos de Uso, Política de Reembolso',
        en: 'Institutional pages: FAQ, Privacy Policy, Terms of Use, Refund Policy',
      },
      {
        pt: 'Galeria de produtos com zoom modal via Cloudinary CDN',
        en: 'Product gallery with modal zoom via Cloudinary CDN',
      },
      {
        pt: 'WhatsApp Business flutuante para suporte ao cliente',
        en: 'Floating WhatsApp Business for customer support',
      },
    ],
  },
  {
    id: 2,
    title: 'Centro Dentário Colombo — Website com Portal do Paciente',
    description: {
      pt: 'Website profissional e sistema de gestão para clínica dentária real em Lisboa com portal do paciente, painel administrativo, autenticação Clerk e compliance GDPR',
      en: 'Professional website and management system for a real dental clinic in Lisbon with patient portal, admin panel, Clerk authentication and GDPR compliance',
    },
    longDescription: {
      pt: 'Website e sistema de gestão completo para uma clínica dentária real no Centro Comercial Colombo, Lisboa. O que começou como uma landing page simples evoluiu para uma aplicação completa com painel administrativo onde a equipa da clínica gere prontuários sem conhecimento técnico, portal do paciente onde clientes visualizam tratamentos, exames e faturas, suporte bilíngue PT/EN (a clínica atende muitos turistas), e sistema de cookie consent GDPR. Todo o projeto é TypeScript — o primeiro onde apliquei tipagem end-to-end, desde os serviços API com Axios até os componentes. Autenticação híbrida com Clerk para pacientes e credenciais por variável de ambiente para admin. Data fetching com TanStack React Query eliminando bugs de stale data e race conditions.',
      en: 'Full website and management system for a real dental clinic at Colombo Shopping Center, Lisbon. What started as a simple landing page evolved into a complete application with an admin panel where clinic staff manages records without technical knowledge, a patient portal where clients view treatments, exams and invoices, bilingual PT/EN support (the clinic serves many tourists), and a GDPR cookie consent system. The entire project is TypeScript — the first where I applied end-to-end typing, from API services with Axios to components. Hybrid authentication with Clerk for patients and env-variable credentials for admin. Data fetching with TanStack React Query eliminating stale data bugs and race conditions.',
    },
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
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/centro-dentario-colombo',
    liveUrl: 'https://www.centrodentariocolombo.com/',
    highlights: [
      {
        pt: 'Portal do paciente com dashboard de tratamentos, exames (download) e faturas',
        en: 'Patient portal with treatments dashboard, exams (download) and invoices',
      },
      {
        pt: 'Autenticação híbrida: Clerk (pacientes com Google OAuth) + verificação por ID da clínica',
        en: 'Hybrid authentication: Clerk (patients with Google OAuth) + clinic ID verification',
      },
      {
        pt: 'Painel admin: CRUD de pacientes com tabelas ordenáveis, busca e input masking (NIF, telefone PT)',
        en: 'Admin panel: patient CRUD with sortable tables, search and input masking (NIF, PT phone)',
      },
      {
        pt: 'Sistema bilíngue PT/EN completo com LanguageContext e arquivos de locale separados',
        en: 'Full bilingual PT/EN system with LanguageContext and separate locale files',
      },
      {
        pt: 'Gestão de médicos, tratamentos, exames e faturas com formulários tipados',
        en: 'Doctor, treatment, exam and invoice management with typed forms',
      },
      {
        pt: 'Upload de exames via drag-and-drop (React Dropzone) armazenados no Cloudinary',
        en: 'Exam upload via drag-and-drop (React Dropzone) stored on Cloudinary',
      },
      {
        pt: 'Exportação de dados para Excel (.xlsx) via SheetJS',
        en: 'Data export to Excel (.xlsx) via SheetJS',
      },
      {
        pt: 'Cookie consent GDPR com controle granular por categoria (necessários, analytics, marketing)',
        en: 'GDPR cookie consent with granular category control (necessary, analytics, marketing)',
      },
      {
        pt: 'TanStack React Query para todo data fetching — cache, loading states e refetch automático',
        en: 'TanStack React Query for all data fetching — cache, loading states and automatic refetch',
      },
      {
        pt: 'TypeScript end-to-end: interfaces tipadas em /types, serviços API tipados, props tipadas',
        en: 'End-to-end TypeScript: typed interfaces in /types, typed API services, typed props',
      },
      {
        pt: 'SEO com JSON-LD (LocalBusiness, MedicalOrganization, FAQPage) e NoIndexSEO para áreas privadas',
        en: 'SEO with JSON-LD (LocalBusiness, MedicalOrganization, FAQPage) and NoIndexSEO for private areas',
      },
      {
        pt: 'Páginas legais: Política de Privacidade e Política de Cookies (obrigatórias na UE)',
        en: 'Legal pages: Privacy Policy and Cookie Policy (mandatory in the EU)',
      },
    ],
  },
  {
    id: 3,
    title: 'FollowerScan — Instagram Follower Analysis SaaS',
    description: {
      pt: 'Aplicação web que analisa exports do Instagram para identificar quem não te segue de volta, detectar bloqueios e rastrear mudanças — processamento 100% no navegador com modelo freemium via Clerk e Stripe',
      en: "Web app that analyzes Instagram exports to identify who doesn't follow you back, detect blocks and track changes — 100% browser-side processing with freemium model via Clerk and Stripe",
    },
    longDescription: {
      pt: 'Ferramenta SaaS que analisa os dados exportados do Instagram para identificar quem não segue de volta, detectar possíveis bloqueios e rastrear mudanças de seguidores ao longo do tempo. O diferencial principal é que todo o processamento acontece no navegador — o servidor nunca vê os dados do Instagram. O parser TypeScript processa 12+ tipos de arquivos JSON do export do Instagram (seguidores, seguindo, close friends, bloqueados, unfollows recentes, solicitações pendentes, etc.), faz cross-reference para análise de relacionamentos e tem um algoritmo de detecção de bloqueios com 60-90% de precisão. O modelo SaaS usa Clerk para autenticação e Stripe para assinaturas — usuários free acessam análise básica, usuários pagos desbloqueiam o dashboard completo. Relatórios podem ser exportados em PDF gerado client-side com jsPDF.',
      en: "SaaS tool that analyzes Instagram exported data to identify who doesn't follow back, detect potential blocks and track follower changes over time. The main differentiator is that all processing happens in the browser — the server never sees Instagram data. The TypeScript parser processes 12+ JSON file types from Instagram export (followers, following, close friends, blocked, recent unfollows, pending requests, etc.), cross-references for relationship analysis and has a block detection algorithm with 60-90% accuracy. The SaaS model uses Clerk for authentication and Stripe for subscriptions — free users get basic analysis, paid users unlock the full dashboard. Reports can be exported as client-side generated PDFs with jsPDF.",
    },
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
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/followerscan',
    liveUrl: 'https://www.followerscan.com/',
    highlights: [
      {
        pt: 'Processamento 100% client-side — dados do Instagram nunca tocam o servidor',
        en: '100% client-side processing — Instagram data never touches the server',
      },
      {
        pt: 'Parser TypeScript que processa 12+ tipos de arquivos JSON do export do Instagram',
        en: 'TypeScript parser that processes 12+ JSON file types from Instagram export',
      },
      {
        pt: 'Detector de bloqueios com algoritmo baseado em múltiplos data points (60-90% precisão)',
        en: 'Block detector with algorithm based on multiple data points (60-90% accuracy)',
      },
      {
        pt: 'Modelo SaaS freemium: análise básica grátis, dashboard completo por assinatura',
        en: 'Freemium SaaS model: free basic analysis, full dashboard by subscription',
      },
      {
        pt: 'Autenticação via Clerk (email/password, Google OAuth) com rotas protegidas',
        en: 'Clerk authentication (email/password, Google OAuth) with protected routes',
      },
      {
        pt: 'Stripe Checkout Sessions + webhooks para gestão de assinaturas',
        en: 'Stripe Checkout Sessions + webhooks for subscription management',
      },
      {
        pt: 'Dashboard com estatísticas detalhadas e visualizações via Recharts',
        en: 'Dashboard with detailed statistics and Recharts visualizations',
      },
      {
        pt: 'Exportação de relatórios em PDF gerados no navegador (jsPDF + autotable)',
        en: 'PDF report export generated in browser (jsPDF + autotable)',
      },
      {
        pt: 'Upload e extração de ZIP direto no browser via JSZip',
        en: 'ZIP upload and extraction directly in browser via JSZip',
      },
      {
        pt: 'Categorização: VIPs, Red Flags, mutual followers, unfollows recentes',
        en: 'Categorization: VIPs, Red Flags, mutual followers, recent unfollows',
      },
      {
        pt: 'Histórico de análises em localStorage para comparação temporal',
        en: 'Analysis history in localStorage for temporal comparison',
      },
      {
        pt: 'UI com Radix UI primitives (Dialog, Progress, Tabs, Toast) + Framer Motion',
        en: 'UI with Radix UI primitives (Dialog, Progress, Tabs, Toast) + Framer Motion',
      },
    ],
  },
  {
    id: 4,
    title: 'Pedrazzoli Digital — Conversion Landing Page',
    description: {
      pt: 'Landing page da minha agência de desenvolvimento web focada no mercado brasileiro, com conversão contextual via WhatsApp, dark mode, scroll animations e Tailwind CSS v4',
      en: 'Landing page for my web development agency targeting the Brazilian market, with contextual WhatsApp conversion, dark mode, scroll animations and Tailwind CSS v4',
    },
    longDescription: {
      pt: 'Landing page da minha marca freelance de desenvolvimento web, targeting pequenos e médios empresários brasileiros. Cada seção do site funil para uma mensagem contextual no WhatsApp com o interesse do visitante já pré-preenchido — se o visitante está vendo o plano "E-commerce", a mensagem já menciona esse plano e preço. O site tem 12 seções: Hero, tipos de negócio que atendo, features incluídas, processo de trabalho, portfólio real, 3 planos de preço + manutenção mensal, tech stack, depoimentos, sobre mim, FAQ, mapa Brasil/Portugal e CTA final. Todo o conteúdo está separado dos componentes em arquivos de dados. Projeto onde experimentei Tailwind CSS v4 com @theme directive, cores oklch e plugin Vite ao invés de PostCSS. Dark/light mode com 3 fontes de verdade (toggle manual, localStorage, prefers-color-scheme). Scroll animations com IntersectionObserver customizado.',
      en: 'Landing page for my freelance web development brand, targeting small and medium Brazilian business owners. Each section funnels into a contextual WhatsApp message with the visitor\'s interest pre-filled — if the visitor is viewing the "E-commerce" plan, the message already mentions that plan and price. The site has 12 sections: Hero, business types served, included features, work process, real portfolio, 3 pricing plans + monthly maintenance, tech stack, testimonials, about me, FAQ, Brazil/Portugal map and final CTA. All content is separated from components in data files. Project where I experimented with Tailwind CSS v4 with @theme directive, oklch colors and Vite plugin instead of PostCSS. Dark/light mode with 3 sources of truth (manual toggle, localStorage, prefers-color-scheme). Scroll animations with custom IntersectionObserver.',
    },
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
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/pedrazzoli-digital',
    liveUrl: 'https://pedrazzolidigital.com/',
    highlights: [
      {
        pt: 'Conversão contextual: cada CTA gera URL WhatsApp com mensagem pré-preenchida baseada na seção/plano',
        en: 'Contextual conversion: each CTA generates WhatsApp URL with pre-filled message based on section/plan',
      },
      {
        pt: 'Separação total conteúdo/componente — todo texto em /data, componentes só renderizam',
        en: 'Full content/component separation — all text in /data, components only render',
      },
      {
        pt: 'Dark mode completo com 3 fontes: toggle manual, localStorage, prefers-color-scheme',
        en: 'Full dark mode with 3 sources: manual toggle, localStorage, prefers-color-scheme',
      },
      {
        pt: 'Scroll animations com IntersectionObserver customizado (useInView hook) — CSS-based',
        en: 'Scroll animations with custom IntersectionObserver (useInView hook) — CSS-based',
      },
      {
        pt: 'Tailwind CSS v4: @theme directive, cores oklch, plugin Vite ao invés de PostCSS',
        en: 'Tailwind CSS v4: @theme directive, oklch colors, Vite plugin instead of PostCSS',
      },
      {
        pt: 'Tipografia: Plus Jakarta Sans (body) + Instrument Serif (headings)',
        en: 'Typography: Plus Jakarta Sans (body) + Instrument Serif (headings)',
      },
      {
        pt: '12 tipos de negócio atendidos, 12 features incluídas, 3 planos de preço + manutenção',
        en: '12 business types served, 12 included features, 3 pricing plans + maintenance',
      },
      {
        pt: 'Portfólio com projetos reais e processo de trabalho step-by-step',
        en: 'Portfolio with real projects and step-by-step work process',
      },
      {
        pt: 'WorldMap visual mostrando cobertura Brasil + Portugal',
        en: 'Visual WorldMap showing Brazil + Portugal coverage',
      },
      {
        pt: 'Cookie consent GDPR com CookieProvider',
        en: 'GDPR cookie consent with CookieProvider',
      },
      {
        pt: 'SEO com meta tags dinâmicas via manipulação DOM direta (sem react-helmet)',
        en: 'SEO with dynamic meta tags via direct DOM manipulation (no react-helmet)',
      },
    ],
  },
  {
    id: 5,
    title: 'Street Paint — Interactive Visual Budget Estimator',
    description: {
      pt: 'Website para oficina de chapa e pintura em Sintra com sistema inovador de orçamento interativo via SVG — o cliente seleciona peças danificadas no diagrama do veículo e recebe estimativa instantânea',
      en: 'Website for an auto body shop in Sintra with an innovative interactive SVG budget system — clients select damaged parts on the vehicle diagram and get an instant estimate',
    },
    longDescription: {
      pt: 'Website que construí para uma oficina de reparação automóvel real em Sintra, Portugal, com mais de 15 anos de experiência. O destaque técnico é um estimador de orçamento interativo onde os clientes selecionam o tipo de veículo (6 opções: sport, hatchback, sedan, SUV, van, pickup) e clicam nas peças danificadas diretamente num diagrama SVG do veículo. Cada peça tem uma faixa de preço e o total atualiza em tempo real. O orçamento é enviado diretamente para o WhatsApp da oficina com todos os detalhes. Esta abordagem reduziu as chamadas de "quanto custa?" e gerou leads pré-qualificados. O site também funciona em português e espanhol (a oficina atende muitos clientes hispanófonos na zona de Sintra). Stack deliberadamente lean — sem framework CSS, todo CSS customizado por componente para atender requisitos visuais específicos da marca.',
      en: 'Website I built for a real auto body repair shop in Sintra, Portugal, with over 15 years of experience. The technical highlight is an interactive budget estimator where clients select the vehicle type (6 options: sport, hatchback, sedan, SUV, van, pickup) and click on damaged parts directly on an SVG vehicle diagram. Each part has a price range and the total updates in real time. The budget is sent directly to the shop\'s WhatsApp with all details. This approach reduced "how much does it cost?" calls and generated pre-qualified leads. The site also works in Portuguese and Spanish (the shop serves many Spanish-speaking clients in the Sintra area). Deliberately lean stack — no CSS framework, all custom CSS per component to meet brand-specific visual requirements.',
    },
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
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/street-paint',
    liveUrl: 'https://streetpaint.pt/',
    highlights: [
      {
        pt: 'Orçamento interativo: seleção de 6 tipos de veículo, clique em peças danificadas no SVG, total em tempo real',
        en: 'Interactive budget: 6 vehicle types, click damaged parts on SVG, real-time total',
      },
      {
        pt: 'SVG hotspots com path definitions separados por tipo de veículo, com hover states e seleção visual',
        en: 'SVG hotspots with path definitions per vehicle type, with hover states and visual selection',
      },
      {
        pt: 'Resumo do orçamento enviado direto para WhatsApp da oficina com um toque',
        en: "Budget summary sent directly to shop's WhatsApp with one tap",
      },
      {
        pt: 'Bilíngue PT/ES com LanguageContext e arquivo de tradução por componente (13 arquivos)',
        en: 'Bilingual PT/ES with LanguageContext and translation file per component (13 files)',
      },
      {
        pt: '19 avaliações reais do Google (4.9/5.0) exibidas em carrossel',
        en: '19 real Google reviews (4.9/5.0) displayed in carousel',
      },
      {
        pt: 'Indicador de Aberto/Fechado em tempo real baseado no dia e horário atual',
        en: 'Real-time Open/Closed indicator based on current day and time',
      },
      {
        pt: 'Botões flutuantes WhatsApp + click-to-call — elementos de maior conversão do site',
        en: 'Floating WhatsApp + click-to-call buttons — highest conversion elements on the site',
      },
      {
        pt: 'CSS 100% customizado por componente (sem framework) para atender design específico da marca',
        en: '100% custom CSS per component (no framework) to meet brand-specific design',
      },
      {
        pt: 'Cookie consent GDPR com estado persistente',
        en: 'GDPR cookie consent with persistent state',
      },
      {
        pt: 'Sitemap gerado no build (postbuild script) + meta tags e Open Graph por página',
        en: 'Build-time generated sitemap (postbuild script) + meta tags and Open Graph per page',
      },
    ],
  },
  {
    id: 6,
    title: 'Go Portugal Tours — Dynamic Pricing Bookings',
    description: {
      pt: 'Website de reservas para serviço de tours privados em Portugal com 24 tours, preços dinâmicos por número de passageiros, formulário validado com Zod e suporte bilíngue PT/EN',
      en: 'Booking website for a private tour service in Portugal with 24 tours, dynamic pricing by passenger count, Zod-validated forms and bilingual PT/EN support',
    },
    longDescription: {
      pt: 'Website de reservas para uma empresa de tours privados e transporte turístico baseada em Oeiras, Portugal. O site apresenta 24 tours pelo país (transfers aeroporto, day trips a Sintra, Fátima, Porto, Algarve, regiões vinícolas) com preços dinâmicos que mudam baseado no número de passageiros (1-2, 3-4, 5-6, 7-8). Os tours são data-driven — adicionar um novo tour é só adicionar um objeto ao arquivo de dados, a página é gerada automaticamente via rotas dinâmicas. Conteúdo bilíngue PT/EN com arquivos de dados separados por idioma (não apenas labels traduzidos, mas copy de marketing diferente para cada tour). Formulário de reserva com React Hook Form + validação Zod em tempo real. UI construída com Radix UI primitives (Accordion, Dialog, Select, Toast) estilizados com CVA e tailwind-merge.',
      en: 'Booking website for a private tour and tourist transport company based in Oeiras, Portugal. The site features 24 tours across the country (airport transfers, day trips to Sintra, Fátima, Porto, Algarve, wine regions) with dynamic prices that change based on passenger count (1-2, 3-4, 5-6, 7-8). Tours are data-driven — adding a new tour means just adding an object to the data file, the page is automatically generated via dynamic routes. Bilingual PT/EN content with separate data files per language (not just translated labels, but different marketing copy for each tour). Booking form with React Hook Form + real-time Zod validation. UI built with Radix UI primitives (Accordion, Dialog, Select, Toast) styled with CVA and tailwind-merge.',
    },
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
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/go-portugal-tours',
    liveUrl: 'https://www.goportugaltours.com/',
    highlights: [
      {
        pt: 'Preço dinâmico por grupo: cada tour tem 4 faixas de preço (1-2, 3-4, 5-6, 7-8 passageiros)',
        en: 'Dynamic group pricing: each tour has 4 price tiers (1-2, 3-4, 5-6, 7-8 passengers)',
      },
      {
        pt: '24 tours data-driven — rotas dinâmicas [slug] geradas automaticamente a partir de arquivos de dados',
        en: '24 data-driven tours — dynamic [slug] routes auto-generated from data files',
      },
      {
        pt: 'Bilíngue PT/EN com arquivos de dados separados (copy de marketing diferente, não só tradução)',
        en: 'Bilingual PT/EN with separate data files (different marketing copy, not just translation)',
      },
      {
        pt: 'Formulário de reserva com React Hook Form + Zod: validação real-time, data futura, email, passageiros',
        en: 'Booking form with React Hook Form + Zod: real-time validation, future date, email, passengers',
      },
      {
        pt: 'Script de validação de rotas no build (validate-routes.js) — verifica slugs e links internos',
        en: 'Build-time route validation script (validate-routes.js) — checks slugs and internal links',
      },
      {
        pt: 'UI com Radix UI primitives: Accordion (FAQ), Dialog (preview), Select, Toast + CVA variants',
        en: 'UI with Radix UI primitives: Accordion (FAQ), Dialog (preview), Select, Toast + CVA variants',
      },
      {
        pt: 'WhatsApp flutuante com mensagem pré-preenchida incluindo nome do tour',
        en: 'Floating WhatsApp with pre-filled message including tour name',
      },
      {
        pt: 'Submissão de reservas via EmailJS direto para o email do cliente',
        en: 'Booking submission via EmailJS directly to client email',
      },
    ],
  },
  {
    id: 7,
    title: 'InstaRadar — Instagram Analytics SaaS',
    description: {
      pt: 'Plataforma SaaS de analytics e tracking do Instagram. Tracker de atividade, visualizador anonimo, downloader de conteudo HD, localizador de emails. Dashboard com faturacao e relatorios.',
      en: 'Instagram analytics and tracking SaaS. Activity tracker, anonymous viewer, HD content downloader, email finder. Dashboard with billing and reports.',
    },
    longDescription: {
      pt: 'Plataforma SaaS completa para analise e rastreamento do Instagram. Inclui tracker de atividade em tempo real, visualizador anonimo de perfis/stories/highlights, downloader de conteudo em HD (posts, reels, stories, fotos de perfil) e localizador de emails. Dashboard completo do utilizador com gestao de faturacao, relatorios de atividade, contas rastreadas e definicoes. Autenticacao com Better-auth, base de dados com Drizzle ORM e MongoDB, assinaturas com Stripe, globo interativo com Three.js.',
      en: 'Full SaaS platform for Instagram analytics and tracking. Includes real-time activity tracker, anonymous profile/story/highlights viewer, HD content downloader (posts, reels, stories, profile pictures) and email finder. Complete user dashboard with billing management, activity reports, tracked accounts and settings. Authentication with Better-auth, database with Drizzle ORM and MongoDB, subscriptions with Stripe, interactive globe with Three.js.',
    },
    image: '/instaradar-tumb.png',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Better-auth',
      'Stripe',
      'Drizzle ORM',
      'MongoDB',
      'Three.js',
      'Framer Motion',
      'shadcn/ui',
      'Recharts',
      'Embla Carousel',
      'Zustand',
    ],
    category: 'Full Stack',
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/insta-radar',
    liveUrl: 'https://insta-radar.vercel.app/',
    highlights: [
      {
        pt: 'Dashboard completo com faturacao, relatorios, contas rastreadas e definicoes',
        en: 'Full dashboard with billing, reports, tracked accounts and settings',
      },
      {
        pt: 'Autenticacao com Better-auth e assinaturas Stripe com webhooks',
        en: 'Better-auth authentication and Stripe subscriptions with webhooks',
      },
      {
        pt: 'Drizzle ORM para queries otimizadas na base de dados MongoDB',
        en: 'Drizzle ORM for optimized database queries on MongoDB',
      },
      {
        pt: 'Globo interativo Three.js na pagina principal',
        en: 'Interactive Three.js globe on the landing page',
      },
      {
        pt: 'Turbopack dev server para desenvolvimento mais rapido',
        en: 'Turbopack dev server for faster development',
      },
    ],
  },
  {
    id: 8,
    title: 'Ferri Schoedl Advocacia — Law Firm Platform',
    description: {
      pt: 'Website de escritorio de advocacia com loja de livros e plataforma de cursos. Next.js 15, React 19, TypeScript, Tailwind CSS v4. Pagamentos Stripe, tema dark/light customizado, conformidade LGPD.',
      en: 'Law firm website with book store and courses platform. Next.js 15, React 19, TypeScript, Tailwind CSS v4. Stripe payments, custom dark/light theme, LGPD compliance.',
    },
    longDescription: {
      pt: 'Website institucional completo para um escritorio de advocacia em Sao Paulo com areas de atuacao (Criminal, Tribunal do Juri, Improbidade Administrativa, Imobiliario, Civel, Disciplinar), loja de livros juridicos com carrinho de compras e pagamentos Stripe, plataforma de cursos preparatorios, pagina de publicacoes com 10 livros e 23 artigos, FAQ, sistema de tema dark/light customizado, animacoes Framer Motion e conformidade com LGPD.',
      en: 'Complete institutional website for a law firm in Sao Paulo with practice areas (Criminal, Jury Trial, Administrative Misconduct, Real Estate, Civil, Disciplinary), legal book store with cart and Stripe payments, preparatory courses platform, publications page with 10 books and 23 articles, FAQ, custom dark/light theme system, Framer Motion animations and LGPD compliance.',
    },
    image: '/ferri-tumb.png',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Stripe',
      'Framer Motion',
      'Lucide React',
    ],
    category: 'Full Stack',
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/ferri-schoedl',
    highlights: [
      {
        pt: 'Loja de livros juridicos com carrinho e pagamentos Stripe',
        en: 'Legal book store with cart and Stripe payments',
      },
      {
        pt: 'Sistema de tema dark/light customizado com 3 fontes de verdade',
        en: 'Custom dark/light theme system with 3 sources of truth',
      },
      {
        pt: '6 areas de atuacao com paginas detalhadas',
        en: '6 practice areas with detailed pages',
      },
      {
        pt: 'Pagina de publicacoes com 10 livros e 23 artigos',
        en: 'Publications page with 10 books and 23 articles',
      },
      {
        pt: 'Conformidade LGPD com politica de privacidade e termos de uso',
        en: 'LGPD compliance with privacy policy and terms of use',
      },
    ],
  },
  {
    id: 9,
    title: 'B2B Distribuidores — Order Management Platform',
    description: {
      pt: 'Plataforma de gestao de pedidos B2B para distribuidores. Catalogo multi-fornecedor, tabelas de precos customizadas com drag-and-drop, calculadora de margens, exportacao PDF/Excel, painel admin.',
      en: 'B2B order management platform for distributors. Multi-supplier catalog, custom price tables with drag-and-drop, margin calculator, PDF/Excel export, admin panel.',
    },
    longDescription: {
      pt: 'Plataforma de gestao de pedidos para distribuidores onde cada distribuidor acessa a sua dashboard, escolhe fornecedores, faz pedidos, define tabelas de precos com drag-and-drop, acompanha status dos pedidos e exporta dados em PDF e Excel. Painel admin com financeiro e gestao de pedidos. Autenticacao JWT, uploads via Cloudinary, notificacoes por email via Nodemailer.',
      en: 'Order management platform for distributors where each distributor accesses their dashboard, selects suppliers, places orders, defines price tables with drag-and-drop, tracks order status and exports data to PDF and Excel. Admin panel with financials and order management. JWT authentication, Cloudinary uploads, email notifications via Nodemailer.',
    },
    image: '/b2b-tumb.png',
    technologies: [
      'Next.js 14',
      'React 18',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'dnd-kit',
      'PDFKit',
      'SheetJS (xlsx)',
      'JWT',
      'Bcrypt.js',
      'Cloudinary',
      'Nodemailer',
      'Multer',
    ],
    category: 'Full Stack',
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/ecommerce-distribuidores',
    liveUrl: 'https://ecommerce-distribuidores.vercel.app/',
    highlights: [
      {
        pt: 'Tabelas de precos com drag-and-drop via dnd-kit e calculadora de margens',
        en: 'Price tables with drag-and-drop via dnd-kit and margin calculator',
      },
      {
        pt: 'Exportacao de pedidos em PDF (PDFKit) e Excel (SheetJS)',
        en: 'Order export to PDF (PDFKit) and Excel (SheetJS)',
      },
      {
        pt: 'Dashboard do distribuidor com catalogo multi-fornecedor',
        en: 'Distributor dashboard with multi-supplier catalog',
      },
      {
        pt: 'Painel admin com financeiro e gestao de pedidos',
        en: 'Admin panel with financials and order management',
      },
    ],
  },
  {
    id: 10,
    title: "Rana's Twist — Restaurant Management System",
    description: {
      pt: 'Menu digital e sistema de gestao para restaurante indiano. Painel admin com autenticacao, CRUD de pratos, upload de imagens Cloudinary, gerador de QR code, filtros dieteticos, busca fuzzy. Bilingue PT/EN.',
      en: 'Digital menu and restaurant management system for an Indian restaurant. Admin panel with auth, dish CRUD, Cloudinary image upload, QR code generator, dietary filters, fuzzy search. Bilingual PT/EN.',
    },
    longDescription: {
      pt: 'Menu digital completo e sistema de gestao para o restaurante indiano Ranas Twist em Oeiras, Portugal. Inclui painel admin com autenticacao (bcryptjs + JWT), CRUD de pratos com upload de imagens via Cloudinary, gerador de QR code para mesas, sistema de categorias, filtros por dieta (Vegetariano, Vegano, Sem Gluten, Halal, Sem Lactose) e nivel de picancia, busca com Fuse.js, bilingue PT/EN com next-intl, modal de detalhes, tema dark/light, componentes Radix UI e seed scripts.',
      en: 'Complete digital menu and management system for Ranas Twist Indian restaurant in Oeiras, Portugal. Includes admin panel with authentication (bcryptjs + JWT), dish CRUD with Cloudinary image upload, QR code generator for tables, category system, dietary filters (Vegetarian, Vegan, Gluten-free, Halal, Lactose-free) and spice levels, Fuse.js fuzzy search, bilingual PT/EN with next-intl, detail modal, dark/light theme, Radix UI components and seed scripts.',
    },
    image: '/ranas-tumb.png',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Mongoose',
      'Cloudinary',
      'Fuse.js',
      'next-intl',
      'Radix UI',
      'bcryptjs',
      'JWT',
      'QRCode',
    ],
    category: 'Full Stack',
    githubUrl: 'https://github.com/Orlando-Pedrazzoli/ranas-twist',
    highlights: [
      {
        pt: 'Gerador de QR code para mesas do restaurante',
        en: 'QR code generator for restaurant tables',
      },
      {
        pt: 'Filtros por dieta e nivel de picancia',
        en: 'Dietary filters and spice level controls',
      },
      {
        pt: 'Busca fuzzy com Fuse.js para encontrar pratos rapidamente',
        en: 'Fuzzy search with Fuse.js for quick dish finding',
      },
      {
        pt: 'Bilingue PT/EN com next-intl',
        en: 'Bilingual PT/EN with next-intl',
      },
      {
        pt: 'Painel admin com CRUD completo e upload de imagens',
        en: 'Admin panel with full CRUD and image upload',
      },
    ],
  },
];

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects;
};

export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id);
};
