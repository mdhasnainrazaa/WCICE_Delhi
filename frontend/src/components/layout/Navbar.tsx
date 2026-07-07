"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall, ChevronDown, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "MBBS Abroad",
    href: "/mbbs-abroad/",
    dropdown: [
      { name: "MBBS Abroad 2026 Guide", href: "/mbbs-abroad/" },
      { name: "MBBS in Kyrgyzstan", href: "/mbbs-in-kyrgyzstan/" },
      { name: "MBBS in Russia", href: "/mbbs-in-russia/" },
      { name: "MBBS in Kazakhstan", href: "/mbbs-in-kazakhstan/" },
      { name: "MBBS in Uzbekistan", href: "/mbbs-in-uzbekistan/" },
      { name: "MBBS in Georgia", href: "/mbbs-in-georgia/" },
      { name: "MBBS Fees Abroad", href: "/mbbs-fees-abroad/" },
      { name: "MBBS Through NEET", href: "/mbbs-admission-through-neet/" },
    ]
  },
  { 
    name: "University", 
    href: "/universities/",
    dropdown: [
      { name: "Jalal Abad State University", href: "/universities/jalal-abad-state-university/" },
      { name: "Jalal-Abad International University", href: "/universities/jalal-abad-international-university/" },
      { name: "Osh State University International Medical Faculty", href: "/universities/osh-state-university/" },
      { name: "Central Asian International Medical University", href: "/universities/central-asian-international-medical-university/" },
      { name: "Osh International Medical University", href: "/universities/osh-international-medical-university/" },
    ]
  },
  { name: "About WCIEC", href: "/about-us/" },
  { name: "Admission", href: "/admission/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact Us", href: "/contact-us/" },
];


import { useApplyModal } from "@/context/ApplyModalContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  const { openModal } = useApplyModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setMobileExpandedDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const toggleMobileDropdown = (name: string) => {
    setMobileExpandedDropdown(prev => prev === name ? null : name);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm border-b border-gray-100"
        )}
      >
        {/* Main navbar row */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 h-[60px] sm:h-[70px] lg:h-[96px]">

          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image 
              src="/logos/wciec-logo.webp" 
              alt="WCIEC Logo" 
              width={64}
              height={80}
              priority
              className="object-contain"
              style={{ height: "clamp(44px, 8vw, 80px)", width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
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
                    "font-medium transition-colors hover:text-medical flex items-center gap-1 py-2 text-lg text-navy"
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

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Mobile/Tablet Quick Actions (hidden on desktop) */}
            <div className="flex lg:hidden items-center gap-2">
              <a 
                href="tel:+918586873357" 
                aria-label="Call Now"
                className="flex items-center gap-1 text-navy hover:text-medical transition-colors border border-navy/15 px-2.5 py-1.5 rounded-full font-bold text-xs shrink-0 bg-gray-50/50 hover:bg-gray-100"
              >
                <PhoneCall size={12} className="text-medical" />
                <span className="hidden xs:inline sm:inline">Call Now</span>
              </a>
              
              <button 
                onClick={openModal} 
                className="bg-medical hover:bg-medical/90 text-white font-bold text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all shrink-0 shadow-md shadow-medical/15 whitespace-nowrap"
              >
                Apply Now
              </button>
            </div>

            {/* Desktop CTA Buttons (hidden on mobile/tablet) */}
            <div className="hidden lg:flex items-center gap-4">
              <Link 
                href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad." 
                className="flex items-center gap-1.5 text-[#25D366] font-bold hover:text-[#1eb054] transition-colors text-lg"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </Link>
              <button onClick={openModal} className="btn-primary h-[52px] flex items-center justify-center px-6 text-lg font-bold rounded-full">
                Apply Now
              </button>
            </div>
   
            {/* Hamburger / Close toggle */}
            <button 
              className="lg:hidden text-navy p-1.5 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — rendered as a sibling outside the nav bar row */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-[340px] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image 
                    src="/logos/wciec-logo.webp" 
                    alt="WCIEC Logo" 
                    width={48}
                    height={60}
                    priority
                    className="object-contain"
                    style={{ height: "48px", width: "auto" }}
                  />
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors text-navy"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable nav links */}
              <div className="flex-1 overflow-y-auto py-4 px-3">
                {navLinks.map((link) => (
                  <div key={link.name} className="mb-1">
                    {link.dropdown ? (
                      <>
                        {/* Accordion toggle row */}
                        <button
                          className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-navy font-semibold text-base hover:bg-gray-50 transition-colors"
                          onClick={() => toggleMobileDropdown(link.name)}
                        >
                          <span>{link.name}</span>
                          <ChevronDown 
                            size={16} 
                            className={cn("transition-transform duration-200 text-medical", mobileExpandedDropdown === link.name && "rotate-180")}
                          />
                        </button>

                        {/* Accordion content */}
                        <AnimatePresence initial={false}>
                          {mobileExpandedDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 pr-1 pb-2 flex flex-col gap-0.5 border-l-2 border-medical/30 ml-3 mt-1">
                                {link.dropdown.map((item) => (
                                  <Link 
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-medical hover:bg-gray-50 font-medium transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <GraduationCap size={13} className="text-medical/70 shrink-0" />
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center px-3 py-3 rounded-xl text-navy font-semibold text-base hover:bg-gray-50 hover:text-medical transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer footer CTAs */}
              <div className="p-4 border-t border-gray-100 flex flex-col gap-3">
                <a 
                  href="https://wa.me/918586873357?text=Hi%20WCIEC%2C%20I%20want%20guidance%20for%20MBBS%20admission%20abroad."
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-[#25D366] text-[#25D366] font-bold text-sm hover:bg-[#25D366]/5 transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp Us
                </a>
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}
