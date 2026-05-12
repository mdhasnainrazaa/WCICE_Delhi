"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  MapPin, 
  Clock, 
  BookOpen, 
  Globe2, 
  GraduationCap, 
  Download, 
  Phone, 
  MessageCircle, 
  MessageSquare,
  ChevronDown, 
  ChevronUp, 
  Star, 
  Trophy, 
  Users, 
  ShieldCheck, 
  Heart, 
  Coffee, 
  Bus, 
  Music, 
  Stethoscope, 
  Building2, 
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
  Briefcase,
  Search,
  Zap,
  Target
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const Breadcrumbs = () => (
  <nav className="flex mb-8 text-sm font-medium tracking-wide text-white/60" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2">
      <li>
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
      </li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <Link href="/universities" className="hover:text-white transition-colors">Universities</Link>
      </li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <span className="text-[#2563EB] font-bold">Jalal-Abad State University</span>
      </li>
    </ol>
  </nav>
);

const SectionHeading = ({ eyebrow, title, center = false, light = false }: { eyebrow: string; title: string; center?: boolean; light?: boolean }) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`inline-block text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-4 ${
        light ? "text-white/80 bg-white/10" : "text-[#2563EB] bg-[#2563EB]/10"
      }`}
    >
      {eyebrow}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-black leading-tight ${light ? "text-white" : "text-[#0F172A]"} font-inter`}
    >
      {title}
    </motion.h2>
  </div>
);

import { useApplyModal } from "@/context/ApplyModalContext";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-4 transition-all duration-300 rounded-[24px] overflow-hidden ${isOpen ? 'bg-[#2563EB]/5 border-[#2563EB]/10' : 'bg-white border-transparent shadow-sm hover:shadow-md'} border`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 md:p-8 text-left group">
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#2563EB]' : 'text-[#0F172A]'} group-hover:text-[#2563EB]`}>{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#2563EB] text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-6 md:px-8 pb-8">
              <div className="w-full h-px bg-gray-100 mb-6" />
              <p className="text-gray-600 leading-relaxed font-medium">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

