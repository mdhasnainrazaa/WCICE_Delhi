"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Menu, X, PhoneCall, ChevronDown, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About WCIEC", href: "/about-us" },
  { 
    name: "University", 
    href: "#",
    dropdown: [
      { name: "Jalal-Abad International University", href: "/universities/jalal-abad-international-university" },
      { name: "Jalal-Abad State University", href: "/universities/jalal-abad-state-university" },
      { name: "Osh State University International Medical Faculty", href: "/universities/osh-state-university" },
      { name: "Central Asian International Medical University", href: "/universities/central-asian-international-medical-university" },
      { name: "Osh International Medical University", href: "/universities/osh-international-medical-university" },
    ]
  },
  { name: "Admission", href: "/#process" },
  { name: "Blog", href: "/blog" },
];


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-2 bg-white shadow-sm border-b border-gray-100"
      )}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image 
              src="/logos/logo.png" 
              alt="WCIEC Logo" 
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-medical flex items-center gap-1 py-4",
                  isScrolled ? "text-navy" : "text-navy"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} className={cn("transition-transform", activeDropdown === link.name && "rotate-180")} />}
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {activeDropdown === link.name && link.dropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[100%] left-0 w-[340px] pt-4 z-[100]"
                  >
                    <div className="bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl p-2 border border-white/20 overflow-hidden">
                      <div className="flex flex-col gap-1">
                        {link.dropdown.map((item) => (
                          <Link 
                            key={item.href}
                            href={item.href}
                            className="group/item flex items-center gap-3 p-2.5 rounded-xl transition-all hover:bg-[#1a4db8] relative overflow-hidden"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover/item:bg-white/20 transition-colors shrink-0">
                              <GraduationCap size={16} className="text-[#1a4db8] group-hover/item:text-white transition-colors" />
                            </div>
                            <span className="text-xs font-bold text-navy group-hover/item:text-white transition-colors leading-tight">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>


        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="https://wa.me/918826418950" 
            className="flex items-center gap-2 text-navy font-semibold hover:text-medical transition-colors"
          >
            <MessageSquare size={20} className="text-accent" />
            <span>WhatsApp</span>
          </Link>
          <button className="btn-primary py-2 px-6">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    className="text-navy font-semibold text-lg"
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-medical/20">
                      {link.dropdown.map((item) => (
                        <Link 
                          key={item.href}
                          href={item.href}
                          className="text-sm text-gray-500 hover:text-medical font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <hr className="border-gray-100" />

              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <PhoneCall size={18} />
                Book Counselling
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
