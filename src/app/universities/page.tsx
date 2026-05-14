import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UniversityGrid } from "@/components/sections/UniversityGrid";

export const metadata = {
  title: "Best Medical Universities in Kyrgyzstan 2026 | NMC Recognized Colleges",
  description: "Explore top-ranked medical universities in Kyrgyzstan for Indian students. Get detailed information about NMC recognized colleges, low-cost MBBS fees, and direct admission process for 2026.",
  keywords: "Best Medical Universities in Kyrgyzstan, Top-Ranked Medical Universities Kyrgyzstan, NMC Recognized Medical Colleges Kyrgyzstan, Government Medical Universities Kyrgyzstan, Study MBBS Overseas Kyrgyzstan",
};

export default function UniversitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <UniversityGrid />
      </main>
      <Footer />
    </>
  );
}
