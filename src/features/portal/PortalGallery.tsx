import PortalCard from "@/src/features/portal/components/PortalCard";
import { projects } from "./data/projects.data";

export default function PortalGallery() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Industrial Applications
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Production-ready IoT solutions designed for real-time monitoring,
            predictive maintenance, and smart industrial automation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <PortalCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
