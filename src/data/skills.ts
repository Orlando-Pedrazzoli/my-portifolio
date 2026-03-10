export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  color?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React 18/19', level: 90, category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js 14–16', level: 85, category: 'Frontend', color: '#000000' },
  { name: 'TypeScript', level: 80, category: 'Frontend', color: '#3178C6' },
  {
    name: 'JavaScript ES6+',
    level: 92,
    category: 'Frontend',
    color: '#F7DF1E',
  },
  {
    name: 'Tailwind CSS 3/4',
    level: 90,
    category: 'Frontend',
    color: '#06B6D4',
  },
  { name: 'Vite', level: 85, category: 'Frontend', color: '#646CFF' },
  { name: 'Framer Motion', level: 78, category: 'Frontend', color: '#FF0080' },
  { name: 'React Router', level: 88, category: 'Frontend', color: '#CA4245' },
  {
    name: 'React Hook Form + Zod',
    level: 82,
    category: 'Frontend',
    color: '#EC5990',
  },
  {
    name: 'TanStack React Query',
    level: 78,
    category: 'Frontend',
    color: '#FF4154',
  },
  { name: 'Radix UI', level: 75, category: 'Frontend', color: '#111111' },
  { name: 'HTML5 / CSS3', level: 92, category: 'Frontend', color: '#E34C26' },

  // Backend
  { name: 'Node.js', level: 85, category: 'Backend', color: '#339933' },
  { name: 'Express', level: 85, category: 'Backend', color: '#000000' },
  { name: 'REST APIs', level: 88, category: 'Backend', color: '#FF6B6B' },
  { name: 'JWT / Auth', level: 85, category: 'Backend', color: '#000000' },
  { name: 'Mongoose', level: 85, category: 'Backend', color: '#880000' },
  { name: 'Clerk', level: 78, category: 'Backend', color: '#6C47FF' },
  {
    name: 'Stripe (Payments + Webhooks)',
    level: 82,
    category: 'Backend',
    color: '#008CDD',
  },
  {
    name: 'Resend / EmailJS',
    level: 80,
    category: 'Backend',
    color: '#0F9E51',
  },
  {
    name: 'Multer (File Upload)',
    level: 78,
    category: 'Backend',
    color: '#FFA500',
  },
  {
    name: 'Melhor Envio API',
    level: 75,
    category: 'Backend',
    color: '#00B4D8',
  },

  // Database and Storage
  { name: 'MongoDB Atlas', level: 88, category: 'Database', color: '#47A248' },
  { name: 'Cloudinary', level: 85, category: 'Database', color: '#3448C5' },

  // Tools and Workflow
  { name: 'Git / GitHub', level: 88, category: 'Tools', color: '#F05032' },
  { name: 'Vercel', level: 88, category: 'Tools', color: '#000000' },
  { name: 'VS Code', level: 90, category: 'Tools', color: '#007ACC' },
  { name: 'SEO / Schema.org', level: 80, category: 'Tools', color: '#30A854' },
  {
    name: 'Google Search Console',
    level: 78,
    category: 'Tools',
    color: '#458CF5',
  },
  {
    name: 'GDPR / Cookie Consent',
    level: 78,
    category: 'Tools',
    color: '#0066CC',
  },
  { name: 'Postman', level: 82, category: 'Tools', color: '#FF6C37' },
  { name: 'Jira', level: 75, category: 'Tools', color: '#0052CC' },
];

export const skillCategories = [
  { name: 'Frontend', icon: '🎨', description: 'UI Development' },
  { name: 'Backend', icon: '⚙️', description: 'Server & APIs' },
  { name: 'Database', icon: '💾', description: 'Data & Storage' },
  { name: 'Tools', icon: '🛠️', description: 'Workflow & DevOps' },
];

export const getSkillsByCategory = (category: Skill['category']) => {
  return skills
    .filter(skill => skill.category === category)
    .sort((a, b) => b.level - a.level);
};

export const getTopSkills = (limit: number = 6) => {
  return [...skills].sort((a, b) => b.level - a.level).slice(0, limit);
};

export const getSkillsStats = () => {
  const totalSkills = skills.length;
  const expertSkills = skills.filter(s => s.level >= 90).length;
  const advancedSkills = skills.filter(
    s => s.level >= 75 && s.level < 90,
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
          skills.filter(s => s.category === cat.name).length,
      ),
    })),
  };
};
