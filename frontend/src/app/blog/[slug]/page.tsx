import React from "react";
import Link from "next/link";
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  HelpCircle, 
  ChevronRight,
  ShieldCheck,
  Award,
  PhoneCall,
  GraduationCap
} from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  reviewer: string;
  category: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const BLOG_DATA: Record<string, BlogPost> = {
  "why-kyrgyzstan-top-choice-mbbs": {
    title: "Why Kyrgyzstan is the Top Choice for Indian MBBS Students in 2026",
    excerpt: "Kyrgyzstan offers high-quality medical education at a fraction of the cost in India. Learn about the top universities and admission process.",
    date: "May 10, 2026",
    author: "WCIEC Editorial Team",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "MBBS Abroad",
    seoTitle: "Why Kyrgyzstan is the Top Choice for Indian MBBS Students in 2026",
    seoDescription: "Discover why Kyrgyzstan remains the leading destination for Indian medical students in 2026. Fees, NMC rules, and English medium benefits.",
    introduction: "Every year, thousands of Indian medical aspirants choose to pursue their MBBS in Kyrgyzstan. With the high competition and fee structures of private medical colleges in India, Kyrgyzstan provides a fully accredited, government-subsidized, and globally recognized alternative.",
    sections: [
      {
        heading: "1. Affordable Fee Structure (INR 15-20 Lakhs Package)",
        content: [
          "One of the primary reasons students select Kyrgyzstan is the highly cost-effective budget. Tuition fees across top government medical universities like Osh State and Jalal-Abad State start at just USD 3,200 to 4,200 per year.",
          "The overall package, including modern hostels, fresh Indian food messes, and administrative visa processing, fits comfortably within INR 15 to 20 Lakhs for the entire 5-year course duration. This allows middle-class families to support their children's doctor dreams without massive financial stress."
        ]
      },
      {
        heading: "2. 100% English Medium Curriculum",
        content: [
          "Bilingual courses are a major problem in many foreign countries, where students must study in local languages during clinical rotations.",
          "Kyrgyzstan medical universities offer a fully English-medium curriculum. All lectures, examinations, anatomy lab registers, and clinical journals are conducted strictly in English, allowing Indian students to focus completely on their medical training."
        ]
      },
      {
        heading: "3. Direct Government Accreditations",
        content: [
          "All top universities are fully registered and approved by the World Health Organization (WHO), FAIMER, and satisfy the latest National Medical Commission (NMC) guidelines in India.",
          "This ensures that after completing the 5-year course and mandatory internship, students are fully qualified to appear for the National Exit Test (NExT) in India to secure licensing and pursue postgraduate studies."
        ]
      }
    ],
    faqs: [
      {
        question: "Is the degree from Kyrgyzstan valid in India?",
        answer: "Yes, the medical degree (MD Physician equivalent to MBBS) awarded by accredited government universities in Kyrgyzstan is fully valid in India, provided the candidate qualifies for NEET and passes the NExT/FMGE licensing exam."
      },
      {
        question: "Is Kyrgyzstan safe for girls?",
        answer: "Yes, Kyrgyzstan is highly hospitable and secure for international students. University hostels feature round-the-clock security guards, CCTV surveillance, and strict entry-exit rules."
      }
    ]
  },
  "neet-2026-mbbs-abroad-guide": {
    title: "NEET UG 2026: Everything You Need to Know About Qualifying for MBBS Abroad",
    excerpt: "Is NEET mandatory for MBBS abroad? Discover the latest regulations and how your score impacts your admission.",
    date: "May 08, 2026",
    author: "Dr. Rajesh Sharma",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "NEET Guidance",
    seoTitle: "NEET UG 2026: Qualifying Marks & Guidelines for MBBS Abroad",
    seoDescription: "Is NEET mandatory for studying MBBS abroad? Get complete details on the latest NMC guidelines, qualification validity, and rules for 2026.",
    introduction: "For Indian students aiming to study medicine abroad, qualifying for the National Eligibility cum Entrance Test (NEET-UG) is a mandatory milestone. The National Medical Commission has defined strict guidelines linking NEET eligibility to foreign registrations.",
    sections: [
      {
        heading: "1. Is NEET Mandatory to Study MBBS Abroad?",
        content: [
          "Yes, as per the official notification issued by the NMC, any Indian citizen wishing to obtain a primary medical qualification from a university outside India must qualify for NEET-UG.",
          "If a student studies MBBS abroad without qualifying for NEET, they will be permanently barred from sitting for the licensing exam (FMGE/NExT) in India, meaning they can never practice medicine in India."
        ]
      },
      {
        heading: "2. Validity of NEET Scorecard for Foreign Admissions",
        content: [
          "To accommodate different admission cycles globally, the NMC has extended the validity of the NEET scorecard. A qualified NEET score is valid for a period of three (3) years from the date of the declaration of results, solely for admission to an MBBS course abroad.",
          "This allows students who qualified in 2024 or 2025 to comfortably secure admission for the 2026 intake without re-appearing for the exam."
        ]
      },
      {
        heading: "3. What are the NEET Qualifying Marks?",
        content: [
          "The NEET qualifying cutoff is set at the 50th percentile for General category candidates and the 40th percentile for SC/ST/OBC candidates.",
          "Students do not need to score high ranks to secure admission abroad. Achieving the minimum qualifying percentile is sufficient to satisfy the NMC guidelines and secure an international seat."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I practice in India if I fail NEET but pass MBBS abroad?",
        answer: "No. Qualifying for NEET before departure is a strict legal requirement. Failing to qualify makes you ineligible to register as a practitioner or sit for the licensing exam in India."
      },
      {
        question: "What is the NEET validity period for MBBS abroad?",
        answer: "The NEET scorecard is valid for up to three years from the date of result declaration solely for international medical admissions."
      }
    ]
  },
  "mbbs-abroad-after-neet": {
    title: "MBBS Abroad After NEET 2026 | Complete Guide",
    excerpt: "Qualified NEET but couldn't get a government seat in India? Here is your complete guide to studying MBBS abroad in 2026.",
    date: "May 12, 2026",
    author: "WCIEC Admission Counsel",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "MBBS Abroad",
    seoTitle: "MBBS Abroad After NEET 2026: Complete Admission Guide",
    seoDescription: "Step-by-step guidance on securing an MBBS seat abroad after qualifying for NEET 2026. Affordable universities, eligibility, and visa assistance.",
    introduction: "Scoring the qualifying cutoff in NEET-UG 2026 is a major milestone. If you couldn't secure a high-demand government seat in India and private college fees are beyond your reach, studying MBBS abroad is your logical career pathway.",
    sections: [
      {
        heading: "1. The supply-demand challenge in Indian Medical Admissions",
        content: [
          "With over 24 Lakh students appearing for NEET UG, the competition in India is intense. Government medical seats are limited, and private medical college fees can range from INR 60 Lakhs to over 1 Crore.",
          "Studying MBBS abroad provides a refreshing alternative, allowing qualified students to secure direct government university seats for less than a third of the cost in India."
        ]
      },
      {
        heading: "2. Selecting the Best Country After NEET",
        content: [
          "Popular choices like Kyrgyzstan, Russia, Georgia, and Kazakhstan offer government-recognized faculties that comply with NMC mandates.",
          "Kyrgyzstan has emerged as a premium hub due to its close geographical proximity, English instruction, direct 5-year course structure, and affordable overall pack."
        ]
      },
      {
        heading: "3. Direct Admission Process With WCIEC Delhi",
        content: [
          "Our expert consultants at Laxmi Nagar, New Delhi handle the entire application. From translating academic certificates, securing official ministry invitations, processing student visas, to organizing group travel with local coordinators, we support you at every single step."
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need to pay any donation for MBBS abroad?",
        answer: "No, top government universities abroad do not charge any donation. You only pay the direct tuition fees listed by the universities."
      },
      {
        question: "Is the NExT exam applicable to foreign graduates?",
        answer: "Yes, the National Exit Test (NExT) is mandatory for both Indian and foreign medical graduates wishing to obtain clinical registration in India."
      }
    ]
  },
  "mbbs-in-kyrgyzstan-fees": {
    title: "MBBS in Kyrgyzstan Fees 2026 for Indian Students",
    excerpt: "Analyze actual cost breakdowns, tuition, hostel packages, and dining mess fees for MBBS in Kyrgyzstan 2026.",
    date: "May 14, 2026",
    author: "WCIEC Finance Committee",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "Kyrgyzstan",
    seoTitle: "MBBS in Kyrgyzstan Fees 2026: Cost & Package Details",
    seoDescription: "Get the complete fee structure for studying MBBS in Kyrgyzstan in 2026. Tuition fees, hostel charges, food mess, and travel costs.",
    introduction: "Budget is a vital factor when planning an international medical education. Kyrgyzstan stands out as the most affordable destination for Indian medical aspirants, with high-quality education and complete living facilities.",
    sections: [
      {
        heading: "1. Annual Tuition Fee Breakdowns (USD 3,200 - USD 4,200)",
        content: [
          "Tuition fees in top-tier accredited state government universities are surprisingly affordable. Osh State University tuition is approximately USD 4,000 per year, while Jalal-Abad State is around USD 4,200 per year.",
          "Newer government-authorized colleges like Central Asian International Medical University (CAIMU) offer packages starting at USD 3,200 per year."
        ]
      },
      {
        heading: "2. Hostel & Indian Mess Fees",
        content: [
          "Living inside dedicated student hostels cost between USD 600 and USD 800 per year. These charges include central heating, water, and internet.",
          "Hygienic Indian food messes cost approx USD 1,000 to USD 1,200 per year, providing regular fresh veg/non-veg dishes managed by professional Indian chefs."
        ]
      },
      {
        heading: "3. Direct Bank Deposit Security",
        content: [
          "WCIEC Delhi advises parents to deposit all tuition fees directly into the official bank accounts of the universities. We charge a flat, transparent service fee for visa stamping, documents apostille, and travel management, ensuring complete financial security."
        ]
      }
    ],
    faqs: [
      {
        question: "What is the total package of MBBS in Kyrgyzstan?",
        answer: "The total package ranges from INR 15 Lakhs to INR 22 Lakhs, including tuition, hostel, mess, visa extensions, and documents translation."
      },
      {
        question: "Can I pay my fees in installments?",
        answer: "Yes, most universities allow tuition fees to be paid in semester-wise installments, reducing the financial burden on parents."
      }
    ]
  },
  "best-country-for-mbbs-abroad": {
    title: "Best Country for MBBS Abroad for Indian Students",
    excerpt: "Compare Kyrgyzstan, Russia, Georgia, and Kazakhstan to find the best country for your MBBS journey in 2026.",
    date: "May 15, 2026",
    author: "WCIEC Research Group",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "MBBS Abroad",
    seoTitle: "Best Country for MBBS Abroad for Indian Students 2026",
    seoDescription: "Which country is best for MBBS abroad? Detailed comparison of fees, course duration, NMC compliance, and top universities.",
    introduction: "Choosing the best country for studying medicine abroad depends on various factors: budget, course duration, language medium, safety, and compliance with the National Medical Commission (NMC) rules.",
    sections: [
      {
        heading: "1. Kyrgyzstan: The Budget & Safety Leader",
        content: [
          "For middle-class Indian families, Kyrgyzstan is highly recommended. It offers a fully English-medium 5-year MBBS course, complies with all NMC regulations, and keeps the entire budget under INR 15-22 Lakhs including hostel and Indian mess."
        ]
      },
      {
        heading: "2. Russia: The Historic Government Titan",
        content: [
          "Russia is historically popular for medical studies, hosting legendary government universities. However, the course duration is 6 years, and some universities follow a bilingual system. The overall budget ranges between INR 18 Lakhs and 35 Lakhs."
        ]
      },
      {
        heading: "3. Georgia: Premium European Standard",
        content: [
          "Georgia offers premium medical education with advanced infrastructure following European guidelines. However, the course duration is 6 years, and living expenses are higher, bringing the total budget to INR 25-45 Lakhs."
        ]
      }
    ],
    faqs: [
      {
        question: "Which country is cheapest for MBBS abroad?",
        answer: "Kyrgyzstan is the most affordable country, with total packages starting around INR 15 Lakhs including hostel and food."
      },
      {
        question: "Is the MBBS course duration 5 years in Kyrgyzstan?",
        answer: "Yes, it is a 5-year course which is fully compliant with the latest NMC rules of 54 months minimum academic study."
      }
    ]
  },
  "mbbs-abroad-documents-required": {
    title: "Documents Required for MBBS Abroad Admission",
    excerpt: "Ensure a smooth application process by preparing all required documents for your foreign medical admission.",
    date: "May 16, 2026",
    author: "WCIEC Operations Office",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "Admission Support",
    seoTitle: "Documents Required for MBBS Abroad Admission 2026",
    seoDescription: "Get the complete checklist of documents required for foreign medical admission, university invitations, and embassy visa stamping.",
    introduction: "Applying for international medical universities requires systematic document verification. WCIEC Delhi ensures all your academic and personal records are correctly compiled to prevent visa delays.",
    sections: [
      {
        heading: "1. Basic Academic Certificates Checklist",
        content: [
          "Candidates must submit scanned copies of their 10th and 12th standard mark sheets. The 12th PCB (Physics, Chemistry, Biology) aggregate must satisfy the NMC eligibility criteria of 50% for General and 40% for SC/ST/OBC."
        ]
      },
      {
        heading: "2. Personal & Identity Documents",
        content: [
          "A valid international passport (valid for at least 18 months from the date of departure) is mandatory. We also require a copy of the qualified NEET-UG scorecard, passport-sized white-background photos, and a certified medical fitness certificate."
        ]
      },
      {
        heading: "3. Ministry Legalizations & Apostille",
        content: [
          "WCIEC Delhi officially handles the translation of certificates, document legalizations at the Ministry of External Affairs (MEA), and embassy apostille processing, ensuring your visa file is 100% compliant."
        ]
      }
    ],
    faqs: [
      {
        question: "Is passport mandatory for booking an MBBS seat abroad?",
        answer: "Yes, a valid passport is required to issue the official university admission letter and ministry invitation letter."
      },
      {
        question: "Do you translate documents into Russian/Kyrgyz?",
        answer: "Yes, WCIEC manages complete legal translations and notary verifications as required by foreign embassies."
      }
    ]
  },
  "is-mbbs-in-kyrgyzstan-good": {
    title: "Is MBBS in Kyrgyzstan Good for Indian Students?",
    excerpt: "An unbiased review of the pros, cons, academic quality, and student life for Indian medical students in Kyrgyzstan.",
    date: "May 17, 2026",
    author: "WCIEC Quality Check",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "Kyrgyzstan",
    seoTitle: "Is MBBS in Kyrgyzstan Good for Indian Students? Pros & Cons",
    seoDescription: "Get an honest review of studying MBBS in Kyrgyzstan. Learn about academic standards, clinical exposure, hostel facilities, and pros & cons.",
    introduction: "With over 10,000 Indian students currently studying in Kyrgyzstan, it is vital to analyze whether the destination aligns with your career goals. Here is an honest review of academic quality, clinic exposure, and daily life.",
    sections: [
      {
        heading: "1. The Advantages: Affordable, NMC Compliant & Safe",
        content: [
          "The main pros include: extremely affordable packages (INR 15-20 Lakhs), 100% English-medium curriculum, highly safe and secured hostels, direct state government universities, and excellent NExT exam preparational classes run by Indian professors."
        ]
      },
      {
        heading: "2. Clinical Exposure & Anatomy Learning",
        content: [
          "Top state institutions like Osh State University have historic anatomical labs and tied up with over 15 public hospitals. During clinical years, students get hands-on experience handling actual patients alongside local doctors."
        ]
      },
      {
        heading: "3. The Challenges: Local Language & Weather",
        content: [
          "Students must learn basic Russian or Kyrgyz during the first two years. While the university curriculum is fully in English, local language skills are helpful when interacting with patients in hospitals.",
          "Additionally, winters can be cold, with temperatures dropping below zero. However, all university buildings, classrooms, and hostels feature comprehensive central heating."
        ]
      }
    ],
    faqs: [
      {
        question: "Is Russian language mandatory for MBBS in Kyrgyzstan?",
        answer: "No, the course is taught fully in English. However, learning basic Russian is part of the first-year syllabus to help you interact with local patients."
      },
      {
        question: "Are government colleges better than private ones in Kyrgyzstan?",
        answer: "Government state universities generally have older infrastructure, massive clinical hospital networks, and larger research budgets, making them highly recommended."
      }
    ]
  },
  "mbbs-abroad-vs-india": {
    title: "MBBS Abroad vs MBBS in India | Complete Comparison",
    excerpt: "Compare fees, NEET cut-offs, clinical exposure, and postgraduate career paths between India and foreign medical studies.",
    date: "May 18, 2026",
    author: "WCIEC Content Architect",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "MBBS Abroad",
    seoTitle: "MBBS Abroad vs MBBS in India: Comparison 2026",
    seoDescription: "Detailed comparison of studying MBBS in India vs abroad. Compare costs, admission criteria, cut-offs, infrastructure, and career options.",
    introduction: "Pursuing medicine is a noble career choice, but the pathway varies significantly depending on whether you secure a seat in India or study at a recognized university abroad.",
    sections: [
      {
        heading: "1. Admission cut-offs and Seat Competition",
        content: [
          "In India, securing an MBBS seat in government colleges requires exceptionally high NEET scores. Private medical college seats are easier to secure but charge astronomical tuition fees (INR 60 Lakhs to 1 Crore+).",
          "Studying MBBS abroad allows qualified NEET students to gain direct admission in recognized government universities without high rank pressure or heavy donations."
        ]
      },
      {
        heading: "2. Financial Packages & Overall Cost",
        content: [
          "Indian government MBBS fees are low, but private colleges are extremely expensive.",
          "Foreign state government universities (especially in Kyrgyzstan or Kazakhstan) offer complete 5-year degrees for INR 15 Lakhs to 22 Lakhs overall, including premium hostels and fresh Indian messes."
        ]
      },
      {
        heading: "3. Career Paths & Licensing Exams",
        content: [
          "All graduates, whether from India or abroad, must qualify for the National Exit Test (NExT) to obtain medical licensing in India, bringing both options to the same professional benchmark."
        ]
      }
    ],
    faqs: [
      {
        question: "Is the MBBS syllabus abroad different from India?",
        answer: "No, the medical syllabus in top foreign government colleges is highly aligned with the British and Indian curricula, covering all 19 core clinical and non-clinical subjects."
      },
      {
        question: "Can I do my PG in India after MBBS abroad?",
        answer: "Yes, foreign medical graduates who qualify for the NExT licensing exam are fully eligible to apply for PG seats in India."
      }
    ]
  },
  "nmc-approved-medical-universities-abroad": {
    title: "NMC Approved Medical Universities Abroad Guide",
    excerpt: "Understand the latest National Medical Commission (NMC) rules for studying MBBS abroad in 2026.",
    date: "May 19, 2026",
    author: "WCIEC Legal Department",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "Legal Guidance",
    seoTitle: "NMC Approved Medical Universities Abroad: Guidelines 2026",
    seoDescription: "Get the complete NMC guidelines for studying MBBS abroad in 2026. Course duration rules, internship mandates, and English medium requirements.",
    introduction: "The National Medical Commission (NMC) has defined strict rules to maintain high quality among Indian students pursuing medical education abroad. Staying compliant with these mandates is mandatory.",
    sections: [
      {
        heading: "1. Minimum Course Duration Rule (54 Months)",
        content: [
          "The NMC mandates that the foreign MBBS/MD course duration must be at least 54 months (4.5 years). All represented Kyrgyzstan universities follow a fully-compliant 5-year course framework."
        ]
      },
      {
        heading: "2. English Medium and 12-Month Internship Rule",
        content: [
          "The entire curriculum must be taught fully in English. Additionally, the university must provide a mandatory 12-month clinical internship at the same institution, which is integrated inside our represented government campuses."
        ]
      },
      {
        heading: "3. Direct Registration Eligibility",
        content: [
          "Students must register with the official medical council of the country where they study, making them eligible to practice locally before registering in India."
        ]
      }
    ],
    faqs: [
      {
        question: "Does the NMC publish a list of approved universities?",
        answer: "No, the NMC does not publish individual university lists anymore. It prescribes general eligibility guidelines. Any university that satisfies these rules is automatically approved."
      },
      {
        question: "What is the NExT exam?",
        answer: "The National Exit Test (NExT) is the upcoming common licensing and postgraduate entrance exam in India for all MBBS graduates."
      }
    ]
  },
  "mbbs-abroad-consultant-delhi": {
    title: "How to Choose MBBS Abroad Consultant in Delhi",
    excerpt: "Avoid fake sub-agents and fraudulent admission traps. Learn how to identify direct and trusted MBBS consultants in Delhi.",
    date: "May 19, 2026",
    author: "WCIEC Delhi Office",
    reviewer: "Senior MBBS Abroad Counsellor",
    category: "Delhi Office",
    seoTitle: "How to Choose MBBS Abroad Consultant in Delhi 2026",
    seoDescription: "Simple steps to identify direct and authorized MBBS abroad consultants in Delhi. Avoid fake sub-agents and fraudulent admission traps.",
    introduction: "Choosing the right consulting office is as important as choosing the right university. New Delhi hosts many study abroad agents, making it essential to identify direct and trusted partners.",
    sections: [
      {
        heading: "1. Direct Representation vs Third-Party Sub-agents",
        content: [
          "Direct representatives work closely with foreign universities. WCIEC Delhi has direct university partnerships, manages its own hostels and messes on campus, and maintains local coordinators on ground."
        ]
      },
      {
        heading: "2. Transparent Fee Structures & Bank Deposits",
        content: [
          "Avoid agents who demand heavy cash payments or hold your original documents. A trusted consultant requests tuition fees to be deposited directly in the university's official bank account."
        ]
      },
      {
        heading: "3. Physical Office and Years of Excellence",
        content: [
          "Visit the office physically. WCIEC Delhi has a trusted office in Shakarpur, Near Laxmi Nagar Metro Station, behind Karim Hotel, serving students for over 15 years."
        ]
      }
    ],
    faqs: [
      {
        question: "Where is the WCIEC Delhi office?",
        answer: "Our head office is in Shakarpur, Near Laxmi Nagar Metro Station, behind Karim Hotel, New Delhi, Delhi 110092."
      },
      {
        question: "Do you charge extra processing fees?",
        answer: "We charge a flat, transparent service fee that covers apostille, document translation, visa booking, and airport escorts with zero hidden charges."
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(BLOG_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_DATA[slug];
  
  if (!post) {
    return {
      title: "Blog Post Not Found | WCIEC Delhi",
    };
  }

  return {
    title: `${post.seoTitle} | WCIEC Blog`,
    description: post.seoDescription,
    alternates: {
      canonical: `https://wciecdelhi.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://wciecdelhi.com/blog/${slug}/`,
      siteName: "WCIEC Delhi",
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_DATA[slug];

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://wciecdelhi.com/#organization",
        "name": "WCIEC Delhi",
        "url": "https://wciecdelhi.com/",
        "logo": "https://wciecdelhi.com/logos/wciec-logo.webp",
        "telephone": "+918586873357"
      },
      {
        "@type": "BlogPosting",
        "@id": `https://wciecdelhi.com/blog/${slug}/#article`,
        "url": `https://wciecdelhi.com/blog/${slug}/`,
        "headline": post.title,
        "description": post.seoDescription,
        "datePublished": "2026-05-10T12:00:00Z",
        "dateModified": "2026-05-19T12:00:00Z",
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "MedicalBusiness",
          "@id": "https://wciecdelhi.com/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://wciecdelhi.com/blog/${slug}/#faq`,
        "mainEntity": post.faqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="bg-white text-gray-800 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 font-semibold uppercase tracking-wider">
            <Link href="/" className="hover:text-medical transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/blog/" className="hover:text-medical transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-gray-600 truncate">{post.title}</span>
          </div>

          {/* Back to Blog Button */}
          <Link href="/blog/" className="inline-flex items-center gap-2 text-sm text-medical font-bold hover:underline mb-8">
            <ArrowLeft size={16} /> Back to All Articles
          </Link>

          {/* Article Header */}
          <article className="space-y-6">
            <span className="bg-medical/10 text-medical text-xs font-bold px-3.5 py-1.5 rounded-full border border-medical/20 inline-block uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold font-poppins text-navy leading-[1.2] tracking-tight">
              {post.title}
            </h1>

            {/* E-E-A-T Author & Reviewer Strip */}
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-100 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Calendar size={14} /> Published: {post.date}</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-1"><User size={14} /> Written by: <strong>{post.author}</strong></span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-emerald-500" /> Reviewed by: <strong>{post.reviewer}</strong></span>
            </div>

            {/* Content Body */}
            <div className="pt-6 space-y-8 text-base md:text-lg leading-relaxed text-gray-600 font-medium">
              <p className="italic border-l-4 border-medical pl-4 text-gray-500 py-1 bg-gray-50/50 rounded-r-xl">
                {post.introduction}
              </p>

              {post.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight pt-4">
                    {section.heading}
                  </h2>
                  {section.content.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* FAQs Block */}
            <div className="pt-12 border-t border-gray-100 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-navy tracking-tight">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
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

          </article>

          {/* Embedded Sticky Counselling Sidebar / Banner at Bottom */}
          <div className="mt-16 bg-[#050e1f] text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl border border-white/10" id="apply">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical/10 rounded-full blur-3xl -z-10" />
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-medical/15 text-medical border border-medical/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <GraduationCap size={14} /> Intake 2026 Registration
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white leading-tight">
                  Map Out Your MBBS Study Abroad Journey Safely
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Avoid fraudulent sub-agents. Speak directly to WCIEC Delhi's direct medical counsellors and secure transparent government university placement.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="tel:+918586873357" className="bg-medical hover:bg-medical/90 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5">
                    <PhoneCall size={14} /> Call Admission Desk
                  </a>
                  <Link href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1eb054] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5">
                    WhatsApp Chat
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 bg-white text-navy p-5 rounded-2xl">
                <h4 className="text-sm font-bold font-poppins text-navy mb-4 text-center">Get Free Counselling</h4>
                <GlobalApplyForm buttonText="Submit Request" compact={true} />
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
