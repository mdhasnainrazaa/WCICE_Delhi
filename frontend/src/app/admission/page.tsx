"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  GraduationCap, 
  Globe2, 
  ShieldCheck, 
  Users, 
  Clock, 
  Plane, 
  MapPin, 
  HelpCircle,
  Eye,
  ChevronDown,
  Sparkles,
  Search,
  BookOpen,
  ClipboardCheck,
  Building2,
  PhoneCall,
  CreditCard,
  Luggage,
  UserCheck,
  Stethoscope
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useApplyModal } from "@/context/ApplyModalContext";

const steps = [
  {
    step: 1,
    title: "Free Career Counseling",
    icon: PhoneCall,
    description: "The admission journey begins with a one-on-one counseling session with our expert admission counselors.",
    points: [
      "Understand MBBS abroad opportunities",
      "Choose the right country and university",
      "Compare fee structures",
      "Discuss hostel and living expenses",
      "Understand NMC guidelines"
    ]
  },
  {
    step: 2,
    title: "Eligibility Verification",
    icon: ClipboardCheck,
    description: "Before applying, we verify whether the student meets the admission eligibility requirements.",
    points: [
      "10th & 12th Standard Marksheets",
      "PCB (Physics, Chemistry, Biology) Marks",
      "NEET Qualification Status",
      "Age Requirement (17+ years)"
    ]
  },
  {
    step: 3,
    title: "University Selection",
    icon: Building2,
    description: "Choosing the right university is one of the most important decisions in the admission process.",
    points: [
      "Budget & Fee Planning",
      "Clinical Exposure & Ranking",
      "Hostel & Indian Mess Facilities",
      "FMGE/NExT Preparation Support"
    ]
  },
  {
    step: 4,
    title: "Application Submission",
    icon: FileText,
    description: "Our admission team submits the official application on behalf of the student.",
    points: [
      "Document verification",
      "University application submission",
      "Communication with authorities"
    ]
  },
  {
    step: 5,
    title: "Admission Letter Issuance",
    icon: UserCheck,
    description: "Once the university approves the application, the student receives the official letters.",
    points: [
      "Admission Letter",
      "Invitation Letter",
      "Offer Letter"
    ]
  },
  {
    step: 6,
    title: "Initial Fee Payment",
    icon: CreditCard,
    description: "Students pay the required initial admission or seat confirmation fees to secure their admission.",
    points: [
      "Official university payment guidance",
      "Currency conversion support",
      "Payment receipt verification"
    ]
  },
  {
    step: 7,
    title: "Visa Documentation",
    icon: ShieldCheck,
    description: "Our visa support team assists students with the entire documentation and embassy process.",
    points: [
      "Visa application form",
      "Travel insurance",
      "Interview preparation",
      "Embassy requirements"
    ]
  },
  {
    step: 8,
    title: "Pre-Departure Guidance",
    icon: BookOpen,
    description: "Detailed pre-departure sessions for students and parents before they fly out.",
    points: [
      "Travel instructions",
      "University regulations",
      "Local climate & Safety",
      "Packing checklist"
    ]
  },
  {
    step: 9,
    title: "Travel Assistance",
    icon: Plane,
    description: "We assist students with flight booking and coordination for a safe journey.",
    points: [
      "Flight booking guidance",
      "Airport coordination",
      "Group travel support"
    ]
  },
  {
    step: 10,
    title: "Airport Pickup & Setup",
    icon: MapPin,
    description: "After arrival, our support team helps students settle comfortably.",
    points: [
      "Airport pickup",
      "Hostel allotment",
      "Local registration",
      "Campus orientation"
    ]
  }
];

