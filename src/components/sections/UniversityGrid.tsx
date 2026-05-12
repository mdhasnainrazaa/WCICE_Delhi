"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, DollarSign, ArrowRight } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

const universities = [
  {
    name: "Osh State University",
    location: "Kyrgyzstan",
    fees: "$3,500/Year",
    image: "/images/Osh-State-University.png",
    slug: "osh-state-university",
    tags: ["Top Ranked", "NMC Approved"]
  },
  {
    name: "Jalal-Abad State University",
    location: "Kyrgyzstan",
    fees: "$3,200/Year",
    image: "/images/Jalal-Abad-banner.png",
    slug: "jalal-abad-state-university",
    tags: ["Affordable", "Best Hostel"]
  },
  {
    name: "Jalal-Abad International University",
    location: "Kyrgyzstan",
    fees: "$3,300/Year",
    image: "/images/Jalal-Abad-International-University-hero.png",
    slug: "jalal-abad-international-university",
    tags: ["Modern Campus", "International"]
  },
  {
    name: "Central Asian International Medical University",
    location: "Kyrgyzstan",
    fees: "$3,400/Year",
    image: "/images/Central-Asian-Medical-University.png",
    slug: "central-asian-international-medical-university",
    tags: ["Excellent Faculty"]
  },
  {
    name: "Osh International Medical University",
    location: "Kyrgyzstan",
    fees: "$3,600/Year",
    image: "/images/osh-international-medical-university.png",
    slug: "osh-international-medical-university",
    tags: ["Global Standards"]
  }
];



export function UniversityGrid() {
  return (
    <section className="py-24 bg-background-soft" id="universities">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl mb-4">Top <span className="text-gradient">Medical Universities</span></h2>
            <p className="text-gray-600 max-w-xl">
              Explore our hand-picked partner universities across the globe. We only partner with NMC/WHO recognized institutions.
            </p>
          </div>
          <Link href="/universities" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Universities <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((uni, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <GlassCard className="p-0 overflow-hidden border-none shadow-lg h-full flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    {uni.tags.map(tag => (
                      <span key={tag} className="bg-white/90 backdrop-blur-md text-navy text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Image
                    src={uni.image}
                    alt={uni.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-medical font-semibold text-sm mb-2">
                    <MapPin size={14} />
                    {uni.location}
                  </div>
                  <h3 className="text-xl mb-4 group-hover:text-primary transition-colors">{uni.name}</h3>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 uppercase font-bold">Starting From</span>
                      <span className="text-navy font-bold flex items-center gap-1">
                        <DollarSign size={14} className="text-accent" />
                        {uni.fees}
                      </span>
                    </div>
                    <Link 
                      href={`/universities/${uni.slug}`}
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
