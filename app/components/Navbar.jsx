// components/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ onCloseMobile } = {}) {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/packages", label: "Packages" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center gap-6">
      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {links.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => onCloseMobile && onCloseMobile()}
              className={`relative group transition-colors duration-200 font-bold ${
                isActive
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              {link.label}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-600
                  transform origin-left scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 font-bold ${
                    isActive ? "scale-x-100" : ""
                  }`}
                aria-hidden="true"
              />
            </Link>
          );
        })}
        <Link
          href="/booking"
          className="ml-2 inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-md shadow-sm hover:shadow-md transition"
        >
          Book
        </Link>
      </div>

      {/* Mobile: show Book button (small) */}
      <div className="md:hidden flex items-center gap-2">
        <Link
          href="/booking"
          className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Book
        </Link>
      </div>
    </nav>
  );
}
