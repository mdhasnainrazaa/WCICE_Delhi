"use client";

import React, { useState } from "react";
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
  ChevronDown, 
  Star, 
  Trophy, 
  ShieldCheck, 
  Stethoscope, 
  Building2, 
  Sparkles,
  ArrowRight,
  Search,
  Target,
  PlayCircle,
  MessageSquare,
  Coffee,
  Bus
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { PromDown } from "@/components/ui/PromDown";
import { useApplyModal } from "@/context/ApplyModalContext";

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

export default function JASUClient() {
  const { openModal } = useApplyModal();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <article className="bg-[#F8FAFC] min-h-screen font-inter">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0F172A] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920" alt="Jalal-Abad State University" fill className="object-cover opacity-20" priority />
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
                Jalal-Abad State <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FACC15]">University (JASU)</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-2xl">
                Study MD / MBBS (MD Physician equivalent to MBBS) at Jalal-Abad State University (JASU), a top-ranked government university in Kyrgyzstan. Start your medical journey with a 30-year legacy of excellence at Jalal-Abad State Medical University.
              </p>

              <div className="flex flex-wrap gap-4 mb-16">
                <button onClick={openModal} className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#F97316]/30 flex items-center gap-2">
                  Apply Now <ArrowRight size={20} />
                </button>
                <a 
                  href="/Brouchers/jalal-abad-state-university-brochure.pdf" 
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
                    { label: "Established", value: "1993", icon: Building2 },
                    { label: "Location", value: "Jalal-Abad, KG", icon: MapPin },
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

      {/* ── 2. QUICK HIGHLIGHTS ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl auto px-6">
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
              <Image src="/images/optimized/jalal-abad-banner.webp" alt="JASU Building" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="600px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
            </div>
            <div>
              <SectionHeading eyebrow="Academic Heritage" title="About Jalal-Abad State University (JASU)" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  Jalal-Abad State University (JASU), also referred to as Jalal-Abad State Medical University, is one of the leading medical universities in Kyrgyzstan established in 1993. The university provides globally recognized MBBS education with modern infrastructure and advanced clinical training. Study MBBS at JASU to experience high patient flow and a dedicated Indian student community.
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
          <PromDown title="MBBS Program Overview" subtitle="Curriculum" defaultOpen={true}>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F172A] text-white">
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest">Parameter</th>
                    <th className="p-4 text-[10px] font-black uppercase tracking-widest">Details</th>
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
                      <td className="p-4 text-xs font-black text-[#2563EB] whitespace-nowrap">{row.p}</td>
                      <td className="p-4 text-xs font-bold text-[#0F172A]">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </PromDown>
        </div>
      </section>

      {/* ── 6. FEE STRUCTURE ── */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden" id="fee-structure">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <PromDown 
            title="Jalal-Abad State University (JASU) - Affordable MBBS Fees" 
            subtitle="Pricing" 
            defaultOpen={true} 
            staticOnMobile={true}
            className="bg-white/5 border-white/10 shadow-none"
            titleClassName="text-white"
            subtitleClassName="text-[#2563EB]"
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <p className="text-white/60 text-sm font-medium">Transparent fee structure with easy installment options.</p>
              <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-md shrink-0">
                <button 
                  onClick={() => setCurrency('INR')}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${currency === 'INR' ? 'bg-[#2563EB] text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                >
                  INR
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${currency === 'USD' ? 'bg-[#2563EB] text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                >
                  USD
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white/10 text-white">
                    <th className="p-4 text-[9px] font-black uppercase tracking-widest border-b border-white/10">Year</th>
                    <th className="p-4 text-[9px] font-black uppercase tracking-widest border-b border-white/10">Tuition Fee</th>
                    <th className="p-4 text-[9px] font-black uppercase tracking-widest border-b border-white/10">Hostel & Mess</th>
                    <th className="p-4 text-[9px] font-black uppercase tracking-widest border-b border-white/10">Visa & Misc</th>
                    <th className="p-4 text-[9px] font-black uppercase tracking-widest bg-[#2563EB] border-b border-white/10">Total ({currency})</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "1st Year", tuition: currency === 'INR' ? "₹2.88L" : "$3,200", hostel: currency === 'INR' ? "₹1.44L" : "$1,600", visa: currency === 'INR' ? "₹2.79L" : "$3,100", total: currency === 'INR' ? "₹7,11,000" : "$7,900" },
                    { year: "2nd-5th Yr", tuition: currency === 'INR' ? "₹2.88L" : "$3,200", hostel: currency === 'INR' ? "₹1.44L" : "$1,600", visa: currency === 'INR' ? "₹1.57L" : "$1,750", total: currency === 'INR' ? "₹5,89,500" : "$6,550" },
                    { year: "6th Year", tuition: currency === 'INR' ? "₹2.70L" : "$3,000", hostel: currency === 'INR' ? "₹54K" : "$600", visa: currency === 'INR' ? "₹76K" : "$850", total: currency === 'INR' ? "₹4,00,500" : "$4,450" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-[10px] font-black text-[#2563EB] uppercase tracking-widest">{row.year}</td>
                      <td className="p-4 text-[10px] font-bold text-white/70">{row.tuition}</td>
                      <td className="p-4 text-[10px] font-bold text-white/70">{row.hostel}</td>
                      <td className="p-4 text-[10px] font-bold text-white/70">{row.visa}</td>
                      <td className={`p-4 text-sm font-black ${i === 0 ? 'text-[#06B6D4]' : 'text-white'}`}>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={`grid gap-8 items-stretch ${currency === 'INR' ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'}`}>
              <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black mb-1 uppercase tracking-widest">Complete Program Total</h3>
                  <div className="text-4xl md:text-5xl font-black mb-6">{currency === 'INR' ? "₹34.69 Lakhs" : "$38,550"}*</div>
                </div>
                <button onClick={openModal} className="bg-white text-[#2563EB] px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-transform w-full">
                  Apply for Admission
                </button>
              </div>

              {currency === 'INR' && (
                <div className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden group flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black mb-1 uppercase tracking-widest text-[#06B6D4]">Alternative Option</h3>
                    <div className="text-4xl md:text-5xl font-black mb-6">₹27.50 Lakhs</div>
                  </div>
                  <div className="text-white/85 font-black uppercase tracking-widest text-xs py-3 border border-white/25 rounded-xl bg-white/10 backdrop-blur-sm w-full">
                    One Time Payment
                  </div>
                </div>
              )}
            </div>
          </PromDown>
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
            <div className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-square rounded-[32px] overflow-hidden shadow-2xl border-8 border-gray-50/50">
               <video 
                 src="/images/jasu-gallery/jalabasState.mp4" 
                 className="w-full h-full object-cover"
                 autoPlay 
                 muted 
                 loop 
                 playsInline
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center animate-pulse">
                   <PlayCircle size={20} />
                 </div>
                 <div>
                   <div className="text-xs font-black uppercase tracking-widest">Campus Tour</div>
                   <div className="text-[10px] font-bold opacity-80 text-white/90">Clinical Exposure at JASU</div>
                 </div>
               </div>
            </div>
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
      <section className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#2563EB] via-[#1d4ed8] to-[#7C3AED] rounded-[40px] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] bg-white/20 px-4 py-1.5 rounded-full mb-6">Financial Support</span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Scholarship support available for deserving students</h2>
              <p className="text-white/80 text-lg mb-8 font-medium">Up to <strong className="text-white text-2xl block md:inline">$75,000</strong> Scholarship Support through Doing Good Charity Foundation.</p>
              <button 
                onClick={openModal}
                className="bg-white text-[#2563EB] px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
              >
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. ADMISSION PROCESS ── */}
      <section className="py-12 bg-[#F8FAFC]" id="admission">
        <div className="max-w-7xl mx-auto px-6">
          <PromDown title="Admission Process 2026" subtitle="Seamless" defaultOpen={false}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-[#2563EB]/10 -translate-y-1/2 hidden md:block" />
              {[
                { step: "01", title: "Apply Online", desc: "Fill the initial form.", icon: MessageSquare },
                { step: "02", title: "Review", desc: "NEET & PCB marks.", icon: Search },
                { step: "03", title: "Offer", desc: "Official offer from JASU.", icon: CheckCircle2 },
                { step: "04", title: "Visa", desc: "Ministry & embassy work.", icon: ShieldCheck },
                { step: "05", title: "Fly", desc: "Fly to Kyrgyzstan.", icon: Bus },
              ].map((s, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm relative z-10 text-center group">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                    <s.icon size={20} />
                  </div>
                  <h4 className="text-[10px] font-black text-[#0F172A] mb-1">{s.title}</h4>
                </div>
              ))}
            </div>
          </PromDown>
        </div>
      </section>

      {/* ── 13. ELIGIBILITY & DOCUMENTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <PromDown title="Eligibility & Documents" subtitle="Requirements" defaultOpen={false}>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-black text-[#0F172A] mb-6">Eligibility Criteria</h3>
                <ul className="space-y-4">
                  {[
                    "10+2 with 50% PCB marks.",
                    "NEET Qualified.",
                    "Valid Passport (6+ months).",
                    "Min 17 years by Dec 31st.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600 font-bold text-xs">
                      <CheckCircle2 size={16} className="text-[#2563EB]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-[#0F172A] text-white">
                <h3 className="text-lg font-black mb-6">Required Documents</h3>
                <ul className="space-y-4">
                  {[
                    "Academic Certificates.",
                    "NEET Scorecard.",
                    "Original Passport.",
                    "10 Photographs.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/60 font-bold text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </PromDown>
        </div>
      </section>

      {/* ── 14. FAQ SECTION ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <PromDown title="Frequently Asked Questions" subtitle="FAQs" defaultOpen={false}>
            <div className="space-y-3 mt-4">
              {[
                { q: "Is Jalal-Abad State University NMC Approved?", a: "Yes, Jalal-Abad State University (JASU) is fully recognized by the National Medical Commission (NMC) and WHO, making the degree valid for practice in India after passing NExT/FMGE." },
                { q: "What are the MBBS fees at Jalal-Abad State University?", a: "The total fee for the entire program is approximately ₹34.69 Lakhs, which covers tuition, hostel, and initial processing." },
                { q: "Is JASU good for Indian students?", a: "Absolutely. JASU is highly recommended for Indian students. It offers a 100% English medium curriculum, a dedicated Indian mess, separate hostels, and special coaching for the FMGE/NExT licensing exam." },
                { q: "How to apply for MBBS at Jalal-Abad State University?", a: "You can apply for MBBS at Jalal-Abad State University through WCIEC Delhi. The process involves submitting your 10+2 marks and NEET scorecard, getting the admission letter, and proceeding with visa processing." },
                { q: "What is the course duration at JASU?", a: "The duration is 5 years of academic study followed by a 1-year mandatory clinical internship (5+1 years)." },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <h4 className="text-sm font-black text-[#2563EB] mb-2">{faq.q}</h4>
                  <p className="text-xs text-gray-600 font-bold">{faq.a}</p>
                </div>
              ))}
            </div>
          </PromDown>
        </div>
      </section>

      {/* ── 15. LEAD GENERATION SECTION ── */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-12 bg-[#2563EB] text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Start Your MBBS Career Now</h2>
              <p className="text-white/70 text-base mb-8 font-medium">Join 1000+ students who have successfully started their medical journey with our expert guidance.</p>
              <div className="space-y-4">
                {[
                  "1000+ Students Counseled",
                  "24/7 Support for Students",
                  "Trusted MBBS Experts",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                    <ShieldCheck size={18} className="text-white" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 p-6 md:p-8 bg-white/50 backdrop-blur-sm">
              <GlobalApplyForm buttonText="Get Free Expert Counseling" compact={true} />
            </div>
          </div>
        </div>
      </section>

    </article>
  );
}
