"use client";

import React from "react";
import { useApplyModal } from "@/context/ApplyModalContext";
import { ChevronRight } from "lucide-react";

interface ApplyNowButtonProps {
  className?: string;
  fullWidth?: boolean;
}

export const ApplyNowButton = ({ className = "", fullWidth = false }: ApplyNowButtonProps) => {
  const { openModal } = useApplyModal();
  
  return (
    <button 
      onClick={openModal} 
      className={`btn-primary flex justify-center items-center gap-2 ${fullWidth ? "w-full" : ""} ${className}`}
    >
      Apply Now <ChevronRight size={18} />
    </button>
  );
};
