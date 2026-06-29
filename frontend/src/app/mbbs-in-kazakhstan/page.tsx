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
  HeartPulse,
  Coffee,
  Wallet
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS in Kazakhstan 2026 for Indian Students | Fees & Admission",
  description: "Get direct admission for MBBS in Kazakhstan 2026. Explore NMC approved medical universities with low fees, English medium courses, and NEET guidance.",
  alternates: {
    canonical: "https://wciecdelhi.com/mbbs-in-kazakhstan/",
  },
  openGraph: {
    title: "MBBS in Kazakhstan 2026 for Indian Students | Fees & Admission",
    description: "Get direct admission for MBBS in Kazakhstan 2026. Explore NMC approved medical universities with low fees, English medium courses, and NEET guidance.",
    url: "https://wciecdelhi.com/mbbs-in-kazakhstan/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const universities = [
  {
    name: "Al-Farabi Kazakh National University",
    city: "Almaty",
    duration: "5 Years",
    tuition: "USD 4,800 / year",
    hostel: "USD 800 / year",
    total: "INR 22-25 Lakhs"
  },
  {
    name: "South Kazakhstan Medical Academy",
    city: "Shymkent",
    duration: "5 Years",
    tuition: "USD 4,200 / year",
    hostel: "USD 600 / year",
    total: "INR 20-22 Lakhs"
  },
  {
    name: "Astana Medical University",
    city: "Astana",
    duration: "5 Years",
    tuition: "USD 4,500 / year",
    hostel: "USD 700 / year",
    total: "INR 21-24 Lakhs"
  },
  {
    name: "Karaganda Medical University",
    city: "Karaganda",
    duration: "5 Years",
    tuition: "USD 4,000 / year",
    hostel: "USD 600 / year",
    total: "INR 19-21 Lakhs"
  }
];

const faqs = [
  {
    question: "Is Kazakhstan good for MBBS for Indian students?",
    answer: "Yes, Kazakhstan is considered an excellent destination for Indian students due to its highly affordable fees, modern medical infrastructure, entirely English-taught curriculum, and safe international environment."
  },
  {
    question: "Is NEET compulsory for MBBS in Kazakhstan?",
    answer: "Yes. Qualifying the NEET-UG examination is strictly mandatory for Indian students planning to pursue MBBS abroad and seeking to practice medicine back in India."
  },
  {
    question: "What is the duration of MBBS in Kazakhstan?",
    answer: "The duration of the MBBS program in Kazakhstan is 5 years, which complies with the NMC's requirement for foreign medical graduates (minimum 54 months)."
  },
  {
    question: "What is the fees of MBBS in Kazakhstan?",
    answer: "The total estimated cost for MBBS in Kazakhstan ranges between INR 20 Lakhs to 25 Lakhs. This generally includes the total 5-year tuition fee and hostel accommodation."
  },
  {
    question: "Are Kazakhstan medical universities approved by NMC?",
    answer: "Yes, many of the top medical universities in Kazakhstan are fully recognized by WHO, FAIMER, and comply with the latest NMC guidelines."
  },
  {
    question: "Is MBBS in Kazakhstan taught in English?",
    answer: "Yes, all the major universities offering medical programs for international students provide 100% English medium medical education for the entire 5 years."
  },
  {
    question: "Does WCIEC help with Kazakhstan visa processing?",
    answer: "Absolutely. WCIEC Delhi provides end-to-end support, from university application to complete visa processing, document apostille, and final departure assistance."
  }
];

