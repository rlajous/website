/**
 * @module lib/askLlms
 * @description Builds deep links that open a visitor's own LLM chat (ChatGPT, Claude,
 * Gemini, Grok, Perplexity) with a prompt that points the model at this site's
 * `/llms-full.txt` and `/llms.txt` bios.
 *
 * Everything runs in the visitor's own assistant — there is no backend, API key,
 * or proxy involved, so no usage is billed to the site owner.
 *
 * @see https://llmstxt.org/
 */

import { SITE_URL } from "@/constants/routes";

/** Identifier for each supported LLM chat provider. */
export type LlmProviderId =
  | "chatgpt"
  | "claude"
  | "gemini"
  | "grok"
  | "perplexity";

/**
 * A chat provider that accepts a prefilled prompt through a query string.
 */
export interface LlmProvider {
  /** Stable identifier used as a React key and analytics label. */
  id: LlmProviderId;
  /** Display name shown on the button. */
  name: string;
  /** Base URL including the trailing query parameter the prompt is appended to. */
  baseUrl: string;
}

/**
 * Supported providers, in the order they are rendered.
 *
 * Each `baseUrl` ends with the query parameter used by that provider to prefill
 * the composer, so the encoded prompt can simply be concatenated.
 */
export const LLM_PROVIDERS: LlmProvider[] = [
  { id: "chatgpt", name: "ChatGPT", baseUrl: "https://chatgpt.com/?q=" },
  { id: "claude", name: "Claude", baseUrl: "https://claude.ai/new?q=" },
  { id: "gemini", name: "Gemini", baseUrl: "https://gemini.google.com/app?q=" },
  { id: "grok", name: "Grok", baseUrl: "https://grok.com/?q=" },
  {
    id: "perplexity",
    name: "Perplexity",
    baseUrl: "https://www.perplexity.ai/search?q=",
  },
];

/**
 * Builds the prompt handed to the visitor's assistant.
 *
 * The prompt instructs the model to read the site's machine-readable bios first
 * and to stay grounded in them rather than inventing biographical details.
 *
 * @returns The plain-text prompt, not yet URL-encoded.
 */
export function buildAskLlmPrompt(): string {
  return [
    `Please fetch and read ${SITE_URL}/llms-full.txt (and ${SITE_URL}/llms.txt if you need the short index).`,
    "",
    "They describe Rodrigo Manuel Navarro Lajous, a Product Engineer who builds developer platforms, SDKs, APIs, and multi-chain infrastructure.",
    "",
    "Using only what those files say, give me a short summary of his background, then answer my follow-up questions about his experience, projects, talks, education, and skills.",
    "",
    `Ground every answer in those files. Do not invent facts, dates, employers, or numbers. If something is not covered there, say so plainly and point me to ${SITE_URL}/contact instead of guessing.`,
  ].join("\n");
}

/**
 * Builds the deep link that opens a provider's chat with the prompt prefilled.
 *
 * @param provider - The chat provider to open.
 * @param prompt - Prompt text to prefill. Defaults to {@link buildAskLlmPrompt}.
 * @returns An absolute URL safe to use as an `href`.
 */
export function buildAskLlmUrl(
  provider: LlmProvider,
  prompt: string = buildAskLlmPrompt()
): string {
  return `${provider.baseUrl}${encodeURIComponent(prompt)}`;
}

/**
 * Builds the deep link for every supported provider in a single pass.
 *
 * @returns Providers paired with their prefilled chat URL, in render order.
 */
export function buildAskLlmLinks(): (LlmProvider & { url: string })[] {
  const prompt = buildAskLlmPrompt();
  return LLM_PROVIDERS.map((provider) => ({
    ...provider,
    url: buildAskLlmUrl(provider, prompt),
  }));
}
