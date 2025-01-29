import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Parametric Solutions",
  description: "We build anything with 3D printing, woodworking, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}