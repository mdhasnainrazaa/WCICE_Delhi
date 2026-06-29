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
  Scale,
  CheckCircle
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NMC Guidelines for MBBS Abroad 2026 | FMGL 2021 Rules Explained",
  description: "Complete guide to NMC guidelines for MBBS abroad. Understand the FMGL 2021 rules, the 54-month duration requirement, and NEET eligibility for Indian students.",
  alternates: {
    canonical: "https://wciecdelhi.com/nmc-guidelines-for-mbbs-abroad/",
  },
  openGraph: {
    title: "NMC Guidelines for MBBS Abroad 2026 | FMGL 2021 Rules Explained",
    description: "Complete guide to NMC guidelines for MBBS abroad. Understand the FMGL 2021 rules, the 54-month duration requirement, and NEET eligibility for Indian students.",
    url: "https://wciecdelhi.com/nmc-guidelines-for-mbbs-abroad/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is an NMC approved list enough to choose a university?",
    answer: "No. The NMC no longer maintains a list of 'approved' universities. It is now the sole responsibility of the student to ensure the chosen university complies strictly with the FMGL 2021 guidelines."
  },
  {
    question: "What is the 54-month rule for MBBS abroad?",
    answer: "The FMGL 2021 regulations mandate that the foreign MBBS course must have a minimum duration of 54 months (4.5 years) of theoretical and practical study, followed by a mandatory 12-month internship in the same country."
  },
  {
    question: "Is NEET mandatory for MBBS abroad?",
    answer: "Yes, qualifying the NEET-UG examination is legally mandatory for all Indian students who wish to pursue MBBS abroad and later practice medicine in India."
  },
  {
    question: "Where can students verify MBBS abroad rules?",
    answer: "Students should always refer to the official National Medical Commission (NMC) website and consult with verified experts like WCIEC Delhi to analyze a university's compliance status."
  },
  {
    question: "What happens if a university is not NMC compliant?",
    answer: "If you graduate from a university that does not meet the FMGL 2021 criteria, your degree will not be recognized in India, and you will be strictly prohibited from appearing for the FMGE/NExT licensing examination."
  }
];

