"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, MapPin, Clock, BookOpen, Globe2, GraduationCap, 
  Download, Phone, MessageCircle, ChevronDown, Trophy, ShieldCheck, 
  Coffee, Bus, Stethoscope, Building2, Sparkles, ArrowRight, 
  Microscope, Library, Plane, FileText, HeartPulse, Award, Users, 
  BookMarked, Calendar, CheckSquare, ArrowUpRight, PlayCircle, Video,
  Star, Brain, Activity, TestTube, Network, Map, Target
} from "lucide-react";
import { PromDown } from "@/components/ui/PromDown";

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
        <span className="text-white font-semibold">Osh State University</span>
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

import { useApplyModal } from "@/context/ApplyModalContext";
// ─── PAGE COMPONENT ───────────────────────────────────────────────────────

export default function OSUDetailPage() {
  const { openModal } = useApplyModal();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-inter overflow-x-hidden selection:bg-[#14B8A6] selection:text-white">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0F172A] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920" alt="Osh State University" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          <Breadcrumbs />
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="flex flex-wrap gap-3 mb-6">
                {["WHO Approved", "NMC Recognized", "WDOMS Listed", "English Medium"].map((badge, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border border-white/20">
                    <CheckCircle2 size={14} className="text-[#14B8A6]" /> {badge}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-[60px] font-bold text-white leading-[1.1] mb-4">
                Osh State University
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-[#14B8A6] mb-6">
                International Medical Faculty
              </h2>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
                Study MBBS in Kyrgyzstan's most prestigious and highly ranked medical university. Join thousands of international students experiencing world-class clinical training and affordable education.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button onClick={openModal} className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#2563EB]/30 flex items-center gap-2">
                  Apply Now <ArrowRight size={20} />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2">
                  Download Brochure <Download size={20} />
                </button>
              </div>
            </motion.div>

            <div className="lg:col-span-5 relative hidden md:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "41,000+", label: "Students", icon: Users },
                  { value: "2,970+", label: "Teachers", icon: GraduationCap },
                  { value: "29", label: "Faculties", icon: BookOpen },
                  { value: "37", label: "Campuses", icon: Building2 },
                ].map((stat, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}
                    key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl hover:bg-white/15 transition-all"
                  >
                    <div className="w-12 h-12 bg-[#14B8A6]/20 rounded-2xl flex items-center justify-center mb-4">
                      <stat.icon size={24} className="text-[#14B8A6]" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm font-medium text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ ABOUT UNIVERSITY SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="University Overview" title="About Osh State University" />
              <div className="space-y-6 text-[#64748B] text-lg leading-relaxed mb-8">
                <p>
                  Osh State University (OSU) is a public medical university in Osh, Kyrgyzstan. Established in 1939, it is one of the oldest, largest, and most highly ranked higher education institutions in the Kyrgyz Republic.
                </p>
                <p>
                  The International Medical Faculty (IMF) was specifically established to provide a high-quality, English-medium MBBS program for international students. OSU has a global reputation for academic excellence, modern infrastructure, and extensive clinical practice opportunities.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2 rounded-xl">
                  <Award size={20} className="text-[#2563EB]" /> <span className="font-semibold text-[#0F172A]">Established 1939</span>
                </div>
                <div className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2 rounded-xl">
                  <Globe2 size={20} className="text-[#14B8A6]" /> <span className="font-semibold text-[#0F172A]">Top Ranked</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1200" alt="University Building" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ WHY CHOOSE OSH STATE UNIVERSITY */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="The OSU Advantage" title="Why Choose Osh State University" center />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
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
                <p className="text-[#64748B] leading-relaxed">{feature.desc}</p>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="aspect-[3/4] rounded-[24px] overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" alt="Students" fill className="object-cover" /></div>
                  <div className="aspect-square rounded-[24px] overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" alt="Lab" fill className="object-cover" /></div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-[24px] overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800" alt="Class" fill className="object-cover" /></div>
                  <div className="aspect-[3/4] rounded-[24px] overflow-hidden relative"><Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800" alt="Hospital" fill className="object-cover" /></div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#2563EB]/20 rounded-full blur-[100px] -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading subtitle="Global Community" title="International Medical Faculty (IMF)" light />
              <p className="text-white/80 text-lg leading-relaxed mb-8">
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
                    <span className="font-semibold text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ GALLERY SECTION */}
      <section className="py-24 bg-white" id="gallery">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Visual Tour" title="University Gallery" center />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800", label: "Campus View" },
              { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800", label: "Main Building" },
              { src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800", label: "Medical Faculty" },
              { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800", label: "Research Center" },
              { src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800", label: "Smart Classroom" },
              { src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800", label: "Advanced Laboratory" },
              { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800", label: "Student Hostel" },
              { src: "https://images.unsplash.com/photo-1523050853063-bd8012fec042?q=80&w=800", label: "Student Life" },
              { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800", label: "Culture & Events" },
              { src: "/images/Osh-State-University.png", label: "Medical Faculty" },
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group aspect-square ${
                  i === 0 || i === 3 ? "md:col-span-2 md:aspect-video" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ AFFILIATED HOSPITALS */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Clinical Practice" title="Affiliated Hospitals & Clinical Exposure" center />
          <p className="text-center text-[#64748B] text-lg max-w-2xl mx-auto mb-16">
            OSU is affiliated with numerous government and private multi-specialty hospitals in Osh city, providing students with unparalleled real-patient interaction and ward rotations.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Osh City Territorial Hospital",
              "Osh Interregional Clinical Hospital",
              "Osh Regional Maternity Hospital",
              "Osh Regional Oncological Center",
              "Osh Center for Infectious Diseases",
              "University Medical Clinic"
            ].map((hospital, i) => (
              <div key={i} className="bg-white border border-[#E2E8F0] p-6 rounded-[20px] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2563EB]/10 rounded-xl flex items-center justify-center shrink-0">
                  <Activity size={24} className="text-[#2563EB]" />
                </div>
                <h4 className="font-bold text-[#0F172A]">{hospital}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ MBBS PROGRAM SECTION */}
      <section className="py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Curriculum" title="General Medicine (MD) Program" />
              <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                The MD (MBBS) program is designed to create globally competent physicians. It is fully taught in English and complies with international medical education standards.
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
                      <div className="font-bold text-[#0F172A]">{info.val}</div>
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
          
          <div className="grid lg:grid-cols-2 gap-12 mt-16">
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
                  <div key={i} className="flex items-center gap-2 text-[#64748B] font-medium p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
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
                  <div key={i} className="flex items-center gap-2 text-[#64748B] font-medium p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
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
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                OSU encourages medical research, clinical trials, and healthcare innovation. The university maintains robust international partnerships, allowing students to participate in exchange programs and medical seminars globally.
              </p>
              <h4 className="text-[#14B8A6] font-bold uppercase tracking-wider text-sm mb-4">Partner Countries</h4>
              <div className="flex flex-wrap gap-4">
                {["Germany", "Turkey", "Russia", "Kazakhstan", "USA"].map((country, i) => (
                  <span key={i} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full font-medium">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-[32px] border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden">
               <Network size={120} className="text-[#2563EB]/30 absolute" />
               <Map size={180} className="text-[#14B8A6]/20" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* 13 ── HOSTEL & FOOD */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Accommodation" title="Hostel & Food Facilities" center />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-[#F8FAFC] p-10 rounded-[32px] border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-shadow">
              <Building2 size={40} className="text-[#2563EB] mb-6" />
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Comfortable Hostels</h3>
              <ul className="space-y-4">
                {["Separate boys & girls blocks", "Fully furnished rooms (2-3 sharing)", "Central heating & 24/7 hot water", "CCTV security & Wi-Fi"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#64748B]">
                    <CheckCircle2 size={20} className="text-[#14B8A6] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] p-10 rounded-[32px] border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-shadow">
              <Coffee size={40} className="text-[#F59E0B] mb-6" />
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Indian Mess</h3>
              <ul className="space-y-4">
                {["Authentic Indian food cooked by Indian chefs", "Vegetarian & Non-Vegetarian options", "3 nutritious meals a day", "Clean and hygienic dining halls"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[#64748B]">
                    <CheckCircle2 size={20} className="text-[#F59E0B] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 16 ── ADMISSION PROCESS */}
      <section className="py-24 bg-[#F8FAFC]" id="admission">
        <div className="max-w-[1200px] mx-auto px-6">
          <PromDown title="Admission Process 2026" subtitle="Timeline" defaultOpen={true}>
            <div className="flex flex-col md:flex-row justify-between relative mt-8 max-w-5xl mx-auto">
              <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-gradient-to-r from-[#2563EB]/20 via-[#2563EB] to-[#2563EB]/20" />
              {[
                { step: "1", title: "Apply Online", desc: "Submit basic details" },
                { step: "2", title: "Documents", desc: "10th, 12th & NEET" },
                { step: "3", title: "Admission Letter", desc: "Official university offer" },
                { step: "4", title: "Visa Processing", desc: "Embassy clearance" },
                { step: "5", title: "Fly to Kyrgyzstan", desc: "Start MBBS journey" },
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
      <section className="py-24 bg-white" id="fee-structure">
        <div className="max-w-[1200px] mx-auto px-6">
          <PromDown title="MBBS Fee Structure 2026" subtitle="Affordable Education" defaultOpen={false}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-[#64748B] text-sm">Detailed fee structure for Indian students. All fees are subject to change based on university regulations.</p>
              <div className="flex bg-[#F8FAFC] p-1.5 rounded-2xl border border-[#E2E8F0] shadow-sm shrink-0">
                <button onClick={() => setCurrency('INR')} className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${currency === 'INR' ? "bg-[#2563EB] text-white shadow-md" : "text-[#64748B]"}`}>INR (₹)</button>
                <button onClick={() => setCurrency('USD')} className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${currency === 'USD' ? "bg-[#2563EB] text-white shadow-md" : "text-[#64748B]"}`}>USD ($)</button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0] bg-white mb-8">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#F8FAFC] text-[#0F172A]">
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Year</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Tuition Fee</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Hostel Fee</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Medical/Visa</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest bg-[#2563EB]/5 border-b border-[#E2E8F0] text-[#2563EB]">Total ({currency})</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "1st Year", tuition: currency === 'INR' ? "₹3,60,000" : "$4,000", hostel: currency === 'INR' ? "₹54,000" : "$600", visa: currency === 'INR' ? "₹90,000" : "$1,000", total: currency === 'INR' ? "₹5,04,000" : "$5,600" },
                    { year: "2nd to 5th Year", tuition: currency === 'INR' ? "₹3,60,000" : "$4,000", hostel: currency === 'INR' ? "₹54,000" : "$600", visa: currency === 'INR' ? "₹18,000" : "$200", total: currency === 'INR' ? "₹4,32,000" : "$4,800" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors">
                      <td className="p-4 text-xs font-bold text-[#0F172A]">{row.year}</td>
                      <td className="p-4 text-xs font-medium text-[#64748B]">{row.tuition}</td>
                      <td className="p-4 text-xs font-medium text-[#64748B]">{row.hostel}</td>
                      <td className="p-4 text-xs font-medium text-[#64748B]">{row.visa}</td>
                      <td className={`p-4 text-sm font-bold bg-[#2563EB]/5 ${i === 0 ? 'text-[#14B8A6]' : 'text-[#2563EB]'}`}>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gradient-to-r from-[#0F172A] to-[#2563EB] rounded-2xl p-8 text-center text-white relative overflow-hidden">
               <div className="relative z-10">
                <h4 className="text-lg font-bold mb-2">5-Year MBBS Package</h4>
                <div className="text-4xl font-black mb-4">
                  {currency === 'INR' ? "₹22.32 Lakhs" : "$24,800"}*
                </div>
                <button onClick={openModal} className="bg-[#14B8A6] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-[#0D9488] transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </PromDown>
        </div>
      </section>

      {/* 18 ── FAQ SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-6">
          <PromDown title="Frequently Asked Questions" subtitle="Questions?" defaultOpen={false}>
            <div className="space-y-4 mt-4" itemScope itemType="https://schema.org/FAQPage">
              {[
                { q: "Is Osh State University NMC approved?", a: "Yes, it is recognized by the National Medical Commission (NMC), WHO, and WDOMS." },
                { q: "What is the medium of instruction?", a: "The entire 5-year MD/MBBS program is taught in 100% English for international students." },
                { q: "Is Indian food available?", a: "Yes, dedicated Indian mess facilities are available on campus providing nutritious veg and non-veg food." }
              ].map((item, i) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                  <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 text-left">
                      <span className="text-sm font-bold text-[#0F172A]" itemProp="name">{item.q}</span>
                      <ChevronDown size={18} className={`text-[#64748B] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <div className="px-4 pb-4 text-xs text-[#64748B]" itemProp="text">{item.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </PromDown>
        </div>
      </section>

      {/* 19 ── FINAL CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#2563EB] rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your MBBS Journey at Osh State University</h2>
              <p className="text-white/80 text-lg mb-10">Get guaranteed admission and end-to-end processing support from expert counselors.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={openModal} className="bg-[#14B8A6] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#0D9488] shadow-lg transition-all">
                  Apply Now
                </button>
                <a href="tel:+918586873357" className="bg-white text-[#2563EB] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 shadow-lg transition-all flex items-center gap-2">
                  <Phone size={20} /> Talk to Counselor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING ACTION BUTTONS */}
      <a href="https://wa.me/918826418950" target="_blank" rel="noreferrer" className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <MessageCircle size={28} />
      </a>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] p-4 z-50 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button onClick={openModal} className="flex-1 bg-[#2563EB] text-white font-bold py-3 rounded-xl shadow-lg">
          Apply Now
        </button>
        <a href="tel:+918586873357" className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#2563EB]">
          <Phone size={20} />
        </a>
      </div>
    </main>
  );
}
