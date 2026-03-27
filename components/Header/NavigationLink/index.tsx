"use client";
import React, { forwardRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Props for the {@link NavigationLink} component.
 */
interface NavigationLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  /** Route path or URL to navigate to. */
  href: string;
  /** Display label shown in the navigation. */
  name: string;
  /** When true, opens the link in a new tab with noopener noreferrer. */
  isExternal?: boolean;
}

/**
 * Navigation link with active-state underline indicator.
 *
 * Uses `forwardRef` for composition with Radix `NavigationMenuLink`.
 * Highlights the current page with a bottom border based on pathname matching.
 * Tracks navigation events via Umami analytics.
 *
 * Client component — requires `usePathname` for active state detection.
 */
const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(
  ({ href, name, isExternal, ...props }, ref) => {
    const isActive = usePathname() === href;
    const linkClass = cn("text-sm font-semibold py-2 inline-block border-b-2", {
      "border-transparent": !isActive,
      "border-primary": isActive,
    });

    return (
      <Link
        ref={ref}
        href={href}
        className={linkClass}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        data-umami-event={`Navigate to ${name}`}
        {...props}
      >
        {name}
      </Link>
    );
  }
);

NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
