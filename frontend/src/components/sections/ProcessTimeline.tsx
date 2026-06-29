"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  ClipboardCheck, 
  FileUp, 
  School, 
  MailOpen, 
  Contact, 
  PlaneTakeoff,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Free Counselling",
    description: "Talk to our experts and get guidance",
    icon: MessageSquare,
    color: "bg-blue-50 text-blue-600 border-blue-100 shadow-blue-500/10"
  },
  {
    id: "02",
    title: "Eligibility Check",
    description: "We evaluate your academic profile",
    icon: ClipboardCheck,
    color: "bg-purple-50 text-purple-600 border-purple-100 shadow-purple-500/10"
  },
  {
    id: "03",
    title: "Document Submission",
    description: "Submit required documents",
    icon: FileUp,
    color: "bg-amber-50 text-amber-600 border-amber-100 shadow-amber-500/10"
  },
  {
    id: "04",
    title: "University Application",
    description: "We apply to your chosen university",
    icon: School,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100 shadow-indigo-500/10"
  },
  {
    id: "05",
    title: "Admission Letter",
    description: "Receive admission letter from university",
    icon: MailOpen,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-500/10"
  },
  {
    id: "06",
    title: "Visa Processing",
    description: "Complete visa formalities",
    icon: Contact,
    color: "bg-rose-50 text-rose-600 border-rose-100 shadow-rose-500/10"
  },
  {
    id: "07",
    title: "Travel & Departure Support",
    description: "We assist you until you reach campus",
    icon: PlaneTakeoff,
    color: "bg-sky-50 text-sky-600 border-sky-100 shadow-sky-500/10"
  }
];

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-[2px] w-8 bg-medical rounded-full" />
              <h2 className="text-3xl md:text-5xl font-bold text-navy font-poppins tracking-tight">Our Simple Admission Process</h2>
              <div className="h-[2px] w-8 bg-medical rounded-full" />
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 font-medium">Your step-by-step guide to securing a seat in your dream medical university abroad.</p>
          </motion.div>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal Dotted Connecting Lines */}
          <div className="absolute top-[84px] left-[8%] right-[8%] border-t-2 border-dotted border-gray-100 -z-0" />
          
          <div className="flex justify-between items-start relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group px-2 text-center">
                {/* Step Number */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-300 font-black text-xl mb-3 group-hover:text-medical transition-colors duration-300"
                >
                  {step.id}
                </motion.div>
                
                {/* Icon Circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    delay: i * 0.1 
                  }}
                  className={`w-20 h-20 rounded-3xl border-2 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg ${step.color}`}
                >
                  <step.icon size={32} />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <h3 className="font-bold text-navy text-base md:text-lg mb-2 leading-tight group-hover:text-medical transition-colors duration-300">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium max-w-[150px] mx-auto">{step.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile/Tablet */}
        <div className="lg:hidden space-y-12 relative">
          <div className="absolute left-8 top-4 bottom-4 border-l-2 border-dotted border-gray-100 ml-[-1px]" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-8 relative z-10 group"
            >
              <div className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-active:scale-95 ${step.color}`}>
                <step.icon size={28} />
              </div>
              <div className="pt-2">
                <div className="text-gray-400 font-bold text-xs mb-1">{step.id}</div>
                <h3 className="text-xl font-bold text-navy mb-1 group-hover:text-medical transition-colors duration-300">{step.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
