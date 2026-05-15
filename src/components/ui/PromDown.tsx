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
  staticOnMobile?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function PromDown({ title, subtitle, children, defaultOpen = false, staticOnMobile = false, className, titleClassName, subtitleClassName }: PromDownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("border border-[#E2E8F0] rounded-[24px] overflow-hidden shadow-sm transition-all", !className?.includes('bg-') && "bg-white", (isOpen || staticOnMobile) && "shadow-md border-primary/20", className)}>
      {/* Mobile Header (Collapsible or Static) */}
      <div className="md:hidden">
        {staticOnMobile ? (
          <div className="p-6 text-left border-b border-gray-100/10">
            <div className="flex flex-col gap-1">
              {subtitle && <span className={cn("text-[10px] font-bold uppercase tracking-widest text-primary", subtitleClassName)}>{subtitle}</span>}
              <h3 className={cn("text-xl font-bold text-[#0F172A]", titleClassName)}>{title}</h3>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-col gap-1">
              {subtitle && <span className={cn("text-[10px] font-bold uppercase tracking-widest text-primary", subtitleClassName)}>{subtitle}</span>}
              <h3 className={cn("text-xl font-bold text-[#0F172A]", titleClassName)}>{title}</h3>
            </div>
            <div className={cn("w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300", isOpen && "rotate-180 bg-primary/10 text-primary")}>
              <ChevronDown size={20} />
            </div>
          </button>
        )}
      </div>

      {/* Desktop Header (Static) */}
      <div className="hidden md:block p-8 pb-4">
        {subtitle && <span className={cn("text-sm font-bold uppercase tracking-widest text-primary mb-2 block", subtitleClassName)}>{subtitle}</span>}
        <h3 className={cn("text-3xl font-bold text-[#0F172A]", titleClassName)}>{title}</h3>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden">
        {staticOnMobile ? (
          <div className="p-6 pt-4">
            {children}
          </div>
        ) : (
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
        )}
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block p-8 pt-4">
        {children}
      </div>
    </div>
  );
}
