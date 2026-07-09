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
  Globe,
  Scale
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS in China 2026 for Indian Students | Fees & Admission",
  description: "Study MBBS in China. Compare China vs Russia & Georgia. Verify NMC compliance, check NEET requirements, MBBS in China fees, and university admission.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-in-china/",
  },
  openGraph: {
    title: "MBBS in China 2026 for Indian Students | Fees & Admission",
    description: "Study MBBS in China. Compare China vs Russia & Georgia. Verify NMC compliance, check NEET requirements, MBBS in China fees, and university admission.",
    url: "https://www.wciecdelhi.com/mbbs-in-china/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is NEET required for MBBS in China?",
    answer: "Yes, NEET qualification is strictly mandatory for Indian students to apply for any foreign medical university if they intend to practice in India."
  },
  {
    question: "Is MBBS in China taught in English?",
    answer: "Yes, many universities offer English-medium programs, but it is critical to verify this before admission as some colleges strictly teach in bilingual or Chinese medium."
  },
  {
    question: "Is MBBS in China valid in India?",
    answer: "Yes, provided the specific university meets the latest NMC FMGL Regulations 2021 regarding course duration, English medium instruction, and internship rules."
  },
  {
    question: "Which are the best MBBS universities in China for Indians?",
    answer: "The 'best' university depends entirely on its NMC compliance status, English program availability, and your budget. Our counsellors maintain a strictly verified shortlist for each intake."
  },
  {
    question: "China vs Russia MBBS: which is better?",
    answer: "Russia is generally considered a more stable, predictable route for Indian students with massive global recognition. China offers highly advanced infrastructure but requires much stricter verification regarding NMC eligibility and language."
  }
];

