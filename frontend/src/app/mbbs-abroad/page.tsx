import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  ChevronRight,
  HelpCircle,
  PhoneCall,
  Globe,
  Building2,
  Stethoscope
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS Abroad 2026-27 | Admission & Fees for Indian Students",
  description: "Get direct admission for MBBS abroad in 2026. Explore low-cost, NMC & WHO approved medical universities for Indian students. Complete guidance & visa support.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-abroad/",
  },
  openGraph: {
    title: "MBBS Abroad 2026-27 | Admission & Fees for Indian Students",
    description: "Get direct admission for MBBS abroad in 2026. Explore low-cost, NMC & WHO approved medical universities for Indian students. Complete guidance & visa support.",
    url: "https://www.wciecdelhi.com/mbbs-abroad/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is MBBS abroad valid in India?",
    answer: "Yes, MBBS abroad is completely valid in India provided you complete your degree from an NMC and WHO approved medical university, study in English medium, and clear the NExT/FMGE exam upon returning to India."
  },
  {
    question: "Can I study MBBS abroad without NEET?",
    answer: "No, qualifying the NEET-UG exam is mandatory for Indian students who wish to study MBBS abroad and practice medicine in India later. You must have a valid NEET scorecard."
  },
  {
    question: "Which country is cheapest for MBBS abroad?",
    answer: "Kyrgyzstan and Kazakhstan are considered among the cheapest countries for MBBS abroad, offering high-quality medical education starting from INR 15 Lakhs to 20 Lakhs for the complete tuition fees."
  },
  {
    question: "What is the total cost of MBBS abroad?",
    answer: "The total cost of studying MBBS abroad, including tuition fees, hostel, and living expenses, generally ranges from INR 15 Lakhs to INR 35 Lakhs depending on the country and the university you choose."
  },
  {
    question: "Is MBBS abroad better than private colleges in India?",
    answer: "For many students, studying MBBS abroad is a better option because it offers affordable fees without any donations, global exposure, and modern infrastructure compared to high-cost private medical colleges in India."
  },
  {
    question: "Can Indian students practice after MBBS abroad?",
    answer: "Absolutely. After completing their MBBS abroad from recognized universities, Indian students need to clear the National Exit Test (NExT) or FMGE to obtain a license and practice medicine anywhere in India."
  }
];

