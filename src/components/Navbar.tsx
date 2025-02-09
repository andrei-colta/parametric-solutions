"use client";
import Link from "next/link";
import Image from "next/image";
import { Theme } from "@/app/shared/theme";

export default function Navbar() {
  return (
    <nav className={`hover:bg-[rgba(154,140,152,0.6)] bg-[rgba(154,140,152,0.1)] text-[${Theme.LIGHT}] pr-6 flex justify-between items-center shadow-lg xl:h-20 h-16 ease-in-out duration-500`}>
      {/* Logo */}
      <div className="flex items-center h-full">
        <Link href="/" className="h-full flex items-center xl:space-x-8 space-x-4 truncate">
          <Image
            src="/parametric.jpg"
            alt="Parametric Solutions Logo"
            width={50}
            height={50}
            className="h-full w-auto object-contain"
          />
          <span className="font-light font-advent text-[clamp(2rem,2.5vw,3.25rem)]">Parametric Solutions</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex xl:space-x-16 md:space-x-12 font-afacad mr-16 truncate">
        {["3D Printing", "Woodworking", "Laser Engraving", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-white transition duration-200 text-[clamp(1rem,4vw,1.5rem)]"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}