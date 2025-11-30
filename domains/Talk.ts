export interface Talk {
  id: number;
  slug: string;
  title: string;
  event: string;
  location: string;
  country?: string; // ISO 3166-1 country name (e.g., "Argentina", "United States")
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
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
}
