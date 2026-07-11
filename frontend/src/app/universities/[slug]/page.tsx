import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { universities } from "@/data/universities";
import { generateUniversityMetadata, generateUniversitySchemas } from "@/lib/seoHelper";

import { 
  MapPin, 
  CheckCircle2, 
  DollarSign, 
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
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { ApplyNowButton } from "@/components/ui/ApplyNowButton";

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

const slideshowImagesMap: Record<string, string[]> = {
  "jalal-abad-state-university": [
    "/images/jasu-gallery/jasu_campus_1.png",
    "/images/jasu-gallery/jasu_campus_2.png",
    "/images/jasu-gallery/jasu_campus_3.png",
  ],
  "jalal-abad-international-university": [
    "/images/jaiu-gallery/jaiu_campus_1.png",
    "/images/jaiu-gallery/jaiu_campus_2.png",
    "/images/jaiu-gallery/jaiu_campus_3.png",
  ],
  "osh-state-university": [
    "/images/osu-gallery/osh-state-university-campus.webp",
    "/images/osu-gallery/osh-state-university-hostel.webp",
    "/images/osu-gallery/osh-state-university-medical-building.webp",
  ],
  "central-asian-international-medical-university": [
    "/images/caimu-gallery/caimu_campus_1.png",
    "/images/caimu-gallery/caimu_campus_2.png",
    "/images/caimu-gallery/caimu_campus_3.png",
  ],
  "osh-international-medical-university": [
    "/images/oimu-gallery/oimu_campus_1.png",
    "/images/oimu-gallery/oimu_campus_2.png",
    "/images/oimu-gallery/oimu_campus_3.png",
  ],
};

export default async function UniversityPage({ params }: Props) {
  const { slug } = await params;
  const uni = universities.find(u => u.slug === slug);
  if (!uni) notFound();

  const schemas = generateUniversitySchemas(uni);
  const slideshowImages = slideshowImagesMap[slug] || [
    "/images/osu-gallery/osh-state-university-campus.webp",
    "/images/osu-gallery/osh-state-university-hostel.webp",
    "/images/osu-gallery/osh-state-university-medical-building.webp"
  ];

  const isTargetUni = [
    "jalal-abad-state-university",
    "jalal-abad-international-university",
    "central-asian-international-medical-university",
    "osh-state-university",
    "osh-international-medical-university"
  ].includes(slug);

  if (isTargetUni) {
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
            <HeroSlideshow 
              images={slideshowImages}
              alt={uni.name}
            />
            <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="bg-medical/20 border border-medical/30 text-medical font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-1.5">
                  <MapPin size={12} /> Study MBBS in Kyrgyzstan
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">{uni.name}</h1>
                <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl">
                  {uni.addressLocation} {uni.nearestAirport ? `| Nearest Airport: ${uni.nearestAirport}` : ""}
                </p>
                <div className="pt-2">
                  <ApplyNowButton 
                    noDefault={true}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg inline-flex items-center gap-2 cursor-pointer"
                  >
                    Apply Now <ChevronRight size={16} />
                  </ApplyNowButton>
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
                    <span className="text-xl font-black text-white">{uni.totalFeeStatsValue || "4200 $"}</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-medical/20 flex items-center justify-center text-medical shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">City and Province</span>
                    <span className="text-xl font-black text-white">{uni.location}</span>
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">USP</span>
                    <span className="text-base font-black text-white">{uni.uspStatsValue}</span>
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
              <span className="text-navy">{uni.name}</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            {/* Section 1: Overview */}
            <section className="space-y-4 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-black text-primary uppercase tracking-widest block">Overview</span>
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-2">
                <Building className="text-medical" size={28} /> {uni.name === "Osh State University International Medical Faculty" ? "Osh State Medical University" : uni.name}: Overview
              </h2>
              <div className="w-12 h-1 bg-medical rounded-full" />
              <p className="text-gray-655 leading-relaxed text-base md:text-lg font-medium">
                {uni.about}
              </p>
              {uni.detailedOverview && (
                <p className="text-gray-655 leading-relaxed text-base md:text-lg font-medium">
                  {uni.detailedOverview}
                </p>
              )}
            </section>

            {/* Section 2: Affiliation and Recognition */}
            {uni.affiliationAndRecognition && (
              <section className="bg-gray-50/50 border border-gray-150 p-8 rounded-[24px] space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <ShieldCheck className="text-primary" size={24} /> Affiliation and Recognition
                </h3>
                <div className={uni.affiliationAndRecognition.length > 1 ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-bold text-navy text-sm" : "bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 font-bold text-navy"}>
                  {uni.affiliationAndRecognition.length > 1 ? (
                    uni.affiliationAndRecognition.map((item, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                        <CheckCircle2 className="text-medical shrink-0" size={18} />
                        <span>{item}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <CheckCircle2 className="text-medical shrink-0" size={20} />
                      <span>{uni.affiliationAndRecognition[0]}</span>
                    </>
                  )}
                </div>
              </section>
            )}

            {/* Section 3: Reasons to Select */}
            {uni.reasonsToSelect && (
              <section className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight">
                  {uni.slug === "jalal-abad-state-university" ? "Why Select Jalalabad State University?" : `Reasons to Select ${uni.name}`}
                </h2>
                <div className={uni.slug === "osh-international-medical-university" ? "grid md:grid-cols-2 gap-6" : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"}>
                  {uni.reasonsToSelect.map((reason, i) => {
                    if (typeof reason === "string") {
                      return (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-medical shrink-0 mt-0.5" />
                          <p className="text-sm font-bold text-navy leading-relaxed">{reason}</p>
                        </div>
                      );
                    } else {
                      const item = reason as { title: string; description: string };
                      return (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                          <h4 className="font-bold text-navy flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-medical shrink-0" /> {item.title}
                          </h4>
                          <p className="text-gray-600 text-xs font-semibold leading-relaxed">{item.description}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              </section>
            )}

            {/* Section 4: Quick Highlights */}
            {uni.quickHighlights && (
              <section className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight">Quick Highlights</h2>
                <div className="overflow-x-auto rounded-[24px] border border-gray-155 shadow-lg bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th className="p-5 font-black text-xs uppercase tracking-wider">Particular</th>
                        <th className="p-5 font-black text-xs uppercase tracking-wider">Statistics</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 font-bold">
                      {uni.quickHighlights.map((hl, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                          <td className="p-4 text-navy">{hl.particular}</td>
                          <td className="p-4 text-gray-650">{hl.statistics}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Section 5: Pros & Cons */}
            {uni.advantages && uni.disadvantages && (
              <section className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight">Pros & Cons of Studying MBBS</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 space-y-4">
                    <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">Advantages</h3>
                    <ul className="space-y-3">
                      {uni.advantages.map((adv, i) => (
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
                      {uni.disadvantages.map((dis, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-red-707 font-bold">
                          <span className="text-red-500 mt-1 shrink-0">•</span>
                          <span>{dis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* Section 6: Fee Structure */}
            {uni.feeTableHeaders && uni.feeTableRows && (
              <section className="space-y-6" id="fees">
                <h2 className="text-3xl font-black tracking-tight">Fee Structure</h2>
                <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-xl bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-navy text-white">
                      <tr>
                        {uni.feeTableHeaders.map((header, idx) => (
                          <th 
                            key={idx} 
                            className="p-5 font-black text-xs uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 font-bold">
                      {uni.feeTableRows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-gray-50/50 transition-colors">
                          {row.map((cell, cellIdx) => {
                            let textClass = "text-gray-600";
                            if (cellIdx === 0) {
                              textClass = "text-navy";
                            } else if (uni.slug === "central-asian-international-medical-university") {
                              textClass = "text-medical text-base";
                            } else if (uni.slug === "jalal-abad-international-university" || uni.slug === "osh-state-university" || uni.slug === "osh-international-medical-university") {
                              textClass = cellIdx > 0 ? "text-gray-600" : "text-navy";
                            } else if (uni.slug === "jalal-abad-state-university") {
                              textClass = rowIdx === 1 && cellIdx > 0 ? "text-gray-655" : cellIdx > 0 ? "text-gray-600" : "text-navy";
                            }
                            return (
                              <td 
                                key={cellIdx} 
                                className={`p-4 ${textClass}`}
                              >
                                {cell}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Section 7: Faculties */}
            {uni.faculties && (
              <section className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight">
                  {uni.slug === "osh-international-medical-university" ? "Faculty Departments" : "Faculties"}
                </h2>
                <div className={
                  uni.slug === "central-asian-international-medical-university" 
                    ? "grid grid-cols-1 md:grid-cols-3 gap-4" 
                    : uni.slug === "osh-international-medical-university"
                      ? "grid grid-cols-2 md:grid-cols-3 gap-4"
                      : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                }>
                  {uni.faculties.map((faculty, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                      <BookOpen size={16} className="text-medical shrink-0" />
                      <span className="text-xs font-bold text-navy leading-snug">{faculty}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 8: Eligibility Criteria */}
            {uni.eligibility && (
              <section className="space-y-6" id="eligibility">
                <h2 className="text-3xl font-black tracking-tight">Eligibility Criteria</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-medical/10 flex items-center justify-center text-medical shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-sm font-bold text-navy leading-relaxed">
                      {uni.eligibility[0]}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Calendar size={20} />
                    </div>
                    <p className="text-sm font-bold text-navy leading-relaxed">
                      {uni.eligibility[1]}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Award size={20} />
                    </div>
                    <p className="text-sm font-bold text-navy leading-relaxed">
                      {uni.eligibility[2]}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Section 9: Course Duration & Syllabus */}
            {uni.syllabus ? (
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
                          {uni.slug === "osh-state-university" && (
                            <th className="p-4 font-black text-xs uppercase tracking-wider">Semester</th>
                          )}
                          <th className="p-4 font-black text-xs uppercase tracking-wider">{uni.slug === "osh-state-university" ? "Syllabus" : "Subjects"}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-150 text-sm font-semibold">
                        {uni.slug === "osh-state-university" ? (
                          <>
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
                          </>
                        ) : (
                          uni.syllabus?.map((syl, idx) => (
                            <tr key={idx}>
                              <td className="p-4 text-navy">{syl.year}</td>
                              <td className="p-4 text-gray-700">{syl.subjects}</td>
                            </tr>
                          ))
                        )}
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
                    {uni.courseDurationText}
                  </p>
                </div>
              </section>
            ) : (
              <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Clock className="text-medical" size={24} /> {uni.slug === "jalal-abad-international-university" || uni.slug === "central-asian-international-medical-university" ? "Courses & Duration" : "MBBS Course Duration"}
                </h3>
                <p className="text-gray-650 leading-relaxed text-base font-medium">
                  {uni.courseDurationText}
                </p>
              </section>
            )}

            {/* Section 10: Admission Procedure */}
            {uni.admissionProcess && (
              <section className="space-y-6" id="process">
                <h2 className="text-3xl font-black tracking-tight">Admission Procedure</h2>
                <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                  {uni.admissionProcess.map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                        {i + 1}
                      </div>
                      <div className="text-navy font-bold text-base md:text-lg">{step}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 11: Documents Required */}
            {uni.documentsRequired && (
              <section className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight">Documents Required</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uni.documentsRequired.map((doc, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                      <CheckCircle2 size={16} className="text-medical shrink-0" />
                      <span className="text-sm font-bold text-navy">{doc}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 12: Ranking, Scholarships & Accommodation */}
            {uni.slug === "central-asian-international-medical-university" ? (
              <section className="space-y-6" id="accommodation">
                <h2 className="text-3xl font-black tracking-tight">Hostel & Accommodation</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                    <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                      <BedDouble className="text-primary" size={20} /> Hostel Facilities
                    </h4>
                    <ul className="space-y-2">
                      {uni.accommodationList?.map((item, idx) => (
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
                    <p className="text-2xl font-black text-navy">{uni.accommodationCostText} <span className="text-sm font-medium text-gray-400">per year</span></p>
                  </div>
                </div>
              </section>
            ) : (
              uni.rankingTable && (
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
                              {uni.rankingTable.headers.map((header, idx) => (
                                <th key={idx} className="p-4 font-black text-xs uppercase tracking-wider">{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-150 font-bold">
                            {uni.rankingTable.rows.map((row, rowIdx) => (
                              <tr key={rowIdx}>
                                {row.map((cell, cellIdx) => (
                                  <td key={cellIdx} className={cellIdx === 0 ? "p-4 text-navy" : "p-4 text-gray-600"}>{cell}</td>
                                ))}
                              </tr>
                            ))}
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
                          {uni.hostelDetails}
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                        <h4 className="text-lg font-bold flex items-center gap-2 text-navy">
                          <Award className="text-accent" size={20} /> Scholarships
                        </h4>
                        <p className="text-gray-605 text-sm font-medium leading-relaxed">
                          {uni.scholarshipsDetails}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )
            )}

            {/* Section 13: Career Opportunities */}
            {uni.careerOpportunitiesText && (
              <section className={uni.slug === "central-asian-international-medical-university" ? "space-y-6" : "bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4"}>
                {uni.slug === "central-asian-international-medical-university" ? (
                  <>
                    <h2 className="text-3xl font-black tracking-tight">Career Opportunities</h2>
                    <p className="text-gray-500 font-bold text-sm">After completing MBBS from CAIMU, students can:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {(uni.careerOpportunitiesText as string[]).map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                          <HeartPulse size={16} className="text-primary shrink-0" />
                          <span className="text-sm font-bold text-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : Array.isArray(uni.careerOpportunitiesText) ? (
                  <>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <HeartPulse className="text-primary" size={24} /> Career Opportunities
                    </h3>
                    <ul className="space-y-3">
                      {(uni.careerOpportunitiesText as string[]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-bold">
                          <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <HeartPulse className="text-primary" size={24} /> Career Opportunities
                    </h3>
                    <p className="text-gray-650 leading-relaxed text-base font-medium">
                      {uni.careerOpportunitiesText}
                    </p>
                  </>
                )}
              </section>
            )}

            {/* Section 14: How we assist you */}
            {uni.howWCIeCAssistsText && (
              <section className={uni.slug === "central-asian-international-medical-university" ? "space-y-6" : "bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4"}>
                {uni.slug === "central-asian-international-medical-university" ? (
                  <>
                    <h2 className="text-3xl font-black tracking-tight">How we assist you?</h2>
                    <p className="text-gray-500 font-bold text-sm">At WCIEC Delhi, we offer end-to-end support for your MBBS journey:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {(uni.howWCIeCAssistsText as string[]).map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 hover:shadow-md hover:border-medical/20 transition-all duration-300">
                          <CheckCircle2 size={16} className="text-medical shrink-0" />
                          <span className="text-xs font-bold text-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <CheckCircle2 className="text-medical" size={24} /> How WCIEC Delhi Assists You in Getting Admission
                    </h3>
                    <p className="text-gray-650 leading-relaxed text-base font-medium">
                      {typeof uni.howWCIeCAssistsText === "string" ? uni.howWCIeCAssistsText : ""}
                    </p>
                  </>
                )}
              </section>
            )}

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
            {uni.faqs && (
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
            )}
          </div>
        </main>
      </>
    );
  }

  // Fallback layout for any other university slug
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
        <HeroSlideshow 
          images={slideshowImages}
          alt={uni.name}
        />
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
                <ApplyNowButton 
                  noDefault={true}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-primary/20 flex items-center gap-2 hover:-translate-y-0.5 duration-200 cursor-pointer"
                >
                  <GraduationCap size={18} /> Apply Admission 2026
                </ApplyNowButton>
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
                <p className="text-gray-655 leading-relaxed text-base md:text-lg">{uni.detailedOverview}</p>
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
                  <p className="text-gray-655 leading-relaxed text-sm font-medium">{uni.clinicalExposure}</p>
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
            <div className="backdrop-blur-md bg-white/95 border border-gray-155 shadow-2xl rounded-[24px] p-6 space-y-6">
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
