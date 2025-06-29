import "./globals.css";
import React from "react";
import DashBordMain from "./layouts/DashbordMain";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base-ui bg-cover bg-no-repeat bg-center min-h-screen">
        <DashBordMain>{children}</DashBordMain>
      </body>
    </html>
  );
}
