"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Users,
  GraduationCap,
  Globe2,
  Award,
  ShieldCheck,
  Target,
  Eye,
  Quote,
  ChevronRight,
  Clock,
  BookOpen,
  Trophy,
  Star,
  Building2,
  Utensils,
  Bus,
  Library,
  Stethoscope,
  Heart,
  Home,
  Smartphone,
  Send,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Download,
  Search,
  Maximize,
  ChevronLeft,
  ZoomIn,
  ZoomOut,
  Printer,
} from "lucide-react";
import { useApplyModal } from "@/context/ApplyModalContext";

// ─── SEO Meta (inject via Head in a layout or _app) ─────────────────────────
export function AboutPageSEO() {
  return (
    <Head>
      <title>About WCIEC | Trusted MBBS Abroad Consultancy – Kyrgyzstan</title>
      <meta
        name="description"
        content="WCIEC Organization – 15+ years guiding Indian students to NMC & WHO recognized MBBS universities in Kyrgyzstan. 5000+ successful students, 5 owned medical universities, FMGE/NExT coaching."
      />
      <meta
        name="keywords"
        content="MBBS abroad, MBBS in Kyrgyzstan, WCIEC organization, NMC recognized universities Kyrgyzstan, FMGE coaching, medical education consultancy India"
      />
      <meta property="og:title" content="About WCIEC | Trusted MBBS Abroad Consultancy" />
      <meta
        property="og:description"
        content="15+ years of excellence guiding aspiring doctors to top medical universities in Kyrgyzstan. NMC & WHO recognized. 5000+ successful alumni."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wciecorganization.com/about" />
      <link rel="canonical" href="https://wciecorganization.com/about" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "WCIEC Organization Private Limited",
            url: "https://wciecorganization.com",
            description:
              "WCIEC Organization guides aspiring medical students to NMC & WHO recognized MBBS universities in Kyrgyzstan.",
            foundingDate: "2010",
            address: { "@type": "PostalAddress", addressCountry: "IN" },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8376965627",
              contactType: "Admissions",
            },
            sameAs: ["https://wciecorganization.com"],
          }),
        }}
      />
    </Head>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { label: "Successful Students", value: "5000+", icon: Users },
  { label: "Medical Universities", value: "5", icon: Building2 },
  { label: "FMGE Passes Jan 2025", value: "1500+", icon: GraduationCap },
  { label: "Top NExT Rank", value: "AIR 8", icon: Trophy },
  { label: "Years of Excellence", value: "15+", icon: Award },
];

const milestones = [
  { year: "2010", event: "Founded", desc: "Mission to simplify MBBS admissions for Indian students abroad" },
  { year: "2012", event: "Partnerships", desc: "Built strong ties with top Kyrgyzstan medical universities" },
  { year: "2015", event: "FMGE Coaching", desc: "Launched specialized FMGE/NExT coaching with Indian faculty" },
  { year: "2018", event: "Scholarships", desc: "Introduced merit-based scholarships for deserving students" },
  { year: "2021", event: "Best Uni Award", desc: "Universities honored with Best University Award, Kyrgyzstan" },
  { year: "2025", event: "15 Years Strong", desc: "5000+ successful doctors. 1500+ FMGE passes in Jan 2025 alone" },
];

const universities = [
  {
    abbr: "JAIU",
    name: "Jalal-Abad International University",
    city: "Jalalabad",
    image: "/images/Jalal-Abad-International-University-hero.png",
    highlight: "NMC & WHO Recognized",
  },
  {
    abbr: "JASU",
    name: "Jalal-Abad State University",
    city: "Jalalabad",
    image: "/images/Jalal-Abad-banner.png",
    highlight: "Government University",
  },
  {
    abbr: "OSU",
    name: "Osh State University Medical Faculty",
    city: "Osh",
    image: "/images/Osh-State-University.png",
    highlight: "Established 1992",
  },
  {
    abbr: "CAIMU",
    name: "Central Asian International Medical University",
    city: "Osh",
    image: "/images/Central-Asian-Medical-University.png",
    highlight: "ECFMG Listed",
  },
  {
    abbr: "OIMU",
    name: "Osh International Medical University",
    city: "Osh",
    image: "/images/osh-international-medical-university.png",
    highlight: "Best Campus Facilities",
  },
];


