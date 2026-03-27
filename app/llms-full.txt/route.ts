import { generateLlmsFullTxt } from "@/utils/llms";

/**
 * Serves the comprehensive llms-full.txt content at `GET /llms-full.txt` as plain text.
 *
 * @returns A plain-text Response with the expanded LLM document.
 *
 * @see https://llmstxt.org/
 */
export function GET() {
  return new Response(generateLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
