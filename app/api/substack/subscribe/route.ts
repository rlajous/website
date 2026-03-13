import { NextResponse } from "next/server";
import { z } from "zod";
import getEnv from "@/utils/getEnv";
import { SITE_URL } from "@/constants/routes";

const SubscribeSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
});

const FETCH_TIMEOUT_MS = 5_000;

/** Handles newsletter subscription requests by proxying to the Substack API. */
export async function POST(request: Request): Promise<NextResponse> {
  const substackUrl = getEnv(
    process.env.SUBSTACK_PUBLICATION_URL,
    "SUBSTACK_PUBLICATION_URL"
  );

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

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    let substackResponse: Response;
    try {
      substackResponse = await fetch(`${substackUrl}/api/v1/free`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_url: `${substackUrl}/`,
          first_referrer: "",
          current_url: `${substackUrl}/`,
          current_referrer: `${SITE_URL}/`,
          referral_code: "",
          source: "embed",
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeout);
    }

    if (!substackResponse.ok) {
      const responseBody = await substackResponse.text();
      console.error(
        "Substack API error:",
        substackResponse.status,
        responseBody.slice(0, 200)
      );
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      console.error("Substack API request timed out");
      return NextResponse.json(
        { error: "Upstream service timed out. Please try again later." },
        { status: 504 }
      );
    }

    console.error("Error subscribing to Substack:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
