
export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  category: 'web' | 'android' | 'ml';
  image: string;
  sourceLink?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  description: string;
  logo: string;
}
