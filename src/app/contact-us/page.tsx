"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, 
  ShieldCheck, CheckCircle2, Building2, Users, GraduationCap, 
  ChevronDown, Sparkles, Send, Globe2, Plane
} from "lucide-react";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";

export default function ContactUsPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen font-inter selection:bg-[#2563EB] selection:text-white pb-20">
      
      {/* 1️⃣ HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0EA5E9]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm font-medium text-[#64748B]" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-[#2563EB] transition-colors">Home</Link></li>
              <li className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-[#0F172A] font-semibold">Contact Us</span>
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 text-[#0EA5E9] px-4 py-2 rounded-full text-sm font-bold mb-6 border border-[#0EA5E9]/20">
                <Sparkles size={16} /> 24/7 Expert Counseling
              </div>
              <h1 className="text-5xl md:text-[64px] font-bold text-[#0F172A] leading-[1.1] mb-6 tracking-tight">
                Let’s Start Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">MBBS Journey Abroad</span>
              </h1>
              <p className="text-lg text-[#64748B] mb-10 leading-relaxed max-w-xl">
                Connect with our expert medical education counselors to get guaranteed admission, visa assistance, and complete end-to-end support for your medical studies overseas.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="tel:+918826418950" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-[#2563EB]/20 flex items-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
                <a href="https://wa.me/918826418950" target="_blank" rel="noreferrer" className="bg-white hover:bg-[#F8FAFC] text-[#25D366] border border-[#E2E8F0] px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-sm flex items-center gap-2">
                  <MessageCircle size={20} /> WhatsApp Counseling
                </a>
              </div>

              <div className="flex flex-wrap gap-6 items-center">
                {[
                  { val: "5000+", label: "Students Guided" },
                  { val: "50+", label: "Universities" },
                  { val: "100%", label: "Visa Support" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-[#0EA5E9]" />
                    <span className="font-bold text-[#0F172A]">{stat.val}</span>
                    <span className="text-sm font-medium text-[#64748B]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5">
              <div className="bg-white/60 backdrop-blur-2xl border border-white p-8 rounded-[32px] shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0EA5E9]/20 to-transparent rounded-full blur-2xl -z-10" />
                <h3 className="text-2xl font-bold text-[#0F172A] mb-8">Head Office</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} className="text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#64748B] mb-1">Phone Number</div>
                      <a href="tel:+918826418950" className="text-lg font-bold text-[#0F172A] hover:text-[#2563EB] transition-colors">+91 88264 18950</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#06B6D4]/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-[#06B6D4]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#64748B] mb-1">Email Address</div>
                      <a href="mailto:info@wciec.org" className="text-lg font-bold text-[#0F172A] hover:text-[#06B6D4] transition-colors">info@wciec.org</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-[#0EA5E9]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#64748B] mb-1">Office Address</div>
                      <div className="text-base font-semibold text-[#0F172A] leading-relaxed">
                        Sector 62, Noida,<br />
                        Delhi NCR, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock size={24} className="text-[#8B5CF6]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#64748B] mb-1">Working Hours</div>
                      <div className="text-base font-semibold text-[#0F172A]">Mon - Sat: 10:00 AM - 7:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ QUICK CONTACT CARDS */}
      <section className="py-12 bg-[#F8FAFC] relative -mt-10 z-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Call Us", desc: "Speak directly with experts", icon: Phone, color: "text-[#2563EB]", bg: "bg-[#2563EB]/10", border: "hover:border-[#2563EB]/30", link: "tel:+918826418950", linkText: "Call Now" },
              { title: "WhatsApp", desc: "Chat for quick queries", icon: MessageCircle, color: "text-[#25D366]", bg: "bg-[#25D366]/10", border: "hover:border-[#25D366]/30", link: "https://wa.me/918826418950", linkText: "Message" },
              { title: "Email Us", desc: "For detailed information", icon: Mail, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10", border: "hover:border-[#06B6D4]/30", link: "mailto:info@wciec.org", linkText: "Send Email" },
              { title: "Visit Office", desc: "Face-to-face counseling", icon: MapPin, color: "text-[#8B5CF6]", bg: "bg-[#8B5CF6]/10", border: "hover:border-[#8B5CF6]/30", link: "#map", linkText: "Get Directions" }
            ].map((card, i) => (
              <motion.a 
                href={card.link}
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white border border-[#E2E8F0] p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all duration-300 group ${card.border} flex flex-col items-center text-center`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${card.bg}`}>
                  <card.icon size={32} className={card.color} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{card.title}</h3>
                <p className="text-[#64748B] text-sm mb-6">{card.desc}</p>
                <span className={`font-bold text-sm flex items-center gap-2 ${card.color}`}>
                  {card.linkText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ CONTACT FORM & MAP */}
      <section className="py-24 bg-white" id="map">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 text-[#2563EB] bg-[#2563EB]/10">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Book Your Free Counseling Session</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[32px] p-8 md:p-12 shadow-sm">
              <GlobalApplyForm buttonText="Book Free Counseling" />
            </div>

            {/* Map and Info */}
            <div className="space-y-8">
              <div className="bg-white border border-[#E2E8F0] rounded-[32px] overflow-hidden shadow-sm aspect-[4/3] md:aspect-auto md:h-[360px] relative group">
                {/* Embedded Map Replacement Image for UI Demo */}
                <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200" alt="Map Location" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#0F172A]/10" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
                  <h4 className="font-bold text-[#0F172A] text-lg mb-1">Noida Office</h4>
                  <p className="text-[#64748B] text-sm">Sector 62, Noida, Delhi NCR, India</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#2563EB] font-bold text-sm mt-3">
                    Get Directions <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-[32px] p-8 md:p-10 text-white relative overflow-hidden flex items-center justify-between">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0EA5E9]/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">Need Immediate Help?</h4>
                  <p className="text-white/70 text-sm max-w-xs">Drop your number and our expert counselor will call you within 5 minutes.</p>
                </div>
                <button className="bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg shrink-0 relative z-10 hidden sm:block">
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ TRUST SECTION */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "5000+", label: "Students Enrolled", icon: Users },
              { val: "50+", label: "Global Universities", icon: Building2 },
              { val: "100%", label: "Visa Success Rate", icon: Plane },
              { val: "24/7", label: "Student Support", icon: ShieldCheck }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#E2E8F0] p-8 rounded-[24px] text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={28} className="text-[#2563EB]" />
                </div>
                <div className="text-3xl font-black text-[#0F172A] mb-1">{stat.val}</div>
                <div className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 text-[#06B6D4] bg-[#06B6D4]/10">Got Questions?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                {[
                  { q: "How do I apply for MBBS abroad?", a: "The process is simple: Submit your 10th, 12th, and NEET scorecard. Our counselors will help you choose the best university and process your admission letter." },
                  { q: "Is NEET required for studying abroad?", a: "Yes, qualifying NEET is mandatory for Indian students if they wish to practice in India after completing their MBBS abroad." },
                  { q: "Which country is best for MBBS?", a: "Kyrgyzstan, Kazakhstan, Russia, and Georgia are currently the top destinations due to affordable fees, English medium curriculum, and high FMGE passing rates." },
                  { q: "Do you provide visa support?", a: "Yes, WCIEC provides 100% visa assistance, document apostille, translation, and embassy interview preparation." }
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
            <div className="relative aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl hidden lg:block">
              <Image src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200" alt="Medical Consultation" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent flex items-end p-10">
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-2xl text-white">
                  <div className="flex items-center gap-4 mb-2">
                    <Globe2 size={24} className="text-[#0EA5E9]" />
                    <span className="font-bold text-lg">WCIEC Global Support</span>
                  </div>
                  <p className="text-white/80 text-sm">We ensure a seamless transition for students traveling abroad for their medical education.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ FINAL CTA SECTION */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-[40px] p-12 lg:p-16 text-center lg:text-left text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Still Confused About MBBS Abroad?</h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed">
                Don't make a decision alone. Talk to our senior educational counselors, get a free profile evaluation, and find the perfect medical university matching your budget and NEET score.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="#map" className="bg-white text-[#2563EB] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 shadow-xl transition-all">
                  Schedule Free Counseling
                </a>
                <a href="tel:+918826418950" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all flex items-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
              </div>
            </div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 shrink-0 hidden md:block">
              <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800" alt="Smiling Doctor" fill className="object-cover rounded-full border-8 border-white/20 shadow-2xl z-10" />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl transform scale-110" />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
