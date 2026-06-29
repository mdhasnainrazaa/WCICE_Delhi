import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  HelpCircle,
  PhoneCall,
  Flame,
  FileText,
  AlertTriangle,
  Stethoscope,
  BookOpen,
  LineChart,
  Search,
  CheckCircle,
  Wallet,
  Plane,
  Building2,
  Coffee,
  Globe
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS in Bangladesh 2026 for Indian Students | Fees & Admission",
  description: "Explore MBBS in Bangladesh 2026 for Indian students. Compare Bangladesh vs Kyrgyzstan, check NEET requirements, fees, and admission process.",
  alternates: {
    canonical: "https://wciecdelhi.com/mbbs-in-bangladesh/",
  },
  openGraph: {
    title: "MBBS in Bangladesh 2026 for Indian Students | Fees & Admission",
    description: "Explore MBBS in Bangladesh 2026 for Indian students. Compare Bangladesh vs Kyrgyzstan, check NEET requirements, fees, and admission process.",
    url: "https://wciecdelhi.com/mbbs-in-bangladesh/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is NEET required for MBBS in Bangladesh?",
    answer: "Yes, NEET qualification is strictly mandatory for Indian students to pursue MBBS in Bangladesh, just like any other country abroad, if they wish to practice in India."
  },
  {
    question: "Is Bangladesh good for Indian medical students?",
    answer: "Yes, Bangladesh is highly preferred due to its close geographical proximity, very similar culture and food, and a clinical disease pattern that perfectly mirrors India's."
  },
  {
    question: "How much does MBBS in Bangladesh cost?",
    answer: "Fees vary widely depending on the university and whether it is a private or state institution, generally ranging from INR 30 Lakhs to 45 Lakhs total budget."
  },
  {
    question: "Which is better: Bangladesh or Kyrgyzstan for MBBS?",
    answer: "Kyrgyzstan is much more affordable and offers a faster admission process. Bangladesh offers a closer cultural fit but usually has stricter academic eligibility requirements and higher fees."
  },
  {
    question: "Does WCIEC help with admission in Bangladesh?",
    answer: "Absolutely. WCIEC Delhi provides complete admission support, academic verification, visa processing, and pre-departure briefings for Bangladesh."
  }
];

