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
