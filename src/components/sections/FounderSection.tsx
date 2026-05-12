"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ShieldCheck, ReceiptText, Users, Clock } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-20 bg-[#f8f9fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 grid lg:grid-cols-12 items-stretch">
          {/* Left Side: Dark Profile Card */}
          <div className="lg:col-span-5 bg-[#0B1F33] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 mb-8 z-10"
            >
              <Image
                src="/images/director image.png"
                alt="Dr. Firoz Khan - Founder & Director of WCIEC"
                fill
                className="object-cover object-top"
              />
            </motion.div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Dr. Firoz Khan</h3>
              <p className="text-[#e2a613] font-bold text-sm uppercase tracking-widest">Founder & Director, WCIEC</p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1a4db8]/20 rounded-full -ml-16 -mb-16 blur-3xl" />
            <Quote className="absolute top-10 right-10 text-white/5" size={100} />
          </div>

          {/* Right Side: Message Content */}
          <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-[#1a4db8] font-black uppercase tracking-widest text-[11px] mb-6 bg-[#1a4db8]/8 px-3 py-1 rounded-full">
                Leadership Message
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1F33] mb-8 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
                A Vision for Global <br />
                <span className="text-gradient">Medical Excellence</span>
              </h2>
              
              <div className="relative mb-10 border-l-4 border-[#1a4db8]/20 pl-6">
                <p className="text-lg md:text-xl text-[#0B1F33]/80 italic leading-relaxed font-medium">
                  "WCIEC has spent over 15 years helping students secure internationally recognized MBBS degrees with transparency, integrity, and expert guidance. Our mission is to bridge the gap between Indian medical aspirants and quality global education."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Ethical Counselling", icon: ShieldCheck },
                  { label: "Transparent Fees", icon: ReceiptText },
                  { label: "Student Focus", icon: Users },
                  { label: "Long-term Support", icon: Clock }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1a4db8]/10 flex items-center justify-center text-[#1a4db8]">
                      <item.icon size={16} />
                    </div>
                    <span className="text-sm font-bold text-[#0B1F33]/70">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#e2a613]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0B1F33]/40">15+ Years of Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>


  );
}
