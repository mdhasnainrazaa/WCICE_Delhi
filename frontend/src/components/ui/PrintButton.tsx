"use client";

import React from "react";
import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <button 
      onClick={() => window.print()}
      className="w-full bg-gray-100 hover:bg-gray-200 text-navy py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
    >
      <Download size={16} /> Save / Print PDF
    </button>
  );
}
