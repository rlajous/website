import { Metadata } from "next";
import { ContactForm } from "./components/ContactForm";
import { LinkedInLink } from "@/components/social/LinkedInLink";
import { GitHubLink } from "@/components/social/GitHubLink";

/** Metadata for the contact page (title, description, canonical URL). */
export const metadata: Metadata = {
  title: "Contact | Rodrigo Manuel Navarro Lajous",
  description:
    "Get in touch with Rodrigo Manuel Navarro Lajous for project inquiries and collaborations.",
  alternates: {
    canonical: "/contact",
  },
};

/**
 * Contact page rendering the {@link ContactForm} and social links (LinkedIn, GitHub).
 * Server component — the form itself is a client component.
 */
export default function ContactPage() {
  const linkedInProfile = "rodrigo-lajous";
  const githubUsername = "rlajous";

  return (
    <div className="flex flex-col items-center justify-center row-span-8 lg:row-span-11 w-full px-4 py-4 lg:py-6">
      <main className="w-full max-w-2xl p-6 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
          Contact Me
        </h1>
        <p className="text-md text-center text-gray-600 dark:text-gray-400">
          Have a project you&apos;d like to discuss? Feel free to reach out.
        </p>

        <ContactForm />

        <div className="flex flex-col items-center space-y-4">
          <LinkedInLink profile={linkedInProfile} showText={true} />
          <GitHubLink username={githubUsername} showText={true} />
        </div>
      </main>
    </div>
  );
}
