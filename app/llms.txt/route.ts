import { generateLlmsTxt } from "@/utils/llms";

/**
 * Serves the concise llms.txt content at `GET /llms.txt` as plain text.
 *
 * @returns A plain-text Response with the generated LLM summary.
 *
 * @see https://llmstxt.org/
 */
export function GET() {
  return new Response(generateLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
