import PortalCard from '@/src/features/portal/components/PortalCard';
import { projects } from "./data/projects.data";

export default function PortalGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Demo Applications
        </h1>
        <p className="text-slate-400">
          Explore our industrial IoT solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <PortalCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
