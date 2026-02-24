import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PortalProject } from "../types";

interface Props {
  project: PortalProject;
}

export default function PortalCard({ project }: Props) {
  const Icon = project.icon;

  return (
    <Link
      href={project.href}
      className={`group relative rounded-2xl border ${project.border} ${project.bg} p-8 transition-all duration-300 hover:-translate-y-1`}
      target={project.href.startsWith("http") ? "_blank" : undefined}
    >
      {/* Status */}
      <div className="absolute top-4 right-4">
        {project.status === "active" ? (
          <span className="text-xs text-green-400">Live</span>
        ) : (
          <span className="text-xs text-slate-400">Coming Soon</span>
        )}
      </div>

      <div
        className={`w-14 h-14 rounded-xl ${project.bg} border ${project.border} flex items-center justify-center mb-6`}
      >
        <Icon className={`w-7 h-7 ${project.color}`} />
      </div>

      <h2 className="text-2xl font-bold text-white mb-3">
        {project.name}
      </h2>

      <p className="text-slate-400 mb-6">
        {project.description}
      </p>

      <div className="flex items-center text-sm font-medium text-white">
        <span>Launch Application</span>
        {project.href.startsWith("http") ? (
          <ExternalLink className="w-4 h-4 ml-2" />
        ) : (
          <ArrowRight className="w-4 h-4 ml-2" />
        )}
      </div>
    </Link>
  );
}