export default function NMCGuidelinesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://wciecdelhi.com/nmc-guidelines-for-mbbs-abroad/#webpage",
        "url": "https://wciecdelhi.com/nmc-guidelines-for-mbbs-abroad/",
        "name": "NMC Guidelines for MBBS Abroad (2026 Compliance Guide)",
        "description": "Complete guide to NMC guidelines for MBBS abroad. Understand FMGL 2021 rules and the 54-month requirement.",
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
        "description": "Authoritative medical consultancy providing strict NMC compliance verification for MBBS abroad.",
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
        "@id": "https://wciecdelhi.com/nmc-guidelines-for-mbbs-abroad/#faq",
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
        <section className="relative pt-32 pb-20 bg-slate-900 text-white min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/50 z-10" />
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
              <span className="text-white">NMC Guidelines</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <ShieldCheck size={14} className="text-blue-400" /> 2026 Compliance Guide
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  NMC Guidelines for <span className="text-blue-400">MBBS Abroad</span>
                </h1>
                <p className="text-base md:text-lg text-blue-100 leading-relaxed max-w-xl">
                  Students must understand NMC regulations before selecting any foreign medical university, as recognition alone does not guarantee eligibility for medical practice in India.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2 text-lg">
                    Check Your Eligibility <ArrowRight size={18} />
                  </a>
                  <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20verify%20NMC%20compliance%20for%20MBBS%20Abroad." target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-slate-600">
                    WhatsApp Counsellor
                  </Link>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden" id="apply">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 border border-blue-100">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Get Verified Guidance</h3>
                    <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider">Secured process by WCIEC Delhi</p>
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
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 tracking-tight mb-4">Quick Overview: NMC Rules for Foreign Medical Graduates</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
              </div>
              
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-700 min-w-[600px]">
                    <thead className="bg-slate-900 text-white text-sm uppercase font-poppins font-bold">
                      <tr>
                        <th className="px-6 py-5 w-1/3">Regulation Parameter</th>
                        <th className="px-6 py-5">Official NMC Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white text-base">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-900 flex items-center gap-2"><Scale size={16} className="text-blue-600" /> Core Regulation</td>
                        <td className="px-6 py-5 font-bold text-blue-700">FMGL Regulations 2021</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-900 flex items-center gap-2"><BookOpen size={16} className="text-blue-600" /> Minimum Duration</td>
                        <td className="px-6 py-5">54 months academic study + 12 months internship</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-900 flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-600" /> Eligibility</td>
                        <td className="px-6 py-5">NEET qualification strictly mandatory for Indian students</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-900 flex items-center gap-2"><ShieldCheck size={16} className="text-blue-600" /> Key Requirement</td>
                        <td className="px-6 py-5">Course structure + clinical training + language compliance</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-slate-900 flex items-center gap-2"><Stethoscope size={16} className="text-blue-600" /> Purpose</td>
                        <td className="px-6 py-5">Ensuring absolute eligibility for FMGE / NExT in India</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. What NMC Guidelines Really Mean & 4. FMGL 2021 Regulations Explained */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-poppins text-slate-900 tracking-tight">What NMC Guidelines Really Mean</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full" />
                <p className="text-slate-700 text-lg leading-relaxed font-medium">
                  NMC guidelines are not just about listing "approved universities"—they define the <em>entire medical education structure</em> that must be followed for Indian students studying abroad.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Students must explicitly verify:</h4>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 shrink-0" size={18}/> Total course duration (minimum 54 months)</li>
                    <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 shrink-0" size={18}/> Extensive clinical training in actual hospital settings</li>
                    <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 shrink-0" size={18}/> Medium of instruction (Must be English)</li>
                    <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 shrink-0" size={18}/> Internship structure completed in the <em>same</em> country</li>
                    <li className="flex gap-3 items-center"><CheckCircle2 className="text-blue-600 shrink-0" size={18}/> Full eligibility for local medical registration</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-slate-200 text-red-700 font-bold flex items-center gap-2">
                    <AlertTriangle size={18} /> Remember: Recognition alone is not enough.
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-poppins text-slate-900 tracking-tight">Understanding FMGL 2021</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full" />
                <p className="text-slate-700 text-lg leading-relaxed">
                  The <strong>Foreign Medical Graduate Licentiate Regulations, 2021</strong> fundamentally changed the landscape of MBBS abroad eligibility rules for India.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex gap-4 items-start">
                    <ShieldCheck className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-slate-900 text-lg">Strict Structural Compliance</strong>
                      <p className="text-slate-600 text-sm mt-1">The rules mandate a highly structured medical education abroad that perfectly aligns with Indian MBBS standards.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ShieldCheck className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-slate-900 text-lg">Conditions for Licensing</strong>
                      <p className="text-slate-600 text-sm mt-1">It lays down the non-negotiable conditions for appearing in the FMGE / NExT licensing exams.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <ShieldCheck className="text-blue-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-slate-900 text-lg">End of "Approved Lists"</strong>
                      <p className="text-slate-600 text-sm mt-1">NMC shifted the burden of proof. It no longer publishes "approved universities abroad." Students must ensure the university complies with FMGL criteria.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. 54-Month Rule (Critical SEO Section) */}
            <div className="bg-slate-900 p-10 md:p-14 rounded-3xl relative overflow-hidden text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold font-poppins mb-4">The Critical 54-Month MBBS Abroad Rule</h2>
                  <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto" />
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <BookOpen size={28} className="text-blue-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Minimum Academic Study</h4>
                    <p className="text-sm text-slate-300">The core theoretical and practical curriculum must span a minimum of 54 months (4.5 years) without interruption.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <Stethoscope size={28} className="text-blue-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Mandatory Internship</h4>
                    <p className="text-sm text-slate-300">A rigorous 12-month clinical internship must be completed entirely in the same foreign country where the degree is awarded.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <AlertTriangle size={28} className="text-red-400 mb-4" />
                    <h4 className="font-bold text-lg mb-2">Short Programs are Invalid</h4>
                    <p className="text-sm text-slate-300">Fast-track or shortened medical programs heavily advertised by some agents are strictly invalid for Indian practice.</p>
                  </div>
                </div>

                <div className="bg-red-500/20 text-red-200 border border-red-500/30 p-6 rounded-xl text-center font-medium max-w-3xl mx-auto">
                  <span className="flex items-center justify-center gap-2 mb-2 font-bold text-red-300"><AlertTriangle size={20}/> Severe Warning</span>
                  Avoid any university or country that does not meet these exact duration standards. If you graduate from a non-compliant course, you will be permanently barred from practicing medicine in India.
                </div>
              </div>
            </div>

            {/* 6. Verification Checklist & 7. Risk Warning */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-blue-100 bg-blue-50/50 p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-6 border-b border-blue-200 pb-4"><Search className="text-blue-600" /> Verification Checklist</h3>
                <p className="text-slate-700 text-sm mb-6 font-medium">WCIEC Delhi ensures every student verifies the following before confirming admission:</p>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex gap-3 items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><CheckCircle className="text-blue-500 shrink-0" /> Course duration strictly ≥ 54 months</li>
                  <li className="flex gap-3 items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><CheckCircle className="text-blue-500 shrink-0" /> English-medium instruction confirmed</li>
                  <li className="flex gap-3 items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><CheckCircle className="text-blue-500 shrink-0" /> Hospital-based clinical training guaranteed</li>
                  <li className="flex gap-3 items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><CheckCircle className="text-blue-500 shrink-0" /> 12-month internship recognition</li>
                  <li className="flex gap-3 items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm"><CheckCircle className="text-blue-500 shrink-0" /> Local medical registration eligibility</li>
                </ul>
                <div className="mt-8 text-center">
                  <a href="#apply" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-all shadow-md">
                    Verify Your University Now
                  </a>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-8 rounded-3xl shadow-sm">
                <h3 className="text-2xl font-bold text-red-900 flex items-center gap-3 mb-6 border-b border-red-200 pb-4"><AlertTriangle className="text-red-600" /> High-Risk Warning</h3>
                <p className="text-red-800 text-sm mb-6 font-bold">Absolutely avoid universities that:</p>
                <ul className="space-y-4 text-red-800 text-sm">
                  <li className="flex gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-0.5" /> Cannot provide written proof of their exact course structure.</li>
                  <li className="flex gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-0.5" /> Do not provide explicit details regarding clinical training hospital affiliations.</li>
                  <li className="flex gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-0.5" /> Offer unclear, blended, or magically shortened medical programs.</li>
                  <li className="flex gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-0.5" /> Lack official documentation proving recognition by their local health ministries.</li>
                  <li className="flex gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-0.5" /> Promise shortcuts to NMC eligibility standards.</li>
                </ul>
              </div>
            </div>

            {/* 8. Why This Page Matters for All WCIEC Pages (Internal SEO Section) */}
            <div className="bg-slate-50 border border-slate-200 p-10 rounded-3xl text-center max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold font-poppins text-slate-900 tracking-tight mb-4">The Foundation of Our Guidance</h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6" />
              <p className="text-slate-600 leading-relaxed mb-6">
                At WCIEC Delhi, compliance comes before admission. Every country guide we provide is strictly evaluated against these FMGL 2021 regulations. Our commitment to standardizing compliance checks eliminates misinformation and protects your career.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/mbbs-in-russia/" className="text-sm font-bold text-blue-600 hover:text-blue-800 underline">Russia Compliance</Link>
                <span className="text-slate-300">|</span>
                <Link href="/mbbs-in-georgia/" className="text-sm font-bold text-blue-600 hover:text-blue-800 underline">Georgia Compliance</Link>
                <span className="text-slate-300">|</span>
                <Link href="/mbbs-in-kyrgyzstan/" className="text-sm font-bold text-blue-600 hover:text-blue-800 underline">Kyrgyzstan Compliance</Link>
                <span className="text-slate-300">|</span>
                <Link href="/mbbs-in-bangladesh/" className="text-sm font-bold text-blue-600 hover:text-blue-800 underline">Bangladesh Compliance</Link>
                <span className="text-slate-300">|</span>
                <Link href="/mbbs-in-china/" className="text-sm font-bold text-blue-600 hover:text-blue-800 underline">China Compliance</Link>
              </div>
            </div>

            {/* 10. Keyword Optimization & Internal Linking */}
            <div className="border-t border-slate-200 pt-12">
              <h3 className="text-xl font-bold font-poppins text-slate-900 mb-6 text-center">Related Search Topics</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium cursor-default shadow-sm">NMC guidelines for MBBS abroad</span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium cursor-default shadow-sm">FMGL 2021 regulations</span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium cursor-default shadow-sm">54 months rule MBBS abroad</span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium cursor-default shadow-sm">NEET mandatory for MBBS abroad</span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium cursor-default shadow-sm">MBBS abroad eligibility rules India</span>
                <Link href="/mbbs-abroad/" className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-xs text-blue-700 font-bold hover:bg-blue-100 transition-colors shadow-sm">MBBS Abroad Overview</Link>
                <Link href="/admission/" className="px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-xs text-blue-700 font-bold hover:bg-blue-100 transition-colors shadow-sm">WCIEC Admission Process</Link>
              </div>
            </div>

            {/* 9. FAQ SECTION */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto" />
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 transition-all hover:border-blue-300 hover:shadow-md">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-start gap-4 text-xl">
                      <HelpCircle size={26} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-slate-600 leading-relaxed pl-10 text-lg">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 12. Final CTA Section (Trust-Based Conversion Block) */}
        <section className="bg-slate-900 py-16 md:py-24 text-white text-center relative overflow-hidden" id="counselling">
          <div className="absolute inset-0 bg-[url(/pattern.png)] opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Need Help Choosing an NMC-Compliant University?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Don't risk your medical career. Share your NEET score, academic marks, budget, and preferred country. WCIEC Delhi will verify NMC compliance and shortlist safe, eligible universities for your medical career in India.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Start Verified Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20verify%20NMC%20compliance%20for%20MBBS%20Abroad%20universities." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                <PhoneCall size={20} /> WhatsApp Now
              </Link>
            </div>
            <div className="pt-8 flex justify-center gap-4 text-sm text-slate-400 flex-wrap">
                <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
                <span>|</span>
                <Link href="/mbbs-in-russia/" className="hover:text-white transition-colors">Russia</Link>
                <span>|</span>
                <Link href="/mbbs-in-uzbekistan/" className="hover:text-white transition-colors">Uzbekistan</Link>
                <span>|</span>
                <Link href="/mbbs-in-kazakhstan/" className="hover:text-white transition-colors">Kazakhstan</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
