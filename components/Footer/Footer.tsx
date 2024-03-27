import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full text-center text-gray-600 dark:text-gray-400 row-span-2 lg:row-span-1 ">
      <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 ">
        <Link
          className="text-sm"
          href="https://www.linkedin.com/in/rodrigo-manuel-navarro-lajous"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          className="text-sm"
          href="https://github.com/rlajous"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
      <p className="mt-4 text-xs">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