export default function MBBSInChinaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-in-china/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-in-china/",
        "name": "MBBS in China 2026 for Indian Students",
        "description": "Study MBBS in China. Compare China vs Russia & Georgia. Verify NMC compliance, check NEET requirements, and MBBS in China fees.",
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
        "description": "Medical consultancy providing safe, verified guidance for MBBS admission in China.",
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
        "@id": "https://www.wciecdelhi.com/mbbs-in-china/#faq",
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
              <span className="text-white">China</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-blue-400 animate-pulse" /> 2026 Admissions Open
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in China 2026 for <span className="text-blue-400">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-xl">
                  China remains one of the largest MBBS abroad destinations due to modern universities and advanced infrastructure—but careful verification of NMC compliance and current intake status is essential.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-blue-700 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-700/20 flex items-center gap-2 text-lg">
                    Free Profile Evaluation <ArrowRight size={18} />
                  </a>
                  <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20need%20details%20and%20verification%20for%20MBBS%20in%20China." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-[#25D366]/20">
                    WhatsApp Counsellor
                  </Link>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden" id="apply">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 border border-blue-100">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Verify Eligibility</h3>
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
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Quick Facts: MBBS in China</h2>
                <div className="w-20 h-1 bg-blue-700 rounded-full mx-auto mb-6" />
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
                        <td className="px-6 py-5">5 years + internship (varies by university)</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><Globe size={16} className="text-blue-500" /> Medium</td>
                        <td className="px-6 py-5 font-bold text-red-600">English-medium available (Strict Verification Required)</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><CheckCircle size={16} className="text-blue-500" /> Eligibility</td>
                        <td className="px-6 py-5">NEET qualified + strictly high PCB background + valid passport</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><Stethoscope size={16} className="text-blue-500" /> Best Fit</td>
                        <td className="px-6 py-5">Students seeking massive universities and international exposure</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><Building2 size={16} className="text-blue-500" /> Key Advantage</td>
                        <td className="px-6 py-5">Advanced infrastructure + global student environment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. Why China is a Popular MBBS Destination */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Why Study MBBS in China?</h2>
                <div className="w-20 h-1 bg-blue-700 rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  Choosing to <strong>study MBBS in China</strong> places students in one of the largest and most technologically advanced medical education systems globally.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-700 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Modern Infrastructure</strong>
                      <p className="text-gray-600 text-sm mt-1">Access to massive, tech-driven teaching hospitals and robotic simulation labs.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-700 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">International Communities</strong>
                      <p className="text-gray-600 text-sm mt-1">Host to massive international student communities from across the globe.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-blue-700 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Clinical Exposure</strong>
                      <p className="text-gray-600 text-sm mt-1">High patient flow provides strong global exposure in clinical environments.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-3xl p-10 border border-blue-100 shadow-sm text-center flex flex-col justify-center h-full">
                <AlertTriangle size={48} className="text-blue-700 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-navy mb-4">A Note of Caution</h3>
                <p className="text-gray-600 mb-6 font-medium">
                  Admission rules and approved university lists in China change frequently. Never assume an English-medium program is available without strict verification.
                </p>
                <a href="#apply" className="text-blue-700 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  Get Safe Guidance <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 4. Important Verification Warning (High Trust Section) */}
            <div className="bg-navy p-10 md:p-14 rounded-3xl relative overflow-hidden text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold font-poppins mb-4 flex items-center justify-center gap-3"><AlertTriangle className="text-red-400" /> Important Verification Warning</h2>
                  <div className="w-20 h-1 bg-red-500 rounded-full mx-auto" />
                  <p className="text-blue-200 mt-6 max-w-3xl mx-auto text-lg">
                    China is a high-risk, high-reward destination. Students <strong>must strictly verify</strong> the following parameters before taking admission to avoid massive career setbacks:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4 mb-4"><ShieldCheck className="text-blue-400" /> Mandatory Checklist</h3>
                    <ul className="space-y-4 text-gray-300 text-sm">
                      <li className="flex gap-3"><ChevronRight className="text-blue-400 shrink-0 mt-0.5" /> Confirm the <strong>current intake status</strong> (some universities pause international admissions).</li>
                      <li className="flex gap-3"><ChevronRight className="text-blue-400 shrink-0 mt-0.5" /> Guarantee <strong>English-medium availability</strong> (Many teach in Chinese).</li>
                      <li className="flex gap-3"><ChevronRight className="text-blue-400 shrink-0 mt-0.5" /> Verify full <strong>NMC eligibility status</strong> for Indian students under 2021 rules.</li>
                      <li className="flex gap-3"><ChevronRight className="text-blue-400 shrink-0 mt-0.5" /> Check course structure compliance for FMGE/NExT eligibility.</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 text-red-900 border border-red-200 p-8 rounded-2xl flex flex-col justify-center">
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-4"><AlertTriangle className="text-red-600" /> WCIEC Advisory</h3>
                    <p className="text-sm leading-relaxed font-medium">
                      Do not rely on assumptions or outdated internet articles. Confirm the university's exact status with official sources or WCIEC counseling before making any financial commitments.
                    </p>
                    <a href="#apply" className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white text-center font-bold px-6 py-3 rounded-full transition-all shadow-md">
                      Verify University Status
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Admission Process & Checklist Section */}
            <div className="border border-blue-100 bg-blue-50/50 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">Step-by-Step Admission Process</h2>
              <div className="w-20 h-1 bg-blue-700 rounded-full mx-auto mb-8" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-left text-sm text-gray-700">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><Search className="text-blue-600" size={20}/> 1. Profile evaluation</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><ShieldCheck className="text-blue-600" size={20}/> 2. Safe University selection</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><FileText className="text-blue-600" size={20}/> 3. Application submission</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><MapPin className="text-blue-600" size={20}/> 4. Offer letter validation</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><CheckCircle2 className="text-blue-600" size={20}/> 5. Visa documentation</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3"><Plane className="text-blue-600" size={20}/> 6. Travel & onboarding</div>
              </div>

              <div className="bg-white border border-blue-200 rounded-2xl p-6 text-left max-w-2xl mx-auto">
                  <h4 className="font-bold text-navy mb-4 border-b border-gray-100 pb-2">Document Checklist:</h4>
                  <ul className="text-sm text-gray-600 grid grid-cols-2 gap-2">
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600"/> NEET scorecard</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600"/> 10th & 12th marks</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600"/> Valid Passport</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600"/> Medical documents</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600"/> Financial/budget proof</li>
                  </ul>
              </div>
            </div>

            {/* 8. Admission Strategy Section (Conversion Focus) */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-700 text-white border border-blue-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-6"><ShieldCheck className="text-blue-300" /> WCIEC Admission Strategy</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">We focus on eliminating the immense risks associated with China admissions. Our role includes:</p>
                <ul className="space-y-4 text-white font-medium">
                  <li className="flex gap-3"><ChevronRight className="text-blue-300 shrink-0 mt-0.5" /> Strict university verification support.</li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-300 shrink-0 mt-0.5" /> Intake and eligibility checking.</li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-300 shrink-0 mt-0.5" /> Complete NMC compliance guidance.</li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-300 shrink-0 mt-0.5" /> Avoiding non-compliant universities entirely.</li>
                </ul>
                <a href="#apply" className="mt-8 inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold px-6 py-3 rounded-full transition-all shadow-md">
                  Get a Free Profile Evaluation
                </a>
              </div>

              {/* 6. Fees & Living Cost Section */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-navy flex items-center gap-3 mb-6 border-b border-gray-100 pb-4"><Wallet className="text-blue-700" /> Fees & Living Cost</h3>
                <p className="text-gray-600 text-sm mb-4">Understanding the <strong>MBBS in China fees</strong> structure:</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Tuition Fluctuations:</strong> Fees vary widely by university.</li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Living Expenses:</strong> Hostel, food, and transport costs depend on the province.</li>
                  <li className="flex gap-3"><ChevronRight className="text-blue-500 shrink-0 mt-0.5" /> <strong>Additional Costs:</strong> Mandatory insurance, travel, and visa cost estimation.</li>
                </ul>
                <div className="mt-6 bg-yellow-50 text-yellow-800 text-sm p-4 rounded-xl border border-yellow-200 font-medium">
                  👉 The final cost depends entirely on the university selection and current intake year.
                </div>
              </div>
            </div>

            {/* 7. China vs Other Countries (High SEO Value Section) */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">China vs Other MBBS Destinations</h2>
                <div className="w-20 h-1 bg-blue-700 rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed mb-8">
                  Evaluating <strong>MBBS in China vs Russia</strong>, Georgia, or Bangladesh requires looking at risk vs. reward. China is a high-infrastructure, global exposure destination requiring careful selection.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg max-w-5xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600 min-w-[700px]">
                    <thead className="bg-navy text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-6 py-5 w-1/4">Comparison</th>
                        <th className="px-6 py-5">Key Differences & Strengths</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white text-base">
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><strong>China vs Russia</strong></td>
                        <td className="px-6 py-5"><Link href="/mbbs-in-russia/" className="text-blue-600 underline">Russia</Link> is a highly stable, predictable route with massive federal universities. China is more tech-driven but carries higher admission unpredictability.</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><strong>China vs Georgia</strong></td>
                        <td className="px-6 py-5"><Link href="/mbbs-in-georgia/" className="text-blue-600 underline">Georgia</Link> provides much more consistent 100% English programs, whereas China requires strict language verification.</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><strong>China vs Kyrgyzstan</strong></td>
                        <td className="px-6 py-5"><Link href="/mbbs-in-kyrgyzstan/" className="text-blue-600 underline">Kyrgyzstan</Link> is significantly cheaper, while China boasts vastly superior modern infrastructure and hospitals.</td>
                      </tr>
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><strong>China vs Bangladesh</strong></td>
                        <td className="px-6 py-5"><Link href="/mbbs-in-bangladesh/" className="text-blue-600 underline">Bangladesh</Link> is much closer to India with identical clinical exposure, whereas China offers massive global exposure.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 10. Keyword Optimization & Internal Linking */}
            <div className="border-t border-gray-100 pt-12">
              <h3 className="text-xl font-bold font-poppins text-navy mb-6 text-center">Important Topics & Related Guides</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">MBBS in China for Indian students</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">MBBS China fees</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">NEET for MBBS in China</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">China MBBS universities</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-default">MBBS in China vs Russia</span>
                <Link href="/mbbs-abroad/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">MBBS Abroad Overview</Link>
                <Link href="/mbbs-in-russia/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">MBBS in Russia</Link>
                <Link href="/mbbs-in-georgia/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">MBBS in Georgia</Link>
                <Link href="/mbbs-in-kyrgyzstan/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">MBBS in Kyrgyzstan</Link>
                <Link href="/mbbs-in-bangladesh/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-blue-50 hover:border-blue-200 transition-colors">MBBS in Bangladesh</Link>
              </div>
            </div>

            {/* 9. FAQ SECTION */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-blue-700 rounded-full mx-auto" />
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

        {/* 12. Final CTA Section (High Conversion Block) */}
        <section className="bg-navy py-16 md:py-24 text-white text-center relative overflow-hidden" id="counselling">
          <div className="absolute inset-0 bg-[url(/pattern.png)] opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Need Help Choosing MBBS in China or Other Countries?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Share your NEET score, PCB marks, budget, and preferred country. WCIEC Delhi will provide a personalized MBBS abroad comparison and shortlist safe, NMC-compliant universities for your profile.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-blue-700 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Start Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20verify%20details%20for%20MBBS%20in%20China." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                <PhoneCall size={20} /> WhatsApp Now
              </Link>
            </div>
            <div className="pt-8 flex justify-center gap-4 text-sm text-gray-400 flex-wrap">
                <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
                <span>|</span>
                <Link href="/mbbs-in-russia/" className="hover:text-white transition-colors">Russia</Link>
                <span>|</span>
                <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-white transition-colors">Kyrgyzstan</Link>
                <span>|</span>
                <Link href="/mbbs-fees-abroad/" className="hover:text-white transition-colors">Fees Guide</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
