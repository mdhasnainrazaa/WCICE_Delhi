"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error("Application Runtime Exception:", error);
  }, [error]);

  return (
    <div className="min-h-[85vh] bg-[#f8f9fc] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-2xl relative z-10 text-center space-y-8">
        {/* Error Icon Circle */}
        <div className="mx-auto w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 border border-rose-100 shadow-inner">
          <AlertCircle size={40} className="stroke-[1.5]" />
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-navy font-poppins">
            Something Went Wrong
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed font-medium">
            An unexpected error occurred while processing this page. Please try refreshing or return back to the main homepage.
          </p>
          {error.digest && (
            <code className="block bg-gray-50 px-3 py-1.5 rounded-lg text-[10px] font-mono text-gray-400 select-all border border-gray-100">
              Error ID: {error.digest}
            </code>
          )}
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex-1 bg-navy hover:bg-[#0B1F33] text-white py-4 px-6 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-navy/10 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <RefreshCw size={16} className="animate-spin-slow" />
            Try Refreshing
          </button>
          
          <Link
            href="/"
            className="flex-1 bg-gray-50 hover:bg-gray-100 text-navy border border-gray-200 py-4 px-6 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
