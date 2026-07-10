"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlideshowProps {
  images: string[];
  alt: string;
}

export default function HeroSlideshow({ images, alt }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 7000); // 7 seconds per image

    return () => clearInterval(interval);
  }, [reducedMotion, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
      {/* Styles for hardware-accelerated Ken Burns animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns-slow {
          0% {
            transform: scale(1.02) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.08) translate3d(0.5%, 0.5%, 0);
          }
          100% {
            transform: scale(1.02) translate3d(0, 0, 0);
          }
        }
        .animate-kenburns-gpu {
          animation: kenburns-slow 24s ease-in-out infinite;
          will-change: transform;
        }
      `}} />

      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50 z-10" />

      {/* Slide Container */}
      <div className="relative w-full h-full">
        {images.map((src, index) => {
          const isActive = index === activeIndex;
          const showSlide = reducedMotion ? index === 0 : true;

          if (!showSlide) return null;

          return (
            <div
              key={src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out transform-gpu ${
                isActive ? "opacity-25" : "opacity-0 pointer-events-none"
              }`}
              style={{ transitionProperty: "opacity" }}
            >
              <Image
                src={src}
                alt={`${alt} campus slide ${index + 1}`}
                fill
                sizes="100vw"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className={`object-cover object-center w-full h-full transform-gpu ${
                  isActive && !reducedMotion ? "animate-kenburns-gpu" : ""
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
