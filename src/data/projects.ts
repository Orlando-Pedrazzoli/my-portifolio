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
    title: 'AI-Powered Code Assistant',
    description:
      'Intelligent coding assistant using GPT-4 and RAG for context-aware code suggestions',
    longDescription:
      'Built a sophisticated AI assistant that helps developers write better code by understanding project context, suggesting improvements, and detecting potential bugs using advanced NLP techniques.',
    image: '/images/ai-assistant.jpg',
    technologies: [
      'Python',
      'LangChain',
      'OpenAI API',
      'FastAPI',
      'React',
      'TypeScript',
      'Pinecone',
    ],
    category: 'AI/ML',
    featured: true,
    githubUrl: 'https://github.com/yourusername/ai-code-assistant',
    liveUrl: 'https://ai-assistant.demo.com',
    highlights: [
      'Reduces debugging time by 40%',
      'Supports 15+ programming languages',
      'Real-time code analysis',
      '10k+ API calls daily',
    ],
  },
  {
    id: 2,
    title: 'Real-time Sentiment Analyzer',
    description:
      'Dashboard for analyzing social media sentiment with ML models and real-time updates',
    longDescription:
      'Developed a comprehensive sentiment analysis platform that processes thousands of social media posts in real-time, providing businesses with instant insights into public opinion.',
    image: '/images/sentiment-analyzer.jpg',
    technologies: [
      'Python',
      'TensorFlow',
      'BERT',
      'Node.js',
      'Socket.io',
      'React',
      'D3.js',
      'MongoDB',
    ],
    category: 'AI/ML',
    featured: true,
    githubUrl: 'https://github.com/yourusername/sentiment-analyzer',
    demoUrl: 'https://sentiment-demo.com',
    highlights: [
      '95% accuracy rate',
      'Processes 1000+ posts/minute',
      'Multi-language support',
      'Real-time visualization',
    ],
  },
  {
    id: 3,
    title: 'E-Commerce Platform with AI Recommendations',
    description:
      'Full-stack e-commerce solution with personalized AI product recommendations',
    longDescription:
      'Created a modern e-commerce platform featuring an AI-powered recommendation engine that increases conversion rates through personalized product suggestions.',
    image: '/images/ecommerce.jpg',
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
    liveUrl: 'https://shop-demo.com',
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
      'Implemented an industrial-grade computer vision system that detects defects in manufacturing processes with high accuracy, reducing manual inspection time.',
    image: '/images/cv-inspector.jpg',
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
      'Built a transparent supply chain tracking system using blockchain technology to ensure product authenticity and traceability.',
    image: '/images/blockchain.jpg',
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
      'Developed a comprehensive health monitoring system that tracks vital signs and uses ML to predict potential health issues.',
    image: '/images/health-dashboard.jpg',
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
    liveUrl: 'https://health-demo.com',
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
