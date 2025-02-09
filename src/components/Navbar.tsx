"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@mui/icons-material";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node) // Prevents closing when clicking the button
      ) {
        setMenuOpen(false);
      }
    }


    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navLinks = ["3D Printing", "Woodworking", "Laser Engraving", "Contact"];

  return (
    <nav className={`hover:bg-[rgba(154,140,152,0.6)] bg-[rgba(154,140,152,0.1)] text-light pr-6 flex justify-between items-center shadow-lg xl:h-20 h-16 ease-in-out duration-500`}>

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

      {/* Desktop Navigation Links (Hidden on Small Screens) */}
      <div className="hidden lg:flex xl:space-x-16 lg:space-x-12 font-afacad mr-16 truncate">
        {navLinks.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-white transition duration-200 text-[clamp(1rem,4vw,1.5rem)]"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button (Visible on Small Screens) */}
      <button
        ref={menuButtonRef}
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen((prevOpen) => !prevOpen)}
      >
        <Menu />
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={`absolute top-16 right-0 w-36 bg-[rgb(154,140,152)] z-20 rounded-bl-lg shadow-lg flex flex-col items-center transition-all duration-300 ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        {navLinks.map((item, index) => (
          <div key={item} className="w-full text-center font-afacad py-2 hover:text-white transition duration-200">
            <Link

              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
            {index < navLinks.length - 1 && <hr className="mt-2 border-[rgba(255,255,255,0.5)]" />}
          </div>
        ))}
      </div>
    </nav>
  );
}
