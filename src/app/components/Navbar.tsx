"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#3b3742] text-[#e2dcd9] px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="text-3xl font-bold tracking-widest">P</div>
        <span className="text-lg font-light">Parametric Solutions</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {["Graphic Design", "3D Printing", "Woodworking", "Laser Engraving", "Contact"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-white transition duration-200"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}