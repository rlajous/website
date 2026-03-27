/**
 * Represents a conference talk or speaking engagement.
 *
 * Used by the talks service and rendered on `/talks` (list) and `/talks/[slug]` (detail).
 * Also consumed by {@link SchemaOrgScripts} to generate Event and VideoObject structured data.
 */
export interface Talk {
  /** Unique numeric identifier used for ordering. */
  id: number;
  /** URL-safe identifier used in the `/talks/[slug]` route. */
  slug: string;
  /** Title of the talk as presented at the event. */
  title: string;
  /** Name of the conference or meetup where the talk was given. */
  event: string;
  /** URL of the event organizer's website. Used in Schema.org Event markup. */
  organizerUrl?: string;
  /** Venue and city where the talk was delivered (e.g. "Buenos Aires, Argentina"). */
  location: string;
  /** ISO 3166-1 country name (e.g. "Argentina", "United States"). Used for Schema.org PostalAddress. */
  country?: string;
  /** Human-readable date string (e.g. "November 2024"). Displayed on the talk card. */
  date: string;
  /** ISO 8601 timestamp with timezone (e.g. "2025-11-19T12:00:00Z"). Used for Schema.org startDate and VideoObject uploadDate. */
  uploadDate?: string;
  /** Summary of the talk content shown on both the card and detail page. */
  description: string;
  /** Topic tags rendered as badges on the talk card and detail page. */
  topics: string[];
  /** Optional external resources associated with the talk. */
  links?: {
    /** URL or path to the slide deck PDF. Rendered via PDFViewer on the detail page. */
    slides?: string;
    /** YouTube video URL. Rendered via YouTubeEmbed on the detail page. */
    video?: string;
    /** URL to a related blog post or article. */
    article?: string;
  };
  /** Path to the banner image relative to the `/public` directory. */
  banner?: string;
  /** Schema.org Offer data for event ticketing metadata. */
  offers?: {
    /** Ticket price (e.g. "0" for free events). */
    price: string;
    /** ISO 4217 currency code (e.g. "USD"). */
    priceCurrency: string;
    /** Schema.org availability value (e.g. "https://schema.org/InStock"). */
    availability: string;
    /** URL to the ticket purchase or registration page. */
    url: string;
  };
}
