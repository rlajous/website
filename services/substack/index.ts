interface SubscribeResponse {
  message: string;
}

interface SubscribeErrorResponse {
  error?: string;
}

/** Sends a subscribe request to the Substack newsletter API route. */
export async function subscribeToSubstack(
  email: string
): Promise<SubscribeResponse> {
  try {
    const response = await fetch("/api/substack/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData: SubscribeErrorResponse = await response.json();
      throw new Error(errorData.error || "Failed to subscribe");
    }

    const result: SubscribeResponse = await response.json();
    return result;
  } catch (error: unknown) {
    console.error(
      "Error in subscribeToSubstack:",
      error instanceof Error ? error.message : error
    );
    throw error;
  }
}
