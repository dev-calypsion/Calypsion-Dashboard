"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "Projects", href: "/projects" },
  { label: "Technology", href: "/technology" },
  { label: "Industries", href: "/industries" },
  { label: "Company", href: "/company" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-slate-800 backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "bg-slate-950/90" : "bg-slate-950/70"
      }`}
    >
      {/* Glowing top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.svg"
            alt="Calypsion Innovations"
            width={180}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm rounded-md transition-colors duration-200 group
                    ${isActive ? "text-cyan-400 font-medium" : "text-slate-400 hover:text-white"}`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px bg-cyan-400 rounded-full transition-all duration-300
                      ${isActive ? "w-3/5 opacity-100" : "w-0 opacity-0 group-hover:w-3/5 group-hover:opacity-100"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/schedule-demo"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-lg
            bg-linear-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(0,194,255,0.3)]
            hover:shadow-[0_0_28px_rgba(0,194,255,0.5)] hover:-translate-y-px transition-all duration-200 shrink-0"
        >
          Schedule Demo
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.25 p-2 rounded-md bg-transparent border-none cursor-pointer"
        >
          <span
            className={`block w-5.5 h-0.5 bg-slate-400 rounded-sm transition-all duration-200 origin-center ${
              menuOpen ? "translate-y-1.75rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5.5 h-0.5 bg-slate-400 rounded-sm transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5.5 h-0.5 bg-slate-400 rounded-sm transition-all duration-200 origin-center ${
              menuOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-3 text-sm rounded-md transition-colors duration-200 border-b border-slate-800/60 last:border-0
                  ${isActive ? "text-cyan-400 font-medium" : "text-slate-400 hover:text-white"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/schedule-demo"
            className="mt-3 flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg
              bg-linear-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(0,194,255,0.3)]"
          >
            Schedule Demo
          </Link>
        </div>
      )}
    </nav>
  );
}