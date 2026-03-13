import { NextResponse } from "next/server";
import { z } from "zod";

const SubscribeSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
});

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const parsed = SubscribeSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    const substackResponse = await fetch(
      "https://lajous.substack.com/api/v1/free",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_url: "https://lajous.substack.com/",
          first_referrer: "",
          current_url: "https://lajous.substack.com/",
          current_referrer: "https://navarrolajous.com/",
          referral_code: "",
          source: "embed",
        }),
      }
    );

    if (!substackResponse.ok) {
      console.error(
        "Substack API error:",
        substackResponse.status,
        await substackResponse.text()
      );
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("Error subscribing to Substack:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
