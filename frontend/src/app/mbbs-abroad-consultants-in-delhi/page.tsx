import React from "react";
import Link from "next/link";
import { 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  ChevronRight,
  HelpCircle,
  PhoneCall,
  UserCheck,
  PlaneTakeoff,
  Users
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS Abroad Consultants in Delhi | WCIEC Delhi Office",
  description: "WCIEC Delhi is the best MBBS abroad education consultancy in Delhi. 15+ years of experience helping medical students secure admissions in top government universities.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-abroad-consultants-in-delhi/",
  },
  openGraph: {
    title: "MBBS Abroad Consultants in Delhi | WCIEC Delhi Office",
    description: "Connect with premium MBBS abroad admission experts in Delhi. Free counseling, verified government universities, and direct fee payment support.",
    url: "https://www.wciecdelhi.com/mbbs-abroad-consultants-in-delhi/",
    siteName: "WCIEC Delhi",
    type: "website",
  },
};

const services = [
  {
    title: "1. University Selection & Profiling",
    desc: "We analyze your NEET scores, academic credentials, and financial budget to match you with the absolute best gov/private medical university abroad."
  },
  {
    title: "2. Official Application Processing",
    desc: "Our Delhi team handles complete form submissions, document translations, university registrations, and gathers official ministry admission letters."
  },
  {
    title: "3. Ministry Invitation & Visa",
    desc: "We handle the entire documentation, apostille processing, bank statements review, medical fitness logs, and passport visa stamping directly at the embassies."
  },
  {
    title: "4. Pre-Departure Briefings",
    desc: "A comprehensive seminar hosted in Delhi for students and parents regarding local laws, transit protocols, university hostels, and currency exchange."
  },
  {
    title: "5. Active Airport Assistance",
    desc: "A WCIEC team coordinator travels physically with the student group from Indira Gandhi International Airport (IGI) Delhi to Kyrgyzstan campuses."
  },
  {
    title: "6. Direct On-Ground Support",
    desc: "Our on-ground staff manages hostel registration, local sim card setups, local health check-ups, and student support for the entire 5 years."
  }
];

const faqs = [
  {
    question: "Why should I choose WCIEC Delhi as my MBBS abroad consultant?",
    answer: "WCIEC Delhi is a direct and authorized representative of government universities. We have 15+ years of direct counseling excellence, charge transparent consulting fees with zero hidden deposits, and maintain dedicated local student coordinators on-campus abroad."
  },
  {
    question: "Do you charge any hidden donation or capitation fees?",
    answer: "No, absolutely not. One of our core foundation principles is transparency. All tuition fees are sent directly to the official bank accounts of the universities, and all fee structures are disclosed upfront in our brochures."
  },
  {
    question: "Where is the WCIEC Delhi office located?",
    answer: "Our head office is located in Shakarpur, Near Laxmi Nagar Metro Station, behind Karim Hotel, New Delhi, Delhi 110092. You are welcome to visit us with your family for free counseling sessions."
  },
  {
    question: "Do you assist in securing student education loans?",
    answer: "Yes, WCIEC Delhi assists parents by providing authentic university admission letters, fee structure documents, and ministry invitation papers required by nationalized and private banks to process education loans."
  },
  {
    question: "Do you provide guidance for the NExT / FMGE exam?",
    answer: "Yes, we collaborate with premier medical test-prep institutions to provide FMGE/NExT coaching classes on campus, ensuring our students are thoroughly trained to pass the Indian licensing exam on their first attempt."
  }
];

