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
  date: string;
  description: string;
  /**
   * Single source of truth for publication state.
   * A live URL means published; absent or empty means upcoming.
   */
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