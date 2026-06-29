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
  BookOpen,
  Coffee,
  Wallet,
  Sparkles
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS in Georgia 2026 for Indian Students | Fees & Admission",
  description: "Explore MBBS in Georgia 2026 for Indian students. Find NMC approved medical universities, affordable Georgia MBBS fees, and complete NEET guidance.",
  alternates: {
    canonical: "https://wciecdelhi.com/mbbs-in-georgia/",
  },
  openGraph: {
    title: "MBBS in Georgia 2026 for Indian Students | Fees & Admission",
    description: "Explore MBBS in Georgia 2026 for Indian students. Find NMC approved medical universities, affordable Georgia MBBS fees, and complete NEET guidance.",
    url: "https://wciecdelhi.com/mbbs-in-georgia/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const universities = [
  {
    name: "Tbilisi State Medical University",
    city: "Tbilisi",
    duration: "6 Years",
    tuition: "USD 8,000 / year",
    hostel: "USD 1,200 / year",
    living: "USD 1,800 / year",
    total: "INR 45-50 Lakhs"
  },
  {
    name: "Batumi Shota Rustaveli State University",
    city: "Batumi",
    duration: "6 Years",
    tuition: "USD 4,000 / year",
    hostel: "USD 1,000 / year",
    living: "USD 1,500 / year",
    total: "INR 30-35 Lakhs"
  },
  {
    name: "European University Georgia",
    city: "Tbilisi",
    duration: "6 Years",
    tuition: "USD 5,000 / year",
    hostel: "USD 1,000 / year",
    living: "USD 1,500 / year",
    total: "INR 35-40 Lakhs"
  },
  {
    name: "New Vision University",
    city: "Tbilisi",
    duration: "6 Years",
    tuition: "USD 7,000 / year",
    hostel: "USD 1,200 / year",
    living: "USD 1,800 / year",
    total: "INR 40-45 Lakhs"
  },
  {
    name: "Caucasus International University",
    city: "Tbilisi",
    duration: "6 Years",
    tuition: "USD 5,500 / year",
    hostel: "USD 1,000 / year",
    living: "USD 1,500 / year",
    total: "INR 35-40 Lakhs"
  }
];

const faqs = [
  {
    question: "Is Georgia good for MBBS for Indian students?",
    answer: "Yes, Georgia offers a premium European medical education environment. It is extremely safe, highly reputed, and degrees are internationally recognized by the WHO and NMC."
  },
  {
    question: "Is NEET mandatory for MBBS in Georgia?",
    answer: "Yes, qualifying the NEET-UG examination is legally mandatory for all Indian students seeking admission to any foreign medical university."
  },
  {
    question: "What is the duration of MBBS in Georgia?",
    answer: "The duration of the MBBS program in Georgia is strictly 6 years, which includes 5 years of theoretical/clinical study followed by a 1-year mandatory clinical internship."
  },
  {
    question: "Is MBBS in Georgia taught in English?",
    answer: "Yes, all the major universities in Georgia offering medical programs for international students provide 100% English medium medical education."
  },
  {
    question: "What is the cost of studying MBBS in Georgia?",
    answer: "Studying MBBS in Georgia is slightly more premium than Central Asia, typically ranging from INR 30 Lakhs to 50 Lakhs total, depending heavily on the specific university and city."
  },
  {
    question: "Are Georgia medical universities approved by NMC?",
    answer: "Yes, the top medical universities in Georgia fully comply with the latest NMC guidelines and are listed in the World Directory of Medical Schools (WDOMS)."
  },
  {
    question: "Does WCIEC help with Georgia visa documentation?",
    answer: "Absolutely. WCIEC Delhi provides end-to-end support including secure university applications, meticulous visa documentation, interview prep, and pre-departure briefings."
  }
];

