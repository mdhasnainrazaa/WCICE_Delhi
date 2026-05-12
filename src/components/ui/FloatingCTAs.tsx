"use client";

import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/yournumber"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 relative group"
      >
        <MessageSquare size={28} />
        <span className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with Expert
        </span>
      </motion.a>

      {/* Call Button - Mobile Only */}
      <motion.a
        href="tel:+911234567890"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 md:hidden"
      >
        <Phone size={24} />
      </motion.a>
    </div>
  );
}
