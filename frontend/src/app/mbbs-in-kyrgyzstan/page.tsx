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
  Flame,
  Globe,
  Building2,
  Stethoscope,
  Coffee,
  HeartPulse
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS in Kyrgyzstan 2026 for Indian Students | Admission & Fee",
  description: "Get direct admission for MBBS in Kyrgyzstan 2026. Explore NMC approved medical universities with low fees. Direct admission, NEET guidance & Indian hostel.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/",
  },
  openGraph: {
    title: "MBBS in Kyrgyzstan 2026 for Indian Students | Admission & Fee",
    description: "Get direct admission for MBBS in Kyrgyzstan 2026. Explore NMC approved medical universities with low fees. Direct admission, NEET guidance & Indian hostel.",
    url: "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const universities = [
  {
    name: "Osh State University",
    tuition: "USD 4,000 / year",
    hostel: "USD 600 / year",
    total: "INR 18-20 Lakhs",
    duration: "5 Years",
    link: "/universities/osh-state-university/"
  },
  {
    name: "Jalal Abad State University (JASU)",
    tuition: "USD 4,200 / year",
    hostel: "USD 600 / year",
    total: "INR 20-22 Lakhs",
    duration: "5 Years",
    link: "/universities/jalal-abad-state-university/"
  },
  {
    name: "Jalal-Abad International University",
    tuition: "USD 3,500 / year",
    hostel: "USD 500 / year",
    total: "INR 16-18 Lakhs",
    duration: "5 Years",
    link: "/universities/jalal-abad-international-university/"
  },
  {
    name: "Central Asian International Medical University (CAIMU)",
    tuition: "USD 3,200 / year",
    hostel: "USD 500 / year",
    total: "INR 15-17 Lakhs",
    duration: "5 Years",
    link: "/universities/central-asian-international-medical-university/"
  },
  {
    name: "Osh International Medical University",
    tuition: "USD 3,500 / year",
    hostel: "USD 500 / year",
    total: "INR 16-18 Lakhs",
    duration: "5 Years",
    link: "/universities/osh-international-medical-university/"
  }
];

const faqs = [
  {
    question: "Is MBBS in Kyrgyzstan valid in India?",
    answer: "Yes, MBBS in Kyrgyzstan is fully valid in India. Degrees from NMC and WHO approved universities in Kyrgyzstan are recognized. Indian students need to qualify the NExT/FMGE exam to practice in India."
  },
  {
    question: "What is the fees of MBBS in Kyrgyzstan?",
    answer: "MBBS Kyrgyzstan fees are very affordable. The average total cost, including tuition and hostel for the 5-year duration, ranges from INR 15 Lakhs to INR 22 Lakhs depending on the chosen university."
  },
  {
    question: "Can Indian students study MBBS in Kyrgyzstan without NEET?",
    answer: "No, as per NMC guidelines, qualifying the NEET-UG exam is strictly mandatory for Indian students who wish to study MBBS abroad and practice in India in the future."
  },
  {
    question: "Which is the cheapest medical university in Kyrgyzstan?",
    answer: "Central Asian International Medical University (CAIMU) is currently one of the most affordable options, with a total package of around INR 15-17 Lakhs for the complete course."
  },
  {
    question: "Is English used for MBBS teaching in Kyrgyzstan?",
    answer: "Yes! All major medical universities offering programs for international students provide 100% English medium medical education for the entire course duration."
  },
  {
    question: "How many years is MBBS in Kyrgyzstan?",
    answer: "The duration of MBBS in Kyrgyzstan is 5 years. This fully complies with the NMC's requirement of a minimum 54-month academic course duration for foreign medical graduates."
  },
  {
    question: "Which Kyrgyzstan universities are NMC approved?",
    answer: "Top NMC and WHO approved universities include Osh State University, Jalal Abad State University (JASU), Jalal-Abad International University, Central Asian International Medical University (CAIMU), and Osh International Medical University."
  }
];

export default function MBBSInKyrgyzstanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/",
        "name": "MBBS in Kyrgyzstan 2026 for Indian Students | Admission & Fee",
        "description": "Get direct admission for MBBS in Kyrgyzstan 2026. Explore NMC approved medical universities with low fees.",
        "isPartOf": {
          "@type": "WebSite",
          "name": "WCIEC Delhi",
          "url": "https://wciecdelhi.com/"
        }
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://www.wciecdelhi.com/#organization",
        "name": "WCIEC Delhi Medical Education",
        "url": "https://www.wciecdelhi.com/",
        "logo": "https://www.wciecdelhi.com/logo.png",
        "description": "Leading medical consultancy assisting Indian students with MBBS admission in Kyrgyzstan.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shakarpur, Near Laxmi Nagar Metro Station",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110092",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/#faq",
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
        "@id": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.wciecdelhi.com/" },
          { "@type": "ListItem", "position": 2, "name": "MBBS Abroad", "item": "https://www.wciecdelhi.com/mbbs-abroad/" },
          { "@type": "ListItem", "position": 3, "name": "MBBS in Kyrgyzstan", "item": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/#article",
        "headline": "MBBS in Kyrgyzstan 2026 for Indian Students | Admission & Fee",
        "description": "Get direct admission for MBBS in Kyrgyzstan 2026. Explore NMC approved medical universities with low fees. Direct admission, NEET guidance & Indian hostel.",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/",
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

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="relative pt-32 pb-20 bg-[#07132a] text-white min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 to-transparent z-10" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-semibold uppercase tracking-wider">
              <Link href="/" className="hover:text-medical transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/mbbs-abroad/" className="hover:text-medical transition-colors">MBBS Abroad</Link>
              <ChevronRight size={12} />
              <span className="text-white">Kyrgyzstan</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#00B4D8]/20 text-[#00B4D8] border border-[#00B4D8]/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-[#00B4D8] animate-pulse" /> Admission Open 2026-27
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in Kyrgyzstan 2026 for <span className="text-[#00B4D8]">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Study MBBS in Kyrgyzstan from NMC & WHO recognized universities. Secure your seat today with complete guidance.
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 font-medium py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> Low Fees
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> English Medium
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> Direct Admission
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> NEET Guidance & Visa Assistance
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-medical/20 flex items-center gap-2 text-lg">
                    Apply for Kyrgyzstan MBBS Admission 2026 <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden" id="apply">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-medical/5 flex items-center justify-center text-medical border border-medical/10">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Apply for Kyrgyzstan</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Secured process by WCIEC Delhi</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Book My Seat" compact={true} />
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
            <div className="grid lg:grid-cols-5 gap-12 items-start" id="what-is-mbbs">
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">What is MBBS in Kyrgyzstan?</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    When you choose to <Link href="/mbbs-abroad" className="text-medical font-medium hover:underline">study medicine abroad</Link>, Kyrgyzstan stands out as the most preferred destination for Indian students. Medical programs in Kyrgyzstan award the <strong>MD Physician degree</strong>, which is globally recognized and strictly equivalent to the <strong>MBBS</strong> degree awarded in India.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Over the last two decades, <strong>MBBS in Kyrgyzstan for Indian students</strong> has become a massive trend. Why? Because it offers highly affordable medical education without compromising on academic quality. Students get to study in state-of-the-art government medical <Link href="/universities" className="text-medical font-medium hover:underline">universities</Link>, avoiding the massive donations common in private Indian colleges.
                  </p>
                </div>
              </div>

              {/* Trust Banner moved here to be a balanced part of the intro */}
              <div className="lg:col-span-2 bg-[#07132a] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
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

            {/* 2. Why Choose Kyrgyzstan for MBBS 2026? (Full Width Grid) */}
            <div className="space-y-8 scroll-mt-24" id="benefits">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Why Choose Kyrgyzstan for MBBS 2026?</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Here are the top reasons why Indian students choose Kyrgyzstan as their primary choice for foreign medical college admission:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Stethoscope size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Affordable MBBS Fees</h4>
                    <p className="text-sm text-gray-500">Low Cost MBBS Abroad options with average fees much lower than Indian private colleges.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">English Medium Education</h4>
                    <p className="text-sm text-gray-500">The entire 5-year syllabus is taught in English for international students.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <HeartPulse size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">NMC Recognition</h4>
                    <p className="text-sm text-gray-500">Study at a highly ranked NMC Approved Medical University Kyrgyzstan.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">WHO Listed Universities</h4>
                    <p className="text-sm text-gray-500">Degrees are widely accepted allowing you to practice globally (USMLE, PLAB).</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <Coffee size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Indian Student Friendly</h4>
                    <p className="text-sm text-gray-500">Over 10,000+ Indian students already studying here make it feel like home.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Safe Hostel Facilities</h4>
                    <p className="text-sm text-gray-500">Separate, secured hostel blocks for boys and girls with strict 24/7 security.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Eligibility Criteria (Full Width Callout) */}
            <div className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">MBBS in Kyrgyzstan Eligibility Criteria 2026</h2>
                <p className="text-gray-600 leading-relaxed">
                  Before applying for Kyrgyzstan MBBS Admission 2026, students must ensure they meet the National Medical Commission (NMC) guidelines:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left pt-4">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">NEET Qualification</strong>
                      <span className="text-gray-600 text-sm">Passing the NEET-UG exam is mandatory for Indian medical aspirants.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Age Requirement</strong>
                      <span className="text-gray-600 text-sm">Minimum 17 years old by 31st December of the admission year.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">PCB Marks</strong>
                      <span className="text-gray-600 text-sm">Minimum 50% aggregate in Physics, Chemistry, and Biology (40% for reserved category).</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Valid Passport</strong>
                      <span className="text-gray-600 text-sm">A valid Indian passport is required for the visa and university application.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Fees Structure (Full Width Table) */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS in Kyrgyzstan Fees Structure 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Check out the highly affordable <strong>MBBS Kyrgyzstan Fees</strong> structure. Here is a comparison of top medical universities:
                </p>
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-8 py-6">University</th>
                        <th className="px-8 py-6">Annual Tuition Fee</th>
                        <th className="px-8 py-6">Hostel Fee (Approx)</th>
                        <th className="px-8 py-6">Total Package</th>
                        <th className="px-8 py-6">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      {universities.map((uni, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-8 py-6 font-bold text-navy">
                            <Link href={uni.link} className="hover:text-medical transition-colors">{uni.name}</Link>
                          </td>
                          <td className="px-8 py-6">{uni.tuition}</td>
                          <td className="px-8 py-6">{uni.hostel}</td>
                          <td className="px-8 py-6 font-bold text-emerald-600">{uni.total}</td>
                          <td className="px-8 py-6">{uni.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* WCIEC Partner Universities Prose Section */}
            <div className="space-y-8 bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">WCIEC Partner Universities in Kyrgyzstan</h2>
                <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                <p className="text-gray-600 leading-relaxed mb-6">
                  WCIEC Delhi is the direct admission partner for five top-ranked, NMC-approved medical universities in Kyrgyzstan. Each university has a distinct profile catering to different student preferences and budgets. Below is a quick overview:
                </p>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    <Link href="/universities/osh-state-university/" className="font-bold text-navy hover:text-medical transition-colors">Osh State University</Link> — Founded in 1939, OSU is Kyrgyzstan&apos;s oldest and most prestigious medical university. Its International Medical Faculty has been training Indian students for over 30 years. With a vast hospital network, high FMGE pass rates, and a well-established Indian community of 1,000+ students, it remains the top choice for Indian families seeking a proven, government-backed MBBS programme.
                  </p>
                  <p>
                    <Link href="/universities/jalal-abad-state-university/" className="font-bold text-navy hover:text-medical transition-colors">Jalal Abad State University (JASU)</Link> — Also known as Jalalabad State University, JASU is a premier government institution in Jalal-Abad city offering one of the most affordable MBBS fee structures in Kyrgyzstan (from $3,200/yr). Its strict academic discipline, dedicated Indian mess, gated hostel with CCTV, and consistently strong FMGE coaching make it an exceptional value choice.
                  </p>
                  <p>
                    <Link href="/universities/jalal-abad-international-university/" className="font-bold text-navy hover:text-medical transition-colors">Jalal-Abad International University</Link> — Established in 2015, JAIU is one of the fastest-growing private medical colleges in Kyrgyzstan. It combines advanced simulation labs, virtual anatomy software, and international faculty with a curriculum built around NExT examination standards. Ideal for students prioritising a technology-forward education.
                  </p>
                  <p>
                    <Link href="/universities/central-asian-international-medical-university/" className="font-bold text-navy hover:text-medical transition-colors">Central Asian International Medical University (CAIMU)</Link> — CAIMU, established in 2018, is widely regarded as the most innovative medical university in Kyrgyzstan. It was built from the ground up with competency-based medical education, making it highly aligned with both FMGE and NExT patterns. CAIMU MBBS fees are among the lowest in the country.
                  </p>
                  <p>
                    <Link href="/universities/osh-international-medical-university/" className="font-bold text-navy hover:text-medical transition-colors">Osh International Medical University (OIMU)</Link> — Founded in 2019, OIMU is the newest WCIEC partner university in Kyrgyzstan. Located in Osh city, it offers a premium hostel experience, small batch sizes for personalised attention, and a clinical rotation programme that starts from Year 3. An excellent option for students who want modern infrastructure and a tech-first teaching methodology.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Top Medical Universities (2-Col Grid) */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Top Medical Universities in Kyrgyzstan</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4"><Link href="/universities/osh-state-university" className="hover:text-medical transition-colors">1. Osh State University</Link></h3>
                  <p className="text-gray-600 flex-grow">Recognized as the <strong>Best Medical University in Kyrgyzstan</strong>, Osh State University offers world-class education with top international ranking. It provides modern facilities, massive clinical exposure, and is fully recognized by WHO and NMC. Fees are highly subsidized.</p>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4"><Link href="/universities/jalal-abad-state-university" className="hover:text-medical transition-colors">2. Jalal Abad State University (JASU)</Link></h3>
                  <p className="text-gray-600 flex-grow">A prestigious government institution offering an excellent balance of affordable tuition fees and premium education. Study MBBS at JASU, a very popular option among Indian students looking for an NMC Approved Medical University Kyrgyzstan.</p>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4"><Link href="/universities/jalal-abad-international-university" className="hover:text-medical transition-colors">3. Jalal-Abad International University</Link></h3>
                  <p className="text-gray-600 flex-grow">Known for its modern infrastructure, excellent English-medium curriculum, and focus on international students, making it a great option for MBBS after NEET in Kyrgyzstan.</p>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4"><Link href="/universities/central-asian-international-medical-university" className="hover:text-medical transition-colors">4. Central Asian International Medical University (CAIMU)</Link></h3>
                  <p className="text-gray-600 flex-grow">The cheapest medical university in Kyrgyzstan that doesn't compromise on quality. CAIMU MBBS boasts state-of-the-art anatomy labs, robotic training centers, and direct hospital tie-ups.</p>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full md:col-span-2 lg:col-span-1 lg:col-start-1 lg:ml-[50%] lg:w-[calc(200%+2rem)] xl:w-full xl:col-span-2 xl:ml-0 xl:max-w-3xl xl:mx-auto">
                  <h3 className="text-2xl font-bold text-navy mb-4"><Link href="/universities/osh-international-medical-university" className="hover:text-medical transition-colors">5. Osh International Medical University</Link></h3>
                  <p className="text-gray-600 flex-grow">A highly recommended university offering premium medical coaching specifically tailored for Indian students aiming to clear the FMGE/NExT screening test efficiently.</p>
                </div>
              </div>
            </div>

            {/* 6. Admission Process & Documents (2-Col split) */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">MBBS Kyrgyzstan Admission Process</h2>
                <div className="w-20 h-1 bg-medical rounded-full" />
                
                <div className="space-y-6">
                  {[
                    { title: "Step 1: Free Counselling", desc: "Connect with WCIEC Delhi experts for free profile evaluation." },
                    { title: "Step 2: University Selection", desc: "Choose your preferred Kyrgyzstan Medical University." },
                    { title: "Step 3: Document Submission", desc: "Submit your 10th/12th marks, NEET score, and passport copies." },
                    { title: "Step 4: Admission Letter", desc: "Get your guaranteed admission letter from the university." },
                    { title: "Step 5: Visa Invitation", desc: "We process your official visa invitation from the ministry." },
                    { title: "Step 6: Travel Assistance", desc: "Forex, flight bookings, and group departure to Kyrgyzstan." }
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
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">10th marksheet</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">12th marksheet</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">NEET scorecard</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Original Passport</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Medical certificate</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Passport Photos</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-3xl p-8 shadow-xl mt-8">
                  <h3 className="text-2xl font-bold font-poppins mb-6">Why Choose WCIEC Delhi?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Experienced Counsellors</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Direct Tie-ups</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Transparent Process</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Visa Processing</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Airport Assistance</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Post Admission Support</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Hostel and Indian Food (Full Width Text) */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">Hostel and Indian Food Facilities</h2>
              <div className="w-20 h-1 bg-medical rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Kyrgyzstan is incredibly welcoming for Indian students. We ensure top-notch accommodation and student support:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-medical shrink-0" />
                  <div>
                    <strong className="text-navy block mb-1">Indian Mess</strong>
                    <span className="text-gray-600 text-sm">Dedicated canteens offering authentic Indian veg/non-veg food cooked by Indian chefs.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-medical shrink-0" />
                  <div>
                    <strong className="text-navy block mb-1">Girls Hostel Safety</strong>
                    <span className="text-gray-600 text-sm">Highly secured, separate girls hostels with strict warden supervision.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-medical shrink-0" />
                  <div>
                    <strong className="text-navy block mb-1">CCTV Security</strong>
                    <span className="text-gray-600 text-sm">24/7 security cameras and access-control systems in all campuses.</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-medical shrink-0" />
                  <div>
                    <strong className="text-navy block mb-1">Student Support</strong>
                    <span className="text-gray-600 text-sm">On-ground WCIEC support team available 24/7 for medical emergencies or guidance.</span>
                  </div>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Secure Your MBBS Seat in Kyrgyzstan Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Admissions for the 2026-27 intake are strictly first-come, first-served. Speak to a professional counsellor at WCIEC Delhi and find the right low-cost medical university.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Book Free Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20in%20Kyrgyzstan." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
