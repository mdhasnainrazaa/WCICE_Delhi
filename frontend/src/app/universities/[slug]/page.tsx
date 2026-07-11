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
  Building,
  Star
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
  const uni = universities.find((u) => u.slug === slug);
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
  const uni = universities.find((u) => u.slug === slug);
  if (!uni) notFound();

  const schemas = generateUniversitySchemas(uni);

  return (
    <>
      {/* Search Engine Schema Markups */}
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
            images={slideshowImagesMap[uni.slug] || [
              "/images/osu-gallery/osh-state-university-campus.webp",
              "/images/osu-gallery/osh-state-university-hostel.webp",
              "/images/osu-gallery/osh-state-university-medical-building.webp"
            ]}
            alt={`${uni.name} Campus`}
          />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-medical/20 border border-medical/30 text-medical font-bold px-3 py-1.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin size={12} /> {uni.location}
                  </span>
                  <span className="bg-white/10 border border-white/20 text-white font-bold px-3 py-1.5 rounded-full text-xs uppercase tracking-wider">
                    ✓ NMC Compliant
                  </span>
                  <span className="bg-white/10 border border-white/20 text-white font-bold px-3 py-1.5 rounded-full text-xs uppercase tracking-wider">
                    ✓ WHO Listed
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                    {uni.name}
                  </h1>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-medium">
                    {uni.about.split(".")[0]}. Earn a globally recognized MD/MBBS degree fully valid for practicing in India and abroad.
                  </p>
                </div>

                {/* Quick Facts Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Established</span>
                    <span className="text-base font-black text-white">{uni.established || "1993"}</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Medium</span>
                    <span className="text-base font-black text-white">100% English</span>
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

                {/* Hero CTAs */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <ApplyNowButton
                    noDefault={true}
                    className="bg-primary hover:bg-primary/95 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-primary/20 flex items-center gap-2 hover:-translate-y-0.5 duration-200 cursor-pointer"
                  >
                    <GraduationCap size={18} /> Apply Admission 2026
                  </ApplyNowButton>
                  <a
                    href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20at%20Jalalabad%20and%20Osh%20State%20University."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#1eb054] text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-green-500/20 hover:-translate-y-0.5 duration-200"
                  >
                    <MessageSquare size={18} /> WhatsApp Inquiry
                  </a>
                </div>
              </div>

              {/* Hero Right Media Panel */}
              <div className="lg:col-span-5 relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                {uni.bannerImage ? (
                  <img
                    src={uni.bannerImage}
                    alt={`${uni.name} Campus Facility`}
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                    fetchPriority="high"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/90 to-primary/40 flex items-center justify-center">
                    <Building size={80} className="text-white/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                
                {/* Trust overlay info card */}
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

        {/* E-E-A-T Editorial Metadata Header */}
        <section className="bg-gray-50 border-y border-gray-155 py-3 text-xs text-gray-500">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span>Written by: <strong className="text-navy">WCIEC Delhi Education Experts</strong></span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-green-600" />
                Reviewed by: <strong className="text-navy">Senior MBBS Counsellor & Medical Education Panel</strong>
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span>Last Updated: <strong className="text-navy">July 2026 (For 2026-27 Intake)</strong></span>
              <span className="text-gray-300">|</span>
              <span>Sources: 
                <a href="https://search.wdoms.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1 font-semibold">WDOMS Registry</a>, 
                <a href="https://www.nmc.org.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1 font-semibold">NMC India</a>
              </span>
            </div>
          </div>
        </section>

        {/* Visual Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="bg-gray-100/50 border-b border-gray-150 py-3">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={10} className="text-gray-300" />
            <Link href="/universities/" className="hover:text-primary transition-colors">Universities</Link>
            <ChevronRight size={10} className="text-gray-300" />
            <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-primary transition-colors">Kyrgyzstan</Link>
            <ChevronRight size={10} className="text-gray-300" />
            <span className="text-navy" aria-current="page">{uni.name}</span>
          </div>
        </nav>

        {/* Core Layout Structure */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column - Core Academic & Details */}
            <article className="lg:col-span-2 space-y-12">
              
              {/* Section 1: Overview */}
              <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4" id="about">
                <span className="text-xs font-black text-primary uppercase tracking-widest block">Overview</span>
                <h2 className="text-3xl font-black tracking-tight text-navy">
                  Academic Profile & University Details
                </h2>
                <div className="w-12 h-1 bg-medical rounded-full" />
                <p className="text-gray-655 leading-relaxed text-base md:text-lg font-medium">
                  {uni.about}
                </p>
                {uni.detailedOverview && (
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {uni.detailedOverview}
                  </p>
                )}
              </section>

              {/* Section 2: Affiliations & Accreditations (E-E-A-T Signal) */}
              <section className="bg-gray-50/50 border border-gray-150 p-8 rounded-[24px] space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2 text-navy">
                  <ShieldCheck className="text-primary shrink-0" size={24} /> 
                  <span>Affiliation & Global Recognition</span>
                </h3>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  Accredited by leading national and international medical registries
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold text-navy text-sm">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                    <CheckCircle2 className="text-medical shrink-0" size={16} />
                    <span>National Medical Commission (NMC) Compliant</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                    <CheckCircle2 className="text-medical shrink-0" size={16} />
                    <span>World Health Organization (WHO) listed</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                    <CheckCircle2 className="text-medical shrink-0" size={16} />
                    <span>World Directory of Medical Schools (WDOMS)</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                    <CheckCircle2 className="text-medical shrink-0" size={16} />
                    <span>FAIMER / ECFMG certified</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                    <CheckCircle2 className="text-medical shrink-0" size={16} />
                    <span>Ministry of Education & Science, Kyrgyzstan</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2.5">
                    <CheckCircle2 className="text-medical shrink-0" size={16} />
                    <span>Degree Valid for Indian NEXT / licensing exam</span>
                  </div>
                </div>
              </section>

              {/* Section 3: Why Select and Key Advantages */}
              <section className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight text-navy">
                  Why Study MBBS at {uni.name}?
                </h2>
                <div className="w-12 h-1 bg-medical rounded-full" />
                
                {/* Advantages & Considerations */}
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
                            <li key={i} className="flex items-start gap-2.5 text-sm text-red-700 font-bold">
                              <span className="text-red-500 mt-1 shrink-0">•</span>
                              <span>{dis}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </section>

              {/* Section 4: Highlights & Facts */}
              <section className="bg-gray-50 border border-gray-155 p-8 rounded-[24px] space-y-6" id="highlights">
                <div className="space-y-2">
                  <span className="text-xs font-black text-primary uppercase tracking-widest block">Highlights</span>
                  <h3 className="text-2xl font-black tracking-tight text-navy">University Highlights & Credentials</h3>
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
              </section>

              {/* Section 5: Clinical Exposure & FMGE Details */}
              <section className="grid md:grid-cols-2 gap-6">
                {uni.clinicalExposure && (
                  <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-medical/30 transition-all duration-300 space-y-4 relative overflow-hidden" id="clinical">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-medical to-transparent" />
                    <div className="w-12 h-12 rounded-2xl bg-medical/10 flex items-center justify-center text-medical">
                      <Stethoscope size={24} />
                    </div>
                    <h3 className="text-xl font-bold flex items-center gap-2 text-navy">Clinical Exposure</h3>
                    <p className="text-gray-600 leading-relaxed text-sm font-medium">
                      {uni.clinicalExposure}
                    </p>
                    {uni.clinicalBeds && (
                      <div className="mt-2 text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-lg inline-block">
                        🏥 Hospital Bed Capacity: {uni.clinicalBeds}
                      </div>
                    )}
                  </div>
                )}

                {uni.fmgePerformance && (
                  <div className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 space-y-4 relative overflow-hidden" id="fmge">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent" />
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Award size={24} />
                    </div>
                    <h3 className="text-xl font-bold flex items-center gap-2 text-navy">FMGE / NExT Passing rate</h3>
                    <p className="text-gray-600 leading-relaxed text-sm font-medium">
                      {uni.fmgePerformance}
                    </p>
                  </div>
                )}
              </section>

              {/* Section 6: Fees & Accommodation */}
              <section className="space-y-6" id="fees">
                <div className="space-y-2">
                  <span className="text-xs font-black text-primary uppercase tracking-widest block">Finances</span>
                  <h2 className="text-3xl font-black tracking-tight flex items-center gap-3 text-navy">
                    <DollarSign className="text-medical" size={32} /> Fees & Accommodation
                  </h2>
                  <div className="w-12 h-1 bg-medical rounded-full" />
                </div>

                <div className="overflow-x-auto rounded-[24px] border border-gray-150 shadow-xl bg-white">
                  <table className="w-full text-left min-w-[500px] border-collapse">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th scope="col" className="p-5 font-black text-xs uppercase tracking-wider">Year</th>
                        <th scope="col" className="p-5 font-black text-xs uppercase tracking-wider">Tuition Fee</th>
                        <th scope="col" className="p-5 font-black text-xs uppercase tracking-wider">Hostel Fee</th>
                        <th scope="col" className="p-5 font-black text-xs uppercase tracking-wider text-medical">Total Package (USD)</th>
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
                
                {/* Horizontal scrolling helper for mobile */}
                <div className="block sm:hidden text-center text-gray-400 text-xs italic">
                  ← Swipe left/right to view complete fee matrix →
                </div>
                <p className="text-xs text-gray-400 italic font-semibold">
                  * Tuition fees are payable annually. USD to INR conversion rates apply at the time of payment. Hostel and mess costs remain subject to adjustment.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-4" id="accommodation">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent" />
                    <BedDouble className="text-primary" size={28} />
                    <h4 className="text-lg font-bold text-navy">Hostel & Living Space</h4>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">{uni.hostelDetails}</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 space-y-3 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-transparent" />
                    <Coffee className="text-accent" size={28} />
                    <h4 className="text-lg font-bold text-navy">Indian Food & Mess</h4>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">{uni.foodDetails}</p>
                  </div>
                </div>
              </section>

              {/* Section 7: Eligibility & Admission Journey */}
              <section className="bg-gradient-to-br from-blue-50/20 via-white to-gray-50/30 border border-gray-155 p-8 md:p-12 rounded-[24px] space-y-8" id="requirements">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Eligibility */}
                  {uni.eligibility && (
                    <div className="lg:col-span-5 bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-medical/30 transition-all duration-300 space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black tracking-tight text-navy">Eligibility Criteria</h3>
                        <p className="text-gray-400 text-xs font-semibold uppercase">Prerequisites for admission</p>
                      </div>
                      <ul className="space-y-4">
                        {uni.eligibility.map((criterion, i) => (
                          <li key={i} className="flex items-start gap-3 bg-gray-50/50 p-4 rounded-xl border border-gray-100/50">
                            <CheckCircle2 className="text-medical shrink-0 mt-0.5" size={18} />
                            <span className="text-sm text-navy font-bold leading-relaxed">{criterion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Right Column: Admission Process */}
                  <div className={uni.eligibility ? "lg:col-span-7 space-y-8" : "lg:col-span-12 space-y-8"}>
                    <div className="space-y-2">
                      <span className="text-xs font-black text-primary uppercase tracking-widest block">Admission Journey</span>
                      <h3 className="text-2xl font-black tracking-tight text-navy">Admission & Visa Step-by-Step</h3>
                      <p className="text-gray-500 text-sm font-medium">Secured group departure and visa protocols by WCIEC Delhi</p>
                    </div>
                    <div className="relative border-l border-gray-200 ml-4 pl-8 space-y-8">
                      {uni.admissionProcess.map((step, i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-12 top-0.5 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                            {i + 1}
                          </div>
                          <div className="text-navy font-bold text-base leading-relaxed">{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="text-base font-bold text-navy mb-2 flex items-center gap-2">
                    <FileText size={18} className="text-primary" />
                    Required Documents Checklist
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs text-gray-600 font-bold">
                    {uni.documentsRequired.map((doc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ChevronRight size={14} className="text-primary shrink-0" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 8: Kyrgyzstan Universities Comparison (GEO/AI search optimizing matrix) */}
              <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-black text-primary uppercase tracking-widest block">AI Comparison Matrix</span>
                  <h3 className="text-2xl font-black tracking-tight text-navy">Kyrgyzstan Medical Universities Comparison</h3>
                  <p className="text-gray-500 text-sm font-medium">
                    Analyze annual fees, clinical facilities, and ranks of the top Kyrgyzstan colleges side by side.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-gray-150 shadow-sm">
                  <table className="w-full text-left min-w-[600px] border-collapse">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th scope="col" className="p-4 font-black text-xs uppercase tracking-wider">University Name</th>
                        <th scope="col" className="p-4 font-black text-xs uppercase tracking-wider">Tuition + Hostel (USD)</th>
                        <th scope="col" className="p-4 font-black text-xs uppercase tracking-wider">Clinical Beds</th>
                        <th scope="col" className="p-4 font-black text-xs uppercase tracking-wider">Established</th>
                        <th scope="col" className="p-4 font-black text-xs uppercase tracking-wider text-accent">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-150 font-bold text-xs text-navy">
                      {universities.map((u, i) => (
                        <tr key={i} className={`hover:bg-gray-50 transition-colors ${u.slug === uni.slug ? "bg-primary/5" : ""}`}>
                          <td className="p-4">
                            {u.slug === uni.slug ? (
                              <span className="text-primary font-black">{u.name} (This Page)</span>
                            ) : (
                              <Link href={`/universities/${u.slug}/`} className="hover:text-primary hover:underline">
                                {u.name}
                              </Link>
                            )}
                          </td>
                          <td className="p-4 text-gray-600">{u.fees[0]?.total || "Contact"}</td>
                          <td className="p-4 text-gray-600">{u.clinicalBeds || "800+ Beds"}</td>
                          <td className="p-4 text-gray-600">{u.established}</td>
                          <td className="p-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider ${u.slug === uni.slug ? "bg-primary/20 text-primary" : "bg-gray-100 text-gray-500"}`}>
                              {u.slug === uni.slug ? "Viewing" : "Compare"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="block sm:hidden text-center text-gray-400 text-xs italic">
                  ← Swipe to compare all universities →
                </div>
              </section>

              {/* Section 9: Contextual Internal Links */}
              <section className="bg-gray-50 border border-gray-150 p-6 rounded-2xl space-y-4">
                <h4 className="text-sm font-black text-navy uppercase tracking-wider">Related Resources & Guides</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-bold text-navy">
                  <Link href="/mbbs-in-kyrgyzstan/" className="flex items-center gap-1.5 text-primary hover:underline">
                    <ChevronRight size={14} /> Full Guide: Study MBBS in Kyrgyzstan
                  </Link>
                  <Link href="/nmc-guidelines-for-mbbs-abroad/" className="flex items-center gap-1.5 text-primary hover:underline">
                    <ChevronRight size={14} /> Read the Latest NMC Guidelines for Indian Students
                  </Link>
                  <Link href="/mbbs-fees-abroad/" className="flex items-center gap-1.5 text-primary hover:underline">
                    <ChevronRight size={14} /> Comparison: MBBS Fees in Kyrgyzstan vs. Russia vs. Georgia
                  </Link>
                  <Link href="/mbbs-abroad-consultants-in-delhi/" className="flex items-center gap-1.5 text-primary hover:underline">
                    <ChevronRight size={14} /> Free Counselling: Visit WCIEC Delhi Shakarpur Office
                  </Link>
                </div>
              </section>
            </article>

            {/* Right Column - Premium Sidebar (Local SEO & Conversions) */}
            <aside className="lg:col-span-1 lg:sticky lg:top-28 space-y-6" aria-label="Quick Actions">
              
              {/* Main Quick Inquiry Box */}
              <div className="backdrop-blur-md bg-white/95 border border-gray-150 shadow-2xl rounded-[24px] p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">WCIEC Portals</span>
                  <span className="bg-green-100 border border-green-200 text-green-700 font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                    Admission Open
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-black text-navy leading-tight">Secure Your MBBS Seat Today</h4>
                  <p className="text-xs text-gray-500 font-medium">
                    Submit documents online or schedule face-to-face counselling at our Delhi office.
                  </p>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-col gap-3">
                  <ApplyNowButton
                    noDefault={true}
                    className="w-full bg-primary hover:bg-primary/95 text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest text-center shadow-lg shadow-primary/10 transition-all hover:-translate-y-0.5 duration-150 cursor-pointer"
                  >
                    Apply Admission 2026
                  </ApplyNowButton>
                  <a
                    href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20to%20apply%20for%20MBBS%20at%20Kyrgyzstan."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#1eb054] text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-green-500/10 transition-all hover:-translate-y-0.5 duration-150"
                  >
                    <MessageSquare size={16} /> WhatsApp Advisor
                  </a>
                  <a
                    href="tel:+918586873357"
                    className="w-full bg-navy hover:bg-navy/95 text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-navy/10 transition-all hover:-translate-y-0.5 duration-150"
                  >
                    📞 Call +91-8586873357
                  </a>
                  <PrintButton />
                </div>

                <hr className="border-gray-100" />

                {/* Quick Navigation Anchor Tracks */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Quick Navigation</span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-navy">
                    <a href="#about" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Overview</a>
                    <a href="#fees" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Fees</a>
                    <a href="#accommodation" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Hostels</a>
                    <a href="#requirements" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Admissions</a>
                    <a href="#faq" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">FAQ</a>
                    <a href="#apply" className="bg-accent text-white px-3 py-2 rounded-xl text-center hover:bg-navy transition-colors">Apply Form</a>
                  </div>
                </div>
              </div>

              {/* Local Business Details Box (Local SEO & E-E-A-T NAP consistency) */}
              <div className="bg-white border border-gray-150 rounded-[24px] p-6 shadow-md space-y-4">
                <h4 className="text-sm font-black text-navy uppercase tracking-wider border-b border-gray-100 pb-2">
                  Authorized Admission Partner
                </h4>
                <div className="space-y-3 text-xs text-gray-600 font-bold leading-relaxed">
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 block font-black">Consultancy Name</span>
                    <span className="text-navy font-bold text-sm">WCIEC Delhi (World Choice International Education Consultant)</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 block font-black">Office Address</span>
                    <a
                      href="https://www.google.com/maps/place/WCIEC/@28.6306198,77.2750274,17z/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy hover:text-primary transition-colors block font-semibold"
                    >
                      Shakarpur, Near Laxmi Nagar Metro Station,<br />
                      behind Karim Hotel, New Delhi, Delhi 110092
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 block font-black">Admissions Helplines</span>
                    <div className="flex flex-col gap-1 mt-1 text-navy font-bold text-sm">
                      <a href="tel:+918586873357" className="hover:text-primary font-semibold">+91 85868 73357</a>
                      <a href="tel:+919911635435" className="hover:text-primary font-semibold">+91 99116 35435</a>
                      <a href="tel:+919811385441" className="hover:text-primary font-semibold">+91 98113 85441</a>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 block font-black">Official Email</span>
                    <a href="mailto:wciec3182@gmail.com" className="text-navy hover:text-primary font-bold text-sm">
                      wciec3182@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom Full Width Section: Lead Form Banner */}
        <section className="bg-navy text-white py-16 px-6 md:px-12 border-t border-white/5 relative overflow-hidden" id="apply">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/15 blur-3xl rounded-full translate-x-1/2" />
          <div className="max-w-3xl mx-auto relative z-10 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-black text-accent uppercase tracking-widest block">Secure Your Seat Today</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Apply Online</h2>
              <p className="text-gray-300 font-medium text-sm md:text-base">Register now to lock in your MBBS seat for the 2026 batch.</p>
            </div>
            <div className="bg-white text-navy p-8 md:p-12 rounded-3xl shadow-2xl">
              <GlobalApplyForm buttonText="Submit Application" />
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions (FAQPage) */}
        <section className="py-16 bg-gray-50/50 border-t border-gray-150" id="faq">
          <div className="max-w-4xl mx-auto px-4 space-y-12">
            <div className="space-y-3 text-center">
              <span className="text-xs font-black text-primary uppercase tracking-widest block">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-navy">Frequently Asked Questions</h2>
              <div className="w-12 h-1 bg-medical rounded-full mx-auto" />
            </div>
            <div className="space-y-6">
              {uni.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-2">
                  <h4 className="text-lg font-black text-navy flex items-start gap-2">
                    <span className="text-medical text-xl font-black">Q.</span>
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-gray-600 pl-6 text-base leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
