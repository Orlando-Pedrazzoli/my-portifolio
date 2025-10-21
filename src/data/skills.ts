export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'AI/ML' | 'Database' | 'DevOps' | 'Tools';
  icon?: string;
  color?: string;
}

export const skills: Skill[] = [
  // Frontend - Baseado em seus projetos reais
  { name: 'React 18/19', level: 95, category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js 14/15', level: 92, category: 'Frontend', color: '#000000' },
  { name: 'TypeScript 5', level: 90, category: 'Frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', color: '#06B6D4' },
  { name: 'Vite', level: 88, category: 'Frontend', color: '#646CFF' },
  { name: 'Framer Motion', level: 85, category: 'Frontend', color: '#FF0080' },
  {
    name: 'JavaScript ES6+',
    level: 95,
    category: 'Frontend',
    color: '#F7DF1E',
  },
  { name: 'HTML5/CSS3', level: 95, category: 'Frontend', color: '#E34C26' },
  { name: 'Sass/SCSS', level: 88, category: 'Frontend', color: '#CC6699' },
  { name: 'React Router', level: 92, category: 'Frontend', color: '#CA4245' },
  { name: 'Zustand', level: 87, category: 'Frontend', color: '#FFB13B' },
  {
    name: 'React Hook Form',
    level: 90,
    category: 'Frontend',
    color: '#EC5990',
  },
  { name: 'Radix UI', level: 85, category: 'Frontend', color: '#111111' },
  { name: 'Three.js', level: 75, category: 'Frontend', color: '#000000' },
  { name: 'Swiper', level: 85, category: 'Frontend', color: '#0080FF' },
  {
    name: 'Class Variance Authority',
    level: 83,
    category: 'Frontend',
    color: '#7C3AED',
  },

  // Backend - Tecnologias dos seus projetos
  { name: 'Node.js 18.x', level: 92, category: 'Backend', color: '#339933' },
  { name: 'Express.js 4.x', level: 90, category: 'Backend', color: '#000000' },
  { name: 'Python', level: 88, category: 'Backend', color: '#3776AB' },
  { name: 'JWT Auth', level: 92, category: 'Backend', color: '#000000' },
  { name: 'Bcrypt.js', level: 90, category: 'Backend', color: '#003A70' },
  { name: 'REST APIs', level: 95, category: 'Backend', color: '#FF6B6B' },
  { name: 'Webhooks', level: 88, category: 'Backend', color: '#FF4088' },
  { name: 'FastAPI', level: 85, category: 'Backend', color: '#009688' },
  { name: 'Django', level: 78, category: 'Backend', color: '#092E20' },
  { name: 'GraphQL', level: 80, category: 'Backend', color: '#E10098' },
  { name: 'Prisma ORM', level: 88, category: 'Backend', color: '#2D3748' },
  { name: 'Mongoose 8.x', level: 90, category: 'Backend', color: '#880000' },
  { name: 'Multer', level: 85, category: 'Backend', color: '#FFA500' },
  {
    name: 'httpOnly Cookies',
    level: 90,
    category: 'Backend',
    color: '#4A5568',
  },
  { name: 'Refresh Tokens', level: 88, category: 'Backend', color: '#2B6CB0' },

  // AI/ML & Automation
  { name: 'OpenAI API', level: 90, category: 'AI/ML', color: '#10A37F' },
  { name: 'LangChain', level: 85, category: 'AI/ML', color: '#1C3A37' },
  {
    name: 'ChatGPT Integration',
    level: 92,
    category: 'AI/ML',
    color: '#74AA9C',
  },
  { name: 'N8N Automation', level: 88, category: 'AI/ML', color: '#EA4B71' },
  { name: 'TensorFlow', level: 82, category: 'AI/ML', color: '#FF6F00' },
  { name: 'PyTorch', level: 78, category: 'AI/ML', color: '#EE4C2C' },
  { name: 'NLP/LLMs', level: 83, category: 'AI/ML', color: '#FF4081' },
  { name: 'Computer Vision', level: 75, category: 'AI/ML', color: '#5C5CFF' },
  { name: 'Scikit-learn', level: 80, category: 'AI/ML', color: '#F7931E' },
  { name: 'Pandas', level: 85, category: 'AI/ML', color: '#150458' },
  { name: 'Make/Integromat', level: 75, category: 'AI/ML', color: '#5B2D8B' },
  { name: 'Zapier', level: 75, category: 'AI/ML', color: '#FF4A00' },

  // Database & Storage
  { name: 'MongoDB Atlas', level: 92, category: 'Database', color: '#47A248' },
  { name: 'PostgreSQL', level: 85, category: 'Database', color: '#4169E1' },
  { name: 'MySQL', level: 82, category: 'Database', color: '#4479A1' },
  { name: 'Redis', level: 80, category: 'Database', color: '#DC382D' },
  { name: 'Cloudinary', level: 90, category: 'Database', color: '#3448C5' },
  { name: 'localStorage', level: 88, category: 'Database', color: '#F7931E' },
  { name: 'Pinecone', level: 78, category: 'Database', color: '#000000' },
  {
    name: 'Vector Databases',
    level: 75,
    category: 'Database',
    color: '#7B61FF',
  },

  // DevOps & Deployment
  { name: 'Vercel', level: 95, category: 'DevOps', color: '#000000' },
  { name: 'Docker', level: 85, category: 'DevOps', color: '#2496ED' },
  { name: 'AWS', level: 82, category: 'DevOps', color: '#FF9900' },
  { name: 'Google Cloud', level: 80, category: 'DevOps', color: '#4285F4' },
  { name: 'Netlify', level: 85, category: 'DevOps', color: '#00C7B7' },
  { name: 'CI/CD Pipelines', level: 82, category: 'DevOps', color: '#2088C6' },
  { name: 'GitHub Actions', level: 85, category: 'DevOps', color: '#2088E5' },
  { name: 'Kubernetes', level: 75, category: 'DevOps', color: '#326CE5' },
  { name: 'Service Workers', level: 78, category: 'DevOps', color: '#4FC08D' },
  { name: 'PWA Development', level: 82, category: 'DevOps', color: '#5A0FC8' },

  // Tools & APIs
  { name: 'Git/GitHub', level: 95, category: 'Tools', color: '#F05032' },
  { name: 'VS Code', level: 95, category: 'Tools', color: '#007ACC' },
  { name: 'Stripe Payments', level: 92, category: 'Tools', color: '#008CDD' },
  { name: 'EmailJS', level: 90, category: 'Tools', color: '#FCA326' },
  { name: 'Nodemailer', level: 88, category: 'Tools', color: '#0F9E51' },
  {
    name: 'WhatsApp Business API',
    level: 90,
    category: 'Tools',
    color: '#25D366',
  },
  { name: 'Google Maps API', level: 87, category: 'Tools', color: '#4285F4' },
  { name: 'Leaflet Maps', level: 85, category: 'Tools', color: '#199900' },
  { name: 'Postman', level: 88, category: 'Tools', color: '#FF6C37' },
  { name: 'Figma', level: 75, category: 'Tools', color: '#F24E1E' },
  { name: 'Jira', level: 85, category: 'Tools', color: '#0052CC' },
  { name: 'Zod Validation', level: 90, category: 'Tools', color: '#3E67B1' },
  { name: 'Axios', level: 92, category: 'Tools', color: '#671DDF' },
  { name: 'JSZip', level: 85, category: 'Tools', color: '#8CC84B' },
  { name: 'Recharts', level: 87, category: 'Tools', color: '#22B5BF' },
  { name: 'React Hot Toast', level: 88, category: 'Tools', color: '#E4405F' },
  { name: 'Lucide React', level: 90, category: 'Tools', color: '#F56040' },
  { name: 'React Dropzone', level: 85, category: 'Tools', color: '#00BCD4' },
  { name: 'DOMPurify', level: 85, category: 'Tools', color: '#326CE5' },
  { name: 'React Quill', level: 82, category: 'Tools', color: '#1E88E5' },
  { name: 'jsPDF', level: 80, category: 'Tools', color: '#34A853' },
  {
    name: 'Lighthouse Optimization',
    level: 88,
    category: 'Tools',
    color: '#F44B3E',
  },
  { name: 'SEO/Schema.org', level: 90, category: 'Tools', color: '#30A854' },
  {
    name: 'Google Search Console',
    level: 85,
    category: 'Tools',
    color: '#458CF5',
  },
  {
    name: 'Cookie Consent/GDPR',
    level: 87,
    category: 'Tools',
    color: '#0066CC',
  },
];

export const skillCategories = [
  { name: 'Frontend', icon: '🎨', description: 'Modern UI/UX Development' },
  { name: 'Backend', icon: '⚙️', description: 'Server & API Development' },
  { name: 'AI/ML', icon: '🤖', description: 'Artificial Intelligence & ML' },
  { name: 'Database', icon: '💾', description: 'Data Management' },
  { name: 'DevOps', icon: '🚀', description: 'Deployment & Infrastructure' },
  { name: 'Tools', icon: '🛠️', description: 'Development Tools' },
];

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills
    .filter(skill => skill.category === category)
    .sort((a, b) => b.level - a.level);
};

export const getTopSkills = (limit: number = 6) => {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, limit);
};

// Resumo estatístico das habilidades
export const getSkillsStats = () => {
  const totalSkills = skills.length;
  const expertSkills = skills.filter(s => s.level >= 90).length;
  const advancedSkills = skills.filter(
    s => s.level >= 75 && s.level < 90
  ).length;
  const intermediateSkills = skills.filter(s => s.level < 75).length;

  return {
    total: totalSkills,
    expert: expertSkills,
    advanced: advancedSkills,
    intermediate: intermediateSkills,
    categories: skillCategories.map(cat => ({
      name: cat.name,
      count: skills.filter(s => s.category === cat.name).length,
      avgLevel: Math.round(
        skills
          .filter(s => s.category === cat.name)
          .reduce((acc, s) => acc + s.level, 0) /
          skills.filter(s => s.category === cat.name).length
      ),
    })),
  };
};
