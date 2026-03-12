export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      skills: 'Habilidades',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      badge: 'Full Stack Developer',
      phrases: {
        build: 'Websites e e-commerce para negócios reais.',
        scope: 'Do conceito à produção.',
        location: 'Em Lisboa, disponível worldwide.',
      },
      description:
        'Construo websites e aplicações web para negócios reais. De landing pages a plataformas e-commerce com pagamentos, envios e painéis de gestão.',
      cta: {
        projects: 'Ver Projetos',
        contact: 'Entrar em Contato',
      },
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Mim',
      subtitle:
        'De empreendedor a developer — uma década de experiência em negócios, agora aplicada a construir software',
      heading: 'Da Gestão de Negócios ao Código',
      description1:
        'Depois de mais de 10 anos a liderar a minha própria empresa no setor de surf, fiz a transição para desenvolvimento de software. Completei o bootcamp na Ironhack e desde então tenho trabalhado com o stack MERN, Next.js e TypeScript, tanto em projetos próprios como para clientes.',
      description2:
        'A minha experiência como fundador e CEO dá-me uma perspetiva de negócio que a maioria dos developers não tem. Entendo o que um cliente precisa, sei gerir prazos e prioridades, e penso no produto como um todo — não só no código.',
      description3:
        'Paralelamente ao freelance, trabalho como Content Analyst na Accenture Portugal. Estou baseado em Lisboa e disponível para projetos remotos ou híbridos.',
      location: 'Lisboa, Portugal',
      downloadCV: 'Download CV',
      viewExperience: 'Ver Experiência',
      journey: {
        title: 'O Meu Percurso',
        items: [
          {
            year: '2005-2010',
            title: 'Production Manager',
            description:
              'Gestão de produção para marcas de surf (FCS, Creatures of Leisure, Gorilla Grip).',
          },
          {
            year: '2010-2023',
            title: 'Founder & CEO — Elite Surfing',
            description:
              'Fundei e geri marca de acessórios de surf durante mais de uma década.',
          },
          {
            year: '2023-2024',
            title: 'Bootcamp Ironhack',
            description:
              'Full Stack Web Development — MERN Stack, React, Node.js, MongoDB.',
          },
          {
            year: '2024-Presente',
            title: 'Full Stack Developer & Content Analyst',
            description:
              'Freelance na Pedrazzoli Digital e Content Analyst na Accenture Portugal.',
          },
        ],
      },
      stats: {
        experience: 'Anos como Developer',
        projects: 'Projetos Entregues',
        clients: 'Clientes',
        code: 'Anos em Negócios',
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
        advanced: 'Confortável',
        intermediate: 'Em desenvolvimento',
      },
      special: {
        title: 'Competências que trago do mundo dos negócios',
      },
      learning: 'A explorar',
    },
    projects: {
      title: 'Os Meus',
      titleHighlight: 'Projetos',
      subtitle:
        'Projetos reais em produção — e-commerce, websites institucionais, ferramentas SaaS',
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
      titleHighlight: 'Experiência',
      subtitle:
        'Mais de 15 anos de experiência profissional — da gestão de empresas ao desenvolvimento de software',
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
          collaboration: 'Colaboração',
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
        title: 'Disponível para Projetos',
        description:
          'Aceito novos projetos freelance e oportunidades de trabalho remoto ou híbrido.',
        services: [
          'Desenvolvimento Full Stack',
          'Websites e Landing Pages',
          'E-commerce',
          'Consultoria Técnica',
        ],
      },
      responseTime: 'Normalmente respondo em até',
      hours: '24 horas',
    },
    footer: {
      about:
        'Full Stack Developer criando soluções web modernas para negócios reais. Websites, e-commerce e aplicações com React, Next.js e Node.js.',
      quickLinks: 'Links Rápidos',
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
        'From entrepreneur to developer — a decade of business experience, now applied to building software',
      heading: 'From Business Management to Code',
      description1:
        'After over 10 years leading my own company in the surf industry, I transitioned into software development. I completed the Ironhack bootcamp and have since been working with the MERN stack, Next.js and TypeScript, both on personal projects and for clients.',
      description2:
        "My background as a founder and CEO gives me a business perspective that most developers don't have. I understand what clients need, I know how to manage deadlines and priorities, and I think about the product as a whole — not just the code.",
      description3:
        "Alongside freelancing, I work as a Content Analyst at Accenture Portugal. I'm based in Lisbon and available for remote or hybrid projects.",
      location: 'Lisbon, Portugal',
      downloadCV: 'Download CV',
      viewExperience: 'View Experience',
      journey: {
        title: 'My Journey',
        items: [
          {
            year: '2005-2010',
            title: 'Production Manager',
            description:
              'Production management for surf brands (FCS, Creatures of Leisure, Gorilla Grip).',
          },
          {
            year: '2010-2023',
            title: 'Founder & CEO — Elite Surfing',
            description:
              'Founded and ran a surf accessories brand for over a decade.',
          },
          {
            year: '2023-2024',
            title: 'Ironhack Bootcamp',
            description:
              'Full Stack Web Development — MERN Stack, React, Node.js, MongoDB.',
          },
          {
            year: '2024-Present',
            title: 'Full Stack Developer & Content Analyst',
            description:
              'Freelancing at Pedrazzoli Digital and Content Analyst at Accenture Portugal.',
          },
        ],
      },
      stats: {
        experience: 'Years as Developer',
        projects: 'Projects Delivered',
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
        'Over 15 years of professional experience — from running businesses to building software',
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
