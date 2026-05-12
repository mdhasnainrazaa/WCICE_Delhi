"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

interface GlobalApplyFormProps {
  onSuccess?: () => void;
  buttonText?: string;
}

export function GlobalApplyForm({ onSuccess, buttonText = "Submit Application" }: GlobalApplyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    neetStatus: "",
    neetMarks: "",
    university: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.city || !formData.neetStatus || !formData.university) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (formData.neetStatus === "Yes" && !formData.neetMarks) {
      alert("Please enter your NEET marks.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pageUrl: window.location.href
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: "", phone: "", email: "", city: "", neetStatus: "", neetMarks: "", university: ""
          });
          if (onSuccess) onSuccess();
        }, 3000);
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle2 size={64} className="text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-navy mb-2">Application Submitted!</h3>
        <p className="text-gray-600 text-sm">
          Thank you for applying. Our expert counsellor will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700">Full Name *</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700">Phone Number *</label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-sm text-gray-500 font-medium">+91</span>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile"
              className="w-full pl-10 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
              required
              maxLength={10}
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700">Email Address *</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@gmail.com"
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700">City *</label>
          <input 
            type="text" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Your City"
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700">NEET Status *</label>
          <select
            name="neetStatus"
            value={formData.neetStatus}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all bg-white"
            required
          >
            <option value="" disabled>Select Status</option>
            <option value="Yes">Yes, Appeared</option>
            <option value="No">No</option>
            <option value="Appearing">Appearing</option>
          </select>
        </div>
        {formData.neetStatus === "Yes" ? (
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">NEET Marks *</label>
            <input 
              type="number" 
              name="neetMarks"
              value={formData.neetMarks}
              onChange={handleChange}
              placeholder="Your Marks"
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all"
              required
            />
          </div>
        ) : (
          <div className="hidden md:block space-y-1">
          </div>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-gray-700">Preferred University *</label>
        <select
          name="university"
          value={formData.university}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-[#00B4D8] focus:ring-2 focus:ring-[#00B4D8]/20 outline-none transition-all bg-white"
          required
        >
          <option value="" disabled>Select University</option>
          <option value="Jalal-Abad State University">Jalal-Abad State University</option>
          <option value="Jalal-Abad International University">Jalal-Abad International University</option>
          <option value="Osh State University">Osh State University</option>
          <option value="Osh International Medical University">Osh International Medical University</option>
          <option value="Central Asian International Medical University">Central Asian International Medical University</option>
          <option value="Not Sure Yet">Not Sure Yet</option>
        </select>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#00B4D8] hover:bg-[#0096b4] text-white font-bold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 text-sm shadow-md"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Submitting...
            </>
          ) : (
            buttonText
          )}
        </button>
      </div>
    </form>
  );
}
