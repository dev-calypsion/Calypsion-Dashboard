import HeroSection from '@/src/components/HeroSection';
import DemoProjects from '@/src/components/DemoProjects';
import CollaborationSection from '@/src/features/portal/components/CollaborationSection';
import PlatformOverview from '../components/PlatformOverview';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Layout: [Hero | Platform Overview] / [Demo Projects | Platform Overview] */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(380px,460px)] lg:gap-x-8 lg:items-start">
        <div className="lg:col-start-1 lg:row-start-1">
          <HeroSection />
        </div>
        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-0 lg:pl-2 @container">
          <PlatformOverview />
        </div>
        <div className="lg:col-start-1 lg:row-start-2">
          <DemoProjects />
        </div>
      </div>
      <CollaborationSection />
    </main>
  );
}