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
 * Lightweight base64-encoded SVG used as a blur placeholder for Next.js Image components.
 *
 * Renders a neutral gray rectangle that matches the muted background token,
 * preventing content pop-in while images load.
 */
export const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZTVlNWU1Ii8+PC9zdmc+";
