export interface Talk {
  id: number;
  slug: string;
  title: string;
  event: string;
  location: string;
  date: string;
  description: string;
  topics: string[];
  links?: {
    slides?: string;
    video?: string;
    article?: string;
  };
  banner?: string;
}
