import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { UniversityGrid } from "@/components/sections/UniversityGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FounderSection } from "@/components/sections/FounderSection";
import { CounsellingSection } from "@/components/sections/CounsellingSection";
import { WebSiteSchema } from "@/components/seo/WebSiteSchema";

const GallerySection = dynamic(
  () => import("@/components/sections/GallerySection").then(mod => mod.GallerySection),
  {
    loading: () => <div className="min-h-[500px] bg-[#f8f9fc] animate-pulse rounded-[3rem] my-10" />
  }
);

export default function Home() {
  return (
    <>
      <WebSiteSchema />
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


