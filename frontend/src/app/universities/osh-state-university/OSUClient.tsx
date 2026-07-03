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
  PlayCircle, Brain, TestTube, Activity, Stethoscope
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
    <main className="bg-[#F8FAFC] min-h-screen font-inter overflow-x-hidden selection:bg-[#14B8A6] selection:text-white">

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
                Start your journey towards a global medical career at Osh State University, the oldest and top-ranked public university in the Kyrgyz Republic. Get world-class clinical training, separate hostel facilities, and high FMGE pass rates under expert guidance.
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

      {/* 2️⃣ ABOUT UNIVERSITY SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <SectionHeading subtitle="University Overview" title="About Osh State University" />
              
              {/* GEO Answer-first box */}
              <div className="p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-8">
                <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
                  Osh State University is Kyrgyzstan&apos;s oldest and most prestigious public medical university, established in 1939. Located in the historic city of Osh, it offers a world-class, 5-year English-medium MBBS (MD Physician) program recognized by the NMC, WHO, and global bodies, hosting over 3,000 active Indian medical aspirants.
                </p>
              </div>

              <div className="space-y-6 text-[#64748B] text-base leading-relaxed mb-8">
                <p>
                  Osh State University (OSU) is a public medical university in Osh, Kyrgyzstan. Established in 1939, it is one of the oldest, largest, and most highly ranked higher education institutions in the Kyrgyz Republic. It has built a reputation for excellence by producing highly skilled medical practitioners who serve in healthcare organizations worldwide.
                </p>
                <p>
                  The International Medical Faculty (IMF) was specifically established to provide a high-quality, English-medium <Link href="/mbbs-abroad" className="text-[#2563EB] hover:underline font-semibold">MBBS Abroad</Link> program for international students. Osh State University has a global reputation for academic excellence, modern infrastructure, and extensive clinical practice opportunities.
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

      {/* 2.1 RECOGNITION, NMC & WHO SECTION */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Recognition */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <SectionHeading id="recognition" title="Recognition" subtitle="Accreditation" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                Osh State University is recognized by major medical authorities worldwide, including the Ministry of Education and Science of Kyrgyzstan, the Ministry of Health, and international councils. This global recognition ensures that the MD degree awarded is valid for practicing medicine globally after satisfying licensing requirements.
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                The university holds official accreditation certificate status, allowing its students to obtain license approvals globally and pursue higher education anywhere in the world.
              </p>
            </div>

            {/* NMC Approval */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <SectionHeading id="nmc-approval" title="NMC Approval" subtitle="Regulatory Compliance" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                Osh State University is an NMC-approved medical university in Kyrgyzstan. The 5-year curriculum complies fully with all National Medical Commission guidelines, including the mandatory 54-month academic course duration and clinical internship, allowing Indian students to sit for the FMGE/NExT licensing exams.
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Indian students can study safe in the knowledge that Nile Education Consultancy assists with all post-admission registrations in line with current <Link href="/nmc-guidelines-for-mbbs-abroad" className="text-[#2563EB] hover:underline font-semibold">NMC Guidelines</Link>.
              </p>
            </div>

            {/* WHO Recognition */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <SectionHeading id="who-recognition" title="WHO Recognition" subtitle="Global Listing" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                Osh State University is listed in the World Directory of Medical Schools (WDOMS) and is recognized by the World Health Organization (WHO), the Educational Commission for Foreign Medical Graduates (ECFMG) of the USA, and the General Medical Council (GMC) of the UK, offering graduates global career opportunities.
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Graduates are certified to sit for international tests such as USMLE, PLAB, and other licensing examinations globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ WHY CHOOSE OSH STATE UNIVERSITY */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="The OSU Advantage" title="Why Choose Osh State University" center />
          
          {/* GEO Answer-first box */}
          <div className="max-w-3xl mx-auto p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-12 text-center">
            <p className="text-sm font-bold text-[#0F172A] leading-relaxed text-left">
              Indian students choose Osh State University for its government-backed high-quality education, 100% English-medium instruction, and highly affordable MBBS fees. The university boasts advanced diagnostic laboratories, extensive clinical practice at local hospitals, comfortable hostels, and dedicated FMGE coaching, ensuring excellent results in medical licensing exams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Affordable MBBS Fees", desc: "High-quality medical education at a fraction of the cost compared to private Indian colleges.", icon: Trophy },
              { title: "100% English Medium", desc: "The entire curriculum is taught in English by experienced international professors.", icon: BookOpen },
              { title: "Advanced Labs", desc: "Equipped with state-of-the-art simulation centers and modern medical equipment.", icon: Microscope },
              { title: "Modern Hospitals", desc: "Affiliated with top government and private hospitals for extensive clinical rotations.", icon: Building2 },
              { title: "FMGE / NExT Coaching", desc: "In-campus coaching provided by Indian faculties to ensure high licensing exam pass rates.", icon: Target },
              { title: "Safe Environment", desc: "A highly secure campus and city with a massive international student community.", icon: ShieldCheck }
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

      {/* 4️⃣ INTERNATIONAL MEDICAL FACULTY SECTION */}
      <section className="py-24 bg-[#0F172A] text-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group border-8 border-white/10 backdrop-blur-sm">
                 <video 
                   src="/images/osu-gallery/oshStateUniversity.mp4" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                 <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white flex items-center gap-4">
                   <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[#F97316]/30">
                     <PlayCircle size={24} />
                   </div>
                   <div>
                     <div className="text-xs font-black uppercase tracking-[0.2em] text-[#FACC15] mb-1">Campus Life</div>
                     <div className="text-sm font-bold opacity-90">International Medical Faculty Tour</div>
                   </div>
                 </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2563EB]/20 rounded-full blur-[100px] -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading subtitle="Global Community" title="International Medical Faculty (IMF)" light />
              
              <div className="p-5 bg-white/5 border-l-4 border-[#14B8A6] rounded-r-2xl mb-8">
                <p className="text-sm font-semibold text-white/90 leading-relaxed">
                  The International Medical Faculty of Osh State University acts as the primary hub for foreign medical students. It houses state-of-the-art diagnostic labs, digital libraries, and smart lecture theaters specifically optimized for English-medium MBBS program training.
                </p>
              </div>

              <p className="text-white/80 text-base leading-relaxed mb-8">
                The International Medical Faculty hosts students from over 20+ countries, including India, Pakistan, Nepal, and the Middle East. It focuses on patient-centered training, research-based learning, and cultural exchange.
              </p>
              <div className="space-y-6">
                {[
                  "Students from 20+ countries",
                  "Practical medical education",
                  "Research-based learning",
                  "International learning environment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <div className="w-10 h-10 bg-[#14B8A6]/20 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 size={20} className="text-[#14B8A6]" />
                    </div>
                    <span className="font-semibold text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ CAMPUS AND CLINICAL EXPOSURE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Campus and Infrastructure */}
            <div className="bg-white border border-[#E2E8F0] p-10 rounded-[32px] shadow-sm">
              <SectionHeading id="campus" title="Campus & Infrastructure" subtitle="Learning Environment" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                The Osh State University campus features modern academic buildings, high-tech simulation centers, advanced anatomical departments, and digital library facilities. It offers a vibrant educational environment designed to foster academic excellence, medical research, and student safety, making it a premier destination for international education.
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                It features state-of-the-art campus infrastructure with well-equipped halls, athletic fields, and research centers to support students throughout their academic tenure.
              </p>
            </div>

            {/* Clinical Exposure */}
            <div className="bg-white border border-[#E2E8F0] p-10 rounded-[32px] shadow-sm">
              <SectionHeading id="clinical-exposure" title="Clinical Exposure" subtitle="Practical Rotations" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                Clinical exposure at Osh State University is highly hands-on, starting from the third year of study. The medical faculty is affiliated with 6+ major government and private hospitals in Osh, providing students with direct access to patient care, diagnostics, surgeries, and real-world medical case studies.
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Students interact directly with local patients under direct clinical supervision of senior doctors and professors to learn clinical procedures and build diagnostic competence.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <h4 className="text-lg font-bold text-[#0F172A] mb-8">Affiliated Hospitals & Clinical Base</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Osh City Territorial Hospital",
                "Osh Interregional Clinical Hospital",
                "Osh Regional Maternity Hospital",
                "Osh Regional Oncological Center",
                "Osh Center for Infectious Diseases",
                "University Medical Clinic"
              ].map((hospital, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] p-6 rounded-[20px] shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center shrink-0">
                    <Activity size={24} className="text-[#2563EB]" />
                  </div>
                  <h5 className="font-bold text-sm text-[#0F172A] text-left">{hospital}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ MBBS PROGRAM SECTION */}
      <section className="py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Curriculum" title="General Medicine (MD) Program" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                The General Medicine (MD) program curriculum at Osh State University matches international standards. Spanning 5 academic years, it is equivalent to the MBBS course structure in India, utilizing modern ECTS credit grading system for simple credit transfer.
              </div>

              <p className="text-[#64748B] text-base leading-relaxed mb-8">
                The MD (MBBS) program is designed to create globally competent physicians. It is fully taught in English and complies with international medical education standards, fulfilling the requirements for various overseas licensures.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Duration", val: "5 Years", icon: Clock },
                  { label: "Medium", val: "100% English", icon: Globe2 },
                  { label: "Eligibility", val: "50% PCB + NEET", icon: CheckCircle2 },
                  { label: "Degree", val: "MD (Eq. to MBBS)", icon: GraduationCap }
                ].map((info, i) => (
                  <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <info.icon size={20} className="text-[#14B8A6]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">{info.label}</div>
                      <div className="font-bold text-sm text-[#0F172A]">{info.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0F172A] p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#2563EB]/40 rounded-full blur-3xl" />
               <h3 className="text-2xl font-bold mb-6 relative z-10">Program Structure</h3>
               <div className="space-y-4 relative z-10">
                 <div className="flex justify-between items-center border-b border-white/10 pb-4">
                   <span className="font-medium text-white/80">Basic Medical Sciences</span>
                   <span className="bg-white/10 px-3 py-1 rounded-lg text-sm font-bold text-[#14B8A6]">Years 1-2</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-white/10 pb-4">
                   <span className="font-medium text-white/80">Pre-Clinical & Clinical Studies</span>
                   <span className="bg-white/10 px-3 py-1 rounded-lg text-sm font-bold text-[#14B8A6]">Years 3-4</span>
                 </div>
                 <div className="flex justify-between items-center pb-2">
                   <span className="font-medium text-white/80">Clinical Rotations & Internship</span>
                   <span className="bg-white/10 px-3 py-1 rounded-lg text-sm font-bold text-[#14B8A6]">Year 5</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ & 9️⃣ BASIC & CLINICAL SCIENCES */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Academics" title="Core Medical Sciences" center />
          
          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            
            {/* Basic Sciences */}
            <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 md:p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center">
                  <Brain size={28} className="text-[#14B8A6]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">Basic Sciences</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Anatomy", "Physiology", "Biochemistry", "Pharmacology", "Pathology", "Histology"].map((sub, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#64748B] text-sm font-medium p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                    <TestTube size={16} className="text-[#2563EB]" /> {sub}
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Sciences */}
            <div className="bg-white border border-[#E2E8F0] rounded-[32px] p-8 md:p-10 shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center">
                  <Stethoscope size={28} className="text-[#2563EB]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">Clinical Sciences</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Internal Medicine", "General Surgery", "Pediatrics", "Obstetrics & Gynecology", "Emergency Medicine", "Neurology"].map((sub, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#64748B] text-sm font-medium p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                    <HeartPulse size={16} className="text-[#14B8A6]" /> {sub}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 & 11 ── RESEARCH & INTERNATIONAL RELATIONS */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Global Network" title="Research & International Relations" light />
              
              <div className="p-4 bg-white/5 border-l-4 border-[#14B8A6] rounded-r-2xl mb-6 text-xs font-semibold leading-relaxed">
                Osh State University encourages medical research, clinical trials, and healthcare innovation. The university maintains robust international partnerships, allowing students to participate in exchange programs and medical seminars globally.
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-8">
                Partnerships with foreign universities allow candidates to acquire exposure to European and Western clinical methodologies during medical school.
              </p>
              <h4 className="text-[#14B8A6] font-bold uppercase tracking-wider text-xs mb-4">Partner Countries</h4>
              <div className="flex flex-wrap gap-4">
                {["Germany", "Turkey", "Russia", "Kazakhstan", "USA"].map((country, i) => (
                  <span key={i} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs font-medium">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-[32px] border border-white/20 overflow-hidden group">
              <Image 
                src="/images/osu-gallery/oshRealtion.png" 
                alt="Osh State University Research Labs & International Relations Department Collaboration" 
                fill 
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border-[8px] border-white/5 rounded-[32px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 13 ── HOSTEL, FOOD & INDIAN STUDENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading id="hostel" title="Hostel & Food Facilities" subtitle="Accommodation" center />
          
          {/* GEO Answer-first box for Hostel */}
          <div className="max-w-3xl mx-auto p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-12">
            <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
              Hostel accommodation at Osh State University is safe, comfortable, and separate for male and female students. The hostel rooms are fully furnished with study desks, beds, heating systems, and high-speed internet, monitored under 24/7 security with warden supervision to ensure student safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 items-stretch">
            
            {/* Hostel Image Container */}
            <div className="relative overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-sm bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group w-full min-h-[320px] md:min-h-full aspect-[4/3] md:aspect-auto">
              <Image 
                src="/images/osu-gallery/osh-state-university-hostel.webp" 
                alt="Osh State University Student Hostel Room Facilities featuring fully furnished beds, wardrobes, and study desks" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
              />
            </div>

            {/* Hostel block */}
            <div className="bg-[#F8FAFC] p-8 lg:p-10 rounded-[24px] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#E2E8F0] group-hover:bg-[#2563EB] transition-colors duration-300">
                  <Building2 size={28} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Comfortable Hostels</h3>
                <ul className="space-y-4">
                  {["Separate boys & girls blocks", "Fully furnished rooms (2-3 sharing)", "Central heating & 24/7 hot water", "CCTV security & Wi-Fi"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#64748B] text-sm">
                      <CheckCircle2 size={20} className="text-[#14B8A6] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Indian Mess & Food block */}
            <div className="bg-[#F8FAFC] p-8 lg:p-10 rounded-[24px] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group md:col-span-2 lg:col-span-1">
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#E2E8F0] group-hover:bg-[#F59E0B] transition-colors duration-300">
                  <Coffee size={28} className="text-[#F59E0B] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Indian Mess</h3>
                <ul className="space-y-4">
                  {["Authentic Indian food cooked by Indian chefs", "Vegetarian & Non-Vegetarian options", "3 nutritious meals a day", "Clean and hygienic dining halls"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#64748B] text-sm">
                      <CheckCircle2 size={20} className="text-[#F59E0B] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Indian Students Section */}
          <div id="indian-students" className="mt-16 bg-[#2563EB]/5 p-10 rounded-[32px] border border-[#2563EB]/10">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Indian Students at Osh State University</h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-4">
              Osh State University is a highly popular choice for Indian students, currently hosting over 3,000 aspirants from India. The university provides comfortable separate hostels, authentic Indian food prepared by Indian chefs in on-campus mess halls, and comprehensive FMGE/NExT exam preparation taught by experienced Indian faculty.
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Counselors at Nile Education Consultancy coordinate pre-departure and post-arrival arrangements, ensuring a seamless experience for parents and candidates as they settle into their medical school program.
            </p>
          </div>
        </div>
      </section>

      {/* 14 ── ADVANTAGES, SCHOLARSHIPS & STUDENT LIFE */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Advantages */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm">
              <SectionHeading id="advantages" title="Advantages" subtitle="Why OSU" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                The primary advantages of studying MBBS at Osh State University include government university status, low cost of living, 100% English-medium curriculum, and global degree validity. Furthermore, students gain from state-of-the-art infrastructure, hands-on clinical rotations, safe hostels, and personalized licensing exam preparation, making it a premier educational choice.
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                These factors combined make Kyrgyzstan a highly competitive destination to pursue a medical license.
              </p>
            </div>

            {/* Scholarships */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm">
              <SectionHeading id="scholarships" title="Scholarships" subtitle="Financial Support" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                Scholarships at Osh State University are available to students demonstrating academic excellence and outstanding extracurricular involvement. The university offers merit-based fee concessions and grants that help subsidize tuition costs, helping talented international students complete their medical education with reduced financial burden.
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Interested candidates should apply early through Nile Education Consultancy to determine eligibility criteria for university grants.
              </p>
            </div>

            {/* Student Life */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm">
              <SectionHeading id="student-life" title="Student Life" subtitle="Beyond Academics" />
              
              <div className="p-4 bg-slate-50 rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed">
                Student life at Osh State University is culturally rich and active, featuring sports meets, cultural festivals, medical seminars, and international conferences. The university supports numerous student clubs and societies, allowing international students to enjoy a vibrant community experience while pursuing high-level academic goals.
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Indian festivals such as Diwali and Holi are celebrated annually, fostering a warm, close-knit home environment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 16 ── ADMISSION PROCESS, ELIGIBILITY & DOCUMENTS */}
      <section className="py-24 bg-white" id="admission">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading title="Admission Process & Eligibility 2026" subtitle="Admission Guidance" center />
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12 text-left">
            {/* Eligibility block */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4" id="eligibility">Eligibility Criteria</h3>
              <div className="p-4 bg-white rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed border border-[#E2E8F0]">
                To meet the eligibility criteria for MBBS at Osh State University, Indian applicants must be at least 17 years old by December 31st of the admission year. They must have scored a minimum of 50% in Physics, Chemistry, and Biology (PCB) in 12th grade and qualified NEET.
              </div>
              <ul className="text-xs text-[#64748B] space-y-2 mt-4">
                <li>• Minimum 50% marks in PCB (40% for SC/ST/OBC).</li>
                <li>• Valid NEET Score card verification status.</li>
                <li>• Student age must be at least 17 years.</li>
              </ul>
            </div>

            {/* Admission Process block */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Admission Process Step-by-Step</h3>
              <div className="p-4 bg-white rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed border border-[#E2E8F0]">
                The admission process for studying MBBS at Osh State University is streamlined and direct. Aspirants apply online through Nile Education Consultancy, submit transcripts for eligibility checks, receive their official university admission letter, process the visa invitation through the ministry, and obtain their student visa.
              </div>
              <p className="text-xs text-[#64748B]">
                Consultants at Nile Education guide candidates through every aspect of the processing to prevent errors.
              </p>
            </div>

            {/* Documents Required block */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0F172A] mb-4" id="documents-required">Documents Required</h3>
              <div className="p-4 bg-white rounded-xl mb-4 text-xs font-semibold text-[#0F172A] leading-relaxed border border-[#E2E8F0]">
                The documents required for MBBS admission at Osh State University include: 10th and 12th grade passing certificates/marksheets, a valid passport (minimum 2 years validity), a qualified NEET scorecard, passport-sized photographs with white background, a medical fitness certificate, and a negative HIV/COVID report.
              </div>
              <p className="text-xs text-[#64748B]">
                All files must be submitted as clear scans during the preliminary verification process.
              </p>
            </div>
          </div>

          <PromDown title="Admission Roadmap Timeline" subtitle="Process Overview" defaultOpen={true}>
            <div className="flex flex-col md:flex-row justify-between relative mt-8 max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-gradient-to-r from-[#2563EB]/20 via-[#2563EB] to-[#2563EB]/20" />
              {[
                { step: "1", title: "Apply Online", desc: "Submit basic details & transcripts" },
                { step: "2", title: "Verify eligibility", desc: "10th, 12th & NEET check" },
                { step: "3", title: "Admission Letter", desc: "Official university offer issued" },
                { step: "4", title: "Visa Processing", desc: "Ministry clearance & stamping" },
                { step: "5", title: "Fly to Kyrgyzstan", desc: "Departure orientation and class start" },
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center mb-8 md:mb-0 w-full md:w-40">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-[#F8FAFC] shadow-xl rounded-full flex items-center justify-center text-xl md:text-2xl font-black text-[#2563EB] mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-[#0F172A] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-[#64748B]">{item.desc}</p>
                </div>
              ))}
            </div>
          </PromDown>
        </div>
      </section>

      {/* 17 ── FEE STRUCTURE SECTION */}
      <section className="py-24 bg-[#F8FAFC]" id="fee-structure">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading title="MBBS Fees 2026" subtitle="Fee Breakdown" center />
          
          {/* GEO Answer-first box for Fees */}
          <div className="max-w-3xl mx-auto p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-12">
            <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
              The tuition fee structure at Osh State University for the 2026 intake is highly affordable, totaling $24,899 (approx. ₹21.16 Lakhs) for the entire 5-year MD/MBBS program. This includes $6,899 for the first year (covering tuition and registration) and $4,500 annually for the second to fifth years.
            </p>
          </div>

          <PromDown 
            title="Tuition Fees, Hostel & Mess Charges" 
            subtitle="Affordable Packages" 
            defaultOpen={true}
            staticOnMobile={true}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <p className="text-[#64748B] text-sm max-w-xl">Comprehensive fee breakdown for Indian students. All values are in USD unless specified otherwise.</p>
              <div className="flex bg-[#F8FAFC] p-1.5 rounded-2xl border border-[#E2E8F0] shadow-sm shrink-0">
                <button onClick={() => setCurrency('INR')} className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${currency === 'INR' ? "bg-[#2563EB] text-white shadow-md" : "text-[#64748B]"}`}>INR (₹)</button>
                <button onClick={() => setCurrency('USD')} className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${currency === 'USD' ? "bg-[#2563EB] text-white shadow-md" : "text-[#64748B]"}`}>USD ($)</button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
                  <GraduationCap size={20} className="text-[#2563EB]" /> Fees Structure 2026
                </h4>
                <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#F8FAFC] text-[#0F172A]">
                        <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Period</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Fee Amount</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-[#E2E8F0]">
                        <td className="p-4 font-semibold text-[#0F172A]">1st Year</td>
                        <td className="p-4 font-bold text-[#2563EB]">{currency === 'INR' ? "₹5,86,415" : "$6,899"}</td>
                      </tr>
                      <tr className="border-b border-[#E2E8F0]">
                        <td className="p-4 font-semibold text-[#0F172A]">2nd - 5th Year</td>
                        <td className="p-4 font-bold text-[#2563EB]">{currency === 'INR' ? "₹3,82,500" : "$4,500"} <span className="text-[10px] text-[#64748B] font-medium">/Year</span></td>
                      </tr>
                      <tr className="border-b border-[#E2E8F0]">
                        <td className="p-4 font-semibold text-[#0F172A]">Internship</td>
                        <td className="p-4 font-medium text-[#64748B]">According to Gov. Norms</td>
                      </tr>
                      <tr className="bg-[#F8FAFC]">
                        <td className="p-4 font-black text-[#0F172A]">Grand Total (Tuition)</td>
                        <td className="p-4 font-black text-[#14B8A6] text-lg">{currency === 'INR' ? "₹21,16,415" : "$24,899"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accommodation & Food */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-[#0F172A] flex items-center gap-2">
                  <Coffee size={20} className="text-[#F59E0B]" /> Accommodation & Food
                </h4>
                <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#F8FAFC] text-[#0F172A]">
                        <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Service</th>
                        <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Fee Amount</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="p-4 font-semibold text-[#0F172A]">Hostel & Mess (Per Year)</td>
                        <td className="p-4 font-bold text-[#F59E0B]">{currency === 'INR' ? "₹1,36,000" : "$1,600"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] mt-4">
                   <h5 className="font-bold text-[#0F172A] mb-2 flex items-center gap-2">
                     <ShieldCheck size={16} className="text-[#14B8A6]" /> One Time Charges (Process Costs)
                   </h5>
                   <div className="space-y-2">
                      {[
                        { label: "Admission Letter", val: "$200" },
                        { label: "Documentation", val: "$300" },
                        { label: "Invitation & Visa", val: "$500" },
                        { label: "Air Ticket", val: "$400" },
                        { label: "Airport Pickup & Misc.", val: "$200" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between text-xs py-1 border-b border-gray-100 last:border-0">
                          <span className="text-[#64748B] font-medium">{item.label}</span>
                          <span className="text-[#0F172A] font-bold">{currency === 'INR' ? `₹${parseInt(item.val.replace('$','')) * 85}` : item.val}</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-sm pt-2 font-black text-[#14B8A6]">
                        <span>Grand Total (One Time)</span>
                        <span>{currency === 'INR' ? "₹1,36,000" : "$1,600"}</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/20 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Sparkles size={24} className="text-[#F59E0B]" /> Additional Fees
                  </h4>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl inline-block">
                    <div className="text-sm text-white/60 font-bold uppercase tracking-widest mb-1">Consultancy Fees</div>
                    <div className="text-3xl font-black text-[#14B8A6]">₹1,50,000/- <span className="text-sm font-medium text-white/40 italic">INR</span></div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-sm text-white/60 font-bold uppercase tracking-widest mb-2">Total Estimated Package (5 Years)</div>
                  <div className="text-4xl md:text-5xl font-black mb-6 text-white">
                    {currency === 'INR' ? "₹29.32 Lakhs" : "$34,499"}*
                  </div>
                  <button onClick={openModal} className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#2563EB]/20">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </PromDown>
        </div>
      </section>

      {/* 18 ── FAQ SECTION */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading id="faq-heading" title="Frequently Asked Questions" subtitle="Questions & Answers" center />
          
          {/* GEO Answer-first box for FAQ */}
          <div className="p-6 bg-[#2563EB]/5 border-l-4 border-[#2563EB] rounded-r-2xl mb-8">
            <p className="text-sm font-bold text-[#0F172A] leading-relaxed">
              Find quick, authoritative answers to the most common questions regarding Osh State University&apos;s MBBS program, fees structure, eligibility criteria, hostel living conditions, and NMC guidelines, designed to help Indian medical students plan their admission process successfully.
            </p>
          </div>

          <PromDown title="Frequently Asked Questions Accordion" subtitle="Details" defaultOpen={true}>
            <div className="space-y-4 mt-6" itemScope itemType="https://schema.org/FAQPage">
              {[
                { 
                  q: "Is Osh State University NMC approved?", 
                  a: "Yes, Osh State University is recognized by the National Medical Commission (NMC) of India, WHO, and WDOMS. Graduates are eligible to appear for the FMGE and NExT exams." 
                },
                { 
                  q: "What are Osh State University MBBS fees?", 
                  a: "The total tuition fee is $24,899 for 5 years. This includes $6,899 for the 1st year and $4,500 per year for the 2nd to 5th years. Hostel and food cost $1,600 per year." 
                },
                { 
                  q: "Is Osh State University good for Indian students?", 
                  a: "Yes, it is excellent. It offers 100% English medium courses, separate hostels, Indian food, FMGE coaching, and a large, supportive community of over 3,000 Indian students." 
                },
                { 
                  q: "Can Indian students study here?", 
                  a: "Yes, Indian students who have qualified NEET can study at Osh State University. The admission process is straightforward through Nile Education Consultancy." 
                },
                { 
                  q: "Is NEET compulsory?", 
                  a: "Yes, NEET qualification is compulsory for all Indian students planning to study MBBS at Osh State University if they wish to practice in India after graduation." 
                },
                { 
                  q: "What is the FMGE eligibility?", 
                  a: "Graduates holding an MD degree from Osh State University are fully eligible to sit for the FMGE / NExT exam in India, provided they meet NMC's study duration and syllabus requirements." 
                },
                { 
                  q: "What is the eligibility criteria for Osh State University MBBS?", 
                  a: "Candidates must have completed 12th grade with at least 50% aggregate in Physics, Chemistry, and Biology (PCB) for General category (40% for SC/ST/OBC) and must be NEET-qualified." 
                },
                { 
                  q: "What is the admission process for Osh State University?", 
                  a: "The process involves: submitting 10th/12th marksheets, passport, and NEET scorecard; receiving an admission letter; visa invitation processing; visa stamping; and departure." 
                },
                { 
                  q: "What documents are required for admission?", 
                  a: "You need your 10th and 12th passing certificates, passport, NEET scorecard, passport-size photographs, and a medical health fitness certificate." 
                },
                { 
                  q: "Is Osh State University ranking high?", 
                  a: "Yes, Osh State University is ranked among the top public medical universities in Kyrgyzstan and is highly respected globally for its academic quality and clinical exposure." 
                },
                { 
                  q: "What are the hostel facilities at Osh State University?", 
                  a: "The university provides comfortable, separate hostels for boys and girls. Facilities include fully furnished rooms, central heating, high-speed Wi-Fi, 24/7 security, and laundry." 
                },
                { 
                  q: "Is Indian food available at the Osh State University hostel?", 
                  a: "Yes, the campus has dedicated Indian mess halls serving vegetarian and non-vegetarian Indian meals prepared by professional Indian cooks." 
                },
                { 
                  q: "What is the duration of MBBS at Osh State University?", 
                  a: "The MD program (equivalent to MBBS) is a 5-year course, satisfying the NMC's requirement of a minimum 54-month course duration for foreign medical graduates." 
                },
                { 
                  q: "Does the university offer scholarships for Indian students?", 
                  a: "The fee is already highly subsidized by the government, but outstanding students can apply for merit-based scholarships during their studies." 
                },
                { 
                  q: "What clinical exposure does Osh State University provide?", 
                  a: "Students receive hands-on training at top state and private affiliated hospitals in Osh city, working with local patients under the guidance of senior doctors." 
                }
              ].map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </PromDown>
        </div>
      </section>

      {/* 19 ── FINAL CTA SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#2563EB] rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your MBBS Journey at Osh State University</h2>
              <p className="text-white/80 text-lg mb-10">Get guaranteed admission and end-to-end processing support from the authorized representative, Nile Education Consultancy.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={openModal} className="bg-[#14B8A6] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0D9488] shadow-lg transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
