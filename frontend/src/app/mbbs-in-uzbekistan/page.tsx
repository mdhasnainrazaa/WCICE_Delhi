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
  title: "MBBS in Uzbekistan 2026 for Indian Students | Fees & Admission",
  description: "Explore MBBS in Uzbekistan 2026 for Indian students. Get direct admission, NEET guidance, and affordable MBBS Uzbekistan fees at NMC approved universities.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-in-uzbekistan/",
  },
  openGraph: {
    title: "MBBS in Uzbekistan 2026 for Indian Students | Fees & Admission",
    description: "Explore MBBS in Uzbekistan 2026 for Indian students. Get direct admission, NEET guidance, and affordable MBBS Uzbekistan fees at NMC approved universities.",
    url: "https://www.wciecdelhi.com/mbbs-in-uzbekistan/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const universities = [
  {
    name: "Tashkent Medical Academy",
    city: "Tashkent",
    duration: "5/6 Years",
    tuition: "USD 3,500 / year",
    hostel: "USD 600 / year",
    total: "INR 18-22 Lakhs"
  },
  {
    name: "Samarkand State Medical University",
    city: "Samarkand",
    duration: "5/6 Years",
    tuition: "USD 3,200 / year",
    hostel: "USD 500 / year",
    total: "INR 17-20 Lakhs"
  },
  {
    name: "Bukhara State Medical Institute",
    city: "Bukhara",
    duration: "5/6 Years",
    tuition: "USD 3,000 / year",
    hostel: "USD 500 / year",
    total: "INR 16-19 Lakhs"
  },
  {
    name: "Andijan State Medical Institute",
    city: "Andijan",
    duration: "5/6 Years",
    tuition: "USD 3,000 / year",
    hostel: "USD 500 / year",
    total: "INR 16-19 Lakhs"
  }
];

const faqs = [
  // Primary & Admission Intents
  {
    question: "Is MBBS in Uzbekistan good for Indian students?",
    answer: "Yes, Uzbekistan is becoming highly popular due to its ultra-affordable medical education, safe environment, and universities that strictly adhere to international and Indian (NMC) medical standards. It is one of the best choices for MBBS abroad."
  },
  {
    question: "How to apply for MBBS Admission Uzbekistan?",
    answer: "To secure MBBS Admission in Uzbekistan, you need to contact WCIEC Delhi, submit your 10th and 12th mark sheets, provide your NEET scorecard, and apply for the visa. We offer direct admission in top Uzbekistan Medical Colleges."
  },
  {
    question: "Is NEET compulsory for MBBS Uzbekistan?",
    answer: "Yes, qualifying the NEET-UG exam is strictly mandatory for Indian students planning to study MBBS in Uzbekistan and seeking to practice medicine back in India."
  },
  {
    question: "What is the duration of MBBS in Uzbekistan?",
    answer: "The duration of the MBBS program in Uzbekistan is generally 5 to 6 years, which fully complies with the NMC's requirement for foreign medical graduates (minimum 54 months)."
  },
  // Fee & Cost Intents
  {
    question: "What are the MBBS in Uzbekistan Fees 2026?",
    answer: "The MBBS in Uzbekistan Fees 2026 range from USD 3,000 to USD 3,500 per year for tuition. This makes it a highly affordable MBBS in Uzbekistan option for Indian students."
  },
  {
    question: "What is the total MBBS in Uzbekistan Cost?",
    answer: "The total estimated cost for MBBS in Uzbekistan ranges between INR 16 Lakhs to 22 Lakhs for the entire 5 to 6-year duration. This makes it the cheapest MBBS in Uzbekistan compared to Russia or Kazakhstan."
  },
  {
    question: "What is the detailed MBBS Fee Structure Uzbekistan?",
    answer: "The MBBS Fee Structure in Uzbekistan typically involves $3000-$3500 yearly tuition, $500-$600 yearly hostel fees, and around $1200 yearly living expenses."
  },
  // NMC & Licensing Intents
  {
    question: "Are there NMC Approved Medical Universities in Uzbekistan?",
    answer: "Yes, all major state medical universities in Uzbekistan are WHO approved and fully comply with the latest NMC guidelines for Indian students."
  },
  {
    question: "What is the FMGE Passing Rate in Uzbekistan?",
    answer: "The FMGE Passing Rate for students graduating from top Medical Universities in Uzbekistan is very high, thanks to a strict curriculum and dedicated NExT exam coaching."
  },
  {
    question: "Is MBBS Valid in India if done from Uzbekistan?",
    answer: "Yes, an MBBS degree from Uzbekistan is 100% valid in India provided the student completes the 54-month course, a 12-month internship, and clears the FMGE/NExT exam."
  },
  // Informational & Lifestyle Intents
  {
    question: "Why Study MBBS in Uzbekistan?",
    answer: "You should study MBBS in Uzbekistan because of the low cost MBBS in Uzbekistan, high safety index, English-medium curriculum, and the easy visa process."
  },
  {
    question: "What are the disadvantages of MBBS in Uzbekistan?",
    answer: "The primary disadvantage is the language barrier off-campus (Russian/Uzbek is spoken locally), though the entire MBBS course is taught in English."
  },
  {
    question: "Is Indian food available in Uzbekistan?",
    answer: "Yes, excellent Indian food is available. Most top Uzbekistan medical colleges have dedicated Indian messes serving vegetarian and non-vegetarian meals."
  },
  {
    question: "How is student life and safety in Uzbekistan?",
    answer: "Uzbekistan is incredibly safe for international students. Student life is vibrant, and the cost of living is very low, making it ideal for Indian students."
  },
  // Comparison Intents
  {
    question: "Uzbekistan vs Kyrgyzstan for MBBS?",
    answer: "Both are excellent for low-budget MBBS. Uzbekistan offers slightly more modern infrastructure in places like Tashkent, while Kyrgyzstan offers the absolute cheapest tuition fees."
  },
  {
    question: "Does WCIEC help with Uzbekistan visa?",
    answer: "Absolutely. As the best Study Abroad Consultant in Delhi, WCIEC Delhi provides end-to-end support, from university application to complete visa processing, document apostille, and final departure assistance."
  }
];

