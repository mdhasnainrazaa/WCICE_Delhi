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
  Minus
} from "lucide-react";

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const Breadcrumbs = () => (
  <nav className="flex mb-8 text-sm font-bold uppercase tracking-widest" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2">
      <li>
        <Link href="/" className="text-gray-400 hover:text-[#1a4db8] transition-colors">Home</Link>
      </li>
      <li className="flex items-center space-x-2">
        <span className="text-gray-300">/</span>
        <Link href="/universities" className="text-gray-400 hover:text-[#1a4db8] transition-colors">Universities</Link>
      </li>
      <li className="flex items-center space-x-2">
        <span className="text-gray-300">/</span>
        <span className="text-[#1a4db8]">Jalal-Abad International University</span>
      </li>
    </ol>
  </nav>
);

const SectionHeading = ({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#e2a613] bg-[#e2a613]/10 px-3 py-1 rounded-full mb-4">
      {eyebrow}
    </span>
    <h2 className="text-3xl md:text-5xl font-black text-[#0B1F33] leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
      {title}
    </h2>
  </div>
);

const FeeTable = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const formatINR = (val: number) => {
    if (!mounted) return `₹${val}`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const years = [
    {
      year: "First Year",
      tuition: "First Year Package",
      mess: "Included",
      hostel: "Included",
      visa: "Included",
      medical: "Included",
      totalUSD: 6900,
      totalINR: 621000
    },
    {
      year: "Second Year",
      tuition: 3600,
      mess: 1200,
      hostel: 600,
      visa: 200,
      medical: 50,
      totalUSD: 5650,
      totalINR: 508500
    },
    {
      year: "Third Year",
      tuition: 3600,
      mess: 1200,
      hostel: 600,
      visa: 200,
      medical: 50,
      totalUSD: 5650,
      totalINR: 508500
    },
    {
      year: "Fourth Year",
      tuition: 3600,
      mess: 1200,
      hostel: 600,
      visa: 200,
      medical: 50,
      totalUSD: 5650,
      totalINR: 508500
    },
    {
      year: "Fifth Year",
      tuition: 3600,
      mess: 1200,
      hostel: 600,
      visa: 200,
      medical: 50,
      totalUSD: 5650,
      totalINR: 508500
    },
    {
      year: "Sixth Year",
      tuition: 1800,
      mess: 1200,
      hostel: 600,
      visa: 200,
      medical: 50,
      totalUSD: 3850,
      totalINR: 346500
    }
  ];

  return (
    <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#0B1F33] text-white">
            <th className="p-4 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Year</th>
            <th className="p-4 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Tuition Fee</th>
            <th className="p-4 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Mess Fee</th>
            <th className="p-4 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Hostel Fee</th>
            <th className="p-4 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Visa Fee</th>
            <th className="p-4 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Medical</th>
            <th className="p-4 text-[10px] font-black uppercase tracking-widest border-b border-white/10">Total USD</th>
            <th className="p-4 text-[10px] font-black uppercase tracking-widest bg-[#1a4db8] border-b border-white/10">Total INR</th>
          </tr>
        </thead>
        <tbody>
          {years.map((y, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
              <td className="p-4 text-xs font-black text-white whitespace-nowrap">{y.year}</td>
              <td className="p-4 text-xs text-white/70 font-bold">{typeof y.tuition === 'number' ? `$${y.tuition}` : y.tuition}</td>
              <td className="p-4 text-xs text-white/70 font-bold">{typeof y.mess === 'number' ? `$${y.mess}` : y.mess}</td>
              <td className="p-4 text-xs text-white/70 font-bold">{typeof y.hostel === 'number' ? `$${y.hostel}` : y.hostel}</td>
              <td className="p-4 text-xs text-white/70 font-bold">{typeof y.visa === 'number' ? `$${y.visa}` : y.visa}</td>
              <td className="p-4 text-xs text-white/70 font-bold">{typeof y.medical === 'number' ? `$${y.medical}` : y.medical}</td>
              <td className="p-4 text-sm text-[#e2a613] font-black">${y.totalUSD}</td>
              <td className="p-4 bg-[#1a4db8]/10 text-sm font-black text-[#60a5fa]">{formatINR(y.totalINR)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-4 transition-all duration-300 rounded-[2rem] overflow-hidden ${isOpen ? 'bg-[#1a4db8]/5 border-[#1a4db8]/10' : 'bg-white border-transparent shadow-sm hover:shadow-md'} border`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors group"
      >
        <span className={`text-lg font-black transition-colors ${isOpen ? 'text-[#1a4db8]' : 'text-[#0B1F33]'} group-hover:text-[#1a4db8]`}>{question}</span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#1a4db8] text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
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

// ─── MODAL COMPONENT ─────────────────────────────────────────────────────────

const ApplyModal = ({ isOpen, onClose, universityName }: { isOpen: boolean; onClose: () => void; universityName: string }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B1F33]/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-[2.5rem] w-full max-w-lg overflow-hidden shadow-2xl"
          >
            <div className="bg-[#1a4db8] p-8 text-white relative">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Minus className="rotate-45" />
              </button>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-2">Admission 2026</div>
              <h3 className="text-2xl font-black">Apply for {universityName}</h3>
            </div>
            
            <form className="p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#1a4db8] outline-none transition-all font-bold text-[#0B1F33]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input type="tel" placeholder="+91" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#1a4db8] outline-none transition-all font-bold text-[#0B1F33]" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" placeholder="example@gmail.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#1a4db8] outline-none transition-all font-bold text-[#0B1F33]" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Current City</label>
                <input type="text" placeholder="Where are you from?" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#1a4db8] outline-none transition-all font-bold text-[#0B1F33]" />
              </div>
              
              <div className="pt-4">
                <button className="w-full bg-[#e2a613] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-[#e2a613]/20 hover:scale-[1.02] transition-all">
                  Submit Application
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-4 font-bold">By clicking submit, you agree to our privacy policy and terms.</p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

export default function UniversityDetailPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        universityName="JAIU Kyrgyzstan"
      />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0B1F33]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a4db8]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0B1F33] to-transparent" />
          <div className="absolute inset-0 opacity-[0.05]"
               style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full py-20">
          <Breadcrumbs />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Sparkles size={14} className="text-[#e2a613]" />
                Top Choice for Indian Students
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6" style={{ fontFamily: "'Sora', sans-serif" }}>
                Jalal-Abad <br />
                <span className="text-[#e2a613]">International</span> <br />
                University
              </h1>
              <p className="text-white/70 text-base md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
                Study MBBS in Kyrgyzstan with affordable fees, English-medium education, modern infrastructure, and dedicated FMGE/NExT preparation.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-12">
                {[
                  { label: "Program", val: "MBBS / MD", icon: GraduationCap },
                  { label: "Duration", val: "5 + 1 Years", icon: Clock },
                  { label: "Total Fees", val: "$33,350", icon: Trophy },
                  { label: "Country", val: "Kyrgyz Republic", icon: Globe2 },
                  { label: "Medium", val: "English", icon: BookOpen },
                  { label: "Approx INR", val: "₹30.01 Lacs", icon: Star },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4">
                    <div className="flex items-center gap-1.5 text-[#e2a613] mb-1">
                      <item.icon size={12} className="shrink-0" />
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{item.label}</span>
                    </div>
                    <div className="text-white font-black text-xs md:text-sm">{item.val}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-[#e2a613] hover:bg-[#c99411] text-white px-8 py-4 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-[#e2a613]/20 flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  Apply Now <ArrowRight size={18} />
                </button>
                <a 
                  href="/Brouchers/jaiu.pdf" 
                  target="_blank"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  Brochure <Download size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
                <Image
                  src="/images/Jalal-Abad-International-University-hero.png"
                  alt="Jalal-Abad International University Campus"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/60 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hidden md:block">
                <div className="text-4xl font-black text-[#1a4db8] leading-none mb-1">5000+</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Successful Alumni</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUICK OVERVIEW ── */}
      <section className="py-24 bg-[#fcfdfe] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="Quick Facts" title="University at a Glance" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Location", val: "Jalal-Abad, Kyrgyzstan", icon: MapPin, color: "blue" },
              { label: "Eligibility", val: "10+2 with 50% PCB", icon: CheckCircle2, color: "emerald" },
              { label: "NEET Exam", val: "Mandatory for Indians", icon: ShieldCheck, color: "rose" },
              { label: "Medium", val: "English (Fully)", icon: Globe2, color: "indigo" },
              { label: "Intake", val: "Feb & September", icon: Clock, color: "orange" },
              { label: "Hostel/Mess", val: "Separate / Indian Food", icon: Coffee, color: "teal" },
              { label: "FMGE Prep", icon: GraduationCap, val: "In-house Coaching", color: "purple" },
              { label: "Scholarships", val: "Merit-based Available", icon: Trophy, color: "amber" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 hover:border-transparent transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2.5rem] ${
                  item.color === 'blue' ? 'from-blue-600 to-blue-400' :
                  item.color === 'emerald' ? 'from-emerald-600 to-emerald-400' :
                  item.color === 'rose' ? 'from-rose-600 to-rose-400' :
                  item.color === 'indigo' ? 'from-indigo-600 to-indigo-400' :
                  item.color === 'orange' ? 'from-orange-600 to-orange-400' :
                  item.color === 'teal' ? 'from-teal-600 to-teal-400' :
                  item.color === 'purple' ? 'from-purple-600 to-purple-400' :
                  'from-amber-600 to-amber-400'
                }`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                    item.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                    item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' :
                    item.color === 'rose' ? 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' :
                    item.color === 'indigo' ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' :
                    item.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' :
                    item.color === 'teal' ? 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white' :
                    item.color === 'purple' ? 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white' :
                    'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white'
                  }`}>
                    <item.icon size={28} />
                  </div>
                  
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 group-hover:text-gray-500 transition-colors">
                    {item.label}
                  </div>
                  
                  <div className="text-[#0B1F33] font-black text-xl leading-[1.2] group-hover:translate-x-1 transition-transform duration-300">
                    {item.val}
                  </div>
                </div>

                <div className={`absolute bottom-6 left-8 right-8 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ${
                  item.color === 'blue' ? 'bg-blue-600/20' :
                  item.color === 'emerald' ? 'bg-emerald-600/20' :
                  item.color === 'rose' ? 'bg-rose-600/20' :
                  item.color === 'indigo' ? 'bg-indigo-600/20' :
                  item.color === 'orange' ? 'bg-orange-600/20' :
                  item.color === 'teal' ? 'bg-teal-600/20' :
                  item.color === 'purple' ? 'bg-purple-600/20' :
                  'bg-amber-600/20'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT UNIVERSITY ── */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-8 md:p-20 shadow-xl border border-gray-100 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading eyebrow="Academic Excellence" title="About Jalal-Abad International University" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                <p>
                  Jalal-Abad International University is a premier international medical institution in Kyrgyzstan, offering a specialized <strong className="text-[#0B1F33]">MBBS/MD program</strong> designed for future global doctors.
                </p>
                <p>
                  The university boasts modern classrooms, advanced laboratories, and a focus on <strong className="text-[#1a4db8]">simulation-based training</strong>. It has become a preferred destination for Indian students due to its affordable fee structure, multicultural environment, and dedicated hospital practice.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden relative">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i+10}`} 
                        alt="Student" 
                        fill 
                        sizes="48px"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm font-black text-[#0B1F33] uppercase tracking-widest">
                  1200+ Indian Students Currently Studying
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
               <Image
                  src="/images/Jalal-Abad-banner.png"
                  alt="Campus Life"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#1a4db8] shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <ArrowRight size={32} />
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE JAIU ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <SectionHeading eyebrow="Advantages" title="Why Choose JAIU Kyrgyzstan?" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Affordable Fees", desc: "Premium education at a fraction of cost", icon: Trophy },
              { title: "English Medium", desc: "No language barrier for Indian students", icon: BookOpen },
              { title: "FMGE Coaching", desc: "Special classes by Indian experts", icon: GraduationCap },
              { title: "Indian Mess", desc: "Hygienic Indian & South Asian food", icon: Coffee },
              { title: "Separate Hostels", desc: "Dedicated spaces for boys & girls", icon: Building2 },
              { title: "Advanced Labs", desc: "Hands-on simulation & research", icon: Stethoscope },
              { title: "Global Faculty", desc: "Experienced professors from India & abroad", icon: Users },
              { title: "Safe Environment", desc: "24/7 campus security & surveillance", icon: ShieldCheck },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-8 bg-gray-50 rounded-[2.5rem] hover:bg-[#1a4db8] hover:text-white transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#1a4db8] mb-6 shadow-md group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <item.icon size={30} />
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-sm font-medium opacity-60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEE STRUCTURE ── */}
      <section className="py-16 bg-[#0B1F33] text-white relative overflow-hidden">
        {/* Abstract background glow for better visibility of white text */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a4db8]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
             <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#e2a613] bg-white/5 px-3 py-1 rounded-full mb-3">Investment in Future</span>
             <h2 className="text-3xl md:text-5xl font-black mb-4">Fee Structure 2026</h2>
             <p className="text-white/50 text-sm max-w-xl mx-auto font-medium">Complete breakdown of tuition, mess, and hostel fees for the 6-year MBBS program.</p>
          </div>

          <FeeTable />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Program (USD)", val: "$33,350", color: "#60a5fa" },
              { label: "Total Program (INR)", val: "₹30.01 Lacs", color: "#94a3b8" },
              { label: "One-time Payment", val: "₹24.50 Lacs", color: "#10b981", highlight: true },
              { label: "Conversion Rate", val: "1 USD = ₹90", color: "#94a3b8" },
            ].map((item, i) => (
              <div key={i} className={`bg-white/5 border rounded-2xl p-5 text-center transition-all ${item.highlight ? 'border-[#10b981] bg-[#10b981]/10 scale-105 shadow-lg shadow-[#10b981]/20' : 'border-white/10'}`}>
                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{item.label}</div>
                <div className="text-2xl font-black" style={{ color: item.color }}>{item.val}</div>
                {item.highlight && <div className="text-[8px] font-black uppercase text-[#10b981] mt-2 tracking-widest">Special Discounted Package</div>}
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-3xl">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-[#e2a613] mb-3">Quick Notes:</h4>
             <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-[11px] text-white/50 font-bold">
               <li className="flex items-center gap-2 text-[#10b981]"><CheckCircle2 size={12} /> One-time Payment Package: ₹24,50,000 only</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#e2a613]" /> Mess & Hostel optional from 3rd year</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#e2a613]" /> Registration & Admission fee in 1st year</li>
               <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-[#e2a613]" /> Fees may vary with exchange rate</li>
             </ul>
          </div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="Campus Life" title="Premium Facilities for Students" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Hospital Practice", desc: "Hands-on clinical training in affiliated hospitals.", icon: Stethoscope },
              { title: "Expert Faculty", desc: "International professors from India & South Asia.", icon: GraduationCap },
              { title: "Safe Hostels", desc: "Separate secure housing with study rooms.", icon: Building2 },
              { title: "Indian Mess", desc: "Homestyle food prepared by regional chefs.", icon: Coffee },
              { title: "Smart Library", desc: "Access to global medical research & E-journals.", icon: BookOpen },
              { title: "Sports & Fitness", desc: "Modern gym and sports grounds for students.", icon: Trophy },
              { title: "Transport", desc: "Daily shuttle service between campus & hospital.", icon: Bus },
              { title: "Cultural Events", desc: "Holi, Diwali, and Eid celebrated with joy.", icon: Music },
            ].map((f, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-3xl hover:shadow-2xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#1a4db8]/10 flex items-center justify-center text-[#1a4db8] mb-6">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-[#0B1F33] mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISSION PROCESS ── */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="Enroll Today" title="Admission Process & Eligibility" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { step: "01", title: "Apply Online", desc: "Fill the admission application form on our website.", icon: MessageCircle },
              { step: "02", title: "Submit Documents", desc: "Upload academic certificates, passport, and NEET scorecard.", icon: CheckCircle2 },
              { step: "03", title: "Admission Letter", desc: "Receive official offer letter from the university.", icon: GraduationCap },
              { step: "04", title: "Visa Processing", desc: "We handle your visa and documentation work professionally.", icon: Globe2 },
              { step: "05", title: "Fee Payment", desc: "Confirm your seat by paying the admission fee.", icon: Trophy },
              { step: "06", title: "Travel to Kyrgyzstan", desc: "Fly with our group and start your medical journey.", icon: Bus },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-8xl font-black text-gray-50 group-hover:text-[#1a4db8]/5 transition-colors leading-none">
                  {s.step}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#1a4db8]/10 text-[#1a4db8] flex items-center justify-center mb-6 group-hover:bg-[#1a4db8] group-hover:text-white transition-colors">
                    <s.icon size={28} />
                  </div>
                  <h4 className="text-xl font-black text-[#0B1F33] mb-3">{s.title}</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                 <ShieldCheck size={120} className="text-gray-50" />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-[#0B1F33] mb-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#e2a613]/10 flex items-center justify-center text-[#e2a613]">
                    <CheckCircle2 size={24} />
                  </div>
                  Eligibility Criteria
                </h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    "Completion of 10+2 (Higher Secondary) schooling.",
                    "Physics, Chemistry, and Biology as core subjects.",
                    "Minimum 50% aggregate marks in PCB (40% for Reserved).",
                    "NEET-UG qualification is mandatory for Indian applicants.",
                    "Valid Indian Passport with at least 6 months validity.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start text-gray-600 font-bold text-sm leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-[#1a4db8] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0B1F33] rounded-[3rem] p-10 md:p-12 text-white flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#1a4db8] opacity-0 group-hover:opacity-10 transition-opacity" />
               <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#e2a613] flex items-center justify-center text-white mb-8 shadow-lg shadow-[#e2a613]/20">
                    <Heart size={32} className="animate-pulse" />
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#e2a613] mb-4">Confused?</h4>
                  <h3 className="text-3xl font-black mb-6 leading-tight">Need Expert <br /> Guidance?</h3>
                  <p className="text-white/60 text-sm font-medium mb-10">Our experts can check your eligibility and guide you through the process in 5 minutes.</p>
                  <button 
                    onClick={() => setIsApplyModalOpen(true)}
                    className="w-full bg-white text-[#0B1F33] py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#e2a613] hover:text-white transition-all shadow-xl"
                  >
                    Check Eligibility Now
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FMGE / SCHOLARSHIP ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1a4db8]/5 to-blue-50 p-12 rounded-[3rem] border border-[#1a4db8]/10">
              <GraduationCap size={48} className="text-[#1a4db8] mb-8" />
              <h3 className="text-3xl font-black text-[#0B1F33] mb-6">FMGE / NExT Preparation</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-8">
                JAIU provides dedicated support for the Licensing Exam. Students benefit from experienced Indian faculty, revision classes, and concept-based clinical training from the very first year.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Indian Faculty", "Mock Tests", "Revision Classes", "Mentorship"].map((t, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-black text-[#0B1F33]">
                    <CheckCircle2 size={16} className="text-[#1a4db8]" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#e2a613]/5 to-amber-50 p-12 rounded-[3rem] border border-[#e2a613]/10">
              <Trophy size={48} className="text-[#e2a613] mb-8" />
              <h3 className="text-3xl font-black text-[#0B1F33] mb-6">Scholarships Available</h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-8">
                We reward academic excellence. Merit-based scholarships are available for high-achieving students to help make their medical education more affordable and rewarding.
              </p>
              <button 
                onClick={() => setIsApplyModalOpen(true)}
                className="text-[#e2a613] font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all"
              >
                Learn About Eligibility <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading eyebrow="Campus Highlights" title="University Gallery" center />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { src: "/images/Jalal-Abad-International-University-hero.png", label: "Main Campus" },
              { src: "/images/Jalal-Abad-banner.png", label: "Medical Block" },
              { src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800", label: "Smart Classroom" },
              { src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800", label: "Advanced Laboratory" },
              { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800", label: "Student Hostel" },
              { src: "https://images.unsplash.com/photo-1523050853063-bd8012fec042?q=80&w=800", label: "Student Life" },
              { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800", label: "Culture & Events" },
              { src: "/images/Jalal-Abad-banner.png", label: "Clinical Training" },
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

      {/* ── FAQ SECTION ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" center />
          <div className="mt-12 space-y-4">
            {[
              { q: "Is Jalal-Abad International University good for MBBS?", a: "Yes, it offers affordable MBBS education, English-medium teaching, hospital practice, and FMGE preparation support." },
              { q: "What is the total MBBS fee at JAIU?", a: "The total estimated fee is $33,350, which is approximately ₹30,01,500 at 1 USD = ₹90 exchange rate." },
              { q: "What is the duration of MBBS at JAIU?", a: "The duration is 5 + 1 years (5 years of academic study + 1 year of clinical internship)." },
              { q: "Is NEET required for admission?", a: "Yes, qualifying NEET-UG is mandatory for all Indian students seeking to study MBBS abroad and practice in India." },
              { q: "Is Indian food available?", a: "Yes, the university provides mess facilities that serve authentic Indian and South Asian food prepared by regional chefs." },
              { q: "Does JAIU provide hostel facilities?", a: "Yes, separate, secure, and fully-furnished hostels are available for boys and girls on or near the campus." },
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[#0B1F33] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1a4db8]/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Start Your MBBS Journey at <br /> Jalal-Abad International University</h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Get complete admission guidance, fee details, document support, and counseling assistance for your medical career.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <button 
                onClick={() => setIsApplyModalOpen(true)}
                className="bg-[#e2a613] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-[#e2a613]/30 hover:scale-105 transition-transform"
             >
               Apply Now
             </button>
             <Link 
               href="https://wa.me/918826418950" 
               className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white/20 transition-all"
             >
               <MessageCircle size={20} className="text-[#22C55E]" /> Talk to Counselor
             </Link>
          </div>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
         <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex gap-3 shadow-2xl">
            <button 
              onClick={() => setIsApplyModalOpen(true)}
              className="flex-1 bg-[#1a4db8] text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl"
            >
              Apply Now
            </button>
            <a href="tel:+918826418950" className="w-14 h-14 bg-[#e2a613] rounded-xl flex items-center justify-center text-white shadow-lg">
               <Phone size={24} />
            </a>
         </div>
      </div>
    </main>
  );
}
