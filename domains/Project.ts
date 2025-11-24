export interface Project {
  id: number;
  slug: string;
  name: string;
  company: string;
  type: 'freelance' | 'hobby' | 'opensource';
  github: string;
  website: string;
  period: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  banner: string;
  screenshots?: string[];
  features?: string[];
  challenges?: string[];
  impact?: string;
}
