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
  ThermometerSnowflake,
  HeartPulse,
  Coffee
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS in Russia 2026 for Indian Students | Fees & Admission",
  description: "Explore MBBS in Russia 2026 for Indian students at NMC approved universities. Get direct admission, NEET guidance, and affordable Russia MBBS fees structure.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-in-russia/",
  },
  openGraph: {
    title: "MBBS in Russia 2026 for Indian Students | Fees & Admission",
    description: "Explore MBBS in Russia 2026 for Indian students at NMC approved universities. Get direct admission, NEET guidance, and affordable Russia MBBS fees structure.",
    url: "https://www.wciecdelhi.com/mbbs-in-russia/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const universities = [
  {
    name: "First Moscow State Medical University",
    city: "Moscow",
    tuition: "USD 10,000 / year",
    hostel: "USD 1,200 / year",
    duration: "6 Years",
    total: "INR 45-50 Lakhs"
  },
  {
    name: "Kazan Federal University",
    city: "Kazan",
    tuition: "USD 6,500 / year",
    hostel: "USD 800 / year",
    duration: "6 Years",
    total: "INR 30-35 Lakhs"
  },
  {
    name: "Pirogov Russian National Research Medical University",
    city: "Moscow",
    tuition: "USD 8,500 / year",
    hostel: "USD 1,000 / year",
    duration: "6 Years",
    total: "INR 40-45 Lakhs"
  },
  {
    name: "Pavlov First State Medical University",
    city: "St. Petersburg",
    tuition: "USD 7,500 / year",
    hostel: "USD 1,000 / year",
    duration: "6 Years",
    total: "INR 35-40 Lakhs"
  },
  {
    name: "Bashkir State Medical University",
    city: "Ufa",
    tuition: "USD 4,000 / year",
    hostel: "USD 500 / year",
    duration: "6 Years",
    total: "INR 20-25 Lakhs"
  }
];

const faqs = [
  {
    question: "Is NEET mandatory for MBBS in Russia?",
    answer: "Yes, qualifying the NEET-UG exam is strictly mandatory for Indian students to study MBBS in Russia and later practice medicine in India."
  },
  {
    question: "What is the duration of MBBS in Russia?",
    answer: "The total duration of the MBBS (MD Physician) program in Russia is 6 years, which includes 5 years of theoretical/clinical study and 1 year of mandatory internship."
  },
  {
    question: "Is MBBS in Russia taught in English?",
    answer: "Yes, top NMC approved universities in Russia offer 100% English medium medical courses specially designed for international and Indian students."
  },
  {
    question: "What is the total cost of MBBS in Russia?",
    answer: "The total cost of studying MBBS in Russia ranges from INR 20 Lakhs to 50 Lakhs depending on the university, city, and lifestyle. This includes tuition fees and hostel accommodation."
  },
  {
    question: "Are Russian medical universities approved by NMC?",
    answer: "Yes, many renowned Russian medical universities are fully recognized by the WHO and strictly comply with the latest NMC guidelines for foreign medical graduates."
  },
  {
    question: "Can Indian students practice after MBBS from Russia?",
    answer: "Absolutely. After completing their MBBS degree in Russia, Indian students can practice in India by qualifying the NExT/FMGE licensing examination."
  },
  {
    question: "Which is the cheapest MBBS university in Russia?",
    answer: "Bashkir State Medical University and Far Eastern Federal University are among the more affordable options, offering high-quality education starting at around INR 20-25 Lakhs for the total course."
  }
];

