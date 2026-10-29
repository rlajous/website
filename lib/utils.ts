import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names, resolving conflicting utility classes.
 *
 * Combines `clsx` (conditional class joining) with `tailwind-merge` (conflict resolution)
 * so that later classes override earlier ones when they target the same CSS property.
 *
 * @param inputs - Class values (strings, objects, arrays, or falsy values) to merge.
 * @returns A single merged class name string with conflicts resolved.
 *
 * @see https://github.com/dcastil/tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shortens text for a meta description, cutting at the last sentence (or word) that
 * fits so search results don't show a sentence chopped mid-way.
 *
 * @param text - Full description text.
 * @param max - Maximum length; ~155 keeps it inside Google's snippet.
 * @returns The text unchanged when it fits, otherwise a shortened version.
 */
export function metaDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const sentenceEnd = slice.lastIndexOf(". ");
  if (sentenceEnd > max / 2) return slice.slice(0, sentenceEnd + 1);
  return `${slice.slice(0, slice.lastIndexOf(" "))}…`;
}

/**
 * Lightweight base64-encoded SVG used as a blur placeholder for Next.js Image components.
 *
 * Renders a neutral gray rectangle that matches the muted background token,
 * preventing content pop-in while images load.
 */
export const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZTVlNWU1Ii8+PC9zdmc+";