export default function MBBSAbroadPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-abroad/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-abroad/",
        "name": "MBBS Abroad 2026-27 | Admission & Fees for Indian Students",
        "description": "Get direct admission for MBBS abroad in 2026. Explore low-cost, NMC & WHO approved medical universities for Indian students.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.wciecdelhi.com/#website",
          "name": "WCIEC Delhi",
          "url": "https://www.wciecdelhi.com/"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.wciecdelhi.com/mbbs-abroad/#service",
        "name": "MBBS Abroad Admission Counselling",
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://www.wciecdelhi.com/#organization",
          "name": "WCIEC Delhi",
          "url": "https://www.wciecdelhi.com/"
        },
        "areaServed": "IN",
        "description": "Expert admission guidance, documentation, visa assistance and pre-departure briefings for Indian medical students."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.wciecdelhi.com/mbbs-abroad/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.wciecdelhi.com/mbbs-abroad/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.wciecdelhi.com/" },
          { "@type": "ListItem", "position": 2, "name": "MBBS Abroad", "item": "https://www.wciecdelhi.com/mbbs-abroad/" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.wciecdelhi.com/mbbs-abroad/#article",
        "headline": "MBBS Abroad 2026-27 | Admission & Fees for Indian Students",
        "description": "Get direct admission for MBBS abroad in 2026. Explore low-cost, NMC & WHO approved medical universities for Indian students.",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://www.wciecdelhi.com/mbbs-abroad/",
        "author": {
          "@type": "Organization",
          "name": "WCIEC Delhi",
          "url": "https://www.wciecdelhi.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "WCIEC Delhi",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.wciecdelhi.com/logos/wciec-logo.webp"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-white overflow-hidden text-gray-800">
        {/* ── HERO SECTION ── */}
        <section className="relative pt-32 pb-20 bg-[#050e1f] text-white flex items-center min-h-[60vh]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent z-10" />
          <div className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />
          
          <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-semibold uppercase tracking-wider">
              <Link href="/" className="hover:text-medical transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white">MBBS Abroad</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-medical/15 text-medical border border-medical/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <GraduationCap size={14} /> Intake 2026 - 2027 Open
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS Abroad Admission 2026-27 for <span className="text-gradient">Indian Students</span>
                </h1>
                
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 font-medium py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> Direct Admission
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> NMC & WHO Recognized
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> Complete Admission Support
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> NEET Guidance & Visa Assistance
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-medical/20 flex items-center gap-2 text-lg">
                    Apply Now for MBBS Abroad 2026 <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              
              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden" id="apply">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-medical/5 flex items-center justify-center text-medical border border-medical/10">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Check Eligibility</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Fill details for instant review</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Apply Now" compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Editorial Header */}
        <section className="bg-gray-50 border-y border-gray-100 py-3 text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
            <div>
              <span>Written by: <strong>WCIEC Delhi Education Experts</strong></span>
              <span className="mx-2">|</span>
              <span>Reviewed by: <strong>Senior MBBS Counsellor</strong></span>
            </div>
            <div>
              <span>Last Updated: <strong>For 2026 Intake</strong></span>
            </div>
          </div>
        </section>

        {/* ── CORE CONTENT: REDESIGNED TO BE FULL-WIDTH & BALANCED ── */}
        <article className="py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-20">
            
            {/* 1. Introduction & Trust Banner (Combined in a balanced way) */}
            <div className="grid lg:grid-cols-5 gap-12 items-start" id="introduction">
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">Introduction to MBBS Abroad</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Every year, thousands of medical aspirants plan to <strong>study medicine abroad</strong> to fulfill their dream of becoming successful doctors. But exactly what is MBBS abroad, and why do Indian students choose foreign medical universities?
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>MBBS abroad for Indian students</strong> refers to pursuing an undergraduate medical degree (MD Physician or MBBS) outside India. Due to limited government seats, high NEET competition, and massive donation demands in private Indian medical colleges, choosing an international destination is the smartest alternative. Reputed <Link href="/universities" className="text-medical font-medium hover:underline">foreign medical universities</Link> offer high-quality, fully English-medium medical programs that are globally recognized, giving students a pathway to practice medicine anywhere in the world.
                  </p>
                </div>
              </div>

              {/* Trust Banner moved here to be a balanced part of the intro */}
              <div className="lg:col-span-2 bg-navy text-white rounded-3xl p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-medical/10 rounded-full blur-2xl" />
                <h3 className="text-2xl font-bold font-poppins mb-4">Start Your Admission Process</h3>
                <p className="text-sm text-gray-300 mb-6">Connect with our senior counsellors for a free profile evaluation and verify everything before you apply.</p>
                
                <a href="tel:+918586873357" className="w-full bg-medical hover:bg-medical/90 text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 mb-6">
                  <PhoneCall size={18} /> +91 85868 73357
                </a>
                
                <ul className="space-y-4 text-sm text-gray-300 pt-4 border-t border-white/10">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="text-medical shrink-0" size={18} />
                    <span><strong>15+ Years Excellence:</strong> Trusted by thousands of parents.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="text-medical shrink-0" size={18} />
                    <span><strong>Delhi Head Office:</strong> Near Laxmi Nagar Metro Station, New Delhi.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Why Study MBBS Abroad in 2026? (Full Width Grid) */}
            <div className="space-y-8 scroll-mt-24" id="benefits">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Why Study MBBS Abroad in 2026?</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Securing MBBS admission 2026 in top foreign medical colleges provides tremendous advantages for Indian students. Here are the top benefits:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Stethoscope size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Affordable Fees</h4>
                    <p className="text-sm text-gray-500">Low cost MBBS abroad options are available with low tuition and living expenses compared to Indian private colleges.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">No Donation</h4>
                    <p className="text-sm text-gray-500">Admissions are completely merit-based. There are zero capitation fees or hidden charges.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">English Medium</h4>
                    <p className="text-sm text-gray-500">The entire MBBS curriculum is taught in English by highly experienced international faculties.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Modern Hospitals</h4>
                    <p className="text-sm text-gray-500">Gain immense international clinical exposure working in modern, high-tech affiliated government hospitals.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Eligibility Criteria (Full Width Callout) */}
            <div className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">MBBS Abroad Eligibility Criteria 2026</h2>
                <p className="text-gray-600 leading-relaxed">
                  The National Medical Commission (NMC) has set strict guidelines for Indian students planning to study MBBS abroad after NEET. To be eligible, you must meet the following:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left pt-4">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">NEET Qualification</strong>
                      <span className="text-gray-600 text-sm">It is mandatory to qualify the NEET-UG examination.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Age Criteria</strong>
                      <span className="text-gray-600 text-sm">The student must be at least 17 years old by December 31st of the admission year.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Academic PCB Percentage</strong>
                      <span className="text-gray-600 text-sm">Minimum 50% aggregate marks in Physics, Chemistry, and Biology (PCB) in 12th standard.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Valid Passport</strong>
                      <span className="text-gray-600 text-sm">A valid regular Indian passport is required for university application and visa processing.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Fees Structure (Full Width Table) */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS Abroad Fees Structure 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Finding affordable MBBS abroad options is easier than you think. Below is an estimated comparison of the MBBS abroad fees across top countries:
                </p>
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-8 py-6">Country</th>
                        <th className="px-8 py-6">University Type</th>
                        <th className="px-8 py-6">Duration</th>
                        <th className="px-8 py-6">Approx Fees (Total)</th>
                        <th className="px-8 py-6">Language</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Kyrgyzstan</td>
                        <td className="px-8 py-6">Government / Private</td>
                        <td className="px-8 py-6">5 Years</td>
                        <td className="px-8 py-6 font-bold text-emerald-600">INR 15 - 20 Lakhs</td>
                        <td className="px-8 py-6">English</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Kazakhstan</td>
                        <td className="px-8 py-6">Government</td>
                        <td className="px-8 py-6">5 Years</td>
                        <td className="px-8 py-6 font-bold text-emerald-600">INR 20 - 25 Lakhs</td>
                        <td className="px-8 py-6">English</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Russia</td>
                        <td className="px-8 py-6">Federal / Government</td>
                        <td className="px-8 py-6">6 Years</td>
                        <td className="px-8 py-6 font-bold text-emerald-600">INR 20 - 35 Lakhs</td>
                        <td className="px-8 py-6">English/Bilingual</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Georgia</td>
                        <td className="px-8 py-6">Government / Private</td>
                        <td className="px-8 py-6">6 Years</td>
                        <td className="px-8 py-6 font-bold text-emerald-600">INR 25 - 40 Lakhs</td>
                        <td className="px-8 py-6">English</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 5. Best Countries for MBBS Abroad (2-Col Grid) */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Best Country for MBBS Abroad for Indian Students</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Kyrgyzstan */}
                <Link href="/mbbs-in-kyrgyzstan" className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-medical transition-colors">MBBS in Kyrgyzstan</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Kyrgyzstan is known for providing highly affordable MBBS abroad options with top NMC recognized universities like <Link href="/universities/osh-state-university" className="font-medium text-navy hover:text-medical transition-colors">Osh State University</Link>, <Link href="/universities/jalal-abad-state-university" className="font-medium text-navy hover:text-medical transition-colors">Jalal Abad State University (JASU)</Link>, and <Link href="/universities/central-asian-international-medical-university" className="font-medium text-navy hover:text-medical transition-colors">Central Asian International Medical University (CAIMU)</Link>.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Fees:</strong> Approx. 15-20 Lakhs (Total)</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Duration:</strong> 5 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC, FAIMER</li>
                    <li className="flex justify-between"><strong>Indian Support:</strong> Indian mess, 1000+ students</li>
                  </ul>
                </Link>

                {/* Russia */}
                <Link href="/mbbs-in-russia" className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-medical transition-colors">MBBS in Russia</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Russia has been a traditional favorite for foreign medical colleges for Indian students due to its historic, century-old federal medical universities and strong clinical base.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Fees:</strong> Approx. 20-35 Lakhs (Total)</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Duration:</strong> 6 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC, ECFMG</li>
                    <li className="flex justify-between"><strong>Indian Support:</strong> High FMGE passing rate</li>
                  </ul>
                </Link>

                {/* Kazakhstan */}
                <Link href="/mbbs-in-kazakhstan" className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-medical transition-colors">MBBS in Kazakhstan</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Kazakhstan is emerging as a premier destination with completely English medium programs spanning 5 years, providing an ideal mix of affordability and excellent education.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Fees:</strong> Approx. 20-25 Lakhs (Total)</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Duration:</strong> 5 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC</li>
                    <li className="flex justify-between"><strong>Indian Support:</strong> Direct flights, safe</li>
                  </ul>
                </Link>

                {/* Georgia */}
                <Link href="/mbbs-in-georgia" className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full group">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-medical transition-colors">MBBS in Georgia</h3>
                  <p className="text-gray-600 mb-6 flex-grow">Georgia offers premium European-standard medical education. It is considered one of the safest countries globally with 100% English medium medical faculties.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Fees:</strong> Approx. 25-40 Lakhs (Total)</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Duration:</strong> 6 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC, WFME</li>
                    <li className="flex justify-between"><strong>Indian Support:</strong> Large Indian community</li>
                  </ul>
                </Link>
              </div>
            </div>

            {/* 6. Admission Process & Documents (2-Col split) */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">MBBS Abroad Admission Process</h2>
                <div className="w-20 h-1 bg-medical rounded-full" />
                
                <div className="space-y-6">
                  {[
                    { title: "Free Counselling", desc: "Get complete guidance from WCIEC Delhi experts." },
                    { title: "University Selection", desc: "Choose from top NMC recognized universities." },
                    { title: "Application Submission", desc: "Submit basic academic documents securely." },
                    { title: "Admission Letter", desc: "Receive your official guaranteed admission letter." },
                    { title: "Visa Processing", desc: "WCIEC handles the complete student visa process." },
                    { title: "Travel Support", desc: "Air ticket booking and accompanied group travel." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-medical text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-lg">
                        {idx + 1}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-xl text-navy mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Documents Required</h2>
                  <div className="w-20 h-1 bg-medical rounded-full" />
                  <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">10th & 12th Mark sheets</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Valid Original Passport</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">NEET-UG Score Card</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Passport size photographs</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Medical Fitness Certificate</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-3xl p-8 shadow-xl mt-8">
                  <h3 className="text-2xl font-bold font-poppins mb-6">Why Choose WCIEC Delhi?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Experienced Counsellors</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Direct Tie-ups</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Transparent Process</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Visa Assistance</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Airport Pickup</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Post-Admission Support</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. NMC Approved Universities (Full Width Text) */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">NMC Approved Medical Universities Abroad</h2>
              <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg">
                Always ensure you apply to NMC Approved Medical Universities Abroad and WHO Approved Medical Universities. Studying at recognized institutions is critical because it allows you to appear for the FMGE/NExT screening test in India, keeps your degree valid internationally for USMLE/PLAB, and ensures the curriculum meets the 54-month study + 12-month internship NMC guidelines.
              </p>
            </div>

            {/* 8. FAQ SECTION (Full Width Centered) */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto" />
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 transition-all hover:border-medical/30 hover:shadow-md">
                    <h4 className="font-bold text-navy mb-3 flex items-start gap-4 text-xl">
                      <HelpCircle size={26} className="text-medical shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed pl-10 text-lg">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </article>

        {/* Bottom Call to Action Strip */}
        <section className="bg-navy py-16 md:py-24 text-white text-center relative overflow-hidden" id="counselling">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Secure Your MBBS Seat Abroad Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Admissions for the 2026-27 intake are strictly first-come, first-served. Speak to a professional counsellor at WCIEC Delhi and find the right low-cost medical university.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Book Free Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
