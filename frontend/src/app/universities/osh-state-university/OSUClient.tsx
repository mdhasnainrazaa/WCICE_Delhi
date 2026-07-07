"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, MapPin, Clock, BookOpen, Globe2, GraduationCap, 
  Download, ChevronDown, Trophy, ShieldCheck, 
  Coffee, Building2, Sparkles, ArrowRight, 
  Microscope, HeartPulse, Award, Target,
  PlayCircle, Brain, TestTube, Activity, Stethoscope, Landmark, Info
} from "lucide-react";
import { PromDown } from "@/components/ui/PromDown";
import { useApplyModal } from "@/context/ApplyModalContext";

// ─── REUSABLE COMPONENTS ──────────────────────────────────────────────────

const Breadcrumbs = () => (
  <nav className="flex mb-8 text-sm font-medium text-white/60" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2">
      <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <Link href="/universities" className="hover:text-white transition-colors">Universities</Link>
      </li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <Link href="/mbbs-in-kyrgyzstan" className="hover:text-white transition-colors">Kyrgyzstan</Link>
      </li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <span className="text-white font-semibold">Osh State University</span>
      </li>
    </ol>
  </nav>
);

const SectionHeading = ({ id, title, subtitle, center = false, light = false }: { id?: string; title: string; subtitle?: string; center?: boolean; light?: boolean }) => (
  <div id={id} className={`mb-8 ${center ? "text-center" : ""}`}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 ${
          light ? "text-[#14B8A6] bg-[#14B8A6]/10" : "text-[#2563EB] bg-[#2563EB]/10"
        }`}
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-[#0F172A]"}`}
    >
      {title}
    </motion.h2>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50">
        <span className="text-sm font-bold text-[#0F172A]" itemProp="name">{question}</span>
        <ChevronDown size={18} className={`text-[#64748B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="overflow-hidden" 
            itemScope 
            itemProp="acceptedAnswer" 
            itemType="https://schema.org/Answer"
          >
            <div className="px-5 pb-5 text-xs text-[#64748B] leading-relaxed border-t border-slate-100 pt-3" itemProp="text">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function OSUClient() {
  const { openModal } = useApplyModal();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <article className="bg-[#F8FAFC] min-h-screen font-inter overflow-x-hidden selection:bg-[#14B8A6] selection:text-white">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0F172A] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image 
            src="/images/osu-gallery/osh-state-university-medical-building.webp" 
            alt="Osh State University Medical Campus Building, Kyrgyzstan" 
            fill 
            className="object-cover opacity-25" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F97316]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <Breadcrumbs />
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#FACC15] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#F97316]/30 backdrop-blur-md">
                <Globe2 size={16} /> MD / MBBS in Kyrgyzstan (NMC Approved MD Physician Degree)
              </div>
              <h1 className="text-5xl md:text-[56px] lg:text-[64px] font-bold text-white leading-[1.1] mb-6">
                MBBS at Osh State <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FACC15]">University, Kyrgyzstan</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl">
                Start your medical journey at Osh State University, the oldest and top-ranked public university in the Kyrgyz Republic. Get world-class clinical training, separate hostel facilities, and high FMGE pass rates under expert guidance of WCIEC Delhi.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button onClick={openModal} className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#F97316]/30 flex items-center gap-2">
                  Apply Now <ArrowRight size={20} />
                </button>
                <a 
                  href="/Brouchers/osh-state-university-brochure.pdf" 
                  download 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2"
                >
                  Download Brochure <Download size={20} />
                </a>
              </div>
            </motion.div>

            {/* Right Side Stats */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FACC15]/20 rounded-full blur-3xl" />
                <h3 className="text-xl font-bold text-white mb-6">Quick Overview</h3>
                <div className="space-y-6">
                  {[
                    { label: "Established", value: "1939", icon: Building2 },
                    { label: "Location", value: "Osh, Kyrgyzstan", icon: MapPin },
                    { label: "Duration", value: "5 Years", icon: Clock },
                    { label: "FMGE Coaching", value: "In-House Faculty", icon: Target },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="w-10 h-10 bg-[#F97316]/20 rounded-xl flex items-center justify-center shrink-0">
                        <stat.icon size={20} className="text-[#FACC15]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">{stat.label}</div>
                        <div className="font-bold text-white">{stat.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EEAT TRUST HIGHLIGHTS */}
      <section className="py-8 bg-white border-b border-slate-100 shadow-sm relative z-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "15+ Years Experience", desc: "Trusted MBBS consultancy in Delhi", icon: Award },
              { title: "5000+ Global Students", desc: "Successfully placed abroad", icon: GraduationCap },
              { title: "Official Partner", desc: "Direct University Admission partner", icon: ShieldCheck },
              { title: "24/7 Support", desc: "From visa to pre & post arrival", icon: Sparkles }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-4">
                <item.icon className="text-[#2563EB] mb-2" size={32} />
                <h4 className="font-bold text-[#0F172A] text-base">{item.title}</h4>
                <p className="text-xs text-[#64748B] mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2️⃣ ABOUT UNIVERSITY SECTION */}
      <section className="py-24 bg-white relative" id="about">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <SectionHeading id="about-heading" subtitle="University Overview" title="About Osh State University" />
              
              {/* GEO Answer-first box */}
              <div className="p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-8">
                <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
                  Osh State University (OSU) is Kyrgyzstan&apos;s oldest and largest public medical university, established in 1939. Located in Osh, the second-largest city in the country, it offers a world-class, 5-year English-medium MBBS (MD Physician) program recognized by the NMC, WHO, and global bodies, currently hosting over 3,000 active Indian medical aspirants. WCIEC Delhi acts as the trusted official admission partner for international enrollments.
                </p>
              </div>

              <div className="space-y-6 text-[#64748B] text-base leading-relaxed mb-8">
                <p>
                  Osh State University is highly recognized globally for its educational excellence and academic pedigree. Established in 1939, it is the premier choice for candidates planning to <Link href="/mbbs-abroad" className="text-[#2563EB] hover:underline font-semibold">Study MBBS Abroad</Link> with affordable fee models. The university consists of several faculties, with the International Medical Faculty (IMF) serving as the main center for international students.
                </p>
                <p>
                  By choosing to study <Link href="/mbbs-in-kyrgyzstan" className="text-[#2563EB] hover:underline font-semibold">MBBS in Kyrgyzstan</Link> at Osh State University, students gain access to diagnostic equipment, extensive pre-clinical training, and a highly competitive academic ecosystem. WCIEC Delhi handles all applications directly, ensuring that candidates secure their letters and visas with zero hassle.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2 rounded-xl">
                  <Award size={20} className="text-[#2563EB]" /> <span className="font-semibold text-[#0F172A] text-sm">Established 1939</span>
                </div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2 rounded-xl">
                  <Globe2 size={20} className="text-[#14B8A6]" /> <span className="font-semibold text-[#0F172A] text-sm">Top Ranked Public University</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl mt-8 lg:mt-0">
              <Image 
                src="/images/osu-gallery/osh-state-university-campus.webp" 
                alt="Osh State University Administrative Campus Building and Gardens in Kyrgyzstan" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 40vw" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OSH STATE UNIVERSITY */}
      <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]" id="why-choose">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="The OSU Advantage" title="Why Choose Osh State University" center />
          
          <div className="max-w-3xl mx-auto p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-12">
            <p className="text-sm font-bold text-[#0F172A] leading-relaxed text-left">
              Osh State University offers a combination of a government-backed public infrastructure, highly subsidized fees, English-medium lectures, global accreditations (WHO, NMC, ECFMG), and dedicated Indian faculty coaches for licensing exam prep. Applying through WCIEC Delhi ensures direct, transparent processing with full post-arrival security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Affordable Tuition Packages", desc: "Get highly subsidized public fees structure at just $3,500 per year, making medical studies affordable.", icon: Trophy },
              { title: "100% English Medium", desc: "No local language requirement for your core classes. Taught entirely in English by global faculty.", icon: BookOpen },
              { title: "Advanced Practical Labs", desc: "Features high-fidelity clinical simulation departments and modern anatomy labs.", icon: Microscope },
              { title: "State Affiliated Hospitals", desc: "Trainees undergo rotations at top municipal clinics in Osh city, interacting with local patients.", icon: Building2 },
              { title: "In-House FMGE & NExT Prep", desc: "WCIEC coordinates special training seminars on campus led by senior Indian medical faculties.", icon: Target },
              { title: "Secure Living Standards", desc: "Fully secure student housings with 24/7 warden supervision, CCTV, and separate girl-only wings.", icon: ShieldCheck }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] p-8 rounded-[24px] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB] transition-colors">
                  <feature.icon size={28} className="text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MBBS COURSE DETAILS */}
      <section className="py-24 bg-white" id="course">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Curriculum Overview" title="MD / MBBS Course Structure at Osh State" />
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed border-l-4 border-[#2563EB]">
                The MBBS (MD Physician) program spans exactly 5 years. It is designed to satisfy all National Medical Commission guidelines, offering a minimum of 54 months of core classroom learning alongside integrated clinical clerkships.
              </div>
              <p className="text-[#64748B] text-base leading-relaxed mb-6">
                Students cover pre-clinical anatomy, physiology, and biochemistry in their first two years, transitioning to clinical pathology, pharmacology, and patient-side rotations at affiliated state clinics during years three to five. WCIEC Delhi monitors the course guidelines to ensure students meet licensing standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Duration", val: "5 Years", icon: Clock },
                  { label: "Language", val: "100% English", icon: Globe2 },
                  { label: "Degree Title", val: "MD Physician", icon: GraduationCap },
                  { label: "Intake", val: "September / October", icon: CheckCircle2 }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                    <item.icon className="text-[#2563EB]" size={20} />
                    <div>
                      <div className="text-[10px] text-[#64748B] font-bold uppercase">{item.label}</div>
                      <div className="text-sm font-black text-[#0F172A]">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0F172A] text-white p-8 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/10 rounded-full blur-3xl" />
              <h3 className="text-xl font-bold mb-4">Academic Milestones</h3>
              <div className="space-y-4">
                {[
                  { title: "Years 1 - 2: Basic Sciences", desc: "Focuses on human anatomy, microbiology, histological analysis, and biochemistry." },
                  { title: "Years 3 - 4: Pre-Clinical & Clinical pathology", desc: "Lectures on general medicine, forensic science, gynecology, and surgical methodologies." },
                  { title: "Year 5: Integrated Clinical Rotations", desc: "Clerkship in state hospitals under professional clinical supervision." }
                ].map((phase, idx) => (
                  <div key={idx} className="border-l-2 border-[#F97316] pl-4 py-2">
                    <h4 className="font-bold text-sm text-white">{phase.title}</h4>
                    <p className="text-xs text-white/60 mt-1">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS & ELIGIBILITY */}
      <section className="py-24 bg-[#F8FAFC]" id="admission-process">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading title="Admission Process & Eligibility 2026-27" subtitle="Step-By-Step Guidance" center />
          
          <div className="grid lg:grid-cols-3 gap-8 text-left mb-12">
            {/* Eligibility block */}
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Eligibility Criteria</h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                To fulfill the dynamic eligibility criteria for MBBS at Osh State University, candidates must submit their records to WCIEC Delhi for verifying compliance:
              </p>
              <ul className="text-xs text-[#64748B] space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#2563EB]" size={14} /> Completed 17 years by December 31st.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#2563EB]" size={14} /> 50% aggregate in Physics, Chemistry, Biology.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#2563EB]" size={14} /> 40% aggregate in PCB for SC/ST/OBC categories.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#2563EB]" size={14} /> Valid qualified score in NEET examination.</li>
              </ul>
            </div>

            {/* Admission Roadmap */}
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">WCIEC Delhi Admission Roadmap</h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                We handle the complete onboarding of candidates, preventing common registration errors:
              </p>
              <ol className="text-xs text-[#64748B] space-y-2">
                <li>1. Online application and document submission via WCIEC.</li>
                <li>2. Issuance of official university admission invitation letter.</li>
                <li>3. Submission to Ministry of Education for visa clearance.</li>
                <li>4. Visa stamping at the Kyrgyz Embassy in New Delhi.</li>
                <li>5. Group departure flight booking and airport pickup in Osh.</li>
              </ol>
            </div>

            {/* Documents Needed */}
            <div className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Documents Required</h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Candidates must prepare the following physical and digital certificates for documentation clearance:
              </p>
              <ul className="text-xs text-[#64748B] space-y-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#14B8A6]" size={14} /> 10th and 12th passing marksheets.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#14B8A6]" size={14} /> Original valid passport (min. 2 years validity).</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#14B8A6]" size={14} /> Qualified NEET scorecard copy.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#14B8A6]" size={14} /> Passport-sized photos with white backgrounds.</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-[#14B8A6]" size={14} /> Official medical health clearance certificate.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section className="py-24 bg-white" id="fees-section">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading id="fees-heading" title="Osh State University Fees 2026-27" subtitle="Direct Pricing" center />
          
          <div className="max-w-3xl mx-auto p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-12">
            <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
              Osh State University fee structure is highly affordable, amounting to $3,500 for tuition and $600 for hostel charges per academic year. The total tuition and accommodation fees amount to approximately $4,100 annually, totaling $20,500 for the full 5-year MD course.
            </p>
          </div>

          <div className="flex justify-end mb-6">
            <div className="flex bg-[#F8FAFC] p-1 rounded-xl border border-[#E2E8F0] shadow-sm">
              <button onClick={() => setCurrency('INR')} className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${currency === 'INR' ? "bg-[#2563EB] text-white" : "text-[#64748B]"}`}>INR (₹)</button>
              <button onClick={() => setCurrency('USD')} className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${currency === 'USD' ? "bg-[#2563EB] text-white" : "text-[#64748B]"}`}>USD ($)</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-100">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><GraduationCap className="text-[#2563EB]" /> Academic Fees</h4>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-sm text-slate-600">Annual Tuition Fee</span>
                  <span className="font-bold text-sm text-[#0F172A]">{currency === 'INR' ? "₹2,97,500" : "$3,500"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-sm text-slate-600">Annual Hostel Fee</span>
                  <span className="font-bold text-sm text-[#0F172A]">{currency === 'INR' ? "₹51,000" : "$600"}</span>
                </div>
                <div className="flex justify-between py-2 font-black text-base text-[#2563EB]">
                  <span>Total Yearly Cost</span>
                  <span>{currency === 'INR' ? "₹3,48,500" : "$4,100"}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-3xl border border-slate-100">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2"><Coffee className="text-[#F97316]" /> Hostel & Food Mess</h4>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                The hostels feature central heating systems, secure doors, clean washrooms, and high-speed Wi-Fi. Indian mess halls serve vegetarian and non-vegetarian food cooked by Indian chefs.
              </p>
              <div className="flex justify-between py-2 font-bold text-sm text-[#F97316]">
                <span>Mess Cost (Per Year)</span>
                <span>{currency === 'INR' ? "₹85,000" : "$1,000"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL EXPOSURE, RECOGNITIONS, AND CAMPUS LIFE */}
      <section className="py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Recognitions */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#0F172A] flex items-center gap-2"><Award className="text-[#2563EB]" /> WHO & NMC Approval</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Osh State University is an NMC-approved medical university in Kyrgyzstan listed in the World Directory of Medical Schools (WDOMS). Its medical degree complies with all active National Medical Commission standards, ensuring graduates are fully eligible to sit for the FMGE/NExT screening examinations in India.
              </p>
            </div>

            {/* Clinical Base */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#0F172A] flex items-center gap-2"><Stethoscope className="text-[#2563EB]" /> Clinical Exposure</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Trainees gain practical bedside experience starting from their third year across 6+ large affiliated state hospitals. Clinical modules include diagnosis, emergency triage, pediatrics, surgeries, and gynecology, guiding students with hands-on practice.
              </p>
            </div>

            {/* Hostel Accommodation */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-[#0F172A] flex items-center gap-2"><Building2 className="text-[#2563EB]" /> Hostel & Indian Food</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Living arrangements at Osh State University are comfortable and monitored 24/7. Hostels feature study desks, heaters, and laundries. Indian students enjoy vegetarian and non-vegetarian food cooked by Indian chefs in on-campus mess halls.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DOCUMENTS & VISA PROCESS */}
      <section className="py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Admissions" title="Required Documents & Visa Process" center />
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-[#F8FAFC] p-10 rounded-[3rem] border border-[#E2E8F0] shadow-sm">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                <BookOpen className="text-[#2563EB]" /> Required Documents
              </h3>
              <ul className="space-y-4">
                {[
                  "10th and 12th Marksheets (Original)",
                  "NEET Scorecard (Valid)",
                  "Original Passport (Min. 18 months validity)",
                  "10 Passport-size photos (White background)",
                  "Medical Fitness Certificate (HIV Negative)",
                  "Birth Certificate (Optional/If under 18)"
                ].map((doc, i) => (
                  <li key={i} className="flex gap-3 text-[#64748B] font-medium text-sm">
                    <CheckCircle2 size={18} className="text-[#14B8A6] shrink-0" /> {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] p-10 rounded-[3rem] border border-[#E2E8F0] shadow-sm">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                <Globe2 className="text-[#F97316]" /> Student Visa Process
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {[
                  { step: "1", title: "Invitation Letter", desc: "WCIEC processes the official invitation letter from the Ministry of Education." },
                  { step: "2", title: "Visa Application", desc: "Submission of documents to the Embassy in New Delhi." },
                  { step: "3", title: "E-Visa Issuance", desc: "The student E-Visa is issued within 10-15 working days." }
                ].map((v, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-[#2563EB] text-white font-bold text-xs shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {v.step}
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-[#0F172A] mb-1">{v.title}</h4>
                      <p className="text-xs text-[#64748B] font-medium">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading id="faq-heading" title="Frequently Asked Questions (FAQs)" subtitle="Questions & Answers" center />
          
          <div className="p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-12">
            <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
              Find answers to the most common questions regarding Osh State University&apos;s MBBS curriculum, fees, hostel rooms, NMC compliance, and admission assistance provided by WCIEC Delhi.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is Osh State University NMC approved?", a: "Yes, it is recognized by the National Medical Commission (NMC), WHO, and listed in WDOMS, enabling graduates to practice in India after passing FMGE/NExT." },
              { q: "What are the MBBS fees at Osh State University?", a: "The annual tuition fee is $3,500, and hostel accommodation is $600. Total annual university charges amount to $4,100." },
              { q: "Is NEET compulsory for studying MBBS at Osh State University?", a: "Yes, a valid qualifying score in NEET is mandatory for all Indian students planning to practice medicine in India." },
              { q: "Are separate hostels available for boys and girls?", a: "Yes, the university provides comfortable separate hostel blocks for male and female students with 24/7 security." },
              { q: "Is Indian food served at the mess?", a: "Yes, an on-campus mess serves authentic Indian meals (both vegetarian and non-vegetarian options) prepared by Indian cooks." },
              { q: "What is the duration of MBBS at Osh State University?", a: "The MD (MBBS equivalent) course is a 5-year program that fulfills all NMC study duration criteria." },
              { q: "Can I practice in countries other than India after graduating?", a: "Yes, you can sit for licensing exams such as USMLE (USA), PLAB (UK), and AMC (Australia) due to its global WHO recognition." },
              { q: "How is clinical training conducted?", a: "Students undergo bedside clinical training at municipal state hospitals in Osh starting from their third academic year." },
              { q: "Why should I apply through WCIEC Delhi?", a: "WCIEC Delhi has 15+ years of experience placing 5000+ students. We provide official university admission processing, visa stamping, and local support in Kyrgyzstan." },
              { q: "Is Kyrgyzstan safe for Indian students?", a: "Yes, Kyrgyzstan is highly peaceful. The university campus is monitored with CCTVs and has dedicated security staff." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT SECTION ── */}
      <section className="py-20 bg-white" aria-label="About Osh city and Osh State University student life">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose max-w-none space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-black text-[#0F172A] mb-4">Osh City: Campus Life, Safety &amp; Indian Student Community</h2>
              <p>
                Osh is Kyrgyzstan&apos;s second-largest city and is often called the <strong>cultural capital of southern Kyrgyzstan</strong>. It is a cosmopolitan city with a rich history spanning over 3,000 years, a well-connected airport (OSS) with regular flights to Bishkek and seasonal routes to Moscow, and a large bazaar where Indian groceries, spices, and familiar produce are readily available. For Indian students, the city&apos;s warm southern climate, consistent internet connectivity, and affordable restaurants make it a very liveable destination.
              </p>
              <p>
                Osh State University&apos;s hostel is located within the secure university campus. Security is stringent: all visitor access requires ID verification, CCTV covers every corridor, and Indian wardens are available around the clock. A large, established Indian student community of over 1,000 students currently enrolled at Osh State University Kyrgyzstan means seniors are always available to guide first-year students through local registration, banking, and FMGE study resources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#0F172A] mb-4">Kyrgyzstan Student Visa Process for Osh State University</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm">
                <li><strong>Document Collection</strong> — WCIEC collects your 10+2 transcripts, NEET scorecard, valid passport (min 2-year validity), and medical fitness certificate.</li>
                <li><strong>Admission Letter</strong> — Osh State University issues an official admission letter within 7–10 working days after document approval.</li>
                <li><strong>Ministry Invitation</strong> — The university applies to the Kyrgyz Ministry of Education for a visa invitation. This takes 15–25 days.</li>
                <li><strong>Visa Stamping</strong> — Visit the Kyrgyz Embassy in New Delhi. Submit the invitation letter, passport, recent photographs, and health certificate. Visa is typically ready in 3–5 working days.</li>
                <li><strong>Group Departure</strong> — WCIEC organises group flights from Delhi/Mumbai. Upon landing at Osh International Airport, WCIEC representatives and Osh State University staff escort students directly to the hostel.</li>
              </ol>
              <p className="text-sm mt-4">
                For the latest NMC screening exam requirements and eligibility verification, read the official <Link href="/nmc-guidelines-for-mbbs-abroad/" className="text-[#2563EB] font-semibold hover:underline">NMC guidelines for MBBS abroad</Link> — mandatory reading for every Indian student planning overseas medical education.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#0F172A] mb-4">Why Osh State University is the Best Medical University in Kyrgyzstan</h2>
              <p>
                Osh State University stands apart from other medical colleges in Kyrgyzstan due to its founding in 1939 — making it the oldest university in the country and the one with the deepest clinical infrastructure. Its International Medical Faculty has been training foreign students specifically since 1992, meaning its systems, Hindi-speaking advisors, Indian mess facilities, and FMGE preparation programmes are battle-tested across decades. Newer private universities in Kyrgyzstan may offer modern campuses, but they lack OSU&apos;s vast hospital network and NExT result track record.
              </p>
              <p>
                To compare total 6-year costs across all Kyrgyzstan medical universities, see our comprehensive <Link href="/mbbs-fees-abroad/" className="text-[#2563EB] font-semibold hover:underline">MBBS fees abroad breakdown</Link>. To explore all five WCIEC partner universities and find the best fit for your profile, visit our <Link href="/mbbs-in-kyrgyzstan/" className="text-[#2563EB] font-semibold hover:underline">complete MBBS in Kyrgyzstan guide</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/10 rounded-full blur-[100px]" />
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Medical Journey at Osh State University Today</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Get official admission letters, streamlined student visa stamps, and dedicated 24/7 post-arrival assistance with WCIEC Delhi. Secure your seats for the 2026-27 batch now!
          </p>
          <button onClick={openModal} className="bg-[#F97316] hover:bg-[#EA580C] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#F97316]/30">
            Get Free Counselling
          </button>
        </div>
      </section>

    </article>
  );
}
