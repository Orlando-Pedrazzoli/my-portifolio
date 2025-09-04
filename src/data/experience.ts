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
    location: 'Lisbon, Portugal',
    type: 'Freelance',
    startDate: 'Jun 2024',
    endDate: 'Present',
    description:
      'Developing intelligent web applications combining modern full-stack technologies with cutting-edge AI capabilities.',
    responsibilities: [
      'Building end-to-end web applications with React, Next.js, and Node.js',
      'Implementing AI features using LangChain, OpenAI API, and custom ML models',
      'Creating responsive, accessible UI/UX designs with Tailwind CSS',
      'Developing RESTful and GraphQL APIs with proper authentication',
      'Integrating vector databases for semantic search capabilities',
      'Deploying applications on AWS and Vercel with CI/CD pipelines',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'LangChain',
      'OpenAI',
      'PostgreSQL',
      'Docker',
    ],
    achievements: [
      'Delivered 5+ AI-powered applications for clients',
      'Reduced client operational costs by 40% through automation',
      'Achieved 99.9% uptime for deployed applications',
    ],
  },
  {
    id: 2,
    title: 'Data Analyst',
    company: 'Accenture Portugal',
    location: 'Lisbon Metropolitan Area',
    type: 'Full-time',
    startDate: 'May 2024',
    endDate: 'Present',
    description:
      'Analyzing data in a digital platform for a multinational client, enforcing community standards through data-driven insights.',
    responsibilities: [
      'Analyzing large datasets to identify content trends and risks',
      'Collaborating with cross-functional teams to address complex content issues',
      'Developing automated reporting systems using Python and SQL',
      'Creating data visualizations for stakeholder presentations',
      'Implementing machine learning models for pattern detection',
      'Providing clear communication and support to users',
    ],
    technologies: [
      'Python',
      'SQL',
      'Tableau',
      'Power BI',
      'Excel',
      'Machine Learning',
    ],
    achievements: [
      'Improved content moderation efficiency by 35%',
      'Developed automated reporting saving 20 hours/week',
      'Trained team members on advanced data analysis techniques',
    ],
  },
  {
    id: 3,
    title: 'Career Transition - Full Stack Development',
    company: 'Self-Study & Bootcamp',
    location: 'Lisbon, Portugal',
    type: 'Full-time',
    startDate: 'Sep 2023',
    endDate: 'Jun 2024',
    description:
      'Intensive period of learning and skill development in modern web technologies and AI/ML.',
    responsibilities: [
      'Completed comprehensive Full Stack Development bootcamp',
      'Built 20+ projects ranging from simple websites to complex applications',
      'Learned modern JavaScript frameworks and libraries',
      'Studied AI/ML fundamentals and practical applications',
      'Contributed to open-source projects on GitHub',
      'Networked with tech professionals and attended tech meetups',
    ],
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'Git',
      'HTML/CSS',
    ],
    achievements: [
      'Graduated top of class in bootcamp',
      'Built portfolio of 10+ production-ready applications',
      'Earned certifications in React, Node.js, and Python',
    ],
  },
  {
    id: 4,
    title: 'Founder & CEO',
    company: 'Elite Surfing',
    location: 'Brazil / Remote',
    type: 'Self-employed',
    startDate: 'Mar 2010',
    endDate: 'Present',
    description:
      'Founded and led a successful surfing industry company, managing all aspects from strategy to operations.',
    responsibilities: [
      "Led company's strategic vision and growth initiatives",
      'Supervised end-to-end operations and logistics',
      'Drove innovative product development and management',
      'Expanded market reach nationally and internationally',
      'Managed team of 15+ employees',
      'Negotiated partnerships and distribution deals',
    ],
    achievements: [
      'Built company from zero to 7-figure annual revenue',
      'Established distribution network across 5 countries',
      'Developed 3 patented product designs',
      'Successfully transitioned business model during relocation to Portugal',
    ],
  },
  {
    id: 5,
    title: 'Production Manager',
    company: 'PLP Importação e Exportação Ltda',
    location: 'São Paulo, Brazil',
    type: 'Full-time',
    startDate: 'Nov 2005',
    endDate: 'Jan 2010',
    description:
      'Managed production operations for major sports brands including FCS, Creatures of Leisure, and Gorilla Grip.',
    responsibilities: [
      'Managed entire production cycle from inception to delivery',
      'Led recruitment and training processes',
      'Developed comprehensive product line of surfing accessories',
      'Managed production costs and efficiency optimization',
      'Ensured quality control standards',
      'Coordinated with international suppliers',
    ],
    achievements: [
      'Reduced production costs by 25%',
      'Improved delivery times by 40%',
      'Launched 50+ successful products',
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
  const techStart = new Date('2023-09-01');
  const now = new Date();
  const years =
    (now.getTime() - techStart.getTime()) / (1000 * 60 * 60 * 24 * 365);
  return Math.round(years * 10) / 10; // Round to 1 decimal
};
