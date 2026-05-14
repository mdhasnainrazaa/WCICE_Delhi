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
  BookMarked, Calendar, CheckSquare, ArrowUpRight, PlayCircle, Video, Star, CheckCircle
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { PromDown } from "@/components/ui/PromDown";

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

import { useApplyModal } from "@/context/ApplyModalContext";

const FAQAccordion = ({ items }: { items: { q: string; a: string }[] }) => {
  return (
    <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
      {items.map((item, i) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden transition-all hover:shadow-md" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left">
              <span className={`text-lg font-medium transition-colors ${isOpen ? "text-[#0057B8]" : "text-[#0F172A]"}`} itemProp="name">{item.q}</span>
              <ChevronDown size={24} className={`text-[#64748B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div className="px-6 pb-6 text-[#64748B] leading-relaxed" itemProp="text">
                    <div className="w-full h-px bg-[#E2E8F0] mb-6" />
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────

export default function OIMUDetailPage() {
  const { openModal } = useApplyModal();
  const [activeTab, setActiveTab] = useState(0);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-inter overflow-x-hidden selection:bg-[#0EA5E9] selection:text-white">

      {/* 2️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0EA5E9]/10 to-[#0057B8]/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <Breadcrumbs />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-[#0057B8]/10 text-[#0057B8] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#0057B8]/20 backdrop-blur-sm">
                <Trophy size={16} /> Top Medical University in Kyrgyzstan
              </div>
              <h1 className="text-5xl lg:text-[64px] font-bold text-[#0F172A] leading-[1.1] mb-6">
                Study MBBS at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057B8] to-[#0EA5E9]">Osh International Medical University</span>
              </h1>
              <p className="text-lg text-[#64748B] mb-8 leading-relaxed max-w-lg">
                Your gateway to a global medical career. Apply for MBBS at Osh International Medical University, Kyrgyzstan. Get affordable education, FMGE coaching, hostel facilities, and world-class clinical exposure.
              </p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {[
                  "FMGE/NExT Coaching", "Modern Clinical Training",
                  "Hostel & Indian Mess", "International Faculty"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#0F172A] font-medium">
                    <CheckCircle2 size={20} className="text-[#0EA5E9]" /> {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-12">
                <button onClick={openModal} className="bg-[#0057B8] hover:bg-[#004494] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-[#0057B8]/30 flex items-center gap-2">
                  Apply Now <ArrowRight size={20} />
                </button>
                <button className="bg-white hover:bg-gray-50 text-[#0057B8] border-2 border-[#0057B8] px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center gap-2">
                  Download Brochure <Download size={20} />
                </button>
              </div>

              <div className="flex items-center gap-8 pt-6 border-t border-[#E2E8F0]">
                <div>
                  <div className="text-3xl font-bold text-[#0F172A]">5000+</div>
                  <div className="text-sm text-[#64748B]">Students Enrolled</div>
                </div>
                <div className="w-px h-12 bg-[#E2E8F0]" />
                <div>
                  <div className="text-3xl font-bold text-[#0F172A]">95%</div>
                  <div className="text-sm text-[#64748B]">Satisfaction Rate</div>
                </div>
                <div className="w-px h-12 bg-[#E2E8F0]" />
                <div>
                  <div className="text-3xl font-bold text-[#0F172A]">Global</div>
                  <div className="text-sm text-[#64748B]">International Campus</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200" alt="Osh International Medical University Campus" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-10 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 hidden md:flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-full flex items-center justify-center">
                  <Award size={24} className="text-[#F59E0B]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">FMGE Support</div>
                  <div className="text-xs text-[#64748B]">High Passing Rate</div>
                </div>
              </motion.div>

              <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 -right-10 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 hidden md:flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center">
                  <HeartPulse size={24} className="text-[#0EA5E9]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">Clinical Exposure</div>
                  <div className="text-xs text-[#64748B]">1000+ Bed Hospitals</div>
                </div>
              </motion.div>
            </motion.div>

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
              { icon: Stethoscope, label: "Clinical", val: "Extensive", color: "text-rose-500", bg: "bg-rose-50" }
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
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800" alt="Students" fill className="object-cover" sizes="400px" /></div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800" alt="Medical Lab" fill className="object-cover" sizes="400px" /></div>
                </div>
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1519452285866-224422e6b127?q=80&w=800" alt="Campus" fill className="object-cover" sizes="400px" /></div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" alt="Clinical" fill className="object-cover" sizes="400px" /></div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#0057B8]/5 to-[#0EA5E9]/5 rounded-full blur-3xl -z-10" />
            </div>
            
            <div>
              <SectionHeading subtitle="About University" title="About Osh International Medical University" />
              <div className="space-y-6 text-[#64748B] text-lg leading-relaxed">
                <p>
                  Osh International Medical University (OIMU) is one of the fastest-growing and highly respected medical institutions in Kyrgyzstan. Designed to meet international standards, OIMU offers a world-class environment for students pursuing MBBS abroad.
                </p>
                <p>
                  With a commitment to academic excellence, the university provides a comprehensive curriculum that blends theoretical knowledge with extensive clinical practice in affiliated government and private hospitals.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Approved by WHO, NMC (MCI), FAIMER, and ECFMG.",
                    "Highly qualified international and local medical faculty.",
                    "Focus on practical and clinical skills development.",
                    "Safe, secure, and culturally diverse campus life."
                  ].map((list, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                      <span className="font-medium text-[#0F172A]">{list}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
              { icon: Stethoscope, title: "Clinical Exposure", desc: "Hands-on practice in multi-specialty government hospitals." },
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

      {/* 6️⃣ RECTOR & DEAN MESSAGE */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Leadership" title="Messages from the Management" light center />
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative">
               <div className="absolute top-10 right-10 opacity-10"><MessageCircle size={80} /></div>
               <div className="flex items-center gap-6 mb-8">
                 <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden relative">
                   <Image src="https://i.pravatar.cc/150?img=11" alt="Rector" fill className="object-cover" sizes="80px"/>
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold">Dr. Almazbekov N.</h3>
                   <div className="text-[#0EA5E9] font-medium">Rector, OIMU</div>
                 </div>
               </div>
               <p className="text-white/80 leading-relaxed italic text-lg">
                 "Our goal is to nurture compassionate, skilled, and globally competent medical professionals. OIMU provides an ecosystem where innovation meets traditional medical ethics."
               </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative">
               <div className="absolute top-10 right-10 opacity-10"><MessageCircle size={80} /></div>
               <div className="flex items-center gap-6 mb-8">
                 <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden relative">
                   <Image src="https://i.pravatar.cc/150?img=32" alt="Dean" fill className="object-cover" sizes="80px"/>
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold">Dr. Sharma V.</h3>
                   <div className="text-[#0EA5E9] font-medium">Dean of International Students</div>
                 </div>
               </div>
               <p className="text-white/80 leading-relaxed italic text-lg">
                 "We welcome international students to experience top-tier medical education. We ensure a home away from home with dedicated support, Indian food, and FMGE coaching."
               </p>
            </div>
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
            <div className="grid grid-cols-2 gap-4">
               <div className="relative aspect-[3/4] rounded-3xl overflow-hidden"><Image src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800" alt="Lab" fill className="object-cover" sizes="300px"/></div>
               <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mt-12"><Image src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800" alt="Lecture" fill className="object-cover" sizes="300px"/></div>
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
                { title: "Patient Interaction", desc: "Real diagnosis", icon: Stethoscope }
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

      {/* 13 & 14 ── GALLERY SECTION */}
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
              { src: "/images/osh-international-medical-university.png", label: "Main Entrance" },
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
          
          <div className="mt-16 bg-[#0057B8]/5 rounded-3xl p-8 md:p-12 border border-[#0057B8]/10 text-center max-w-3xl mx-auto">
            <MapPin size={40} className="text-[#0057B8] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Life in Osh, Kyrgyzstan</h3>
            <p className="text-[#64748B] leading-relaxed">
              Osh is the second-largest city in Kyrgyzstan, often referred to as the "capital of the south". It is a vibrant, student-friendly city with affordable living costs, shopping malls, parks, and a welcoming local community, making it highly safe and pleasant for international students.
            </p>
          </div>
        </div>
      </section>

      {/* 15 ── WHY CHOOSE OIMU (DARK SECTION) */}
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="The OIMU Advantage" title="Why Choose Osh International Medical University?" light />
              <div className="space-y-4 mt-8">
                {[
                  "Affordable MBBS tuition fees",
                  "Dedicated FMGE/NExT support",
                  "Extensive clinical exposure in top hospitals",
                  "Modern infrastructure and smart labs",
                  "Secure hostel with Indian food",
                  "Scholarship opportunities for bright minds"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="text-[#0EA5E9]" />
                    <span className="text-lg font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fee Snapshot */}
            <div className="bg-gradient-to-br from-[#0057B8] to-[#0EA5E9] p-10 rounded-[32px] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
               <h3 className="text-2xl font-bold mb-8 relative z-10">MBBS Fee Overview</h3>
               <div className="space-y-6 relative z-10">
                 <div className="flex justify-between items-center border-b border-white/20 pb-4">
                   <span className="font-medium text-white/80">Tuition Fee (Per Year)</span>
                   <span className="text-xl font-bold">$3,500</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-white/20 pb-4">
                   <span className="font-medium text-white/80">Hostel Fee (Per Year)</span>
                   <span className="text-xl font-bold">$600</span>
                 </div>
                 <div className="pt-4">
                   <span className="block text-sm text-white/80 mb-1">Total Package (Approx)</span>
                   <span className="text-5xl font-black">₹18-20 Lakhs</span>
                 </div>
               </div>
               <button onClick={openModal} className="mt-8 w-full bg-white text-[#0057B8] py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow">
                 Get Detailed Fee Structure
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 15.5 ── DETAILED FEE STRUCTURE TABLE */}
      <section className="py-24 bg-white" id="fee-structure">
        <div className="max-w-[1200px] mx-auto px-6">
          <PromDown title="MBBS Fee Structure 2026" subtitle="Invest in Your Future" defaultOpen={false}>
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
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest border-b border-[#E2E8F0]">Visa & Medical</th>
                    <th className="p-4 text-[10px] font-bold uppercase tracking-widest bg-[#0057B8]/5 border-b border-[#E2E8F0] text-[#0057B8]">Total ({currency})</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { year: "1st Year", tuition: currency === 'INR' ? "₹3,15,000" : "$3,500", hostel: currency === 'INR' ? "₹54,000" : "$600", visa: currency === 'INR' ? "₹90,000" : "$1,000", total: currency === 'INR' ? "₹5,40,000" : "$6,000" },
                    { year: "2nd Year", tuition: currency === 'INR' ? "₹3,15,000" : "$3,500", hostel: currency === 'INR' ? "₹54,000" : "$600", visa: currency === 'INR' ? "₹18,000" : "$200", total: currency === 'INR' ? "₹4,05,000" : "$4,500" },
                    { year: "3rd Year", tuition: currency === 'INR' ? "₹3,15,000" : "$3,500", hostel: currency === 'INR' ? "₹54,000" : "$600", visa: currency === 'INR' ? "₹18,000" : "$200", total: currency === 'INR' ? "₹4,05,000" : "$4,500" },
                    { year: "4th Year", tuition: currency === 'INR' ? "₹3,15,000" : "$3,500", hostel: currency === 'INR' ? "₹54,000" : "$600", visa: currency === 'INR' ? "₹18,000" : "$200", total: currency === 'INR' ? "₹4,05,000" : "$4,500" },
                    { year: "5th Year", tuition: currency === 'INR' ? "₹3,15,000" : "$3,500", hostel: currency === 'INR' ? "₹54,000" : "$600", visa: currency === 'INR' ? "₹18,000" : "$200", total: currency === 'INR' ? "₹4,05,000" : "$4,500" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors text-xs">
                      <td className="p-4 font-bold text-[#0F172A] whitespace-nowrap uppercase tracking-wider">{row.year}</td>
                      <td className="p-4 font-semibold text-[#64748B]">{row.tuition}</td>
                      <td className="p-4 font-semibold text-[#64748B]">{row.hostel}</td>
                      <td className="p-4 font-semibold text-[#64748B]">{row.visa}</td>
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
                  {currency === 'INR' ? "₹21.60 Lakhs" : "$24,000"}*
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
                { step: "6", title: "Start MBBS", icon: Stethoscope },
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
              ].map((item, i) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                  <div key={i} className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all hover:shadow-md" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 text-left">
                      <span className={`text-sm font-medium transition-colors ${isOpen ? "text-[#0057B8]" : "text-[#0F172A]"}`} itemProp="name">{item.q}</span>
                      <ChevronDown size={20} className={`text-[#64748B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <div className="px-4 pb-4 text-xs text-[#64748B] leading-relaxed" itemProp="text">
                            <div className="w-full h-px bg-[#E2E8F0] mb-4" />
                            {item.a}
                          </div>
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

      {/* FLOATING ACTION BUTTONS */}
      <a href="https://wa.me/918826418950" target="_blank" rel="noreferrer" className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <MessageCircle size={28} />
      </a>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] p-4 z-50 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button onClick={openModal} className="flex-1 bg-[#0057B8] text-white font-bold py-3 rounded-xl shadow-lg">
          Apply Now
        </button>
        <a href="tel:+918586873357" className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#0057B8]">
          <Phone size={20} />
        </a>
      </div>
    </main>
  );
}
