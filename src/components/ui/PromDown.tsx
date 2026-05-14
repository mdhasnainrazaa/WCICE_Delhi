"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromDownProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function PromDown({ title, subtitle, children, defaultOpen = false, className }: PromDownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border border-[#E2E8F0] rounded-[24px] bg-white overflow-hidden shadow-sm transition-all", isOpen && "shadow-md border-primary/20", className)}>
      {/* Mobile Header (Collapsible) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex md:hidden items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex flex-col gap-1">
          {subtitle && <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{subtitle}</span>}
          <h3 className="text-xl font-bold text-[#0F172A]">{title}</h3>
        </div>
        <div className={cn("w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300", isOpen && "rotate-180 bg-primary/10 text-primary")}>
          <ChevronDown size={20} />
        </div>
      </button>

      {/* Desktop Header (Static) */}
      <div className="hidden md:block p-8 pb-4">
        {subtitle && <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">{subtitle}</span>}
        <h3 className="text-3xl font-bold text-[#0F172A]">{title}</h3>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 border-t border-gray-100 mt-4">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block p-8 pt-4">
        {children}
      </div>
    </div>
  );
}
