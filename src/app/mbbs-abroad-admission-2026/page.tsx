import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  CheckCircle2, 
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
  Search,
  Wallet,
  Plane,
  Building2,
  Calendar,
  Globe,
  Users
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS Abroad Admission 2026: Fees, Eligibility & NMC Rules",
  description: "Planning for MBBS abroad admission 2026? Check NMC guidelines, NEET eligibility, budget-friendly countries, and fees. Get expert WCIEC Delhi counseling!",
  alternates: {
    canonical: "https://wciecdelhi.com/mbbs-abroad-admission-2026/",
  },
  openGraph: {
    title: "MBBS Abroad Admission 2026: Fees, Eligibility & NMC Rules",
    description: "Planning for MBBS abroad admission 2026? Check NMC guidelines, NEET eligibility, budget-friendly countries, and fees. Get expert WCIEC Delhi counseling!",
    url: "https://wciecdelhi.com/mbbs-abroad-admission-2026/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const faqs = [
  {
    question: "When does MBBS abroad admission start for 2026?",
    answer: "The primary intake for MBBS abroad admission 2026 usually begins right after the NEET results are announced in June, with classes commencing in September or October."
  },
  {
    question: "Which is the best country for MBBS abroad in 2026?",
    answer: "Russia, Kyrgyzstan, and Kazakhstan are top choices for affordability and modern infrastructure, while Bangladesh and Nepal are preferred for their proximity and high FMGE passing rates."
  },
  {
    question: "Is NEET required for MBBS abroad in 2026?",
    answer: "Yes. To practice medicine in India, qualifying the NEET exam is legally required before taking admission in any foreign medical university."
  },
  {
    question: "What is the minimum budget for MBBS abroad?",
    answer: "For Indian students, low budget MBBS abroad programs start around ₹15 Lakhs to ₹20 Lakhs (including tuition, hostel, and food) for the entire 5 to 6-year course in countries like Kyrgyzstan."
  },
  {
    question: "How do I verify if a university is NMC approved?",
    answer: "The NMC no longer provides a direct list of approved universities. You must verify that the university's curriculum meets the FMGL 2021 duration, internship, and language rules. WCIEC provides free verification for students."
  }
];

