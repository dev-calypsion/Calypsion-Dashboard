"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Calypsion Innovations"
            width={180}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/rtls" className="hover:text-white transition-colors">
            RTLS
          </Link>
          <Link href="/vibrationmodule" className="hover:text-white transition-colors">
            Vibration
          </Link>
        </nav>

      </div>
    </header>
  );
}