const trustFactors = [
  {
    title: "Transparent Fee Structure",
    desc: "No hidden charges. Complete transparency from admission to graduation.",
    icon: ShieldCheck,
    color: "from-blue-50 to-indigo-50",
    accent: "#1a4db8",
  },
  {
    title: "Visa & Documentation",
    desc: "End-to-end support for visa processing, documentation and travel.",
    icon: Globe2,
    color: "from-teal-50 to-emerald-50",
    accent: "#0d7c66",
  },
  {
    title: "Indian Food & Hostels",
    desc: "Comfortable separate hostels with Indian mess for home-like comfort.",
    icon: Utensils,
    color: "from-amber-50 to-orange-50",
    accent: "#c2600a",
  },
  {
    title: "FMGE/NExT Coaching",
    desc: "Expert Indian faculty including Dr. Deepak Marwah. 1500+ Jan 2025 passes.",
    icon: BookOpen,
    color: "from-rose-50 to-pink-50",
    accent: "#be123c",
  },
  {
    title: "Merit Scholarships",
    desc: "Scholarship programs based on entrance performance to reduce financial burden.",
    icon: GraduationCap,
    color: "from-violet-50 to-purple-50",
    accent: "#6d28d9",
  },
  {
    title: "Full Journey Support",
    desc: "We stand beside students from application day until degree completion.",
    icon: Stethoscope,
    color: "from-cyan-50 to-sky-50",
    accent: "#0369a1",
  },
];

const facilities = [
  { name: "Separate Hostels", icon: Home },
  { name: "Indian Mess", icon: Utensils },
  { name: "Library", icon: Library },
  { name: "Transport", icon: Bus },
  { name: "Laundry", icon: Smartphone },
  { name: "Campus Hospital", icon: Stethoscope },
  { name: "Sports Clubs", icon: Trophy },
  { name: "Auditorium", icon: Users },
  { name: "Dispensary", icon: Heart },
  { name: "Shops & ATM", icon: Building2 },
];

const coreValues = [
  { title: "Integrity First", desc: "Honesty and transparency in everything we do.", icon: ShieldCheck },
  { title: "Student-Centric", desc: "Your success is the heart of our mission.", icon: Users },
  { title: "Excellence", desc: "Dedicated, professional, high-quality service.", icon: Star },
  { title: "Long-term Commitment", desc: "We stand with you from admission to graduation.", icon: Clock },
];

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedStat({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#1a4db8]/10 text-[#1a4db8] mb-4 group-hover:bg-[#1a4db8] group-hover:text-white transition-all duration-300">
        <Icon size={26} />
      </div>
      <div className="text-3xl font-black text-[#0B1F33] tracking-tight mb-1">{value}</div>
      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">{label}</div>
    </motion.div>
  );
}

