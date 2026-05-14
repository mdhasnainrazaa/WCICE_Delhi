"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  Globe2, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  MessageCircle, 
  Phone, 
  ChevronRight,
  Lock,
  MapPin,
  User,
  Mail,
  ChevronDown,
  Plane,
  FileText,
  Utensils,
  Headset,
  BookOpen,
  Building2
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";
import { cn } from "@/lib/utils";
import Image from "next/image";

const stats = [
  { label: "Students Guided", value: "5000+", icon: Users },
  { label: "Partner Universities", value: "50+", icon: GraduationCap },
  { label: "Countries Worldwide", value: "8+", icon: Globe2 },
  { label: "Years of Experience", value: "15+", icon: Award },
];

const smallFeatures = [
  { label: "Free Expert Counselling", icon: MessageCircle },
  { label: "Detailed Fee Structure", icon: FileText },
  { label: "University & Hostel Information", icon: Building2 },
  { label: "End-to-End Admission Support", icon: Headset },
];

const bottomStripFeatures = [
  { label: "100% Genuine Universities", icon: ShieldCheck },
  { label: "Transparent Fee Structure", icon: WalletIcon },
  { label: "Personalized Support", icon: Users },
  { label: "Visa & Travel Assistance", icon: FileText },
  { label: "Safe Hostel & Indian Food", icon: Utensils },
];

function WalletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

const trustBadges = [
  "Transparent Process",
  "No Hidden Charges",
  "NMC & WHO Recognized",
  "Visa & Documentation Support"
];

export function CounsellingSection() {
  return (
    <section className="relative py-6 overflow-hidden" id="counselling">
      {/* Background with University Image and Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Osh-State-University.png"
          alt="University Background"
          fill
          className="object-cover opacity-10 grayscale-[50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 via-blue-50/90 to-white/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Content matching the new image */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1F33] leading-[1.1] mb-4 font-poppins">
                Your Dream of Becoming Doctor <span className="text-[#00B4D8]">Starts Here!</span>
              </h2>

              <p className="text-gray-600 font-medium leading-relaxed max-w-lg text-sm mb-8">
                WCIEC Organization helps students secure admission in top international medical universities with transparency, expert support, and complete guidance.
              </p>

              {/* Added Features Card based on Image Reference */}
              <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 p-5 max-w-xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                  {smallFeatures.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col items-center text-center px-1 ${idx > 1 ? 'pt-4 md:pt-0' : ''}`}>
                      <div className="w-10 h-10 rounded-full bg-[#00B4D8]/10 flex items-center justify-center text-[#00B4D8] mb-3">
                        <feature.icon size={18} strokeWidth={2.5} />
                      </div>
                      <span className="text-[11px] font-bold text-navy leading-snug">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form Card (Narrower and Sharper) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-50 overflow-hidden max-w-md mx-auto lg:ml-auto"
            >
              <div className="p-5 md:p-6">
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00B4D8]/5 flex items-center justify-center text-[#00B4D8] border border-[#00B4D8]/10">
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-navy font-poppins leading-none mb-1">Free Counselling</h3>
                      <p className="text-gray-400 text-[9px] font-medium uppercase tracking-wider">Expert guidance by WCIEC</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 bg-[#F2FAF5] text-[#22C55E] px-2 py-1 rounded-md text-[8px] font-bold uppercase tracking-wider border border-[#E8F5EE]">
                    <Lock size={10} /> SECURE
                  </div>
                </div>

                <div className="pt-2">
                  <GlobalApplyForm buttonText="Get Free Counselling" />
                </div>

                {/* WhatsApp Mini Section */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#22C55E] flex items-center justify-center text-white">
                      <MessageCircle size={18} />
                    </div>
                    <div className="text-[9px] font-bold text-navy uppercase tracking-wide">Instant WhatsApp Help</div>
                  </div>
                  <a 
                    href="https://wa.me/918826418950" 
                    target="_blank"
                    className="bg-[#22C55E]/10 hover:bg-[#22C55E]/20 text-[#22C55E] px-3 py-1.5 rounded-md font-bold text-[9px] flex items-center gap-1.5 transition-all"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Dark Bottom Strip */}
      <div className="bg-[#0B1F33] py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {bottomStripFeatures.map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-medical border border-white/10 group-hover:bg-medical group-hover:text-white transition-all">
                  <item.icon size={20} />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white/90 leading-tight uppercase tracking-wide">
                  {item.label}
                </span>
                {i < 4 && <div className="hidden lg:block h-8 w-[1px] bg-white/10 ml-auto" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
