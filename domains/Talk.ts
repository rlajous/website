export interface Talk {
  id: number;
  slug: string;
  title: string;
  event: string;
  location: string;
  date: string;
  uploadDate?: string; // ISO 8601 format with timezone (e.g., "2025-11-19T12:00:00Z")
  description: string;
  topics: string[];
  links?: {
    slides?: string;
    video?: string;
    article?: string;
  };
  banner?: string;
}
