import React from "react";

export default function Footer() {
  return (
    <footer className="w-full rounded-b-2xl text-xs px-4 sm:px-8 py-4 flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between md:items-center text-white">
      <div className="text-center md:text-left">
        © 2021, Made with <span className="text-pink-400">♥</span> by{" "}
        <span className="font-semibold">Simmmple</span> &{" "}
        <span className="font-semibold">Creative Tim</span> for a better web
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 items-center">
        <a href="#" className="hover:underline">
          Marketplace
        </a>
        <a href="#" className="hover:underline">
          Blog
        </a>
        <a href="#" className="hover:underline">
          License
        </a>
      </div>
    </footer>
  );
}