export default function MBBSInBangladeshPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://wciecdelhi.com/mbbs-in-bangladesh/#webpage",
        "url": "https://wciecdelhi.com/mbbs-in-bangladesh/",
        "name": "MBBS in Bangladesh 2026 for Indian Students",
        "description": "Explore MBBS in Bangladesh 2026 for Indian students. Find NMC approved medical universities and affordable fees.",
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
        "description": "Leading medical consultancy assisting Indian students with MBBS admission in Bangladesh.",
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
        "@id": "https://wciecdelhi.com/mbbs-in-bangladesh/#faq",
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-10" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-blue-300 mb-6 font-semibold uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
              <ChevronRight size={12} />
              <span className="text-white">Bangladesh</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-blue-400 animate-pulse" /> Admissions Open 2026
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in Bangladesh 2026 for <span className="text-blue-400">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-xl">
                  Bangladesh is a preferred MBBS destination due to its proximity, similar culture, English-medium medical education, and high Indian clinical relevance.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 text-lg">
                    Free Profile Evaluation <ArrowRight size={18} />
                  </a>
                  <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20need%20details%20for%20MBBS%20in%20Bangladesh." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-[#25D366]/20">
                    WhatsApp Counsellor
                  </Link>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden" id="apply">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Check Your Eligibility</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Secured process by WCIEC Delhi</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Start Free Evaluation" compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE CONTENT: FULL-WIDTH BALANCED ── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-20">
            
            {/* 2. Quick Facts Table */}
            <div className="space-y-8 scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Quick Facts: MBBS in Bangladesh</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[600px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-6 py-5 w-1/3">Criteria</th>
                        <th className="px-6 py-5">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><BookOpen size={16} className="text-blue-500" /> Duration</td>
                        <td className="px-6 py-5">5 years academic study + mandatory clinical internship</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><Globe size={16} className="text-blue-500" /> Medium</td>
                        <td className="px-6 py-5 font-bold text-blue-600">English-medium instruction</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><CheckCircle size={16} className="text-blue-500" /> Eligibility</td>
                        <td className="px-6 py-5">NEET qualified + strict academic criteria (varies by university)</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><Stethoscope size={16} className="text-blue-500" /> Best Fit</td>
                        <td className="px-6 py-5">Students preferring an India-like medical environment</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><MapPin size={16} className="text-blue-500" /> Key Advantage</td>
                        <td className="px-6 py-5">Close proximity to India & highly similar disease pattern</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. Why Bangladesh Attracts Indian Students */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Why Bangladesh Attracts Indian Students</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  Deciding to study <strong>MBBS abroad in Bangladesh</strong> is a highly strategic choice for Indian students. The environment perfectly bridges the gap between studying abroad and feeling at home.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Geographical Proximity</strong>
                      <p className="text-gray-600 text-sm mt-1">Extremely close to India with easy, affordable travel options via road and short flights.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Familiar Food and Culture</strong>
                      <p className="text-gray-600 text-sm mt-1">Students experience easier adaptation due to similar cultural norms and widely available Indian-style food.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Clinical Exposure</strong>
                      <p className="text-gray-600 text-sm mt-1">The disease pattern is identical to India, offering high clinical relevance for students planning to practice back home.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-3xl p-10 border border-blue-100 shadow-sm text-center flex flex-col justify-center h-full">
                <ShieldCheck size={48} className="text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-navy mb-4">A Balanced Alternative</h3>
                <p className="text-gray-600 mb-6">
                  It is heavily preferred by students comparing Nepal, Kyrgyzstan, Russia, and Kazakhstan who prioritize an India-like medical syllabus and easy travel access over extreme cold climates.
                </p>
                <Link href="/admission/" className="text-blue-600 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  See Admission Process <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* 4. Admission Process & Eligibility */}
            <div className="bg-navy p-10 md:p-14 rounded-3xl relative overflow-hidden text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold font-poppins mb-4">Admission Process & Eligibility</h2>
                  <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto" />
                  <p className="text-blue-200 mt-6 max-w-2xl mx-auto">
                    The <strong>MBBS eligibility in Bangladesh</strong> is generally stricter compared to Central Asian countries. Understanding these rules is critical before applying.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4 mb-4"><Stethoscope className="text-blue-400" /> Key Requirements</h3>
                    <ul className="space-y-4 text-gray-300 text-sm">
                      <li className="flex gap-3"><AlertTriangle className="text-blue-400 shrink-0" size={18}/> <strong>NEET qualification is mandatory</strong> for Indian students as per NMC guidelines.</li>
                      <li className="flex gap-3"><AlertTriangle className="text-blue-400 shrink-0" size={18}/> Academic percentage requirements (GPA in 10th and 12th) vary significantly by university.</li>
                      <li className="flex gap-3"><AlertTriangle className="text-blue-400 shrink-0" size={18}/> A valid passport is strictly mandatory to initiate the process.</li>
                      <li className="flex gap-3"><AlertTriangle className="text-blue-400 shrink-0" size={18}/> Universities often have strict rules against long study gaps between 12th grade and admission.</li>
                    </ul>
                  </div>

                  <div className="space-y-4 bg-white border border-blue-100 p-8 rounded-2xl text-navy">
                    <h3 className="text-xl font-bold flex items-center gap-2 border-b border-gray-100 pb-4 mb-4"><FileText className="text-blue-600" /> Required Checklist</h3>
                    <ul className="space-y-3 text-gray-600 text-sm font-medium">
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-500" size={18}/> NEET scorecard</li>
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-500" size={18}/> 10th & 12th original marksheets</li>
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-500" size={18}/> Valid Passport</li>
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-500" size={18}/> Initial budget planning</li>
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-500" size={18}/> Target university preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Admission Evaluation Criteria (Lead Capture) */}
            <div className="border border-blue-100 bg-blue-50/50 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">WCIEC Admission Evaluation Criteria</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-8" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-left text-sm text-gray-700">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><Search className="text-blue-500" size={20}/> Academic marks verification</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><Search className="text-blue-500" size={20}/> NEET qualification check</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><Search className="text-blue-500" size={20}/> Year gap analysis</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><Search className="text-blue-500" size={20}/> Budget assessment</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><Search className="text-blue-500" size={20}/> Hostel + safety preferences</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><Search className="text-blue-500" size={20}/> University validation</div>
              </div>

              <p className="text-gray-600 mb-6">Because eligibility rules in Bangladesh are strict, we strongly encourage users to submit their academic details to receive a customized university shortlist.</p>
              <a href="#apply" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg">
                Submit Details for Shortlist
              </a>
            </div>

            {/* 6. Fees & Hostel Life */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS Bangladesh Fees & Student Life</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Understanding the <strong>MBBS in Bangladesh fees for Indian students</strong> and the accommodation environment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-navy flex items-center gap-3 mb-6 border-b border-gray-100 pb-4"><Wallet className="text-blue-600" /> Cost & Payment</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Total MBBS Cost:</strong> Generally higher than Central Asia but highly competitive given the quality.</li>
                    <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Living Expenses:</strong> Hostel, food, travel, and living expenses are very similar to Indian cities.</li>
                    <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Payment Structure:</strong> Typically collected on a year-wise or semester-wise basis, depending heavily on the specific college.</li>
                  </ul>
                  <div className="mt-6 bg-yellow-50 text-yellow-800 text-sm p-4 rounded-xl border border-yellow-200">
                    👉 <strong>Note:</strong> Fees vary significantly by university and should be confirmed directly with our counsellors before admission.
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-navy flex items-center gap-3 mb-6 border-b border-gray-100 pb-4"><Building2 className="text-blue-600" /> Accommodation & Safety</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Hostel Life:</strong> Most medical colleges provide secure, in-campus hostel accommodation with separate wings for girls.</li>
                    <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Safety Conditions:</strong> Bangladesh is known for a strict academic culture and high safety standards for international students.</li>
                    <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Parent Visits:</strong> Due to proximity, parent visit feasibility is extremely high compared to European destinations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. Comparison Section */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Bangladesh vs Other Countries</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed mb-8">
                  Positioning Bangladesh as the balanced option for India-like education and extreme proximity.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg max-w-5xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[700px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-6 py-5 w-1/4">Country</th>
                        <th className="px-6 py-5">Key Differences & Strengths</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-blue-600 text-lg">Bangladesh</td>
                        <td className="px-6 py-5"><strong>Balanced option:</strong> Extremely India-like education, similar disease patterns, high clinical exposure, and immediate proximity.</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-kyrgyzstan/" className="hover:text-blue-600 transition-colors">Kyrgyzstan</Link></td>
                        <td className="px-6 py-5">Much cheaper fees and more relaxed academic admission options compared to Bangladesh.</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-russia/" className="hover:text-blue-600 transition-colors">Russia</Link></td>
                        <td className="px-6 py-5">Massive federal universities with global rankings, but features a much colder climate and different culture.</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-kazakhstan/" className="hover:text-blue-600 transition-colors">Kazakhstan</Link></td>
                        <td className="px-6 py-5">Highly structured education system with modern European-style infrastructure, but longer travel distance.</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy">Nepal</td>
                        <td className="px-6 py-5">Similar geographical proximity and curriculum to Bangladesh, but generally has very limited seats and higher fees.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Keyword Optimization & Internal Linking Block */}
            <div className="border-t border-gray-100 pt-12">
              <h3 className="text-xl font-bold font-poppins text-navy mb-6 text-center">Important Topics & Related Guides</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">MBBS in Bangladesh for Indian students</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">MBBS abroad Bangladesh</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">MBBS Bangladesh fees</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">Bangladesh MBBS admission 2026</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">NEET required for MBBS Bangladesh</span>
                <Link href="/mbbs-abroad/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">MBBS Abroad Overview</Link>
                <Link href="/mbbs-in-kyrgyzstan/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">MBBS in Kyrgyzstan</Link>
                <Link href="/admission/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">Admission Process</Link>
              </div>
            </div>

            {/* 8. FAQ SECTION */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto" />
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 transition-all hover:border-blue-200 hover:shadow-md">
                    <h4 className="font-bold text-navy mb-3 flex items-start gap-4 text-xl">
                      <HelpCircle size={26} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed pl-10 text-lg">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 11. Final CTA Section (High Conversion Block) */}
        <section className="bg-navy py-16 md:py-24 text-white text-center relative overflow-hidden" id="counselling">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Need Help Choosing Between Bangladesh and Other Countries?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Share your NEET score, academic marks, budget, and preferred country. WCIEC Delhi will provide a personalized MBBS abroad comparison and university shortlist.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Start Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20compare%20MBBS%20in%20Bangladesh%20with%20other%20countries." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                <PhoneCall size={20} /> WhatsApp Now
              </Link>
            </div>
            <div className="pt-8 flex justify-center gap-4 text-sm text-gray-400 flex-wrap">
                <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad Overview</Link>
                <span>|</span>
                <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-white transition-colors">Kyrgyzstan</Link>
                <span>|</span>
                <Link href="/mbbs-in-russia/" className="hover:text-white transition-colors">Russia</Link>
                <span>|</span>
                <Link href="/mbbs-admission-through-neet/" className="hover:text-white transition-colors">NEET Guide</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
