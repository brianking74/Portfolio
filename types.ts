export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface Metric {
  label: string;
  value: string;
  context: string;
  icon?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
}

export enum SectionId {
  HERO = 'hero',
  STATS = 'stats',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  CONTACT = 'contact'
}