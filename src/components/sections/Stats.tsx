"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Users, GraduationCap, Globe2, Award, Zap } from "lucide-react";

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime > 10 ? incrementTime : 10);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { 
    label: "Successful Students", 
    value: "5000+", 
    icon: Users, 
    description: "Empowering medical dreams worldwide"
  },
  { 
    label: "Partner Universities", 
    value: "50+", 
    icon: GraduationCap, 
    description: "Direct ties with top-ranked institutions"
  },
  { 
    label: "Countries Covered", 
    value: "8+", 
    icon: Globe2, 
    description: "Global presence for global education"
  },
  { 
    label: "Years Experience", 
    value: "15+", 
    icon: Award, 
    description: "A legacy of trust and transparency"
  },
];

export function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-medical/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">Our Numbers Speak <span className="text-gradient">For Themselves</span></h2>
            <div className="w-24 h-1.5 bg-medical mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,180,216,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Animated Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-medical to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-medical mb-6 group-hover:bg-medical group-hover:text-white transition-colors duration-500 shadow-inner">
                  <stat.icon size={32} />
                </div>
                
                <div className="text-4xl md:text-5xl font-black text-navy mb-2 font-poppins tracking-tight">
                  <Counter value={stat.value} />
                </div>
                
                <div className="text-lg font-bold text-gray-800 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-500 leading-relaxed">{stat.description}</p>
              </div>

              {/* Decorative background icon */}
              <stat.icon size={120} className="absolute -bottom-8 -right-8 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
