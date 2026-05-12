"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Download, 
  MessageCircle, 
  Phone, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  Clock,
  ReceiptText,
  FileCheck,
  Utensils
} from "lucide-react";

import { cn } from "@/lib/utils";

const heroImages = [
  "/images/Osh-State-University.png",
  "/images/Jalal-Abad-banner.png",
  "/images/osh-international-medical-university.png",
  "/images/Jalal-Abad-International-University-hero.png",
  "/images/Central-Asian-Medical-University.png",
];

const trustBadges = [
  { icon: Users, label: "5000+ Students Guided" },
  { icon: GraduationCap, label: "50+ Partner Universities" },
  { icon: Clock, label: "15+ Years Experience" },
  { icon: ShieldCheck, label: "Visa & Hostel Support" },
];

import { useApplyModal } from "@/context/ApplyModalContext";

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const { openModal } = useApplyModal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    neetStatus: "",
    university: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Preparation for Google Sheets Integration
    console.log("Lead captured:", formData);
    
    // Prefilled WhatsApp Message
    const message = `Hi WCIEC, I want free MBBS counselling. My name is ${formData.name}, phone ${formData.phone}, NEET status ${formData.neetStatus}, preferred university ${formData.university}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918826418950?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen lg:min-h-[850px] flex items-center pt-12 lg:pt-20 pb-16 overflow-hidden">

      {/* Background Layer: Solid Navy to prevent white flash */}
      <div className="absolute inset-0 bg-[#0B1F33] -z-30" />

      {/* Image Slider Layer */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt="WCIEC Partner University Campus"
              fill
              className="object-cover"
              priority
            />
            {/* Professional Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/95 via-[#0B1F33]/70 to-[#0B1F33]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>



      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-20 lg:py-32">
        {/* Content Section - Left Aligned to match image layout */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg">
              <div className="w-5 h-5 bg-[#00B4D8] rounded-full flex items-center justify-center">
                <Star className="text-white fill-white" size={12} />
              </div>
              <span className="text-sm font-medium tracking-tight">15+ Years of Excellence in Medical Education Guidance</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins leading-tight">
              Study MBBS Abroad <br />
              with <span className="text-[#00B4D8]">Trusted Guidance</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              WCIEC Organization helps students secure internationally recognized medical degrees with transparent fees, visa support, hostel assistance, and expert counselling.
            </p>

            {/* Features Row - Matching the image */}
            <div className="grid md:grid-cols-3 gap-6 pt-4 pb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#00B4D8] rounded-full flex items-center justify-center text-[#00B4D8] shrink-0">
                  <ReceiptText size={20} />
                </div>
                <span className="text-sm font-semibold leading-tight">Transparent <br /> Fee Structure</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#00B4D8] rounded-full flex items-center justify-center text-[#00B4D8] shrink-0">
                  <FileCheck size={20} />
                </div>
                <span className="text-sm font-semibold leading-tight">Visa & Documentation <br /> Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-[#00B4D8] rounded-full flex items-center justify-center text-[#00B4D8] shrink-0">
                  <Utensils size={20} />
                </div>
                <span className="text-sm font-semibold leading-tight">Hostel & Indian Food <br /> Assistance</span>
              </div>
            </div>


            {/* CTA Buttons - Aligned in a single line */}
            <div className="flex flex-row flex-wrap lg:flex-nowrap items-center gap-4 pt-6">
              <button onClick={openModal} className="bg-[#00B4D8] hover:bg-[#0096b4] text-white px-5 py-3 rounded-lg font-bold text-sm md:text-base flex items-center gap-2 transition-all shadow-lg shadow-[#00B4D8]/20 whitespace-nowrap">
                Apply Now <ArrowRight size={16} />
              </button>
              <a 
                href="/Brouchers/WCIEC DELHI.pdf"
                download
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-3 rounded-lg font-bold text-sm md:text-base flex items-center gap-2 transition-all whitespace-nowrap"
              >
                <Download size={16} /> Download Brochure
              </a>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Slider Indicators: Premium Pill Style */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={cn(
              "w-10 h-1.5 rounded-full transition-all duration-700",
              currentImage === i ? "bg-[#00B4D8] w-14" : "bg-white/30"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Sticky Bottom CTAs for Mobile Conversion */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden grid grid-cols-3 border-t border-gray-100 shadow-2xl">
        <a href="tel:+918826418950" className="bg-white text-navy flex flex-col items-center justify-center py-3 gap-1 border-r border-gray-50">
          <Phone size={20} />
          <span className="text-[10px] font-bold uppercase">Call</span>
        </a>
        <a href="https://wa.me/918826418950" className="bg-[#22C55E] text-white flex flex-col items-center justify-center py-3 gap-1">
          <MessageCircle size={20} />
          <span className="text-[10px] font-bold uppercase">WhatsApp</span>
        </a>
        <button 
          onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#00B4D8] text-white flex flex-col items-center justify-center py-3 gap-1"
        >
          <GraduationCap size={20} />
          <span className="text-[10px] font-bold uppercase">Apply</span>
        </button>
      </div>
    </section>
  );
}
