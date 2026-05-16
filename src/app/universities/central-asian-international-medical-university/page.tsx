"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, MapPin, Clock, BookOpen, Globe2, GraduationCap, 
  Download, Phone, MessageCircle, ChevronDown, Trophy, ShieldCheck, 
  Coffee, Bus, Building2, Sparkles, ArrowRight, 
  Microscope, Library, Plane, FileText, HeartPulse, Award, Users, 
  BookMarked, Calendar, CheckSquare, Target, Mail, Activity, Eye,
  Landmark, BookOpenCheck, Stethoscope as StethoscopeIcon, PlayCircle
} from "lucide-react";
import { PromDown } from "@/components/ui/PromDown";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const Breadcrumbs = () => (
  <nav className="flex mb-8 text-sm font-medium text-white/70" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2">
      <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <Link href="/universities" className="hover:text-white transition-colors">Universities</Link>
      </li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <span className="text-white font-semibold">CAIMU</span>
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
        className={`inline-block text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 ${
          light ? "text-[#FACC15] bg-[#FACC15]/10" : "text-[#F97316] bg-[#F97316]/10"
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
    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left">
        <span className="text-lg font-bold text-[#0F172A]" itemProp="name">{question}</span>
        <ChevronDown size={24} className={`text-[#64748B] transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div className="px-6 pb-6 text-[#64748B]" itemProp="text">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import { useApplyModal } from "@/context/ApplyModalContext";

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────

export default function CAIMUDetailPage() {
  const { openModal } = useApplyModal();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-inter overflow-x-hidden selection:bg-[#F97316] selection:text-white">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0F172A] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/Central-Asian-Medical-University.png" alt="CAIMU Campus" fill className="object-cover opacity-20" priority />
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
                <Globe2 size={16} /> MBBS in Kyrgyzstan
              </div>
              <h1 className="text-5xl md:text-[64px] font-bold text-white leading-[1.1] mb-6">
                Central Asian International <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FACC15]">Medical University</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl">
                Study MBBS at CAIMU, Kyrgyzstan with modern medical education, clinical exposure, affordable fees, and international student support.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button onClick={openModal} className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#F97316]/30 flex items-center gap-2">
                  Apply Now <ArrowRight size={20} />
                </button>
                <a 
                  href="/Brouchers/caimu.pdf" 
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
                    { label: "Established", value: "2016", icon: Building2 },
                    { label: "Location", value: "Jalal-Abad, KG", icon: MapPin },
                    { label: "Course", value: "MD / MBBS", icon: BookOpen },
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

      {/* 2️⃣ STICKY QUICK NAVIGATION */}
      <div className="sticky top-[80px] z-40 bg-white/80 backdrop-blur-lg border-b border-[#E2E8F0] shadow-sm hidden md:block">
        <div className="max-w-[1200px] mx-auto px-6 overflow-x-auto no-scrollbar">
          <ul className="flex space-x-8 text-sm font-bold text-[#64748B] whitespace-nowrap py-4">
            {["Overview", "Why CAIMU", "Course", "Facilities", "Student Life", "Gallery", "Apply"].map((tab, i) => (
              <li key={i}>
                <a href={`#${tab.toLowerCase().replace(' ', '-')}`} className="hover:text-[#F97316] transition-colors">{tab}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3️⃣ ABOUT SECTION */}
      <section className="py-24 bg-white" id="overview">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Overview" title="About Central Asian International Medical University" />
              <div className="space-y-6 text-[#64748B] text-lg leading-relaxed">
                <p>
                  CAIMU was established in 2016 and is located in the beautiful city of Jalal-Abad, Kyrgyzstan. The university focuses on delivering quality medical education through a combination of theoretical learning, practical training, extensive clinical exposure, and research-oriented academic development.
                </p>
                <p>
                  It enthusiastically welcomes international students and provides a safe, multicultural learning environment designed to nurture the global medical leaders of tomorrow.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] px-6 py-4 rounded-2xl flex items-center gap-3 shadow-sm">
                  <ShieldCheck size={24} className="text-[#F97316]" />
                  <span className="font-bold text-[#0F172A]">Safe International Environment</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl group">
              <Image src="/images/Central-Asian-Medical-University.png" alt="CAIMU Campus" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ MISSION & VISION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[32px] border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#F97316]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} className="text-[#F97316]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Our Mission</h3>
              <p className="text-[#64748B] leading-relaxed text-lg">
                "To enhance healthcare quality by training skilled, compassionate, and culturally sensitive medical professionals through quality education, hands-on clinical exposure, and ethical medical practice."
              </p>
            </div>
            <div className="bg-[#0F172A] p-10 rounded-[32px] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FACC15]/10 rounded-full blur-3xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Eye size={32} className="text-[#FACC15]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-lg relative z-10">
                "To become a globally recognized medical institution known for academic excellence, innovation, research, and positive healthcare impact across the world."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ WHY STUDY MBBS AT CAIMU */}
      <section className="py-24 bg-white" id="why-caimu">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="The CAIMU Advantage" title="Why Study MBBS at CAIMU" center />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Affordable MBBS Education", icon: Trophy },
              { title: "Ultra Modern Campus", icon: Building2 },
              { title: "Clinical Exposure", icon: StethoscopeIcon },
              { title: "International Faculty", icon: Users },
              { title: "Safe Hostel Facilities", icon: ShieldCheck },
              { title: "FMGE/NExT Coaching", icon: BookOpenCheck },
              { title: "Student Exchange Program", icon: Globe2 },
              { title: "Scholarship Opportunities", icon: Award }
            ].map((feature, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:border-[#F97316]/30 transition-all group text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#F97316] transition-colors">
                  <feature.icon size={32} className="text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] leading-tight">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ MD/MBBS PROGRAM SECTION */}
      <section className="py-24 bg-[#0F172A] text-white" id="course">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Curriculum" title="Doctor of Medicine (MD/MBBS) Program" light />
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                The medical program at CAIMU is designed to provide strong theoretical knowledge and practical clinical training. The first years focus on basic medical sciences and pre-clinical subjects, while later years emphasize clinical subjects, hospital exposure, patient interaction, and practical case-based learning.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Duration", val: "5 Years", icon: Clock },
                  { label: "Medium", val: "100% English", icon: Globe2 },
                  { label: "Curriculum", val: "Intl. Standard", icon: BookOpen },
                  { label: "System", val: "ECTS Based", icon: Activity }
                ].map((info, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                    <info.icon size={24} className="text-[#FACC15]" />
                    <div>
                      <div className="text-xs font-semibold text-white/50 uppercase tracking-wider">{info.label}</div>
                      <div className="font-bold text-white">{info.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden">
               <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200" alt="MD Program" fill className="object-cover" />
               <div className="absolute inset-0 bg-[#F97316]/20 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ FACILITIES SECTION */}
      <section className="py-24 bg-white" id="facilities">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Infrastructure" title="World-Class Facilities" center />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "State-of-the-Art Campus", icon: Landmark, color: "bg-blue-50 text-blue-600" },
              { title: "Modern Laboratories", icon: Microscope, color: "bg-purple-50 text-purple-600" },
              { title: "Medical Library", icon: Library, color: "bg-emerald-50 text-emerald-600" },
              { title: "Native & Intl. Cuisine", icon: Coffee, color: "bg-orange-50 text-orange-600" },
              { title: "Comfortable Hostel", icon: Building2, color: "bg-rose-50 text-rose-600" },
              { title: "Clinical Exposure", icon: HeartPulse, color: "bg-red-50 text-red-600" },
              { title: "Licensing Coaching", icon: Target, color: "bg-indigo-50 text-indigo-600" },
              { title: "Research & Workshops", icon: FileText, color: "bg-teal-50 text-teal-600" }
            ].map((facility, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] p-6 rounded-3xl hover:shadow-lg transition-shadow flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${facility.color}`}>
                  <facility.icon size={32} />
                </div>
                <h4 className="font-bold text-[#0F172A]">{facility.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ STUDENT LIFE & 13️⃣ HOSTEL SECTION */}
      <section className="py-16 bg-[#F8FAFC]" id="student-life">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-[340px] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white">
                <video 
                  src="/images/caimu-gallery/CAIS.mp4" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center animate-pulse">
                    <PlayCircle size={16} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest">Campus Life</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading subtitle="Experience" title="Student Life in Kyrgyzstan" />
              <p className="text-[#64748B] text-base leading-relaxed mb-6 -mt-6">
                Students at CAIMU experience a comfortable and active student life in Kyrgyzstan. The university provides fully furnished hostels, native Indian mess facilities, cultural events, and a highly safe international student environment.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Secure Hostel & Indian Mess", "Cultural Events", "Sports & Activities", "Safe Environment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 bg-white/50 p-2 rounded-xl border border-white/20">
                    <CheckCircle2 className="text-[#F97316] shrink-0" size={18} />
                    <span className="font-semibold text-[#0F172A] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ SCHOLARSHIP & 10️⃣ EXCHANGE & 11️⃣ DELEGATES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-[32px] text-center hover:shadow-xl transition-all">
              <Award size={48} className="text-[#F97316] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Scholarships</h3>
              <p className="text-[#64748B] leading-relaxed">
                CAIMU supports outstanding students through merit-based scholarships and financial assistance to encourage academic excellence without financial pressure.
              </p>
            </div>
            <div className="bg-[#0F172A] border border-[#1E293B] p-8 rounded-[32px] text-center shadow-xl text-white">
              <Globe2 size={48} className="text-[#FACC15] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Student Exchange</h3>
              <p className="text-white/80 leading-relaxed">
                We offer international exchange opportunities allowing students to gain global medical exposure and experience different healthcare systems worldwide.
              </p>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-8 rounded-[32px] text-center hover:shadow-xl transition-all">
              <Users size={48} className="text-[#2563EB] mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Global Delegates</h3>
              <p className="text-[#64748B] leading-relaxed">
                Frequent visits by Indian Ambassadors, international delegates, and global medical experts to foster academic collaborations and global exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

 
      {/* ─── FEE STRUCTURE SECTION ─── */}
      <section className="py-24 bg-white" id="fee-structure">
        <div className="max-w-[1200px] mx-auto px-6">
          <PromDown 
            title="MBBS Fee Structure 2026" 
            subtitle="Affordable Education" 
            defaultOpen={true}
            staticOnMobile={true}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <p className="text-[#64748B] text-sm max-w-xl">
                Comprehensive fee breakdown for international students at CAIMU. All values are in USD unless specified otherwise.
              </p>
              <div className="flex bg-[#F8FAFC] p-1.5 rounded-2xl border border-[#E2E8F0] shadow-sm shrink-0">
                <button onClick={() => setCurrency('INR')} className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${currency === 'INR' ? "bg-[#F97316] text-white shadow-md" : "text-[#64748B]"}`}>INR (₹)</button>
                <button onClick={() => setCurrency('USD')} className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${currency === 'USD' ? "bg-[#F97316] text-white shadow-md" : "text-[#64748B]"}`}>USD ($)</button>
              </div>
            </div>

            <div className="space-y-8">
              {/* 1st Year Package */}
              <div className="bg-[#0F172A] rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/10 rounded-full blur-3xl -mr-20 -mt-20" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2 text-[#FACC15]">
                      <Sparkles size={24} /> First Year Package
                    </h4>
                    <p className="text-white/60 text-sm">Inclusive of Tuition, Hostel, Mess, and Registration</p>
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white">
                    {currency === 'INR' ? "₹5,78,000" : "$6,800"}
                  </div>
                </div>
              </div>

              {/* 2nd - 5th Year Detailed Fees */}
              <div className="overflow-x-auto rounded-[32px] border border-[#E2E8F0] bg-white shadow-sm">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-[#F8FAFC] text-[#0F172A]">
                      <th className="p-6 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Year</th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Tuition</th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Mess</th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Hostel</th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Visa</th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Medical</th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Misc.</th>
                      <th className="p-6 text-[10px] font-bold uppercase tracking-widest bg-[#F97316]/5 border-b border-[#E2E8F0] text-[#F97316]">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {["2nd Year", "3rd Year", "4th Year", "5th Year"].map((year, i) => (
                      <tr key={i} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                        <td className="p-6 font-bold text-[#0F172A]">{year}</td>
                        <td className="p-6 font-medium text-[#64748B]">{currency === 'INR' ? "₹2,72,000" : "$3,200"}</td>
                        <td className="p-6 font-medium text-[#64748B]">{currency === 'INR' ? "₹1,02,000" : "$1,200"}</td>
                        <td className="p-6 font-medium text-[#64748B]">{currency === 'INR' ? "₹51,000" : "$600"}</td>
                        <td className="p-6 font-medium text-[#64748B]">{currency === 'INR' ? "₹21,250" : "$250"}</td>
                        <td className="p-6 font-medium text-[#64748B]">{currency === 'INR' ? "₹8,500" : "$100"}</td>
                        <td className="p-6 font-medium text-[#64748B]">{currency === 'INR' ? "₹12,750" : "$150"}</td>
                        <td className="p-6 font-bold bg-[#F97316]/5 text-[#F97316]">
                          {currency === 'INR' ? "₹4,67,500" : "$5,500"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Notes & Grand Total */}
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="bg-[#FFF7ED] border border-[#FFEDD5] p-6 rounded-3xl">
                  <h5 className="font-bold text-[#9A3412] mb-3 flex items-center gap-2">
                    <CheckCircle2 size={20} /> Important Notes
                  </h5>
                  <ul className="space-y-2 text-[#C2410C] text-sm font-medium">
                    <li>• 1st to 3rd Year Hostel & Mess is COMPULSORY.</li>
                    <li>• Fees are subject to change per university regulations.</li>
                    <li>• Food charges include standard Indian Mess facilities.</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-[#F97316] to-[#FACC15] p-8 rounded-[32px] text-white shadow-xl">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Grand Total Package (5 Years)</div>
                  <div className="text-4xl font-black mb-4">
                    {currency === 'INR' ? "₹24.48 Lakhs" : "$28,800"}*
                  </div>
                  <button onClick={openModal} className="w-full bg-white text-[#F97316] font-bold py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-lg">
                    Apply for Admission 2026
                  </button>
                </div>
              </div>
            </div>
          </PromDown>
        </div>
      </section>

      {/* 13️⃣ FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <PromDown title="Frequently Asked Questions" subtitle="Got Questions?" defaultOpen={false}>
            <div className="space-y-4 mt-6" itemScope itemType="https://schema.org/FAQPage">
              {[
                { q: "Where is Central Asian International Medical University located?", a: "CAIMU is located in Jalal-Abad, Kyrgyzstan." },
                { q: "When was CAIMU established?", a: "CAIMU was established in 2016." },
                { q: "Does CAIMU offer MBBS for international students?", a: "Yes, CAIMU offers MD/MBBS education for local and international students." },
                { q: "Is hostel facility available at CAIMU?", a: "Yes, CAIMU provides safe hostel and mess facilities for students." },
                { q: "Does CAIMU provide FMGE/NExT coaching?", a: "Yes, CAIMU provides coaching support for Indian students preparing for FMGE/NExT." },
                { q: "What is the duration of MBBS at CAIMU?", a: "The MD/MBBS program duration is 5 years." }
              ].map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </PromDown>
        </div>
      </section>

      {/* 14️⃣ & 15️⃣ FINAL CTA & CONTACT SECTION */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden" id="apply">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F97316]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Start Your MBBS Journey at CAIMU, Kyrgyzstan</h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Get complete admission guidance, documentation support, and expert counseling for MBBS admission in Kyrgyzstan.
              </p>
              <div className="space-y-4">
                <h4 className="font-bold text-[#FACC15] uppercase tracking-wider text-sm">Contact Us</h4>
                <div className="flex items-center gap-3 text-white/80"><Phone size={20} className="text-[#F97316]" /> +91 85868 73357, +91 99116 35435</div>
                <div className="flex items-center gap-3 text-white/80"><Mail size={20} className="text-[#F97316]" /> wciecdelhi2025@gmail.com</div>
                <div className="flex items-center gap-3 text-white/80"><Globe2 size={20} className="text-[#F97316]" /> wciecorganization.com/contact-us</div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-2xl">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Request Callback</h3>
              <GlobalApplyForm buttonText="Submit Request" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
