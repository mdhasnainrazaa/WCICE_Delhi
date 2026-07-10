import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { universities } from "@/data/universities";
import { generateUniversityMetadata, generateUniversitySchemas } from "@/lib/seoHelper";

import { GlassCard } from "@/components/ui/GlassCard";
import { 
  MapPin, 
  CheckCircle2, 
  DollarSign, 
  Download, 
  MessageSquare, 
  Clock, 
  GraduationCap,
  ShieldCheck,
  Coffee,
  BedDouble,
  FileText,
  ChevronRight,
  Award,
  Stethoscope,
  Calendar,
  Building,
  Star,
  BookOpen,
  HeartPulse
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { PrintButton } from "@/components/ui/PrintButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return universities.map((uni) => ({
    slug: uni.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uni = universities.find(u => u.slug === slug);
  if (!uni) return { title: "University Not Found" };

  return generateUniversityMetadata(uni);
}

export default async function UniversityPage({ params }: Props) {
  const { slug } = await params;
  const uni = universities.find(u => u.slug === slug);
  if (!uni) notFound();

  const schemas = generateUniversitySchemas(uni);

  if (slug === "jalal-abad-state-university") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.eduOrgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.medicalCollegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
        />
        {schemas.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
          />
        )}
        {schemas.courseSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.courseSchema) }}
          />
        )}

        <main className="bg-background min-h-screen text-navy font-sans antialiased">
          {/* Hero Section */}
          <section className="relative py-16 bg-navy text-white overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
            <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="bg-medical/20 border border-medical/30 text-medical font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Study MBBS in Kyrgyzstan
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Jalalabad State University</h1>
                <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl">
                  57 Lenin Street Jalal-Abad, 715600, Kyrgyzstan. | Nearest Airport: Jalal-Abad Airport
                </p>
                <div className="pt-2">
                  <a 
                    href="#apply" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
                  >
                    Apply Now <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Total Tuition Fees Including Hostel</span>
                    <span className="text-xl font-black text-white">4200 $</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-medical/20 flex items-center justify-center text-medical shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">City and Province</span>
                    <span className="text-xl font-black text-white">Jalal-Abad, Kyrgyzstan</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">USP</span>
                    <span className="text-base font-black text-white">Founded in 1993. Approved by NMC & WHO</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visible Breadcrumbs */}
          <div className="bg-gray-50 border-b border-gray-150 py-3">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-abroad/" className="hover:text-primary transition-colors">MBBS</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-primary transition-colors">MBBS in Kyrgyzstan</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <span className="text-navy">Jalalabad State University</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {/* Section 1: Overview */}
            <section className="space-y-4 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-black text-primary uppercase tracking-widest block">Overview</span>
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <Building className="text-medical" size={28} /> Jalalabad State Medical University: Overview
              </h2>
              <div className="w-12 h-1 bg-medical rounded-full" />
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                Jalalabad State Medical University (JaSU), founded in 1992, is located in Jalal-Abad, Kyrgyzstan, and offers quality medical education to over 4,500 students. The university provides various degrees, including bachelor's, master's, and doctoral programs, with over 250 experienced faculty members.
              </p>
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                JaSU welcomes international students, offering modern hostel facilities and Indian food. The university is known for its affordable tuition, easy admission process (no entrance exam), and well-equipped infrastructure, including a vast library. JaSU is gaining recognition as a top institution for medical studies in Kyrgyzstan.
              </p>
            </section>

            {/* Section 2: Affiliation and Recognition */}
            <section className="bg-gray-50/50 border border-gray-150 p-8 rounded-[24px] space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-primary" size={24} /> Affiliation and Recognition
              </h3>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 font-bold text-navy">
                <CheckCircle2 className="text-medical shrink-0" size={20} />
                <span>World Health Organization (WHO)</span>
              </div>
            </section>

            {/* Section 3: Why Select Jalalabad State University? */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Why Select Jalalabad State University?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Experienced Faculty
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Over 250 trained professionals, including reputed doctors.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Affordable Tuition
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Cost-effective education without compromising on quality.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Modern Infrastructure
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Well-equipped campus with a vast library and advanced facilities.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Student Support
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Comfortable hostels with Indian food and free internet.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Easy Admission
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">No entrance exams required.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Quality Education
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Strong reputation in medical and healthcare education.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Quick Highlights */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Quick Highlights</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-lg bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Particular</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Statistics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Type</td>
                      <td className="p-4 text-gray-600">Public</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Intake for the MBBS Course</td>
                      <td className="p-4 text-gray-600">September</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Processing Time for MBBS Admission</td>
                      <td className="p-4 text-gray-600">45-60 days</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Entrance Exam</td>
                      <td className="p-4 text-gray-600">NEET Exam</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Location</td>
                      <td className="p-4 text-gray-600">Lenin Street, Jalal-Abad, Kyrgyzstan</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Eligibility Criteria</td>
                      <td className="p-4 text-gray-600">50% in PCB</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">NEET Exam</td>
                      <td className="p-4 text-gray-600">Yes, it is compulsory</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Annual Tuition Fees</td>
                      <td className="p-4 text-gray-600">2870 USD Approx.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Course Duration</td>
                      <td className="p-4 text-gray-600">6 years (with internship)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Medium of Education</td>
                      <td className="p-4 text-gray-600">English Language</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Ranking</td>
                      <td className="p-4 text-gray-600">Country - 30 | World - 12097</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Recognition</td>
                      <td className="p-4 text-gray-600">Approved by WHO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Pros & Cons */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Pros & Cons of Studying MBBS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>Affordable tuition fees compared to other countries.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>Experienced faculty with reputed doctors.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>Modern infrastructure, including a well-equipped library.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>Supportive environment for international students, with Indian food and comfortable hostels.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>Easy admission process with no entrance exams.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-red-800 flex items-center gap-2">Disadvantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-red-700 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>Limited exposure to advanced medical research facilities.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-red-700 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>The campus may not have extensive recreational options.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Fee Structure */}
            <section className="space-y-6" id="fees">
              <h2 className="text-3xl font-black tracking-tight">Fee Structure</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-xl bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Particulars</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Tuition Fee/Year</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Hostel Fee/Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Fees in USD</td>
                      <td className="p-4 text-gray-600">2870 USD</td>
                      <td className="p-4 text-gray-600">800 USD</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Fees in Rupees (INR) approx.</td>
                      <td className="p-4 text-gray-605">2,00,900 Rupees/yr.</td>
                      <td className="p-4 text-gray-605">56,000 Rupees/yr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Faculties */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Faculties</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Medicine", "Nursing", "Computer Science", "Physics", "Mathematics",
                  "Social Sciences & Humanities", "Russian Language & Literature",
                  "Kyrgyz Language & Literature", "English Language", "Biology",
                  "Pedagogy & Psychology", "Physical Education", "Ecology",
                  "Forestry & Park Services", "Mechanics", "Food Technology",
                  "Chemistry", "Chemical Engineering", "Industrial Water Engineering",
                  "Construction & Civil Engineering", "Electricity & Power Engineering",
                  "Sports", "Preparatory Studies"
                ].map((faculty, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <BookOpen size={16} className="text-medical shrink-0" />
                    <span className="text-xs font-bold text-navy leading-snug">{faculty}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Eligibility Criteria */}
            <section className="space-y-6" id="eligibility">
              <h2 className="text-3xl font-black tracking-tight">Eligibility Criteria</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-medical/10 flex items-center justify-center text-medical shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    At least fifty per cent in biology, chemistry, and physics in class twelfth is required.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    Applicant must be 17 years old as of Dec 31st of the year of admission.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Award size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    The NEET UG test must be qualified for admission.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: MBBS Course Duration */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Clock className="text-medical" size={24} /> MBBS Course Duration
              </h3>
              <p className="text-gray-650 leading-relaxed text-base font-medium">
                Students begin with a 5-year MBBS program supervised by knowledgeable and experienced instructors. Upon completing the course, they are required to undergo a 1-year internship, obtaining practical experience by caring for patients in medical facilities.
              </p>
            </section>

            {/* Section 10: Admission Procedure */}
            <section className="space-y-6" id="process">
              <h2 className="text-3xl font-black tracking-tight">Admission Procedure</h2>
              <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                {[
                  "Fill out the online application on the university's official website or on the WCIEC Delhi admission portal.",
                  "Please provide your address, email ID, and phone number so we can stay in touch.",
                  "Correctly upload all the required documents as mentioned in the application guidelines.",
                  "Pay the tuition fee online and make sure to save or print the payment receipt for future use.",
                  "Apply for your student VISA once the admission is confirmed.",
                  "When you reach the university, submit all your documents in hard copy at the admission office."
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                    <div className="text-navy font-bold text-base md:text-lg">{step}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Documents Required */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Documents Required</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Scanned copy of original passport",
                  "Scanned copy of 10+2 mark sheets",
                  "Scanned copy of application form",
                  "Scanned copy of NEET report card",
                  "Birth certificate",
                  "Medical certificate",
                  "Passport-size photographs"
                ].map((doc, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-medical shrink-0" />
                    <span className="text-sm font-bold text-navy">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12: Ranking, Scholarships & Accommodation */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Ranking, Scholarships & Accommodation</h2>
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Ranking table */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-lg font-bold text-navy">Country & World Ranking</h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-navy text-white">
                        <tr>
                          <th className="p-4 font-black text-xs uppercase tracking-wider">Institution Ranking</th>
                          <th className="p-4 font-black text-xs uppercase tracking-wider">Position</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-150 font-bold">
                        <tr>
                          <td className="p-4 text-navy">Ranking in the World</td>
                          <td className="p-4 text-gray-600">12097</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-navy">Ranking in the Country</td>
                          <td className="p-4 text-gray-600">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Hostel & Scholarships */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3" id="accommodation">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <BedDouble className="text-primary" size={20} /> Hostel & Accommodation
                    </h4>
                    <p className="text-gray-605 text-sm font-medium leading-relaxed">
                      Jalalabad State University offers comfortable hostel accommodations for both local and international students. The hostel facilities are equipped with basic amenities like beds, study tables, and common areas for socialising. The cost of accommodation varies depending on the type of room and the number of students sharing. Typically, the monthly cost ranges between $30 to $60, making it an affordable option for students. Separate hostels for boys and girls.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <Award className="text-accent" size={20} /> Scholarships
                    </h4>
                    <p className="text-gray-605 text-sm font-medium leading-relaxed">
                      JaSU provides several scholarships to both local and international students based on academic performance, financial need, and specific programs. The university offers partial and full scholarships. Scholarships based on government schemes for reserved categories. Merit-based scholarships for top-performing students.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 13: Career Opportunities */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <HeartPulse className="text-primary" size={24} /> Career Opportunities
              </h3>
              <p className="text-gray-650 leading-relaxed text-base font-medium">
                Jalalabad State University is committed to preparing students for successful careers by providing various career services. The university has strong connections with industries and offers internship programs, job fairs, and career counselling. Graduates of JASU often find opportunities in government sectors, healthcare, engineering, education, and more. The university's career services help students build their resumes, improve interview skills, and connect with potential employers.
              </p>
            </section>

            {/* Section 14: How we assist you */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle2 className="text-medical" size={24} /> How WCIEC Delhi Assists You in Getting Admission
              </h3>
              <p className="text-gray-650 leading-relaxed text-base font-medium">
                WCIEC Delhi is a reliable choice for students aiming to pursue MBBS in Kyrgyzstan and other overseas destinations. With over 12,000 successful placements in international institutions, we offer excellent education options without donation fees. WCIEC guides students throughout the entire admissions process, from selecting the right university to visa assistance. Our experienced consultants provide personalised advice and support, ensuring a smooth and successful overseas education journey.
              </p>
            </section>

            {/* Section 15: Call us banner */}
            <section className="bg-navy text-white py-10 px-8 rounded-[24px] relative overflow-hidden shadow-xl text-center space-y-4">
              <h3 className="text-2xl font-black">Call us for Admission</h3>
              <p className="text-accent text-lg font-bold">"The best kind of education is observation of the outside world!"</p>
              <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm font-black uppercase tracking-wider">
                <a href="tel:+918586873357" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-8586873357
                </a>
                <a href="tel:+919540003000" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-9540003000
                </a>
              </div>
            </section>

            {/* Section 16: Bottom Apply Form Banner (High Converting CTA) */}
            <section className="bg-navy text-white py-16 px-6 md:px-12 rounded-[24px] overflow-hidden relative shadow-2xl" id="apply">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/15 blur-3xl rounded-full translate-x-1/2" />
              <div className="max-w-3xl mx-auto relative z-10 space-y-8">
                <div className="text-center space-y-3">
                  <span className="text-xs font-black text-accent uppercase tracking-widest block">Secure Your Seat Today</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight">Apply Online</h2>
                  <p className="text-gray-300 font-medium text-sm md:text-base">Register now to lock in your MBBS seat for the 2026 batch.</p>
                </div>
                <div className="bg-white text-navy p-8 md:p-12 rounded-3xl shadow-2xl">
                  <GlobalApplyForm buttonText="Submit Application" />
                </div>
              </div>
            </section>

            {/* Section 17: Frequently Asked Questions */}
            <section className="py-12 border-t border-gray-100" id="faq">
              <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
                <div className="w-12 h-1 bg-medical rounded-full mx-auto" />
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Jalalabad State University a private or government university?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Jalalabad State University is a prestigious public (government) university in Kyrgyzstan.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Jalalabad State University good for MBBS?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Yes, it is highly reputable for its English-medium MBBS program, extremely affordable tuition fees, and complete NMC/WHO accreditations.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  if (slug === "jalal-abad-international-university") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.eduOrgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.medicalCollegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
        />
        {schemas.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
          />
        )}
        {schemas.courseSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.courseSchema) }}
          />
        )}

        <main className="bg-background min-h-screen text-navy font-sans antialiased">
          {/* Hero Section */}
          <section className="relative py-16 bg-navy text-white overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
            <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="bg-medical/20 border border-medical/30 text-medical font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Study MBBS in Kyrgyzstan
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Jalal-Abad International University</h1>
                <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl">
                  Jalal-Abad, Kyrgyzstan. | Nearest Airport: Jalal-Abad Airport
                </p>
                <div className="pt-2">
                  <a 
                    href="#apply" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
                  >
                    Apply Now <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Total Tuition Fees Including Hostel</span>
                    <span className="text-xl font-black text-white">4500 $</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-medical/20 flex items-center justify-center text-medical shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">City and Province</span>
                    <span className="text-xl font-black text-white">Jalal-Abad, Kyrgyzstan</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">USP</span>
                    <span className="text-base font-black text-white">Founded in 2015. Approved by NMC & WHO</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visible Breadcrumbs */}
          <div className="bg-gray-50 border-b border-gray-150 py-3">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-abroad/" className="hover:text-primary transition-colors">MBBS</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-primary transition-colors">MBBS in Kyrgyzstan</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <span className="text-navy">Jalal-Abad International University</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {/* Section 1: Overview */}
            <section className="space-y-4 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-black text-primary uppercase tracking-widest block">Overview</span>
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <Building className="text-medical" size={28} /> Jalal-Abad International University: Overview
              </h2>
              <div className="w-12 h-1 bg-medical rounded-full" />
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                Jalal-Abad International University (JAIU) is a modern, rapidly expanding institution focused strictly on global medical education standards. It provides state-of-the-art facilities for a premium MBBS experience.
              </p>
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                Established in 2015, Jalal-Abad International University represents the new wave of tech-forward medical education in Kyrgyzstan. The university was built specifically to cater to the modern needs of international students, featuring digital classrooms, interactive 3D anatomy tables (Anatomage), and fully equipped simulation centers. The campus environment is highly cosmopolitan, boasting an impressive faculty composed of visiting professors from India, Europe, and the CIS region.
              </p>
            </section>

            {/* Section 2: Affiliation and Recognition */}
            <section className="bg-gray-50/50 border border-gray-150 p-8 rounded-[24px] space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-primary" size={24} /> Affiliation and Recognition
              </h3>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 font-bold text-navy">
                <CheckCircle2 className="text-medical shrink-0" size={20} />
                <span>World Health Organization (WHO) & National Medical Commission (NMC)</span>
              </div>
            </section>

            {/* Section 3: Reasons to Select Jalal-Abad International University */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Reasons to Select Jalal-Abad International University</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Experienced Faculty
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Composed of visiting professors from India, Europe, and CIS.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Tech-Forward Simulation
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Features digital classrooms and 3D interactive Anatomage tables.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Modern Infrastructure
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Fully equipped simulation centers and multi-specialty clinical centers.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Premium Student Support
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Comfortable hostels with attach baths, Wi-Fi, and Indian mess.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Curriculum Integration
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Deeply integrated with licensing exam preparations (USMLE & NExT).</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-medical shrink-0" /> Quality Education
                  </h4>
                  <p className="text-gray-600 text-xs font-semibold leading-relaxed">Strong reputation for tech-driven modern clinical diagnostics.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Quick Highlights */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Quick Highlights</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-lg bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Particular</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Statistics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Type</td>
                      <td className="p-4 text-gray-600">Private / International</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Intake for the MBBS Course</td>
                      <td className="p-4 text-gray-600">September</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Processing Time for MBBS Admission</td>
                      <td className="p-4 text-gray-600">45-60 days</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Entrance Exam</td>
                      <td className="p-4 text-gray-600">NEET Exam</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Location</td>
                      <td className="p-4 text-gray-600">Jalal-Abad, Kyrgyzstan</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Eligibility Criteria</td>
                      <td className="p-4 text-gray-600">50% in PCB</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">NEET Exam</td>
                      <td className="p-4 text-gray-600">Yes, it is compulsory</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Annual Tuition Fees</td>
                      <td className="p-4 text-gray-600">3800 USD Approx.</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Course Duration</td>
                      <td className="p-4 text-gray-600">6 years (with internship)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Medium of Education</td>
                      <td className="p-4 text-gray-600">English Language</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Ranking</td>
                      <td className="p-4 text-gray-600">Fastest Growing Modern Medical University in Kyrgyzstan</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Recognition</td>
                      <td className="p-4 text-gray-600">Approved by WHO & NMC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Pros & Cons */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Pros & Cons of Studying MBBS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>Ultra-modern campus with cutting-edge medical simulation technology.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>Curriculum deeply integrated with NExT/USMLE testing patterns.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      <span>Premium, highly comfortable hostel living conditions.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-red-800 flex items-center gap-2">Disadvantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-red-705 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>Slightly higher fee structure compared to older government universities.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Fee Structure */}
            <section className="space-y-6" id="fees">
              <h2 className="text-3xl font-black tracking-tight">Fee Structure</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-xl bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Particulars</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Tuition Fee/Year</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Hostel Fee/Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Fees in USD</td>
                      <td className="p-4 text-gray-600">3800 USD</td>
                      <td className="p-4 text-gray-600">700 USD</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Fees in Rupees (INR) approx.</td>
                      <td className="p-4 text-gray-605">2,66,000 Rupees/yr.</td>
                      <td className="p-4 text-gray-605">49,000 Rupees/yr.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Faculties */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Faculties</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "General Medicine", "Pediatrics", "Nursing", "Dentistry", 
                  "Computer Science in Healthcare", "Medical Diagnostics & Radiology",
                  "Preparatory Studies", "Language & Literature Department"
                ].map((faculty, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <BookOpen size={16} className="text-medical shrink-0" />
                    <span className="text-xs font-bold text-navy leading-snug">{faculty}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Eligibility Criteria */}
            <section className="space-y-6" id="eligibility">
              <h2 className="text-3xl font-black tracking-tight">Eligibility Criteria</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-medical/10 flex items-center justify-center text-medical shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    Minimum 50% marks in PCB in 12th board exams.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    Must hold a valid NEET qualification score.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Award size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    Must be 17 years of age.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Courses & Duration */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Clock className="text-medical" size={24} /> Courses & Duration
              </h3>
              <p className="text-gray-655 leading-relaxed text-base font-medium">
                Students begin with a 5-year MBBS program supervised by highly qualified instructors. Upon completing the course, they are required to undergo a 1-year internship, obtaining practical experience by caring for patients in medical facilities.
              </p>
            </section>

            {/* Section 10: Admission Procedure */}
            <section className="space-y-6" id="process">
              <h2 className="text-3xl font-black tracking-tight">Admission Procedure</h2>
              <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                {[
                  "Document Verification by WCIEC Delhi.",
                  "Issuance of the Conditional Offer Letter.",
                  "Online Interview / Orientation.",
                  "Visa Invitation and Stamping.",
                  "Flight to Kyrgyzstan.",
                  "On-campus enrollment and hostel allotment in Jalal-Abad."
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                    <div className="text-navy font-bold text-base md:text-lg">{step}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Documents Required */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Documents Required</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "10th and 12th Academic Transcripts",
                  "Valid Indian Passport",
                  "NEET UG Scorecard",
                  "Comprehensive Medical Insurance",
                  "Passport-size photographs"
                ].map((doc, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-medical shrink-0" />
                    <span className="text-sm font-bold text-navy">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12: Ranking, Scholarships & Accommodation */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Ranking, Scholarships & Accommodation</h2>
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Ranking table */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-lg font-bold text-navy">Country & World Ranking</h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-navy text-white">
                        <tr>
                          <th className="p-4 font-black text-xs uppercase tracking-wider">Institution Ranking</th>
                          <th className="p-4 font-black text-xs uppercase tracking-wider">Position</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-150 font-bold">
                        <tr>
                          <td className="p-4 text-navy">Ranking in the World</td>
                          <td className="p-4 text-gray-600">Top Modern University</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-navy">Ranking in the Country</td>
                          <td className="p-4 text-gray-600">Top Modern Private University</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Hostel & Scholarships */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3" id="accommodation">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <BedDouble className="text-primary" size={20} /> Hostel & Accommodation
                    </h4>
                    <p className="text-gray-655 text-sm font-medium leading-relaxed">
                      Jalal-Abad International University offers comfortable hostel accommodations for both local and international students. The hostel facilities are equipped with basic amenities like beds, study tables, and common areas for socialising. The cost of accommodation varies depending on the type of room and the number of students sharing. Typically, the monthly cost ranges between $30 to $60, making it an affordable option for students. Separate hostels for boys and girls.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <Award className="text-accent" size={20} /> Scholarships
                    </h4>
                    <p className="text-gray-655 text-sm font-medium leading-relaxed">
                      Jalal-Abad International University provides several scholarships to both local and international students based on academic performance, financial need, and specific programs. The university offers partial and full scholarships, and scholarships based on government schemes for reserved categories. Merit-based scholarships for top-performing students.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 13: Career Opportunities */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <HeartPulse className="text-primary" size={24} /> Career Opportunities
              </h3>
              <p className="text-gray-655 leading-relaxed text-base font-medium">
                Jalal-Abad International University is committed to preparing students for successful careers by providing various career services. The university has strong connections with industries and offers internship programs, job fairs, and career counselling. Graduates of JASU often find opportunities in government sectors, healthcare, engineering, education, and more. The university's career services help students build their resumes, improve interview skills, and connect with potential employers.
              </p>
            </section>

            {/* Section 14: How we assist you */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle2 className="text-medical" size={24} /> How WCIEC Delhi Assists You in Getting Admission
              </h3>
              <p className="text-gray-650 leading-relaxed text-base font-medium">
                WCIEC Delhi is a reliable choice for students aiming to pursue MBBS in Kyrgyzstan and other overseas destinations. With over 12,000 successful placements in international institutions, we offer excellent education options without donation fees. WCIEC guides students throughout the entire admissions process, from selecting the right university to visa assistance. Our experienced consultants provide personalised advice and support, ensuring a smooth and successful overseas education journey.
              </p>
            </section>

            {/* Section 15: Call us banner */}
            <section className="bg-navy text-white py-10 px-8 rounded-[24px] relative overflow-hidden shadow-xl text-center space-y-4">
              <h3 className="text-2xl font-black">Call us for Admission</h3>
              <p className="text-accent text-lg font-bold">"The best kind of education is observation of the outside world!"</p>
              <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm font-black uppercase tracking-wider">
                <a href="tel:+918586873357" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-8586873357
                </a>
                <a href="tel:+919540003000" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-9540003000
                </a>
              </div>
            </section>

            {/* Section 16: Bottom Apply Form Banner (High Converting CTA) */}
            <section className="bg-navy text-white py-16 px-6 md:px-12 rounded-[24px] overflow-hidden relative shadow-2xl" id="apply">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/15 blur-3xl rounded-full translate-x-1/2" />
              <div className="max-w-3xl mx-auto relative z-10 space-y-8">
                <div className="text-center space-y-3">
                  <span className="text-xs font-black text-accent uppercase tracking-widest block">Secure Your Seat Today</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight">Apply Online</h2>
                  <p className="text-gray-300 font-medium text-sm md:text-base">Register now to lock in your MBBS seat for the 2026 batch.</p>
                </div>
                <div className="bg-white text-navy p-8 md:p-12 rounded-3xl shadow-2xl">
                  <GlobalApplyForm buttonText="Submit Application" />
                </div>
              </div>
            </section>

            {/* Section 17: Frequently Asked Questions */}
            <section className="py-12 border-t border-gray-100" id="faq">
              <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
                <div className="w-12 h-1 bg-medical rounded-full mx-auto" />
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Jalal-Abad International University a private or government university?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Jalal-Abad International University is a modern private international university in Kyrgyzstan.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Jalal-Abad International University good for MBBS?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Yes, it features ultra-modern simulation technology, interactive 3D Anatomage tables, and is fully recognized by WHO & NMC for licensing eligibility in India.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  if (slug === "central-asian-international-medical-university") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.eduOrgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.medicalCollegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
        />
        {schemas.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
          />
        )}
        {schemas.courseSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.courseSchema) }}
          />
        )}

        <main className="bg-background min-h-screen text-navy font-sans antialiased">
          {/* Hero Section */}
          <section className="relative py-16 bg-navy text-white overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
            <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="bg-medical/20 border border-medical/30 text-medical font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Study MBBS in Kyrgyzstan
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Central Asian International Medical University (CAIMU)</h1>
                <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl">
                  Bishkek, Kyrgyzstan. | Nearest Airport: Bishkek Airport
                </p>
                <div className="pt-2">
                  <a 
                    href="#apply" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
                  >
                    Apply Now <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Total Tuition Fees Including Hostel</span>
                    <span className="text-xl font-black text-white">3500 $</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-medical/20 flex items-center justify-center text-medical shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">City and Province</span>
                    <span className="text-xl font-black text-white">Bishkek, Kyrgyzstan</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">USP</span>
                    <span className="text-base font-black text-white">Approved by NMC & WHO</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visible Breadcrumbs */}
          <div className="bg-gray-50 border-b border-gray-150 py-3">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-abroad/" className="hover:text-primary transition-colors">MBBS</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-primary transition-colors">MBBS in Kyrgyzstan</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <span className="text-navy">Central Asian International Medical University</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {/* Section 1: Overview */}
            <section className="space-y-4 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-black text-primary uppercase tracking-widest block">Overview</span>
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <Building className="text-medical" size={28} /> Central Asian International Medical University (CAIMU): Overview
              </h2>
              <div className="w-12 h-1 bg-medical rounded-full" />
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                Central Asian International Medical University (CAIMU), located in Bishkek, Kyrgyzstan, is one of the popular destinations among international students for pursuing MBBS. The university is known for offering high-quality medical education at an affordable cost.
              </p>
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                With a strong focus on practical knowledge, modern laboratories, and experienced faculty members, CAIMU attracts a large number of students from India and other countries every year.
              </p>
            </section>

            {/* Section 2: Affiliation and Recognition */}
            <section className="bg-gray-50/50 border border-gray-150 p-8 rounded-[24px] space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-primary" size={24} /> Affiliation and Recognition
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 font-bold text-navy">
                  <CheckCircle2 className="text-medical shrink-0" size={20} />
                  <span>World Health Organization (WHO)</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 font-bold text-navy">
                  <CheckCircle2 className="text-medical shrink-0" size={20} />
                  <span>National Medical Commission (NMC), India</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 font-bold text-navy">
                  <CheckCircle2 className="text-medical shrink-0" size={20} />
                  <span>Ministry of Education and Science, Kyrgyz Republic</span>
                </div>
              </div>
            </section>

            {/* Section 3: Reasons to Select CAIMU */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Reasons to Select CAIMU</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Affordable tuition fees and low cost of living in Kyrgyzstan.",
                  "English-medium MBBS program.",
                  "No donation or capitation fee required for admission.",
                  "Safe and student-friendly environment in Bishkek.",
                  "Global recognition of medical degree from CAIMU.",
                  "Indian food and separate hostel facilities available.",
                  "Strong academic foundation with practical exposure."
                ].map((reason, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-medical shrink-0 mt-0.5" />
                    <p className="text-sm font-bold text-navy leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Quick Highlights */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Quick Highlights</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-lg bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Particular</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Statistics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Type</td>
                      <td className="p-4 text-gray-600">Public</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Intake for the MBBS Course</td>
                      <td className="p-4 text-gray-600">September</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Processing Time for MBBS Admission</td>
                      <td className="p-4 text-gray-600">45-60 days</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Entrance Exam</td>
                      <td className="p-4 text-gray-600">NEET Exam</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Location</td>
                      <td className="p-4 text-gray-600">Jalal-Abad City / Bishkek, Kyrgyzstan</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Eligibility Criteria</td>
                      <td className="p-4 text-gray-600">50% in PCB</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">NEET Exam</td>
                      <td className="p-4 text-gray-600">Yes, it is compulsory</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Course Duration</td>
                      <td className="p-4 text-gray-600">6 years (with internship)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Medium of Education</td>
                      <td className="p-4 text-gray-600">English Language</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Recognition</td>
                      <td className="p-4 text-gray-600">Approved by WHO, NMC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Pros & Cons */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Pros & Cons of Studying MBBS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">Advantages</h3>
                  <ul className="space-y-3">
                    {[
                      "Affordable tuition and living costs.",
                      "English-medium MBBS program.",
                      "Recognized by WHO and NMC.",
                      "Experienced faculty and modern infrastructure.",
                      "Diverse student community with many Indian students.",
                      "Good hostel and food facilities."
                    ].map((adv, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-red-800 flex items-center gap-2">Disadvantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-red-707 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>Harsh winters may be tough for some students.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-red-707 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>Limited local language knowledge can be a barrier in clinical practice.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Fee Structure */}
            <section className="space-y-6" id="fees">
              <h2 className="text-3xl font-black tracking-tight">Fee Structure</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-xl bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Particulars</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider text-medical">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Total Tuition Fees (Including Hostel)</td>
                      <td className="p-4 text-medical text-base">3500 $ per year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Faculties */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Faculties</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Faculty of General Medicine", 
                  "Faculty of Dentistry", 
                  "Faculty of Pharmacy", 
                  "Faculty of Nursing", 
                  "Faculty of Public Health"
                ].map((faculty, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <BookOpen size={18} className="text-medical shrink-0" />
                    <span className="text-sm font-bold text-navy leading-snug">{faculty}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Eligibility Criteria */}
            <section className="space-y-6" id="eligibility">
              <h2 className="text-3xl font-black tracking-tight">Eligibility Criteria</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-medical/10 flex items-center justify-center text-medical shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    Students must have scored a minimum of 50% in Physics, Chemistry, and Biology in their 12th grade.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    They should also be at least 17 years old by December 31st of the admission year.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Award size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    The NEET UG test must be qualified for admission.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Courses & Duration */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Clock className="text-medical" size={24} /> Courses & Duration
              </h3>
              <p className="text-gray-655 leading-relaxed text-base font-medium">
                Students begin with a 5-year MBBS program supervised by knowledgeable and experienced instructors. Upon completing the course, they are required to undergo a 1-year internship, obtaining practical experience by caring for patients in medical facilities.
              </p>
            </section>

            {/* Section 10: Admission Procedure */}
            <section className="space-y-6" id="process">
              <h2 className="text-3xl font-black tracking-tight">Admission Procedure</h2>
              <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                {[
                  "Fill out the online application on the university's official website or on the Nile Education consultancy website.",
                  "Provide your contact details like address, email ID, and mobile number for communication.",
                  "Correctly upload all the required documents as mentioned in the application guidelines.",
                  "Pay the tuition fee online and make sure to save or print the payment receipt for future use.",
                  "Apply for your student VISA once the admission is confirmed.",
                  "When you reach the university, submit all your documents in hard copy at the admission office."
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                    <div className="text-navy font-bold text-base md:text-lg">{step}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Documents Required */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Documents Required</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Scanned copy of original passport",
                  "Scanned copy of 10+2 mark sheets",
                  "Scanned copy of application form",
                  "Scanned copy of NEET report card",
                  "Birth certificate",
                  "Medical certificate",
                  "Passport-size photographs"
                ].map((doc, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-medical shrink-0" />
                    <span className="text-sm font-bold text-navy">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12: Hostel & Accommodation */}
            <section className="space-y-6" id="accommodation">
              <h2 className="text-3xl font-black tracking-tight">Hostel & Accommodation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                  <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                    <BedDouble className="text-primary" size={20} /> Hostel Facilities
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "CAIMU provides comfortable hostel facilities for both local and international students.",
                      "Well-furnished rooms with 24/7 security.",
                      "Separate hostels for boys and girls.",
                      "Indian food available in the mess.",
                      "Common kitchen and laundry facilities."
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-655 font-bold">
                        <CheckCircle2 size={14} className="text-medical mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3 flex flex-col justify-center">
                  <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                    <DollarSign className="text-accent" size={20} /> Accommodation Cost
                  </h4>
                  <p className="text-2xl font-black text-navy">Approx. INR 60,000 – INR 75,000 <span className="text-sm font-medium text-gray-400">per year</span></p>
                </div>
              </div>
            </section>

            {/* Section 13: Career Opportunities */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Career Opportunities</h2>
              <p className="text-gray-500 font-bold text-sm">After completing MBBS from CAIMU, students can:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Appear for FMGE/NExT in India.",
                  "Apply for USMLE, PLAB for the USA/UK.",
                  "Pursue post-graduation abroad or in India.",
                  "Work in reputed hospitals, clinics, or start their own practice.",
                  "Join research or academic positions."
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                    <HeartPulse size={16} className="text-primary shrink-0" />
                    <span className="text-sm font-bold text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 14: How WCIEC Delhi Assists You */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">How we assist you?</h2>
              <p className="text-gray-500 font-bold text-sm">At WCIEC Delhi, we offer end-to-end support for your MBBS journey:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Free career counseling",
                  "Application and documentation assistance",
                  "Admission confirmation and seat booking",
                  "Visa processing support",
                  "Travel and accommodation arrangements",
                  "Pre-departure briefing",
                  "Post-arrival support in Kyrgyzstan"
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-medical shrink-0" />
                    <span className="text-xs font-bold text-navy">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 15: Call us banner */}
            <section className="bg-navy text-white py-10 px-8 rounded-[24px] relative overflow-hidden shadow-xl text-center space-y-4">
              <h3 className="text-2xl font-black">Call us for Admission</h3>
              <p className="text-accent text-lg font-bold">"The best kind of education is observation of the outside world!"</p>
              <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm font-black uppercase tracking-wider">
                <a href="tel:+918586873357" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-8586873357
                </a>
                <a href="tel:+919540003000" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-9540003000
                </a>
              </div>
            </section>

            {/* Section 16: Bottom Apply Form Banner (High Converting CTA) */}
            <section className="bg-navy text-white py-16 px-6 md:px-12 rounded-[24px] overflow-hidden relative shadow-2xl" id="apply">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/15 blur-3xl rounded-full translate-x-1/2" />
              <div className="max-w-3xl mx-auto relative z-10 space-y-8">
                <div className="text-center space-y-3">
                  <span className="text-xs font-black text-accent uppercase tracking-widest block">Secure Your Seat Today</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight">Apply Online</h2>
                  <p className="text-gray-300 font-medium text-sm md:text-base">Register now to lock in your MBBS seat for the 2026 batch.</p>
                </div>
                <div className="bg-white text-navy p-8 md:p-12 rounded-3xl shadow-2xl">
                  <GlobalApplyForm buttonText="Submit Application" />
                </div>
              </div>
            </section>

            {/* Section 17: Frequently Asked Questions */}
            <section className="py-12 border-t border-gray-100" id="faq">
              <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
                <div className="w-12 h-1 bg-medical rounded-full mx-auto" />
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Central Asian International Medical University (CAIMU) a private or government university?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Central Asian International Medical University (CAIMU) is a public university recognized by the Ministry of Education and Science of the Kyrgyz Republic.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Central Asian International Medical University (CAIMU) good for MBBS?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Yes, it offers modern laboratories, experienced faculty, WHO & NMC recognition, and an exceptionally budget-friendly curriculum.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>What are the fees for MBBS at Central Asian International Medical University (CAIMU)?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">The total tuition fees including hostel are highly affordable, set at 3500 $ per year.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>What are the fees of the International University of Kyrgyzstan for MBBS?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Please refer to the fees section of the respective university page or contact WCIEC consultants for detailed cost breakups.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  if (slug === "osh-state-university") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.eduOrgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.medicalCollegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
        />
        {schemas.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
          />
        )}
        {schemas.courseSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.courseSchema) }}
          />
        )}

        <main className="bg-background min-h-screen text-navy font-sans antialiased">
          {/* Hero Section */}
          <section className="relative py-16 bg-navy text-white overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
            <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="bg-medical/20 border border-medical/30 text-medical font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Study MBBS in Kyrgyzstan
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Osh State University</h1>
                <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl">
                  331 Lenin Avenue, Osh 723500, Kyrgyzstan. | Nearest Airport: Osh Airport
                </p>
                <div className="pt-2">
                  <a 
                    href="#apply" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
                  >
                    Apply Now <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Total Tuition Fees Including Hostel</span>
                    <span className="text-xl font-black text-white">4000 $</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-medical/20 flex items-center justify-center text-medical shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">City and Province</span>
                    <span className="text-xl font-black text-white">Osh, Kyrgyzstan</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">USP</span>
                    <span className="text-base font-black text-white">Founded in 1951. Approved by NMC & WHO</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visible Breadcrumbs */}
          <div className="bg-gray-50 border-b border-gray-150 py-3">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-abroad/" className="hover:text-primary transition-colors">MBBS</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-primary transition-colors">MBBS in Kyrgyzstan</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <span className="text-navy">Osh State University</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {/* Section 1: Overview */}
            <section className="space-y-4 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-black text-primary uppercase tracking-widest block">Overview</span>
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <Building className="text-medical" size={28} /> Osh State Medical University: Overview
              </h2>
              <div className="w-12 h-1 bg-medical rounded-full" />
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                Osh State Medical University, founded in 1951, is a prestigious public medical university in Kyrgyzstan. Known for its excellent infrastructure and teaching methods, it attracts many Indian students. With over 29,000 students enrolled, the university offers MBBS/MD programs and emphasises research, exchange opportunities, and cultural preservation. It trains specialists for foreign countries and has students from various nations, including India, Russia, and Nepal.
              </p>
            </section>

            {/* Section 2: Affiliation and Recognition */}
            <section className="bg-gray-50/50 border border-gray-150 p-8 rounded-[24px] space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-primary" size={24} /> Affiliation and Recognition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-bold text-navy text-sm">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="text-medical shrink-0" size={18} />
                  <span>Recognized by MCI (Medical Council of India)</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="text-medical shrink-0" size={18} />
                  <span>Recognized by FAIMER</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="text-medical shrink-0" size={18} />
                  <span>NMC and WHO approved</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="text-medical shrink-0" size={18} />
                  <span>Affiliation by IMED</span>
                </div>
              </div>
            </section>

            {/* Section 3: Reasons to Select Osh State University */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Reasons to Select Osh State University</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Osh State Medical University offers instruction in English.",
                  "The faculty comprises well-qualified and experienced professionals.",
                  "The university provides well-equipped hostel facilities with all necessary amenities.",
                  "No donation or hidden charges are required for admission.",
                  "Students can take part in various cultural events and extracurricular activities."
                ].map((reason, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-medical shrink-0 mt-0.5" />
                    <p className="text-sm font-bold text-navy leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Quick Highlights */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Quick Highlights</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-lg bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Particular</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Statistics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Type</td>
                      <td className="p-4 text-gray-600">Public</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Intake for the MBBS Course</td>
                      <td className="p-4 text-gray-600">September</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Processing Time for MBBS Admission</td>
                      <td className="p-4 text-gray-600">45-60 days</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Entrance Exam</td>
                      <td className="p-4 text-gray-600">NEET Exam</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Location</td>
                      <td className="p-4 text-gray-600">Lenin Avenue, Osh, Kyrgyzstan</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Eligibility Criteria</td>
                      <td className="p-4 text-gray-600">50% in PCB</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">NEET Exam</td>
                      <td className="p-4 text-gray-600">Yes, it is compulsory</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Annual Tuition Fees</td>
                      <td className="p-4 text-gray-600">4000 USD</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Course Duration</td>
                      <td className="p-4 text-gray-600">6 years (with internship)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Medium of Education</td>
                      <td className="p-4 text-gray-600">English Language</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Ranking</td>
                      <td className="p-4 text-gray-600">Country - 6 | World - 8915</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Recognition</td>
                      <td className="p-4 text-gray-600">Approved by WHO and NMC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Pros & Cons */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Pros & Cons of Studying MBBS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">Advantages</h3>
                  <ul className="space-y-3">
                    {[
                      "Affordable tuition and living costs.",
                      "English-medium MBBS program.",
                      "Recognized by WHO and NMC.",
                      "Experienced faculty and modern infrastructure.",
                      "Diverse student community with many Indian students.",
                      "Good hostel and food facilities."
                    ].map((adv, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-red-800 flex items-center gap-2">Disadvantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-red-707 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>Harsh winters may be tough for some students.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-red-707 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>Limited local language knowledge can be a barrier in clinical practice.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Fee Structure */}
            <section className="space-y-6" id="fees">
              <h2 className="text-3xl font-black tracking-tight">Fee Structure</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-xl bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">Particulars</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">Year 1</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">Year 2</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">Year 3</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">Year 4</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">Year 5</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">Year 6</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Tuition Fee</td>
                      <td className="p-4 text-gray-600">4000 USD</td>
                      <td className="p-4 text-gray-600">4000 USD</td>
                      <td className="p-4 text-gray-600">4000 USD</td>
                      <td className="p-4 text-gray-600">4000 USD</td>
                      <td className="p-4 text-gray-600">4000 USD</td>
                      <td className="p-4 text-gray-600">4000 USD</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Hostel Fees</td>
                      <td className="p-4 text-gray-605">600 USD</td>
                      <td className="p-4 text-gray-605">600 USD</td>
                      <td className="p-4 text-gray-605">600 USD</td>
                      <td className="p-4 text-gray-605">600 USD</td>
                      <td className="p-4 text-gray-605">600 USD</td>
                      <td className="p-4 text-gray-605">600 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Faculties */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Faculties</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Faculty of Medicine", "Faculty of Dentistry", "Language faculty",
                  "Nursing Faculty", "Faculty of Preparatory course", 
                  "Faculty for Diploma courses", "Faculty of academic council"
                ].map((faculty, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <BookOpen size={16} className="text-medical shrink-0" />
                    <span className="text-xs font-bold text-navy leading-snug">{faculty}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Eligibility Criteria */}
            <section className="space-y-6" id="eligibility">
              <h2 className="text-3xl font-black tracking-tight">Eligibility Criteria</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-medical/10 flex items-center justify-center text-medical shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    Students must have scored a minimum of 50% in PCB in their 12th grade.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    They should also be at least 17 years old by December 31st of the admission year.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Award size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    The NEET UG test must be qualified for admission.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Courses, Syllabus & Duration */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Courses, Syllabus & Duration</h2>
              
              {/* Syllabus breakdown */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-navy">Syllabus Breakdown</h4>
                <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th className="p-4 font-black text-xs uppercase tracking-wider">Year</th>
                        <th className="p-4 font-black text-xs uppercase tracking-wider">Semester</th>
                        <th className="p-4 font-black text-xs uppercase tracking-wider">Syllabus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 text-sm font-semibold">
                      <tr>
                        <td className="p-4 text-navy" rowSpan={2}>1st Year</td>
                        <td className="p-4 text-gray-500">1st Semester</td>
                        <td className="p-4 text-gray-700">Anatomy</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-500">2nd Semester</td>
                        <td className="p-4 text-gray-700">Anatomy and Histology</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-navy" rowSpan={2}>2nd Year</td>
                        <td className="p-4 text-gray-500">3rd Semester</td>
                        <td className="p-4 text-gray-700">General Pathology, Anatomy, Physiology, Cell Biology, Microbiology, Histology, Biochemistry</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-500">4th Semester</td>
                        <td className="p-4 text-gray-700">Biochemistry, Microbiology, Physiology</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-navy" rowSpan={2}>3rd Year</td>
                        <td className="p-4 text-gray-500">5th Semester</td>
                        <td className="p-4 text-gray-700">Pathology, Path Physiology, Microbiology</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-gray-500">6th Semester</td>
                        <td className="p-4 text-gray-700">Pathology, Pharmacology</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-navy">4th to 6th Year</td>
                        <td className="p-4 text-gray-500">Semester 7th to 12th</td>
                        <td className="p-4 text-gray-700">General Surgery, Neurology, Primary Care medicine, Oncology, Internal Medicine, Paediatrics, Obstetrics and Gynaecology, Neurology and Psychiatry, Psychology, ENT, Emergency Medicine, Cardiology</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Course duration text */}
              <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-3">
                <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                  <Clock className="text-medical" size={20} /> MBBS Course Duration
                </h4>
                <p className="text-gray-655 leading-relaxed text-base font-medium">
                  Students begin with a 5-year MBBS program supervised by knowledgeable and experienced instructors. Upon completing the course, they are required to undergo a 1-year internship, obtaining practical experience by caring for patients in medical facilities.
                </p>
              </div>
            </section>

            {/* Section 10: Admission Procedure */}
            <section className="space-y-6" id="process">
              <h2 className="text-3xl font-black tracking-tight">Admission Procedure</h2>
              <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                {[
                  "Fill out the online application on the university's official website or on the Nile Education consultancy website.",
                  "Please share your complete contact information, including your current address, active email ID, and mobile number. This will help us stay in touch with you regarding updates, admission details, and any important communication throughout the application process.",
                  "Correctly upload all the required documents as mentioned in the application guidelines.",
                  "Pay the tuition fee online and make sure to save or print the payment receipt for future use.",
                  "Apply for your student VISA once the admission is confirmed.",
                  "When you reach the university, submit all your documents in hard copy at the admission office."
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                    <div className="text-navy font-bold text-base md:text-lg">{step}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Documents Required */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Documents Required</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Scanned copy of original passport",
                  "Scanned copy of 10+2 mark sheets",
                  "Scanned copy of application form",
                  "Scanned copy of NEET report card",
                  "Birth certificate",
                  "Medical certificate",
                  "Passport-size photographs"
                ].map((doc, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-medical shrink-0" />
                    <span className="text-sm font-bold text-navy">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12: Ranking, Scholarships & Accommodation */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Ranking, Scholarships & Accommodation</h2>
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Ranking table */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-lg font-bold text-navy">Country & World Ranking</h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-navy text-white">
                        <tr>
                          <th className="p-4 font-black text-xs uppercase tracking-wider">Institution Ranking</th>
                          <th className="p-4 font-black text-xs uppercase tracking-wider">Position</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-150 font-bold">
                        <tr>
                          <td className="p-4 text-navy">Ranking in the World</td>
                          <td className="p-4 text-gray-600">8915</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-navy">Ranking in the Country</td>
                          <td className="p-4 text-gray-600">6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Hostel & Scholarships */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3" id="accommodation">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <BedDouble className="text-primary" size={20} /> Hostel & Accommodation
                    </h4>
                    <p className="text-gray-605 text-sm font-medium leading-relaxed">
                      Osh State University offers affordable hostel accommodations for students. The hostels are equipped with essential amenities like beds, study tables, and common areas. The cost of accommodation is budget-friendly, making it accessible for both local and international students.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <Award className="text-accent" size={20} /> Scholarships
                    </h4>
                    <p className="text-gray-605 text-sm font-medium leading-relaxed">
                      Osh State University offers scholarships to students who demonstrate strong academic performance or require financial assistance. These scholarships aim to support students in their educational pursuits by reducing tuition fees or providing financial assistance. Students are encouraged to apply through the university's scholarship programs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 13: Career Opportunities */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <HeartPulse className="text-primary" size={24} /> Career Opportunities
              </h3>
              <p className="text-gray-650 leading-relaxed text-base font-medium">
                The university's programs are designed to prepare students for roles in hospitals, clinics, and research institutions. Additionally, the university's reputation and international recognition can enhance employment prospects both locally and abroad.
              </p>
            </section>

            {/* Section 14: How we assist you */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle2 className="text-medical" size={24} /> How WCIEC Delhi Assists You in Getting Admission
              </h3>
              <p className="text-gray-650 leading-relaxed text-base font-medium">
                WCIEC Delhi is a reliable choice for students aiming to pursue MBBS in Kyrgyzstan and other overseas destinations. With over 12,000 successful placements in international institutions, we offer excellent education options without donation fees. WCIEC guides students throughout the entire admissions process, from selecting the right university to visa assistance. Our experienced consultants provide personalised advice and support, ensuring a smooth and successful overseas education journey.
              </p>
            </section>

            {/* Section 15: Call us banner */}
            <section className="bg-navy text-white py-10 px-8 rounded-[24px] relative overflow-hidden shadow-xl text-center space-y-4">
              <h3 className="text-2xl font-black">Call us for Admission</h3>
              <p className="text-accent text-lg font-bold">"The best kind of education is observation of the outside world!"</p>
              <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm font-black uppercase tracking-wider">
                <a href="tel:+918586873357" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-8586873357
                </a>
                <a href="tel:+919540003000" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-9540003000
                </a>
              </div>
            </section>

            {/* Section 16: Bottom Apply Form Banner (High Converting CTA) */}
            <section className="bg-navy text-white py-16 px-6 md:px-12 rounded-[24px] overflow-hidden relative shadow-2xl" id="apply">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/15 blur-3xl rounded-full translate-x-1/2" />
              <div className="max-w-3xl mx-auto relative z-10 space-y-8">
                <div className="text-center space-y-3">
                  <span className="text-xs font-black text-accent uppercase tracking-widest block">Secure Your Seat Today</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight">Apply Online</h2>
                  <p className="text-gray-300 font-medium text-sm md:text-base">Register now to lock in your MBBS seat for the 2026 batch.</p>
                </div>
                <div className="bg-white text-navy p-8 md:p-12 rounded-3xl shadow-2xl">
                  <GlobalApplyForm buttonText="Submit Application" />
                </div>
              </div>
            </section>

            {/* Section 17: Frequently Asked Questions */}
            <section className="py-12 border-t border-gray-100" id="faq">
              <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
                <div className="w-12 h-1 bg-medical rounded-full mx-auto" />
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Osh State University a private or government?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Osh State University is a leading public (government) university in Kyrgyzstan.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Osh State University good for MBBS?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Yes, it is the oldest, most prestigious, and highest-ranked university in southern Kyrgyzstan, fully recognized by WHO and NMC.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>What are the MBBS fees at Osh State University?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">The annual tuition fee is 4000 USD, and hostel fees are 600 USD per year.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>What are the MBBS fees for Indian students at Osh State University?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">The total cost including tuition and hostel is approximately $4600 per year, which is highly cost-effective.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  if (slug === "osh-international-medical-university") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.eduOrgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.medicalCollegeSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
        />
        {schemas.faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
          />
        )}
        {schemas.courseSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.courseSchema) }}
          />
        )}

        <main className="bg-background min-h-screen text-navy font-sans antialiased">
          {/* Hero Section */}
          <section className="relative py-16 bg-navy text-white overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
            <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="bg-medical/20 border border-medical/30 text-medical font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Study MBBS in Kyrgyzstan
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">Osh International Medical University</h1>
                <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl">
                  2, K. Sabirova Street Kyzyl Kyshtak, Osh city, 723500, Kyrgyzstan. | Nearest Airport: Osh International Airport
                </p>
                <div className="pt-2">
                  <a 
                    href="#apply" 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2"
                  >
                    Apply Now <ChevronRight size={16} />
                  </a>
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Total Tuition Fees Including Hostel</span>
                    <span className="text-xl font-black text-white">3500 $</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-medical/20 flex items-center justify-center text-medical shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">City and Province</span>
                    <span className="text-xl font-black text-white">Osh, Kyrgyzstan</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">USP</span>
                    <span className="text-base font-black text-white">Founded in 1995. Approved by NMC & WHO</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visible Breadcrumbs */}
          <div className="bg-gray-50 border-b border-gray-150 py-3">
            <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-abroad/" className="hover:text-primary transition-colors">MBBS</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-primary transition-colors">MBBS in Kyrgyzstan</Link>
              <ChevronRight size={10} className="text-gray-300" />
              <span className="text-navy">Osh International Medical University</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {/* Section 1: Overview */}
            <section className="space-y-4 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-black text-primary uppercase tracking-widest block">Overview</span>
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <Building className="text-medical" size={28} /> Osh International Medical University: Overview
              </h2>
              <div className="w-12 h-1 bg-medical rounded-full" />
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                Osh International Medical University, established in 1951, is a well-known medical institution in Kyrgyzstan offering diplomas, degrees, master's, and doctorate programs. It provides hands-on medical exposure through hospital visits and practical training, especially in the final years.
              </p>
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">
                Located in the education hub of Osh, it is highly popular among Indian and other Asian students. With a strong focus on quality medical education, it supports students' growth by addressing their academic and developmental needs.
              </p>
            </section>

            {/* Section 2: Affiliation and Recognition */}
            <section className="bg-gray-50/50 border border-gray-150 p-8 rounded-[24px] space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-primary" size={24} /> Affiliation and Recognition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-bold text-navy text-sm">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-medical shrink-0" size={16} />
                  <span>National Medical Commission (NMC)</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-medical shrink-0" size={16} />
                  <span>World Health Organization (WHO)</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-medical shrink-0" size={16} />
                  <span>International Medical Education Directory (IMED)</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-medical shrink-0" size={16} />
                  <span>US Education Department & GMC of Great Britain</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-medical shrink-0" size={16} />
                  <span>ECFMG for Foreign Medical Graduates</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-medical shrink-0" size={16} />
                  <span>Ministry of Education, Kyrgyzstan</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-medical shrink-0" size={16} />
                  <span>World Federation for Medical Education (WFME)</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                  <CheckCircle2 className="text-medical shrink-0" size={16} />
                  <span>FAIMER</span>
                </div>
              </div>
            </section>

            {/* Section 3: Reasons to Select Osh International Medical University */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Reasons to Select Osh International Medical University</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Advanced medical technology, hands-on training, and an innovative curriculum.",
                  "Learn under experienced doctors and professors with global accreditations (WHO, NMC, USMLE).",
                  "Exchange programs offer international exposure and strong career opportunities.",
                  "Comfortable hostel rooms and hygienic Indian meals available in spacious dining areas."
                ].map((reason, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-medical shrink-0 mt-0.5" />
                    <p className="text-sm font-bold text-navy leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Quick Highlights */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Quick Highlights</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-lg bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Particular</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Statistics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Type</td>
                      <td className="p-4 text-gray-600">Private</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Intake for the MBBS Course</td>
                      <td className="p-4 text-gray-600">September</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Processing Time for MBBS Admission</td>
                      <td className="p-4 text-gray-600">45-60 days</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Entrance Exam</td>
                      <td className="p-4 text-gray-600">NEET Exam</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Location</td>
                      <td className="p-4 text-gray-600">Osh, Kyrgyzstan</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Eligibility Criteria</td>
                      <td className="p-4 text-gray-600">50% in PCB</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">NEET Exam</td>
                      <td className="p-4 text-gray-600">Yes, it is compulsory</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Annual Tuition Fees</td>
                      <td className="p-4 text-gray-600">3500 USD</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Course Duration</td>
                      <td className="p-4 text-gray-600">6 years (with internship)</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Medium of Education</td>
                      <td className="p-4 text-gray-600">English Language</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Ranking</td>
                      <td className="p-4 text-gray-600">Country - 6 | World - 8915</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">University Recognition</td>
                      <td className="p-4 text-gray-600">Approved by WHO and NMC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Pros & Cons */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Pros & Cons of Studying MBBS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">Advantages</h3>
                  <ul className="space-y-3">
                    {[
                      "Affordable tuition and living costs.",
                      "English-medium MBBS program.",
                      "Recognized by WHO and NMC.",
                      "Experienced faculty and modern infrastructure.",
                      "Diverse student community with many Indian students.",
                      "Good hostel and food facilities."
                    ].map((adv, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                        <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 space-y-4">
                  <h3 className="text-xl font-bold text-red-800 flex items-center gap-2">Disadvantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2.5 text-sm text-red-707 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>Harsh winters may be tough for some students.</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-red-707 font-bold">
                      <span className="text-red-500 mt-1 shrink-0">•</span>
                      <span>Limited local language knowledge can be a barrier in clinical practice.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Fee Structure */}
            <section className="space-y-6" id="fees">
              <h2 className="text-3xl font-black tracking-tight">Fee Structure</h2>
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-xl bg-white">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">Particulars</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">1st Year</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">2nd Year</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">3rd Year</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">4th Year</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">5th Year</th>
                      <th className="p-4 font-black text-xs uppercase tracking-wider">6th Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150 font-bold">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Tuition Fees</td>
                      <td className="p-4 text-gray-600">3500 USD</td>
                      <td className="p-4 text-gray-600">3500 USD</td>
                      <td className="p-4 text-gray-600">3500 USD</td>
                      <td className="p-4 text-gray-600">3500 USD</td>
                      <td className="p-4 text-gray-600">3500 USD</td>
                      <td className="p-4 text-gray-600">3500 USD</td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 text-navy">Hostel Fees</td>
                      <td className="p-4 text-gray-650">500 USD</td>
                      <td className="p-4 text-gray-650">500 USD</td>
                      <td className="p-4 text-gray-650">500 USD</td>
                      <td className="p-4 text-gray-650">500 USD</td>
                      <td className="p-4 text-gray-650">500 USD</td>
                      <td className="p-4 text-gray-650">500 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Faculty Departments */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Faculty Departments</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Department of Anatomy & Physiology",
                  "Department of Hospital Therapy",
                  "Department of General Surgery",
                  "Department of Obstetrics and Pediatrics",
                  "Department of Propedeutics of Internal disease and family medicine",
                  "Department of Morphological Disciplines and Public Health",
                  "Department of Pharmaceutical Technology and Chemistry",
                  "Department of Biomedical Disciplines",
                  "Department of Surgery and traumatology"
                ].map((dept, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <BookOpen size={16} className="text-medical shrink-0" />
                    <span className="text-xs font-bold text-navy leading-snug">{dept}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Eligibility Criteria */}
            <section className="space-y-6" id="eligibility">
              <h2 className="text-3xl font-black tracking-tight">Eligibility Criteria</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-medical/10 flex items-center justify-center text-medical shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    Students must have scored a minimum of 50% in PCB in their 12th grade.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Calendar size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    They should also be at least 17 years old by December 31st of the admission year.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Award size={20} />
                  </div>
                  <p className="text-sm font-bold text-navy leading-relaxed">
                    The NEET UG test must be qualified for admission.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Courses, Syllabus & Duration */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Courses, Syllabus & Duration</h2>
              
              {/* Syllabus breakdown */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-navy">Syllabus Breakdown</h4>
                <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th className="p-4 font-black text-xs uppercase tracking-wider">Year</th>
                        <th className="p-4 font-black text-xs uppercase tracking-wider">Subjects</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 text-sm font-semibold">
                      <tr>
                        <td className="p-4 text-navy">First Year</td>
                        <td className="p-4 text-gray-700">Anatomy and Histology</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-navy">Second Year</td>
                        <td className="p-4 text-gray-700">Histology, Biochemistry, Anatomy, Physiology cell biology, Microbiology, General Pathology</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-navy">Third Year</td>
                        <td className="p-4 text-gray-700">Pathology, Pharmacology, Microbiology, Pathophysiology, Genetics</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-navy">Fourth to Sixth Year</td>
                        <td className="p-4 text-gray-700">General Surgery, Neurology, Primary Care Medicine, Obstetrics, Gynecology, Oncology, Internal Medicine, Pediatrics, Neurology & Psychiatry, Psychology, ENT, Emergency Medicine & Cardiology</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Course duration text */}
              <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-3">
                <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                  <Clock className="text-medical" size={20} /> MBBS Course Duration
                </h4>
                <p className="text-gray-655 leading-relaxed text-base font-medium">
                  Osh International Medical University offers a 6-year full-time MBBS (MD) program in English for international students. Taught by experienced professors from global universities, the course combines modern teaching methods with strong theoretical and practical training. After completing the 6 years, students must also complete a 1-year mandatory internship to gain real-world experience.
                </p>
              </div>
            </section>

            {/* Section 10: Admission Procedure */}
            <section className="space-y-6" id="process">
              <h2 className="text-3xl font-black tracking-tight">Admission Procedure</h2>
              <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                {[
                  "Fill out the online application on the university's official website or on the Nile Education consultancy website.",
                  "Correctly upload all the required documents as mentioned in the application guidelines.",
                  "Pay the tuition fee online and make sure to save or print the payment receipt for future use.",
                  "Apply for your student VISA once the admission is confirmed.",
                  "When you reach the university, submit all your documents in hard copy at the admission office."
                ].map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                    <div className="text-navy font-bold text-base md:text-lg">{step}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Documents Required */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Documents Required</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Scanned copy of original passport",
                  "Scanned copy of 10+2 mark sheets",
                  "Scanned copy of application form",
                  "Scanned copy of NEET report card",
                  "Birth certificate",
                  "Medical certificate",
                  "Passport-size photographs",
                  "HIV test report",
                  "COVID-19 report",
                  "Affidavit document"
                ].map((doc, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                    <CheckCircle2 size={16} className="text-medical shrink-0" />
                    <span className="text-sm font-bold text-navy">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12: Ranking, Scholarships & Accommodation */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight">Ranking, Scholarships & Accommodation</h2>
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Ranking table */}
                <div className="lg:col-span-5 space-y-4">
                  <h4 className="text-lg font-bold text-navy">Country & World Ranking</h4>
                  <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-navy text-white">
                        <tr>
                          <th className="p-4 font-black text-xs uppercase tracking-wider">Institution Ranking</th>
                          <th className="p-4 font-black text-xs uppercase tracking-wider">Position</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-150 font-bold">
                        <tr>
                          <td className="p-4 text-navy">Ranking in the World</td>
                          <td className="p-4 text-gray-600">8900-9000</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-navy">Ranking in the Country</td>
                          <td className="p-4 text-gray-600">6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Hostel & Scholarships */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3" id="accommodation">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <BedDouble className="text-primary" size={20} /> Hostel & Accommodation
                    </h4>
                    <p className="text-gray-605 text-sm font-medium leading-relaxed">
                      The university provides separate hostels for boys and girls with all basic amenities like beds, study tables, heating, and Wi-Fi. Indian food is also available. The cost is affordable, usually around $100-$120 per month.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <Award className="text-accent" size={20} /> Scholarships
                    </h4>
                    <p className="text-gray-605 text-sm font-medium leading-relaxed">
                      While full scholarships are limited, the university offers merit-based and need-based financial support to deserving students. Special discounts may also be available for early applicants or top performers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 13: Career Opportunities */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <HeartPulse className="text-primary" size={24} /> Career Opportunities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm text-gray-700 font-bold">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>Graduates of OSHIMU are eligible to work globally after clearing licensing exams like NMC, USMLE, or PLAB.</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-700 font-bold">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                  <span>The university also supports internships, hospital training, and placements to boost students' medical careers.</span>
                </li>
              </ul>
            </section>

            {/* Section 14: How we assist you */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle2 className="text-medical" size={24} /> How WCIEC Delhi Assists You in Getting Admission
              </h3>
              <p className="text-gray-655 leading-relaxed text-base font-medium">
                WCIEC Delhi is a trusted partner for students aiming to study abroad, particularly in Kyrgyzstan for MBBS. With over 12,000 successful placements in international institutions, we offer excellent education options without donation fees. WCIEC guides students throughout the entire admissions process, from selecting the right university to visa assistance. Our experienced consultants provide personalized advice and support, ensuring a smooth and successful overseas education journey.
              </p>
            </section>

            {/* Section 15: Call us banner */}
            <section className="bg-navy text-white py-10 px-8 rounded-[24px] relative overflow-hidden shadow-xl text-center space-y-4">
              <h3 className="text-2xl font-black">Call us for Admission</h3>
              <p className="text-accent text-lg font-bold">"The best kind of education is observation of the outside world!"</p>
              <div className="flex flex-wrap justify-center gap-4 pt-2 text-sm font-black uppercase tracking-wider">
                <a href="tel:+918586873357" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-8586873357
                </a>
                <a href="tel:+919540003000" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  📞 +91-9540003000
                </a>
              </div>
            </section>

            {/* Section 16: Bottom Apply Form Banner (High Converting CTA) */}
            <section className="bg-navy text-white py-16 px-6 md:px-12 rounded-[24px] overflow-hidden relative shadow-2xl" id="apply">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/15 blur-3xl rounded-full translate-x-1/2" />
              <div className="max-w-3xl mx-auto relative z-10 space-y-8">
                <div className="text-center space-y-3">
                  <span className="text-xs font-black text-accent uppercase tracking-widest block">Secure Your Seat Today</span>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tight">Apply Online</h2>
                  <p className="text-gray-300 font-medium text-sm md:text-base">Register now to lock in your MBBS seat for the 2026 batch.</p>
                </div>
                <div className="bg-white text-navy p-8 md:p-12 rounded-3xl shadow-2xl">
                  <GlobalApplyForm buttonText="Submit Application" />
                </div>
              </div>
            </section>

            {/* Section 17: Frequently Asked Questions */}
            <section className="py-12 border-t border-gray-100" id="faq">
              <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
                <div className="w-12 h-1 bg-medical rounded-full mx-auto" />
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Osh International Medical University a private or government university?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Osh International Medical University is a modern private medical institution in Kyrgyzstan.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>Is Osh International Medical University good for MBBS?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">Yes, it is highly reputable for its English-medium MBBS program, offering extensive hospital training and globally recognized degree credentials.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>What are the fees for MBBS at Osh International Medical University?</span>
                  </h4>
                  <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">The annual tuition fee is 3500 USD, and the hostel fee is 500 USD per year, making it $4000 annually in total.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.collegeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.eduOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.medicalCollegeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.articleSchema) }}
      />
      {schemas.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }}
        />
      )}
      {schemas.courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.courseSchema) }}
        />
      )}

    <main className="bg-background min-h-screen text-navy font-sans antialiased">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-navy text-white overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left */}
            <div className="lg:col-span-7 space-y-6">
              {/* Country & Accreditation Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-medical/20 border border-medical/30 text-medical font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider flex items-center gap-1">
                  <MapPin size={12} /> {uni.location}
                </span>
                <span className="bg-white/10 border border-white/20 text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                  ✓ NMC Approved
                </span>
                <span className="bg-white/10 border border-white/20 text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                  ✓ WHO Listed
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">{uni.name}</h1>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                  {uni.about.split('.')[0]}. Secure a world-class MD/MBBS degree recognized across India and globally.
                </p>
              </div>

              {/* Key Quick Facts Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Established</span>
                  <span className="text-base font-black text-white">{uni.established || "1993"}</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Medium</span>
                  <span className="text-base font-black text-white">English</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Duration</span>
                  <span className="text-base font-black text-white">5 + 1 Years</span>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Intake</span>
                  <span className="text-base font-black text-white">2026 Batch</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#apply" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-primary/20 flex items-center gap-2 hover:-translate-y-0.5 duration-200"
                >
                  <GraduationCap size={18} /> Apply Admission 2026
                </a>
                <a 
                  href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#25D366] hover:bg-[#1eb054] text-white px-6 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-green-500/20 hover:-translate-y-0.5 duration-200"
                >
                  <MessageSquare size={18} /> WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Hero Right: University Image / Trust Glass Card */}
            <div className="lg:col-span-5 relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
              {uni.bannerImage ? (
                <img 
                  src={uni.bannerImage} 
                  alt={uni.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-75"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/90 to-primary/40 flex items-center justify-center">
                  <Building size={80} className="text-white/20" />
                </div>
              )}
              {/* Abstract overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
              
              {/* Trust Badge Glass Card overlay */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-navy/80 border border-white/10 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-1.5 text-accent">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span className="text-white text-xs font-bold ml-2">WCIEC TRUSTED PORTAL</span>
                </div>
                <div className="flex justify-between text-xs text-gray-300 font-bold uppercase tracking-wider">
                  <div>
                    <span className="block text-white text-base font-black">12,000+</span>
                    <span>Indian Students</span>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <span className="block text-white text-base font-black">15+ Years</span>
                    <span>Experience</span>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <span className="block text-white text-base font-black">98.6%</span>
                    <span>Visa Success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visible Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-150 py-3">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} className="text-gray-300" />
          <Link href="/universities/" className="hover:text-primary transition-colors">Universities</Link>
          <ChevronRight size={10} className="text-gray-300" />
          <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-primary transition-colors">Kyrgyzstan</Link>
          <ChevronRight size={10} className="text-gray-300" />
          <span className="text-navy">{uni.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Section 1: Academic Profile, Clinical, Features, & Compact Sidebar */}
        <section className="grid lg:grid-cols-3 gap-12 items-start" id="about">
          {/* Left Column: Academic Content (Overview + Clinical + Features) */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-black text-primary uppercase tracking-widest block">Overview</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-1">Academic Profile & Details</h2>
              <div className="w-12 h-1 bg-medical rounded-full" />
              <p className="text-gray-650 leading-relaxed text-base md:text-lg font-medium">{uni.about}</p>
              {uni.detailedOverview && (
                <p className="text-gray-605 leading-relaxed text-base md:text-lg">{uni.detailedOverview}</p>
              )}
            </div>

            {/* Clinical Exposure & FMGE Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {uni.clinicalExposure && (
                <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-medical/30 transition-all duration-300 space-y-4 relative overflow-hidden" id="clinical">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-medical to-transparent" />
                  <div className="w-12 h-12 rounded-2xl bg-medical/10 flex items-center justify-center text-medical">
                    <Stethoscope size={24} />
                  </div>
                  <h3 className="text-xl font-bold flex items-center gap-2">Clinical Exposure</h3>
                  <p className="text-gray-650 leading-relaxed text-sm font-medium">{uni.clinicalExposure}</p>
                </div>
              )}

              {uni.fmgePerformance && (
                <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 space-y-4 relative overflow-hidden" id="fmge">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent" />
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-bold flex items-center gap-2">FMGE Performance</h3>
                  <p className="text-gray-655 leading-relaxed text-sm font-medium">{uni.fmgePerformance}</p>
                </div>
              )}
            </div>
            
            {/* Advantages & Considerations Side-by-Side */}
            {(uni.advantages || uni.disadvantages) && (
              <div className="grid md:grid-cols-2 gap-6" id="features">
                {uni.advantages && (
                  <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-500 to-transparent" />
                    <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">Key Advantages</h3>
                    <ul className="space-y-3">
                      {uni.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                          <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} /> 
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {uni.disadvantages && (
                  <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 to-transparent" />
                    <h3 className="text-xl font-bold text-red-800 flex items-center gap-2">Points to Consider</h3>
                    <ul className="space-y-3">
                      {uni.disadvantages.map((dis, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-red-705 font-bold">
                          <span className="text-red-500 mt-1 shrink-0">•</span> 
                          <span>{dis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Premium Sticky Sidebar (Glassmorphism & Compact CTAs) */}
          <div className="lg:col-span-1 lg:sticky lg:top-28 space-y-6">
            <div className="backdrop-blur-md bg-white/95 border border-gray-150 shadow-2xl rounded-[24px] p-6 space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">WCIEC Portals</span>
                <span className="bg-green-100 border border-green-200 text-green-700 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                  Admission Open
                </span>
              </div>

              {/* Call-to-actions */}
              <div className="flex flex-col gap-3">
                <a 
                  href="#apply" 
                  className="w-full bg-primary hover:bg-primary/95 text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest text-center shadow-lg shadow-primary/10 transition-colors"
                >
                  Apply Admission 2026
                </a>
                <a 
                  href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1eb054] text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-green-500/10 transition-colors"
                >
                  <MessageSquare size={16} /> WhatsApp Support
                </a>
                <PrintButton />
              </div>

              <hr className="border-gray-100" />

              {/* Quick Navigation Anchor Tracks */}
              <div className="space-y-3">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Quick Navigation</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <a href="#about" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Overview</a>
                  <a href="#fees" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Fees</a>
                  <a href="#accommodation" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Hostel</a>
                  <a href="#requirements" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Admissions</a>
                  <a href="#faq" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">FAQ</a>
                  <a href="#apply" className="bg-accent text-white px-3 py-2 rounded-xl text-center hover:bg-navy transition-colors">Apply Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Highlights & Document Checklist (Full Width Panel - Alternating Gray Background) */}
        <section className="bg-gray-50/50 border border-gray-150 p-8 md:p-12 rounded-[24px]" id="highlights">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Quick Highlights facts */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-black text-primary uppercase tracking-widest block">Highlights</span>
                <h2 className="text-3xl font-black tracking-tight">University Highlights & Credentials</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {uni.quickFacts.map((fact, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 flex gap-4 items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Fact #{i + 1}</span>
                      <span className="text-navy font-bold text-base leading-snug">{fact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="lg:col-span-1 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-medical/30 transition-all duration-300 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <FileText className="text-primary shrink-0" size={24} /> 
                <span>Documents Needed</span>
              </h3>
              <ul className="space-y-4">
                {uni.documentsRequired.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-655 font-bold">
                    <ChevronRight size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Fee Structure & Campus Living (Full Width Panel) */}
        <section className="space-y-8" id="fees">
          <div className="space-y-4">
            <span className="text-xs font-black text-primary uppercase tracking-widest block">Finances</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
              <DollarSign className="text-medical" size={32} /> Fees & Accommodation
            </h2>
            <div className="w-12 h-1 bg-medical rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Table Container */}
            <div className="lg:col-span-2 space-y-6">
              <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-xl bg-white">
                <table className="w-full text-left min-w-[500px] border-collapse">
                  <thead className="bg-navy text-white sticky top-0">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Year</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Tuition Fee</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Hostel Fee</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider text-medical">Total Package</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150">
                    {uni.fees.map((fee, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 even:bg-gray-50/20 transition-colors font-medium">
                        <td className="p-5 font-bold text-navy">{fee.year}</td>
                        <td className="p-5 text-gray-600">{fee.tutionFee}</td>
                        <td className="p-5 text-gray-600">{fee.hostelFee}</td>
                        <td className="p-5 font-black text-navy text-base">{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-405 italic font-medium">* Fees are subject to change according to university policy. Food costs are handled independently in the student mess.</p>
            </div>

            {/* Hostel Details */}
            <div className="lg:col-span-1 space-y-6" id="accommodation">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent" />
                <BedDouble className="text-primary" size={28} />
                <h4 className="text-lg font-bold">Hostel Facilities</h4>
                <p className="text-gray-605 text-sm font-medium leading-relaxed">{uni.hostelDetails}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 space-y-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-transparent" />
                <Coffee className="text-accent" size={28} />
                <h4 className="text-lg font-bold">Indian Food & Mess</h4>
                <p className="text-gray-655 text-sm font-medium leading-relaxed">{uni.foodDetails}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Eligibility & Admission Timeline (Full Width Panel - Alternating Soft Blue Background) */}
        <section className="bg-gradient-to-br from-blue-50/20 via-white to-gray-50/30 border border-gray-155 p-8 md:p-12 rounded-[24px]" id="requirements">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Eligibility Criteria */}
            {uni.eligibility && (
              <div className="lg:col-span-1 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-medical/30 transition-all duration-300 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">Eligibility Criteria</h3>
                  <p className="text-gray-500 text-xs font-semibold">Academic & exam prerequisites.</p>
                </div>
                <ul className="space-y-4">
                  {uni.eligibility.map((criterion, i) => (
                    <li key={i} className="flex items-start gap-3 bg-gray-50/50 p-4 rounded-xl border border-gray-100/50">
                      <CheckCircle2 className="text-medical shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-navy font-bold">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Admission Process Timeline */}
            <div className={uni.eligibility ? "lg:col-span-2 space-y-8" : "lg:col-span-3 space-y-8"}>
              <div className="space-y-2">
                <span className="text-xs font-black text-primary uppercase tracking-widest block">Process</span>
                <h3 className="text-2xl font-black tracking-tight">Admission & Visa Journey</h3>
                <p className="text-gray-500 text-sm font-medium">Timeline from verification to arrival in Kyrgyzstan.</p>
              </div>
              <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                {uni.admissionProcess.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      {i + 1}
                    </div>
                    <div className="text-navy font-bold text-lg">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Trust Indicators & Stats (Full Width Navy Banner) */}
        <section className="bg-navy text-white py-12 px-8 rounded-[24px] relative overflow-hidden shadow-xl my-6">
          <div className="absolute top-0 right-0 w-1/4 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-black text-accent">15+ Years</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Guiding Indian Students</span>
            </div>
            <div className="space-y-1 border-l border-white/10">
              <span className="block text-3xl md:text-4xl font-black text-accent">12,000+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Admissions Secured</span>
            </div>
            <div className="space-y-1 border-l border-white/10">
              <span className="block text-3xl md:text-4xl font-black text-accent">98.6%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Visa Success Rate</span>
            </div>
            <div className="space-y-1 border-l border-white/10">
              <span className="block text-3xl md:text-4xl font-black text-accent">NMC & WHO</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Accredited Degrees</span>
            </div>
          </div>
        </section>

        {/* Section 6: Bottom Apply Form Banner (High Converting CTA) */}
        <section className="bg-navy text-white py-16 px-6 md:px-12 rounded-[24px] overflow-hidden relative shadow-2xl" id="apply">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/15 blur-3xl rounded-full translate-x-1/2" />
          <div className="max-w-3xl mx-auto relative z-10 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-black text-accent uppercase tracking-widest block">Secure Your Seat Today</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Apply Online</h2>
              <p className="text-gray-300 font-medium text-sm md:text-base">Register now to lock in your MBBS seat for the 2026 batch.</p>
            </div>
            <div className="bg-white text-navy p-8 md:p-12 rounded-3xl shadow-2xl">
              <GlobalApplyForm buttonText="Submit Application" />
            </div>
          </div>
        </section>

        {/* Section 7: Frequently Asked Questions */}
        <section className="py-12 border-t border-gray-100" id="faq">
          <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
            <div className="w-12 h-1 bg-medical rounded-full mx-auto" />
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {uni.faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                <h4 className="text-lg font-black flex items-start gap-2">
                  <span className="text-medical text-xl font-black">Q.</span>
                  <span>{faq.question}</span>
                </h4>
                <p className="text-gray-655 pl-6 text-base leading-relaxed font-medium">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