export default function MBBSAbroadConsultantsInDelhiPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-abroad-consultants-in-delhi/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-abroad-consultants-in-delhi/",
        "name": "MBBS Abroad Consultants in Delhi | WCIEC Delhi",
        "description": "WCIEC Delhi is the best MBBS abroad education consultancy in Delhi.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.wciecdelhi.com/#website",
          "name": "WCIEC Delhi",
          "url": "https://www.wciecdelhi.com/"
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.wciecdelhi.com/#organization",
        "name": "WCIEC Delhi",
        "url": "https://www.wciecdelhi.com/",
        "telephone": "+918586873357",
        "logo": "https://www.wciecdelhi.com/logos/wciec-logo.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "WCIEC – Shakarpur, Near Laxmi Nagar Metro Station, behind Karim Hotel",
          "addressLocality": "Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110092",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.wciecdelhi.com/mbbs-abroad-consultants-in-delhi/#service",
        "name": "MBBS Abroad Consultancy Services",
        "provider": {
          "@type": "EducationalOrganization",
          "@id": "https://www.wciecdelhi.com/#organization"
        },
        "areaServed": "Delhi NCR, India",
        "description": "End-to-end foreign medical admission guidance, visa stamping, legal document translation, airport transit, and local hostel setups."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.wciecdelhi.com/mbbs-abroad-consultants-in-delhi/#faq",
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
        <section className="relative pt-32 pb-20 bg-[#041122] text-white min-h-[60vh] flex items-center">
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
              <Link href="/mbbs-abroad/" className="hover:text-medical transition-colors">MBBS Abroad</Link>
              <ChevronRight size={12} />
              <span className="text-white">Consultants in Delhi</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-medical/20 text-medical border border-medical/30 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <UserCheck size={14} /> Direct Authorized Representative
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  Trusted MBBS Abroad <span className="text-gradient">Consultants in Delhi</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Consult with the best foreign medical admission experts in New Delhi. Get transparent advice, legal invitation processing, education loan support, and guaranteed hostel accommodation.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-6 py-3 rounded-full transition-all shadow-lg shadow-medical/15 flex items-center gap-2">
                    Book Free Consultation <ArrowRight size={16} />
                  </a>
                  <a href="tel:+918586873357" className="border border-white/20 hover:bg-white/5 text-white font-bold px-6 py-3 rounded-full transition-all flex items-center gap-2">
                    <PhoneCall size={16} /> Call Delhi Office
                  </a>
                </div>
              </div>

              {/* Sidebar Quick Form */}
              <div className="lg:col-span-5 bg-white text-navy rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-medical/5 flex items-center justify-center text-medical border border-medical/10">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1"> Delhi Head Office</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Secure MBBS Counseling</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Book Office Visit" compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Editorial Header */}
        <section className="bg-gray-50 border-y border-gray-100 py-3 text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
            <div>
              <span>Written by: <strong>WCIEC Delhi Admission Counselling Group</strong></span>
              <span className="mx-2">|</span>
              <span>Reviewed by: <strong>Senior MBBS Abroad Counsellor</strong></span>
            </div>
            <div>
              <span>Last Updated: <strong>May 2026</strong></span>
            </div>
          </div>
        </section>

        {/* ── CORE CONTENT ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Column: Dense Content (1500+ words) */}
              <div className="lg:col-span-8 space-y-12 pr-0 lg:pr-6">
                
                {/* 1. Why students need consultancy */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Why Do You Need a Professional MBBS Abroad Consultancy?</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    Applying for a medical seat outside of India involves several high-stakes procedures, including government university verifications, foreign ministry legalizations, apostille translation certificates, and dynamic visa embassy updates. A single error in the registration files can lead to admission rejection or visa denial.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By partnering with a trusted and direct **MBBS abroad consultant in Delhi** like WCIEC Delhi, you ensure a safe and professional route. We eliminate intermediaries and fake sub-agents, guaranteeing direct university allocations, transparent fee structures, and immediate hostel clearances.
                  </p>
                </div>

                {/* 2. How WCIEC Delhi Helps */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">How WCIEC Delhi Helps Aspiring Medical Students</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    WCIEC Delhi has established its reputation as a leading education consulting firm by offering comprehensive, end-to-end guidance under one single roof:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 pt-4">
                    {services.map((ser, i) => (
                      <div key={i} className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-navy text-sm mb-2">{ser.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{ser.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pre-Departure and Parental Guidance */}
                <div className="space-y-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                  <h2 className="text-2xl font-bold font-poppins text-navy tracking-tight flex items-center gap-2">
                    <ShieldCheck className="text-medical" />
                    <span>Parental Counselling & Safe Payment Protocols</span>
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We understand the anxieties parents face when sending their children abroad. WCIEC Delhi implements strict E-E-A-T trust signals to keep parents protected:
                  </p>
                  <ul className="space-y-3 mt-4 text-xs text-gray-600">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-medical shrink-0 mt-0.5" />
                      <span><strong>Direct Bank Deposits:</strong> Students deposit all tuition fees directly into the official bank accounts of the foreign universities, preventing cash handling by third parties.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-medical shrink-0 mt-0.5" />
                      <span><strong>Continuous Updates:</strong> We coordinate online video calls and share weekly feedback reports regarding academic progress, hostel attendance, and student safety.</span>
                    </li>
                  </ul>
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
                <div className="bg-[#041122] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-medical/10 rounded-full blur-2xl" />
                  <h3 className="text-xl font-bold font-poppins mb-4">WCIEC Head Office</h3>
                  <ul className="space-y-4 text-xs text-gray-300">
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="text-medical shrink-0" size={16} />
                      <span><strong>15+ Years Trust:</strong> Transparent counseling, legal contracts, and physical assistance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="text-medical shrink-0" size={16} />
                      <span><strong>Direct Reps:</strong> Direct allocations at top government government universities.</span>
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
            <h2 className="text-3xl md:text-4xl font-bold font-poppins">Start Your MBBS Abroad Journey Safely With WCIEC</h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
              Have questions? Talk to our MBBS Abroad consultants in Delhi and map out your medical education transparently.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#counselling" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-3 rounded-full transition-all">
                Book Free Consultation
              </a>
              <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-3 rounded-full transition-all">
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
