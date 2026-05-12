"use client";

import React, { useState, useEffect } from "react";
import { useApplyModal } from "@/context/ApplyModalContext";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";

export function GlobalApplyModal() {
  const { isOpen, closeModal } = useApplyModal();

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-white rounded-2xl shadow-2xl z-[10000] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h2 className="text-lg font-bold text-navy">Apply Now</h2>
              <button 
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5">
              <GlobalApplyForm onSuccess={closeModal} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
