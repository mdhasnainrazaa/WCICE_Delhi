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
  Landmark, BookOpenCheck, Stethoscope as StethoscopeIcon
} from "lucide-react";
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

import { useApplyModal } from "@/context/ApplyModalContext";

// ─── PAGE COMPONENT ───────────────────────────────────────────────────────

export default function CAIMUDetailPage() {
  const { openModal } = useApplyModal();

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-inter overflow-x-hidden selection:bg-[#F97316] selection:text-white">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0F172A] min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1920" alt="CAIMU Campus" fill className="object-cover opacity-20" priority />
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
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2">
                  Download Brochure <Download size={20} />
                </button>
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
              <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200" alt="CAIMU Students" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
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
      <section className="py-24 bg-[#F8FAFC]" id="student-life">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 columns-2 gap-4 space-y-4">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800" alt="Events" fill className="object-cover" /></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800" alt="Hostel" fill className="object-cover" /></div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg"><Image src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800" alt="Festivals" fill className="object-cover" /></div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading subtitle="Experience" title="Student Life in Kyrgyzstan" />
              <p className="text-[#64748B] text-lg leading-relaxed mb-8">
                Students at CAIMU experience a comfortable and active student life in Kyrgyzstan. The university provides fully furnished hostels, native Indian mess facilities, cultural events, outdoor activities, academic programs, and a highly safe international student environment.
              </p>
              <ul className="space-y-4">
                {["Secure Hostel & Indian Mess", "Cultural Events & Freshers Party", "Sports & Outdoor Activities", "Safe & Friendly Living Environment"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#F97316] shrink-0" />
                    <span className="font-semibold text-[#0F172A]">{item}</span>
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

      {/* 12️⃣ GALLERY SECTION */}
      <section className="py-24 bg-[#F8FAFC]" id="gallery">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeading subtitle="Visual Tour" title="CAIMU Gallery" center />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mt-16">
            {[
              { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800", alt: "Campus" },
              { src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800", alt: "Labs" },
              { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800", alt: "Students" },
              { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800", alt: "Hostel" },
              { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800", alt: "Events" },
              { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800", alt: "Clinical Training" }
            ].map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-square">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13️⃣ FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading subtitle="Got Questions?" title="Frequently Asked Questions" center />
          <div className="space-y-4 mt-12" itemScope itemType="https://schema.org/FAQPage">
            {[
              { q: "Where is Central Asian International Medical University located?", a: "CAIMU is located in Jalal-Abad, Kyrgyzstan." },
              { q: "When was CAIMU established?", a: "CAIMU was established in 2016." },
              { q: "Does CAIMU offer MBBS for international students?", a: "Yes, CAIMU offers MD/MBBS education for local and international students." },
              { q: "Is hostel facility available at CAIMU?", a: "Yes, CAIMU provides safe hostel and mess facilities for students." },
              { q: "Does CAIMU provide FMGE/NExT coaching?", a: "Yes, CAIMU provides coaching support for Indian students preparing for FMGE/NExT." },
              { q: "What is the duration of MBBS at CAIMU?", a: "The MD/MBBS program duration is 5 years." }
            ].map((item, i) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <div key={i} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-6 text-left">
                    <span className="text-lg font-bold text-[#0F172A]" itemProp="name">{item.q}</span>
                    <ChevronDown size={24} className={`text-[#64748B] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <div className="px-6 pb-6 text-[#64748B]" itemProp="text">{item.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
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
              <div className="flex flex-wrap gap-4 mb-12">
                <button onClick={openModal} className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all">
                  Apply Now
                </button>
                <a href="tel:+917075001500" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-md transition-all flex items-center gap-2">
                  <Phone size={20} /> Talk to Counselor
                </a>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-[#FACC15] uppercase tracking-wider text-sm">Contact Us</h4>
                <div className="flex items-center gap-3 text-white/80"><Phone size={20} className="text-[#F97316]" /> +91 7075001500, +91 6305570580</div>
                <div className="flex items-center gap-3 text-white/80"><Mail size={20} className="text-[#F97316]" /> info@mbbsadmissioncenter.com</div>
                <div className="flex items-center gap-3 text-white/80"><Globe2 size={20} className="text-[#F97316]" /> mbbsadmissioncenter.com/contact-us</div>
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

      {/* FLOATING ACTION BUTTONS */}
      <a href="https://wa.me/917075001500" target="_blank" rel="noreferrer" className="fixed bottom-24 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50">
        <MessageCircle size={28} />
      </a>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E2E8F0] p-4 z-50 flex gap-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <button onClick={openModal} className="flex-1 bg-[#F97316] text-white font-bold py-3 rounded-xl shadow-lg">
          Apply Now
        </button>
        <a href="tel:+917075001500" className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center justify-center text-[#F97316]">
          <Phone size={20} />
        </a>
      </div>
    </main>
  );
}
