"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  showText?: boolean;
  text?: string;
  className?: string;
  "data-umami-event"?: string;
}

export function SocialLink({
  href,
  icon,
  label,
  showText = true,
  text,
  className = "",
  "data-umami-event": umamiEvent,
}: SocialLinkProps) {
  return (
    <Link
      className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-umami-event={umamiEvent}
    >
      {icon}
      {showText && text && (
        <span className="text-sm md:text-lg truncate">{text}</span>
      )}
    </Link>
  );
}
