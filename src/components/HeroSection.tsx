"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[50vh] bg-slate-950 overflow-hidden flex items-center">

      {/* ── Background radial glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-1506h-150cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-125 h-100 bg-blue-600/10 rounded-full blur-[100px]" />
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col gap-7 max-w-2xl">

          {/* Badge
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Industrial Intelligence Platform
          </div> */}

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight whitespace-nowrap">
            Industrial{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Intelligence</span>{" "}
            Platform
            </h1>

          {/* Subheadline */}
          <p className="text-slate-400 text-lg leading-relaxed">
            Real-time monitoring &nbsp;&bull;&nbsp; Predictive analytics &nbsp;&bull;&nbsp; Digital simulation
            <br />
            for manufacturing excellence
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-1">
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white
                bg-linear-to-r from-cyan-500 to-blue-600
                shadow-[0_0_24px_rgba(0,194,255,0.35)]
                hover:shadow-[0_0_36px_rgba(0,194,255,0.55)]
                hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Live Demos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/pilot"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-200
                border border-slate-700 bg-slate-900/60
                hover:border-slate-500 hover:text-white hover:bg-slate-800/60
                transition-all duration-200"
            >
              Request Pilot Program
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}