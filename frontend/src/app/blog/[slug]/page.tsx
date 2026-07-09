import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  HelpCircle, 
  ChevronRight,
  ShieldCheck,
  Award,
  PhoneCall,
  GraduationCap
} from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";

import { blogPostsArray as BLOG_DATA } from "@/data/blogs";

export function generateStaticParams() {
  return BLOG_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_DATA.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found | WCIEC Delhi",
    };
  }

  return {
    title: `${post.seoTitle} | WCIEC Blog`,
    description: post.seoDescription,
    alternates: {
      canonical: `https://www.wciecdelhi.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://www.wciecdelhi.com/blog/${slug}/`,
      siteName: "WCIEC Delhi",
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_DATA.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://www.wciecdelhi.com/#organization",
        "name": "WCIEC Delhi",
        "url": "https://www.wciecdelhi.com/",
        "logo": "https://www.wciecdelhi.com/logos/wciec-logo.webp",
        "telephone": "+918586873357"
      },
      {
        "@type": "BlogPosting",
        "@id": `https://www.wciecdelhi.com/blog/${slug}/#article`,
        "url": `https://www.wciecdelhi.com/blog/${slug}/`,
        "headline": post.title,
        "description": post.seoDescription,
        "datePublished": "2026-05-10T12:00:00Z",
        "dateModified": "2026-05-19T12:00:00Z",
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "MedicalBusiness",
          "@id": "https://www.wciecdelhi.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.wciecdelhi.com/blog/${slug}/#faq`,
        "mainEntity": post.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="bg-white text-gray-800 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-semibold uppercase tracking-wider">
            <Link href="/" className="hover:text-medical transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog/" className="hover:text-medical transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-gray-600 truncate">{post.title}</span>
          </div>

          {/* Back to Blog Button */}
          <Link href="/blog/" className="inline-flex items-center gap-2 text-sm text-medical font-bold hover:underline mb-8">
            <ArrowLeft size={16} /> Back to All Articles
          </Link>

          {/* Article Header */}
          <article className="space-y-6">
            <span className="bg-medical/10 text-medical text-xs font-bold px-3.5 py-1.5 rounded-full border border-medical/20 inline-block uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-poppins text-navy leading-[1.2] tracking-tight">
              {post.title}
            </h1>

            {/* E-E-A-T Author & Reviewer Strip */}
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-100 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Calendar size={14} /> Published: {post.date}</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-1"><User size={14} /> Written by: <strong>{post.author}</strong></span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-emerald-500" /> Reviewed by: <strong>{post.reviewer}</strong></span>
            </div>

            {/* Content Body */}
            <div className="pt-6 space-y-8 text-base md:text-lg leading-relaxed text-gray-600 font-medium">
              <p className="italic border-l-4 border-medical pl-4 text-gray-500 py-1 bg-gray-50/50 rounded-r-xl">
                {post.introduction}
              </p>

              {post.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight pt-4">
                    {section.heading}
                  </h2>
                  {section.content.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* FAQs Block */}
            <div className="pt-12 border-t border-gray-100 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-navy mb-2 flex items-start gap-2">
                      <HelpCircle size={18} className="text-medical shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </article>

          {/* Embedded Sticky Counselling Sidebar / Banner at Bottom */}
          <div className="mt-16 bg-[#050e1f] text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl border border-white/10" id="apply">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical/10 rounded-full blur-3xl -z-10" />
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-medical/15 text-medical border border-medical/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <GraduationCap size={14} /> Intake 2026 Registration
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white leading-tight">
                  Map Out Your MBBS Study Abroad Journey Safely
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Avoid fraudulent sub-agents. Speak directly to WCIEC Delhi's direct medical counsellors and secure transparent government university placement.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="tel:+918586873357" className="bg-medical hover:bg-medical/90 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5">
                    <PhoneCall size={14} /> Call Admission Desk
                  </a>
                  <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5">
                    WhatsApp Chat
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 bg-white text-navy p-5 rounded-2xl">
                <h4 className="text-sm font-bold font-poppins text-navy mb-4 text-center">Get Free Counselling</h4>
                <GlobalApplyForm buttonText="Submit Request" compact={true} />
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