export default function MBBSInGeorgiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://wciecdelhi.com/mbbs-in-georgia/#webpage",
        "url": "https://wciecdelhi.com/mbbs-in-georgia/",
        "name": "MBBS in Georgia 2026 for Indian Students | Fees & Admission",
        "description": "Explore MBBS in Georgia 2026 for Indian students. Find NMC approved medical universities, affordable Georgia MBBS fees.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://wciecdelhi.com/#website",
          "name": "WCIEC Delhi",
          "url": "https://wciecdelhi.com/"
        }
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://wciecdelhi.com/#organization",
        "name": "WCIEC Delhi Medical Education",
        "url": "https://wciecdelhi.com/",
        "logo": "https://wciecdelhi.com/logo.png",
        "description": "Leading medical consultancy assisting Indian students with MBBS admission in Georgia.",
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
        "@id": "https://wciecdelhi.com/mbbs-in-georgia/#faq",
        "mainEntity": faqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-white text-gray-800 overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="relative pt-32 pb-20 bg-[#07132a] text-white min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/60 to-transparent z-10" />
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
              <span className="text-white">Georgia</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-indigo-400 animate-pulse" /> Admission Open 2026-27
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in Georgia 2026 for <span className="text-indigo-400">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Study MBBS in Georgia from internationally recognized medical universities. Secure your seat today with complete guidance.
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 font-medium py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-indigo-400" /> European Education
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-indigo-400" /> English Medium Programs
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-indigo-400" /> NEET Assistance
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-indigo-400" /> Visa & Hostel Guidance
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-medical/20 flex items-center gap-2 text-lg">
                    Apply Now <ArrowRight size={18} />
                  </a>
                  <a href="#counselling" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-white/20">
                    Free Profile Evaluation
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
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Apply for Georgia</h3>
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

        {/* ── CORE CONTENT: FULL-WIDTH BALANCED ── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-20">
            
            {/* 1. Overview & Trust Banner */}
            <div className="grid lg:grid-cols-5 gap-12 items-start" id="overview">
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">Overview of MBBS in Georgia</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Situated at the intersection of Eastern Europe and Western Asia, Georgia has become a highly sought-after destination for Indian medical students. It provides an exceptional, modern European education environment that focuses heavily on academic integrity and practical clinical skills.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By choosing <strong>MBBS in Georgia for Indian students</strong>, aspirants secure an internationally recognized medical degree pathway. The country boasts safe, vibrant international campuses, robust infrastructure, and English-taught programs. Deciding to <strong>study medicine abroad</strong> in Georgia prepares students excellently for global licensing exams like USMLE, PLAB, and the Indian NExT.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-[#07132a] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
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

            {/* 2. Why Choose Georgia for MBBS 2026? */}
            <div className="space-y-8 scroll-mt-24" id="benefits">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Why Choose Georgia for MBBS 2026?</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Indian NEET aspirants looking for premium medical education often select Georgia. Here are the distinct advantages:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">European Learning</h4>
                    <p className="text-sm text-gray-500">Immerse yourself in a standard European educational framework focused on practicals.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">English Medium</h4>
                    <p className="text-sm text-gray-500">Enjoy 100% English Medium MBBS Abroad programs, removing any language barriers.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Modern Infrastructure</h4>
                    <p className="text-sm text-gray-500">Access advanced medical equipment, robotic labs, and modern simulation centers.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Coffee size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Student Community</h4>
                    <p className="text-sm text-gray-500">Join a vibrant international student community from India, UAE, UK, and Africa.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <Stethoscope size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Clinical Exposure</h4>
                    <p className="text-sm text-gray-500">Extensive practical training in high-patient-flow affiliated multi-specialty hospitals.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <Wallet size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Affordable Options</h4>
                    <p className="text-sm text-gray-500">Highly affordable compared to high-donation private Indian medical colleges.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Eligibility Criteria */}
            <div className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">MBBS in Georgia Eligibility Criteria 2026</h2>
                <p className="text-gray-600 leading-relaxed">
                  Before applying, please ensure you satisfy the Georgia MBBS Eligibility and NMC requirements for Indian students:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left pt-4">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">NEET Qualification</strong>
                      <span className="text-gray-600 text-sm">A valid, qualified NEET-UG scorecard is strictly required for admission.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">12th PCB Requirements</strong>
                      <span className="text-gray-600 text-sm">Minimum percentage of 50% aggregate in Physics, Chemistry, and Biology.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Age Criteria</strong>
                      <span className="text-gray-600 text-sm">Must be at least 17 years of age by December 31st of the admission year.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Passport & Fitness</strong>
                      <span className="text-gray-600 text-sm">Must possess a valid Indian passport and provide a medical fitness certificate.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Fees Structure */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS in Georgia Fees Structure 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Review the estimated Georgia MBBS Fees Structure for NMC Approved Medical Universities Georgia.
                </p>
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-6 py-6">University</th>
                        <th className="px-6 py-6">City</th>
                        <th className="px-6 py-6">Duration</th>
                        <th className="px-6 py-6">Tuition Fees</th>
                        <th className="px-6 py-6">Hostel Fees</th>
                        <th className="px-6 py-6">Living Cost</th>
                        <th className="px-6 py-6">Total Estimated Budget</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      {universities.map((uni, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-6 font-bold text-navy">{uni.name}</td>
                          <td className="px-6 py-6">{uni.city}</td>
                          <td className="px-6 py-6">{uni.duration}</td>
                          <td className="px-6 py-6">{uni.tuition}</td>
                          <td className="px-6 py-6">{uni.hostel}</td>
                          <td className="px-6 py-6">{uni.living}</td>
                          <td className="px-6 py-6 font-bold text-emerald-600">{uni.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-sm text-yellow-800">
                <strong>Disclaimer:</strong> Total budget includes tuition, hostel, food, medical insurance, visa extensions, basic travel, and emergency expenses. Final fees depend completely on the official university offer letter and prevailing currency rates.
              </div>
            </div>

            {/* 5. Top Medical Universities */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Top Medical Universities in Georgia</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Tbilisi State Medical University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> The leading medical university in Georgia, known worldwide for its massive clinical base and superior educational standards.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Course Duration:</strong> 6 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Massive central campus</li>
                    <li className="flex justify-between"><strong>Clinical Training:</strong> High-patient-flow hospitals</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Batumi Shota Rustaveli State University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> Located in the coastal city of Batumi, it is famous for its relatively low tuition fees combined with high academic quality.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Course Duration:</strong> 6 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Advanced scientific library</li>
                    <li className="flex justify-between"><strong>Clinical Training:</strong> Regional hospital networks</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">European University Georgia</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> A highly reputed, modern private university specifically designed to cater to international students with an ultra-modern campus.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO Recognized</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Course Duration:</strong> 6 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Modern simulation labs</li>
                    <li className="flex justify-between"><strong>Clinical Training:</strong> Dedicated clinical wings</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">New Vision University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> Known for offering a very practical, research-oriented medical curriculum. It runs its own massive university hospital.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Course Duration:</strong> 6 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> World-class research labs</li>
                    <li className="flex justify-between"><strong>Clinical Training:</strong> NVU University Hospital</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full lg:col-span-2 lg:w-1/2 mx-auto">
                  <h3 className="text-2xl font-bold text-navy mb-4">Caucasus International University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> Promotes a high degree of internationalization and provides one of the best dental and medical practical training facilities.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Course Duration:</strong> 6 Years</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> State-of-the-art clinics</li>
                    <li className="flex justify-between"><strong>Clinical Training:</strong> Affiliated major hospitals</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Is MBBS Valid? (Full Width Text) */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">Is MBBS in Georgia Valid in India?</h2>
              <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Parents often worry about the validity of foreign medical degrees. Rest assured, Georgia strictly complies with all <strong>NMC foreign medical graduate rules</strong>, making the degree fully valid in India.
              </p>
              <ul className="text-left text-gray-600 space-y-2 max-w-2xl mx-auto list-disc pl-5">
                <li><strong>Course Duration:</strong> The course is exactly 54 months of study plus a 1-year clinical internship.</li>
                <li><strong>Clinical Internship:</strong> A mandatory 12-month internship is conducted within Georgia.</li>
                <li><strong>English Medium Requirement:</strong> The entire course syllabus is taught safely in English.</li>
                <li><strong>Licensing Pathway:</strong> Graduates can directly appear for the NExT/FMGE examination in India.</li>
              </ul>
            </div>

            {/* 7 & 8 & 11. Admission Process & Documents & Authority (Grid split) */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">MBBS Georgia Admission Process 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full" />
                
                <div className="space-y-6">
                  {[
                    { title: "Step 1: Free Profile Evaluation", desc: "Speak with our counsellors to verify your marks and eligibility." },
                    { title: "Step 2: University Shortlisting", desc: "Select the best university matching your budget and goals." },
                    { title: "Step 3: Application Submission", desc: "We submit your documents to the university." },
                    { title: "Step 4: Admission Letter", desc: "Receive the official offer/admission letter from Georgia." },
                    { title: "Step 5: Visa Documentation", desc: "We meticulously prepare and process your student visa." },
                    { title: "Step 6: Travel and Accommodation", desc: "We arrange flight groups and secure local hostel rooms." }
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
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Valid Passport</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Medical certificate</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Passport photographs & Financial documents</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-3xl p-8 shadow-xl mt-8">
                  <h3 className="text-2xl font-bold font-poppins mb-6">Why Choose WCIEC Delhi?</h3>
                  <p className="text-sm text-gray-300 mb-6">We ensure a risk-free path to <Link href="/mbbs-abroad/" className="text-indigo-400 underline">MBBS Abroad</Link>.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-indigo-400" size={20} /><span className="text-sm font-medium">Experienced MBBS counsellors</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-indigo-400" size={20} /><span className="text-sm font-medium">University selection support</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-indigo-400" size={20} /><span className="text-sm font-medium">Transparent process</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-indigo-400" size={20} /><span className="text-sm font-medium">Visa assistance</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-indigo-400" size={20} /><span className="text-sm font-medium">Hostel guidance</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-indigo-400" size={20} /><span className="text-sm font-medium">Pre-departure support</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Life of Indian Students */}
            <div className="bg-[#07132a] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Life of Indian Students in Georgia</h2>
                <div className="w-20 h-1 bg-indigo-500 rounded-full mb-8" />
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Coffee size={24} className="text-indigo-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Indian Food Availability</strong>
                        <span className="text-sm">Georgia hosts numerous Indian restaurants and university hostels offer dedicated Indian mess facilities.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Building2 size={24} className="text-indigo-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Hostel Facilities & Safety</strong>
                        <span className="text-sm">Extremely safe country. Hostels are European-style, well-furnished, centrally heated, and secure.</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Globe size={24} className="text-indigo-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Climate</strong>
                        <span className="text-sm">Pleasant summers and snowy, mild winters. Students adjust very easily.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <PhoneCall size={24} className="text-indigo-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Student Support</strong>
                        <span className="text-sm">WCIEC assists with local registration and provides ongoing on-ground support.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Georgia vs Others */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Georgia vs Russia vs Kyrgyzstan vs Kazakhstan</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">Compare destinations to understand why Georgia is treated as a premium MBBS hub.</p>
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-8 py-6">Country</th>
                        <th className="px-8 py-6">Fees</th>
                        <th className="px-8 py-6">Duration</th>
                        <th className="px-8 py-6">Recognition</th>
                        <th className="px-8 py-6">Language</th>
                        <th className="px-8 py-6">Living Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-indigo-600">Georgia</td>
                        <td className="px-8 py-6">INR 30-50 Lakhs</td>
                        <td className="px-8 py-6">6 Years</td>
                        <td className="px-8 py-6">WHO, NMC, WFME</td>
                        <td className="px-8 py-6">English</td>
                        <td className="px-8 py-6">High</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy"><Link href="/mbbs-in-russia/" className="hover:text-medical transition-colors">Russia</Link></td>
                        <td className="px-8 py-6">INR 20-50 Lakhs</td>
                        <td className="px-8 py-6">6 Years</td>
                        <td className="px-8 py-6">WHO, NMC, ECFMG</td>
                        <td className="px-8 py-6">Bilingual/English</td>
                        <td className="px-8 py-6">Moderate</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy"><Link href="/mbbs-in-kazakhstan/" className="hover:text-medical transition-colors">Kazakhstan</Link></td>
                        <td className="px-8 py-6">INR 20-25 Lakhs</td>
                        <td className="px-8 py-6">5 Years</td>
                        <td className="px-8 py-6">WHO, NMC</td>
                        <td className="px-8 py-6">English</td>
                        <td className="px-8 py-6">Low/Moderate</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy"><Link href="/mbbs-in-kyrgyzstan/" className="hover:text-medical transition-colors">Kyrgyzstan</Link></td>
                        <td className="px-8 py-6">INR 15-22 Lakhs</td>
                        <td className="px-8 py-6">5 Years</td>
                        <td className="px-8 py-6">WHO, NMC</td>
                        <td className="px-8 py-6">English</td>
                        <td className="px-8 py-6">Very Low</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 11. FAQ SECTION */}
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
        </section>

        {/* Bottom Call to Action Strip */}
        <section className="bg-navy py-16 md:py-24 text-white text-center relative overflow-hidden" id="counselling">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Secure Your MBBS Seat in Georgia Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Admissions for the 2026-27 intake are strictly limited. Our expert counsellors can assist you with the full <Link href="/admission" className="underline hover:text-indigo-400">Visa Process</Link> and mapping out your exact <Link href="/mbbs-fees-abroad" className="underline hover:text-indigo-400">MBBS Fees Guide</Link>.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Book Free Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20in%20Georgia." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                WhatsApp Chat
              </Link>
            </div>
            <div className="pt-8 flex justify-center gap-4 text-sm text-gray-400">
                <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
                <span>|</span>
                <Link href="/mbbs-in-russia/" className="hover:text-white transition-colors">MBBS in Russia</Link>
                <span>|</span>
                <Link href="/mbbs-in-kazakhstan/" className="hover:text-white transition-colors">MBBS in Kazakhstan</Link>
                <span>|</span>
                <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-white transition-colors">MBBS in Kyrgyzstan</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
