export interface Education {
  id: number;
  slug: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  institutionUrl?: string;
  specialization?: string;
  thesis?: {
    title: string;
    description: string;
    link?: string;
  };
  coursework?: string[];
  achievements?: string[];
  technologies: string[];
  banner?: string;
}
