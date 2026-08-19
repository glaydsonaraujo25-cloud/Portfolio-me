export type ProjectCategory = 'all' | 'ai' | 'security' | 'automation';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'security' | 'automation';
  categoryLabel: string;
  description: string;
  longDescription: string;
  architecture: string[];
  features: string[];
  techStack: string[];
  status: 'Concluído' | 'Em desenvolvimento' | 'Protótipo Funcional';
  githubUrl?: string;
  demoUrl?: string;
  practicalSecurityOrAIImpact: string;
}

export interface SkillCategory {
  id: 'ai' | 'security' | 'dev';
  name: string;
  iconName: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  badge: string;
  focus: string;
  practicalApplication: string;
  topics: string[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  status: 'concluido' | 'em_andamento' | 'proximo_passo';
  badge: string;
  items: string[];
  summary: string;
}

export interface AIConcept {
  id: string;
  title: string;
  tagline: string;
  description: string;
  practicalUse: string;
  exampleSnippet?: {
    label: string;
    before?: string;
    after: string;
    explanation: string;
  };
  metricsOrPillars: string[];
}

export interface EducationItem {
  institution: string;
  course: string;
  level: string;
  status: 'Em andamento' | 'Concluído' | 'Certificação em estudo';
  period: string;
  focusAreas: string[];
  description: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
