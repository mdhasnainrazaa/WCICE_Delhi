"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, MapPin, Clock, BookOpen, Globe2, GraduationCap, 
  Download, ChevronDown, Trophy, ShieldCheck, 
  Coffee, Building2, ArrowRight, 
  Microscope, Library, Plane, FileText, Award, Users, 
  BookMarked, CheckSquare, PlayCircle, Video, Star, Target
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { PromDown } from "@/components/ui/PromDown";
import { useApplyModal } from "@/context/ApplyModalContext";

// ─── REUSABLE COMPONENTS ──────────────────────────────────────────────────

const Breadcrumbs = () => (
  <nav className="flex mb-8 text-sm font-medium text-[#64748B]" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2">
      <li><Link href="/" className="hover:text-[#0057B8] transition-colors">Home</Link></li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <Link href="/universities" className="hover:text-[#0057B8] transition-colors">Universities</Link>
      </li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <span className="text-[#0057B8] font-semibold">Osh International Medical University</span>
      </li>
    </ol>
  </nav>
);

const SectionHeading = ({ title, subtitle, center = false, light = false }: { title: string; subtitle?: string; center?: boolean; light?: boolean }) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block text-sm font-semibold tracking-wider px-4 py-1.5 rounded-full mb-4 ${
          light ? "text-[#0EA5E9] bg-white/10" : "text-[#0057B8] bg-[#0057B8]/10"
        }`}
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl font-semibold leading-tight ${light ? "text-white" : "text-[#0F172A]"}`}
    >
      {title}
    </motion.h2>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all hover:shadow-md" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left">
        <span className={`text-lg font-medium transition-colors ${isOpen ? "text-[#0057B8]" : "text-[#0F172A]"}`} itemProp="name">{question}</span>
        <ChevronDown size={24} className={`text-[#64748B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className="px-6 pb-6 text-[#64748B] leading-relaxed" itemProp="text">
              <div className="w-full h-px bg-[#E2E8F0] mb-6" />
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function OIMUClient() {
  const { openModal } = useApplyModal();
  const [activeTab, setActiveTab] = useState(0);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <article className="bg-[#F8FAFC] min-h-screen font-inter overflow-x-hidden selection:bg-[#0EA5E9] selection:text-white">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0F172A] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200" alt="Osh International Medical University (OIMU) campus building, Osh, Kyrgyzstan" fill className="object-cover opacity-20" priority sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          {/* Orange Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F97316]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <Breadcrumbs />
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-[#F97316]/20 text-[#FACC15] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#F97316]/30 backdrop-blur-md">
                <Globe2 size={16} /> MD / MBBS in Kyrgyzstan (MD Physician equivalent to MBBS)
              </div>
              <h1 className="text-5xl md:text-[64px] font-bold text-white leading-[1.1] mb-6">
                Osh International <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FACC15]">Medical University</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl">
                Your gateway to a global medical career. Apply for MD / MBBS (MD Physician equivalent to MBBS) at Osh International Medical University, Kyrgyzstan. Get affordable education, FMGE coaching, hostel facilities, and world-class clinical exposure.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button onClick={openModal} className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#F97316]/30 flex items-center gap-2">
                  Apply Now <ArrowRight size={20} />
                </button>
                <a 
                  href="/Brouchers/osh-international-medical-university-brochure.pdf" 
                  download 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2"
                >
                  Download Brochure <Download size={20} />
                </a>
              </div>
            </motion.div>

            {/* Right Side Quick Form or Stats */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FACC15]/20 rounded-full blur-3xl" />
                <h3 className="text-xl font-bold text-white mb-6">Quick Overview</h3>
                <div className="space-y-6">
                  {[
                    { label: "Established", value: "Modern Campus", icon: Building2 },
                    { label: "Location", value: "Osh, KG", icon: MapPin },
                    { label: "Duration", value: "5 Years", icon: Clock },
                    { label: "FMGE Coaching", value: "Available", icon: Target },
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

      {/* 3️⃣ QUICK HIGHLIGHTS STRIP */}
      <section className="relative z-20 -mt-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-[#E2E8F0] p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: MapPin, label: "Location", val: "Osh, Kyrgyzstan", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Clock, label: "Course Duration", val: "5 Years", color: "text-indigo-500", bg: "bg-indigo-50" },
              { icon: Globe2, label: "Medium", val: "100% English", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Building2, label: "Hostel", val: "Available", color: "text-amber-500", bg: "bg-amber-50" },
              { icon: BookOpen, label: "FMGE Coaching", val: "Provided", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: GraduationCap, label: "Degree", val: "MD (MBBS)", color: "text-rose-500", bg: "bg-rose-50" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} className={item.color} />
                </div>
                <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-sm font-bold text-[#0F172A]">{item.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ ABOUT UNIVERSITY SECTION */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-xl border border-gray-100 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
            <div className="relative h-full">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl group border-8 border-gray-50/50">
                 <video 
                   src="/images/oimu-gallery/oshaInternational.mp4" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                 <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center gap-3">
                   <div className="w-10 h-10 bg-[#0EA5E9] rounded-full flex items-center justify-center animate-pulse">
                     <PlayCircle size={20} />
                   </div>
                   <div>
                     <div className="text-xs font-black uppercase tracking-widest">Campus Tour</div>
                     <div className="text-[10px] font-bold opacity-80 text-white/90">Life at OIMU Kyrgyzstan</div>
                   </div>
                 </div>
              </div>
            </div>
            
            <div className="py-4">
              <SectionHeading subtitle="About University" title="About Osh International Medical University" />
              <div className="space-y-4 text-[#64748B] text-base leading-relaxed">
                <p>
                  Osh International Medical University (OIMU) is one of the fastest-growing and highly respected medical institutions in Kyrgyzstan, offering a world-class environment for students pursuing MBBS abroad.
                </p>
                <p>
                  The university provides a comprehensive curriculum that blends theoretical knowledge with extensive clinical practice in affiliated government and private hospitals.
                </p>
                <ul className="space-y-3 mt-6">
                  {[
                    "Approved by WHO, NMC (MCI), FAIMER, and ECFMG.",
                    "Highly qualified international and local medical faculty.",
                    "Focus on practical and clinical skills development.",
                    "Safe, secure, and culturally diverse campus life."
                  ].map((list, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[#0F172A] text-sm">{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 ── RECOGNITION & ACCREDITATIONS ── */}
      <section className="py-16 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <SectionHeading subtitle="Global Recognition" title="Accreditations & Approvals" center />
          <p className="text-[#64748B] max-w-3xl mx-auto mb-12">
            Osh International Medical University is officially recognized by the world's leading medical councils and organizations, ensuring your degree is valid globally.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "NMC", sub: "National Medical Commission (India)" },
              { name: "WHO", sub: "World Health Organization" },
              { name: "FAIMER", sub: "Foundation for Advancement of Int. Medical Education" },
              { name: "WFME", sub: "World Federation for Medical Education" }
            ].map((acc, i) => (
              <div key={i} className="p-6 border border-[#E2E8F0] rounded-3xl bg-[#F8FAFC] hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-[#E2E8F0]">
                  <ShieldCheck size={28} className="text-[#0057B8]" />
                </div>
                <h4 className="font-bold text-lg text-[#0F172A]">{acc.name}</h4>
                <p className="text-xs text-[#64748B] font-semibold mt-2">{acc.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ WHY STUDY MBBS IN KYRGYZSTAN */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Destination Kyrgyzstan" title="Why Study MBBS in Kyrgyzstan" center />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Trophy, title: "Affordable Education", desc: "Low tuition fees and living costs compared to other countries." },
              { icon: Globe2, title: "Globally Recognized", desc: "Degrees recognized by WHO, NMC, ECFMG, and FAIMER." },
              { icon: GraduationCap, title: "Clinical Exposure", desc: "Hands-on practice in multi-specialty government hospitals." },
              { icon: Users, title: "International Environment", desc: "Students from India, Nepal, Pakistan, and other countries." },
              { icon: BookOpen, title: "English Medium", desc: "The entire MBBS course is taught in the English language." },
              { icon: ShieldCheck, title: "Safe Lifestyle", desc: "Kyrgyzstan is highly safe for international students with friendly locals." }
            ].map((card, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl hover:shadow-xl hover:bg-white hover:border-[#0EA5E9]/30 transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#0057B8] transition-all">
                  <card.icon size={28} className="text-[#0057B8] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{card.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7️⃣ MBBS PROGRAM STRUCTURE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Academics" title="MBBS Program Structure" center />
          
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"].map((year, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(i)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all ${activeTab === i ? "bg-[#0057B8] text-white shadow-lg" : "bg-[#F8FAFC] text-[#64748B] hover:bg-gray-100 border border-[#E2E8F0]"}`}
                >
                  {year}
                </button>
              ))}
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-8 border-b border-[#E2E8F0] pb-4">Key Subjects - Year {activeTab + 1}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  ["Human Anatomy", "Histology", "Medical Biology", "Biophysics"],
                  ["Physiology", "Biochemistry", "Microbiology", "Pathology"],
                  ["Pharmacology", "General Surgery", "Internal Medicine", "Radiology"],
                  ["Pediatrics", "Obstetrics & Gynecology", "Neurology", "Psychiatry"],
                  ["Clinical Rotations", "Emergency Medicine", "Infectious Diseases", "Family Medicine"]
                ][activeTab].map((subject, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col items-center text-center hover:border-[#0EA5E9] transition-colors">
                    <BookMarked size={32} className="text-[#0EA5E9] mb-4" />
                    <span className="font-semibold text-[#0F172A]">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ LECTURE & PRACTICAL CLASSES */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Methodology" title="Interactive Lectures & Practical Classes" />
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
                Education at OIMU goes beyond textbooks. Students participate in interactive lectures in smart classrooms and gain extensive hands-on experience in modern laboratories.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Advanced Anatomy Labs", desc: "Equipped with cadavers and 3D anatomical models." },
                  { title: "Smart Classrooms", desc: "Digital boards and modern audio-visual teaching aids." },
                  { title: "Simulation Centers", desc: "Practice procedures on high-fidelity medical mannequins." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                      <Microscope className="text-[#0057B8]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-lg">{item.title}</h4>
                      <p className="text-[#64748B]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-[32px] overflow-hidden shadow-2xl group border-8 border-white">
               <video 
                 src="/images/oimu-gallery/oIu.mp4" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 autoPlay 
                 muted 
                 loop 
                 playsInline
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#0057B8] rounded-full flex items-center justify-center animate-pulse">
                   <PlayCircle size={20} />
                 </div>
                 <div>
                   <div className="text-xs font-black uppercase tracking-widest">Interactive Learning</div>
                   <div className="text-[10px] font-bold opacity-80 text-white/90">Experience Smart Classrooms at OIMU</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ FMGE / NExT COACHING SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0057B8] to-[#0EA5E9]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-bold tracking-wider px-4 py-1.5 rounded-full mb-6 bg-white/20 text-white backdrop-blur-md">
                Licensing Exam Support
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                In-Campus FMGE & NExT Coaching
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                To ensure our Indian students can practice seamlessly in India, OIMU provides integrated coaching for FMGE/NExT by expert Indian medical faculties right from the initial years.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Classes by Top Indian Faculty",
                  "Regular Mock Tests & Analysis",
                  "Extensive Q-Bank Access",
                  "High Passing Percentage"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                    <CheckSquare size={20} className="text-[#F59E0B]" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl text-[#0F172A] relative z-10 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#E2E8F0]">
                  <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center">
                    <Trophy size={32} className="text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Excellent Results</h3>
                    <p className="text-[#64748B]">Consistent performance in FMGE</p>
                  </div>
                </div>
                <div className="space-y-6">
                   <div>
                     <div className="flex justify-between text-sm font-bold mb-2"><span>Anatomy & Physiology</span> <span>95%</span></div>
                     <div className="h-2 bg-gray-100 rounded-full"><div className="h-full bg-[#0057B8] rounded-full w-[95%]" /></div>
                   </div>
                   <div>
                     <div className="flex justify-between text-sm font-bold mb-2"><span>Pathology & Pharmacology</span> <span>88%</span></div>
                     <div className="h-2 bg-gray-100 rounded-full"><div className="h-full bg-[#0EA5E9] rounded-full w-[88%]" /></div>
                   </div>
                   <div>
                     <div className="flex justify-between text-sm font-bold mb-2"><span>Clinical Subjects</span> <span>92%</span></div>
                     <div className="h-2 bg-gray-100 rounded-full"><div className="h-full bg-[#F59E0B] rounded-full w-[92%]" /></div>
                   </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#0F172A] rounded-3xl transform lg:-rotate-3 translate-x-4 translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 CLINICAL TRAINING & HOSPITAL EXPOSURE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Real-world Practice" title="Clinical Training & Hospital Exposure" center />
          <div className="relative mt-16 max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#0057B8]/20 via-[#0EA5E9]/50 to-[#0057B8]/20 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Classroom", desc: "Theoretical base", icon: BookOpen },
                { title: "Simulation Lab", desc: "Phantom practice", icon: Microscope },
                { title: "Clinical Rotation", desc: "Hospital wards", icon: Building2 },
                { title: "Patient Interaction", desc: "Real diagnosis", icon: GraduationCap }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-[#0057B8] shadow-xl flex items-center justify-center mb-6">
                    <step.icon size={32} className="text-[#0057B8]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-1">{step.title}</h4>
                  <p className="text-sm text-[#64748B]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 & 12 ── FACILITIES & HOSTEL COMBINED */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Campus Life" title="Premium Facilities & Indian Hostel" center />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16 mb-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center mb-6">
                <Building2 size={32} className="text-[#0EA5E9]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Safe & Comfortable Hostels</h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Separate, fully furnished hostels for boys and girls with 24/7 security, central heating, Wi-Fi, and laundry facilities to ensure a comfortable stay.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 text-[#0F172A] font-medium"><CheckCircle2 size={20} className="text-[#0EA5E9]" /> 2-3 sharing rooms</li>
                <li className="flex gap-2 text-[#0F172A] font-medium"><CheckCircle2 size={20} className="text-[#0EA5E9]" /> CCTV surveillance</li>
                <li className="flex gap-2 text-[#0F172A] font-medium"><CheckCircle2 size={20} className="text-[#0EA5E9]" /> Attached washrooms</li>
              </ul>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-[#E2E8F0]">
              <div className="w-16 h-16 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center mb-6">
                <Coffee size={32} className="text-[#F59E0B]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0F172A]">Dedicated Indian Mess</h3>
              <p className="text-[#64748B] mb-6 leading-relaxed">
                Feel at home with our Indian mess facility serving nutritious and hygienic vegetarian and non-vegetarian Indian food prepared by Indian chefs.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-2 text-[#0F172A] font-medium"><CheckCircle2 size={20} className="text-[#F59E0B]" /> North & South Indian dishes</li>
                <li className="flex gap-2 text-[#0F172A] font-medium"><CheckCircle2 size={20} className="text-[#F59E0B]" /> 3 meals a day</li>
                <li className="flex gap-2 text-[#0F172A] font-medium"><CheckCircle2 size={20} className="text-[#F59E0B]" /> Special festival meals</li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Modern Library", icon: Library },
              { title: "Sports Complex", icon: Trophy },
              { title: "Research Labs", icon: Microscope },
              { title: "Auditorium", icon: Video }
            ].map((facility, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm flex flex-col items-center text-center hover:border-[#0057B8]/30 transition-all">
                <facility.icon size={28} className="text-[#0057B8] mb-3" />
                <span className="font-semibold text-[#0F172A]">{facility.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 15.5 ── DETAILED FEE STRUCTURE TABLE */}
      <section className="py-24 bg-white" id="fee-structure">
        <div className="max-w-[1200px] mx-auto px-6">
          <PromDown 
            title="MBBS Fee Structure 2026" 
            subtitle="Invest in Your Future" 
            defaultOpen={true}
            staticOnMobile={true}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-[#64748B] text-sm leading-relaxed">Experience world-class medical education at an affordable cost. Our fee structure is transparent with no hidden charges.</p>
              <div className="flex bg-[#F8FAFC] p-1.5 rounded-2xl border border-[#E2E8F0] shadow-sm shrink-0">
                <button 
                  onClick={() => setCurrency('INR')}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${currency === 'INR' ? "bg-[#0057B8] text-white shadow-md" : "text-[#64748B] hover:text-[#0F172A]"}`}
                >
                  INR (₹)
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${currency === 'USD' ? "bg-[#0057B8] text-white shadow-md" : "text-[#64748B] hover:text-[#0F172A]"}`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-sm bg-white mb-8">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#F8FAFC] text-[#0F172A]">
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Academic Year</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Tuition Fee</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Hostel Fee</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Mess Fees</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest bg-[#0057B8]/5 border-b border-[#E2E8F0] text-[#0057B8]">Total ({currency})</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "1st Year", tuition: currency === 'INR' ? "₹5,95,000" : "$7,000", hostel: "Included", mess: "Included", total: currency === 'INR' ? "₹5,95,000" : "$7,000" },
                    { year: "2nd Year", tuition: currency === 'INR' ? "₹2,97,500" : "$3,500", hostel: currency === 'INR' ? "₹51,000" : "$600", mess: currency === 'INR' ? "₹85,000" : "$1,000", total: currency === 'INR' ? "₹4,33,500" : "$5,100" },
                    { year: "3rd Year", tuition: currency === 'INR' ? "₹2,97,500" : "$3,500", hostel: currency === 'INR' ? "₹51,000" : "$600", mess: currency === 'INR' ? "₹85,000" : "$1,000", total: currency === 'INR' ? "₹4,33,500" : "$5,100" },
                    { year: "4th Year", tuition: currency === 'INR' ? "₹2,97,500" : "$3,500", hostel: currency === 'INR' ? "₹51,000" : "$600", mess: currency === 'INR' ? "₹85,000" : "$1,000", total: currency === 'INR' ? "₹4,33,500" : "$5,100" },
                    { year: "5th Year", tuition: currency === 'INR' ? "₹2,97,500" : "$3,500", hostel: currency === 'INR' ? "₹51,000" : "$600", mess: currency === 'INR' ? "₹85,000" : "$1,000", total: currency === 'INR' ? "₹4,33,500" : "$5,100" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors text-xs">
                      <td className="p-4 font-bold text-[#0F172A] whitespace-nowrap uppercase tracking-wider">{row.year}</td>
                      <td className="p-4 font-semibold text-[#64748B]">{row.tuition}</td>
                      <td className="p-4 font-semibold text-[#64748B]">{row.hostel}</td>
                      <td className="p-4 font-semibold text-[#64748B]">{row.mess}</td>
                      <td className={`p-4 font-bold bg-[#0057B8]/5 ${i === 0 ? 'text-[#0EA5E9]' : 'text-[#0057B8]'}`}>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-2xl p-8 text-center shadow-lg relative overflow-hidden text-white">
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-2">Complete 5-Year Program Total</h4>
                <div className="text-4xl font-black mb-4">
                  {currency === 'INR' ? "₹23.29 Lakhs" : "$27,400"}*
                </div>
                <button 
                  onClick={openModal}
                  className="bg-[#F59E0B] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#D97706] transition-all flex items-center justify-center gap-2 mx-auto"
                >
                  Apply for Admission <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </PromDown>
        </div>
      </section>

      {/* 16 & 17 ── ADMISSION PROCESS & DOCUMENTS */}
      <section className="py-24 bg-[#F8FAFC]" id="admission">
        <div className="max-w-[1200px] mx-auto px-6">
          <PromDown title="Admission Process & Documents" subtitle="Step by Step" defaultOpen={true}>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
              {[
                { step: "1", title: "Apply Online", icon: FileText },
                { step: "2", title: "Document Verif.", icon: CheckSquare },
                { step: "3", title: "Admission Letter", icon: Award },
                { step: "4", title: "Visa Processing", icon: ShieldCheck },
                { step: "5", title: "Travel to KG", icon: Plane },
                { step: "6", title: "Start MBBS", icon: GraduationCap },
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-[#E2E8F0] text-center flex flex-col items-center relative z-10">
                  <div className="w-6 h-6 bg-[#0057B8] text-white rounded-full flex items-center justify-center font-bold text-[10px] mb-2 absolute -top-3 shadow-md">{item.step}</div>
                  <item.icon size={24} className="text-[#0EA5E9] mb-2 mt-1" />
                  <h4 className="font-bold text-[#0F172A] text-[10px]">{item.title}</h4>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-[#E2E8F0]">
              <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                <FileText className="text-[#0EA5E9]" /> Required Documents
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "10th Marksheet & Certificate",
                  "12th Marksheet & Certificate",
                  "NEET-UG Scorecard",
                  "Original Passport (min 1-year validity)",
                  "Medical Fitness Certificate",
                  "10 Passport size photographs",
                  "Birth Certificate",
                  "Bank Statement (Sponsor)"
                ].map((doc, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-[#0EA5E9]" />
                    </div>
                    <span className="text-[#0F172A] font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </PromDown>
        </div>
      </section>

      {/* 18 ── FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <PromDown title="Frequently Asked Questions" subtitle="Common Queries" defaultOpen={false}>
            <div className="space-y-4 mt-6" itemScope itemType="https://schema.org/FAQPage">
              {[
                { q: "Is NEET required for MBBS in Kyrgyzstan?", a: "Yes, qualifying the NEET-UG exam is mandatory for Indian students who wish to study MBBS abroad and later practice in India." },
                { q: "Is Osh International Medical University good for Indian students?", a: "Absolutely. OIMU has a large community of Indian students, English-medium curriculum, dedicated Indian food, and integrated FMGE coaching, making it highly suitable." },
                { q: "Is hostel accommodation available?", a: "Yes, the university provides secure, fully furnished hostels for international students with separate blocks for boys and girls." },
                { q: "What is the medium of instruction?", a: "The entire 5-year MBBS course is taught entirely in English by experienced international and local professors." },
                { q: "Is Osh City safe for international students?", a: "Yes, Osh is very safe. The local community is welcoming, and the university campus has 24/7 security and CCTV surveillance." }
              ].map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </PromDown>
        </div>
      </section>

      {/* ── SEO CONTENT SECTION ── */}
      <section className="py-20 bg-white" aria-label="About Osh International Medical University and student life">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose max-w-none space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-black text-[#0F172A] mb-4">Life in Osh: Campus Safety &amp; Indian Student Community at OIMU</h2>
              <p>
                Osh International Medical University is situated in Osh — Kyrgyzstan&apos;s second-largest city and one of the oldest cities in Central Asia. For Indian students, Osh offers a familiar South Asian atmosphere: Hindi is widely understood in student neighbourhoods, Indian restaurants operate year-round, and Bollywood films screen at local cinemas. The city&apos;s climate, while cold in winter, is manageable with the well-heated OIMU hostel facilities which include central heating, geysers, and insulated windows throughout dormitories.
              </p>
              <p>
                Security at Osh International Medical University is a priority. The hostel compound has restricted entry with biometric verification, uniformed guards at the gate around the clock, and an in-residence Indian warden for welfare support. Female students are housed in a separate, warden-supervised wing. OIMU&apos;s relatively smaller batch size (compared to legacy universities) means faculty-student interaction is more personal, and first-year students receive dedicated onboarding support.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#0F172A] mb-4">Step-by-Step Kyrgyzstan Visa Process for OIMU Students</h2>
              <ol className="list-decimal pl-6 space-y-3 text-sm">
                <li><strong>Initial Application</strong> — Share your 10+2 mark sheets, NEET score, and passport with WCIEC. Document review takes 3–5 working days.</li>
                <li><strong>OIMU Admission Offer</strong> — Osh International Medical University issues an official offer letter after document approval (approximately 7–10 days).</li>
                <li><strong>Government Visa Invitation</strong> — OIMU applies to the Kyrgyz Ministry of Education for a visa invitation letter (15–25 days).</li>
                <li><strong>Kyrgyz Embassy Visa Stamping</strong> — Visit the Kyrgyz Embassy in New Delhi. Submit the invitation letter, valid passport (6+ months remaining), recent photographs, and a medical fitness certificate. Visa is issued in 3–5 working days.</li>
                <li><strong>Group Departure &amp; Arrival</strong> — WCIEC organises group travel from Delhi/Mumbai. OIMU and WCIEC representatives meet students at Osh International Airport and provide direct transport to the campus hostel.
                </li>
              </ol>
              <p className="text-sm mt-4">
                Before travelling, all students must understand the <Link href="/nmc-guidelines-for-mbbs-abroad/" className="text-[#2563EB] font-semibold hover:underline">NMC guidelines for MBBS abroad</Link>, which dictate screening exam eligibility and the minimum university standards required for Indian practitioners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#0F172A] mb-4">Why Osh International Medical University? A Practical Comparison</h2>
              <p>
                Founded in 2019, Osh International Medical University (OIMU) is one of the newest medical institutions in Kyrgyzstan. This is actually an advantage: OIMU was designed from inception around the NExT examination syllabus, with a curriculum structure, clinical rotation schedule, and assessment pattern that mirrors what Indian students will face in their licensing exam. Older universities are still adapting — OIMU was built ready.
              </p>
              <p>
                OIMU&apos;s tuition ($4,000/yr) is slightly higher than JASU but reflects the premium facility investment. For a full side-by-side cost comparison, visit our <Link href="/mbbs-fees-abroad/" className="text-[#2563EB] font-semibold hover:underline">MBBS fees abroad guide</Link>. For context on all five WCIEC partner universities in Kyrgyzstan and how to choose between them, read our comprehensive <Link href="/mbbs-in-kyrgyzstan/" className="text-[#2563EB] font-semibold hover:underline">MBBS in Kyrgyzstan guide</Link>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 19 ── FINAL CTA SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#0057B8] rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-5/12 p-12 md:p-16 text-white bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
              <h2 className="text-4xl font-bold mb-6 leading-tight">Start Your Medical Journey Today</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Take the first step towards becoming a successful global doctor. Our expert counselors will guide you through the entire admission and visa process.
              </p>
              
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
                <div className="flex text-[#F59E0B] mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-sm font-medium italic mb-4">"WCIEC made my admission to OIMU so smooth. From visa to hostel settlement, they helped with everything!"</p>
                <div className="text-sm font-bold text-white/80">— Rahul S., 2nd Year Student</div>
              </div>
            </div>
            
            <div className="lg:w-7/12 bg-white p-12 md:p-16">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Request a Callback</h3>
              <GlobalApplyForm buttonText="Get Free Expert Counseling" />
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
