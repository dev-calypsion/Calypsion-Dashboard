"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="font-bold text-white">C</span>
          </div>
          <span className="text-lg font-semibold text-white tracking-tight">
            Calypsion
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-slate-300">
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

        {/* Right Section (Future Auth Area) */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-white">
            Login
          </button>
        </div>

      </div>
    </header>
  );
}
