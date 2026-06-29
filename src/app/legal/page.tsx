"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  FileText, 
  Scale, 
  AlertTriangle, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Lock,
  Eye,
  Globe,
  Database,
  UserCheck,
  ChevronDown,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const sections = [
  { id: "privacy", label: "Privacy Policy", icon: ShieldCheck },
  { id: "refund", label: "Refund Policy", icon: Scale },
  { id: "terms", label: "Terms & Conditions", icon: FileText },
  { id: "disclaimer", label: "Disclaimer", icon: AlertTriangle },
  { id: "faq", label: "Legal FAQ", icon: MessageCircle },
  { id: "contact", label: "Contact Legal", icon: Mail },
];

const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const FAQItem = ({ item, index }: { item: { q: string, a: string }, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-all group"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between gap-4"
      >
        <h4 className="font-bold text-[#0F172A] flex items-center gap-3">
          <span className="w-6 h-6 bg-[#2563EB]/10 rounded-full flex items-center justify-center text-[10px] text-[#2563EB] shrink-0">Q</span>
          {item.q}
        </h4>
        <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed pl-15">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState("privacy");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Simple scrollspy
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const currentSection = sectionElements.find(el => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      if (currentSection) setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-inter selection:bg-[#2563EB] selection:text-white overflow-x-hidden w-full">
      {/* Reading Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-gray-200">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#14B8A6]/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-6 border border-[#2563EB]/20">
              <ShieldCheck size={14} /> Official Legal Documentation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight mb-6">
              Privacy Policy & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6]">Legal Information</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto mb-10 leading-relaxed">
              Your data privacy, transparency, and trust are the cornerstones of our service. 
              We are committed to protecting your personal information and ensuring a secure experience.
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {[
                { label: "Secure Data", icon: Lock },
                { label: "Confidentiality", icon: Eye },
                { label: "International Support", icon: Globe },
                { label: "Trusted Consultancy", icon: UserCheck }
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-semibold text-[#0F172A] bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                  <badge.icon size={16} className="text-[#14B8A6]" />
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12">
                 {/* 3️⃣ MAIN CONTENT AREA */}
          <div className="lg:col-span-10 lg:col-start-2 space-y-16">
            
            {/* UNIFIED TABLE OF CONTENTS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 sm:p-8 md:p-10 rounded-[32px] shadow-sm border border-gray-100"
            >
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-2">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-bold transition-all ${
                      activeSection === section.id 
                      ? "bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/20" 
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <section.icon size={20} />
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
            
            {/* PRIVACY POLICY */}
            <section id="privacy" className="scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/5 rounded-bl-full -z-10" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={24} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#0F172A]">Privacy Policy</h2>
                    <p className="text-sm text-gray-400 font-medium">Last Updated: May 13, 2026</p>
                  </div>
                </div>

                <div className="prose prose-blue max-w-none space-y-10">
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Welcome to WCIEC Consultancy. Your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, services, admission counseling platform, and communication channels.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-[#2563EB]/30 transition-all">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                        <Database size={20} className="text-[#2563EB]" />
                      </div>
                      <h4 className="font-bold text-[#0F172A] mb-3">1. Information We Collect</h4>
                      <ul className="space-y-2">
                        {["Full Name", "Phone & Email", "Academic Docs", "Passport Details"].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={14} className="text-[#14B8A6]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-[#2563EB]/30 transition-all">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                        <ArrowRight size={20} className="text-[#2563EB]" />
                      </div>
                      <h4 className="font-bold text-[#0F172A] mb-3">2. How We Use Info</h4>
                      <ul className="space-y-2">
                        {["Admission Guidance", "Visa Assistance", "Univ Processing", "Updates & Follow-ups"].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={14} className="text-[#14B8A6]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
                      <Lock size={20} className="text-[#14B8A6]" /> 3. Data Protection
                    </h3>
                    <p className="text-gray-600">
                      We do not sell or rent personal information. Documents such as passports and certificates are handled with enterprise-grade security protocols. Information is only shared with authorized partners like universities and visa authorities.
                    </p>
                    
                    <div className="bg-[#2563EB]/5 p-6 rounded-2xl border border-[#2563EB]/10">
                      <h4 className="font-bold text-[#2563EB] mb-2">Communication Consent</h4>
                      <p className="text-sm text-gray-600">
                        By submitting forms, you consent to receive admission updates via Calls, SMS, WhatsApp, and Emails from our official channels.
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { t: "Cookies & Analytics", d: "Google Analytics & CRM" },
                      { t: "Data Retention", d: "Until admission support ends" },
                      { t: "User Rights", d: "Access, Correct, Delete" }
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                        <h4 className="font-bold text-sm text-[#0F172A] mb-1">{item.t}</h4>
                        <p className="text-xs text-gray-500">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            {/* REFUND POLICY */}
            <section id="refund" className="scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#14B8A6]/5 rounded-bl-full -z-10" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center">
                    <Scale size={24} className="text-[#14B8A6]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0F172A]">Refund Policy</h2>
                </div>

                <div className="space-y-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                      <div className="space-y-4">
                        <h4 className="font-bold text-[#0F172A] flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-green-500" /> Counseling Fees
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Registration and initial counseling fees are generally non-refundable as they cover administrative overheads. University-specific fee refunds are subject to individual university policies.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-bold text-[#0F172A] flex items-center gap-2">
                          <AlertTriangle size={18} className="text-orange-500" /> Visa Rejection
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Refund eligibility in case of visa rejection depends strictly on embassy rules and university withdrawal clauses.
                        </p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-[#0F172A] mb-4 text-sm uppercase tracking-wider text-gray-400">Processing Info</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Clock size={16} className="text-[#2563EB]" />
                          <div>
                            <p className="text-xs font-bold text-gray-400">Timeline</p>
                            <p className="text-sm font-bold text-[#0F172A]">15–60 Working Days</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Scale size={16} className="text-[#2563EB]" />
                          <div>
                            <p className="text-xs font-bold text-gray-400">Deductions</p>
                            <p className="text-sm font-bold text-[#0F172A]">Bank & Currency</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                    <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                      <AlertTriangle size={18} /> Non-Refundable Items
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {["Application Fees", "Visa Charges", "Documentation", "Consultancy"].map((item, i) => (
                        <div key={i} className="text-xs font-bold text-red-600/70 bg-white/50 px-3 py-1.5 rounded-lg border border-red-200/50">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* TERMS & CONDITIONS */}
            <section id="terms" className="scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0F172A]/5 rounded-bl-full -z-10" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#0F172A]/10 rounded-2xl flex items-center justify-center">
                    <FileText size={24} className="text-[#0F172A]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0F172A]">Terms & Conditions</h2>
                </div>

                <div className="space-y-8">
                  {[
                    { t: "Consultancy Role", d: "WCIEC provides admission guidance, university selection support, and visa documentation assistance. We act as facilitators between students and international medical universities." },
                    { t: "Admission Criteria", d: "Admissions depend on university eligibility, NEET qualification status, document authenticity, and embassy approval. Decisions made by universities are final." },
                    { t: "Student Responsibility", d: "Students must provide genuine academic and identity documents. Failure to follow deadlines or misrepresentation may lead to application cancellation without refund." },
                    { t: "Limitation of Liability", d: "WCIEC is not responsible for university policy changes, embassy delays, or travel disruptions. Our services follow Indian jurisdiction laws." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="text-2xl font-black text-gray-200 tabular-nums">0{i+1}</div>
                      <div>
                        <h4 className="font-bold text-[#0F172A] mb-2">{item.t}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* DISCLAIMER */}
            <section id="disclaimer" className="scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0F172A] rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden text-white"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <AlertTriangle size={24} className="text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Important Disclaimer</h2>
                </div>

                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    WCIEC Consultancy provides educational counseling for international medical universities. We are not a university, embassy, or government authority.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "University logos and trademarks belong to their respective owners.",
                      "Admission and visa approval are subject to university and government decisions.",
                      "Fees, hostels, and regulations may change without prior notice by universities.",
                      "NEET qualification is mandatory for Indian students to practice in India post-graduation."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <AlertTriangle size={16} className="text-orange-400 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq" className="scroll-mt-32">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center">
                    <MessageCircle size={24} className="text-[#2563EB]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      q: "Is my personal information safe with WCIEC?",
                      a: "Yes, we use enterprise-grade encryption and secure CRM systems to protect student data. Your sensitive documents like passports are only accessible by authorized senior counselors."
                    },
                    {
                      q: "Do you share my documents with third parties?",
                      a: "We only share your information with official partners necessary for your admission: your chosen university, the embassy for visa processing, and travel/insurance providers."
                    },
                    {
                      q: "Can I request to delete my data?",
                      a: "Absolutely. You can email us at wciec3182@gmail.com at any time to request the deletion or correction of your personal information from our records."
                    },
                    {
                      q: "What happens if I don't proceed with admission?",
                      a: "If you choose not to proceed, your information is archived for internal records and counseling support for a limited period, then securely purged according to our data retention policy."
                    }
                  ].map((item, i) => (
                    <FAQItem key={i} item={item} index={i} />
                  ))}
                </div>
              </div>
            </section>

            {/* 📞 CONTACT SECTION */}
            <section id="contact" className="scroll-mt-32">
              <div className="bg-gradient-to-r from-[#2563EB] to-[#14B8A6] rounded-[24px] md:rounded-[32px] p-6 sm:p-10 md:p-16 text-white text-center md:text-left shadow-xl shadow-[#2563EB]/20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="relative z-10 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Questions about <br /> our policies?</h2>
                  <p className="text-white/80 max-w-sm">Our legal and compliance team is here to help you understand your rights and responsibilities.</p>
                  <div className="flex flex-col gap-4">
                    <a 
                      href="mailto:wciec3182@gmail.com"
                      className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors"
                    >
                      <Mail size={18} /> wciec3182@gmail.com
                    </a>
                    <a 
                      href="https://www.google.com/maps/place/WCIEC/@28.6306198,77.2750274,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce352d10d6f4f:0x1e9382f6a04d3f05!8m2!3d28.6306151!4d77.2776023!16s%2Fg%2F11xdb9lqvm?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors"
                    >
                      <MapPin size={18} /> Shakarpur, New Delhi, India
                    </a>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
                  <a 
                    href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." 
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                  >
                    <WhatsappIcon size={20} /> WhatsApp Support
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>

    </main>
  );
}
