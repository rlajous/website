import React from "react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { DISPLAY_NAME, GITHUB_URL, LINKEDIN_URL, X_URL } from "@/constants/profile";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/SocialBrands";

const NAV_LINKS = [
  { href: ROUTES.EXPERIENCE, label: "Experience" },
  { href: ROUTES.PROJECTS, label: "Projects" },
  { href: ROUTES.EDUCATION, label: "Education" },
  { href: ROUTES.TALKS, label: "Talks" },
];

/**
 * Site footer with social links, navigation, and copyright.
 * Rendered at the bottom of every page via the root layout.
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-200"
              aria-label="X (Twitter)"
            >
              <XIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              >
                {label}
              </Link>
            ))}
            <Link
              href={ROUTES.CONTACT}
              className="text-sm text-link hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Get in touch
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {DISPLAY_NAME}. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
