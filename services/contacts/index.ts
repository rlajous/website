import { Contact } from "./types/contact";

/**
 * Sends a contact form submission to the server-side API endpoint.
 *
 * Posts the contact data to `/api/contact`, which validates the input and
 * sends a notification email via Resend.
 *
 * @param contact - The contact form data containing name, email, and message.
 * @returns The parsed JSON response from the API with a success message.
 * @throws Re-throws network errors and server validation errors.
 */
export async function createContact({ name, email, message }: Contact) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to send email");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in createContact:", error);
    throw error;
  }
}
