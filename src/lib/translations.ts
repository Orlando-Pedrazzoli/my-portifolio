export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiencia',
      contact: 'Contato',
    },
    hero: {
      badge: 'Full Stack Developer',
      phrases: {
        build: 'Websites e e-commerce para negocios reais.',
        scope: 'Do conceito a producao.',
        location: 'Em Lisboa, disponivel worldwide.',
      },
      description:
        'Construo websites e aplicacoes web para negocios reais. De landing pages a plataformas e-commerce com pagamentos, envios e paineis de gestao.',
      cta: {
        projects: 'Ver Projetos',
        contact: 'Entrar em Contato',
      },
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Mim',
      subtitle:
        'De empreendedor a developer — 15 anos de experiencia em negocios, agora aplicada a construir software',
      heading: 'Da Gestao de Negocios ao Codigo',
      description1:
        'Depois de mais de 15 anos a fundar e gerir empresas no setor de surf — escalando uma marca para R$200k/mes com 16 funcionarios — fiz a transicao para desenvolvimento de software. Completei o bootcamp na Ironhack e desde entao construi mais de 10 projetos em producao para clientes em Portugal e no Brasil.',
      description2:
        'A minha experiencia como fundador e CEO da-me uma perspetiva de negocio que a maioria dos developers nao tem. Entendo o que um cliente precisa, sei gerir prazos e prioridades, e penso no produto como um todo — nao so no codigo.',
      description3:
        'Paralelamente ao freelance na Pedrazzoli Digital, trabalho como Content Operations Analyst na Accenture Portugal. Estou baseado em Lisboa e disponivel para projetos remotos ou hibridos.',
      location: 'Lisboa, Portugal',
      downloadCV: 'Download CV',
      viewExperience: 'Ver Experiencia',
      journey: {
        title: 'O Meu Percurso',
        items: [
          {
            year: '2001-2006',
            title: 'Australia & ISC SA Ltda',
            description:
              'Gap year na Australia, depois fundei a ISC SA — importacao e fabricacao de acessorios de surf no Brasil.',
          },
          {
            year: '2006-2010',
            title: 'Production Manager — PLP',
            description:
              'Gestao de producao para marcas de surf (FCS, Creatures of Leisure, Gorilla Grip). Tripliquei o faturamento no primeiro ano.',
          },
          {
            year: '2010-2023',
            title: 'Founder & CEO — Elite Surfing',
            description:
              'Fundei e escalei marca de acessorios de surf para R$200k/mes com 16 funcionarios.',
          },
          {
            year: '2017-2021',
            title: 'Go Portugal Tours',
            description:
              'Empresa de tours privados e transfers em Lisboa. Encerrada durante a pandemia.',
          },
          {
            year: '2023-2024',
            title: 'Bootcamp Ironhack',
            description:
              'Full Stack Web Development — MERN Stack, React, Node.js, MongoDB.',
          },
          {
            year: '2024-Presente',
            title: 'Full Stack Developer & Content Operations Analyst',
            description:
              'Freelance na Pedrazzoli Digital e Content Operations Analyst na Accenture Portugal.',
          },
        ],
      },
      stats: {
        experience: 'Anos como Developer',
        projects: 'Projetos em Producao',
        clients: 'Clientes',
        code: 'Anos em Negocios',
      },
      coreSkills: 'Stack Principal',
    },
    skills: {
      title: 'As Minhas',
      titleHighlight: 'Habilidades',
      subtitle:
        'Tecnologias e ferramentas que uso no dia a dia para construir projetos reais',
      level: {
        expert: 'Forte',
        advanced: 'Confortavel',
        intermediate: 'Em desenvolvimento',
      },
      special: {
        title: 'Competencias que trago do mundo dos negocios',
      },
      learning: 'A explorar',
    },
    projects: {
      title: 'Os Meus',
      titleHighlight: 'Projetos',
      subtitle:
        'Projetos reais em producao — e-commerce, websites institucionais, ferramentas SaaS',
      categories: {
        all: 'Todos',
        fullstack: 'Full Stack',
        frontend: 'Frontend',
        backend: 'Backend',
      },
      viewDetails: 'Ver Detalhes',
      highlights: 'Destaques',
      technologies: 'Tecnologias',
      viewDemo: 'Ver Demo',
    },
    experience: {
      title: 'A Minha',
      titleHighlight: 'Experiencia',
      subtitle:
        'Mais de 20 anos de experiencia profissional — da gestao de empresas ao desenvolvimento de software',
      responsibilities: 'Responsabilidades',
      achievement: 'Destaque',
      downloadCV: 'Download CV',
      stats: {
        years: 'Anos como Developer',
        companies: 'Empresas',
        projects: 'Repos GitHub',
        technologies: 'Tecnologias',
      },
    },
    contact: {
      title: 'Vamos',
      titleHighlight: 'Conversar',
      subtitle: 'Tem um projeto em mente? Vamos trabalhar juntos',
      form: {
        name: 'Nome',
        namePlaceholder: 'O seu nome',
        email: 'Email',
        emailPlaceholder: 'seu@email.com',
        subject: 'Assunto',
        subjectPlaceholder: 'Selecione um assunto',
        subjectOptions: {
          project: 'Novo Projeto',
          collaboration: 'Colaboracao',
          job: 'Oportunidade de Trabalho',
          other: 'Outro',
        },
        message: 'Mensagem',
        messagePlaceholder: 'Conte-me sobre o seu projeto...',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso! Respondo em breve.',
        error: 'Algo correu mal. Por favor, tente novamente.',
      },
      directContact: 'Contato Direto',
      socialNetworks: 'Redes Sociais',
      available: {
        title: 'Disponivel para Projetos',
        description:
          'Aceito novos projetos freelance e oportunidades de trabalho remoto ou hibrido.',
        services: [
          'Desenvolvimento Full Stack',
          'Websites e Landing Pages',
          'E-commerce',
          'Consultoria Tecnica',
        ],
      },
      responseTime: 'Normalmente respondo em ate',
      hours: '24 horas',
    },
    footer: {
      about:
        'Full Stack Developer criando solucoes web modernas para negocios reais. Websites, e-commerce e aplicacoes com React, Next.js e Node.js.',
      quickLinks: 'Links Rapidos',
      connect: 'Conecte-se',
      rights: 'Todos os direitos reservados.',
      backToTop: 'Voltar ao topo',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      badge: 'Full Stack Developer',
      phrases: {
        build: 'Websites & e-commerce for real businesses.',
        scope: 'From concept to production.',
        location: 'Based in Lisbon, available worldwide.',
      },
      description:
        'I build websites and web applications for real businesses. From landing pages to full e-commerce platforms with payments, shipping and admin panels.',
      cta: {
        projects: 'View Projects',
        contact: 'Get in Touch',
      },
    },
    about: {
      title: 'About',
      titleHighlight: 'Me',
      subtitle:
        'From entrepreneur to developer — 15 years of business experience, now applied to building software',
      heading: 'From Business Management to Code',
      description1:
        'After over 15 years founding and running companies in the surf industry — scaling a brand to R$200k/month with 16 employees — I transitioned into software development. I completed the Ironhack bootcamp and have since built 10+ production projects for clients in Portugal and Brazil.',
      description2:
        "My background as a founder and CEO gives me a business perspective that most developers don't have. I understand what clients need, I know how to manage deadlines and priorities, and I think about the product as a whole — not just the code.",
      description3:
        "Alongside freelancing at Pedrazzoli Digital, I work as a Content Operations Analyst at Accenture Portugal. I'm based in Lisbon and available for remote or hybrid projects.",
      location: 'Lisbon, Portugal',
      downloadCV: 'Download CV',
      viewExperience: 'View Experience',
      journey: {
        title: 'My Journey',
        items: [
          {
            year: '2001-2006',
            title: 'Australia & ISC SA Ltda',
            description:
              'Gap year in Australia, then founded ISC SA — surf accessories import and manufacturing in Brazil.',
          },
          {
            year: '2006-2010',
            title: 'Production Manager — PLP',
            description:
              'Production management for surf brands (FCS, Creatures of Leisure, Gorilla Grip). Tripled revenue in the first year.',
          },
          {
            year: '2010-2023',
            title: 'Founder & CEO — Elite Surfing',
            description:
              'Founded and scaled a surf accessories brand to R$200k/month with 16 employees.',
          },
          {
            year: '2017-2021',
            title: 'Go Portugal Tours',
            description:
              'Private tour and transfer company in Lisbon. Closed during the pandemic.',
          },
          {
            year: '2023-2024',
            title: 'Ironhack Bootcamp',
            description:
              'Full Stack Web Development — MERN Stack, React, Node.js, MongoDB.',
          },
          {
            year: '2024-Present',
            title: 'Full Stack Developer & Content Operations Analyst',
            description:
              'Freelancing at Pedrazzoli Digital and Content Operations Analyst at Accenture Portugal.',
          },
        ],
      },
      stats: {
        experience: 'Years as Developer',
        projects: 'Projects in Production',
        clients: 'Clients',
        code: 'Years in Business',
      },
      coreSkills: 'Core Stack',
    },
    skills: {
      title: 'My',
      titleHighlight: 'Skills',
      subtitle: 'Technologies and tools I use daily to build real projects',
      level: {
        expert: 'Strong',
        advanced: 'Comfortable',
        intermediate: 'Growing',
      },
      special: {
        title: 'Skills I bring from the business world',
      },
      learning: 'Exploring',
    },
    projects: {
      title: 'My',
      titleHighlight: 'Projects',
      subtitle:
        'Real projects in production — e-commerce, institutional websites, SaaS tools',
      categories: {
        all: 'All',
        fullstack: 'Full Stack',
        frontend: 'Frontend',
        backend: 'Backend',
      },
      viewDetails: 'View Details',
      highlights: 'Highlights',
      technologies: 'Technologies',
      viewDemo: 'View Demo',
    },
    experience: {
      title: 'My',
      titleHighlight: 'Experience',
      subtitle:
        'Over 20 years of professional experience — from running businesses to building software',
      responsibilities: 'Responsibilities',
      achievement: 'Highlight',
      downloadCV: 'Download CV',
      stats: {
        years: 'Years as Developer',
        companies: 'Companies',
        projects: 'GitHub Repos',
        technologies: 'Technologies',
      },
    },
    contact: {
      title: "Let's",
      titleHighlight: 'Talk',
      subtitle: "Have a project in mind? Let's work together",
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Select a subject',
        subjectOptions: {
          project: 'New Project',
          collaboration: 'Collaboration',
          job: 'Job Opportunity',
          other: 'Other',
        },
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: "Message sent successfully! I'll get back to you soon.",
        error: 'Something went wrong. Please try again.',
      },
      directContact: 'Direct Contact',
      socialNetworks: 'Social Networks',
      available: {
        title: 'Available for Projects',
        description:
          'Currently accepting new freelance projects and remote or hybrid work opportunities.',
        services: [
          'Full Stack Development',
          'Websites & Landing Pages',
          'E-commerce',
          'Technical Consulting',
        ],
      },
      responseTime: 'I usually respond within',
      hours: '24 hours',
    },
    footer: {
      about:
        'Full Stack Developer building modern web solutions for real businesses. Websites, e-commerce and applications with React, Next.js and Node.js.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
};
