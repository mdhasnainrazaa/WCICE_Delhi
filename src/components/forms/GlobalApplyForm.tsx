"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GlobalApplyFormProps {
  onSuccess?: () => void;
  buttonText?: string;
  compact?: boolean;
}

export function GlobalApplyForm({ onSuccess, buttonText = "Submit Application", compact = false }: GlobalApplyFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const validate = () => {
    if (!formData.name.trim()) return "Full name is required";
    if (!/^\d{10}$/.test(formData.phone)) return "Please enter a valid 10-digit Indian mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address";
    if (!formData.city.trim()) return "City is required";
    if (!formData.neetStatus) return "Please select your NEET status";
    if (formData.neetStatus === "Yes") {
      const marks = parseInt(formData.neetMarks);
      if (!formData.neetMarks) return "Please enter your NEET marks";
      if (isNaN(marks) || marks < 0 || marks > 700) return "NEET marks must be a number between 0 and 700";
    }
    if (!formData.university) return "Please select a preferred university";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      // Direct submission to Google Script for static export support
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      const response = await fetch(scriptUrl || "/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: scriptUrl ? 'no-cors' : 'cors' // Use no-cors for direct script access
      });

      // When using no-cors, we can't check response.ok, so we assume success if no error is thrown
      if (scriptUrl) {
        setIsSuccess(true);
        setFormData({
          name: "", phone: "", email: "", city: "", neetStatus: "", neetMarks: "", university: ""
        });
        if (onSuccess) onSuccess();
        setTimeout(() => setIsSuccess(false), 10000);
      } else if (response.ok) {
        const result = await response.json();
        setIsSuccess(true);
        setFormData({
          name: "", phone: "", email: "", city: "", neetStatus: "", neetMarks: "", university: ""
        });
        if (onSuccess) onSuccess();
        setTimeout(() => setIsSuccess(false), 10000);
      } else {
        const result = await response.json();
        throw new Error(result.error || "Submission failed");
      }
    } catch (err: any) {
      console.error("Form Submission Error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-3xl"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-100/50"
        >
          <CheckCircle2 size={48} className="text-green-600" />
        </motion.div>
        <h3 className="text-3xl font-black text-[#0B1F33] mb-4 tracking-tight">Application Received!</h3>
        <div className="space-y-2 px-4">
          <p className="text-gray-600 text-lg font-medium leading-relaxed">
            Thank you, <span className="text-[#0B1F33] font-bold">Your application is in.</span>
          </p>
          <p className="text-gray-500 font-medium">
            One of our senior counselors will call you within 24 hours.
          </p>
        </div>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-10 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-bold transition-all"
        >
          Close & Return
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-2.5" : "space-y-4"}>
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-xl flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
          {error}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name *</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`w-full px-4 ${compact ? 'py-2.5' : 'py-3'} text-sm font-bold rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300`}
            required
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number *</label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-sm text-gray-400 font-bold">+91</span>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile"
              className={`w-full pl-12 pr-4 ${compact ? 'py-2.5' : 'py-3'} text-sm font-bold rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300`}
              required
              maxLength={10}
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address *</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`w-full px-4 ${compact ? 'py-2.5' : 'py-3'} text-sm font-bold rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300`}
            required
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">City *</label>
          <input 
            type="text" 
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Your City"
            className={`w-full px-4 ${compact ? 'py-2.5' : 'py-3'} text-sm font-bold rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300`}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">NEET Status *</label>
          <select
            name="neetStatus"
            value={formData.neetStatus}
            onChange={handleChange}
            className={`w-full px-4 ${compact ? 'py-2.5' : 'py-3'} text-sm font-bold rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-white appearance-none cursor-pointer`}
            required
          >
            <option value="" disabled>Select Status</option>
            <option value="Yes">Qualified / Appeared</option>
            <option value="No">Not Appeared</option>
            <option value="Appearing">Appearing This Year</option>
          </select>
        </div>
        
        <AnimatePresence mode="wait">
          {formData.neetStatus === "Yes" && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-1.5"
            >
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">NEET Marks *</label>
              <input 
                type="number" 
                name="neetMarks"
                value={formData.neetMarks}
                onChange={handleChange}
                placeholder="Expected/Actual Marks (Max 700)"
                max={700}
                min={0}
                className={`w-full px-4 ${compact ? 'py-2.5' : 'py-3'} text-sm font-bold rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300`}
                required
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Preferred University *</label>
        <select
          name="university"
          value={formData.university}
          onChange={handleChange}
          className={`w-full px-4 ${compact ? 'py-2.5' : 'py-3'} text-sm font-bold rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-white appearance-none cursor-pointer`}
          required
        >
          <option value="" disabled>Choose Institution</option>
          <option value="Jalal-Abad State University">Jalal-Abad State University</option>
          <option value="Jalal-Abad International University">Jalal-Abad International University</option>
          <option value="Osh State University">Osh State University</option>
          <option value="Osh International Medical University">Osh International Medical University</option>
          <option value="Central Asian International Medical University">Central Asian International Medical University</option>
          <option value="Not Sure Yet">I need counseling to decide</option>
        </select>
      </div>

      <div className={compact ? "pt-2" : "pt-4"}>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#0B1F33] hover:bg-[#1a4db8] text-white font-black ${compact ? 'py-3.5' : 'py-4'} rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-70 text-sm uppercase tracking-widest shadow-xl shadow-navy/10 group`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Processing...
            </>
          ) : (
            <>
              {buttonText}
              <CheckCircle2 size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

      </div>
    </form>
  );
}
