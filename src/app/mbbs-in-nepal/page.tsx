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
  Search,
  CheckCircle,
  Wallet,
  Building2,
  Globe,
  Scale,
  LineChart
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS in Nepal 2026 for Indian Students | Fees & Admission",
  description: "Planning MBBS abroad in Nepal? Discover NEET requirements, fees, admission strategy, and compare Nepal vs Kyrgyzstan & Bangladesh for Indian students.",
  alternates: {
    canonical: "https://wciecdelhi.com/mbbs-in-nepal/",
  },
  openGraph: {
    title: "MBBS in Nepal 2026 for Indian Students | Fees & Admission",
    description: "Planning MBBS abroad in Nepal? Discover NEET requirements, fees, admission strategy, and compare Nepal vs Kyrgyzstan & Bangladesh for Indian students.",
    url: "https://wciecdelhi.com/mbbs-in-nepal/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is NEET required for MBBS in Nepal?",
    answer: "Yes. NEET qualification is legally required for Indian students planning to practice medicine in India after graduating from Nepal."
  },
  {
    question: "Is MBBS in Nepal good for Indian students?",
    answer: "Yes. Nepal offers extremely close geographical proximity, a perfectly matched clinical disease pattern, and no cultural barriers, making adaptation effortless."
  },
  {
    question: "Is Nepal more expensive than Kyrgyzstan?",
    answer: "Yes, MBBS in Nepal is generally significantly more expensive than Kyrgyzstan. While Kyrgyzstan is a low-budget option, Nepal is a premium choice focused on geographical convenience."
  },
  {
    question: "What is the total cost of MBBS in Nepal?",
    answer: "The total cost varies heavily by specific medical college, ranging anywhere from INR 40 Lakhs to 60+ Lakhs. Always verify the updated fee structure with our counsellors before applying."
  },
  {
    question: "Is Nepal better than Bangladesh for MBBS?",
    answer: "Both are excellent choices for Indian students. Nepal offers easier overland travel and high cultural familiarity, while Bangladesh offers a highly structured education system. The 'better' choice depends on your specific budget and academic marks."
  }
];

