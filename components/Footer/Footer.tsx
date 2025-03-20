import React from "react";

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
