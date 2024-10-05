import { MailIcon } from "lucide-react";

export function EmailLink({ email }: { email: string }) {
  return (
    <a
      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
      href={`mailto:${email}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send Email"
    >
      <MailIcon className="h-6 w-6" />
      <span className="text-sm md:text-lg truncate">{email}</span>
    </a>
  );
}
