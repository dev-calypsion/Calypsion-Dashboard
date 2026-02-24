"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PortalProject } from "../types";

interface Props {
  project: PortalProject;
}

export default function PortalCard({ project }: Props) {
  const Icon = project.icon;

  return (
    <div
      className={`group relative rounded-2xl border ${project.border} ${project.bg} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      {/* Status */}
      <div className="absolute top-4 right-4">
        {project.status === "active" ? (
          <span className="text-xs text-green-400">Live</span>
        ) : (
          <span className="text-xs text-slate-400">Coming Soon</span>
        )}
      </div>

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl ${project.bg} border ${project.border} flex items-center justify-center mb-6`}
      >
        <Icon className={`w-7 h-7 ${project.color}`} />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-3">
        {project.name}
      </h2>

      {/* Description */}
      <p className="text-slate-400 mb-6">
        {project.description}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <Link
          href={project.href}
          target={project.href.startsWith("http") ? "_blank" : undefined}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-center text-sm font-medium transition"
        >
          Launch
        </Link>

        <button
          onClick={() => alert(`Request demo for ${project.name}`)}
          className="flex-1 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white py-2 rounded-lg text-sm font-medium transition"
        >
          Request Demo
        </button>
      </div>
    </div>
  );
}