export default function MBBSInUzbekistanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-in-uzbekistan/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-in-uzbekistan/",
        "name": "MBBS in Uzbekistan 2026 for Indian Students | Fees & Admission",
        "description": "Explore MBBS in Uzbekistan 2026 for Indian students. Get direct admission, NEET guidance, and affordable MBBS Uzbekistan fees.",
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
        "description": "Leading medical consultancy assisting Indian students with MBBS admission in Uzbekistan.",
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
        "@id": "https://www.wciecdelhi.com/mbbs-in-uzbekistan/#faq",
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
        "@type": "ItemList",
        "itemListElement": universities.map((uni, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": uni.name,
          "description": `Study MBBS at ${uni.name} located in ${uni.city}.`
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
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/60 to-transparent z-10" />
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
              <span className="text-white">Uzbekistan</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-amber-400 animate-pulse" /> Admission Open 2026-27
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in Uzbekistan 2026 for <span className="text-amber-400">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Study MBBS in Uzbekistan from recognized medical universities. Secure your seat today with complete guidance.
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 font-medium py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400" /> Affordable Fees
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400" /> English Medium Programs
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400" /> NEET Guidance
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-amber-400" /> Visa & Hostel Assistance
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
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Apply for Uzbekistan</h3>
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
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">Overview of MBBS in Uzbekistan</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Uzbekistan is rapidly emerging as a premier choice for students looking to <strong>study medicine abroad</strong>. With a focus on modernizing its medical education system, Uzbekistan offers high-quality instruction at extremely affordable prices, drawing the attention of thousands of medical aspirants globally.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Opting for <strong>MBBS in Uzbekistan for Indian students</strong> provides a robust MD/MBBS pathway. The country offers a highly welcoming international student environment, centuries of rich cultural history, and universities that strictly adhere to global educational standards, making it an excellent, low-cost medical education hub.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-[#07132a] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
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

            {/* AI Search Optimization Section (Short Answers) */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 md:p-10 rounded-3xl border border-amber-100/50 shadow-sm">
              <h2 className="text-2xl font-bold font-poppins text-navy mb-6 flex items-center gap-2">
                <Sparkles className="text-amber-500" /> Quick AI Search Answers
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                  <h4 className="font-bold text-navy mb-2">Q: Is MBBS in Uzbekistan valid in India?</h4>
                  <p className="text-sm text-gray-600">Yes, it is completely valid. Degrees from WHO-recognized universities in Uzbekistan are accepted in India, provided students complete the required course duration and clear the NExT/FMGE licensing exam.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                  <h4 className="font-bold text-navy mb-2">Q: Is NEET required for MBBS in Uzbekistan?</h4>
                  <p className="text-sm text-gray-600">Yes, a valid and qualified NEET-UG scorecard is strictly mandatory for all Indian students seeking admission to any foreign medical university.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
                  <h4 className="font-bold text-navy mb-2">Q: What should students verify?</h4>
                  <p className="text-sm text-gray-600">Students must verify university recognition (WHO, WDOMS), NMC compliance, the 54-month minimum course duration, and the mandatory 1-year internship structure.</p>
                </div>
              </div>
            </div>

            {/* 2. Why Choose Uzbekistan for MBBS 2026? */}
            <div className="space-y-8 scroll-mt-24" id="benefits">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Why Choose Uzbekistan for MBBS 2026?</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Indian NEET aspirants and parents comparing affordable MBBS abroad destinations frequently select Uzbekistan. Here is why:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Wallet size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Affordable Medical Education</h4>
                    <p className="text-sm text-gray-500">One of the most cost-effective medical destinations, ideal for middle-class budgets.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Modern Universities</h4>
                    <p className="text-sm text-gray-500">State medical universities equipped with modern labs, clinics, and advanced learning tools.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">English Medium Courses</h4>
                    <p className="text-sm text-gray-500">The entire curriculum is taught efficiently in the English medium.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Safe Environment</h4>
                    <p className="text-sm text-gray-500">A peaceful, secure, and highly welcoming country with very low crime rates.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <Coffee size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Low Cost Living</h4>
                    <p className="text-sm text-gray-500">Accommodation and daily living expenses are surprisingly economical.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Indian Friendly Culture</h4>
                    <p className="text-sm text-gray-500">A massive influx of Indian students creates a comfortable, home-like cultural atmosphere.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Eligibility Criteria */}
            <div className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">MBBS in Uzbekistan Eligibility Criteria 2026</h2>
                <p className="text-gray-600 leading-relaxed">
                  Before proceeding with the Foreign Medical College Admission process, verify that you meet the mandatory Uzbekistan MBBS Eligibility and NMC requirements:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left pt-4">
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">NEET Qualification</strong>
                      <span className="text-gray-600 text-sm">You must hold a valid, qualified NEET-UG scorecard to be eligible for MBBS Abroad after NEET.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">12th PCB Requirements</strong>
                      <span className="text-gray-600 text-sm">Minimum percentage of 50% aggregate in Physics, Chemistry, and Biology (40% for reserved).</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Age Criteria</strong>
                      <span className="text-gray-600 text-sm">Applicants must be at least 17 years of age by December 31st of the admission year.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-blue-50">
                    <CheckCircle2 size={24} className="text-medical shrink-0" />
                    <div>
                      <strong className="text-navy text-lg block mb-1">Passport & Fitness</strong>
                      <span className="text-gray-600 text-sm">A valid Indian passport and a verified medical fitness certificate are essential.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Fees Structure */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS in Uzbekistan Fees Structure 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Review the estimated Uzbekistan MBBS Fees Structure for NMC Approved Medical Universities Uzbekistan. The table below highlights the core expenses.
                </p>
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-8 py-6">University</th>
                        <th className="px-8 py-6">City</th>
                        <th className="px-8 py-6">Duration</th>
                        <th className="px-8 py-6">Annual Tuition Fees</th>
                        <th className="px-8 py-6">Hostel Fees</th>
                        <th className="px-8 py-6">Total Estimated Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      {universities.map((uni, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                          <td className="px-8 py-6 font-bold text-navy">{uni.name}</td>
                          <td className="px-8 py-6">{uni.city}</td>
                          <td className="px-8 py-6">{uni.duration}</td>
                          <td className="px-8 py-6">{uni.tuition}</td>
                          <td className="px-8 py-6">{uni.hostel}</td>
                          <td className="px-8 py-6 font-bold text-emerald-600">{uni.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-sm text-yellow-800">
                <strong>Disclaimer:</strong> The total estimated cost accounts for tuition, hostel, food, mandatory medical insurance, visa extension, and basic flight charges. Final fees depend strictly on the official university confirmation letter and exchange rates.
              </div>
            </div>

            {/* 5. Top Medical Universities */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Top Medical Universities in Uzbekistan</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Tashkent Medical Academy</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> Located in the capital city, it is one of the premier and most internationally recognized medical academies in Central Asia.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Massive central library</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Clinical Exposure:</strong> Capital multi-specialty hospitals</li>
                    <li className="flex justify-between"><strong>Admission Details:</strong> Direct via WCIEC</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Samarkand State Medical University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> The oldest medical university in Central Asia, offering a rich history alongside modern medical training methodologies.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Dedicated Indian mess</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Clinical Exposure:</strong> Regional clinical centers</li>
                    <li className="flex justify-between"><strong>Admission Details:</strong> Fast-track documentation</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Bukhara State Medical Institute</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> Known for its high-quality education and very low tuition fees, attracting a large number of international students.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO Recognized Medical University</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> High-speed campus internet</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Clinical Exposure:</strong> State-funded hospitals</li>
                    <li className="flex justify-between"><strong>Admission Details:</strong> Simple profile assessment</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Andijan State Medical Institute</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Overview:</strong> Offers extensive clinical base and practical training, ensuring students are well-prepared for international licensing exams.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Comfortable Indian hostels</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Clinical Exposure:</strong> Intensive practical training</li>
                    <li className="flex justify-between"><strong>Admission Details:</strong> Handled securely by WCIEC</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Is MBBS Valid? (Full Width Text) */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">Is MBBS in Uzbekistan Valid in India?</h2>
              <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
              <div className="bg-blue-50 text-blue-900 p-4 rounded-xl font-bold text-lg mb-6 border border-blue-100">
                Yes, MBBS from eligible foreign medical universities in Uzbekistan is entirely valid in India if students meet the required NMC guidelines.
              </div>
              <ul className="text-left text-gray-600 space-y-2 max-w-2xl mx-auto list-disc pl-5">
                <li><strong>Course Duration:</strong> Must meet the minimum 54 months threshold. Uzbekistan universities offer compliant 5/6 year programs.</li>
                <li><strong>English Instruction:</strong> The entire course must be in the English medium, which is guaranteed.</li>
                <li><strong>Internship Requirement:</strong> You must complete a 12-month clinical internship.</li>
                <li><strong>Licensing Exam Requirement:</strong> Graduates are fully eligible to appear for the NExT/FMGE licensing exams.</li>
                <li><strong>Registration Process:</strong> Once you clear NExT, you can register with the State Medical Council to practice legally in India.</li>
              </ul>
            </div>

            {/* 7 & 8 & 11. Admission Process & Documents & Authority (Grid split) */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">MBBS Uzbekistan Admission Process 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full" />
                
                <div className="space-y-6">
                  {[
                    { title: "Step 1: Free Counselling", desc: "Speak with our counsellors to verify your eligibility." },
                    { title: "Step 2: University Shortlisting", desc: "Select from the best WHO Recognized Medical Universities." },
                    { title: "Step 3: Document Verification", desc: "Submit all academic records securely via WCIEC." },
                    { title: "Step 4: Application Submission", desc: "We process your application with the university." },
                    { title: "Step 5: Admission Letter", desc: "Receive the official university acceptance letter." },
                    { title: "Step 6: Visa Processing", desc: "We manage the entire visa documentation smoothly." },
                    { title: "Step 7: Travel Assistance", desc: "Fly with our group directly to your pre-booked hostel." }
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
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">10th Marksheet</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">12th Marksheet</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">NEET Scorecard</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Passport</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Medical Fitness Certificate</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Passport Photos & Financial Documents</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-3xl p-8 shadow-xl mt-8">
                  <h3 className="text-2xl font-bold font-poppins mb-6">Why Choose WCIEC Delhi?</h3>
                  <p className="text-sm text-gray-300 mb-6">Trust your future with the premier consultant for <Link href="/mbbs-abroad/" className="text-amber-400 underline">MBBS Abroad</Link>.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-amber-400" size={20} /><span className="text-sm font-medium">Experienced MBBS counsellors</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-amber-400" size={20} /><span className="text-sm font-medium">University assistance</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-amber-400" size={20} /><span className="text-sm font-medium">Transparent admission process</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-amber-400" size={20} /><span className="text-sm font-medium">Visa documentation support</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-amber-400" size={20} /><span className="text-sm font-medium">Airport support</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-amber-400" size={20} /><span className="text-sm font-medium">Pre departure guidance</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Life of Indian Students */}
            <div className="bg-[#07132a] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Life of Indian Students in Uzbekistan</h2>
                <div className="w-20 h-1 bg-amber-500 rounded-full mb-8" />
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Coffee size={24} className="text-amber-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Indian Food Availability</strong>
                        <span className="text-sm">Authentic Indian mess facilities are widely available inside university hostels.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Building2 size={24} className="text-amber-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Hostel Facilities & Safety</strong>
                        <span className="text-sm">Secure, comfortable hostels with top-tier safety standards and CCTV monitoring.</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Globe size={24} className="text-amber-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Climate & Transport</strong>
                        <span className="text-sm">Moderate climate similar to northern India. Very cheap and accessible local transport.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <PhoneCall size={24} className="text-amber-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Student Support & Parent Comm.</strong>
                        <span className="text-sm">Dedicated counselling support ensures parents are regularly updated on student progress.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Uzbekistan vs Others */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Uzbekistan vs Kyrgyzstan vs Kazakhstan vs Russia</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">Compare the top destinations to capture your ideal MBBS pathway.</p>
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
                        <td className="px-8 py-6 font-bold text-amber-600">Uzbekistan</td>
                        <td className="px-8 py-6">INR 16-22 Lakhs</td>
                        <td className="px-8 py-6">5/6 Years</td>
                        <td className="px-8 py-6">WHO, NMC</td>
                        <td className="px-8 py-6">English</td>
                        <td className="px-8 py-6">Low</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy"><Link href="/mbbs-in-kyrgyzstan/" className="hover:text-medical transition-colors">Kyrgyzstan</Link></td>
                        <td className="px-8 py-6">INR 15-22 Lakhs</td>
                        <td className="px-8 py-6">5 Years</td>
                        <td className="px-8 py-6">WHO, NMC</td>
                        <td className="px-8 py-6">English</td>
                        <td className="px-8 py-6">Very Low</td>
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
                        <td className="px-8 py-6 font-bold text-navy"><Link href="/mbbs-in-russia/" className="hover:text-medical transition-colors">Russia</Link></td>
                        <td className="px-8 py-6">INR 20-50 Lakhs</td>
                        <td className="px-8 py-6">6 Years</td>
                        <td className="px-8 py-6">WHO, NMC, ECFMG</td>
                        <td className="px-8 py-6">Bilingual/English</td>
                        <td className="px-8 py-6">Moderate</td>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Secure Your MBBS Seat in Uzbekistan Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Admissions for the 2026-27 intake are strictly first-come, first-served. Our counsellors can assist you through the complete <Link href="/admission" className="underline hover:text-amber-400">Visa Process</Link> and <Link href="/mbbs-fees-abroad" className="underline hover:text-amber-400">MBBS Fees</Link> planning.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-amber-500 hover:bg-amber-400 text-navy font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Book Free Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20in%20Uzbekistan." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                WhatsApp Chat
              </Link>
            </div>
            <div className="pt-8 flex justify-center gap-4 text-sm text-gray-400">
                <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
                <span>|</span>
                <Link href="/mbbs-in-russia/" className="hover:text-white transition-colors">MBBS in Russia</Link>
                <span>|</span>
                <Link href="/mbbs-in-kazakhstan/" className="hover:text-white transition-colors">MBBS in Kazakhstan</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
