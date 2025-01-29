"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-[rgba(154,140,152,0.66)] text-[#F2E9E4] pr-6 flex justify-between items-center shadow-lg h-24">
      {/* Logo */}
      <div className="flex items-center h-full">
        <Link href="/" className="h-full flex items-center space-x-8">
          <Image
            src="/parametric.jpg"
            alt="Parametric Solutions Logo"
            width={100}
            height={100}
            className="h-full w-auto object-contain"
          />
          <span className="font-light font-advent text-5xl">Parametric Solutions</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-16 font-afacad mr-16">
        {["Graphic Design", "3D Printing", "Woodworking", "Laser Engraving", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-white transition duration-200 text-2xl"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}