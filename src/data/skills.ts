export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'AI/ML' | 'Database' | 'DevOps' | 'Tools';
  icon?: string;
  color?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 95, category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js 14/15', level: 90, category: 'Frontend', color: '#000000' },
  { name: 'TypeScript', level: 88, category: 'Frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend', color: '#06B6D4' },
  { name: 'Three.js', level: 75, category: 'Frontend', color: '#000000' },
  { name: 'Framer Motion', level: 85, category: 'Frontend', color: '#FF0080' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend', color: '#E34C26' },
  { name: 'JavaScript', level: 93, category: 'Frontend', color: '#F7DF1E' },

  // Backend
  { name: 'Node.js', level: 90, category: 'Backend', color: '#339933' },
  { name: 'Python', level: 88, category: 'Backend', color: '#3776AB' },
  { name: 'Express.js', level: 88, category: 'Backend', color: '#000000' },
  { name: 'FastAPI', level: 85, category: 'Backend', color: '#009688' },
  { name: 'Django', level: 78, category: 'Backend', color: '#092E20' },
  { name: 'GraphQL', level: 80, category: 'Backend', color: '#E10098' },
  { name: 'REST APIs', level: 92, category: 'Backend', color: '#FF6B6B' },

  // AI/ML
  { name: 'TensorFlow', level: 82, category: 'AI/ML', color: '#FF6F00' },
  { name: 'PyTorch', level: 78, category: 'AI/ML', color: '#EE4C2C' },
  { name: 'LangChain', level: 85, category: 'AI/ML', color: '#1C3A37' },
  { name: 'OpenAI API', level: 90, category: 'AI/ML', color: '#10A37F' },
  { name: 'Computer Vision', level: 75, category: 'AI/ML', color: '#5C5CFF' },
  { name: 'NLP/LLMs', level: 83, category: 'AI/ML', color: '#FF4081' },
  { name: 'Scikit-learn', level: 80, category: 'AI/ML', color: '#F7931E' },
  { name: 'Pandas', level: 85, category: 'AI/ML', color: '#150458' },

  // Database
  { name: 'MongoDB', level: 88, category: 'Database', color: '#47A248' },
  { name: 'PostgreSQL', level: 85, category: 'Database', color: '#4169E1' },
  { name: 'Redis', level: 82, category: 'Database', color: '#DC382D' },
  { name: 'Pinecone', level: 78, category: 'Database', color: '#000000' },
  { name: 'MySQL', level: 80, category: 'Database', color: '#4479A1' },

  // DevOps
  { name: 'Docker', level: 85, category: 'DevOps', color: '#2496ED' },
  { name: 'Kubernetes', level: 75, category: 'DevOps', color: '#326CE5' },
  { name: 'AWS', level: 82, category: 'DevOps', color: '#FF9900' },
  { name: 'CI/CD', level: 80, category: 'DevOps', color: '#2088C6' },
  { name: 'GitHub Actions', level: 85, category: 'DevOps', color: '#2088E5' },

  // Tools
  { name: 'Git/GitHub', level: 92, category: 'Tools', color: '#F05032' },
  { name: 'VS Code', level: 95, category: 'Tools', color: '#007ACC' },
  { name: 'Figma', level: 70, category: 'Tools', color: '#F24E1E' },
  { name: 'Postman', level: 88, category: 'Tools', color: '#FF6C37' },
  { name: 'Jira', level: 85, category: 'Tools', color: '#0052CC' },
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
