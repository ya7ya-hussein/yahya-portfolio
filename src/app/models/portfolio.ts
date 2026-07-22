export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  featured: boolean;
  upcoming?: boolean;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
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
  upcoming?: boolean;
}

export interface Publication {
  id: number;
  title: string;
  journal?: string;
  date?: string;
  description?: string;
  url?: string;
  comingSoon: boolean;
  upcoming?: boolean;
}