export default function MBBSInRussiaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-in-russia/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-in-russia/",
        "name": "MBBS in Russia 2026 for Indian Students | Fees & Admission",
        "description": "Explore MBBS in Russia 2026 for Indian students at NMC approved universities. Get direct admission, NEET guidance, and affordable Russia MBBS fees structure.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.wciecdelhi.com/#website",
          "name": "WCIEC Delhi",
          "url": "https://www.wciecdelhi.com/"
        }
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://www.wciecdelhi.com/#organization",
        "name": "WCIEC Delhi Medical Education",
        "url": "https://www.wciecdelhi.com/",
        "logo": "https://www.wciecdelhi.com/logo.png",
        "description": "Leading medical consultancy assisting Indian students with MBBS admission in Russia.",
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
        "@id": "https://www.wciecdelhi.com/mbbs-in-russia/#faq",
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
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/60 to-transparent z-10" />
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
              <span className="text-white">Russia</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-red-400 animate-pulse" /> Admission Open 2026-27
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in Russia 2026 for <span className="text-red-400">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Study MBBS in Russia from NMC & WHO recognized medical universities. Secure your seat today with complete guidance.
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 font-medium py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> Government Universities
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> Affordable Fees
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> English Medium Courses
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical" /> NEET & Visa Support
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-medical/20 flex items-center gap-2 text-lg">
                    Apply for MBBS Russia Admission 2026 <ArrowRight size={18} />
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
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Apply for Russia</h3>
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
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">Overview of MBBS in Russia</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Russia has maintained its status as a highly prestigious destination for medical education over several decades. Pursuing <strong>MBBS in Russia for Indian students</strong> is highly sought after due to its century-old government medical universities, advanced infrastructure, and globally recognized curriculum.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    When you choose to <strong>study medicine abroad</strong> in Russia, you are awarded an <strong>MD Physician</strong> degree, which is strictly equivalent to the MBBS degree in India. Indian students choose Russia because it provides a perfect blend of high-quality European medical education, immense clinical exposure at massive state hospitals, and highly affordable tuition fees compared to private Indian institutions.
                  </p>
                </div>
              </div>

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

            {/* 2. Why Choose Russia for MBBS 2026? */}
            <div className="space-y-8 scroll-mt-24" id="benefits">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Why Choose Russia for MBBS 2026?</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Indian NEET aspirants and parents comparing MBBS abroad options frequently select Russia. Here is why it remains a top choice:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Government Universities</h4>
                    <p className="text-sm text-gray-500">Study in century-old, globally ranked federal and state medical institutions.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">International Recognition</h4>
                    <p className="text-sm text-gray-500">Degrees are fully approved by NMC, WHO, ECFMG, allowing global practice.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Stethoscope size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Clinical Exposure</h4>
                    <p className="text-sm text-gray-500">Gain practical experience in large capacity multi-specialty government hospitals.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <HeartPulse size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Affordable Education</h4>
                    <p className="text-sm text-gray-500">Subsidized fees make Russia a premium yet Low Cost MBBS Abroad option.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Large Indian Community</h4>
                    <p className="text-sm text-gray-500">Thousands of Indian students create a welcoming, home-like environment.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Safe Learning Environment</h4>
                    <p className="text-sm text-gray-500">Highly secure campuses and hostels ensure complete safety for international students.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Eligibility Criteria */}
            <div className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">MBBS in Russia Eligibility Criteria 2026</h2>
                <p className="text-gray-600 leading-relaxed">
                  To secure <strong>MBBS Russia Admission 2026</strong>, Indian students must strictly adhere to the NMC guidelines and university prerequisites:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left pt-4">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">NEET Qualification</strong>
                      <span className="text-gray-600 text-sm">Valid NEET-UG scorecard is mandatory to study MBBS Abroad after NEET.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">12th PCB Requirements</strong>
                      <span className="text-gray-600 text-sm">Minimum 50% aggregate marks in Physics, Chemistry, and Biology (40% for reserved).</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Age Criteria</strong>
                      <span className="text-gray-600 text-sm">The student must complete 17 years of age by December 31st of the admission year.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Passport & Fitness</strong>
                      <span className="text-gray-600 text-sm">Must possess a valid Indian passport and provide a certified medical fitness certificate.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Fees Structure */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS in Russia Fees Structure 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Review the estimated <strong>Russia MBBS Fees Structure</strong> for top medical universities. The total cost includes tuition, hostel, and basic academic expenses.
                </p>
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-8 py-6">University</th>
                        <th className="px-8 py-6">City</th>
                        <th className="px-8 py-6">Annual Tuition Fee</th>
                        <th className="px-8 py-6">Hostel Fee</th>
                        <th className="px-8 py-6">Total Estimated Cost</th>
                        <th className="px-8 py-6">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      {universities.map((uni, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-8 py-6 font-bold text-navy">{uni.name}</td>
                          <td className="px-8 py-6">{uni.city}</td>
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

              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-sm text-yellow-800">
                <strong>Disclaimer:</strong> The total cost generally includes tuition fees, hostel charges, mandatory medical insurance, visa extension, food, and flight expenses. Final fees depend on the official university offer letter and prevailing currency exchange rates.
              </div>
            </div>

            {/* 5. Top Medical Universities */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Top Medical Universities in Russia</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">First Moscow State Medical University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> The oldest and most prestigious medical university in Russia, offering world-class academic standards.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> High-tech labs, robotics</li>
                    <li className="flex justify-between"><strong>Clinical Exposure:</strong> Elite Moscow hospitals</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Kazan Federal University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> A highly ranked federal university known for its massive infrastructure, diverse student body, and excellent research output.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Simulation centers, vast library</li>
                    <li className="flex justify-between"><strong>Clinical Exposure:</strong> Extensive federal networks</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Pirogov Russian National Research Medical University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> Renowned for producing top-tier medical professionals and researchers. A very strong academic curriculum.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Dedicated research wings</li>
                    <li className="flex justify-between"><strong>Clinical Exposure:</strong> Top-tier surgical training</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Bashkir State Medical University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> The best option for students seeking an affordable yet high-quality medical education in Russia.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Comfortable hostels</li>
                    <li className="flex justify-between"><strong>Clinical Exposure:</strong> Over 10 affiliated hospitals</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Is MBBS Valid? (Full Width Text) */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">Is MBBS in Russia Valid in India?</h2>
              <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Yes, MBBS degrees from recognized Russian medical universities are entirely valid in India, provided they align with the latest <strong>NMC guidelines</strong> for foreign medical graduates.
              </p>
              <ul className="text-left text-gray-600 space-y-2 max-w-2xl mx-auto list-disc pl-5">
                <li><strong>Course Duration:</strong> Russia strictly follows a 6-year duration (54 months minimum theoretical + practical study).</li>
                <li><strong>Language:</strong> The entire course must be conducted in English medium.</li>
                <li><strong>Internship Requirements:</strong> A mandatory 1-year internship must be completed in the same university.</li>
                <li><strong>Licensing:</strong> Indian students must clear the NExT/FMGE licensing process to practice locally.</li>
              </ul>
            </div>

            {/* 7 & 8. Admission Process & Documents (2-Col split) */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">MBBS Russia Admission Process 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full" />
                
                <div className="space-y-6">
                  {[
                    { title: "Step 1: Free Counselling", desc: "Expert profiling by WCIEC Delhi." },
                    { title: "Step 2: University Selection", desc: "Choose the Best Medical University in Russia matching your budget." },
                    { title: "Step 3: Application Submission", desc: "Submit all necessary documents online." },
                    { title: "Step 4: Admission Letter", desc: "Receive formal acceptance from the university." },
                    { title: "Step 5: Visa Invitation", desc: "We secure your Ministry approved visa invitation." },
                    { title: "Step 6: Travel & Hostel Support", desc: "Flight booking, forex, and guided campus arrival." }
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
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Passport photos & Financial docs</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Life of Indian Students */}
            <div className="bg-[#07132a] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Life of Indian Students in Russia</h2>
                <div className="w-20 h-1 bg-red-500 rounded-full mb-8" />
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <ThermometerSnowflake size={24} className="text-red-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Climate Guidance</strong>
                        <span className="text-sm">Russia has cold winters, but all universities, hostels, and public transport systems are centrally heated for maximum comfort.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Coffee size={24} className="text-red-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Indian Food Availability</strong>
                        <span className="text-sm">Almost all major university campuses have Indian mess facilities or nearby Indian restaurants, plus access to Indian grocery stores.</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Building2 size={24} className="text-red-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Hostel Facilities</strong>
                        <span className="text-sm">Universities offer comfortable, furnished hostel rooms usually on a 2-3 sharing basis with high-speed internet and security.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ShieldCheck size={24} className="text-red-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Safety & Student Support</strong>
                        <span className="text-sm">Campuses are extremely secure. WCIEC representatives provide continuous on-ground student support throughout the course.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Russia vs Other MBBS Abroad Countries */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Russia vs Other MBBS Abroad Countries</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-8 py-6">Feature</th>
                        <th className="px-8 py-6 text-red-400">Russia</th>
                        <th className="px-8 py-6"><Link href="/mbbs-in-kyrgyzstan/" className="hover:text-medical transition-colors">Kyrgyzstan</Link></th>
                        <th className="px-8 py-6">Kazakhstan</th>
                        <th className="px-8 py-6">Georgia</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Duration</td>
                        <td className="px-8 py-6 font-bold text-gray-800">6 Years</td>
                        <td className="px-8 py-6">5 Years</td>
                        <td className="px-8 py-6">5 Years</td>
                        <td className="px-8 py-6">6 Years</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Approx Fees</td>
                        <td className="px-8 py-6 font-bold text-gray-800">INR 20 - 50 Lakhs</td>
                        <td className="px-8 py-6">INR 15 - 22 Lakhs</td>
                        <td className="px-8 py-6">INR 20 - 25 Lakhs</td>
                        <td className="px-8 py-6">INR 25 - 40 Lakhs</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Language</td>
                        <td className="px-8 py-6 font-bold text-gray-800">English / Bilingual</td>
                        <td className="px-8 py-6">English</td>
                        <td className="px-8 py-6">English</td>
                        <td className="px-8 py-6">English</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Recognition</td>
                        <td className="px-8 py-6 font-bold text-gray-800">WHO, NMC, ECFMG</td>
                        <td className="px-8 py-6">WHO, NMC</td>
                        <td className="px-8 py-6">WHO, NMC</td>
                        <td className="px-8 py-6">WHO, NMC, WFME</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Student Support</td>
                        <td className="px-8 py-6 font-bold text-gray-800">High (Huge Indian base)</td>
                        <td className="px-8 py-6">Very High</td>
                        <td className="px-8 py-6">High</td>
                        <td className="px-8 py-6">Medium</td>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Secure Your MBBS Seat in Russia Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Admissions for the 2026-27 intake are strictly first-come, first-served. Speak to a professional counsellor at WCIEC Delhi and find the right low-cost medical university.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Book Free Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20in%20Russia." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
