import React from "react";

/**
 * Site footer displaying dynamic copyright year.
 * Rendered at the bottom of every page via the root layout.
 */
const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full text-center text-gray-600 dark:text-gray-400 py-2 md:py-4 mt-auto">
      <p className="text-xs">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
