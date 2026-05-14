import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { UniversityGrid } from "@/components/sections/UniversityGrid";

export const metadata = {
  title: "Top Medical Universities for MBBS | WCIEC",
  description: "Explore top-ranked medical universities in Kyrgyzstan and other countries. Get detailed information about fee structure, admission process, and eligibility for Indian students.",
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
