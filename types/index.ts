export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  salary?: string;
  description: string;
  postedDate: string;
  applicationUrl: string;
}

export interface FilterOptions {
  type?: string;
  location?: string;
  search?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
}