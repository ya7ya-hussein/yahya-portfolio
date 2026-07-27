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

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  /** Image or video filename served from /public. Videos: .mp4 / .webm */
  mediaUrl?: string;
  githubUrl?: string;
  projectUrl?: string;
  /** Controls inclusion in the "Featured Projects" grid. */
  featured: boolean;
  /** Work in progress: hides links and shows the Upcoming badge. */
  upcoming?: boolean;
}

export type ArticlePlatform = 'LinkedIn' | 'Medium';

export interface Article {
  id: number;
  title: string;
  platform: ArticlePlatform;
  platformIcon: string;
  /** Human-readable, shown on the card, e.g. 'July 2026'. */
  date: string;
  /** Machine-sortable ISO date 'YYYY-MM-DD'. Drives ordering; never displayed. */
  publishedOn: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}
export interface Publication {
  id: number;
  title: string;
  venue?: string;
  date?: string;
  description?: string;
  url?: string;
}