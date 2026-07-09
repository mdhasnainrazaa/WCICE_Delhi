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
  Building2,
  Wallet,
  Calculator,
  Plane,
  AlertTriangle,
  Receipt,
  PiggyBank,
  Coffee,
  FileText,
  Award
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS Fees Abroad 2026 | Cost, Countries & Fee Structure",
  description: "Compare MBBS abroad fees, total cost, and fee structures across top countries. Find low cost MBBS abroad options for Indian students after NEET.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-fees-abroad/",
  },
  openGraph: {
    title: "MBBS Fees Abroad 2026 | Cost, Countries & Fee Structure",
    description: "Compare MBBS abroad fees, total cost, and fee structures across top countries. Find low cost MBBS abroad options for Indian students after NEET.",
    url: "https://www.wciecdelhi.com/mbbs-fees-abroad/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const feeStructure = [
  { country: "Kyrgyzstan", type: "State / Public", duration: "5 Years", tuition: "USD 3,000 - 4,500 / year", hostel: "USD 500 - 800", living: "USD 1,000", total: "INR 15 - 22 Lakhs" },
  { country: "Uzbekistan", type: "State / Public", duration: "5/6 Years", tuition: "USD 3,000 - 3,500 / year", hostel: "USD 500 - 600", living: "USD 1,200", total: "INR 16 - 22 Lakhs" },
  { country: "Kazakhstan", type: "State / Public", duration: "5 Years", tuition: "USD 4,000 - 5,000 / year", hostel: "USD 600 - 800", living: "USD 1,200", total: "INR 20 - 25 Lakhs" },
  { country: "Russia", type: "Federal / State", duration: "6 Years", tuition: "USD 4,000 - 8,500 / year", hostel: "USD 800 - 1,200", living: "USD 1,500", total: "INR 20 - 50 Lakhs" },
  { country: "Georgia", type: "State / Private", duration: "6 Years", tuition: "USD 5,000 - 8,000 / year", hostel: "USD 1,000 - 1,200", living: "USD 1,800", total: "INR 30 - 50 Lakhs" }
];

const comparisonTable = [
  { country: "Kyrgyzstan", cost: "INR 15 - 22 Lakhs", duration: "5 Years", language: "English", bestFor: "Ultra Low Budget" },
  { country: "Uzbekistan", cost: "INR 16 - 22 Lakhs", duration: "5/6 Years", language: "English", bestFor: "Low Budget & Safety" },
  { country: "Kazakhstan", cost: "INR 20 - 25 Lakhs", duration: "5 Years", language: "English", bestFor: "Modern Infrastructure" },
  { country: "Russia", cost: "INR 20 - 50 Lakhs", duration: "6 Years", language: "Bilingual / English", bestFor: "Global Recognition" },
  { country: "Georgia", cost: "INR 30 - 50 Lakhs", duration: "6 Years", language: "English", bestFor: "Premium European Vibe" }
];

const faqs = [
  {
    question: "Which country has the lowest MBBS fees abroad?",
    answer: "Kyrgyzstan and Uzbekistan currently offer the lowest MBBS abroad fees for Indian students, with total budgets starting from as low as INR 15 to 18 Lakhs for the complete course."
  },
  {
    question: "What is the total cost of MBBS abroad for Indian students?",
    answer: "Depending on the country and university, the total cost of MBBS abroad generally ranges from INR 15 Lakhs (in Central Asia) up to INR 50 Lakhs (in premium universities in Russia or Georgia)."
  },
  {
    question: "Can I pay MBBS abroad fees in installments?",
    answer: "Yes, almost all foreign medical universities allow international students to pay their tuition and hostel fees in semester-wise or annual installments."
  },
  {
    question: "Should I pay full MBBS fees at once?",
    answer: "No, it is highly recommended to pay fees directly to the university's official bank account on an annual or semester basis. Never pay the full 5-6 year course fee to any agent upfront."
  },
  {
    question: "What expenses are excluded from MBBS abroad packages?",
    answer: "Often, daily food/mess charges, personal living expenses, flight tickets, and local travel are excluded from basic university tuition and hostel fee packages."
  },
  {
    question: "Is MBBS abroad cheaper than private medical colleges in India?",
    answer: "Yes. Private medical colleges in India can charge anywhere from INR 60 Lakhs to 1.5 Crores, whereas MBBS abroad can be completed within INR 15 to 35 Lakhs, inclusive of living expenses."
  },
  {
    question: "How can I verify university fees?",
    answer: "Always demand the official University Admission/Offer Letter which clearly states the exact annual tuition and hostel fees in USD or the local currency. You can also verify on the university's official website."
  }
];

