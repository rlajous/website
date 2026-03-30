"use client";

import Link from "next/link";
import { ReactNode } from "react";

/**
 * Props for the {@link SocialLink} component.
 */
interface SocialLinkProps {
  /** URL to navigate to (opens in a new tab). */
  href: string;
  /** Icon element rendered before the text label. */
  icon: ReactNode;
  /** Accessible label for screen readers (set as `aria-label`). */
  label: string;
  /** Whether to show the text label next to the icon. Defaults to true. */
  showText?: boolean;
  /** Display text shown next to the icon when {@link showText} is true. */
  text?: string;
  /** Additional CSS classes applied to the link. */
  className?: string;
  /** Umami analytics event name for tracking clicks. */
  "data-umami-event"?: string;
  /** Umami analytics identifier for distinguishing link instances. */
  "data-umami-id"?: string;
}

/**
 * Base social link component rendering an external link with icon and optional text label.
 *
 * All specialized social links ({@link EmailLink}, {@link GitHubLink}, {@link LinkedInLink},
 * {@link TwitterLink}, {@link WebsiteLink}) compose this component with platform-specific props.
 * Opens in a new tab with `noopener noreferrer` for security.
 *
 * Client component — used on interactive pages.
 */
export function SocialLink({
  href,
  icon,
  label,
  showText = true,
  text,
  className = "",
  "data-umami-event": umamiEvent,
  "data-umami-id": umamiId,
}: SocialLinkProps) {
  return (
    <Link
      className={`flex items-center space-x-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200 ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-umami-event={umamiEvent}
      data-umami-id={umamiId}
    >
      {icon}
      {showText && text && (
        <span className="text-sm md:text-lg truncate">{text}</span>
      )}
    </Link>
  );
}
