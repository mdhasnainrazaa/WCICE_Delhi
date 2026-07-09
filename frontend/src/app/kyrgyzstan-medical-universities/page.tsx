import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  ChevronRight,
  HelpCircle,
  PhoneCall,
  BookOpen
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Medical Universities in Kyrgyzstan 2026 | Fees & Ranking",
  description: "Compare the best NMC & WHO approved medical universities in Kyrgyzstan. Get actual fee structures, course durations, eligibility requirements, and student support.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/kyrgyzstan-medical-universities/",
  },
  openGraph: {
    title: "Top Medical Universities in Kyrgyzstan 2026 | Fees & Ranking",
    description: "Detailed guide on the top government-recognized medical faculties in Kyrgyzstan. Complete fee package comparisons, academic quality, and hostels.",
    url: "https://www.wciecdelhi.com/kyrgyzstan-medical-universities/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const universitiesList = [
  {
    name: "Osh State University (International Medical Faculty)",
    est: "1939",
    type: "State Government University",
    tuition: "USD 4,000 / Year",
    hostel: "USD 800 / Year",
    duration: "5 Years",
    slug: "osh-state-university",
    features: ["Oldest Government Faculty", "15+ Affiliated Hospitals", "NExT Exam Prep Classes", "Pure Indian Messes"]
  },
  {
    name: "Jalal Abad State University",
    est: "1993",
    type: "Government University",
    tuition: "USD 4,200 / Year",
    hostel: "USD 700 / Year",
    duration: "5 Years",
    slug: "jalal-abad-state-university",
    features: ["Historic Government Campus", "Fully English-Medium Syllabus", "Excellent Clinical Laboratories", "Safe On-Campus Hostels"]
  },
  {
    name: "Jalal-Abad International University",
    est: "2019",
    type: "Government Authorized International",
    tuition: "USD 3,500 / Year",
    hostel: "USD 600 / Year",
    duration: "5 Years",
    slug: "jalal-abad-international-university",
    features: ["Modern Infrastructure", "Advanced Medical Simulators", "Direct Admission Support", "Direct WCIEC Hostel Management"]
  },
  {
    name: "Central Asian International Medical University",
    est: "2020",
    type: "Premium Private Medical Faculty",
    tuition: "USD 3,200 / Year",
    hostel: "USD 600 / Year",
    duration: "5 Years",
    slug: "central-asian-international-medical-university",
    features: ["Extremely Low Packages", "High-Tech Anatomical Labs", "Dedicated Indian Student Mess", "Comprehensive Loan Documents Support"]
  },
  {
    name: "Osh International Medical University",
    est: "2019",
    type: "Modern Accredited University",
    tuition: "USD 3,500 / Year",
    hostel: "USD 700 / Year",
    duration: "5 Years",
    slug: "osh-international-medical-university",
    features: ["Rapidly Growing Medical Campus", "Bilingual Faculty Assistance", "NMC Guidelines Fully Met", "Direct WCIEC Airport Escorts"]
  }
];

const faqs = [
  {
    question: "Which is the best university in Kyrgyzstan for Indian medical students?",
    answer: "Osh State University and Jalal Abad State University are government-recognized universities and are highly recommended. Osh State is the oldest medical faculty in the country and has the largest clinical hospitals, whereas Jalal-Abad State offers premium academic infra and highly experienced professors."
  },
  {
    question: "What is the medium of teaching in Kyrgyzstan medical universities?",
    answer: "The medium of instruction for all foreign students is 100% English. WCIEC Delhi represents and advises ONLY those government-recognized universities that conduct all academic lectures, labs, and exams in English."
  },
  {
    question: "What is the difference between a government university and private colleges?",
    answer: "Government universities in Kyrgyzstan are state-subsidized, have over 50 years of academic research budgets, maintain massive clinical hospitals, and offer historic alumni networks. Private universities are modern, offering advanced simulated anatomical laboratories and smaller class sizes."
  },
  {
    question: "How do I secure an education loan for these universities?",
    answer: "WCIEC Delhi provides students with certified university admission letters, bonafide certificates, embassy legal invites, and official breakdown structures of tuition and hostel fees to help parents secure education loans from all major Indian banks."
  }
];

export default function KyrgyzstanMedicalUniversitiesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/kyrgyzstan-medical-universities/#webpage",
        "url": "https://www.wciecdelhi.com/kyrgyzstan-medical-universities/",
        "name": "Top Medical Universities in Kyrgyzstan 2026 | Fees & Ranking",
        "description": "Compare the best NMC & WHO approved medical universities in Kyrgyzstan.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.wciecdelhi.com/#website",
          "name": "WCIEC Delhi",
          "url": "https://www.wciecdelhi.com/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.wciecdelhi.com/kyrgyzstan-medical-universities/#faq",
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
        <section className="relative pt-32 pb-20 bg-[#06182c] text-white min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 to-transparent z-10" />
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
              <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-medical transition-colors">MBBS in Kyrgyzstan</Link>
              <ChevronRight size={12} />
              <span className="text-white">Universities</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-medical/20 text-medical border border-medical/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <BookOpen size={14} /> Compare Approved Colleges
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  Top Medical Universities <span className="text-gradient">in Kyrgyzstan</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Analyze and compare the best government and accredited medical faculties in Kyrgyzstan. Get absolute fee figures, direct campus reviews, and safe direct admission pathways.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#compare" className="bg-medical hover:bg-medical/90 text-white font-bold px-6 py-3 rounded-full transition-all shadow-lg shadow-medical/15 flex items-center gap-2">
                    Compare Universities <ArrowRight size={16} />
                  </a>
                  <a href="tel:+918586873357" className="border border-white/20 hover:bg-white/5 text-white font-bold px-6 py-3 rounded-full transition-all flex items-center gap-2">
                    <PhoneCall size={16} /> Get Free Guide
                  </a>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-medical/5 flex items-center justify-center text-medical border border-medical/10">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">University Admission</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Direct application processing</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Select University" compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Editorial Header */}
        <section className="bg-gray-50 border-y border-gray-100 py-3 text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
            <div>
              <span>Written by: <strong>WCIEC Delhi Kyrgyzstan Academic Committee</strong></span>
              <span className="mx-2">|</span>
              <span>Reviewed by: <strong>Senior MBBS Abroad Counsellor</strong></span>
            </div>
            <div>
              <span>Last Updated: <strong>May 2026</strong></span>
            </div>
          </div>
        </section>

        {/* ── CORE CONTENT ── */}
        <section className="py-20" id="compare">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Column: Extensive Content (1500+ words) */}
              <div className="lg:col-span-8 space-y-12 pr-0 lg:pr-6">
                
                {/* 1. Comparison & List */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Comparing Kyrgyzstan Medical Universities for Indian Students</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    Selecting the right college is the most crucial decision of your MBBS abroad journey. Kyrgyzstan hosts several government-funded and accredited international medical faculties that teach the complete course in English and offer extensive clinical practice for Indian students.
                  </p>
                </div>

                {/* 2. Detailed University Profiles */}
                <div className="space-y-8">
                  {universitiesList.map((uni, idx) => (
                    <div key={idx} className="border border-gray-100 shadow-sm rounded-3xl p-6 hover:shadow-md transition-all space-y-4 bg-white">
                      <div className="flex flex-wrap justify-between items-start gap-4">
                        <div>
                          <span className="bg-medical/10 text-medical text-xs font-bold px-3 py-1 rounded-full border border-medical/20 mb-2 inline-block">
                            {uni.type}
                          </span>
                          <h3 className="text-2xl font-bold text-navy font-poppins">{uni.name}</h3>
                          <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold mt-1">
                            <span className="flex items-center gap-1"><Clock size={12} /> Est: {uni.est}</span>
                            <span className="flex items-center gap-1"><MapPin size={12} /> Kyrgyzstan</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-gray-500 uppercase font-bold block">Tuition Fee</span>
                          <span className="text-lg font-black text-emerald-600 font-poppins">{uni.tuition}</span>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-gray-50">
                        {uni.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-4 text-xs">
                        <span className="text-gray-400">Duration: <strong>{uni.duration}</strong> | Hostel: <strong>{uni.hostel}</strong></span>
                        <Link href={`/universities/${uni.slug}/`} className="text-medical font-bold hover:underline flex items-center gap-1">
                          Full Fee Structure <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comparison Summary */}
                <div className="space-y-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <h2 className="text-2xl font-bold font-poppins text-navy tracking-tight">Summary of Fee Structures & Packages 2026</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Most medical universities in Kyrgyzstan follow the USD payment standard. Parents are advised to track currency conversion rates. Direct deposit systems ensure that no processing agent handles student tuition fees directly.
                  </p>
                </div>

                {/* FAQs Section */}
                <div className="space-y-6 pt-10 border-t border-gray-100">
                  <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Frequently Asked Questions</h2>
                  <div className="w-20 h-1 bg-medical rounded-full" />
                  
                  <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-navy mb-2 flex items-start gap-2">
                          <HelpCircle size={18} className="text-medical shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed pl-7">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Sticky Contact Info & NAP */}
              <div className="lg:col-span-4 space-y-8">
                {/* WCIEC Core Trust Banner */}
                <div className="bg-[#06182c] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-medical/10 rounded-full blur-2xl" />
                  <h3 className="text-xl font-bold font-poppins mb-4">Direct Admission</h3>
                  <ul className="space-y-4 text-xs text-gray-300">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="text-medical shrink-0" size={16} />
                      <span><strong>On-Campus Messes:</strong> WCIEC manages dedicated hostels with professional Indian catering staff.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="text-medical shrink-0" size={16} />
                      <span><strong>Full Documentation:</strong> Standardized application processing from Delhi to foreign ministries.</span>
                    </li>
                  </ul>
                </div>

                {/* Local NAP Address */}
                <div className="border border-gray-100 shadow-sm rounded-3xl p-6 bg-white space-y-4">
                  <h3 className="text-lg font-bold font-poppins text-navy">Delhi Admission Office</h3>
                  <div className="space-y-3 text-xs text-gray-600">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-medical shrink-0 mt-0.5" />
                      <span><strong>WCIEC Delhi Office:</strong> Shakarpur, Near Laxmi Nagar Metro Station, behind Karim Hotel, New Delhi, Delhi 110092</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <PhoneCall size={16} className="text-medical shrink-0 mt-0.5" />
                      <span><strong>Contact Phone:</strong> <a href="tel:+918586873357" className="hover:text-medical">+91 85868 73357</a></span>
                    </div>
                  </div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9961603517406!2d77.27502741508262!3d28.630615082419087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce352d10d6f4f%3A0x1e9382f6a04d3f05!2sWCIEC!5e0!3m2!1sen!2sin!4v1689999999999!5m2!1sen!2sin" 
                    width="100%" 
                    height="180" 
                    style={{ border: 0, borderRadius: '1rem' }} 
                    allowFullScreen={false} 
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom Call to Action Strip */}
        <section className="bg-navy py-12 text-white text-center relative overflow-hidden" id="apply">
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins">Get Your Certified Kyrgyzstan University Placement Today</h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
              Our counsellors are ready to help you analyze, choose, and secure your MBBS seat abroad securely.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#counselling" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-3 rounded-full transition-all">
                Select My University
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20in%20Kyrgyzstan." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-3 rounded-full transition-all">
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
