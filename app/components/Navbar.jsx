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
    <>
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
                    relative px-3 py-2 rounded-md font-medium text-white transition-colors duration-200 font-semibold
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
    </>
  );
}
