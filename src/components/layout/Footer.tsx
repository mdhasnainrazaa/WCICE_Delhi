"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { 
    name: "Facebook", 
    href: "#", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  { 
    name: "Twitter", 
    href: "#", 
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    )
  },
  { 
    name: "Instagram", 
    href: "#", 
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
    href: "#", 
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
    <footer className="bg-navy pt-20 pb-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-12 h-12">
                <Image 
                  src="/logos/logo.png" 
                  alt="WCIEC Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight font-poppins text-white">WCIEC</span>
                <span className="text-[10px] uppercase tracking-widest text-medical font-bold">Organization</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              World Choice International Education Consultant Private Limited (WCIEC) is a trusted partner for medical education abroad, serving students for over 15 years.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-medical hover:text-white transition-all">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {["Home", "About WCIEC", "Our Universities", "Admission Process", "Blog", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-medical transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Countries */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-poppins">MBBS Abroad</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              {["MBBS in Kyrgyzstan", "MBBS in Russia", "MBBS in Uzbekistan", "MBBS in Kazakhstan", "MBBS in Georgia", "MBBS in Philippines"].map((country) => (
                <li key={country}>
                  <Link href="#" className="hover:text-medical transition-colors">{country}</Link>
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
                  <div className="text-white font-semibold">Phone</div>
                  <a href="tel:+918826418950" className="hover:text-medical">+91 88264 18950</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-medical shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href="mailto:info@wciec.org" className="hover:text-medical">info@wciec.org</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-medical shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <span>123, Education Hub, New Delhi, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-xs">
            © 2026 WCIEC Organization. All rights reserved. 
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="text-gray-500 text-[10px] uppercase tracking-widest font-black">
            Made with ❤️ for Medical Aspirants
          </div>
        </div>
      </div>
    </footer>
  );
}
