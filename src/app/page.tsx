import HeroSection from '@/src/components/HeroSection';
import DemoProjects from '@/src/components/DemoProjects';
import CollaborationSection from '@/src/features/portal/components/CollaborationSection';
import PlatformOverview from '../components/PlatformOverview';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <HeroSection />
      <DemoProjects />
      <PlatformOverview />
      <CollaborationSection />
    </main>
  );
}