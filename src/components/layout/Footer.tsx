"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { 
    name: "Facebook", 
    href: "https://www.facebook.com/profile.php?id=61569910095151", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/wciecdelhi/", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  },
  { 
    name: "Linkedin", 
    href: "https://www.linkedin.com/company/wciecdelhi/", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="bg-navy pt-12 pb-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-10">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative w-14 h-14 bg-white rounded-2xl p-2 shadow-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <Image 
                  src="/logos/logo.png" 
                  alt="WCIEC Logo" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-tight font-poppins text-white tracking-tight">WCIEC</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-medical font-bold">Organization</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              World Choice International Education Consultant Private Limited (WCIEC) is a trusted partner for medical education abroad, serving students for over 15 years.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-medical hover:text-white transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About WCIEC", href: "/about-us" },
                { name: "University", href: "/#universities" },
                { name: "Admission", href: "/admission" },
                { name: "Privacy Policy", href: "/legal" },
                { name: "Contact Us", href: "/contact-us" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-medical transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Universities */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Our Universities</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                { name: "Jalal-Abad International University", href: "/universities/jalal-abad-international-university" },
                { name: "Jalal-Abad State University", href: "/universities/jalal-abad-state-university" },
                { name: "Osh State University International Medical Faculty", href: "/universities/osh-state-university" },
                { name: "Central Asian International Medical University", href: "/universities/central-asian-international-medical-university" },
                { name: "Osh International Medical University", href: "/universities/osh-international-medical-university" }
              ].map((uni) => (
                <li key={uni.name}>
                  <Link href={uni.href} className="hover:text-medical transition-colors leading-relaxed block">{uni.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Get In Touch</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
               <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-medical shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">Contact Details</div>
                  <div className="flex flex-col gap-1 mt-1">
                    <a href="tel:+918586873357" className="hover:text-medical transition-colors">+91 85868 73357</a>
                    <a href="tel:+919911635435" className="hover:text-medical transition-colors">+91 99116 35435</a>
                    <a href="tel:+919811385441" className="hover:text-medical transition-colors">+91 98113 85441</a>
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-medical shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto:wciecdelhi2025@gmail.com" className="hover:text-medical">wciecdelhi2025@gmail.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-medical shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold">Office Address</div>
                  <a 
                    href="https://www.google.com/maps/place/WCIEC/@28.6306198,77.2750274,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce352d10d6f4f:0x1e9382f6a04d3f05!8m2!3d28.6306151!4d77.2776023!16s%2Fg%2F11xdb9lqvm?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="leading-relaxed hover:text-medical transition-colors block"
                  >
                    WCIEC – Shakarpur, New Delhi<br />
                    Near Laxmi Nagar Metro Station, behind Karim Hotel
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <div className="text-gray-500 text-xs flex flex-wrap justify-center items-center gap-2">
            <span>© 2026 WCIEC Organization. All rights reserved.</span>
            <span className="text-white/10 hidden sm:inline">|</span>
            <Link href="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
