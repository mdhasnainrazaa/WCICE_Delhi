import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { UniversityGrid } from "@/components/sections/UniversityGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FounderSection } from "@/components/sections/FounderSection";
import { CounsellingSection } from "@/components/sections/CounsellingSection";
import { GallerySection } from "@/components/sections/GallerySection";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <UniversityGrid />
      <WhyChooseUs />
      <ProcessTimeline />
      <FounderSection />
      <CounsellingSection />
      <GallerySection />
    </>
  );
}

