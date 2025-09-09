// Re-exportar tipos dos arquivos de dados
export type { Project } from '@/data/projects';
export type { Skill } from '@/data/skills';
export type { Experience } from '@/data/experience';

// Tipos para navegação
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
}

// Tipos para formulário de contato
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Tipos para resposta da API com genérico tipado
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Tipos para animações
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  repeat?: number;
  repeatType?: 'loop' | 'reverse' | 'mirror';
}

// Tipos para tema
export interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  accentColor: string;
}

// Tipos para seções
export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
}

// Tipos para social links
export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType;
  label: string;
}

// Tipos para testimonials (se adicionar depois)
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company?: string;
  content: string;
  rating?: number;
  image?: string;
}

// Tipos para blog posts (se adicionar depois)
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  readTime: number;
}

// Tipos para notificações
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

// Tipos para filtros
export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

// Tipos para paginação
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

// Tipos para status
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Tipos para viewport
export interface ViewportSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

// Tipos para AI Chat (se implementar)
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

// Tipos para analytics (se implementar)
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}
