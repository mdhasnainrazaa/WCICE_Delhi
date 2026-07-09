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
  Plane
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS Admission Through NEET Abroad | 2026 Guide for Indian Students",
  description: "Planning MBBS abroad after NEET? Discover NMC rules, low NEET score options, and step-by-step admission process for Indian students.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-admission-through-neet/",
  },
  openGraph: {
    title: "MBBS Admission Through NEET Abroad | 2026 Guide for Indian Students",
    description: "Planning MBBS abroad after NEET? Discover NMC rules, low NEET score options, and step-by-step admission process for Indian students.",
    url: "https://www.wciecdelhi.com/mbbs-admission-through-neet/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const faqs = [
  {
    question: "Can I study MBBS abroad with a low NEET score?",
    answer: "Yes. NEET qualification is strictly required, but your exact NEET score does not restrict your admission to foreign medical universities. As long as you have the minimum qualifying marks, you are eligible."
  },
  {
    question: "Can I study MBBS abroad without NEET?",
    answer: "No. NEET qualification is legally mandatory for Indian students as per NMC rules if they wish to practice medicine in India after graduation."
  },
  {
    question: "Does NEET score decide country selection?",
    answer: "No. Your country and university selection should depend on your financial budget, university eligibility criteria, and personal preferences—not your NEET rank."
  },
  {
    question: "Is NEET compulsory for MBBS abroad?",
    answer: "Yes. It is mandatory for Indian students who want to practice medicine in India and sit for the NExT/FMGE licensing examination after their graduation."
  },
  {
    question: "Which countries are best for NEET-qualified students?",
    answer: "Popular and affordable choices for NEET-qualified students include Russia, Kazakhstan, Uzbekistan, Kyrgyzstan, and Georgia."
  }
];

