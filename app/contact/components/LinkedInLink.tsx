import Link from "next/link";
import { LinkedinIcon } from "lucide-react";

export function LinkedInLink({ profile }: { profile: string }) {
  return (
    <Link
      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition-colors"
      href={`https://www.linkedin.com/in/${profile}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
    >
      <LinkedinIcon className="h-6 w-6" />
      <span className="text-sm md:text-lg truncate">/{profile}</span>
    </Link>
  );
}