// ─── Section Heading ─────────────────────────────────────────────────────────
function SectionHeading({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "text-center mb-16" : "mb-12"}>
      <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#1a4db8] bg-[#1a4db8]/8 px-3 py-1 rounded-full mb-4">
        {eyebrow}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-[#0B1F33] leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
        {title}
      </h2>
      {center && <div className="mt-5 mx-auto w-16 h-1 bg-gradient-to-r from-[#1a4db8] to-[#e2a613] rounded-full" />}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const { openModal } = useApplyModal();
  return (
    <>
      <AboutPageSEO />
      <main className="bg-white overflow-x-hidden" itemScope itemType="https://schema.org/EducationalOrganization">
        <meta itemProp="name" content="WCIEC Organization Private Limited" />

        {/* ── HERO ── */}
        <section
          aria-label="Hero – About WCIEC"
          className="relative min-h-[92vh] flex items-center bg-[#050e1f]"
        >
          {/* BG image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
              alt="Medical university campus"
              fill
              priority
              className="object-cover opacity-25"
            />
            {/* Geometric overlay */}
            <div className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(26,77,184,0.45) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(226,166,19,0.15) 0%, transparent 60%)",
              }}
            />
            {/* grid texture */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-28">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 border border-white/20 bg-white/8 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                  <Sparkles size={12} className="text-[#e2a613]" aria-hidden="true" />
                  NMC &amp; WHO Recognized Universities · Session 2025–26
                </div>
                <h1
                  className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                  itemProp="description"
                >
                  About{" "}
                  <span
                    className="relative inline-block"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #e2a613)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    WCIEC
                  </span>
                  <br />
                  Organization
                </h1>
                <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
                  For over 15 years, WCIEC has guided aspiring Indian medical students toward globally recognized MBBS degrees — with transparency, expertise, and end-to-end support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center gap-2 bg-[#1a4db8] hover:bg-[#1440a0] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#1a4db8]/30 text-sm"
                    aria-label="Apply for MBBS abroad with WCIEC"
                  >
                    Apply Now <ArrowRight size={16} />
                  </button>
                  <div className="flex bg-white/10 backdrop-blur-sm border border-white/25 rounded-xl overflow-hidden">
                    <a
                      href="/Brouchers/WCIEC DELHI.pdf"
                      target="_blank"
                      className="px-6 py-4 text-white font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-all border-r border-white/20"
                      aria-label="View WCIEC brochure"
                    >
                      <Eye size={16} /> View
                    </a>
                    <a
                      href="/Brouchers/WCIEC DELHI.pdf"
                      download
                      className="px-6 py-4 text-white font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-all"
                      aria-label="Download WCIEC brochure"
                    >
                      <Download size={16} /> Download Brochure
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-12 right-8 hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4"
            >
              <div className="text-[#e2a613]"><Trophy size={28} /></div>
              <div>
                <div className="text-white font-black text-lg leading-none">AIR 8</div>
                <div className="text-white/60 text-xs font-bold mt-0.5">NExT Top Achiever</div>
              </div>
              <div className="w-px h-10 bg-white/20 mx-2" />
              <div>
                <div className="text-white font-black text-lg leading-none">1500+</div>
                <div className="text-white/60 text-xs font-bold mt-0.5">FMGE Passes · Jan 2025</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section aria-label="Key statistics" className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
              {stats.map((s, i) => (
                <AnimatedStat key={i} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section aria-labelledby="who-we-are" className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gray-50/50 rounded-[3rem] border border-gray-100 overflow-hidden p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <SectionHeading eyebrow="Who We Are" title="Trusted by 5000+ Future Doctors" />
                  <div className="space-y-5 text-gray-600 text-base leading-relaxed mb-10">
                    <p>
                      WCIEC Organization was established with a clear vision: to guide aspiring Indian medical students toward world-class MBBS opportunities abroad — particularly in the{" "}
                      <strong className="text-[#0B1F33]">Kyrgyz Republic</strong>. Over the years, we've built a strong reputation for transparent admissions support, genuine student care, and consistently outstanding FMGE/NExT results.
                    </p>
                    <p>
                      Today, WCIEC proudly <strong className="text-[#0B1F33]">owns and operates 5 medical universities</strong> in Jalalabad and Osh — all recognized by the NMC and WHO — and was honored with the{" "}
                      <strong className="text-[#0B1F33]">Best University Award in Kyrgyzstan</strong> and awarded by the President of Kyrgyzstan.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Transparent Guidance", icon: ShieldCheck },
                      { label: "NMC & WHO Recognized", icon: Globe2 },
                      { label: "Student-First Approach", icon: Users },
                      { label: "Support Until Graduation", icon: Clock },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white hover:bg-[#1a4db8]/5 border border-gray-100 hover:border-[#1a4db8]/20 p-4 rounded-xl transition-all shadow-sm"
                      >
                        <div className="text-[#1a4db8]"><item.icon size={20} /></div>
                        <span className="text-sm font-bold text-[#0B1F33] leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-[#1a4db8]/10">
                    <Image
                      src="/images/awardedImage.png"
                      alt="WCIEC Awarded by the President of Kyrgyzstan"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F33]/30 to-transparent" />
                  </div>
                  {/* floating card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 z-10">
                    <div className="text-3xl font-black text-[#1a4db8] leading-none">15+</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">Years of Trust</div>
                  </div>
                  {/* decorative dot */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#e2a613]/10 border-2 border-[#e2a613]/20 z-0" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        {/* ── DIRECTOR'S MESSAGE ── */}
        <section aria-labelledby="directors-message" className="py-24 bg-[#f8f9fc]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 grid lg:grid-cols-12">
              {/* Left dark panel */}
              <div className="lg:col-span-4 bg-[#0B1F33] p-12 flex flex-col items-center justify-center text-center relative">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white/10 mb-6">
                  <Image
                    src="/images/director image.png"
                    alt="Dr. Firoz Khan – Founder & Director, WCIEC Organization"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3
                  id="directors-message"
                  className="text-2xl font-black text-white mb-1"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                  itemProp="founder"
                >
                  Dr. Firoz Khan
                </h3>
                <p className="text-[#e2a613] font-bold text-sm mb-6">Founder &amp; Director</p>
                <div className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="w-2 h-2 rounded-full bg-[#1a4db8]" />
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <Quote className="absolute top-8 right-8 text-white/5" size={100} aria-hidden="true" />
              </div>
              {/* Right message panel */}
              <div className="lg:col-span-8 bg-white p-12 lg:p-16 flex flex-col justify-center relative">
                <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#1a4db8] bg-[#1a4db8]/8 px-3 py-1 rounded-full mb-5 w-fit">
                  Director's Message
                </span>
                <h2 className="text-3xl font-black text-[#0B1F33] mb-7" style={{ fontFamily: "'Sora', sans-serif" }}>
                  A Vision for Global Medical Excellence
                </h2>
                <blockquote className="space-y-4 text-gray-600 text-lg leading-relaxed italic mb-8 border-l-4 border-[#1a4db8]/20 pl-6">
                  <p>
                    "At WCIEC, our mission is not just to provide admission, but to shape the future of aspiring doctors. We believe in transparency, quality education, and complete support throughout their academic journey."
                  </p>
                  <p>
                    "We are committed to making world-class medical education accessible and affordable for every deserving student."
                  </p>
                </blockquote>

                <Quote className="absolute bottom-8 right-8 text-gray-50" size={120} aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section aria-labelledby="mission-vision" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading eyebrow="Our Purpose" title="Mission & Vision" center />
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a4db8]/5 to-blue-50 p-10 rounded-3xl border border-[#1a4db8]/10 flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a4db8] flex items-center justify-center text-white shrink-0">
                  <Target size={26} />
                </div>
                <div>
                  <h3 id="mission-vision" className="text-xl font-black text-[#0B1F33] mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To provide students with transparent, ethical, and complete MBBS admission guidance. We ensure quality education, comfortable stay, and continuous support to help students achieve their dream of becoming successful, globally competitive doctors.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-br from-[#e2a613]/5 to-amber-50 p-10 rounded-3xl border border-[#e2a613]/15 flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#e2a613] flex items-center justify-center text-white shrink-0">
                  <Eye size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0B1F33] mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To become a globally recognized organization that empowers students through quality medical education — creating a community of skilled, compassionate, and responsible healthcare professionals who make their families and nation proud.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── JOURNEY / TIMELINE ── */}
        <section aria-labelledby="journey" className="py-24 bg-[#050e1f] relative overflow-hidden">
          {/* bg decoration */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#e2a613] bg-[#e2a613]/10 px-3 py-1 rounded-full mb-4">
                Our Journey
              </span>
              <h2
                id="journey"
                className="text-4xl md:text-5xl font-black text-white"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                15 Years of Milestones
              </h2>
            </div>
            <div className="relative">
              {/* connector line */}
              <div className="absolute top-7 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#1a4db8]/20 border border-[#1a4db8]/40 flex items-center justify-center text-[#e2a613] mx-auto mb-5 relative z-10">
                      <Star size={20} />
                    </div>
                    <div className="text-center">
                      <div className="text-[#e2a613] font-black text-xl mb-1">{m.year}</div>
                      <div className="text-white font-bold text-sm mb-2">{m.event}</div>
                      <p className="text-white/45 text-[11px] leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── UNIVERSITIES ── */}
        <section aria-labelledby="universities" className="py-24 bg-[#f8f9fc]">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading eyebrow="Our Campuses" title="5 Prestigious Medical Universities" center />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {universities.map((uni, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  itemScope
                  itemType="https://schema.org/CollegeOrUniversity"
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <Image
                      src={uni.image}
                      alt={`${uni.name} – MBBS in Kyrgyzstan`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/60 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-white font-black text-xl" itemProp="name">{uni.abbr}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xs font-bold text-[#0B1F33] mb-1 line-clamp-2 leading-tight" itemProp="legalName">{uni.name}</h3>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">
                      <MapPin size={10} /> <span itemProp="address">{uni.city}, Kyrgyzstan</span>
                    </div>
                    <span className="inline-block text-[10px] font-bold text-[#1a4db8] bg-[#1a4db8]/8 px-2 py-0.5 rounded-full mb-4">{uni.highlight}</span>
                    <a
                      href={`/universities/${uni.abbr.toLowerCase()}`}
                      className="block w-full py-2 rounded-lg border border-[#1a4db8]/20 text-[#1a4db8] font-bold text-xs text-center hover:bg-[#1a4db8] hover:text-white transition-all"
                      aria-label={`View details about ${uni.name}`}
                    >
                      View Details
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY TRUST WCIEC ── */}
        <section aria-labelledby="why-trust" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading eyebrow="Why Choose Us" title="Why Students Trust WCIEC" center />
            <div className="grid md:grid-cols-3 gap-7">
              {trustFactors.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`bg-gradient-to-br ${f.color} p-8 rounded-3xl border border-white/60 group hover:-translate-y-1 transition-all duration-300`}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm"
                    style={{ background: f.accent + "18", color: f.accent }}
                  >
                    <f.icon size={26} />
                  </div>
                  <h3 className="text-lg font-black text-[#0B1F33] mb-3">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FACILITIES ── */}
        <section aria-labelledby="facilities" className="py-24 bg-[#f8f9fc]">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading eyebrow="Campus Life" title="World-Class Campus Facilities" center />
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-14">
              {facilities.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center group hover:bg-[#1a4db8] cursor-default transition-all duration-300"
                >
                  <div className="text-[#1a4db8] group-hover:text-white flex justify-center mb-3 transition-colors">
                    <f.icon size={26} />
                  </div>
                  <div className="text-[11px] font-bold text-[#0B1F33] group-hover:text-white uppercase tracking-tight transition-colors">{f.name}</div>
                </motion.div>
              ))}
            </div>

            {/* Hospital practice callout */}
            <div className="bg-[#0B1F33] rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-[#1a4db8] flex items-center justify-center text-white shrink-0">
                <Stethoscope size={30} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-white mb-2">In-Campus Teaching Hospitals</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Every WCIEC campus has its own teaching hospital — providing students with hands-on clinical exposure from their very first year. Students learn from real patients, gaining practical skills on par with top medical universities worldwide.
                </p>
              </div>
              <a
                href="/hospitals"
                className="inline-flex items-center gap-2 bg-[#1a4db8] hover:bg-[#1440a0] text-white font-bold px-7 py-3 rounded-xl transition-all text-sm whitespace-nowrap"
              >
                Explore Hospitals <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section aria-labelledby="core-values" className="py-16 bg-[#1a4db8]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {coreValues.map((v, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#e2a613] shrink-0">
                    <v.icon size={22} />
                  </div>
                  <div>
                    <h4
                      id={i === 0 ? "core-values" : undefined}
                      className="font-black text-white text-base mb-1"
                    >{v.title}</h4>
                    <p className="text-white/60 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FMGE RESULTS CALLOUT ── */}
        <section aria-labelledby="fmge-results" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gray-50/50 rounded-[3rem] border border-gray-100 overflow-hidden p-8 md:p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <SectionHeading eyebrow="FMGE / NExT" title="Best Results in India" />
                  <p className="text-gray-500 text-base leading-relaxed mb-8">
                    WCIEC consistently delivers outstanding FMGE/NExT results. Our structured curriculum, Indian study materials, regular mock tests, and renowned visiting faculty ensure students pass on their first attempt.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "1500+ students passed FMGE in January 2025",
                      "AIR 8 – Dr. Diwahar Singh, Score 243",
                      "Expert faculty: Dr. Deepak Marwah, Dr. Naveen Porwal & more",
                      "24×7 library access and Indian-syllabus study material",
                    ].map((point, i) => (
                      <li key={i} className="flex gap-3 items-start text-sm text-gray-600">
                        <CheckCircle2 size={18} className="text-[#1a4db8] mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/fmge-coaching"
                    className="inline-flex items-center gap-2 bg-[#0B1F33] hover:bg-[#1a4db8] text-white font-bold px-8 py-4 rounded-xl transition-all mt-8 text-sm"
                  >
                    FMGE Coaching Details <ArrowRight size={16} />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { val: "1500+", label: "FMGE Passes, Jan 2025", icon: GraduationCap, color: "#1a4db8" },
                    { val: "AIR 8", label: "Top NExT Achiever", icon: Trophy, color: "#e2a613" },
                    { val: "15+", label: "Expert FMGE Faculty", icon: Users, color: "#0d7c66" },
                    { val: "1st", label: "Attempt Pass Rate", icon: Star, color: "#be123c" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: item.color + "15", color: item.color }}>
                        <item.icon size={20} />
                      </div>
                      <div className="text-2xl font-black text-[#0B1F33]">{item.val}</div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ── AWARDS & RECOGNITION ── */}
        <section className="py-24 bg-[#f8f9fc]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 p-12 lg:p-20">
                <SectionHeading eyebrow="Official Recognition" title="Awarded by the President of Kyrgyzstan" />
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                  "This recognition is a testament to WCIEC's unwavering commitment to providing the highest quality medical education and student support services in the Kyrgyz Republic."
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#e2a613]/10 flex items-center justify-center text-[#e2a613]">
                    <Trophy size={32} />
                  </div>
                  <div>
                    <div className="text-[#0B1F33] font-black text-xl">Best University Award</div>
                    <div className="text-gray-400 font-bold text-xs uppercase tracking-widest">Official Presidential Honor</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative aspect-[4/3] w-full">
                <Image
                  src="/images/awardedImage.png"
                  alt="Official Award Ceremony with the President of Kyrgyzstan"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#0B1F33]/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE BROCHURE ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading eyebrow="Explore WCIEC" title="Digital Information Brochure" center />
            
            <div className="relative max-w-5xl mx-auto mt-12 bg-[#0B1F33] rounded-3xl p-4 md:p-8 shadow-2xl">
              {/* Viewer Mockup */}
              <div className="relative aspect-[16/10] bg-white rounded-xl overflow-hidden shadow-inner group/viewer">
                {/* Simulated Viewer Header */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gray-50 border-b border-gray-100 flex items-center justify-between px-4 z-20">
                  <div className="flex items-center gap-4">
                    <div className="text-[#0B1F33] font-black text-sm tracking-tight">WCIEC DELHI.pdf</div>
                    <div className="bg-gray-200 h-4 w-px" />
                    <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Page 1 of 12</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-[#1a4db8] transition-colors"><Search size={16} /></button>
                    <button className="text-gray-400 hover:text-[#1a4db8] transition-colors"><Maximize size={16} /></button>
                  </div>
                </div>

                {/* Main Content Area - Embedded PDF */}
                <div className="absolute inset-0 pt-12 flex items-center justify-center bg-gray-900">
                  <iframe
                    src="/Brouchers/WCIEC DELHI.pdf#toolbar=0"
                    className="w-full h-full border-none"
                    title="WCIEC Information Brochure"
                  />
                  
                  {/* Fallback/Overlay for mobile or non-supporting browsers */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center lg:hidden pointer-events-none">
                    <div className="bg-[#1a4db8] text-white px-4 py-2 rounded-lg text-xs font-bold pointer-events-auto">
                      Scroll to view or download below
                    </div>
                  </div>
                </div>


                {/* Simulated Viewer Footer Toolbar */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0B1F33]/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-6 text-white/70 shadow-2xl z-30 border border-white/10">
                  <div className="flex gap-4">
                    <button className="hover:text-white transition-colors"><ZoomIn size={18} /></button>
                    <button className="hover:text-white transition-colors"><ZoomOut size={18} /></button>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex items-center gap-3 font-bold text-xs">
                    <button className="hover:text-white transition-colors">1</button>
                    <span className="text-white/20">/</span>
                    <span>12</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <div className="flex gap-4">
                    <a href="/Brouchers/WCIEC DELHI.pdf" target="_blank" className="hover:text-white transition-colors" title="View Fullscreen"><Eye size={18} /></a>
                    <a href="/Brouchers/WCIEC DELHI.pdf" download className="hover:text-white transition-colors" title="Download PDF"><Download size={18} /></a>
                    <button className="hover:text-white transition-colors"><Printer size={18} /></button>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 px-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e2a613]/20 flex items-center justify-center text-[#e2a613]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div className="text-white font-bold text-sm">NMC & WHO Recognized Medical Universities Guide</div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="/Brouchers/WCIEC DELHI.pdf"
                    target="_blank"
                    className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-xl transition-all text-sm border border-white/10"
                  >
                    Open Viewer
                  </a>
                  <a
                    href="/Brouchers/WCIEC DELHI.pdf"
                    download
                    className="bg-[#1a4db8] hover:bg-[#1440a0] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-[#1a4db8]/20 text-sm"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section aria-labelledby="cta" className="py-24 bg-gradient-to-br from-[#050e1f] to-[#0B1F33] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white/70 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles size={12} className="text-[#e2a613]" aria-hidden="true" />
              Session 2025–26 Admissions Open
            </div>
            <h2
              id="cta"
              className="text-4xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Your Dream of Becoming<br />
              <span style={{ background: "linear-gradient(135deg, #3b82f6, #e2a613)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                a Doctor Starts Here
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 5000+ successful WCIEC alumni. NMC &amp; WHO recognized universities. End-to-end support from admission to FMGE clearing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-[#1a4db8] hover:bg-[#1440a0] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg shadow-[#1a4db8]/30 text-sm"
                aria-label="Apply now for MBBS abroad with WCIEC"
              >
                Apply Now <ArrowRight size={16} />
              </button>
              <a
                href="tel:+918376965627"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-bold px-10 py-4 rounded-xl transition-all text-sm"
                aria-label="Call WCIEC admissions"
              >
                <Phone size={15} /> +91 8376965627
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}