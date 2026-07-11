

import React from "react";
import Link from "next/link";

import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, User, ArrowRight } from "lucide-react";

import { blogPostsArray } from "@/data/blogs";

function getBlogImage(slug: string, category: string): string {
  if (slug.includes("food") || slug.includes("eat")) {
    return "/images/optimized/indian-mess-food.png";
  }
  if (slug.includes("visa") || slug.includes("document")) {
    return "/images/optimized/student-visa-passport.png";
  }
  if (slug.includes("fmge") || slug.includes("next-exam") || slug.includes("study")) {
    return "/images/optimized/medical-student-study.png";
  }
  if (slug.includes("neet")) {
    return "/images/optimized/neet-exam-stethoscope.png";
  }
  if (slug.includes("uk-usa") || slug.includes("practice-in")) {
    return "/images/optimized/global-medical-career.png";
  }
  if (slug.includes("osh-state-university")) {
    return "/images/optimized/osh-state-university.webp";
  }
  if (slug.includes("jalal-abad-state-university") || slug.includes("jasu")) {
    return "/images/optimized/jalal-abad-banner.webp";
  }
  if (slug.includes("jalal-abad-international-university") || slug.includes("jaiu")) {
    return "/images/optimized/jalal-abad-international-university-hero.webp";
  }
  if (slug.includes("central-asian-international-medical-university") || slug.includes("caimu")) {
    return "/images/optimized/central-asian-medical-university.webp";
  }
  if (slug.includes("osh-international-medical-university") || slug.includes("oimu")) {
    return "/images/optimized/osh-international-medical-university.webp";
  }
  if (category === "Kyrgyzstan") {
    return "/images/optimized/jalal-abad-banner.webp";
  }
  return "/images/optimized/osh-state-university.webp"; // default
}

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
            {blogPostsArray.map((post, i) => {
              const imageUrl = getBlogImage(post.slug, post.category);
              return (
                <GlassCard key={i} className="flex flex-col h-full bg-white border-none shadow-sm hover:shadow-xl transition-all overflow-hidden p-0">
                  {/* Card Thumbnail */}
                  <div className="relative w-full h-[200px] overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="bg-medical/10 text-medical text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl mb-4 hover:text-primary transition-colors font-bold font-poppins line-clamp-2 leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-3 font-medium">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 text-[10px] uppercase font-bold text-gray-400 mt-auto">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="text-primary hover:gap-2 transition-all flex items-center gap-1">
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </main>
  );
}
