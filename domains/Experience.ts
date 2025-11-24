export interface Experience {
  id: number;
  slug: string;
  position: string;
  company: string;
  period: string;
  type: 'job' | 'startup';
  location?: string;
  companyUrl?: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  banner?: string;
}
