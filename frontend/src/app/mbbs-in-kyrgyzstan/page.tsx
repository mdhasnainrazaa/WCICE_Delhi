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
  Coffee,
  HeartPulse,
  AlertTriangle,
  Calendar,
  DollarSign,
  Clock,
  BookOpen,
  Briefcase,
  UserCheck
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBBS in Kyrgyzstan 2026 for Indian Students: Fees, Colleges & Admission",
  description: "Study MBBS in Kyrgyzstan 2026. Compare low fees structure (₹15L to ₹25L), top NMC approved medical colleges like JASU & Osh State, & student life. Apply via WCIEC Delhi.",
  alternates: {
    canonical: "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/",
  },
  openGraph: {
    title: "MBBS in Kyrgyzstan 2026 for Indian Students: Fees, Colleges & Admission",
    description: "Looking to study MBBS in Kyrgyzstan? Compare 2026 fees, top NMC & WHO approved medical colleges (JASU, Osh State), admission process, and FMGE passing rates. Apply via WCIEC Delhi.",
    url: "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/",
    siteName: "WCIEC Delhi",
    type: "website",
    images: [
      {
        url: "/logos/wciec-logo.webp",
        width: 1200,
        height: 630,
        alt: "MBBS in Kyrgyzstan for Indian Students - WCIEC Delhi Guide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MBBS in Kyrgyzstan 2026 for Indian Students: Fees, Colleges & Admission",
    description: "Compare 2026 fees, top NMC & WHO approved medical colleges in Kyrgyzstan. Secure your seat today with complete guidance from WCIEC Delhi.",
    images: ["/logos/wciec-logo.webp"]
  }
};

const universities = [
  {
    name: "Osh State University (International Medical Faculty)",
    est: "1939",
    type: "State Government",
    tuition: "USD 4,000 / Year",
    hostel: "USD 800 / Year",
    total: "INR 18 - 20 Lakhs",
    duration: "5 Years + 1 Year Internship",
    link: "/universities/osh-state-university/"
  },
  {
    name: "Jalal Abad State University (JASU)",
    est: "1993",
    type: "State Government",
    tuition: "USD 4,200 / Year",
    hostel: "USD 700 / Year",
    total: "INR 20 - 22 Lakhs",
    duration: "5 Years + 1 Year Internship",
    link: "/universities/jalal-abad-state-university/"
  },
  {
    name: "Jalal-Abad International University (JAIU)",
    est: "2015",
    type: "Government Vetted Private",
    tuition: "USD 3,500 / Year",
    hostel: "USD 600 / Year",
    total: "INR 16 - 18 Lakhs",
    duration: "5 Years + 1 Year Internship",
    link: "/universities/jalal-abad-international-university/"
  },
  {
    name: "Central Asian International Medical University (CAIMU)",
    est: "2018",
    type: "Approved Private Faculty",
    tuition: "USD 3,200 / Year",
    hostel: "USD 600 / Year",
    total: "INR 15 - 17 Lakhs",
    duration: "5 Years + 1 Year Internship",
    link: "/universities/central-asian-international-medical-university/"
  },
  {
    name: "Osh International Medical University (OIMU)",
    est: "2019",
    type: "Approved Private Faculty",
    tuition: "USD 3,500 / Year",
    hostel: "USD 700 / Year",
    total: "INR 16 - 18 Lakhs",
    duration: "5 Years + 1 Year Internship",
    link: "/universities/osh-international-medical-university/"
  }
];

const faqsList = [
  {
    question: "Is MBBS in Kyrgyzstan valid in India?",
    answer: "Yes, degrees from NMC-approved universities in Kyrgyzstan are fully valid in India, provided they comply with the NMC Foreign Medical Graduate Licentiate (FMGL) Regulations 2021 (54 months minimum course duration, 12 months internship in the same institute, and English medium)."
  },
  {
    question: "Can Indian students practice in India after studying MBBS in Kyrgyzstan?",
    answer: "Yes. Indian students who graduate from Kyrgyzstan can practice in India after clearing the NExT (National Exit Test) or FMGE exam, completing a clinical internship in India, and obtaining registration with the National Medical Commission (NMC)."
  },
  {
    question: "What is the latest NMC rule for MBBS in Kyrgyzstan?",
    answer: "The latest rules are the FMGL Regulations 2021. The program must be at least 54 months (4.5 years) of academic studies, followed by a 12-month clinical internship in the same foreign university, taught entirely in English, and the graduate must be registered to practice in Kyrgyzstan."
  },
  {
    question: "Do we need to qualify NEET for MBBS in Kyrgyzstan?",
    answer: "Yes. NEET qualification is mandatory for all Indian students who wish to study medicine abroad and return to practice in India. Without qualifying NEET, you will not be allowed to sit for the licensing exam (FMGE/NExT) in India."
  },
  {
    question: "What is the minimum NEET score required for MBBS in Kyrgyzstan?",
    answer: "You only need to meet the qualifying percentile set by the NTA for that academic year. For general category students, this is typically around the 50th percentile (130-160 marks out of 720), and for reserved categories (SC/ST/OBC), it is the 40th percentile (100-120 marks)."
  },
  {
    question: "For how many years is the NEET scorecard valid for MBBS abroad?",
    answer: "According to the National Medical Commission (NMC), the NEET-UG scorecard is valid for a period of 3 years from the date of declaration of results for students seeking admission to an MBBS program abroad."
  },
  {
    question: "Can I study MBBS in Kyrgyzstan without NEET qualification?",
    answer: "No. While some unregulated agents might offer admission, your degree will NOT be recognized by the NMC in India, and you will be legally barred from practicing medicine in India upon return."
  },
  {
    question: "What is the duration of MBBS in Kyrgyzstan?",
    answer: "The total duration is 6 years. This comprises 5 years of core academic studies (including classroom and clinical rotations) and 1 mandatory year of clinical internship at the university's affiliated hospitals."
  },
  {
    question: "Is the internship in Kyrgyzstan valid in India?",
    answer: "Yes. The 1-year internship completed in Kyrgyzstan is a mandatory part of the 6-year course and complies with the NMC's requirement. FMGs must also clear the licensing exam and complete a supernumerary internship in India."
  },
  {
    question: "What is the medium of instruction for MBBS in Kyrgyzstan?",
    answer: "The medium of instruction for all international students is 100% English. Lectures, textbooks, lab manuals, and examinations are entirely in English. However, students learn basic Russian or Kyrgyz for patient interactions."
  },
  {
    question: "Are bilingual (Russian + English) medical courses in Kyrgyzstan valid in India?",
    answer: "No. The NMC FMGL Regulations 2021 explicitly state that the entire course must be taught in English. Bilingual courses are invalid, and WCIEC only partners with 100% English-medium universities."
  },
  {
    question: "Which degree is awarded to medical students in Kyrgyzstan?",
    answer: "Students are awarded the 'MD Physician' degree, which is equivalent to the MBBS degree in India, the UK, and other commonwealth countries."
  },
  {
    question: "Is MD Physician in Kyrgyzstan equivalent to MBBS in India?",
    answer: "Yes, the MD Physician degree awarded by government-recognized universities in Kyrgyzstan is officially recognized by the NMC as equivalent to the Indian MBBS degree."
  },
  {
    question: "How much does MBBS in Kyrgyzstan cost for Indian students?",
    answer: "The total tuition and hostel fee for 6 years ranges from ₹15 Lakhs to ₹22 Lakhs, depending on the university. When you add food, visa extensions, and personal expenses, the total budget is approximately ₹18 Lakhs to ₹25 Lakhs."
  },
  {
    question: "Are there any hidden fees or donations for MBBS in Kyrgyzstan?",
    answer: "No. Admissions are processed directly. There is absolutely no donation or capitation fee required to secure a seat. WCIEC maintains a strict 100% transparent fee structure."
  },
  {
    question: "What is the cost of living for a student in Kyrgyzstan?",
    answer: "The cost of living is very low, ranging between ₹10,000 and ₹15,000 per month (approx. USD 120 to 180). This easily covers food, transport, internet, utilities, and minor personal expenses."
  },
  {
    question: "What are the hostel fees in Kyrgyzstan medical universities?",
    answer: "Hostel accommodation typically costs between USD 500 and USD 800 per year (approximately ₹40,000 to ₹65,000). Rooms are shared by 2 to 4 students and include basic furniture, heating, and security."
  },
  {
    question: "Are hostels in Kyrgyzstan safe for Indian students?",
    answer: "Yes, hostels are highly secure. They have 24/7 security guards, biometric access control, CCTV monitoring, and strict curfew hours (usually 9:00 PM or 10:00 PM) enforced by wardens."
  },
  {
    question: "Are there separate hostels for female students in Kyrgyzstan?",
    answer: "Yes. All top universities supported by WCIEC provide separate hostel wings or independent buildings for male and female students to ensure maximum privacy and safety."
  },
  {
    question: "Is Indian food available in Kyrgyzstan medical universities?",
    answer: "Yes. All major universities have dedicated Indian messes serving hygienic vegetarian and non-vegetarian food cooked by Indian chefs. Traditional spices are imported to maintain authentic taste."
  },
  {
    question: "How much does the Indian mess cost in Kyrgyzstan?",
    answer: "The Indian mess typically costs USD 1,000 to USD 1,200 per year (around ₹8,000 to ₹10,000 per month), which includes three meals a day (breakfast, lunch, and dinner)."
  },
  {
    question: "Can students cook their own food in Kyrgyzstan hostels?",
    answer: "Yes. Most hostels have common student kitchens equipped with gas stoves and ovens where students can prepare their own meals if they choose not to join the mess."
  },
  {
    question: "Is Kyrgyzstan safe for Indian students, especially female students?",
    answer: "Kyrgyzstan is a safe and hospitable country. The local population is friendly toward Indians, and cities like Osh and Jalal-Abad have a low crime rate. Universities maintain strict safety regulations on and off campus."
  },
  {
    question: "What is the climate like in Kyrgyzstan?",
    answer: "Kyrgyzstan experiences a continental climate. Summers are warm and pleasant (25°C to 35°C), while winters are cold and snowy, with temperatures dropping below freezing (-5°C to -15°C) from December to February."
  },
  {
    question: "How cold does it get in Kyrgyzstan during winter?",
    answer: "During peak winter (January), temperatures can drop to -10°C to -15°C in cities like Osh and Jalal-Abad. However, all indoor establishments, including academic buildings and hostels, are fully equipped with centralized heating."
  },
  {
    question: "Are classrooms and hostels centrally heated in Kyrgyzstan?",
    answer: "Yes, all university facilities, classrooms, laboratories, libraries, and hostel rooms have centralized radiator heating systems active from October to April, maintaining a comfortable indoor temperature of 20°C to 24°C."
  },
  {
    question: "Which are the best medical universities in Kyrgyzstan?",
    answer: "The best universities are Osh State University (oldest and largest government faculty), Jalal Abad State University (JASU), Jalal-Abad International University (JAIU), Central Asian International Medical University (CAIMU), and Osh International Medical University."
  },
  {
    question: "Is Jalal Abad State University (JASU) government or private?",
    answer: "Jalal Abad State University is a fully government-funded state university, established in 1993, and functions under the Ministry of Education and Ministry of Health of the Kyrgyz Republic."
  },
  {
    question: "Is Osh State University recognized by the NMC?",
    answer: "Yes. Osh State University is recognized by the National Medical Commission (NMC), listed in the World Directory of Medical Schools (WDOMS), and approved by WHO and FAIMER."
  },
  {
    question: "What is the difference between Central Asian International Medical University (CAIMU) and Osh State University?",
    answer: "Osh State University is a large, historic government institution (est. 1939) with a massive student body. CAIMU is a modern, private medical university (est. 2018) in Jalal-Abad that features newer infrastructure, digital anatomy labs, and smaller class sizes."
  },
  {
    question: "What is the admission process for MBBS in Kyrgyzstan?",
    answer: "The process involves: 1. Free career counseling at WCIEC. 2. Submitting 10th/12th marksheets and NEET score. 3. Receiving the university admission letter. 4. Obtaining the Ministry Invitation Letter. 5. Visa processing and stamping in Delhi. 6. Group departure."
  },
  {
    question: "What documents are required for a student visa to Kyrgyzstan?",
    answer: "You need: Original Passport (minimum 18 months validity), 10th & 12th Marksheets, NEET Qualified Scorecard, Official University Invitation Letter, Medical Fitness Certificate (showing HIV Negative status), and Passport Photos."
  },
  {
    question: "How long does it take to get a Kyrgyzstan student visa?",
    answer: "The student visa processing at the Embassy of Kyrgyzstan in New Delhi takes about 15 to 20 working days after the visa invitation letter is received from the Ministry in Kyrgyzstan."
  },
  {
    question: "Who issues the visa invitation letter for Kyrgyzstan?",
    answer: "The visa invitation letter is official government documentation issued by the Department of Consular Services of the Ministry of Foreign Affairs of the Kyrgyz Republic upon application by the university."
  },
  {
    question: "Are there scholarships available for Indian students in Kyrgyzstan?",
    answer: "While full-tuition scholarships are not available, top-ranking students who maintain exceptional academic records (GPA of 4.5+ out of 5) are often rewarded with tuition fee discounts or merit stipends by the university."
  },
  {
    question: "What is the FMGE pass rate for students from Kyrgyzstan?",
    answer: "Top-ranked universities like Osh State and JASU maintain highly competitive FMGE passing rates. The overall success depends heavily on the student's personal preparation and utilization of the coaching programs provided."
  },
  {
    question: "Will students have to clear the NExT exam to practice in India?",
    answer: "Yes. The NExT (National Exit Test) is scheduled to replace the FMGE and NEET-PG. All graduates (both Indian and foreign) must pass the NExT to secure their license and PG seats in India."
  },
  {
    question: "Does WCIEC Delhi provide FMGE/NExT coaching assistance?",
    answer: "Yes. WCIEC's partner universities host on-campus FMGE/NExT coaching classes conducted by experienced Indian doctors and academic faculties who travel from India to train students in key clinical subjects."
  },
  {
    question: "What is the clinical exposure like in Kyrgyz hospitals?",
    answer: "Students undergo clinical rotations from the 3rd year onwards in multi-specialty government hospitals, polyclinics, and emergency centers, gaining direct exposure to patient diagnosis, surgical observations, and case studies."
  },
  {
    question: "Do Indian students get hands-on clinical practice in Kyrgyzstan?",
    answer: "Yes. During clinical rotations, students work alongside senior doctors. While the language barrier requires basic Russian/Kyrgyz, students perform basic clinical procedures like taking case histories, measuring vitals, and checking diagnoses."
  },
  {
    question: "Can I get an education loan for studying MBBS in Kyrgyzstan?",
    answer: "Yes. Nationalized and private banks in India provide education loans for studying MBBS in NMC-approved government universities in Kyrgyzstan. WCIEC provides all the necessary documents to support your loan application."
  },
  {
    question: "What documents does WCIEC provide for education loans?",
    answer: "WCIEC provides the official University Admission Letter, Bonafide Student Certificate, Ministry Visa Invitation Letter, Approved Fee Structure Brochure, and the consultancy's registration documents."
  },
  {
    question: "What is the currency of Kyrgyzstan and how is it exchanged?",
    answer: "The currency is the Kyrgyzstani Som (KGS). As of 2026, 1 Som is roughly equivalent to 0.90 to 0.95 Indian Rupees (INR). Students can carry US Dollars from India and easily convert them into Som at local banks or official exchange booths."
  },
  {
    question: "How far is Kyrgyzstan from India, and are there direct flights?",
    answer: "Kyrgyzstan is geographically very close to India. Direct flights operate from New Delhi (IGI Airport) to Bishkek (Manas International Airport) and Osh, with a flight duration of only 3.5 to 4 hours."
  },
  {
    question: "What is the average cost of a flight ticket from New Delhi to Bishkek?",
    answer: "A one-way direct flight ticket typically costs between ₹18,000 and ₹25,000, while a round-trip ticket ranges from ₹35,000 to ₹45,000, depending on how early the booking is made."
  },
  {
    question: "Can I do PG (Post Graduation) in India after MBBS from Kyrgyzstan?",
    answer: "Yes. Once you clear the NExT exam (which replaces both the FMGE licensing exam and NEET-PG), you will be fully eligible to secure a PG medical seat in government or private medical colleges in India."
  },
  {
    question: "Can I practice in other countries like USA or UK after studying in Kyrgyzstan?",
    answer: "Yes. Because our partner universities are listed in WDOMS and recognized globally, you can sit for international licensing exams such as the USMLE (USA), PLAB/UKMLA (UK), AMC (Australia), and MCCQE (Canada)."
  },
  {
    question: "What is the age limit for MBBS admission in Kyrgyzstan?",
    answer: "The minimum age requirement is 17 years by December 31st of the year of admission. There is no upper age limit, provided you meet the academic and NEET qualification criteria."
  },
  {
    question: "What marks are required in 12th standard for MBBS in Kyrgyzstan?",
    answer: "You must have completed 10+2 with a minimum of 50% aggregate marks in Physics, Chemistry, and Biology (PCB) for the General category, and 40% for SC/ST/OBC categories, from a recognized education board."
  },
  {
    question: "Who is the official representative for Jalal Abad State University in India?",
    answer: "WCIEC Consultant Pvt. Ltd. (WCIEC Delhi) is the official, authorized direct admission partner and Indian representative for Jalal Abad State University (JASU) and other top Kyrgyz institutions."
  },
  {
    question: "Why should I choose WCIEC Delhi over local agents?",
    answer: "WCIEC Delhi has 15+ years of direct university partnerships, operates with zero hidden charges, provides on-ground assistance with dedicated staff in Kyrgyzstan, and assists with loan documentation, visa stamping, and pre-departure briefings."
  },
  {
    question: "What post-admission support does WCIEC Delhi offer?",
    answer: "Our support includes receiving students at the airport, coordinating transport to the university, arranging hostel room allotments, organizing medical checkups, handling local police registration, and providing on-ground assistance for any emergencies throughout the 6-year course."
  }
];

export default function MBBSInKyrgyzstanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/#webpage",
        "url": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/",
        "name": "MBBS in Kyrgyzstan 2026 for Indian Students: Fees, Colleges & Admission",
        "description": "Complete guide for Indian students planning to study MBBS in Kyrgyzstan. Discover 2026 fees, top NMC approved medical colleges like Jalal Abad State University, admission process, and FMGE passing rates.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.wciecdelhi.com/#website",
          "name": "WCIEC Delhi",
          "url": "https://www.wciecdelhi.com/"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.wciecdelhi.com/#localbusiness",
        "name": "WCIEC Consultant Pvt. Ltd.",
        "image": "https://www.wciecdelhi.com/logos/wciec-logo.webp",
        "url": "https://www.wciecdelhi.com/",
        "telephone": "+91-8586873357",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "WCIEC Delhi Head Office, Shakarpur, Near Laxmi Nagar Metro Station",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110092",
          "addressCountry": "IN"
        },
        "priceRange": "$$"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/#faq",
        "mainEntity": faqsList.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.wciecdelhi.com/" },
          { "@type": "ListItem", "position": 2, "name": "MBBS Abroad", "item": "https://www.wciecdelhi.com/mbbs-abroad/" },
          { "@type": "ListItem", "position": 3, "name": "MBBS in Kyrgyzstan", "item": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/#article",
        "headline": "MBBS in Kyrgyzstan 2026 for Indian Students: Fees, Colleges & Admission",
        "description": "Complete guide for Indian students planning to study MBBS in Kyrgyzstan. Discover 2026 fees, top NMC approved medical colleges like Jalal Abad State University, admission process, and FMGE passing rates.",
        "inLanguage": "en-US",
        "mainEntityOfPage": "https://www.wciecdelhi.com/mbbs-in-kyrgyzstan/",
        "datePublished": "2026-01-10T08:00:00+05:30",
        "dateModified": "2026-07-16T12:00:00+05:30",
        "author": {
          "@type": "Organization",
          "name": "WCIEC Delhi Expert Counselors",
          "url": "https://www.wciecdelhi.com/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "WCIEC Consultant Pvt. Ltd.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.wciecdelhi.com/logos/wciec-logo.webp"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-background-soft text-navy overflow-hidden">
        {/* ── HERO SECTION ── */}
        <section className="relative pt-32 pb-24 bg-navy text-white min-h-[70vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent z-10" />
          <div className="absolute inset-0 opacity-5"
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
              <span className="text-white">Kyrgyzstan</span>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-medical/20 text-medical border border-medical/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Flame size={14} className="text-medical animate-pulse" /> Admission Open 2026-27
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins leading-[1.15] text-white tracking-tight">
                  MBBS in Kyrgyzstan <span className="text-gradient">2026 Intake</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Secure direct, donation-free medical admission in top NMC & WHO approved government universities. English-medium course starting at just ₹15 Lakhs.
                </p>
                
                {/* Value Props & Trust Badges */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-200 font-medium py-2">
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 size={18} className="text-medical" />
                    <span>NMC Compliant (5+1 Yrs)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 size={18} className="text-medical" />
                    <span>English Medium Syllabus</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 size={18} className="text-medical" />
                    <span>No Capitation/Donation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 size={18} className="text-medical" />
                    <span>Direct University Partner</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="#counselling" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-medical/25 hover:scale-105 transform duration-300 flex items-center gap-2 text-base">
                    Book Free Counseling <ArrowRight size={18} />
                  </a>
                  <a href="tel:+918586873357" className="border-2 border-white/20 hover:bg-white/5 text-white font-bold px-6 py-4 rounded-full transition-all flex items-center gap-2 text-base">
                    <PhoneCall size={18} /> Call +91 85868 73357
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
                    <h3 className="text-lg font-bold font-poppins leading-none mb-1">Apply for Kyrgyzstan</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">Secured process by WCIEC Delhi</p>
                  </div>
                </div>
                <GlobalApplyForm buttonText="Book My Seat Now" compact={true} />
              </div>
            </div>
          </div>
        </section>

        {/* E-E-A-T Editorial Header */}
        <section className="bg-white border-y border-gray-200 py-3 text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <span>Written by: <strong>WCIEC Editorial Team</strong></span>
              <span className="text-gray-300">|</span>
              <span>Fact-Checked & Reviewed by: <strong>Senior MBBS Counsellor</strong></span>
            </div>
            <div>
              <span>Last Updated: <strong>For 2026 Intake</strong></span>
            </div>
          </div>
        </section>

        {/* ── CORE ARTICLE CONTENT ── */}
        <article className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left Column: Sidebar Table of Contents */}
              <aside className="lg:col-span-3 hidden lg:block">
                <div className="sticky top-28 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4 max-h-[80vh] overflow-y-auto no-scrollbar">
                  <h3 className="font-bold text-lg font-poppins text-navy border-b border-gray-100 pb-3">Table of Contents</h3>
                  <nav className="flex flex-col gap-2.5 text-sm text-gray-500 font-medium">
                    <a href="#quick-facts" className="hover:text-medical transition-colors">Quick Facts Table</a>
                    <a href="#why-kyrgyzstan" className="hover:text-medical transition-colors">Why Study in Kyrgyzstan?</a>
                    <a href="#pros-cons" className="hover:text-medical transition-colors">Advantages & Disadvantages</a>
                    <a href="#fee-breakdown" className="hover:text-medical transition-colors">Complete Fee Breakdown</a>
                    <a href="#medical-universities" className="hover:text-medical transition-colors">Kyrgyz Medical Universities</a>
                    <a href="#admission-process" className="hover:text-medical transition-colors">Step-by-Step Admission</a>
                    <a href="#eligibility" className="hover:text-medical transition-colors">Eligibility & Documents</a>
                    <a href="#visa-process" className="hover:text-medical transition-colors">Student Visa Process</a>
                    <a href="#living-hostel" className="hover:text-medical transition-colors">Living Cost & Hostels</a>
                    <a href="#academic-curriculum" className="hover:text-medical transition-colors">Curriculum & Exposure</a>
                    <a href="#nmc-regulations" className="hover:text-medical transition-colors">NMC FMGL Guidelines</a>
                    <a href="#fmge-next" className="hover:text-medical transition-colors">FMGE & NExT analysis</a>
                    <a href="#career-scholarships" className="hover:text-medical transition-colors">Careers & Scholarships</a>
                    <a href="#admission-timeline" className="hover:text-medical transition-colors">Admission Timeline 2026</a>
                    <a href="#country-comparisons" className="hover:text-medical transition-colors">Country Comparisons</a>
                    <a href="#who-should-choose" className="hover:text-medical transition-colors">Who Should Choose/Avoid</a>
                    <a href="#mistakes-avoid" className="hover:text-medical transition-colors">Mistakes Students Make</a>
                    <a href="#parents-guide" className="hover:text-medical transition-colors">Parent's Guide</a>
                    <a href="#faqs" className="hover:text-medical transition-colors">Frequently Asked Questions</a>
                  </nav>
                </div>
              </aside>

              {/* Right Column: Main Content */}
              <div className="lg:col-span-9 space-y-16">
                
                {/* Inline Table of Contents */}
                <section id="table-of-contents" className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins border-b border-gray-100 pb-3 flex items-center gap-2">
                    <BookOpen size={24} className="text-medical" /> Table of Contents
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3.5 text-sm text-gray-600 font-medium">
                    <a href="#quick-facts" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Quick Facts Table</a>
                    <a href="#why-kyrgyzstan" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Why Study in Kyrgyzstan?</a>
                    <a href="#pros-cons" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Advantages & Disadvantages</a>
                    <a href="#fee-breakdown" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Complete Fee Breakdown</a>
                    <a href="#medical-universities" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Kyrgyz Medical Universities</a>
                    <a href="#admission-process" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Step-by-Step Admission</a>
                    <a href="#eligibility" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Eligibility & Documents</a>
                    <a href="#visa-process" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Student Visa Process</a>
                    <a href="#living-hostel" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Living Cost & Hostels</a>
                    <a href="#academic-curriculum" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Curriculum & Exposure</a>
                    <a href="#nmc-regulations" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> NMC FMGL Guidelines</a>
                    <a href="#fmge-next" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> FMGE & NExT analysis</a>
                    <a href="#career-scholarships" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Careers & Scholarships</a>
                    <a href="#admission-timeline" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Admission Timeline 2026</a>
                    <a href="#country-comparisons" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Country Comparisons</a>
                    <a href="#who-should-choose" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Who Should Choose/Avoid</a>
                    <a href="#mistakes-avoid" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Mistakes Students Make</a>
                    <a href="#parents-guide" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Parent's Guide</a>
                    <a href="#faqs" className="hover:text-medical transition-colors flex items-center gap-1.5"><ChevronRight size={14} className="text-medical shrink-0" /> Frequently Asked Questions</a>
                  </div>
                </section>

                {/* Introduction Section */}
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold font-poppins text-navy tracking-tight">Introduction: Study MBBS in Kyrgyzstan for Indian Students</h2>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Are you an Indian medical aspirant seeking a reputable and affordable destination to study MBBS abroad? Over the past two decades, **studying MBBS in Kyrgyzstan** has risen to become the single most popular route for Indian students. Every year, over 4,000 Indian students fly to Kyrgyzstan to pursue their medical careers at top NMC-approved state medical faculties.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Kyrgyzstan’s medical universities are globally recognized, offering a 100% English-medium curriculum designed to align with international licensing systems (including NExT in India, USMLE in America, and PLAB/UKMLA in the UK). At **WCIEC Consultant Pvt. Ltd. (WCIEC Delhi)**, we have over 15 years of direct institutional partnerships and have successfully guided thousands of students into top Kyrgyz medical institutions without a single rupee of donation or capitation fees.
                  </p>
                  
                  {/* AI Answer Block for GEO Search */}
                  <div className="bg-blue-50 border-l-4 border-medical p-5 rounded-r-2xl space-y-3">
                    <strong className="text-navy font-bold text-lg block">GEO AI Quick Answer: Is MBBS in Kyrgyzstan a Good Choice?</strong>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Yes. Studying MBBS in Kyrgyzstan is an excellent, low-cost choice for Indian students. Top government universities like Osh State and JASU are fully recognized by the WHO and NMC. The total cost ranges from ₹15 Lakhs to ₹25 Lakhs (inclusive of tuition, hostel, and food) for the entire 6-year English-medium course. Admission requires qualifying the NEET-UG exam.
                    </p>
                  </div>
                </section>

                {/* Section: Quick Facts */}
                <section id="quick-facts" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Quick Facts: MBBS in Kyrgyzstan 2026-27</h3>
                  <p className="text-gray-600">A quick snapshot of everything you need to know about the medical program in Kyrgyzstan:</p>
                  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                    <table className="w-full text-left text-sm text-gray-600">
                      <thead className="bg-navy text-white text-xs uppercase font-poppins font-bold">
                        <tr>
                          <th className="px-6 py-4">Parameter</th>
                          <th className="px-6 py-4">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-sm">
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Course Duration</td><td className="px-6 py-4">5 Years Academic Studies + 1 Year Mandatory Clinical Internship (6 Years Total)</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Eligibility Criteria</td><td className="px-6 py-4">Minimum 50% marks in PCB (12th Std) for General, 40% for SC/ST/OBC. Minimum 17 years old.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">NEET-UG Exam</td><td className="px-6 py-4">Mandatory (Must hold a qualifying NEET score card from 2024, 2025, or 2026)</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Medium of Instruction</td><td className="px-6 py-4">100% English Medium for all international students</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Annual Tuition Fees</td><td className="px-6 py-4">USD 3,200 to USD 4,500 (approx. ₹2.7 Lakhs to ₹3.8 Lakhs per year)</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Annual Hostel Fees</td><td className="px-6 py-4">USD 500 to USD 800 (approx. ₹42,000 to ₹65,000 per year)</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Indian Food Cost</td><td className="px-6 py-4">USD 1,000 to USD 1,200 per year (approx. ₹8,000 to ₹10,000 per month for 3 meals daily)</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">NMC & WHO Listing</td><td className="px-6 py-4">Fully Approved, listed in WDOMS (World Directory of Medical Schools), compliant with FMGL 2021</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Intake Duration</td><td className="px-6 py-4">Primary intake from May to September. Processing takes 30-45 days.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Local Currency</td><td className="px-6 py-4">Kyrgyzstani Som (KGS) — exchange rate is roughly 1 Som = 0.93 INR</td></tr>
                        <tr className="hover:bg-gray-50"><td className="px-6 py-4 font-bold text-navy">Safety Status</td><td className="px-6 py-4">Extremely safe country with locked, CCTV-guarded, biometric hostels</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section: Why Study MBBS in Kyrgyzstan */}
                <section id="why-kyrgyzstan" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Why Study MBBS in Kyrgyzstan? Why Indian Students Prefer It</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    India currently suffers from a massive disparity between NEET aspirants and available government MBBS seats. With private Indian medical colleges charging anywhere from ₹60 Lakhs to ₹1.2 Crore, studying abroad is the only viable alternative for middle-class families. Among foreign destinations, Kyrgyzstan holds a premier spot for the following reasons:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                        <Building2 size={24} />
                      </div>
                      <h4 className="font-bold text-navy mb-2">Government State Universities</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Unlike other countries with hundreds of newly built, private medical factories, WCIEC partners with established government colleges (like Osh State and JASU) that host decades-old infrastructures and highly experienced state-salaried professors.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-green-50 text-accent flex items-center justify-center mb-4">
                        <DollarSign size={24} />
                      </div>
                      <h4 className="font-bold text-navy mb-2">Affordable Tuition Structures</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Tuition packages are highly subsidized by the state government, keeping fees lower than Russian or European counterparts without compromising on teaching hours or clinical exposure.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                        <Globe size={24} />
                      </div>
                      <h4 className="font-bold text-navy mb-2">100% English Instruction</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        The entire academic syllabus, examinations, viva, and textbooks are in English. Students do not need to study the local language to pass their academic sessions (unlike bilingual medical colleges in Russia).
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                        <Stethoscope size={24} />
                      </div>
                      <h4 className="font-bold text-navy mb-2">Aligned with NExT & FMGE</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Curriculums are regularly updated to mirror the medical topics tested in the Indian licensing exams (FMGE/NExT), with specialized training faculty visiting the campuses from India.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section: Pros vs Cons */}
                <section id="pros-cons" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Advantages & Disadvantages of MBBS in Kyrgyzstan</h3>
                  <p className="text-gray-600">We believe in offering honest and transparent guidance. While the benefits are huge, parents must also be aware of the challenges to help their child adjust:</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Advantages */}
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 space-y-4">
                      <h4 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                        <CheckCircle2 className="text-emerald-600" /> Key Advantages
                      </h4>
                      <ul className="space-y-3 text-sm text-emerald-950">
                        <li className="flex gap-2"><span>✔</span> <span><strong>Direct Admission:</strong> No separate entry tests like IELTS, TOEFL, or SAT are required.</span></li>
                        <li className="flex gap-2"><span>✔</span> <span><strong>High Safety:</strong> Low crime rate, dedicated campus hostels, and zero tolerance for harassment.</span></li>
                        <li className="flex gap-2"><span>✔</span> <span><strong>Low Living Cost:</strong> Pocket expenses mirror tier-2 cities in India (approx. ₹10k per month).</span></li>
                        <li className="flex gap-2"><span>✔</span> <span><strong>Authentic Indian Mess:</strong> Both vegetarian and non-vegetarian food options are cooked daily by Indian cooks.</span></li>
                        <li className="flex gap-2"><span>✔</span> <span><strong>Short Flights:</strong> Flight time from Delhi to Bishkek/Osh is just 3.5 to 4 hours.</span></li>
                      </ul>
                    </div>

                    {/* Disadvantages */}
                    <div className="bg-amber-50/50 border border-amber-100 rounded-3xl p-8 space-y-4">
                      <h4 className="text-xl font-bold text-amber-800 flex items-center gap-2">
                        <AlertTriangle className="text-amber-600" /> Challenges & Disadvantages
                      </h4>
                      <ul className="space-y-3 text-sm text-amber-950">
                        <li className="flex gap-2"><span>⚠</span> <span><strong>Harsh Cold Winters:</strong> Temperatures drop below 0°C from Nov to Feb. Proper winter gear is mandatory.</span></li>
                        <li className="flex gap-2"><span>⚠</span> <span><strong>Language Barrier Off-Campus:</strong> While classes are in English, the public speaks Kyrgyz and Russian. Basic Russian learning is needed.</span></li>
                        <li className="flex gap-2"><span>⚠</span> <span><strong>Clinical Practice Limitations:</strong> Students must interact with patients in Russian during clinical years. Translators are provided.</span></li>
                        <li className="flex gap-2"><span>⚠</span> <span><strong>Self-Study Needed:</strong> High performance in NExT/FMGE requires consistent study and self-discipline outside lectures.</span></li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section: Complete Fee Breakdown */}
                <section id="fee-breakdown" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">MBBS in Kyrgyzstan Fees Structure 2026-2027</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600">
                    Understanding the total cost is essential for budgeting. Below are the transparent fee breakdowns for the top 5 medical universities represented by WCIEC. *Note: Tuition fees are subject to minor adjustments based on exchange rates and university guidelines.*
                  </p>

                  <div className="space-y-8">
                    {universities.map((uni, idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                        <div className="flex flex-wrap justify-between items-center gap-4 border-b border-gray-100 pb-3">
                          <div>
                            <span className="bg-medical/15 text-medical text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                              {uni.type}
                            </span>
                            <h4 className="text-xl font-bold text-navy font-poppins">{uni.name}</h4>
                          </div>
                          <Link href={uni.link} className="text-sm font-semibold text-medical hover:underline flex items-center gap-1">
                            View University Profile <ChevronRight size={14} />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center py-2">
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-400 font-semibold block mb-1">Established</span>
                            <strong className="text-navy">{uni.est}</strong>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-400 font-semibold block mb-1">Tuition / Year</span>
                            <strong className="text-navy">{uni.tuition}</strong>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-400 font-semibold block mb-1">Hostel / Year</span>
                            <strong className="text-navy">{uni.hostel}</strong>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                            <span className="text-xs text-gray-400 font-semibold block mb-1">Total Package</span>
                            <strong className="text-emerald-600">{uni.total}</strong>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 col-span-2 md:col-span-1">
                            <span className="text-xs text-gray-400 font-semibold block mb-1">Duration</span>
                            <strong className="text-navy text-xs block">{uni.duration}</strong>
                          </div>
                        </div>

                        <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 text-xs text-gray-600 space-y-1">
                          <p>⭐ <strong>Total Budget Includes:</strong> 6 years of tuition, university hostel stay, visa process paperwork, and medical screening on campus.</p>
                          <p>⚠️ <strong>Exclusions:</strong> Indian Mess / food fees (approx. USD 1,000/yr) and one-way flight tickets from New Delhi to Kyrgyzstan.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Medical Universities Spotlight */}
                <section id="medical-universities" className="scroll-mt-24 space-y-8">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Spotlight: Top 5 Medical Universities in Kyrgyzstan</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />

                  {/* University 1 */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-4">
                    <h4 className="text-2xl font-bold text-navy font-poppins">1. Osh State University (International Medical Faculty)</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Osh State University is Kyrgyzstan’s oldest and most prestigious state institution, founded in 1939. Its International Medical Faculty has been training international students for over 30 years and hosts the largest Indian student community (1,000+ students on campus).OSU provides clinical rotations in its own network of 15 government hospitals, giving students unmatched clinical practice. 
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-xs font-semibold text-gray-500 pt-2">
                      <span className="flex items-center gap-1.5"><MapPin size={14} className="text-medical" /> Location: Osh City</span>
                      <span className="flex items-center gap-1.5"><Award size={14} className="text-medical" /> Accreditation: WHO, NMC, WDOMS</span>
                      <span className="flex items-center gap-1.5"><Building2 size={14} className="text-medical" /> Type: State Government</span>
                    </div>
                  </div>

                  {/* University 2 */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-4">
                    <h4 className="text-2xl font-bold text-navy font-poppins">2. Jalal Abad State University (JASU)</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Established in 1993, Jalal Abad State University (JASU) is a premier government state institution located in Jalal-Abad. JASU has a highly structured medical syllabus focusing on practical lab sessions, and boasts its own dedicated block of secure campus hostels for girls. It is widely recognized for its robust FMGE/NExT preparation modules.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-xs font-semibold text-gray-500 pt-2">
                      <span className="flex items-center gap-1.5"><MapPin size={14} className="text-medical" /> Location: Jalal-Abad City</span>
                      <span className="flex items-center gap-1.5"><Award size={14} className="text-medical" /> Accreditation: WHO, NMC, WDOMS</span>
                      <span className="flex items-center gap-1.5"><Building2 size={14} className="text-medical" /> Type: State Government</span>
                    </div>
                  </div>

                  {/* University 3 */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-4">
                    <h4 className="text-2xl font-bold text-navy font-poppins">3. Jalal-Abad International University (JAIU)</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Jalal-Abad International University is a premium private medical faculty that has quickly grown in popularity since its founding in 2015. The campus features state-of-the-art interactive teaching modules, virtual 3D anatomy dissection tables, and high-tech laboratories designed to keep pace with modern European teaching methods.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-xs font-semibold text-gray-500 pt-2">
                      <span className="flex items-center gap-1.5"><MapPin size={14} className="text-medical" /> Location: Jalal-Abad City</span>
                      <span className="flex items-center gap-1.5"><Award size={14} className="text-medical" /> Accreditation: Ministry of Health (KG), WHO</span>
                      <span className="flex items-center gap-1.5"><Building2 size={14} className="text-medical" /> Type: Private Accredited</span>
                    </div>
                  </div>

                  {/* University 4 */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-4">
                    <h4 className="text-2xl font-bold text-navy font-poppins">4. Central Asian International Medical University (CAIMU)</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Central Asian International Medical University (CAIMU) in Jalal-Abad is highly favored by students looking for a low-cost, budget-friendly medical program. Despite its highly competitive fee structure, CAIMU features modern campus blocks, dedicated Indian mess, and customized study plans to prepare students for licensing exams.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-xs font-semibold text-gray-500 pt-2">
                      <span className="flex items-center gap-1.5"><MapPin size={14} className="text-medical" /> Location: Jalal-Abad City</span>
                      <span className="flex items-center gap-1.5"><Award size={14} className="text-medical" /> Accreditation: WHO Listed, NMC Approved</span>
                      <span className="flex items-center gap-1.5"><Building2 size={14} className="text-medical" /> Type: Private Accredited</span>
                    </div>
                  </div>

                  {/* University 5 */}
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm space-y-4">
                    <h4 className="text-2xl font-bold text-navy font-poppins">5. Osh International Medical University (OIMU)</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Osh International Medical University represents the modern educational face of Osh City. Established in 2019, OIMU offers digital clinical classrooms, simulation centers with electronic mannequin patients, and highly structured student living blocks under direct supervisor custody.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-xs font-semibold text-gray-500 pt-2">
                      <span className="flex items-center gap-1.5"><MapPin size={14} className="text-medical" /> Location: Osh City</span>
                      <span className="flex items-center gap-1.5"><Award size={14} className="text-medical" /> Accreditation: WHO Listed, NMC Approved</span>
                      <span className="flex items-center gap-1.5"><Building2 size={14} className="text-medical" /> Type: Private Accredited</span>
                    </div>
                  </div>
                </section>

                {/* Section: Admission Process */}
                <section id="admission-process" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Admission Process: Step-by-Step Guide</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600">
                    Applying through WCIEC is completely seamless. Below is the exact step-by-step procedure:
                  </p>

                  <div className="space-y-6 relative border-l border-gray-200 pl-6 ml-4">
                    {[
                      { step: "Step 1", title: "Free Profile Counselling", desc: "Visit the WCIEC Delhi office or speak to our senior academic counselors online to analyze your eligibility, marks, and NEET status to match the right university based on your budget." },
                      { step: "Step 2", title: "Application & Documentation", desc: "Submit scanned copies of your 10th and 12th marksheets, NEET qualified scorecard, and basic page scans of your passport. WCIEC will apply on your behalf to secure the official University Offer Letter within 3-5 days." },
                      { step: "Step 3", title: "Ministry Invitation Request", desc: "Once the admission offer is accepted, WCIEC processes your documents to secure the official Visa Invitation Letter issued by the Ministry of Foreign Affairs of Kyrgyzstan. This stage takes 15 to 20 days." },
                      { step: "Step 4", title: "Student Visa Stamping", desc: "After receiving the invitation, WCIEC submits your passport to the Embassy of Kyrgyzstan in New Delhi for consular stamping. We manage the translation, notary, and apostille of your certificates." },
                      { step: "Step 5", title: "Pre-Departure Briefing & Departure", desc: "WCIEC hosts a comprehensive briefing session for parents and students in Delhi. We book group flight tickets, arrange forex cards, organize baggage tags, and send dedicated counselors to fly along with the students." },
                      { step: "Step 6", title: "On-Ground Reception in Kyrgyzstan", desc: "Our local WCIEC managers receive students at Bishkek/Osh airport, arrange comfortable coaches to the university campus, coordinate hostel allotments, manage SIM card cards, and assist with registration." }
                    ].map((item, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-medical border-2 border-white" />
                        <span className="text-xs text-medical font-bold uppercase tracking-wider block mb-1">{item.step}</span>
                        <h4 className="text-lg font-bold text-navy mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: Eligibility & Documents */}
                <section id="eligibility" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Eligibility Criteria & Required Documents</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Eligibility */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                      <h4 className="text-lg font-bold text-navy flex items-center gap-2">
                        <UserCheck className="text-medical" /> Academic Eligibility (NMC Mandated)
                      </h4>
                      <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex gap-2"><span>•</span> <span><strong>Age:</strong> Must complete 17 years of age by December 31st of the admission year.</span></li>
                        <li className="flex gap-2"><span>•</span> <span><strong>12th Marks:</strong> Minimum 50% aggregate in Physics, Chemistry, and Biology (PCB) in 10+2 standard for General category (40% for SC/ST/OBC).</span></li>
                        <li className="flex gap-2"><span>•</span> <span><strong>NEET Qualification:</strong> Mandatory. Must have qualified the NEET-UG exam in the current year or within the last two years.</span></li>
                        <li className="flex gap-2"><span>•</span> <span><strong>No IELTS/TOEFL:</strong> Language proficiency exams are not required.</span></li>
                      </ul>
                    </div>

                    {/* Documents */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                      <h4 className="text-lg font-bold text-navy flex items-center gap-2">
                        <FileText className="text-medical" /> Documents Required Checklist
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex gap-2"><span>✔</span> <span>Original Passport (valid for at least 18 months)</span></li>
                        <li className="flex gap-2"><span>✔</span> <span>10th Marksheet & Passing Certificate (Original + Copy)</span></li>
                        <li className="flex gap-2"><span>✔</span> <span>12th Marksheet & Passing Certificate (Original + Copy)</span></li>
                        <li className="flex gap-2"><span>✔</span> <span>NEET-UG Qualified Scorecard</span></li>
                        <li className="flex gap-2"><span>✔</span> <span>Birth Certificate (English translated or notary verified)</span></li>
                        <li className="flex gap-2"><span>✔</span> <span>Medical Fitness Certificate (detailing blood group & HIV test)</span></li>
                        <li className="flex gap-2"><span>✔</span> <span>12 Passport-size photographs (White background, matte finish)</span></li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section: Student Visa Process */}
                <section id="visa-process" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Kyrgyzstan Student Visa Process for Indian Students</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    Indian students planning to study in Kyrgyzstan require an official **Student Visa**. WCIEC Delhi directly handles the visa stamping process with the Embassy of the Kyrgyz Republic in New Delhi.
                  </p>
                  
                  <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                    <h4 className="font-bold text-navy">Important Consolidated Details for Visa Approval:</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li><strong>Visa Type:</strong> Student Visa (valid initially for 1 year, extended annually by the university’s foreign student relations office).</li>
                      <li><strong>Ministry Consent:</strong> A visa invitation can only be generated through the Ministry of Foreign Affairs (MFA) in Bishkek. No local travel visa works for study admissions.</li>
                      <li><strong>Embassy Stamping:</strong> Once the Consul general validates the MFA inviation list, passports are stamped. WCIEC manages the physical collection and delivery.</li>
                    </ul>
                  </div>
                </section>

                {/* Section: Living Cost & Hostels */}
                <section id="living-hostel" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Living Cost, Hostel Life & Indian Food Availability</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    Student life in Kyrgyzstan is comfortable, budget-friendly, and very supportive of South Asian lifestyles.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-navy mb-2 flex items-center gap-1.5"><Building2 size={16} className="text-medical" /> Hostel Quality</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Hostels are provided by universities and are fully furnished with beds, study tables, chairs, pillows, and cupboards. Every room is centrally heated to withstand sub-zero winters.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-navy mb-2 flex items-center gap-1.5"><Coffee size={16} className="text-medical" /> Indian Canteen</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Top universities feature dedicated Indian messes serving complete vegetarian and non-vegetarian food. Standard dishes like roti, dal, rice, and paneer are prepared daily by Indian chefs.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-navy mb-2 flex items-center gap-1.5"><Globe size={16} className="text-medical" /> Monthly Expenses</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        A student typically spends USD 100 to USD 150 per month on groceries, internet plans, laundry, transport, and utilities, which is highly affordable.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section: Academic Curriculum & Clinical Exposure */}
                <section id="academic-curriculum" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Academic Curriculum, Clinical Exposure & Internship</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    The MD Physician course duration in Kyrgyzstan is 6 years (5 Years of Core Academic/Clinical Classrooms + 1 Year of Clinical Internship). The curriculum follows a semester pattern matching international guidelines.
                  </p>

                  <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                    <h4 className="font-bold text-navy">Curriculum Split by Year:</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li><strong>Years 1 & 2:</strong> Focuses heavily on pre-clinical subjects: Human Anatomy, Physiology, Medical Biochemistry, Histology, Pathology, and Microbiology. Students work in advanced simulation labs.</li>
                      <li><strong>Years 3, 4 & 5:</strong> Focuses on para-clinical and clinical subjects: Pharmacology, Internal Medicine, Surgery, Pediatrics, Gynecology, Forensic Medicine, and Clinical Pathology. Practical clinical rotations begin in affiliated state hospitals.</li>
                      <li><strong>Year 6 (Internship):</strong> A 12-month compulsory clinical internship. Students work in internal medicine, emergency care, gynecology, and surgical units to gain hands-on patient experience under senior supervisors.</li>
                    </ul>
                  </div>
                </section>

                {/* Section: NMC Guidelines & FMGL 2021 compliance */}
                <section id="nmc-regulations" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">NMC Guidelines Compliance: FMGL Regulations 2021</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    To practice in India after studying MBBS abroad, you must strictly comply with the National Medical Commission's **Foreign Medical Graduate Licentiate (FMGL) Regulations 2021**. The universities recommended by WCIEC Delhi perfectly fulfill these mandates:
                  </p>

                  <div className="bg-red-50/50 border border-red-200 rounded-3xl p-8 space-y-4">
                    <h4 className="text-lg font-bold text-red-800 flex items-center gap-2">
                      <ShieldCheck className="text-red-600" /> Crucial NMC Compliance Checklist:
                    </h4>
                    <ul className="space-y-3 text-sm text-red-950">
                      <li><strong>1. Course Duration:</strong> Minimum 54 months (4.5 years) of academic studies. *Kyrgyzstan programs are 60 months (5 years) of academics, fully satisfying the rule.*</li>
                      <li><strong>2. Clinical Internship:</strong> Minimum 12-month internship at the same foreign medical university. *Kyrgyzstan’s 6th year is dedicated to a mandatory clinical internship.*</li>
                      <li><strong>3. Medium of Instruction:</strong> Must be 100% English. WCIEC only registers students in English-medium programs.</li>
                      <li><strong>4. License to Practice:</strong> FMGs must be registered with the professional regulatory body of the country of study (eligible to practice medicine there). Kyrgyzstan universities comply with this requirement.</li>
                    </ul>
                  </div>
                </section>

                {/* Section: FMGE & NExT analysis */}
                <section id="fmge-next" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">FMGE & NExT Exam Analysis</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    To practice medicine in India, FMGs must clear a licensing exam. The Foreign Medical Graduates Examination (FMGE) is transitionally being replaced by the **National Exit Test (NExT)**.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The FMGE/NExT pass rates for students returning from Kyrgyzstan depend heavily on their dedication and utilizing the coaching facilities. WCIEC’s partner universities host on-campus prep classes, inviting senior doctors from India to conduct intensive reviews during the semesters. FMGs who utilize these academic facilities clear their screening tests on their first attempt.
                  </p>
                </section>

                {/* Section: Careers & Scholarships */}
                <section id="career-scholarships" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Career Opportunities & Scholarships</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Career Opportunities */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                      <h4 className="font-bold text-navy flex items-center gap-1.5"><Briefcase className="text-medical" /> Career Paths After Graduation</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Clear NExT/FMGE to practice as a licensed doctor in India.</li>
                        <li>• Prepare for USMLE (USA) or PLAB/UKMLA (UK) to practice in western countries.</li>
                        <li>• Pursue medical administration or healthcare consultancy.</li>
                        <li>• Practice clinical medicine or open private clinics in Kyrgyzstan.</li>
                      </ul>
                    </div>

                    {/* Scholarships */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-4">
                      <h4 className="font-bold text-navy flex items-center gap-1.5"><Award className="text-medical" /> Scholarships & Waivers</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        While full-tuition waivers do not exist, universities award merit-based stipends or minor tuition discounts to students who score a GPA of 4.5+ (out of 5.0) in their end-of-semester examinations.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section: Admission Timeline */}
                <section id="admission-timeline" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Admission Timeline 2026-2027</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600">
                    Applying early ensures you secure a seat in your preferred university. Below is the general timeline:
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-white p-4 rounded-2xl border border-gray-200">
                      <span className="text-xs text-gray-400 font-bold block mb-1">May – June</span>
                      <strong className="text-navy text-sm block font-poppins">Admission Open & Application</strong>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-200">
                      <span className="text-xs text-gray-400 font-bold block mb-1">July – August</span>
                      <strong className="text-navy text-sm block font-poppins">Invitation Letter Request</strong>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-200">
                      <span className="text-xs text-gray-400 font-bold block mb-1">August – September</span>
                      <strong className="text-navy text-sm block font-poppins">Visa Stamping & Booking</strong>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-gray-200">
                      <span className="text-xs text-gray-400 font-bold block mb-1">September – October</span>
                      <strong className="text-navy text-sm block font-poppins">Departure & Classes Start</strong>
                    </div>
                  </div>
                </section>

                {/* Section: Country Comparisons */}
                <section id="country-comparisons" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">MBBS in Kyrgyzstan vs. Other Countries</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600">How does Kyrgyzstan compare to other popular MBBS abroad destinations? Review the comparison table below:</p>

                  <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-gray-600 min-w-[800px]">
                        <thead className="bg-navy text-white font-poppins font-bold uppercase">
                          <tr>
                            <th className="px-6 py-4">Country</th>
                            <th className="px-6 py-4">Duration</th>
                            <th className="px-6 py-4">Average Budget</th>
                            <th className="px-6 py-4">Medium of Instruction</th>
                            <th className="px-6 py-4">NEET Required</th>
                            <th className="px-6 py-4">Key Highlight</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-navy">Kyrgyzstan</td>
                            <td className="px-6 py-4">6 Years (5+1)</td>
                            <td className="px-6 py-4 font-semibold text-emerald-600">₹15L - ₹25L</td>
                            <td className="px-6 py-4">100% English</td>
                            <td className="px-6 py-4">Yes</td>
                            <td className="px-6 py-4">Lowest Cost government faculties</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-navy"><Link href="/mbbs-in-russia/" className="hover:underline text-medical">Russia</Link></td>
                            <td className="px-6 py-4">6 Years</td>
                            <td className="px-6 py-4 font-semibold text-emerald-600">₹25L - ₹50L</td>
                            <td className="px-6 py-4">Bilingual/English</td>
                            <td className="px-6 py-4">Yes</td>
                            <td className="px-6 py-4">Higher tuition, bilingual blocks</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-navy"><Link href="/mbbs-in-kazakhstan/" className="hover:underline text-medical">Kazakhstan</Link></td>
                            <td className="px-6 py-4">6 Years (5+1)</td>
                            <td className="px-6 py-4 font-semibold text-emerald-600">₹22L - ₹32L</td>
                            <td className="px-6 py-4">100% English</td>
                            <td className="px-6 py-4">Yes</td>
                            <td className="px-6 py-4">Highly structured modern campuses</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-navy"><Link href="/mbbs-in-uzbekistan/" className="hover:underline text-medical">Uzbekistan</Link></td>
                            <td className="px-6 py-4">6 Years</td>
                            <td className="px-6 py-4 font-semibold text-emerald-600">₹20L - ₹28L</td>
                            <td className="px-6 py-4">100% English</td>
                            <td className="px-6 py-4">Yes</td>
                            <td className="px-6 py-4">Rapidly expanding medical labs</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-navy"><Link href="/mbbs-in-georgia/" className="hover:underline text-medical">Georgia</Link></td>
                            <td className="px-6 py-4">6 Years</td>
                            <td className="px-6 py-4 font-semibold text-emerald-600">₹30L - ₹45L</td>
                            <td className="px-6 py-4">100% English</td>
                            <td className="px-6 py-4">Yes</td>
                            <td className="px-6 py-4">European aligned, higher living costs</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-navy"><Link href="/mbbs-in-nepal/" className="hover:underline text-medical">Nepal</Link></td>
                            <td className="px-6 py-4">5.5 Years</td>
                            <td className="px-6 py-4 font-semibold text-emerald-600">₹45L - ₹60L</td>
                            <td className="px-6 py-4">English/Hindi</td>
                            <td className="px-6 py-4">Yes</td>
                            <td className="px-6 py-4">Very expensive, close proximity</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-navy"><Link href="/mbbs-in-bangladesh/" className="hover:underline text-medical">Bangladesh</Link></td>
                            <td className="px-6 py-4">5 Years</td>
                            <td className="px-6 py-4 font-semibold text-emerald-600">₹35L - ₹48L</td>
                            <td className="px-6 py-4">100% English</td>
                            <td className="px-6 py-4">Yes</td>
                            <td className="px-6 py-4">High FMGE pass rate, high tuition</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-bold text-navy"><Link href="/mbbs-in-china/" className="hover:underline text-medical">China</Link></td>
                            <td className="px-6 py-4">6 Years</td>
                            <td className="px-6 py-4 font-semibold text-emerald-600">₹28L - ₹40L</td>
                            <td className="px-6 py-4">English/Chinese</td>
                            <td className="px-6 py-4">Yes</td>
                            <td className="px-6 py-4">Difficult visa limits, strict regulations</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section: Who Should Choose vs Avoid */}
                <section id="who-should-choose" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Who Should Choose Kyrgyzstan & Who Should Avoid It</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100/50">
                      <h4 className="font-bold text-emerald-800 mb-3">Choose Kyrgyzstan If:</h4>
                      <ul className="space-y-3 text-sm text-emerald-950">
                        <li>✔ Your budget is limited to ₹18 Lakhs - ₹25 Lakhs.</li>
                        <li>✔ You want a direct state university option (like Osh State/JASU).</li>
                        <li>✔ You want to avoid learning a secondary language (like Russian/Chinese) for your primary lectures.</li>
                        <li>✔ You prioritize safety and a robust Indian community support system.</li>
                      </ul>
                    </div>

                    <div className="bg-rose-50/30 p-6 rounded-3xl border border-rose-100/50">
                      <h4 className="font-bold text-rose-800 mb-3">Avoid Kyrgyzstan If:</h4>
                      <ul className="space-y-3 text-sm text-rose-950">
                        <li>❌ You cannot adjust to cold climates dropping to -10°C in winter.</li>
                        <li>❌ You expect luxury private resort-like campuses (most universities are historic government faculties).</li>
                        <li>❌ You are looking for an easy route without studying for licensing exams (FMGE/NExT requires hard work).</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section: Common Mistakes */}
                <section id="mistakes-avoid" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Common Mistakes Students Make When Applying</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  
                  <div className="bg-white border border-gray-200 rounded-3xl p-8 space-y-4">
                    <h4 className="font-bold text-navy flex items-center gap-1.5"><AlertTriangle className="text-medical animate-bounce" /> Warning Alert:</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li><strong>1. Trusting Sub-Standard Agents:</strong> Many agents offer non-accredited private universities that fail NMC guidelines. Always verify the university's accreditation on WDOMS.</li>
                      <li><strong>2. Enrolling in Bilingual Courses:</strong> Some universities teach the first 3 years in English and last 3 years in Russian. The NMC FMGL 2021 explicitly rejects bilingual degrees. Verify the program is 100% English.</li>
                      <li><strong>3. Waiting for NEET Counselling Completion:</strong> Indian counseling runs until October. By then, the seats in top Kyrgyz government colleges are filled. Apply early using your NEET score.</li>
                    </ul>
                  </div>
                </section>

                {/* Section: Parent's Guide */}
                <section id="parents-guide" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Parent's Guide: Safety, Support & Finance</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600 leading-relaxed">
                    We understand that sending a child abroad is a major financial and emotional step. Here are key points for parents:
                  </p>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li>• <strong>Safety First:</strong> Hostels have strict curfew timings, separate boys/girls blocks, biometric entries, and CCTV cameras monitored 24/7. WCIEC counselors live in Kyrgyzstan to assist in emergencies.</li>
                    <li>• <strong>Financial Planning:</strong> Fees are paid directly to the university’s official bank account in USD. WCIEC provides detailed bank structures to help secure education loans from national banks in India.</li>
                    <li>• <strong>Constant Contact:</strong> Flight time is only 3.5 to 4 hours, and high-speed Wi-Fi is available in hostels, making video calls easy.</li>
                  </ul>
                </section>

                {/* Section: Collapsible FAQ Section (52 questions) */}
                <section id="faqs" className="scroll-mt-24 space-y-6">
                  <h3 className="text-2xl font-bold text-navy font-poppins">Frequently Asked Questions (FAQs)</h3>
                  <div className="w-20 h-1 bg-medical rounded-full mb-6" />
                  <p className="text-gray-600">Click on any question below to see the detailed answer:</p>

                  <div className="space-y-4">
                    {faqsList.map((faq, idx) => (
                      <details key={idx} className="group bg-white border border-gray-200 rounded-2xl transition-all duration-300">
                        <summary className="flex justify-between items-center p-6 font-bold font-poppins text-navy cursor-pointer list-none select-none text-base md:text-lg">
                          <span className="flex items-center gap-3">
                            <HelpCircle className="text-medical shrink-0" size={20} />
                            {faq.question}
                          </span>
                          <span className="text-medical font-bold transition-transform group-open:rotate-180 duration-300">
                            ▼
                          </span>
                        </summary>
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>

                {/* Section: Conclusion & Footer CTA */}
                <section className="bg-navy text-white rounded-3xl p-8 md:p-12 space-y-6 relative overflow-hidden text-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-medical/10 rounded-full blur-3xl" />
                  <h3 className="text-2xl md:text-3xl font-bold font-poppins">Secure Your MBBS Seat in Kyrgyzstan Today</h3>
                  <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Don’t let high costs or lack of seats in India stop your medical career. Speak to a professional counselor at WCIEC Delhi to finalize your university choice and secure direct admission today.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4 pt-2">
                    <a href="#apply" className="bg-medical hover:bg-medical/90 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 transform duration-300 text-sm">
                      Apply Online Now
                    </a>
                    <a href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20in%20Kyrgyzstan." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 transform duration-300 flex items-center gap-2 text-sm">
                      Chat on WhatsApp
                    </a>
                  </div>
                </section>

              </div>

            </div>
          </div>
        </article>
      </main>
    </>
  );
}
