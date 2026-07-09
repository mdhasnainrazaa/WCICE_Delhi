import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { UniversityGrid } from "@/components/sections/UniversityGrid";
import { 
  GraduationCap, 
  CheckCircle2, 
  MapPin, 
  BookOpen, 
  FileText, 
  Building2, 
  UtensilsCrossed, 
  Award, 
  Users 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Universities in Kyrgyzstan | WCIEC",
  description: "Explore top-ranked medical universities in Kyrgyzstan for Indian students. Get detailed info about NMC & WHO recognized colleges, low-cost MBBS fees, and direct admission for 2026.",
  keywords: "Medical Universities in Kyrgyzstan, top MBBS colleges Kyrgyzstan, Osh State University fees, Jalal Abad State University, Central Asian International Medical University, low cost MBBS abroad",
  alternates: {
    canonical: "https://www.wciecdelhi.com/universities/",
  },
};

export default function UniversitiesPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen selection:bg-[#2563EB] selection:text-white pb-24 overflow-x-hidden w-full">
      {/* ── HERO BANNER ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0EA5E9]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-6 border border-[#2563EB]/20">
            <GraduationCap size={14} /> Session 2026 Admissions Open
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.15] mb-6">
            Medical Universities <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6]">in Kyrgyzstan</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            Discover top-ranked government and international medical institutions recognized by NMC &amp; WHO. Explore affordable fees, high clinical exposure, and excellent preparation for screening exams.
          </p>
        </div>
      </section>

      {/* ── DYNAMIC GRID SECTION ── */}
      <section className="py-16 max-w-[1200px] mx-auto px-6">
        <UniversityGrid />
      </section>

      {/* ── COMPREHENSIVE SEO CONTENT SECTION (700+ Words) ── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="prose prose-blue max-w-none space-y-12 text-[#334155] leading-relaxed">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#0F172A] tracking-tight">
                Study MBBS in Kyrgyzstan: A Comprehensive Guide for Indian Students
              </h2>
              <p className="text-lg text-gray-600">
                Kyrgyzstan has emerged as one of the most preferred destinations for Indian students aspiring to pursue their medical careers abroad. Every year, thousands of medical aspirants secure admissions in top-ranked, NMC-approved government and international medical universities across Kyrgyzstan. WCIEC is proud to be the official and direct admission partner for these premier medical institutions.
              </p>
              <p>
                The primary reason behind the massive influx of Indian students is the highly affordable fee structure coupled with state-of-the-art infrastructure. Medical universities in Kyrgyzstan offer a standard 6-year MD program (equivalent to MBBS in India) taught entirely in the English medium, ensuring that students face no language barriers during their academic years.
              </p>
            </div>

            {/* Key Advantages */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0F172A] flex items-center gap-3">
                <Award className="text-[#2563EB] shrink-0" size={24} /> Key Advantages of Pursuing MBBS in Kyrgyzstan
              </h3>
              <p>
                Studying in Kyrgyzstan offers multiple benefits that are highly competitive compared to self-financed private colleges in India:
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-[#14B8A6]" size={16} /> Globally Recognized Degrees
                  </h4>
                  <p className="text-sm text-gray-600">
                    Degrees are recognized by the National Medical Commission (NMC), World Health Organization (WHO), FAIMER, and other global medical bodies, permitting students to practice worldwide.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-[#14B8A6]" size={16} /> Low Tuition Fees &amp; Cost of Living
                  </h4>
                  <p className="text-sm text-gray-600">
                    The entire budget for the 6-year course ranges from 15 to 25 Lakhs INR, which includes tuition fees, hostel accommodation, and Indian food services.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-[#14B8A6]" size={16} /> Standard English Medium
                  </h4>
                  <p className="text-sm text-gray-600">
                    The entire curriculum, clinical training, textbooks, and examinations are structured in English, enabling students to focus entirely on their studies.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <h4 className="font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-[#14B8A6]" size={16} /> Superior Clinical Exposure
                  </h4>
                  <p className="text-sm text-gray-600">
                    Students undergo comprehensive clinical training in high-capacity government hospitals associated with the universities, dealing with real patients.
                  </p>
                </div>
              </div>
            </div>

            {/* In-depth Universities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0F172A] flex items-center gap-3">
                <Building2 className="text-[#2563EB]" size={24} /> Profiles of Top Medical Universities
              </h3>
              
              <div className="space-y-4 border-l-4 border-[#2563EB]/20 pl-4">
                <h4 className="font-bold text-lg text-[#0F172A]"><Link href="/universities/osh-state-university/" className="hover:text-[#2563EB] transition-colors">Osh State University (Medical Faculty)</Link></h4>
                <p className="text-sm text-gray-600">
                  Established in 1939, <Link href="/universities/osh-state-university/" className="text-[#2563EB] font-semibold hover:underline">Osh State University</Link> is one of the oldest and largest public institutions in Kyrgyzstan. Its Medical Faculty has been training international students for over three decades. It boasts a highly qualified academic faculty, advanced simulation centers, and massive clinical rotation hospitals.
                </p>
              </div>

              <div className="space-y-4 border-l-4 border-[#2563EB]/20 pl-4">
                <h4 className="font-bold text-lg text-[#0F172A]"><Link href="/universities/jalal-abad-state-university/" className="hover:text-[#2563EB] transition-colors">Jalal Abad State University (JASU)</Link></h4>
                <p className="text-sm text-gray-600">
                  <Link href="/universities/jalal-abad-state-university/" className="text-[#2563EB] font-semibold hover:underline">Jalal Abad State University</Link> is another premier government university located in the city of Jalal-Abad. It is famous for its strict academic discipline, highly affordable fee structure, and excellent FMGE passing rates. The university provides comfortable hostels with dedicated Indian mess facilities.
                </p>
              </div>

              <div className="space-y-4 border-l-4 border-[#2563EB]/20 pl-4">
                <h4 className="font-bold text-lg text-[#0F172A]"><Link href="/universities/central-asian-international-medical-university/" className="hover:text-[#2563EB] transition-colors">Central Asian International Medical University (CAIMU)</Link></h4>
                <p className="text-sm text-gray-600">
                  <Link href="/universities/central-asian-international-medical-university/" className="text-[#2563EB] font-semibold hover:underline">Central Asian International Medical University (CAIMU)</Link> is a modern, rapidly growing international medical university equipped with state-of-the-art teaching modules, virtual anatomy software, and highly interactive clinical laboratories. It specialises in training international students according to the latest global licensing exam patterns.
                </p>
              </div>

              <div className="space-y-4 border-l-4 border-[#2563EB]/20 pl-4">
                <h4 className="font-bold text-lg text-[#0F172A]"><Link href="/universities/jalal-abad-international-university/" className="hover:text-[#2563EB] transition-colors">Jalal-Abad International University</Link></h4>
                <p className="text-sm text-gray-600">
                  <Link href="/universities/jalal-abad-international-university/" className="text-[#2563EB] font-semibold hover:underline">Jalal-Abad International University</Link> is a modern institution focused on global medical education standards with state-of-the-art facilities. Established in 2015, it offers advanced simulation labs, international faculty, and a curriculum designed to prepare Indian students for the NExT licensing exam from day one.
                </p>
              </div>

              <div className="space-y-4 border-l-4 border-[#2563EB]/20 pl-4">
                <h4 className="font-bold text-lg text-[#0F172A]"><Link href="/universities/osh-international-medical-university/" className="hover:text-[#2563EB] transition-colors">Osh International Medical University (OIMU)</Link></h4>
                <p className="text-sm text-gray-600">
                  <Link href="/universities/osh-international-medical-university/" className="text-[#2563EB] font-semibold hover:underline">Osh International Medical University (OIMU)</Link>, established in 2019, is the newest WCIEC partner university in Kyrgyzstan. Built from the ground up with the NExT syllabus in mind, OIMU offers premium hostel facilities, practical-first teaching, and an Indian mess — making it an increasingly popular choice for students who prioritise a modern academic environment.
                </p>
              </div>
            </div>

            {/* Admission Criteria */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0F172A] flex items-center gap-3">
                <FileText className="text-[#2563EB]" size={24} /> Eligibility Criteria for Indian Students
              </h3>
              <p>
                To secure direct admission to top-ranked medical universities in Kyrgyzstan through WCIEC, Indian students must fulfill the following basic eligibility requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li><strong>Age limit:</strong> The candidate must be at least 17 years old on or before the 31st of December of the year of admission.</li>
                <li><strong>Academic limits:</strong> Must have passed 10+2 examinations with Physics, Chemistry, and Biology, scoring a minimum aggregate of 50% for General and 40% for Reserved categories.</li>
                <li><strong>NEET requirements:</strong> Qualifying NEET score in the current year or within the last two years is mandatory as per NMC regulations.</li>
              </ul>
            </div>

            {/* Student Life */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0F172A] flex items-center gap-3">
                <UtensilsCrossed className="text-[#2563EB]" size={24} /> Hostel Life and Indian Food Facilities
              </h3>
              <p>
                Living in a foreign country is a great experience, and universities in Kyrgyzstan ensure that international students feel safe and comfortable. All partner universities associated with WCIEC offer secure, fully furnished on-campus hostels with amenities like high-speed Wi-Fi, central heating, and laundry services.
              </p>
              <p>
                To cater to Indian students' culinary preferences, dedicated Indian mess facilities are operational in all hostels. Professional Indian chefs prepare authentic North Indian and South Indian vegetarian and non-vegetarian meals daily, providing a home-like experience.
              </p>
            </div>

            {/* WCIEC Role */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0F172A] flex items-center gap-3">
                <Users className="text-[#2563EB]" size={24} /> How WCIEC Guarantees Your Success
              </h3>
              <p>
                WCIEC acts as your trusted end-to-end partner. From customized counseling sessions to university selection, direct admission letter processing, visa documentation, travel ticketing, group departures, and campus allotment, our team takes care of every single step.
              </p>
              <p>
                Moreover, we provide continuous post-arrival support. WCIEC coordinators are physically present in Kyrgyzstan to assist students with local registrations, medical checkups, hostel allotments, and academic guidance throughout their 6-year stay.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
