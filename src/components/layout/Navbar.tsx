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
    href: "/universities",
    dropdown: [
      { name: "Jalal-Abad International University", href: "/universities/jalal-abad-international-university" },
      { name: "Jalal-Abad State University", href: "/universities/jalal-abad-state-university" },
      { name: "Osh State University International Medical Faculty", href: "/universities/osh-state-university" },
      { name: "Central Asian International Medical University", href: "/universities/central-asian-international-medical-university" },
      { name: "Osh International Medical University", href: "/universities/osh-international-medical-university" },
    ]
  },
  { name: "Admission", href: "/admission" },
  // { name: "Blog", href: "/blog" },
  { name: "Privacy Policy", href: "/legal" },
  { name: "Contact Us", href: "/contact-us" },
];


import { useApplyModal } from "@/context/ApplyModalContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { openModal } = useApplyModal();

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
                onClick={() => setActiveDropdown(null)}
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
                            onClick={() => setActiveDropdown(null)}
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
            className="flex items-center gap-2 text-[#25D366] font-semibold hover:text-[#1eb054] transition-colors"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span>WhatsApp</span>
          </Link>
          <button onClick={openModal} className="btn-primary py-2 px-6">
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
            className="md:hidden bg-white mt-4 rounded-2xl shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    className="text-navy font-semibold text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
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

              <button 
                onClick={() => {
                  openModal();
                  setIsMobileMenuOpen(false);
                }} 
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
