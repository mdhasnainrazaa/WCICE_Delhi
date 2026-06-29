"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { seoPages } from "@/data/seoPages";

const corePages = [
  {
    title: "MBBS Abroad",
    description: "Pillar guide for admission, fees, eligibility, and country comparison.",
    href: "/mbbs-abroad/",
  },
  {
    title: "MBBS in Kyrgyzstan",
    description: "Kyrgyzstan fees, universities, hostel, food, and admission guidance.",
    href: "/mbbs-in-kyrgyzstan/",
  },
  {
    title: "Medical Universities",
    description: "Compare WCIEC partner medical universities and fee structures.",
    href: "/universities/",
  },
  {
    title: "Admission Process",
    description: "Step-by-step MBBS abroad admission process and required documents.",
    href: "/admission/",
  },
  {
    title: "MBBS Abroad Consultants in Delhi",
    description: "Delhi office counselling for MBBS abroad admission and visa support.",
    href: "/mbbs-abroad-consultants-in-delhi/",
  },
  {
    title: "Blog",
    description: "Latest WCIEC guides on MBBS abroad, NEET, fees, and country selection.",
    href: "/blog/",
  },
];

const searchPages = [
  ...corePages,
  ...seoPages.map((page) => ({
    title: page.h1,
    description: page.metaDescription,
    href: `/${page.slug}/`,
  })),
];

export function SearchClient() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) {
      return searchPages.slice(0, 12);
    }

    return searchPages.filter((page) => {
      const haystack = `${page.title} ${page.description} ${page.href}`.toLowerCase();
      return trimmed.split(/\s+/).every((term) => haystack.includes(term));
    });
  }, [query]);

  return (
    <section className="min-h-[70vh] bg-[#F7FAFF] pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8">
          <div className="mb-3 text-sm font-bold uppercase tracking-wide text-[#2F80ED]">
            Search
          </div>
          <h1 className="text-4xl font-bold text-[#071629] md:text-5xl">
            Search WCIEC MBBS Abroad Guides
          </h1>
        </div>

        <label className="relative block">
          <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search fees, NEET, Russia, Kazakhstan, visa..."
            className="w-full rounded-lg border border-gray-200 bg-white py-4 pl-14 pr-5 text-lg shadow-sm outline-none transition focus:border-[#2F80ED] focus:ring-4 focus:ring-[#2F80ED]/10"
          />
        </label>

        <div className="mt-8 grid gap-4">
          {results.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition hover:border-[#2F80ED]/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#071629] group-hover:text-[#2F80ED]">
                    {page.title}
                  </h2>
                  <p className="mt-2 leading-7 text-gray-600">{page.description}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#2F80ED]" />
              </div>
            </Link>
          ))}
        </div>

        {results.length === 0 && (
          <div className="mt-8 rounded-lg border border-gray-100 bg-white p-6 text-gray-700">
            No guides found. Try searching for MBBS abroad, fees, NEET, Russia,
            Kazakhstan, Kyrgyzstan, visa, hostel, or NMC.
          </div>
        )}
      </div>
    </section>
  );
}
