"use client";

import React, { useState, useEffect, useRef } from "react";
import { useApplyModal } from "@/context/ApplyModalContext";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalApplyForm } from "@/components/forms/GlobalApplyForm";

export function GlobalApplyModal() {
  const { isOpen, closeModal } = useApplyModal();
  const modalRef = useRef<HTMLDivElement>(null);

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

  // Accessibility: Simple Focus Trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

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
            className="fixed inset-0 bg-black/60 backdrop-blur-[8px] z-[9999]"
          />
          
          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: "-40%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-40%", x: "-50%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed top-1/2 left-1/2 w-[92%] md:w-[85%] max-w-[900px] max-h-[90vh] bg-white rounded-[24px] shadow-2xl z-[10000] overflow-hidden flex flex-col transform-gpu"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between bg-white relative">
              <div className="space-y-1 pr-8">
                <h2 id="modal-title" className="text-xl md:text-2xl font-black text-navy leading-tight">
                  Apply for Admission
                </h2>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Complete the form below and our admission counsellor will contact you shortly.
                </p>
              </div>
              <button 
                onClick={closeModal}
                className="absolute top-5 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body (Form) */}
            <div className="flex-1 overflow-hidden">
              <GlobalApplyForm onSuccess={closeModal} isModal={true} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
