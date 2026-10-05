export type Locale = 'tr' | 'en';
export type Localized = string | Record<Locale, string>;

export interface PersonalInfo {
  name: string;
  profileImage: string;
  title: Localized;
  email: string;
  location: Localized;
  bio: Localized;
  socialLinks: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: Localized;
  technologies: string[];
  featured: boolean;
  href?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: Localized;
  startDate: string;
  endDate?: string;
  description: Localized;
  technologies: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: Localized;
  field: string;
  startDate: string;
  endDate?: string;
  description: Localized;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  tags: string[];
  content: string;
  featured?: boolean;
}
