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
      greeting: 'Olá, eu sou',
      badge: 'Desenvolvedor com IA',
      roles: {
        fullstack: 'Desenvolvedor Full Stack',
        ai: 'Engenheiro de IA',
        problem: 'Solucionador de Problemas',
        tech: 'Inovador Tecnológico',
      },
      description:
        'Transformando ideias em soluções inteligentes. Especializado em construir aplicações web modernas com integração de IA de ponta.',
      cta: {
        projects: 'Ver Projetos',
        contact: 'Entrar em Contato',
      },
    },
    about: {
      title: 'Sobre',
      titleHighlight: 'Mim',
      subtitle:
        'De empreendedor a desenvolvedor, minha jornada é sobre transformação e paixão por tecnologia',
      heading: 'Da Gestão Empresarial ao Código',
      description1:
        'Após 15 anos liderando minha própria empresa no setor de surf, decidi fazer uma transição de carreira para tecnologia. Minha experiência em gestão, estratégia e resolução de problemas complexos me dá uma perspectiva única no desenvolvimento de software.',
      description2:
        'Hoje, combino minha experiência empresarial com habilidades técnicas em Full Stack Development e Inteligência Artificial para criar soluções que não apenas funcionam, mas que transformam negócios.',
      description3:
        'Meu foco está em desenvolver aplicações web modernas e escaláveis, com integração de IA para automatizar processos e gerar insights valiosos para empresas de todos os tamanhos.',
      location: 'Lisboa, Portugal',
      downloadCV: 'Download CV',
      viewExperience: 'Ver Experiência',
      journey: {
        title: 'Minha Jornada',
        items: [
          {
            year: '2010-2023',
            title: 'Empreendedor & CEO',
            description:
              'Fundei e liderei a Elite Surfing, expandindo para mercados internacionais.',
          },
          {
            year: '2023-2024',
            title: 'Transição de Carreira',
            description:
              'Bootcamp intensivo em Full Stack Development, focado em tecnologias modernas.',
          },
          {
            year: '2024',
            title: 'Data Analyst - Accenture',
            description:
              'Análise de dados para cliente multinacional, desenvolvendo soluções automatizadas.',
          },
          {
            year: 'Presente',
            title: 'Full Stack Developer & AI Engineer',
            description:
              'Desenvolvendo aplicações inteligentes que combinam web development com IA.',
          },
        ],
      },
      stats: {
        experience: 'Anos de Experiência',
        projects: 'Projetos Completos',
        clients: 'Clientes Satisfeitos',
        code: 'Linhas de Código',
      },
      coreSkills: 'Habilidades Principais',
    },
    skills: {
      title: 'Minhas',
      titleHighlight: 'Habilidades',
      subtitle:
        'Tecnologias e ferramentas que domino para criar soluções excepcionais',
      level: {
        expert: 'Expert',
        advanced: 'Avançado',
        intermediate: 'Intermediário',
      },
      special: {
        title: 'Competências Especiais',
        items: [
          {
            title: 'Resolução de Problemas',
            desc: 'Análise e resolução de problemas complexos',
          },
          {
            title: 'Liderança de Equipe',
            desc: '15+ anos liderando equipes',
          },
          {
            title: 'Estratégia de Negócios',
            desc: 'Visão estratégica de negócios',
          },
          {
            title: 'Aprendizado Rápido',
            desc: 'Adaptação rápida a novas tecnologias',
          },
        ],
      },
      learning: 'Atualmente Aprendendo',
    },
    projects: {
      title: 'Meus',
      titleHighlight: 'Projetos',
      subtitle:
        'Explorando a interseção entre desenvolvimento web e inteligência artificial',
      categories: {
        all: 'Todos',
        aiml: 'IA/ML',
        fullstack: 'Full Stack',
        frontend: 'Frontend',
        backend: 'Backend',
      },
      featured: 'Destaque',
      viewDetails: 'Ver Detalhes',
      highlights: 'Destaques',
      technologies: 'Tecnologias',
      viewDemo: 'Ver Demo',
    },
    experience: {
      title: 'Minha',
      titleHighlight: 'Experiência',
      subtitle:
        'Uma jornada de crescimento contínuo e transformação profissional',
      responsibilities: 'Principais Responsabilidades',
      achievement: 'Conquista Principal',
      downloadCV: 'Download CV Completo',
      stats: {
        years: 'Anos de Experiência',
        companies: 'Empresas',
        projects: 'Projetos Completos',
        technologies: 'Tecnologias',
      },
    },
    contact: {
      title: 'Vamos',
      titleHighlight: 'Conversar',
      subtitle:
        'Tem um projeto em mente? Vamos trabalhar juntos para criar algo incrível',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome',
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
        messagePlaceholder: 'Conte-me sobre seu projeto...',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
        error: 'Ops! Algo deu errado. Por favor, tente novamente.',
      },
      directContact: 'Contato Direto',
      socialNetworks: 'Redes Sociais',
      available: {
        title: 'Disponível para Projetos',
        description:
          'Atualmente estou aceitando novos projetos freelance e oportunidades de trabalho remoto ou presencial.',
        services: [
          'Desenvolvimento Full Stack',
          'Integração de IA/ML',
          'Consultoria Técnica',
          'Desenvolvimento de MVPs',
        ],
      },
      responseTime: 'Normalmente respondo em até',
      hours: '24 horas',
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
      greeting: 'Hi, I am',
      badge: 'AI-Powered Developer',
      roles: {
        fullstack: 'Full Stack Developer',
        ai: 'AI Engineer',
        problem: 'Problem Solver',
        tech: 'Tech Innovator',
      },
      description:
        'Transforming ideas into intelligent solutions. Specialized in building modern web applications with cutting-edge AI integration.',
      cta: {
        projects: 'View Projects',
        contact: 'Get in Touch',
      },
    },
    about: {
      title: 'About',
      titleHighlight: 'Me',
      subtitle:
        'From entrepreneur to developer, my journey is about transformation and passion for technology',
      heading: 'From Business Management to Code',
      description1:
        'After 15 years leading my own company in the surf industry, I decided to make a career transition to technology. My experience in management, strategy, and complex problem-solving gives me a unique perspective in software development.',
      description2:
        'Today, I combine my business experience with technical skills in Full Stack Development and Artificial Intelligence to create solutions that not only work but transform businesses.',
      description3:
        'My focus is on developing modern and scalable web applications, with AI integration to automate processes and generate valuable insights for businesses of all sizes.',
      location: 'Lisbon, Portugal',
      downloadCV: 'Download CV',
      viewExperience: 'View Experience',
      journey: {
        title: 'My Journey',
        items: [
          {
            year: '2010-2023',
            title: 'Entrepreneur & CEO',
            description:
              'Founded and led Elite Surfing, expanding to international markets.',
          },
          {
            year: '2023-2024',
            title: 'Career Transition',
            description:
              'Intensive Full Stack Development bootcamp, focused on modern technologies.',
          },
          {
            year: '2024',
            title: 'Data Analyst - Accenture',
            description:
              'Data analysis for multinational client, developing automated solutions.',
          },
          {
            year: 'Present',
            title: 'Full Stack Developer & AI Engineer',
            description:
              'Developing intelligent applications that combine web development with AI.',
          },
        ],
      },
      stats: {
        experience: 'Years of Experience',
        projects: 'Completed Projects',
        clients: 'Satisfied Clients',
        code: 'Lines of Code',
      },
      coreSkills: 'Core Skills',
    },
    skills: {
      title: 'My',
      titleHighlight: 'Skills',
      subtitle:
        'Technologies and tools I master to create exceptional solutions',
      level: {
        expert: 'Expert',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
      },
      special: {
        title: 'Special Skills',
        items: [
          {
            title: 'Problem Solving',
            desc: 'Analysis and resolution of complex problems',
          },
          {
            title: 'Team Leadership',
            desc: '15+ years leading teams',
          },
          {
            title: 'Business Strategy',
            desc: 'Strategic business vision',
          },
          {
            title: 'Fast Learning',
            desc: 'Quick adaptation to new technologies',
          },
        ],
      },
      learning: 'Currently Learning',
    },
    projects: {
      title: 'My',
      titleHighlight: 'Projects',
      subtitle:
        'Exploring the intersection between web development and artificial intelligence',
      categories: {
        all: 'All',
        aiml: 'AI/ML',
        fullstack: 'Full Stack',
        frontend: 'Frontend',
        backend: 'Backend',
      },
      featured: 'Featured',
      viewDetails: 'View Details',
      highlights: 'Highlights',
      technologies: 'Technologies',
      viewDemo: 'View Demo',
    },
    experience: {
      title: 'My',
      titleHighlight: 'Experience',
      subtitle:
        'A journey of continuous growth and professional transformation',
      responsibilities: 'Main Responsibilities',
      achievement: 'Main Achievement',
      downloadCV: 'Download Full CV',
      stats: {
        years: 'Years of Experience',
        companies: 'Companies',
        projects: 'Completed Projects',
        technologies: 'Technologies',
      },
    },
    contact: {
      title: "Let's",
      titleHighlight: 'Talk',
      subtitle:
        "Have a project in mind? Let's work together to create something amazing",
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
        error: 'Oops! Something went wrong. Please try again.',
      },
      directContact: 'Direct Contact',
      socialNetworks: 'Social Networks',
      available: {
        title: 'Available for Projects',
        description:
          'Currently accepting new freelance projects and remote or on-site work opportunities.',
        services: [
          'Full Stack Development',
          'AI/ML Integration',
          'Technical Consulting',
          'MVP Development',
        ],
      },
      responseTime: 'I usually respond within',
      hours: '24 hours',
    },
  },
};
