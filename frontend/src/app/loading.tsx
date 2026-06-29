"use client";

import React from "react";
import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0B1F33] flex flex-col items-center justify-center p-4">
      {/* Background Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#1a4db8]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#e2a613]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative flex flex-col items-center space-y-8 z-10 text-center">
        {/* Animated Icon Ring */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* External glowing progress track */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-white/5 border-t-[#e2a613] border-r-[#1a4db8]"
          />
          {/* Inner pulse */}
          <motion.div
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10"
          >
            <Stethoscope size={36} className="text-[#e2a613]" />
          </motion.div>
        </div>

        {/* Loading Texts */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold font-poppins text-white tracking-wide">
            Connecting Your Medical Future
          </h3>
          <p className="text-sm text-gray-400 font-medium max-w-xs mx-auto animate-pulse">
            Loading admission details and campus tours...
          </p>
        </div>
      </div>
    </div>
  );
}
