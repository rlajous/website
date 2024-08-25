import Link from "next/link";
import { LinkedinIcon, MailIcon } from "lucide-react";
import ContactForm from "./components/ContactForm";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center row-span-8 lg:row-span-11">
      <main className="w-full max-w-2xl p-4 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
          Contact Me
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          Have a project you&apos;d like to discuss? Feel free to reach out.
        </p>
        <ContactForm />
        <div className="flex items-center space-x-4 flex-col">
          <Link
            className="flex items-center mt-4 text-blue-600 dark:text-blue-400"
            href="#"
          >
            <LinkedinIcon className="h-6 w-6 mr-2" />
            /rodrigo-lajous
            <span className="sr-only">LinkedIn</span>
          </Link>
          <a
            className="flex items-center mt-4 text-gray-600 dark:text-gray-400"
            href="mailto:odrigo@lajous.com.ar"
          >
            <MailIcon className="h-6 w-6 mr-2" />
            rodrigolajous@gmail.com
            <span className="sr-only">Email</span>
          </a>
        </div>
      </main>
    </div>
  );
}
