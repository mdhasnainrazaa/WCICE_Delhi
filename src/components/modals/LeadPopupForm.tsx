"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";

interface LeadPopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadPopupForm({ isOpen, onClose }: LeadPopupFormProps) {
  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Automatically close modal 3 seconds after successful submission
  const handleSuccess = () => {
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0B1F33]/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-gray-100"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-navy flex items-center justify-center transition-colors border border-gray-200 cursor-pointer"
              aria-label="Close form"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="bg-navy p-6 md:p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[#e2a613] font-bold text-[10px] uppercase tracking-[0.2em] mb-1.5 block">WCIEC Organization</span>
                <h3 className="text-xl md:text-2xl font-black tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>Get Free Expert Counseling</h3>
                <p className="text-white/80 text-xs md:text-sm mt-1 font-medium">Please fill out this form to connect with our MBBS experts.</p>
              </div>
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-8 -mt-8 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1a4db8]/20 rounded-full -ml-8 -mb-8 blur-2xl" />
            </div>

            {/* Form Body - Scrollable if screen height is constrained */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              <GlobalApplyForm 
                buttonText="Get Free Expert Counseling" 
                compact={true} 
                onSuccess={handleSuccess} 
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
