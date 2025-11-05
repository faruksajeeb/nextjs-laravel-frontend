"use client";

import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-sky-500 to-purple-600 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-3 py-2 rounded-md font-medium text-white transition-colors duration-200
                    ${isActive ? "text-yellow-300" : "hover:text-yellow-300"}
                  `}
                >
                  {link.label}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full bg-yellow-300 
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                      ${isActive ? "scale-x-100" : ""}
                    `}
                  ></span>
                </Link>
              );
            })}

            {/* Book Now Button */}
            <Link
              href="/booking"
              className="ml-4 bg-yellow-300 text-indigo-700 px-4 py-2 rounded-md font-semibold shadow hover:shadow-lg transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="p-2 rounded-md border border-white/30 text-white hover:bg-white/10 transition"
            >
              <span className="text-2xl">{mobileOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transform transition-all duration-300 origin-top ${
          mobileOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pb-6 pt-2 bg-gradient-to-b from-indigo-600 via-sky-500 to-purple-600">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-white hover:bg-white/20 transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3">
              <Link
                href="/booking"
                className="block text-center bg-yellow-300 text-indigo-700 px-4 py-2 rounded-md font-medium shadow hover:shadow-lg transition"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
