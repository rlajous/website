import { Contact } from "./types/contact";

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
