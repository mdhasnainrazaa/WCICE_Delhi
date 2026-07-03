import React from "react";
import { Metadata } from "next";
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

    <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-navy text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-medical/10 blur-3xl rounded-full translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
              <div>
                <div className="flex items-center gap-2 text-medical font-bold mb-4">
                  <MapPin size={18} />
                  {uni.location}
                </div>
                <h1 className="text-4xl md:text-6xl mb-6">{uni.name}</h1>
                <div className="flex flex-wrap gap-4">
                  {uni.quickFacts.slice(0, 3).map((fact, i) => (
                    <div key={i} className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-md">
                      {fact}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center gap-2">
                  <Download size={18} /> Download Brochure
                </button>
                <button className="bg-accent text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-accent/90 transition-all">
                  <MessageSquare size={18} /> WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 mt-12 grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-3xl mb-6">About University</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{uni.about}</p>
            </section>

            {/* Fee Structure */}
            <section id="fees">
              <h2 className="text-3xl mb-6 flex items-center gap-3">
                <DollarSign className="text-medical" /> Fee Structure
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-xl">
                <table className="w-full text-left min-w-[500px]">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-4">Year</th>
                      <th className="p-4">Tuition Fee</th>
                      <th className="p-4">Hostel Fee</th>
                      <th className="p-4 font-bold text-medical">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {uni.fees.map((fee, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-semibold">{fee.year}</td>
                        <td className="p-4">{fee.tutionFee}</td>
                        <td className="p-4">{fee.hostelFee}</td>
                        <td className="p-4 font-bold text-navy">{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-gray-500 italic">* Fees are subject to university policy and exchange rates. Admission processing fees extra.</p>
            </section>

            {/* Hostel & Food */}
            <div className="grid md:grid-cols-2 gap-8">
              <GlassCard className="border-none shadow-lg bg-blue-50">
                <BedDouble className="text-primary mb-4" size={32} />
                <h3 className="text-xl mb-3">Hostel Facilities</h3>
                <p className="text-gray-600 text-sm">{uni.hostelDetails}</p>
              </GlassCard>
              <GlassCard className="border-none shadow-lg bg-green-50">
                <Coffee className="text-accent mb-4" size={32} />
                <h3 className="text-xl mb-3">Indian Food</h3>
                <p className="text-gray-600 text-sm">{uni.foodDetails}</p>
              </GlassCard>
            </div>

            {/* Admission Process */}
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-3xl mb-8">Admission Process</h2>
              <div className="space-y-6">
                {uni.admissionProcess.map((step, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="text-navy font-medium text-lg">{step}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Lead Form Sidebar */}
            <GlassCard className="sticky top-28 bg-white border-primary/10">
              <h3 className="text-2xl mb-2">Apply Now</h3>
              <p className="text-gray-500 text-sm mb-6">Secure your seat for 2026 batch today.</p>
              <div className="pt-2">
                <GlobalApplyForm buttonText="Submit Application" />
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-400 mb-2 uppercase font-bold tracking-widest">Or Instant Support</p>
                <button className="flex items-center justify-center gap-2 w-full text-accent font-bold hover:gap-3 transition-all">
                  <MessageSquare size={18} /> Chat on WhatsApp
                </button>
              </div>
            </GlassCard>

            {/* Quick Facts Sidebar */}
            <div className="bg-navy p-6 rounded-3xl text-white">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="text-medical" /> University Facts
              </h4>
              <ul className="space-y-4">
                {uni.quickFacts.map((fact, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-accent" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Docs */}
            <div className="bg-gray-50 p-6 rounded-3xl">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FileText className="text-primary" /> Documents Needed
              </h4>
              <ul className="space-y-3">
                {uni.documentsRequired.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <ChevronRight size={16} className="text-primary shrink-0 mt-1" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 mt-24">
          <h2 className="text-3xl mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {uni.faqs.map((faq, i) => (
              <GlassCard key={i} className="border-none bg-white shadow-sm">
                <h4 className="text-lg font-bold mb-2 text-navy">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