export default function MBBSFeesAbroadPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-fees-abroad/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-fees-abroad/",
        "name": "MBBS Fees Abroad 2026 | Cost, Countries & Fee Structure",
        "description": "Compare MBBS abroad fees, total cost, and fee structures across top countries.",
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
        "description": "Leading medical consultancy providing transparent MBBS abroad fee structures.",
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
        "@id": "https://www.wciecdelhi.com/mbbs-fees-abroad/#faq",
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
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 to-transparent z-10" />
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
              <span className="text-white">Fees Guide</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-emerald-400 animate-pulse" /> Updated for 2026-27 Intake
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS Fees Abroad 2026 for <span className="text-emerald-400">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Compare MBBS abroad fees with complete transparency. Avoid hidden charges and plan your medical education budget accurately.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-300 font-medium py-2">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Tuition Fees</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Hostel Cost</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Food Expenses</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Visa Charges</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Insurance</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Travel Cost</div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 text-lg">
                    Get Free Fee Evaluation <ArrowRight size={18} />
                  </a>
                  <a href="#counselling" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-white/20">
                    Talk to Counsellor
                  </a>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden" id="apply">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                    <Calculator size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Check Eligibility & Fees</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Secured process by WCIEC Delhi</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Get Fee Details" compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE CONTENT: FULL-WIDTH BALANCED ── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-20">
            
            {/* 1. Complete Cost of MBBS Abroad */}
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">Complete Cost of MBBS Abroad</h2>
                  <div className="w-20 h-1 bg-emerald-500 rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    When planning to <strong>study MBBS abroad</strong>, parents should never compare only the tuition fees. The true <strong>MBBS Abroad Total Cost</strong> involves a variety of necessary, recurring expenditures over the 5 to 6 years of study.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    A comprehensive budget includes university tuition, hostel accommodation, Indian mess/food charges, mandatory medical insurance, annual visa extensions, university registration fees, initial medical checkups, return flights, and personal living expenses. 
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-emerald-50 border border-emerald-100 rounded-3xl p-8 shadow-sm relative overflow-hidden h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <ShieldCheck size={32} className="text-emerald-600 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-navy mb-2">Trust & Transparency</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong>Golden Rule:</strong> The official university offer letter must confirm the final tuition and hostel fees. Never trust verbal commitments regarding foreign university fees. WCIEC Delhi guarantees 100% fee transparency before you fly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. MBBS Abroad Fees Structure 2026 (Table) */}
            <div className="space-y-8 scroll-mt-24" id="fee-structure">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS Abroad Fees Structure 2026</h2>
                <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Below is the comprehensive fee structure detailing the estimated budget for Indian students across top NMC-approved destinations.
                </p>
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[900px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-6 py-6">Country</th>
                        <th className="px-6 py-6">University Type</th>
                        <th className="px-6 py-6">Duration</th>
                        <th className="px-6 py-6">Annual Tuition Fee</th>
                        <th className="px-6 py-6">Hostel Fee (Annually)</th>
                        <th className="px-6 py-6">Living Cost (Annually)</th>
                        <th className="px-6 py-6 text-emerald-400">Approx Total Budget</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      {feeStructure.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-6 font-bold text-navy">{row.country}</td>
                          <td className="px-6 py-6">{row.type}</td>
                          <td className="px-6 py-6">{row.duration}</td>
                          <td className="px-6 py-6">{row.tuition}</td>
                          <td className="px-6 py-6">{row.hostel}</td>
                          <td className="px-6 py-6">{row.living}</td>
                          <td className="px-6 py-6 font-bold text-emerald-600">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. Cheapest Countries for MBBS Abroad */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Cheapest Countries for MBBS Abroad 2026</h2>
                <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Link href="/mbbs-in-kyrgyzstan/" className="group block border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-emerald-600 transition-colors">MBBS in Kyrgyzstan</h3>
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <p><strong>Average Fees:</strong> INR 15 - 22 Lakhs total</p>
                    <p><strong>Duration:</strong> 5 Years</p>
                    <p><strong>Benefits:</strong> Highly economical, short duration, easy admission.</p>
                    <p><strong>Recognition:</strong> WHO, NMC</p>
                  </div>
                  <span className="text-emerald-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">Explore Kyrgyzstan <ArrowRight size={16} /></span>
                </Link>

                <Link href="/mbbs-in-uzbekistan/" className="group block border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-emerald-600 transition-colors">MBBS in Uzbekistan</h3>
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <p><strong>Average Fees:</strong> INR 16 - 22 Lakhs total</p>
                    <p><strong>Duration:</strong> 5/6 Years</p>
                    <p><strong>Benefits:</strong> Safe environment, historic campuses, high NMC passing rate.</p>
                    <p><strong>Recognition:</strong> WHO, NMC</p>
                  </div>
                  <span className="text-emerald-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">Explore Uzbekistan <ArrowRight size={16} /></span>
                </Link>

                <Link href="/mbbs-in-kazakhstan/" className="group block border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-emerald-600 transition-colors">MBBS in Kazakhstan</h3>
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <p><strong>Average Fees:</strong> INR 20 - 25 Lakhs total</p>
                    <p><strong>Duration:</strong> 5 Years</p>
                    <p><strong>Benefits:</strong> Ultra-modern infrastructure, excellent clinical training.</p>
                    <p><strong>Recognition:</strong> WHO, NMC</p>
                  </div>
                  <span className="text-emerald-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">Explore Kazakhstan <ArrowRight size={16} /></span>
                </Link>

                <Link href="/mbbs-in-russia/" className="group block border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-emerald-600 transition-colors">MBBS in Russia</h3>
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <p><strong>Average Fees:</strong> INR 20 - 50 Lakhs total</p>
                    <p><strong>Duration:</strong> 6 Years</p>
                    <p><strong>Benefits:</strong> World-class federal universities, massive global recognition.</p>
                    <p><strong>Recognition:</strong> WHO, NMC, ECFMG</p>
                  </div>
                  <span className="text-emerald-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">Explore Russia <ArrowRight size={16} /></span>
                </Link>
                
                <Link href="/mbbs-in-georgia/" className="group block border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all lg:col-span-2 lg:w-1/2 mx-auto">
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-emerald-600 transition-colors">MBBS in Georgia</h3>
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <p><strong>Average Fees:</strong> INR 30 - 50 Lakhs total</p>
                    <p><strong>Duration:</strong> 6 Years</p>
                    <p><strong>Benefits:</strong> Premium European lifestyle, high standards, 100% English.</p>
                    <p><strong>Recognition:</strong> WHO, NMC, WFME</p>
                  </div>
                  <span className="text-emerald-600 font-bold flex items-center gap-2 text-sm uppercase tracking-wider">Explore Georgia <ArrowRight size={16} /></span>
                </Link>
              </div>
            </div>

            {/* 4. Fee Components Explained */}
            <div className="bg-navy p-10 md:p-14 rounded-3xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold font-poppins mb-4">MBBS Abroad Fee Components Explained</h2>
                  <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto" />
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <GraduationCap size={28} className="text-emerald-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">1. Tuition Fees</h4>
                    <p className="text-sm text-gray-300">The core university charges for academic instruction. It is fixed and must be paid directly to the university account annually or semester-wise.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <Building2 size={28} className="text-emerald-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">2. Hostel Fees</h4>
                    <p className="text-sm text-gray-300">Costs for university accommodation. Varies based on room type (2, 3, or 4 sharing) and facilities provided.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <Coffee size={28} className="text-emerald-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">3. Food Expenses</h4>
                    <p className="text-sm text-gray-300">Most students opt for Indian mess facilities which charge a monthly or annual fee, ensuring hygienic, home-style meals.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <FileText size={28} className="text-emerald-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">4. Visa & Documentation</h4>
                    <p className="text-sm text-gray-300">Mandatory annual costs for student visa extension, local police registration, and medical insurance renewal in the host country.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <Plane size={28} className="text-emerald-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">5. Travel Expenses</h4>
                    <p className="text-sm text-gray-300">Cost of up-and-down flight tickets when students travel back to India during summer vacations.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <Wallet size={28} className="text-emerald-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">6. Personal Living Expenses</h4>
                    <p className="text-sm text-gray-300">Day-to-day pocket money for local travel, stationery, clothing, and leisure. Usually $100-$150 per month.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. How to Calculate Total Budget */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-10 rounded-3xl border border-emerald-100 shadow-sm text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">How to Calculate Total MBBS Abroad Budget?</h2>
              <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto mb-8" />
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 mb-6 font-mono text-sm md:text-base text-navy font-bold overflow-x-auto">
                <span className="text-emerald-600">Total Budget</span> = Tuition + Hostel + Food + Insurance + Visa + Travel + Personal
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm max-w-2xl mx-auto">
                <strong>Pro Tip:</strong> Calculate the <em>annual budget</em> by adding these 7 components for one year. Multiply this by the course duration (5 or 6 years) to arrive at the <em>complete course budget</em>. Always factor in a 5% buffer for currency fluctuation (USD to INR).
              </p>
            </div>

            {/* 6. How to Avoid Hidden Charges */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
                <AlertTriangle size={32} className="text-red-500 shrink-0" />
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight">How to Avoid Hidden Charges in MBBS Abroad?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                  <p className="text-gray-700 text-sm"><strong>Verify official fee letter:</strong> Do not rely on printed brochures from agents. Demand the official admission letter stating the exact fees.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                  <p className="text-gray-700 text-sm"><strong>Check university bank details:</strong> Ensure tuition fees are paid directly to the university's official bank account via swift transfer.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                  <p className="text-gray-700 text-sm"><strong>Avoid unofficial channels:</strong> Refuse requests to pay the entire 6-year fee in cash to local representatives.</p>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <CheckCircle2 size={24} className="text-emerald-500 shrink-0" />
                  <p className="text-gray-700 text-sm"><strong>Confirm included services:</strong> Ask explicitly if the "package" includes flight tickets, medical insurance, and visa extension fees.</p>
                </div>
              </div>
            </div>

            {/* 7. Comparison Table (Featured Snippet Target) */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS Abroad Fee Comparison Table</h2>
                <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto mb-6" />
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <table className="w-full text-left text-sm text-gray-600 min-w-[700px]">
                  <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                    <tr>
                      <th className="px-6 py-5">Country</th>
                      <th className="px-6 py-5 text-emerald-400">Approx Total Cost</th>
                      <th className="px-6 py-5">Duration</th>
                      <th className="px-6 py-5">Language</th>
                      <th className="px-6 py-5">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white text-base">
                    {comparisonTable.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy">{row.country}</td>
                        <td className="px-6 py-5 font-bold text-emerald-600">{row.cost}</td>
                        <td className="px-6 py-5">{row.duration}</td>
                        <td className="px-6 py-5">{row.language}</td>
                        <td className="px-6 py-5 text-gray-500">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 8. Factors Affecting Fees */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight">Factors Affecting MBBS Abroad Fees</h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-gray-600">
                <div className="space-y-2">
                  <h4 className="font-bold text-navy text-lg flex items-center gap-2"><Award size={18} className="text-emerald-500" /> University Ranking & Age</h4>
                  <p className="text-sm pl-6">Older, top-ranked federal/state universities generally command higher tuition fees compared to newly established private colleges.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-navy text-lg flex items-center gap-2"><MapPin size={18} className="text-emerald-500" /> Country & City</h4>
                  <p className="text-sm pl-6">Studying in capital cities (like Moscow or Tbilisi) involves higher living and accommodation costs than regional cities.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-navy text-lg flex items-center gap-2"><Receipt size={18} className="text-emerald-500" /> Currency Fluctuation</h4>
                  <p className="text-sm pl-6">Fees are usually denoted in USD or local currency. Fluctuations in the INR to USD exchange rate directly impact your budget.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-navy text-lg flex items-center gap-2"><Building2 size={18} className="text-emerald-500" /> Hostel Category</h4>
                  <p className="text-sm pl-6">Choosing a private apartment or premium 2-sharing AC hostel room will significantly increase your annual living expenses.</p>
                </div>
              </div>
            </div>

            {/* 9. Why Choose WCIEC Delhi? (Grid split) */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Why Choose WCIEC Delhi for MBBS Abroad Guidance?</h2>
                <div className="w-20 h-1 bg-emerald-500 rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  Choosing the right university at the right budget requires expert navigation. We ensure a 100% transparent and scam-free admission process for Indian parents.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex gap-3 items-center"><ShieldCheck className="text-emerald-500 shrink-0" size={20} /><span className="text-sm font-medium text-navy">Transparent fee counselling</span></div>
                  <div className="flex gap-3 items-center"><ShieldCheck className="text-emerald-500 shrink-0" size={20} /><span className="text-sm font-medium text-navy">University verification</span></div>
                  <div className="flex gap-3 items-center"><ShieldCheck className="text-emerald-500 shrink-0" size={20} /><span className="text-sm font-medium text-navy">Admission & Visa support</span></div>
                  <div className="flex gap-3 items-center"><ShieldCheck className="text-emerald-500 shrink-0" size={20} /><span className="text-sm font-medium text-navy">Direct bank transfers</span></div>
                  <div className="flex gap-3 items-center"><ShieldCheck className="text-emerald-500 shrink-0" size={20} /><span className="text-sm font-medium text-navy">Pre-departure support</span></div>
                  <div className="flex gap-3 items-center"><ShieldCheck className="text-emerald-500 shrink-0" size={20} /><span className="text-sm font-medium text-navy">On-ground assistance</span></div>
                </div>
              </div>
              <div className="bg-emerald-600 text-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
                <PiggyBank size={48} className="mx-auto mb-6 text-emerald-200" />
                <h3 className="text-2xl font-bold font-poppins mb-4">Plan Your Budget with Us</h3>
                <p className="text-emerald-100 mb-8">Our expert counsellors will provide you with a detailed, itemized fee structure for your preferred universities—zero hidden charges guaranteed.</p>
                <a href="#apply" className="inline-block bg-white text-emerald-600 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 transform duration-300">
                  Request Fee Structure
                </a>
              </div>
            </div>

            {/* 10. FAQ SECTION */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto" />
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 transition-all hover:border-emerald-200 hover:shadow-md">
                    <h4 className="font-bold text-navy mb-3 flex items-start gap-4 text-xl">
                      <HelpCircle size={26} className="text-emerald-500 shrink-0 mt-0.5" />
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Ready to Choose the Right University?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Let us help you find the best NMC-approved university that fits your family's budget. Learn more about the complete <Link href="/admission" className="underline hover:text-emerald-400">Admission Process</Link>.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Book Free Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20know%20the%20exact%20fee%20structure%20for%20MBBS%20Abroad." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                WhatsApp Chat
              </Link>
            </div>
            <div className="pt-8 flex justify-center gap-4 text-sm text-gray-400 flex-wrap">
                <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
                <span>|</span>
                <Link href="/mbbs-in-russia/" className="hover:text-white transition-colors">Russia</Link>
                <span>|</span>
                <Link href="/mbbs-in-kazakhstan/" className="hover:text-white transition-colors">Kazakhstan</Link>
                <span>|</span>
                <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-white transition-colors">Kyrgyzstan</Link>
                <span>|</span>
                <Link href="/mbbs-in-georgia/" className="hover:text-white transition-colors">Georgia</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
