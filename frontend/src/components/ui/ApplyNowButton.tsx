"use client";

import React from "react";
import { useApplyModal } from "@/context/ApplyModalContext";
import { ChevronRight } from "lucide-react";

interface ApplyNowButtonProps {
  className?: string;
  fullWidth?: boolean;
  noDefault?: boolean;
  children?: React.ReactNode;
}

export const ApplyNowButton = ({ 
  className = "", 
  fullWidth = false, 
  noDefault = false,
  children
}: ApplyNowButtonProps) => {
  const { openModal } = useApplyModal();
  
  return (
    <button 
      onClick={openModal} 
      className={noDefault ? className : `btn-primary flex justify-center items-center gap-2 ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children || (
        <>
          Apply Now <ChevronRight size={18} />
        </>
      )}
    </button>
  );
};
