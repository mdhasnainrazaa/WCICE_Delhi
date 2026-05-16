"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Handshake, 
  Users, 
  Headset, 
  Wallet, 
  PlaneLanding,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    title: "100% Transparent Process",
    description: "No hidden charges or misleading information. Complete transparency in fees, admission criteria, and process.",
    icon: ShieldCheck,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Direct University Partnerships",
    description: "Official tie-ups with 50+ NMC/WHO approved medical universities across multiple countries.",
    icon: Handshake,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "5000+ Successful Students",
    description: "Join our community of successful doctors who began their medical career with WCIEC.",
    icon: Users,
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Dedicated Support Team",
    description: "24/7 student support during and after admission, including in-country assistance.",
    icon: Headset,
    color: "from-rose-500 to-rose-600"
  },
  {
    title: "Most Affordable Options",
    description: "MBBS programs starting from ₹15-25 lakhs for the entire course with flexible payment options.",
    icon: Wallet,
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Post-Admission Assistance",
    description: "Complete assistance with travel, accommodation, forex, and local registration. From airport pickup to hostel allocation.",
    icon: PlaneLanding,
    color: "from-sky-500 to-sky-600"
  }
];

import { useApplyModal } from "@/context/ApplyModalContext";

export function WhyChooseUs() {
  const { openModal } = useApplyModal();
  
  return (
    <section className="py-24 bg-background-soft relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical/5 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-poppins">Why <span className="text-gradient">WCIEC Organization?</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Your trusted partner in making global medical education accessible, transparent, and successful.</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2.5rem] p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_30px_60px_-15px_rgba(0,180,216,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[4rem]`} />

              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-medical transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed font-medium mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 text-medical font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  <CheckCircle2 size={16} />
                  <span>Learn More</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Banner for Post-Admission Extra Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-navy rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[400px] h-full bg-gradient-to-l from-medical/20 to-transparent" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="max-w-2xl">
              <h4 className="text-2xl md:text-3xl font-bold mb-4">Complete Peace of Mind, From Home to Campus</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                From airport pickup to hostel allocation and local SIM card, we ensure a smooth transition to your new country. Our dedicated support team stays with you throughout your journey.
              </p>
            </div>
            <button 
              onClick={openModal}
              className="bg-medical hover:bg-medical/90 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-medical/20 whitespace-nowrap"
            >
              Enquire Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