export default function MBBSInNepalPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://wciecdelhi.com/mbbs-in-nepal/#webpage",
        "url": "https://wciecdelhi.com/mbbs-in-nepal/",
        "name": "MBBS in Nepal 2026 for Indian Students",
        "description": "Planning MBBS abroad in Nepal? Discover NEET requirements, fees, and compare Nepal vs Kyrgyzstan.",
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
        "description": "Medical consultancy assisting Indian students with MBBS admission in Nepal.",
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
        "@id": "https://wciecdelhi.com/mbbs-in-nepal/#faq",
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
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/80 to-transparent z-10" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="max-w-7xl mx-auto px-4 relative z-20 w-full">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-sky-300 mb-6 font-semibold uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
              <ChevronRight size={12} />
              <span className="text-white">Nepal</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-400 border border-sky-500/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-sky-400 animate-pulse" /> Admissions Open 2026
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in Nepal 2026 for <span className="text-sky-400">Indian Students</span>
                </h1>
                <p className="text-base md:text-lg text-sky-100 leading-relaxed max-w-xl">
                  Nepal is one of the most preferred MBBS destinations for Indian students due to its geographical proximity, cultural similarity, and familiar clinical exposure, making it easier to adapt compared to other countries.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#apply" className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-sky-600/20 flex items-center gap-2 text-lg">
                    Free Profile Evaluation <ArrowRight size={18} />
                  </a>
                  <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20need%20details%20for%20MBBS%20in%20Nepal." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2 text-lg backdrop-blur-md border border-[#25D366]/20">
                    WhatsApp Counsellor
                  </Link>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden" id="apply">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 border border-sky-100">
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
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Quick Facts: MBBS in Nepal</h2>
                <div className="w-20 h-1 bg-sky-600 rounded-full mx-auto mb-6" />
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
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><BookOpen size={16} className="text-sky-500" /> Duration</td>
                        <td className="px-6 py-5">5.5 years (including internship, varies by college)</td>
                      </tr>
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><Globe size={16} className="text-sky-500" /> Medium</td>
                        <td className="px-6 py-5 font-bold text-sky-600">English-medium instruction</td>
                      </tr>
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><CheckCircle size={16} className="text-sky-500" /> Eligibility</td>
                        <td className="px-6 py-5">NEET + university/college-specific requirements</td>
                      </tr>
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><Stethoscope size={16} className="text-sky-500" /> Best Fit</td>
                        <td className="px-6 py-5">Students preferring a highly India-like environment</td>
                      </tr>
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy flex items-center gap-2"><MapPin size={16} className="text-sky-500" /> Key Advantage</td>
                        <td className="px-6 py-5">Proximity + cultural familiarity + similar disease patterns</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. Why Nepal is a Popular MBBS Destination */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Why Nepal is a Popular MBBS Destination</h2>
                <div className="w-20 h-1 bg-sky-600 rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  Deciding to pursue <strong>MBBS abroad in Nepal</strong> is heavily driven by comfort and familiarity for Indian students. The experience is nearly indistinguishable from studying in Northern India.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-sky-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Close Geographical Proximity</strong>
                      <p className="text-gray-600 text-sm mt-1">Shares borders with India, allowing for extremely easy and inexpensive overland or short flight travel for students and parents.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-sky-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">No Cultural or Food Barriers</strong>
                      <p className="text-gray-600 text-sm mt-1">Indian students face zero culture shock. The food, language comfort, and daily lifestyle are almost identical to India.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-sky-600 shrink-0 mt-1" size={22} />
                    <div>
                      <strong className="text-navy text-lg">Similar Disease Exposure</strong>
                      <p className="text-gray-600 text-sm mt-1">The clinical exposure exactly mirrors the Indian medical system, providing an immense advantage for students returning to practice in India.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-sky-50 rounded-3xl p-10 border border-sky-100 shadow-sm text-center flex flex-col justify-center h-full">
                <ShieldCheck size={48} className="text-sky-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-navy mb-4">High Demand, Limited Seats</h3>
                <p className="text-gray-600 mb-6">
                  Due to the intense comfort, safety, and familiarity, Nepal experiences extremely high demand from Indian students, making strategic admission planning absolutely essential.
                </p>
                <a href="#apply" className="text-sky-600 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  Get Evaluated Today <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 4. Admission & Eligibility Process */}
            <div className="bg-navy p-10 md:p-14 rounded-3xl relative overflow-hidden text-white shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-5xl mx-auto space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold font-poppins mb-4">Admission & Eligibility Process</h2>
                  <div className="w-20 h-1 bg-sky-500 rounded-full mx-auto" />
                  <p className="text-sky-200 mt-6 max-w-2xl mx-auto">
                    The <strong>MBBS in Nepal eligibility</strong> criteria is stringent. Admission is heavily college-specific and not uniformly structured across the country.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4 mb-4"><AlertTriangle className="text-sky-400" /> Key Rules</h3>
                    <ul className="space-y-4 text-gray-300 text-sm">
                      <li className="flex gap-3"><ChevronRight className="text-sky-400 shrink-0 mt-0.5" /> <strong>NEET qualification</strong> is mandatory for Indian students to apply.</li>
                      <li className="flex gap-3"><ChevronRight className="text-sky-400 shrink-0 mt-0.5" /> Academic 12th marks play a significant role in selection for top colleges.</li>
                      <li className="flex gap-3"><ChevronRight className="text-sky-400 shrink-0 mt-0.5" /> Some universities may impose additional entrance or screening requirements for international applicants.</li>
                    </ul>
                  </div>

                  <div className="space-y-4 bg-white border border-sky-100 p-8 rounded-2xl text-navy">
                    <h3 className="text-xl font-bold flex items-center gap-2 border-b border-gray-100 pb-4 mb-4"><FileText className="text-sky-600" /> Required Checklist</h3>
                    <ul className="space-y-3 text-gray-600 text-sm font-medium">
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-sky-500" size={18}/> NEET scorecard</li>
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-sky-500" size={18}/> 10th & 12th original marksheets</li>
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-sky-500" size={18}/> Valid Passport</li>
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-sky-500" size={18}/> Accurate budget planning</li>
                      <li className="flex gap-3 items-center"><CheckCircle2 className="text-sky-500" size={18}/> Defined college preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Admission Strategy Section (Lead Capture) */}
            <div className="border border-sky-100 bg-sky-50/50 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight mb-4">WCIEC Admission Strategy</h2>
              <div className="w-20 h-1 bg-sky-600 rounded-full mx-auto mb-8" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left text-sm text-gray-700">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><Search className="text-sky-500" size={18}/> Mandatory Evaluation</h4>
                  <p>A strict profile evaluation is mandatory before attempting college selection in Nepal.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><AlertTriangle className="text-sky-500" size={18}/> Beware Direct Claims</h4>
                  <p>Direct admission claims by unverified agents should be strictly avoided in Nepal.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><LineChart className="text-sky-500" size={18}/> Shifting Availability</h4>
                  <p>Seat availability and college regulations vary dramatically every single year.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-navy mb-2 flex items-center gap-2"><ShieldCheck className="text-sky-500" size={18}/> Safe Selection</h4>
                  <p>Proper, experienced counseling is required to ensure a secure, verified seat.</p>
                </div>
              </div>

              <a href="#apply" className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg">
                Get a Free Profile Evaluation
              </a>
            </div>

            {/* 6. Decision Factors & 8. Fees Overview */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-navy flex items-center gap-3 mb-6 border-b border-gray-100 pb-4"><Scale className="text-sky-600" /> Key Decision Factors</h3>
                <p className="text-gray-600 text-sm mb-4">When choosing Nepal, Indian students should carefully evaluate:</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3"><ChevronRight className="text-sky-500 shrink-0 mt-0.5" /> Tuition fees compared to alternative options like Bangladesh or Kyrgyzstan.</li>
                  <li className="flex gap-3"><ChevronRight className="text-sky-500 shrink-0 mt-0.5" /> Quality of hostel and food facilities.</li>
                  <li className="flex gap-3"><ChevronRight className="text-sky-500 shrink-0 mt-0.5" /> High frequency and low cost of travel back home.</li>
                  <li className="flex gap-3"><ChevronRight className="text-sky-500 shrink-0 mt-0.5" /> Extreme language comfort and high teaching quality.</li>
                  <li className="flex gap-3"><ChevronRight className="text-sky-500 shrink-0 mt-0.5" /> Dedicated FMGE/NExT preparation support provided by the college.</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-navy flex items-center gap-3 mb-6 border-b border-gray-100 pb-4"><Wallet className="text-sky-600" /> Fees & Living Cost</h3>
                <p className="text-gray-600 text-sm mb-4">Understanding the <strong>MBBS Nepal fees</strong> structure:</p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex gap-3"><ChevronRight className="text-sky-500 shrink-0 mt-0.5" /> <strong>Tuition Fluctuations:</strong> Fees vary immensely between specific medical colleges in Nepal.</li>
                  <li className="flex gap-3"><ChevronRight className="text-sky-500 shrink-0 mt-0.5" /> <strong>Living Expenses:</strong> Hostel and food costs depend entirely on the city and the specific college's standard.</li>
                  <li className="flex gap-3"><ChevronRight className="text-sky-500 shrink-0 mt-0.5" /> <strong>Total Variance:</strong> The total cost differs significantly across institutions.</li>
                </ul>
                <div className="mt-6 bg-red-50 text-red-800 text-sm p-4 rounded-xl border border-red-200 font-medium">
                  👉 Always verify the completely updated fee structure with WCIEC before proceeding with any admission.
                </div>
              </div>
            </div>

            {/* 7. Nepal vs Other Countries (High SEO Value Section) */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Nepal vs Other MBBS Destinations</h2>
                <div className="w-20 h-1 bg-sky-600 rounded-full mx-auto mb-6" />
                <p className="text-gray-600 leading-relaxed mb-8">
                  Comparing <strong>MBBS in Nepal vs Kyrgyzstan</strong> and Bangladesh helps you define your exact priorities. Nepal is the <strong>best for students prioritizing extreme comfort and proximity over the lowest cost.</strong>
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
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-sky-600 text-lg">Nepal</td>
                        <td className="px-6 py-5"><strong>Closest to India</strong> and highly culturally similar. Easy overland travel and high parent comfort level.</td>
                      </tr>
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-bangladesh/" className="hover:text-sky-600 transition-colors">Bangladesh</Link></td>
                        <td className="px-6 py-5">Highly structured academic system with moderate costs; similar clinical exposure to Nepal.</td>
                      </tr>
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-kyrgyzstan/" className="hover:text-sky-600 transition-colors">Kyrgyzstan</Link></td>
                        <td className="px-6 py-5">Much <strong>cheaper MBBS option</strong> with a massive Indian student population.</td>
                      </tr>
                      <tr className="hover:bg-sky-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-navy"><Link href="/mbbs-in-kazakhstan/" className="hover:text-sky-600 transition-colors">Kazakhstan</Link></td>
                        <td className="px-6 py-5">Modern European-style infrastructure, but completely different culture and cold climate.</td>
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
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors cursor-default">MBBS in Nepal for Indian students</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors cursor-default">MBBS abroad Nepal</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors cursor-default">MBBS Nepal fees</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors cursor-default">NEET required for MBBS Nepal</span>
                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors cursor-default">MBBS Nepal admission 2026</span>
                <Link href="/mbbs-abroad/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors">MBBS Abroad Overview</Link>
                <Link href="/mbbs-in-kyrgyzstan/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors">MBBS in Kyrgyzstan</Link>
                <Link href="/mbbs-in-bangladesh/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors">MBBS in Bangladesh</Link>
                <Link href="/admission/" className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-600 font-medium hover:bg-sky-50 hover:border-sky-200 transition-colors">Admission Process</Link>
              </div>
            </div>

            {/* 9. FAQ SECTION */}
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy tracking-tight mb-4">Frequently Asked Questions</h2>
                <div className="w-20 h-1 bg-sky-600 rounded-full mx-auto" />
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 transition-all hover:border-sky-200 hover:shadow-md">
                    <h4 className="font-bold text-navy mb-3 flex items-start gap-4 text-xl">
                      <HelpCircle size={26} className="text-sky-500 shrink-0 mt-0.5" />
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
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight">Need Help Choosing Between Nepal and Other Countries?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Share your NEET score, academic marks, budget, and preferred country. WCIEC Delhi will provide a personalized MBBS abroad comparison and shortlist the best universities for your profile.
            </p>
            <div className="flex justify-center gap-4 flex-wrap pt-4">
              <a href="#apply" className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg text-lg hover:scale-105 transform duration-300">
                Start Counselling
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20evaluate%20my%20profile%20for%20MBBS%20in%20Nepal." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg flex items-center gap-2 text-lg hover:scale-105 transform duration-300">
                <PhoneCall size={20} /> WhatsApp Now
              </Link>
            </div>
            <div className="pt-8 flex justify-center gap-4 text-sm text-gray-400 flex-wrap">
                <Link href="/mbbs-abroad/" className="hover:text-white transition-colors">MBBS Abroad</Link>
                <span>|</span>
                <Link href="/mbbs-in-bangladesh/" className="hover:text-white transition-colors">Bangladesh</Link>
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
