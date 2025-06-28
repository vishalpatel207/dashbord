import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full h-12 "></div>
      <div className="flex flex-1">
        <div className="-mt-12 z-10 relative">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-8 bg-transparent">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}