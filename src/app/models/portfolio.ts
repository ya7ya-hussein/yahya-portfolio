export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Article {
  id: number;
  title: string;
  platform: string;
  platformIcon: string;
  date: string;
  description: string;
  url: string;
  published: boolean;
}

export interface Publication {
  id: number;
  title: string;
  journal?: string;
  date?: string;
  description?: string;
  url?: string;
  comingSoon: boolean;
}