export default function NEETAdmissionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-admission-through-neet/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-admission-through-neet/",
        "name": "MBBS Admission Through NEET Abroad (2026 Guide)",
        "description": "Discover NMC rules, low NEET score options, and step-by-step admission process for Indian students studying MBBS abroad.",
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
        "description": "Leading medical consultancy guiding NEET qualified students for MBBS abroad admissions.",
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
        "@id": "https://www.wciecdelhi.com/mbbs-admission-through-neet/#faq",
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
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/60 to-transparent z-10" />
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
              <span className="text-white">NEET Guide</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-cyan-400 animate-pulse" /> 2026 Admission Guide
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS Admission Through <span className="text-cyan-400">NEET Abroad</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  NEET is the ultimate gateway for your medical career. Understand NMC guidelines and find the best global opportunities even with a low NEET score.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 text-sm text-gray-300 font-medium py-2">
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-400" /> Free Profile Evaluation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-400" /> Country Shortlisting</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-400" /> NMC-Compliant Guidance</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-400" /> Total Admission Support</div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 text-lg">
                    Check Eligibility <ArrowRight size={18} />
                  </a>
                  <a href="#counselling" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-white/20">
                    Free Counselling
                  </a>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden" id="apply">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 border border-cyan-100">
                    <Search size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Evaluate My Profile</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Secured process by WCIEC Delhi</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Get Free Guidance" compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CORE CONTENT: FULL-WIDTH BALANCED ── */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 space-y-20">
            
            {/* 1. Introduction */}
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight">Understanding NEET for MBBS Abroad</h2>
                  <div className="w-20 h-1 bg-cyan-500 rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    <strong>NEET (National Eligibility cum Entrance Test)</strong> is the most critical eligibility requirement for Indian students planning to pursue <strong>MBBS abroad</strong> and later practice medicine in India.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    As per strict NMC guidelines, NEET qualification is mandatory for students who want to ensure their foreign medical degree is valid for licensing in India. If you are planning MBBS abroad after NEET, remember: <strong>your exact score does not decide your admission abroad—but your qualification is absolutely essential</strong> for future medical registration in India.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-3xl p-8 shadow-sm relative overflow-hidden h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <Stethoscope size={32} className="text-cyan-600 shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-poppins text-navy mb-2">How NEET Connects to MBBS Abroad</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      NEET is not just an entrance exam—it is a legal eligibility requirement. Only NEET-qualified students are eligible for:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" /> FMGE / NExT exam</li>
                      <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Medical registration in India</li>
                      <li className="flex gap-2"><CheckCircle size={16} className="text-cyan-500 shrink-0 mt-0.5" /> Full recognition of foreign degree</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Quick Facts Table */}
            <div className="space-y-8 scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Quick Facts About MBBS Abroad After NEET</h2>
                <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mb-6" />
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg max-w-4xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[600px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-6 py-5 w-1/3">Factor</th>
                        <th className="px-6 py-5">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy">Exam</td>
                        <td className="px-6 py-5 font-bold text-cyan-600">NEET-UG</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy">Requirement</td>
                        <td className="px-6 py-5">Mandatory for Indian students</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy">Purpose</td>
                        <td className="px-6 py-5">Indian medical licensing eligibility (NExT)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy">Documents Required</td>
                        <td className="px-6 py-5">NEET scorecard, 10th & 12th marksheets, passport, photos</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy">Next Step</td>
                        <td className="px-6 py-5">Country & university selection immediately after NEET result</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. Alert/Highlight Box for Low Scores */}
            <div className="bg-red-50 border border-red-200 p-8 md:p-10 rounded-3xl text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -left-10 text-red-100 rotate-12">
                <AlertTriangle size={150} />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-red-800 tracking-tight mb-4 flex items-center justify-center gap-3">
                  <AlertTriangle className="text-red-500" size={32} /> MBBS Abroad After a Low NEET Score
                </h2>
                <div className="w-20 h-1 bg-red-400 rounded-full mx-auto mb-6" />
                <p className="text-red-900 leading-relaxed text-lg mb-4">
                  Many students believe a low NEET score ends their medical career—but that is <strong>absolutely not true</strong>. Even with a low NEET score, you can pursue MBBS abroad flawlessly as long as you have the minimum qualifying percentile.
                </p>
                <div className="bg-white/60 p-4 rounded-xl text-red-800 inline-block font-medium">
                  <strong>Highly Suitable for:</strong> NEET low scorers | NEET repeaters | Students who missed government MBBS seats in India.
                </div>
              </div>
            </div>

            {/* 4. What to Do After NEET (Step-by-step) */}
            <div className="space-y-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">What to Do After NEET Results?</h2>
                <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed">
                  Once you qualify NEET, your focus should shift immediately from exam preparation to smart admission planning. Follow this step-by-step process:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm relative pt-12 mt-6">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-cyan-500 text-white font-black text-2xl flex items-center justify-center shadow-lg">1</div>
                  <h4 className="font-bold text-navy text-xl mb-3 flex items-center gap-2"><LineChart className="text-cyan-500" size={20} /> Analyze Your Score</h4>
                  <p className="text-sm text-gray-600">A high score provides more options globally, but a low score still keeps you fully eligible for MBBS abroad.</p>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm relative pt-12 mt-6">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-cyan-500 text-white font-black text-2xl flex items-center justify-center shadow-lg">2</div>
                  <h4 className="font-bold text-navy text-xl mb-3 flex items-center gap-2"><Wallet className="text-cyan-500" size={20} /> Set Your Budget</h4>
                  <p className="text-sm text-gray-600">Calculate the total 5–6 year MBBS budget including tuition, hostel, and living costs.</p>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm relative pt-12 mt-6">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-cyan-500 text-white font-black text-2xl flex items-center justify-center shadow-lg">3</div>
                  <h4 className="font-bold text-navy text-xl mb-3 flex items-center gap-2"><MapPin className="text-cyan-500" size={20} /> Choose Country Wisely</h4>
                  <p className="text-sm text-gray-600">Select between popular destinations like <Link href="/mbbs-in-russia/" className="text-cyan-600 underline">Russia</Link>, <Link href="/mbbs-in-uzbekistan/" className="text-cyan-600 underline">Uzbekistan</Link>, <Link href="/mbbs-in-kazakhstan/" className="text-cyan-600 underline">Kazakhstan</Link>, <Link href="/mbbs-in-georgia/" className="text-cyan-600 underline">Georgia</Link>, or <Link href="/mbbs-in-kyrgyzstan/" className="text-cyan-600 underline">Kyrgyzstan</Link>.</p>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm relative pt-12 mt-6">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-cyan-500 text-white font-black text-2xl flex items-center justify-center shadow-lg">4</div>
                  <h4 className="font-bold text-navy text-xl mb-3 flex items-center gap-2"><ShieldCheck className="text-cyan-500" size={20} /> Check Recognition</h4>
                  <p className="text-sm text-gray-600">Ensure the university is strictly NMC approved, WHO listed, and offers 100% English-medium instruction.</p>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm relative pt-12 mt-6">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-cyan-500 text-white font-black text-2xl flex items-center justify-center shadow-lg">5</div>
                  <h4 className="font-bold text-navy text-xl mb-3 flex items-center gap-2"><FileText className="text-cyan-500" size={20} /> Admission & Docs</h4>
                  <p className="text-sm text-gray-600">Apply instantly with your NEET scorecard, passport, and academic documents to begin visa processing.</p>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm relative pt-12 mt-6">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-2xl bg-cyan-500 text-white font-black text-2xl flex items-center justify-center shadow-lg">6</div>
                  <h4 className="font-bold text-navy text-xl mb-3 flex items-center gap-2"><Plane className="text-cyan-500" size={20} /> Final Support</h4>
                  <p className="text-sm text-gray-600">Coordinate travel arrangements, secure hostel allocation, and prepare for on-arrival orientations.</p>
                </div>
              </div>
            </div>

            {/* 5. Need Personalized Guidance Contact Block */}
            <div className="bg-navy p-10 md:p-14 rounded-3xl relative overflow-hidden text-white flex flex-col md:flex-row items-center gap-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="md:w-1/2 relative z-10 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins leading-tight">Need Personalized Guidance After NEET?</h2>
                <div className="w-20 h-1 bg-cyan-500 rounded-full" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  Every student has a different NEET score, budget, and career goal. Choosing the right country and university is crucial for a successful medical career.
                </p>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                  <p className="text-sm text-cyan-100 font-bold mb-2">Share your details with us:</p>
                  <ul className="text-sm text-gray-300 grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> NEET Score</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> PCB Marks</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Budget</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-400" /> Preferred Country</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 relative z-10 w-full">
                <div className="bg-white text-navy p-8 rounded-3xl shadow-2xl">
                  <h3 className="text-xl font-bold mb-4">Start Your MBBS Journey</h3>
                  <a href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20have%20my%20NEET%20score%20and%20want%20guidance%20for%20MBBS%20Abroad." target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 mb-4 text-lg">
                    WhatsApp Now for Guidance
                  </a>
                  <p className="text-xs text-center text-gray-500">WCIEC Delhi will help you shortlist the best NMC-compliant universities abroad for your unique profile.</p>
                </div>
              </div>
            </div>

            {/* 6. Keyword Topic Links */}
            <div className="border-t border-gray-100 pt-12">
              <h3 className="text-xl font-bold font-poppins text-navy mb-6 text-center">Important Topics & Related Guides</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-cyan-50 hover:border-cyan-200 transition-colors cursor-default">MBBS admission through NEET</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-cyan-50 hover:border-cyan-200 transition-colors cursor-default">NEET MBBS abroad process</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-cyan-50 hover:border-cyan-200 transition-colors cursor-default">MBBS abroad after NEET</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-cyan-50 hover:border-cyan-200 transition-colors cursor-default">NMC rules for MBBS abroad</span>
                <Link href="/mbbs-abroad/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-cyan-50 hover:border-cyan-200 transition-colors">MBBS Abroad Programs</Link>
                <Link href="/mbbs-fees-abroad/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-cyan-50 hover:border-cyan-200 transition-colors">MBBS Abroad Fees</Link>
                <Link href="/admission/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-cyan-50 hover:border-cyan-200 transition-colors">Complete Admission Process</Link>
              </div>
            </div>

            {/* 7. FAQ SECTION */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-cyan-500 rounded-full mx-auto" />
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 transition-all hover:border-cyan-200 hover:shadow-md">
                    <h4 className="font-bold text-navy mb-3 flex items-start gap-4 text-xl">
                      <HelpCircle size={26} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-gray-600 leading-relaxed pl-10 text-lg">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
