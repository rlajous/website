export async function subscribeToSubstack(email: string) {
  try {
    const response = await fetch("/api/substack/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to subscribe");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error in subscribeToSubstack:", error);
    throw error;
  }
}
