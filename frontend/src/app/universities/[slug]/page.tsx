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
  ChevronRight
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

    <main className="bg-background min-h-screen text-navy">
      {/* Hero Section */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-medical font-bold">
                <MapPin size={18} />
                <span className="tracking-wide uppercase text-sm">{uni.location}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">{uni.name}</h1>
              {uni.ranking && (
                <div className="inline-block bg-accent/20 border border-accent/30 text-accent font-black px-5 py-2.5 rounded-full text-xs uppercase tracking-widest shadow-md">
                  🏆 {uni.ranking}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a 
                href="#apply" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
              >
                <GraduationCap size={18} /> Apply Admission 2026
              </a>
              <a 
                href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] hover:bg-[#1eb054] text-white px-6 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-green-500/20"
              >
                <MessageSquare size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visible Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-150 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={12} className="text-gray-300" />
          <Link href="/universities/" className="hover:text-primary transition-colors">Universities</Link>
          <ChevronRight size={12} className="text-gray-300" />
          <Link href="/mbbs-in-kyrgyzstan/" className="hover:text-primary transition-colors">Kyrgyzstan</Link>
          <ChevronRight size={12} className="text-gray-300" />
          <span className="text-navy">{uni.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Section 1: Academic Profile, Clinical, Features, & Compact Sidebar */}
        <section className="grid lg:grid-cols-3 gap-12 items-start" id="about">
          {/* Left Column: Academic Content (Overview + Clinical + Features) */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Academic Profile & Details</h2>
              <div className="w-16 h-1 bg-medical rounded-full" />
              <p className="text-gray-650 leading-relaxed text-lg font-medium">{uni.about}</p>
              {uni.detailedOverview && (
                <p className="text-gray-605 leading-relaxed text-lg">{uni.detailedOverview}</p>
              )}
            </div>

            {/* Clinical Exposure & FMGE Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {uni.clinicalExposure && (
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-medical/30 transition-all duration-300 space-y-4" id="clinical">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle2 className="text-medical shrink-0" size={20} /> 
                    <span>Clinical Exposure</span>
                  </h3>
                  <p className="text-gray-650 leading-relaxed text-sm font-medium">{uni.clinicalExposure}</p>
                </div>
              )}

              {uni.fmgePerformance && (
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 space-y-4" id="fmge">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <ShieldCheck className="text-primary shrink-0" size={20} /> 
                    <span>FMGE Performance</span>
                  </h3>
                  <p className="text-gray-655 leading-relaxed text-sm font-medium">{uni.fmgePerformance}</p>
                </div>
              )}
            </div>
            
            {/* Advantages & Considerations Side-by-Side */}
            {(uni.advantages || uni.disadvantages) && (
              <div className="grid md:grid-cols-2 gap-6" id="features">
                {uni.advantages && (
                  <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-green-500/30 transition-all duration-300 space-y-4">
                    <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">
                      <CheckCircle2 className="text-green-600" size={20} /> Key Advantages
                    </h3>
                    <ul className="space-y-3">
                      {uni.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-green-700 font-bold">
                          <span className="text-green-500 mt-1 shrink-0">•</span> 
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {uni.disadvantages && (
                  <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 space-y-4">
                    <h3 className="text-xl font-bold text-red-800 flex items-center gap-2">
                      <ShieldCheck className="text-red-600" size={20} /> Points to Consider
                    </h3>
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
          </div>

          {/* Right Column: Premium Compact Sidebar */}
          <div className="lg:col-span-1 lg:sticky lg:top-28 space-y-6">
            {/* Quick Info & Navigation Card */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-6">
              {/* Quick Links Nav */}
              <div className="space-y-3">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Quick Navigation</span>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <a href="#about" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Overview</a>
                  <a href="#fees" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Fees</a>
                  <a href="#accommodation" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Hostel</a>
                  <a href="#requirements" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">Admissions</a>
                  <a href="#faq" className="bg-gray-50 hover:bg-primary hover:text-white px-3 py-2 rounded-xl text-center transition-colors">FAQ</a>
                  <a href="#apply" className="bg-primary text-white px-3 py-2 rounded-xl text-center hover:bg-navy transition-colors">Apply Now</a>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <a 
                  href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1eb054] text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-green-500/10"
                >
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>
                <PrintButton />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Highlights & Document Checklist (Full Width Panel) */}
        <section className="bg-gray-50/50 border border-gray-150 p-8 md:p-12 rounded-3xl my-12" id="highlights">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Quick Highlights */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-black tracking-tight">University Highlights</h2>
                <p className="text-gray-500 font-medium text-base">Key credentials, recognition, and metrics.</p>
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
            <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-medical/30 transition-all duration-300 space-y-6">
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
            <h2 className="text-3xl md:text-4xl font-black tracking-tight flex items-center gap-3">
              <DollarSign className="text-medical" size={32} /> Fees & Accommodation
            </h2>
            <div className="w-16 h-1 bg-medical rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Table Container */}
            <div className="lg:col-span-2 space-y-6">
              <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl bg-white">
                <table className="w-full text-left min-w-[500px] border-collapse">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Year</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Tuition Fee</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider">Hostel Fee</th>
                      <th className="p-5 font-black text-xs uppercase tracking-wider text-medical">Total Package</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-150">
                    {uni.fees.map((fee, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 even:bg-gray-55/30 transition-colors font-medium">
                        <td className="p-5 font-bold text-navy">{fee.year}</td>
                        <td className="p-5 text-gray-600">{fee.tutionFee}</td>
                        <td className="p-5 text-gray-600">{fee.hostelFee}</td>
                        <td className="p-5 font-bold text-navy">{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 italic font-medium">* Fees are subject to change according to university policy. Food costs are handled independently in the student mess.</p>
            </div>

            {/* Hostel Details */}
            <div className="lg:col-span-1 space-y-6" id="accommodation">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-medical/20 transition-all duration-300 space-y-3">
                <BedDouble className="text-primary" size={28} />
                <h4 className="text-lg font-bold">Hostel Facilities</h4>
                <p className="text-gray-605 text-sm font-medium leading-relaxed">{uni.hostelDetails}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all duration-300 space-y-3">
                <Coffee className="text-accent" size={28} />
                <h4 className="text-lg">Indian Food & Mess</h4>
                <p className="text-gray-655 text-sm font-medium leading-relaxed">{uni.foodDetails}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Eligibility & Admission Timeline (Full Width Panel) */}
        <section className="bg-gray-50/50 border border-gray-155 p-8 md:p-12 rounded-3xl my-12" id="requirements">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Eligibility Criteria */}
            {uni.eligibility && (
              <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-medical/30 transition-all duration-300 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight">Eligibility Criteria</h3>
                  <p className="text-gray-500 text-xs font-medium">Academic & exam prerequisites.</p>
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

        {/* Section 5: Bottom Apply Form Section */}
        <section className="bg-navy text-white py-16 px-6 md:px-12 rounded-3xl overflow-hidden relative shadow-xl" id="apply">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/15 blur-3xl rounded-full translate-x-1/2" />
          <div className="max-w-3xl mx-auto relative z-10 space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Apply Online</h2>
              <p className="text-medical font-bold text-base md:text-lg">Register now to secure your seat for 2026 batch.</p>
            </div>
            <div className="bg-white text-navy p-8 md:p-12 rounded-3xl shadow-2xl">
              <GlobalApplyForm buttonText="Submit Application" />
            </div>
          </div>
        </section>

        {/* Section 5: Frequently Asked Questions */}
        <section className="py-12" id="faq">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-medical rounded-full mx-auto" />
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