export default function Admission2026Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://wciecdelhi.com/mbbs-abroad-admission-2026/#webpage",
        "url": "https://wciecdelhi.com/mbbs-abroad-admission-2026/",
        "name": "MBBS Abroad Admission 2026 Guide for Indian Students",
        "description": "Secure your MBBS abroad admission 2026. Complete guide on NEET rules, fees, top countries, and NMC compliance.",
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
        "description": "Expert admission counselors for MBBS abroad 2026. NMC compliance verified.",
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
        "@id": "https://wciecdelhi.com/mbbs-abroad-admission-2026/#faq",
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
              <span className="text-white">Admission 2026</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-blue-400 animate-pulse" /> 100% NMC Compliant Universities Only
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS Abroad Admission 2026 Guide for <span className="text-blue-400">Indian Students</span>
                </h1>
                
                <div className="bg-white/10 border border-white/20 p-5 rounded-2xl backdrop-blur-md max-w-2xl text-blue-50 leading-relaxed font-medium">
                  <strong>Securing an MBBS abroad admission in 2026 requires careful planning.</strong> Indian students must qualify the NEET exam to study medicine abroad and practice in India. The process involves profile evaluation, selecting an NMC-approved foreign medical university, document verification, and visa processing. Popular low-budget destinations include Russia, Kyrgyzstan, and Kazakhstan.
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 text-lg">
                    Check Eligibility in 2 Minutes <ArrowRight size={18} />
                  </a>
                  <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20apply%20for%20MBBS%20Abroad%20Admission%202026." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-[#25D366]/20">
                    <PhoneCall size={20} /> Talk to an Expert
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
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Get Free Profile Evaluation</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Admissions processing for 2026</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Start Free Evaluation" compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE CONTENT ── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-20">
            
            {/* 2. Quick Summary */}
            <div className="space-y-8 scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Quick Summary: What You Need to Know for 2026</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed text-lg">
                  If you are a NEET aspirant planning your medical journey, 2026 brings strict but clear rules for studying medicine abroad. Here is the fast track to understanding the landscape:
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                  <FileText className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold text-navy text-lg mb-2">Exams Required</h4>
                  <p className="text-gray-600 text-sm">NEET UG is strictly mandatory for Indian students.</p>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                  <Calendar className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold text-navy text-lg mb-2">Course Duration</h4>
                  <p className="text-gray-600 text-sm">Minimum 54 months (4.5 years) plus 12-month internship.</p>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                  <Globe className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold text-navy text-lg mb-2">Medium</h4>
                  <p className="text-gray-600 text-sm">Must be 100% English medium instruction.</p>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                  <Stethoscope className="text-blue-600 mb-4" size={32} />
                  <h4 className="font-bold text-navy text-lg mb-2">Ultimate Goal</h4>
                  <p className="text-gray-600 text-sm">Qualify the FMGE/NExT exam and practice in India.</p>
                </div>
              </div>
            </div>

            {/* 3. MBBS Abroad Eligibility 2026: Is NEET Mandatory? */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">MBBS Abroad Eligibility 2026: Is NEET Mandatory?</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  Yes. To secure your <strong className="text-navy">mbbs abroad admission 2026</strong>, you must explicitly meet the following eligibility criteria set by the Medical Council:
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Age</strong>
                      <p className="text-gray-600 text-sm mt-1">Minimum 17 years by December 31st of the admission year.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Academics</strong>
                      <p className="text-gray-600 text-sm mt-1">50% marks in Physics, Chemistry, and Biology (PCB) in 12th standard for General category (40% for reserved).</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">NEET Qualification</strong>
                      <p className="text-gray-600 text-sm mt-1">You must possess a valid, qualified NEET scorecard.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-3xl p-10 shadow-sm text-center flex flex-col justify-center h-full">
                <AlertTriangle size={48} className="text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-red-900 mb-4">Can I Study MBBS Abroad Without NEET?</h3>
                <p className="text-red-800 mb-6 font-medium">
                  If your goal is to return and practice medicine in India, you absolutely cannot study without NEET. The NMC rules clearly state that foreign medical graduates must have qualified NEET before taking admission abroad.
                </p>
                <Link href="/mbbs-admission-through-neet/" className="text-red-700 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  Read Full NEET Rules <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* 4. Admission Timeline & 5. Step-by-Step */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-navy text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
                <h2 className="text-3xl font-bold font-poppins mb-6">Admission Timeline 2026</h2>
                <p className="text-blue-200 mb-8">Missing a deadline can cost you an entire academic year. Follow this timeline carefully:</p>
                
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="font-bold text-sm">1</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                      <div className="font-bold text-blue-300 mb-1">May - June</div>
                      <div className="text-slate-100 text-sm">NEET exams and result declaration. Start shortlisting countries.</div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="font-bold text-sm">2</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                      <div className="font-bold text-blue-300 mb-1">July - August</div>
                      <div className="text-slate-100 text-sm">Apply to universities. Receive your admission letter.</div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="font-bold text-sm">3</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                      <div className="font-bold text-blue-300 mb-1">Aug - Sept</div>
                      <div className="text-slate-100 text-sm">Submit documents for visa processing and apostille verification.</div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 text-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <span className="font-bold text-sm">4</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                      <div className="font-bold text-blue-300 mb-1">Sept - Oct</div>
                      <div className="text-slate-100 text-sm">Travel, onboarding, and commencement of classes abroad.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">
                <h2 className="text-3xl font-bold font-poppins text-navy mb-6">Step-by-Step Admission Process</h2>
                <p className="text-gray-600 mb-8">WCIEC Delhi simplifies the complex admission process into 5 secure steps:</p>
                <div className="space-y-6 text-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                    <div><strong>Free Profile Evaluation:</strong> We analyze your NEET score and PCB marks to suggest the best countries.</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                    <div><strong>University Selection:</strong> Choose from 100% NMC-compliant universities tailored to your budget.</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                    <div><strong>Document Submission:</strong> Provide your 10th/12th marksheets, NEET scorecard, and valid passport.</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-1">4</div>
                    <div><strong>Admission Letter & Visa:</strong> We secure your official admission letter and handle all visa paperwork.</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-1">5</div>
                    <div><strong>Travel & Campus Drop:</strong> We assist with flight bookings and ensure safe arrival at the university hostel.</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                   <a href="#apply" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg">
                    Start Your 2026 Application
                  </a>
                </div>
              </div>
            </div>

            {/* 6. Top Countries Table */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Top Countries for MBBS Abroad 2026</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed mb-8">
                  Choosing the right destination is crucial for your clinical exposure and FMGE/NExT exam preparation. 
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg max-w-5xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[800px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-6 py-5 w-1/5">Country</th>
                        <th className="px-6 py-5 w-1/4">Approx. Tuition Fee (Total)</th>
                        <th className="px-6 py-5 w-1/4">Key Advantage</th>
                        <th className="px-6 py-5">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-russia/" className="hover:text-blue-600">Russia</Link></td>
                        <td className="px-6 py-5 font-semibold">₹15L - ₹30L</td>
                        <td className="px-6 py-5">Historic, globally recognized</td>
                        <td className="px-6 py-5">Quality education & safety</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-kyrgyzstan/" className="hover:text-blue-600">Kyrgyzstan</Link></td>
                        <td className="px-6 py-5 font-semibold text-green-600">₹12L - ₹18L</td>
                        <td className="px-6 py-5">Extremely affordable</td>
                        <td className="px-6 py-5">Low budget MBBS abroad</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-kazakhstan/" className="hover:text-blue-600">Kazakhstan</Link></td>
                        <td className="px-6 py-5 font-semibold">₹15L - ₹25L</td>
                        <td className="px-6 py-5">Modern infrastructure</td>
                        <td className="px-6 py-5">European-style learning</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-bangladesh/" className="hover:text-blue-600">Bangladesh</Link></td>
                        <td className="px-6 py-5 font-semibold">₹30L - ₹45L</td>
                        <td className="px-6 py-5">Highest FMGE passing rate</td>
                        <td className="px-6 py-5">India-like clinical exposure</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-nepal/" className="hover:text-blue-600">Nepal</Link></td>
                        <td className="px-6 py-5 font-semibold">₹45L - ₹60L</td>
                        <td className="px-6 py-5">Closest to India</td>
                        <td className="px-6 py-5">Zero cultural difference</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-8 rounded-3xl max-w-4xl mx-auto mt-8 flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <Wallet size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Low Budget MBBS Abroad for Indian Students</h3>
                  <p className="text-green-800">
                    If budget is a primary concern, Kyrgyzstan and Kazakhstan remain the top choices for low-budget MBBS abroad for Indian students in 2026, offering quality English-medium education starting at just ₹12 Lakhs total tuition.
                  </p>
                </div>
              </div>
              <div className="text-center pt-4">
                <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20compare%20MBBS%20Abroad%20Fees." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg">
                  Compare Fees on WhatsApp
                </Link>
              </div>
            </div>

            {/* 7. Fees Breakdown & 8. NMC Guidelines */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-navy flex items-center gap-3 mb-6 border-b border-gray-100 pb-4"><Wallet className="text-blue-600" /> MBBS Abroad Fees 2026 Breakdown</h3>
                <p className="text-gray-600 text-sm mb-4">When calculating your <strong>mbbs abroad fees 2026</strong>, parents must look beyond just tuition.</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Tuition Fees:</strong> Paid yearly or semester-wise directly to the university.</li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Hostel & Food:</strong> Usually ₹1 Lakh to ₹1.5 Lakhs per year.</li>
                  <li className="flex gap-3"><ChevronRight className="text-red-500 shrink-0 mt-0.5" /> <strong>Hidden Costs to Avoid:</strong> Always ask your counselor about medical insurance, visa extension fees, and local registration charges.</li>
                </ul>
                <div className="mt-6 bg-blue-50 text-blue-900 text-sm p-4 rounded-xl border border-blue-200 font-medium">
                  WCIEC guarantees 100% transparent fee structures with zero hidden charges.
                </div>
              </div>

              <div className="bg-navy border border-navy rounded-3xl p-8 shadow-lg text-white">
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 border-b border-white/20 pb-4"><ShieldCheck className="text-blue-400" /> NMC Guidelines Strict Warning</h3>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/20 text-blue-100 text-sm leading-relaxed mb-6">
                  The NMC guidelines for MBBS abroad (FMGL 2021) mandate that Indian students must complete a minimum 54-month academic course, a 12-month internship in the same country, and study entirely in English. The university must also grant a license to practice locally.
                </div>
                <h4 className="font-bold text-lg text-white mb-2">WCIEC Verification Assurance</h4>
                <p className="text-blue-200 text-sm mb-6">
                  Do not fall for fake agents offering shortcuts. As a premier consultancy based in Delhi, WCIEC strictly partners only with foreign medical universities that meet 100% of the NMC guidelines.
                </p>
                <Link href="/nmc-guidelines-for-mbbs-abroad/" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-full transition-all text-sm">
                  Read Full NMC Rules
                </Link>
              </div>
            </div>

            {/* 9. Common Mistakes */}
            <div className="bg-red-50 border border-red-100 p-10 rounded-3xl max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-red-900 flex items-center gap-3 mb-6"><AlertTriangle className="text-red-600" /> Common Mistakes Parents & Students Make</h2>
              <ul className="space-y-4 text-red-800 font-medium">
                <li className="flex gap-3 items-center"><XIcon className="text-red-500 shrink-0"/> Falling for "Direct Admission without NEET" scams.</li>
                <li className="flex gap-3 items-center"><XIcon className="text-red-500 shrink-0"/> Choosing bilingual universities instead of purely English-medium ones.</li>
                <li className="flex gap-3 items-center"><XIcon className="text-red-500 shrink-0"/> Ignoring the living costs and focusing only on tuition fees.</li>
                <li className="flex gap-3 items-center"><XIcon className="text-red-500 shrink-0"/> Using unverified local agents instead of established experts like WCIEC.</li>
              </ul>
            </div>

            {/* 10. Keyword Optimization & Internal Linking */}
            <div className="border-t border-gray-100 pt-12">
              <h3 className="text-xl font-bold font-poppins text-navy mb-6 text-center">Important Topics & Guides</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">mbbs abroad admission 2026</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">mbbs abroad 2026 eligibility</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">low budget mbbs abroad for indian students</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">study medicine abroad</span>
                <Link href="/mbbs-fees-abroad/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">MBBS Fees Abroad</Link>
                <Link href="/nmc-guidelines-for-mbbs-abroad/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">NMC Guidelines</Link>
                <Link href="/mbbs-abroad/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">Top Countries</Link>
              </div>
            </div>

            {/* 10. FAQ SECTION */}
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Start Your Medical Journey Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Don't risk your career with unverified advice. Get expert, India-focused counseling from WCIEC Delhi. Share your NEET score, PCB marks, budget, and preferred country for a free profile evaluation.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Check Eligibility in 2 Minutes
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20start%20my%20MBBS%20Abroad%202026%20application." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                <PhoneCall size={20} /> WhatsApp Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
