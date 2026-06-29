"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { LeadPopupForm } from "./LeadPopupForm";

export function LeadPopupFormTrigger() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the initial page load so the popup only triggers when navigating via navbar links
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Wait exactly 2 seconds after the path change (successful page load)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <LeadPopupForm isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
