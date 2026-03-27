/**
 * Represents a contact form submission from a site visitor.
 * Sent to the `/api/contact` endpoint and used by the Resend email template.
 */
export interface Contact {
  /** Full name of the person reaching out. */
  name: string;
  /** Email address for reply correspondence. */
  email: string;
  /** Body of the contact message. */
  message: string;
}