export default function JASUDetailPage() {
  const { openModal } = useApplyModal();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-inter">

      {/* ── 1. HERO SECTION ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0F172A]">
        {/* Animated Particles & Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
          <Breadcrumbs />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Zap size={14} className="text-[#06B6D4]" />
                Top-Ranked Government University
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
                Study MBBS at <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">Jalal-Abad</span> <br />
                State University
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
                Globally Recognized MBBS Program in Kyrgyzstan for Indian & International Students. Start your medical journey with a 30-year legacy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  "NMC & WHO Approved",
                  "English Medium MBBS",
                  "Affordable Fees",
                  "FMGE/NExT Support",
                  "Indian Hostel & Mess",
                  "1 Year Internship Included",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80 font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-[#2563EB]/20 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-[#2563EB]" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={openModal}
                  className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-10 py-5 rounded-[20px] font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3"
                >
                  Apply Now <ArrowRight size={18} />
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-[20px] font-black text-sm uppercase tracking-widest transition-all flex items-center gap-3">
                  Download Brochure <Download size={18} />
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl">
                    <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800" alt="Students" fill className="object-cover" sizes="300px" />
                  </div>
                  <div className="relative aspect-square rounded-[24px] overflow-hidden shadow-2xl">
                    <Image src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800" alt="Lab" fill className="object-cover" sizes="300px" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-[24px] overflow-hidden shadow-2xl">
                    <Image src="/images/Jalal-Abad-banner.png" alt="University" fill className="object-cover" sizes="300px" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden shadow-2xl">
                    <Image src="https://images.unsplash.com/photo-1523050853063-bd8012fec042?q=80&w=800" alt="Hostel" fill className="object-cover" sizes="300px" />
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white/95 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl border border-white/20 hidden md:block"
              >
                <div className="text-3xl font-black text-[#2563EB]">450+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">FMGE Achievers</div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 bg-[#7C3AED] p-6 rounded-[24px] shadow-2xl border border-white/10 hidden md:block"
              >
                <div className="text-2xl font-black text-white">₹34.69L</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/60">Total Fees</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK HIGHLIGHTS ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Fast Facts" title="University Overview" center />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: "Established", val: "1993", icon: Clock },
              { label: "Duration", val: "6 Years", icon: GraduationCap },
              { label: "Medium", val: "English", icon: Globe2 },
              { label: "Recognition", val: "WHO/NMC", icon: ShieldCheck },
              { label: "Total Fees", val: "₹34.69 Lakhs", icon: Trophy },
              { label: "Location", val: "Kyrgyzstan", icon: MapPin },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-100 p-6 rounded-[24px] text-center transition-all hover:bg-white hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mx-auto mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</div>
                <div className="text-sm font-black text-[#0F172A]">{item.val}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT UNIVERSITY ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl group">
              <Image src="/images/Jalal-Abad-banner.png" alt="JASU Building" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="600px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
            </div>
            <div>
              <SectionHeading eyebrow="Academic Heritage" title="About Jalal-Abad State University" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  Jalal-Abad State University (JASU), named after B. Osmonov, is one of the leading medical universities in Kyrgyzstan established in 1993. The university provides globally recognized MBBS education with modern infrastructure and advanced clinical training.
                </p>
                <div className="grid sm:grid-cols-2 gap-8 mt-12">
                  <div className="p-6 bg-white rounded-[24px] shadow-sm border border-gray-100">
                    <Target className="text-[#2563EB] mb-4" size={32} />
                    <h4 className="font-black text-[#0F172A] mb-2 uppercase tracking-widest text-xs">Our Mission</h4>
                    <p className="text-sm">To provide world-class medical education that creates compassionate global doctors.</p>
                  </div>
                  <div className="p-6 bg-white rounded-[24px] shadow-sm border border-gray-100">
                    <Sparkles className="text-[#7C3AED] mb-4" size={32} />
                    <h4 className="font-black text-[#0F172A] mb-2 uppercase tracking-widest text-xs">Our Vision</h4>
                    <p className="text-sm">Becoming a center of excellence in medical research and healthcare education.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE JASU ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Advantages" title="Why Choose JASU Kyrgyzstan?" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Globally Recognized", desc: "WHO, NMC, & ECFMG approved degree valid worldwide.", icon: Globe2, color: "blue" },
              { title: "Affordable MBBS", desc: "Low tuition fees and affordable living costs for students.", icon: Trophy, color: "indigo" },
              { title: "English Medium", desc: "Complete course taught in English for international ease.", icon: BookOpen, color: "purple" },
              { title: "Clinical Exposure", desc: "High patient flow in affiliated government hospitals.", icon: Stethoscope, color: "rose" },
              { title: "Infrastructure", desc: "Modern labs, smart classrooms, and simulation centers.", icon: Building2, color: "cyan" },
              { title: "Indian Food", desc: "Dedicated Indian mess with regional cuisines available.", icon: Coffee, color: "amber" },
              { title: "FMGE Coaching", desc: "Special classes by Indian experts for licensing exams.", icon: GraduationCap, color: "emerald" },
              { title: "Safe Environment", desc: "24/7 campus security and supportive student community.", icon: ShieldCheck, color: "blue" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-[#F8FAFC] rounded-[24px] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:border-transparent group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                  item.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  item.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                  item.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                  item.color === 'rose' ? 'bg-rose-50 text-rose-600' :
                  item.color === 'cyan' ? 'bg-cyan-50 text-cyan-600' :
                  item.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                  'bg-emerald-50 text-emerald-600'
                }`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-[#0F172A] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MBBS PROGRAM DETAILS ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Curriculum" title="MBBS Program Overview" center />
          <div className="overflow-x-auto rounded-[24px] shadow-xl border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="p-6 text-xs font-black uppercase tracking-widest">Parameter</th>
                  <th className="p-6 text-xs font-black uppercase tracking-widest">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { p: "Course Name", d: "Bachelor of Medicine & Bachelor of Surgery (MBBS / MD)" },
                  { p: "Duration", d: "5 Years + 1 Year Internship" },
                  { p: "Eligibility", d: "10+2 with 50% PCB & NEET Qualification" },
                  { p: "Medium", d: "100% English Medium" },
                  { p: "Internship", d: "Included in Government Hospitals" },
                  { p: "Intake", d: "September (Major) & February" },
                  { p: "Recognition", d: "NMC, WHO, FAIMER, ECFMG" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="p-6 text-sm font-black text-[#2563EB] whitespace-nowrap">{row.p}</td>
                    <td className="p-6 text-sm font-bold text-[#0F172A]">{row.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 6. FEE STRUCTURE ── */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <SectionHeading eyebrow="Pricing" title="Affordable MBBS Fee Structure" light />
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md mb-12">
              <button 
                onClick={() => setCurrency('INR')}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${currency === 'INR' ? 'bg-[#2563EB] text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
              >
                INR View
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${currency === 'USD' ? 'bg-[#2563EB] text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
              >
                USD View
              </button>
            </div>
          </div>

          {/* Modern Fee Table */}
          <div className="overflow-x-auto rounded-[32px] border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/10 text-white">
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Academic Year</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Tuition Fee</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Hostel & Mess</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Visa & Medical</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Miscellaneous</th>
                  <th className="p-6 text-[10px] font-black uppercase tracking-widest bg-[#2563EB] border-b border-white/10">Total ({currency})</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { 
                    year: "1st Year", 
                    tuition: currency === 'INR' ? "₹2.88L" : "$3,200", 
                    hostel: currency === 'INR' ? "₹1.44L" : "$1,600", 
                    visa: currency === 'INR' ? "₹1.35L" : "$1,500", 
                    misc: currency === 'INR' ? "₹1.44L" : "$1,600", 
                    total: currency === 'INR' ? "₹7,11,000" : "$7,900" 
                  },
                  { 
                    year: "2nd Year", 
                    tuition: currency === 'INR' ? "₹2.88L" : "$3,200", 
                    hostel: currency === 'INR' ? "₹1.44L" : "$1,600", 
                    visa: currency === 'INR' ? "₹45K" : "$500", 
                    misc: currency === 'INR' ? "₹1.12L" : "$1,250", 
                    total: currency === 'INR' ? "₹5,89,500" : "$6,550" 
                  },
                  { 
                    year: "3rd Year", 
                    tuition: currency === 'INR' ? "₹2.88L" : "$3,200", 
                    hostel: currency === 'INR' ? "₹1.44L" : "$1,600", 
                    visa: currency === 'INR' ? "₹45K" : "$500", 
                    misc: currency === 'INR' ? "₹1.12L" : "$1,250", 
                    total: currency === 'INR' ? "₹5,89,500" : "$6,550" 
                  },
                  { 
                    year: "4th Year", 
                    tuition: currency === 'INR' ? "₹2.88L" : "$3,200", 
                    hostel: currency === 'INR' ? "₹1.44L" : "$1,600", 
                    visa: currency === 'INR' ? "₹45K" : "$500", 
                    misc: currency === 'INR' ? "₹1.12L" : "$1,250", 
                    total: currency === 'INR' ? "₹5,89,500" : "$6,550" 
                  },
                  { 
                    year: "5th Year", 
                    tuition: currency === 'INR' ? "₹2.88L" : "$3,200", 
                    hostel: currency === 'INR' ? "₹1.44L" : "$1,600", 
                    visa: currency === 'INR' ? "₹45K" : "$500", 
                    misc: currency === 'INR' ? "₹1.12L" : "$1,250", 
                    total: currency === 'INR' ? "₹5,89,500" : "$6,550" 
                  },
                  { 
                    year: "6th (Internship)", 
                    tuition: currency === 'INR' ? "₹2.70L" : "$3,000", 
                    hostel: currency === 'INR' ? "₹54K" : "$600", 
                    visa: currency === 'INR' ? "₹0" : "$0", 
                    misc: currency === 'INR' ? "₹76K" : "$850", 
                    total: currency === 'INR' ? "₹4,00,500" : "$4,450" 
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-6 text-sm font-black text-[#2563EB] whitespace-nowrap uppercase tracking-widest">{row.year}</td>
                    <td className="p-6 text-sm font-bold text-white/70">{row.tuition}</td>
                    <td className="p-6 text-sm font-bold text-white/70">{row.hostel}</td>
                    <td className="p-6 text-sm font-bold text-white/70">{row.visa}</td>
                    <td className="p-6 text-sm font-bold text-white/70">{row.misc}</td>
                    <td className={`p-6 text-lg font-black ${i === 0 ? 'text-[#06B6D4]' : 'text-white'}`}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Highlight */}
          <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-[32px] p-12 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-2 uppercase tracking-widest">Complete MBBS Program Total</h3>
              <div className="text-6xl md:text-8xl font-black mb-8">{currency === 'INR' ? "₹34.69 Lakhs" : "$38,550"}*</div>
              <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-10">Calculated at 1 USD = ₹90 | *Terms & Conditions Apply</p>
              <button 
                onClick={openModal}
                className="bg-white text-[#2563EB] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
              >
                Book Free Counseling
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FACULTY & CLINICAL EXPOSURE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading eyebrow="Practical Knowledge" title="Faculty & Clinical Exposure" />
              <div className="space-y-8">
                <p className="text-gray-600 text-lg font-medium leading-relaxed">
                  JASU emphasizes practical clinical training from the very first year. Students gain hands-on experience in government hospitals under the guidance of expert faculty members.
                </p>
                <div className="space-y-6">
                  {[
                    { label: "Expert Indian & Global Faculty", val: 95 },
                    { label: "Clinical Rotation Experience", val: 90 },
                    { label: "Hospital Practice Hours", val: 85 },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-black text-[#0F172A] uppercase tracking-widest">{stat.label}</span>
                        <span className="text-sm font-black text-[#2563EB]">{stat.val}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
               <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl mt-12">
                  <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" alt="Clinical" fill className="object-cover" sizes="300px" />
               </div>
               <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800" alt="Hospital" fill className="object-cover" sizes="300px" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CAMPUS FACILITIES ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Infrastructure" title="Campus Facilities" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Smart Classrooms", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800" },
              { title: "Simulation Labs", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800" },
              { title: "Digital Library", img: "https://images.unsplash.com/photo-1507733108139-47000e48962a?q=80&w=800" },
              { title: "Student Hostel", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800" },
              { title: "Indian Mess", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800" },
              { title: "Sports Complex", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800" },
              { title: "WiFi Campus", img: "https://images.unsplash.com/photo-1526733169359-ab8171d49abb?q=80&w=800" },
              { title: "Research Labs", img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800" },
            ].map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-[24px] overflow-hidden group shadow-lg"
              >
                <Image src={f.img} alt={f.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="300px" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white font-black text-xs uppercase tracking-widest">{f.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. STUDENT LIFE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Experience" title="Student Life at JASU" center />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { h: "aspect-[4/3]", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800", label: "Cultural Events" },
              { h: "aspect-[3/4]", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800", label: "International Community" },
              { h: "aspect-square", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800", label: "Friendships" },
              { h: "aspect-[3/4]", img: "https://images.unsplash.com/photo-1523050853063-bd8012fec042?q=80&w=800", label: "Graduation" },
              { h: "aspect-[4/3]", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800", label: "Study Groups" },
              { h: "aspect-square", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800", label: "Sports" },
            ].map((item, i) => (
              <motion.div key={i} className={`relative rounded-[24px] overflow-hidden shadow-xl group ${item.h}`}>
                <Image src={item.img} alt={item.label} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="400px" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="text-white font-black uppercase tracking-widest text-xs">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FMGE ACHIEVEMENTS ── */}
      <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-white/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <SectionHeading eyebrow="Success Stories" title="450+ Successful Doctors in 2025" light center />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              { val: "92%", label: "FMGE Passing Rate" },
              { val: "1000+", label: "Indian Alumni" },
              { val: "50+", label: "Hospital Tie-ups" },
              { val: "30+", label: "Years Excellence" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-[24px] border border-white/10 backdrop-blur-sm">
                <div className="text-4xl font-black text-[#2563EB] mb-2">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. SCHOLARSHIP ── */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#2563EB] via-[#1d4ed8] to-[#7C3AED] rounded-[40px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block text-xs font-black uppercase tracking-[0.3em] bg-white/20 px-4 py-2 rounded-full mb-8">Financial Support</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Scholarship support available for deserving students</h2>
              <p className="text-white/80 text-xl mb-12 font-medium">Up to <strong className="text-white text-3xl block md:inline">$75,000</strong> Scholarship Support through Doing Good Charity Foundation.</p>
              <button 
                onClick={openModal}
                className="bg-white text-[#2563EB] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
              >
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. ADMISSION PROCESS ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Seamless" title="Admission Process 2026" center />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16 relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#2563EB]/10 -translate-y-1/2 hidden md:block" />
            {[
              { step: "01", title: "Apply Online", desc: "Fill the initial form & submit docs.", icon: MessageSquare },
              { step: "02", title: "Document Review", desc: "Our team verifies your NEET & PCB marks.", icon: Search },
              { step: "03", title: "Admission Letter", desc: "Receive the official offer from JASU.", icon: CheckCircle2 },
              { step: "04", title: "Visa Processing", desc: "We handle your ministry & embassy work.", icon: ShieldCheck },
              { step: "05", title: "Fly to Kyrgyzstan", desc: "Start your journey as a medical student.", icon: Bus },
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative z-10 text-center group hover:border-[#2563EB] transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <s.icon size={28} />
                </div>
                <div className="text-[10px] font-black text-gray-300 mb-2">{s.step}</div>
                <h4 className="text-base font-black text-[#0F172A] mb-3">{s.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-bold">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. ELIGIBILITY & DOCUMENTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 rounded-[40px] bg-gray-50 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <Target size={120} className="text-gray-100" />
              </div>
              <h3 className="text-3xl font-black text-[#0F172A] mb-10 relative z-10">Eligibility Criteria</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "10+2 with 50% PCB marks (40% for Reserved).",
                  "NEET Qualified (Compulsory for Indians).",
                  "Valid Passport with 6+ months validity.",
                  "Minimum age 17 years by Dec 31st.",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-600 font-bold text-sm">
                    <CheckCircle2 size={20} className="text-[#2563EB] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 rounded-[40px] bg-[#0F172A] text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8">
                <Briefcase size={120} className="text-white/5" />
              </div>
              <h3 className="text-3xl font-black mb-10 relative z-10">Required Documents</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "10th & 12th Academic Certificates.",
                  "NEET-UG Result Scorecard.",
                  "Original Indian Passport.",
                  "10 Passport-size Photographs.",
                  "Medical Fitness Certificate.",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/60 font-bold text-sm">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. FAQ SECTION ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading eyebrow="FAQs" title="Common Questions" center />
          <div className="mt-16">
            {[
              { q: "Is JASU NMC approved?", a: "Yes, Jalal-Abad State University is fully recognized by the National Medical Commission (NMC) and WHO, making the degree valid for practice in India after passing NExT/FMGE." },
              { q: "What is the total MBBS fees?", a: "The total fee for the entire 6-year program is approximately ₹34.69 Lakhs, which covers tuition, hostel, and initial processing." },
              { q: "Is Indian food available?", a: "Yes, the university has a dedicated Indian mess on campus serving North and South Indian food prepared by Indian chefs." },
              { q: "Is NEET required?", a: "Yes, qualifying NEET-UG is mandatory for all Indian students who wish to study MBBS abroad and later practice in India." },
              { q: "What is the course duration?", a: "The duration is 5 years of academic study followed by a 1-year mandatory clinical internship (5+1 years)." },
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. LEAD GENERATION SECTION ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 bg-[#2563EB] text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Start Your MBBS Career Now</h2>
              <p className="text-white/70 text-lg mb-12 font-medium">Join 1000+ students who have successfully started their medical journey with our expert guidance.</p>
              <div className="space-y-6">
                {[
                  "1000+ Students Counseled",
                  "24/7 Support for Students",
                  "Trusted MBBS Experts",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                    <ShieldCheck size={24} className="text-white" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-20">
                 <Link href="https://wa.me/918826418950" className="inline-flex items-center gap-3 bg-white text-[#2563EB] px-8 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl">
                   <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                   </svg>
                   <span>Chat with Experts</span>
                 </Link>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-12 bg-white/50 backdrop-blur-sm">
              <GlobalApplyForm buttonText="Get Free Expert Counseling" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 16. STICKY BOTTOM CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
         <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-4 flex gap-3 shadow-2xl">
            <button 
              onClick={openModal}
              className="flex-1 bg-[#2563EB] text-white font-black text-xs uppercase tracking-widest py-4 rounded-2xl shadow-lg"
            >
              Apply Now
            </button>
            <a href="tel:+918826418950" className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
               <Phone size={24} />
            </a>
         </div>
      </div>
    </main>
  );
}