export default function MBBSInKazakhstanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://wciecdelhi.com/mbbs-in-kazakhstan/#webpage",
        "url": "https://wciecdelhi.com/mbbs-in-kazakhstan/",
        "name": "MBBS in Kazakhstan 2026 for Indian Students | Fees & Admission",
        "description": "Get direct admission for MBBS in Kazakhstan 2026. Explore NMC approved medical universities with low fees.",
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
        "description": "Leading medical consultancy assisting Indian students with MBBS admission in Kazakhstan.",
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
        "@id": "https://wciecdelhi.com/mbbs-in-kazakhstan/#faq",
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
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/60 to-transparent z-10" />
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
              <span className="text-white">Kazakhstan</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 border border-teal-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-teal-400 animate-pulse" /> Admission Open 2026-27
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in Kazakhstan 2026 for <span className="text-teal-400">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Study MBBS in Kazakhstan from recognized medical universities. Secure your seat today with complete guidance.
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 font-medium py-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-teal-400" /> Affordable Medical Education
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-teal-400" /> English Medium Courses
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-teal-400" /> NEET Assistance
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-teal-400" /> Visa & Hostel Guidance
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-medical/20 flex items-center gap-2 text-lg">
                    Apply Now <ArrowRight size={18} />
                  </a>
                  <a href="#counselling" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-white/20">
                    Free Counselling
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
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Apply for Kazakhstan</h3>
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
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">Overview of MBBS in Kazakhstan</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Over recent years, Kazakhstan has emerged as one of the most rapidly growing, high-tech destinations to <strong>study medicine abroad</strong>. The modern medical education system in Kazakhstan is strictly aligned with international standards, making it incredibly attractive for foreign students.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Pursuing <strong>MBBS in Kazakhstan for Indian students</strong> offers a straightforward MD/MBBS pathway. It combines state-of-the-art anatomy labs, simulation centers, and smart classrooms with highly affordable tuition. Because the country is developing fast and heavily investing in its educational infrastructure, the Indian student suitability is extremely high, offering a safe, progressive, and welcoming environment.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-[#07132a] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl" />
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

            {/* 2. Why Choose Kazakhstan for MBBS 2026? */}
            <div className="space-y-8 scroll-mt-24" id="benefits">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Why Choose Kazakhstan for MBBS 2026?</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Thousands of medical aspirants consider Kazakhstan an ideal destination. Here are the core benefits of applying for Kazakhstan MBBS Admission 2026:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Wallet size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Affordable Fees</h4>
                    <p className="text-sm text-gray-500">A top choice for Low Cost MBBS Abroad without compromising education quality.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Modern Infrastructure</h4>
                    <p className="text-sm text-gray-500">Campuses are equipped with advanced robotic simulation centers and smart labs.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">International Environment</h4>
                    <p className="text-sm text-gray-500">Join a vibrant community of thousands of students from around the globe.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">English Medium Programs</h4>
                    <p className="text-sm text-gray-500">The entire 5-year curriculum is seamlessly delivered in English.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <Coffee size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Low Living Cost</h4>
                    <p className="text-sm text-gray-500">Hostel and food expenses are highly economical, fitting Indian middle-class budgets.</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col gap-4 text-center items-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <Stethoscope size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2 text-lg">Clinical Exposure</h4>
                    <p className="text-sm text-gray-500">Access to premier government-affiliated hospitals for hands-on clinical practice.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Eligibility Criteria */}
            <div className="bg-blue-50 p-8 md:p-12 rounded-3xl border border-blue-100">
              <div className="max-w-4xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">MBBS in Kazakhstan Eligibility Criteria 2026</h2>
                <p className="text-gray-600 leading-relaxed">
                  Before proceeding with the Foreign Medical College Admission process, verify that you meet the mandatory Kazakhstan MBBS Eligibility and NMC requirements:
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
                      <span className="text-gray-600 text-sm">Minimum marks of 50% aggregate in Physics, Chemistry, and Biology (40% for reserved categories).</span>
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
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">MBBS in Kazakhstan Fees Structure 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Review the estimated Kazakhstan MBBS Fees Structure for NMC Approved Medical Universities Kazakhstan. The table below highlights the core expenses.
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
                        <th className="px-8 py-6">Annual Tuition Fee</th>
                        <th className="px-8 py-6">Hostel Fee</th>
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
                <strong>Disclaimer:</strong> The total estimated cost accounts for tuition fee, hostel, food, mandatory medical insurance, visa extension, and basic flight expenses. Final fees depend strictly on the official university confirmation letter and exchange rates.
              </div>
            </div>

            {/* 5. Top Medical Universities */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Top Medical Universities in Kazakhstan</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Al-Farabi Kazakh National University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Introduction:</strong> Regarded as the Best Medical University in Kazakhstan, this prestigious institution in Almaty offers elite medical programs.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> World-class smart campus</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Clinical Exposure:</strong> Premium city hospitals</li>
                    <li className="flex justify-between"><strong>Admission Process:</strong> Direct via WCIEC</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">South Kazakhstan Medical Academy</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Introduction:</strong> Located in Shymkent, it is incredibly popular among Indian students for its excellent teaching faculty and highly affordable MBBS Kazakhstan Fees.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Massive library & Indian mess</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Clinical Exposure:</strong> Regional clinical centers</li>
                    <li className="flex justify-between"><strong>Admission Process:</strong> Fast-track documentation</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Astana Medical University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Introduction:</strong> Situated in the dynamic capital city, this university boasts immense government funding, making it a state-of-the-art educational hub.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO Recognized Medical University</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Advanced robotic training labs</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Clinical Exposure:</strong> Capital city medical hubs</li>
                    <li className="flex justify-between"><strong>Admission Process:</strong> Simple profile assessment</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-navy mb-4">Karaganda Medical University</h3>
                  <p className="text-gray-600 mb-4 flex-grow"><strong>Introduction:</strong> One of the most historic and highly respected Kazakhstan medical universities, offering a robust, practical-oriented MD program.</p>
                  <ul className="space-y-2 text-sm text-gray-600 bg-gray-50 p-6 rounded-2xl">
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Recognition:</strong> WHO, NMC Approved</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Facilities:</strong> Dedicated research centers</li>
                    <li className="flex justify-between border-b border-gray-200 pb-2"><strong>Clinical Exposure:</strong> Intensive clinical base</li>
                    <li className="flex justify-between"><strong>Admission Process:</strong> Handled securely by WCIEC</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Is MBBS Valid? (Full Width Text) */}
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">Is MBBS in Kazakhstan Valid in India?</h2>
              <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                We understand that parents and students are deeply concerned about degree validity. Rest assured, your medical degree from Kazakhstan is fully valid in India, provided the university meets the strict <strong>NMC regulations</strong>:
              </p>
              <ul className="text-left text-gray-600 space-y-2 max-w-2xl mx-auto list-disc pl-5">
                <li><strong>Course Duration:</strong> Must meet the minimum 54 months (4.5 years) threshold. Kazakhstan offers a secure 5-year program.</li>
                <li><strong>Language:</strong> The entire course must be in the English medium, which is guaranteed.</li>
                <li><strong>Internship Requirement:</strong> You must complete a 12-month clinical internship.</li>
                <li><strong>Licensing Exam:</strong> Graduates are fully eligible to appear for the NExT/FMGE licensing exams to practice safely in India.</li>
              </ul>
            </div>

            {/* 7 & 8 & 11. Admission Process & Documents & Authority (Grid split) */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">MBBS Kazakhstan Admission Process 2026</h2>
                <div className="w-20 h-1 bg-medical rounded-full" />
                
                <div className="space-y-6">
                  {[
                    { title: "Step 1: Free Profile Evaluation", desc: "Speak with our counsellors to verify your eligibility and budget." },
                    { title: "Step 2: University Selection", desc: "Select from the best WHO Recognized Medical Universities." },
                    { title: "Step 3: Document Verification", desc: "Submit all academic records securely via WCIEC." },
                    { title: "Step 4: Admission Letter", desc: "Receive the official university acceptance letter." },
                    { title: "Step 5: Visa Processing", desc: "We manage the entire visa documentation smoothly." },
                    { title: "Step 6: Travel & Hostel Support", desc: "Fly with our group directly to your pre-booked hostel." }
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
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">10th & 12th marksheet</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">NEET scorecard</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Original Passport</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Medical fitness certificate</span></li>
                      <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm"><FileText className="text-medical" size={24} /> <span className="font-medium">Passport photos & Financial documents</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-navy text-white rounded-3xl p-8 shadow-xl mt-8">
                  <h3 className="text-2xl font-bold font-poppins mb-6">Why Choose WCIEC Delhi?</h3>
                  <p className="text-sm text-gray-300 mb-6">We are India's premier consultant for <Link href="/mbbs-abroad/" className="text-medical underline">MBBS Abroad</Link>.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Experienced counsellors</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">University selection support</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Transparent admission process</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Visa documentation</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Airport assistance</span></div>
                    <div className="flex gap-3 items-center"><ShieldCheck className="text-medical" size={20} /><span className="text-sm font-medium">Pre-departure guidance</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Life of Indian Students */}
            <div className="bg-[#07132a] text-white p-10 md:p-14 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Life of Indian Students in Kazakhstan</h2>
                <div className="w-20 h-1 bg-teal-500 rounded-full mb-8" />
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Coffee size={24} className="text-teal-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Indian Food Availability</strong>
                        <span className="text-sm">Universities feature dedicated Indian messes serving nutritious, hygienic Indian food daily.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Building2 size={24} className="text-teal-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Hostel Facilities & Safety</strong>
                        <span className="text-sm">Modern, centrally-heated hostels with robust 24/7 security and strict warden policies.</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Globe size={24} className="text-teal-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Climate & Community</strong>
                        <span className="text-sm">Continental climate. You will easily blend into a huge, welcoming Indian student community celebrating all major festivals.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <PhoneCall size={24} className="text-teal-400 shrink-0 mt-1" />
                      <div>
                        <strong className="text-white block mb-1">Counselling Support</strong>
                        <span className="text-sm">WCIEC maintains local representatives in Kazakhstan to offer ongoing assistance and academic tracking.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Kazakhstan vs Kyrgyzstan vs Russia vs Georgia */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Kazakhstan vs Kyrgyzstan vs Russia vs Georgia</h2>
                <div className="w-20 h-1 bg-medical rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">Confused about where to study? Compare the top destinations to make an informed choice.</p>
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
                        <td className="px-8 py-6 font-bold text-teal-600">Kazakhstan</td>
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
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy"><Link href="/mbbs-in-russia/" className="hover:text-medical transition-colors">Russia</Link></td>
                        <td className="px-8 py-6">INR 20-50 Lakhs</td>
                        <td className="px-8 py-6">6 Years</td>
                        <td className="px-8 py-6">WHO, NMC, ECFMG</td>
                        <td className="px-8 py-6">Bilingual/English</td>
                        <td className="px-8 py-6">Moderate</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-8 py-6 font-bold text-navy">Georgia</td>
                        <td className="px-8 py-6">INR 25-40 Lakhs</td>
                        <td className="px-8 py-6">6 Years</td>
                        <td className="px-8 py-6">WHO, NMC, WFME</td>
                        <td className="px-8 py-6">English</td>
                        <td className="px-8 py-6">High</td>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Secure Your MBBS Seat in Kazakhstan Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Admissions for the 2026-27 intake are strictly first-come, first-served. Our counsellors can assist you through the complete <Link href="/admission" className="underline hover:text-medical">Visa Process</Link> and <Link href="/mbbs-fees-abroad" className="underline hover:text-medical">MBBS Fees</Link> planning.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Book Free Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20in%20Kazakhstan." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                WhatsApp Chat
              </Link>
            </div>
            <div className="pt-8 flex justify-center gap-4 text-sm text-gray-400">
                <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
                <span>|</span>
                <Link href="/mbbs-in-russia/" className="hover:text-white transition-colors">MBBS in Russia</Link>
                <span>|</span>
                <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-white transition-colors">MBBS in Kyrgyzstan</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
