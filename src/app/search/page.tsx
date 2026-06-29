import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchClient } from "./SearchClient";

export const metadata: Metadata = {
  title: "Search WCIEC Delhi | MBBS Abroad Guides",
  description:
    "Search WCIEC Delhi MBBS abroad guides, country pages, universities, admission resources, fees, NEET, NMC, and visa information.",
  alternates: {
    canonical: "https://wciecdelhi.com/search/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] pt-32" />}>
      <SearchClient />
    </Suspense>
  );
}
