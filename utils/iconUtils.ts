/**
 * Predefined icon size tokens used by social link components for consistent sizing.
 */
export type IconSize = "sm" | "md" | "lg";

/**
 * Maps each {@link IconSize} token to Tailwind dimension classes.
 *
 * Used by social link components (`EmailLink`, `GitHubLink`, etc.) to apply
 * consistent width and height to their icon elements.
 */
export const iconSizeClasses: Record<IconSize, string> = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-8 w-8",
};
