"use client";

import React from "react";
import { usePathname } from "next/navigation";

const formatPageName = (path: string) => {
  if (path === "/") return "Home";
  // Split path by `/` and get last segment for simple page name
  const segments = path.split("/").filter(Boolean);
  // Convert kebab-case or snake_case to Capitalized words
  return segments
    .map((segment) =>
      segment
        .split(/[-_]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
    .join(" / ");
};

export default function Navbar() {
  const pathname = usePathname();
  const pageName = pathname ? formatPageName(pathname) : "";

  return (
    <div className="flex items-center justify-between px-8 bg-transparent">
      <div>
        <div className="text-xs text-gray-400 mb-1">
          Pages <span className="text-white"> / {pageName}</span>
        </div>
        <div className="text-sm font-bold text-white">{pageName}</div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src="/search.svg"
            alt="Search"
            className="absolute left-3.5 top-3"
          />
          <input
            type="text"
            placeholder="Type here..."
            className="pl-10 pr-4 text-sm py-2 rounded-[15px] bg-[#0F1535] border border-[0.5px] border-[#E2E8F04D] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1583f7] w-44"
          />
        </div>

        <div className="flex items-center text-white space-x-2 cursor-pointer hover:text-[#1583f7] transition">
          <img src="/profile.svg" alt="User" className="w-4 h-4" />
          <span className="text-sm text-[#718096]">Sign In</span>
        </div>

        <div className="cursor-pointer hover:text-[#1583f7] transition">
          <img src="/setting.svg" alt="Settings" className="w-4 h-4" />
        </div>

        <div className="cursor-pointer hover:text-[#1583f7] transition">
          <img
            src="/notification.svg"
            alt="Notifications"
            className="w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
}