const faqs = [
  { q: "Is NEET compulsory for MBBS abroad?", a: "Yes, NEET qualification is mandatory for Indian students who want to pursue MBBS abroad and practice medicine in India in the future." },
  { q: "Is MBBS abroad degree valid in India?", a: "Yes, degrees from NMC-approved universities are valid after fulfilling required regulations like qualifying the screening test." },
  { q: "What is the duration of MBBS abroad?", a: "Generally, the duration is 5 to 6 years, including a mandatory clinical internship." },
  { q: "Is hostel compulsory?", a: "Most universities recommend hostel accommodation for international students to ensure safety and easy access to campus facilities." },
  { q: "Are Indian food facilities available?", a: "Yes, many top universities in Kyrgyzstan and other regions have Indian mess facilities providing vegetarian and non-vegetarian food." },
  { q: "Can parents visit students abroad?", a: "Yes, parents can visit students by obtaining a visitor visa, subject to embassy rules and university policies." }
];

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

export default function AdmissionPage() {
  const { openModal } = useApplyModal();

  return (
    <main className="bg-[#F8FAFC] min-h-screen font-inter selection:bg-[#2563EB] selection:text-white overflow-x-hidden w-full">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000" 
            alt="Students studying" 
            fill 
            className="object-cover opacity-[0.05] grayscale" 
            priority 
          />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0EA5E9]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-6 border border-[#2563EB]/20">
              <Sparkles size={14} /> Admissions Open 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0F172A] leading-[1.1] mb-6">
              MBBS Admission <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#14B8A6]">Process Abroad 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto mb-10 leading-relaxed">
              Begin your medical journey with expert guidance. At WCIEC, we help students achieve their dream of studying MBBS abroad through a smooth, transparent, and fully guided process.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={openModal}
                className="bg-[#2563EB] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#1D4ED8] shadow-xl shadow-[#2563EB]/20 transition-all flex items-center gap-2"
              >
                Apply for Admission <ArrowRight size={20} />
              </button>
              <a 
                href="tel:+918586873357"
                className="bg-white text-[#0F172A] border border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-2"
              >
                <PhoneCall size={20} /> Free Counseling
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ WHY CHOOSE SECTION */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8">Why Choose <span className="text-[#2563EB]">MBBS Abroad?</span></h2>
              <p className="text-[#6B7280] leading-relaxed mb-8 text-lg">
                Studying MBBS abroad has become one of the best options for Indian students due to high-quality education, globally recognized degrees, and international exposure.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Affordable tuition fees",
                  "No donation fees",
                  "Globally recognized",
                  "Modern infrastructure",
                  "International exposure",
                  "English medium",
                  "NMC & WHO Approved",
                  "Better clinical exposure"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#14B8A6] shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200" 
                alt="Medical University" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-white">
                  <div className="flex items-center gap-4 mb-2">
                    <Stethoscope size={24} className="text-[#14B8A6]" />
                    <span className="font-bold">Global Recognition</span>
                  </div>
                  <p className="text-sm text-white/80">Degrees approved by NMC, WHO, and other international bodies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ STEP BY STEP PROCESS */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#2563EB] font-bold uppercase tracking-wider text-sm">Step-by-Step Guide</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mt-4">Complete Admission Process</h2>
            <p className="text-gray-500 mt-6 text-lg">We simplify your journey from university selection to airport pickup.</p>
          </div>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className={`w-full lg:w-[45%] ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 group relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563EB]/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
                      <div className={`w-14 h-14 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mb-6 ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                        <step.icon size={28} className="text-[#2563EB]" />
                      </div>
                      <div className="text-[#2563EB] font-bold text-sm mb-2 uppercase tracking-widest">Step {step.step}</div>
                      <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{step.title}</h3>
                      <p className="text-gray-500 mb-6 text-sm leading-relaxed">{step.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                        {step.points.map((point, i) => (
                          <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 px-3 py-1.5 rounded-lg group-hover:bg-[#2563EB]/10 group-hover:text-[#2563EB] transition-colors">
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-[10%] justify-center relative z-10">
                    <div className="w-10 h-10 bg-[#2563EB] rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ ELIGIBILITY & DOCUMENTS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0F172A] rounded-[32px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563EB]/20 rounded-bl-full -z-10" />
              <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                <ClipboardCheck size={32} className="text-[#14B8A6]" /> Basic Eligibility
              </h2>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-[#14B8A6] font-bold uppercase tracking-wider text-sm">Academic Qualification</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full" /> 10th & 12th Standard Complete
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full" /> General: Min 50% in PCB
                    </li>
                    <li className="flex items-center gap-3 text-white/80">
                      <div className="w-1.5 h-1.5 bg-[#14B8A6] rounded-full" /> Reserved: Min 40% in PCB
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#14B8A6] font-bold uppercase tracking-wider text-sm">NEET Qualification</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    NEET qualification is mandatory for Indian students who want to pursue MBBS abroad and practice medicine in India in the future.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[#14B8A6] font-bold uppercase tracking-wider text-sm">Age Requirement</h4>
                  <p className="text-white/80 text-sm">Students must be at least 17 years old at the time of admission.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F8FAFC] border border-gray-100 rounded-[32px] p-8 md:p-12 shadow-sm"
            >
              <h2 className="text-3xl font-bold text-[#0F172A] mb-10 flex items-center gap-4">
                <FileText size={32} className="text-[#2563EB]" /> Documents Required
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-bold text-[#0F172A] border-l-4 border-[#2563EB] pl-3">Academic</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["10th Marksheet", "12th Marksheet", "Leaving Certificate", "Migration Certificate"].map((doc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#14B8A6]" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold text-[#0F172A] border-l-4 border-[#2563EB] pl-3">Identity</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Valid Passport", "Aadhaar Card", "PAN Card (Optional)", "NEET Scorecard"].map((doc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#14B8A6]" /> {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-2 space-y-6">
                  <h4 className="font-bold text-[#0F172A] border-l-4 border-[#2563EB] pl-3">Medical</h4>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                    {["Passport-size Photos", "Birth Certificate", "Medical Fitness Certificate", "HIV Test Report"].map((doc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#14B8A6]" /> {doc}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5️⃣ ADVANTAGES OF APPLYING THROUGH WCIEC */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Advantages of Applying Through WCIEC</h2>
            <p className="text-gray-500 mt-4">We ensure a safe and successful career path for every student.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Trusted Guidance", desc: "Years of experience in MBBS abroad admissions.", icon: ShieldCheck },
              { title: "Transparent Process", desc: "No hidden charges or false promises.", icon: Eye },
              { title: "Direct Admission", desc: "Official assistance from recognized universities.", icon: Building2 },
              { title: "Complete Visa Support", desc: "End-to-end visa documentation guidance.", icon: FileText },
              { title: "Affordable Structure", desc: "Budget-friendly universities with quality education.", icon: CreditCard },
              { title: "Post-Arrival Support", desc: "Continuous support after students reach university.", icon: UserCheck }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[24px] border border-gray-100 bg-[#F8FAFC] hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                  <item.icon size={28} className="text-[#2563EB] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ FAQ SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-4">Common queries about MBBS admissions abroad.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} item={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ FINAL CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[32px] p-8 md:p-10 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">Your Dream of Becoming a <br /> <span className="text-[#2563EB]">Doctor Starts Here.</span></h2>
              <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed max-w-2xl mx-auto">
                Our expert counselors are ready to help you choose the best medical university according to your budget, academic profile, and career goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={openModal}
                  className="bg-[#2563EB] text-white px-8 py-3 rounded-xl font-bold text-base hover:bg-[#1D4ED8] shadow-2xl shadow-[#2563EB]/40 transition-all hover:scale-105 active:scale-95"
                >
                  Start Your Application Now
                </button>
              </div>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                <span>Free Counseling</span>
                <span>University Selection</span>
                <span>Visa Assistance</span>
                <span>Post-Arrival Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
