import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Parametric Solutions",
  description: "We build anything with 3D printing, woodworking, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Afacad:wght@400&family=Advent+Pro:wght@200&display=swap"
        />
      </Head>
      <body className="relative min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}