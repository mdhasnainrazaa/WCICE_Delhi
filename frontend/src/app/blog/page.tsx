

import React from "react";
import Link from "next/link";

import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Why Kyrgyzstan is the Top Choice for Indian MBBS Students in 2026",
    excerpt: "Kyrgyzstan offers high-quality medical education at a fraction of the cost in India. Learn about the top universities and admission process.",
    date: "May 10, 2026",
    author: "WCIEC Editorial Team",
    slug: "why-kyrgyzstan-top-choice-mbbs",
    category: "MBBS Abroad"
  },
  {
    title: "NEET UG 2026: Everything You Need to Know About Qualifying for MBBS Abroad",
    excerpt: "Is NEET mandatory for MBBS abroad? Discover the latest regulations and how your score impacts your admission.",
    date: "May 08, 2026",
    author: "Dr. Rajesh Sharma",
    slug: "neet-2026-mbbs-abroad-guide",
    category: "NEET Guidance"
  },
  {
    title: "MBBS Abroad After NEET 2026 | Complete Guide",
    excerpt: "Qualified NEET but couldn't get a government seat in India? Here is your complete guide to studying MBBS abroad in 2026.",
    date: "May 12, 2026",
    author: "WCIEC Admission Counsel",
    slug: "mbbs-abroad-after-neet",
    category: "MBBS Abroad"
  },
  {
    title: "MBBS in Kyrgyzstan Fees 2026 for Indian Students",
    excerpt: "Analyze actual cost breakdowns, tuition, hostel packages, and dining mess fees for MBBS in Kyrgyzstan 2026.",
    date: "May 14, 2026",
    author: "WCIEC Finance Committee",
    slug: "mbbs-in-kyrgyzstan-fees",
    category: "Kyrgyzstan"
  },
  {
    title: "Best Country for MBBS Abroad for Indian Students",
    excerpt: "Compare Kyrgyzstan, Russia, Georgia, and Kazakhstan to find the best country for your MBBS journey in 2026.",
    date: "May 15, 2026",
    author: "WCIEC Research Group",
    slug: "best-country-for-mbbs-abroad",
    category: "MBBS Abroad"
  },
  {
    title: "Documents Required for MBBS Abroad Admission",
    excerpt: "Ensure a smooth application process by preparing all required documents for your foreign medical admission.",
    date: "May 16, 2026",
    author: "WCIEC Operations Office",
    slug: "mbbs-abroad-documents-required",
    category: "Admission Support"
  },
  {
    title: "Is MBBS in Kyrgyzstan Good for Indian Students?",
    excerpt: "An unbiased review of the pros, cons, academic quality, and student life for Indian medical students in Kyrgyzstan.",
    date: "May 17, 2026",
    author: "WCIEC Quality Check",
    slug: "is-mbbs-in-kyrgyzstan-good",
    category: "Kyrgyzstan"
  },
  {
    title: "MBBS Abroad vs MBBS in India | Complete Comparison",
    excerpt: "Compare fees, NEET cut-offs, clinical exposure, and postgraduate career paths between India and foreign medical studies.",
    date: "May 18, 2026",
    author: "WCIEC Content Architect",
    slug: "mbbs-abroad-vs-india",
    category: "MBBS Abroad"
  },
  {
    title: "NMC Approved Medical Universities Abroad Guide",
    excerpt: "Understand the latest National Medical Commission (NMC) rules for studying MBBS abroad in 2026.",
    date: "May 19, 2026",
    author: "WCIEC Legal Department",
    slug: "nmc-approved-medical-universities-abroad",
    category: "Legal Guidance"
  },
  {
    title: "How to Choose MBBS Abroad Consultant in Delhi",
    excerpt: "Avoid fake sub-agents and fraudulent admission traps. Learn how to identify direct and trusted MBBS consultants in Delhi.",
    date: "May 19, 2026",
    author: "WCIEC Delhi Office",
    slug: "mbbs-abroad-consultant-delhi",
    category: "Delhi Office"
  }
];

export default function BlogIndex() {
  return (
    <main className="pt-32 pb-20 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl mb-4 font-poppins">Expert <span className="text-gradient">Insights & Guidance</span></h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, admission guides, and student experiences in the world of international medical education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <GlassCard key={i} className="flex flex-col h-full bg-white border-none shadow-sm hover:shadow-xl transition-all">
                <div className="mb-4">
                  <span className="bg-medical/10 text-medical text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-2xl mb-4 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-50 text-[10px] uppercase font-bold text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:gap-2 transition-all flex items-center gap-1">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
  );
}
