"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Image as ImageIcon,
  Video as VideoIcon,
  Plus,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Settings,
  Check,
  Copy,
  Info,
  Maximize2,
  Download,
  Eye,
  Sparkles,
  ArrowRight,
  FolderOpen,
  AlertCircle
} from "lucide-react";
import { useApplyModal } from "@/context/ApplyModalContext";

// --- IndexedDB Safe Setup ---
const DB_NAME = "wciec_gallery_db";
const STORE_NAME = "gallery_items";

interface DBItem {
  id: string;
  type: "image" | "video";
  file: Blob;
  fileName: string;
  title: string;
  category: string;
  description: string;
  createdAt: number;
}

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("IndexedDB is only available in the browser"));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = (event: any) => {
      resolve(event.target.result);
    };
    request.onerror = (event: any) => {
      reject(request.error);
    };
  });
};

const getDBItems = async (): Promise<DBItem[]> => {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  } catch (e) {
    console.error("IndexedDB Error:", e);
    return [];
  }
};

const saveDBItem = async (item: DBItem): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put(item);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

const deleteDBItem = async (id: string): Promise<void> => {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
};

// --- Initial Seed Gallery Items (Real assets from the public folder!) ---
const INITIAL_ITEMS = [
  {
    id: "hg-campusvideo",
    type: "video" as const,
    url: "/images/HomeGallery/campus-video.mp4",
    thumbnail: "/images/optimized/jalal-abad-banner.webp",
    title: "Campus Tour",
    category: "Campus Tour",
    description: "Take a walkthrough of the modern academic buildings and high-tech clinical campus environment."
  },
  {
    id: "hg-classroomvideo",
    type: "video" as const,
    url: "/images/HomeGallery/classroom-video.mp4",
    thumbnail: "/images/optimized/jalal-abad-banner.webp",
    title: "Modern Simulative Classroom Environment",
    category: "Campus Tour",
    description: "High-fidelity classrooms and medical learning centers equipped with smart tech for MBBS students."
  },
  {
    id: "hg-admissionabroad",
    type: "video" as const,
    url: "/images/HomeGallery/admissionabroad.mp4",
    thumbnail: "/images/optimized/jalal-abad-banner.webp",
    title: "Global MBBS Admission Guidance",
    category: "Campus Tour",
    description: "Insights into securing admissions in top medical universities abroad with WCIEC expert guidance."
  },
  {
    id: "hg-admissionvideo",
    type: "video" as const,
    url: "/images/HomeGallery/admissionvideo.mp4",
    thumbnail: "/images/optimized/jalal-abad-international-university-hero.webp",
    title: "Direct Admission & Counselling Support",
    category: "Student Activities",
    description: "Complete process walk-through of securing medical seats transparently and securely."
  },
  {
    id: "hg-event",
    type: "video" as const,
    url: "/images/HomeGallery/event.mp4",
    thumbnail: "/images/optimized/osh-international-medical-university.webp",
    title: "WCIEC Student Meet & Success Event",
    category: "Student Activities",
    description: "Interactive session and celebration moments of WCIEC students pursuing MBBS abroad."
  },
  {
    id: "hg-eventimage",
    type: "image" as const,
    url: "/images/HomeGallery/eventimage.jpeg",
    thumbnail: "/images/HomeGallery/eventimage.jpeg",
    title: "WCIEC Student Orientation Event",
    category: "Student Activities",
    description: "Glimpses of international student orientation program and interactive group photo."
  },
  {
    id: "hg-eventvideo",
    type: "video" as const,
    url: "/images/HomeGallery/event-video.mp4",
    thumbnail: "/images/optimized/central-asian-medical-university.webp",
    title: "WCIEC Grand Student Celebration",
    category: "Student Activities",
    description: "Vibrant cultural festival and event showcasing student talents and unity."
  },
  {
    id: "jasu-vid-1",
    type: "video" as const,
    url: "/images/jasu-gallery/jalabasState.mp4",
    thumbnail: "/images/optimized/jalal-abad-banner.webp",
    title: "Jalal Abad State University Campus Tour",
    category: "Campus Tour",
    description: "Explore the modern academic facilities, smart classrooms, and clinical learning centers at JASU."
  },
  {
    id: "osu-vid-1",
    type: "video" as const,
    url: "/images/osu-gallery/oshStateUniversity.mp4",
    thumbnail: "/images/optimized/osh-state-university.webp",
    title: "Osh State University - Life of Indian Students",
    category: "Student Activities",
    description: "Indian MBBS students sharing their academic journey, hostel life, and support at Osh State University."
  },
  {
    id: "jaiu-vid-1",
    type: "video" as const,
    url: "/images/jaiu-gallery/jalalabad-international.mp4",
    thumbnail: "/images/optimized/jalal-abad-international-university-hero.webp",
    title: "Jalal-Abad International University Campus Life",
    category: "Campus Tour",
    description: "A comprehensive look at the classrooms, high-fidelity laboratories, and campus facilities of JAIU."
  },
  {
    id: "oimu-vid-1",
    type: "video" as const,
    url: "/images/oimu-gallery/oshaInternational.mp4",
    thumbnail: "/images/optimized/osh-international-medical-university.webp",
    title: "Osh International Medical University Highlights",
    category: "Campus Tour",
    description: "Glimpses of administrative blocks, anatomical models, library collections, and academic environment."
  },
  {
    id: "caimu-vid-1",
    type: "video" as const,
    url: "/images/caimu-gallery/CAIS.mp4",
    thumbnail: "/images/optimized/central-asian-medical-university.webp",
    title: "Central Asian International Medical University Experience",
    category: "Student Activities",
    description: "Fascinating moments from WCIEC student induction, campus festivals, sports tournaments, and student life."
  }
];

export function GallerySection() {
  const { openModal } = useApplyModal();
  
  // Media items state (Initial + User Uploaded)
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [userItems, setUserItems] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Manager Dashboard Drawer State
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [activeManagerTab, setActiveManagerTab] = useState<"upload" | "manage" | "dev">("upload");
  
  // Upload Form State
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string>("");
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState("Campus Tour");
  const [uploadDescription, setUploadDescription] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  // Production Code copied state
  const [copiedCode, setCopiedCode] = useState(false);

  // Video loading errors state
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load items from IndexedDB on Mount
  useEffect(() => {
    let activeUrls: string[] = [];

    const loadUserMedia = async () => {
      const dbItems = await getDBItems();
      const formatted = dbItems.map((item) => {
        const objectUrl = URL.createObjectURL(item.file);
        activeUrls.push(objectUrl);
        return {
          id: item.id,
          type: item.type,
          url: objectUrl,
          thumbnail: item.type === "video" ? "" : objectUrl,
          title: item.title,
          category: item.category,
          description: item.description,
          isUserUploaded: true,
          originalName: item.fileName || "uploaded-media",
          createdAt: item.createdAt
        };
      });
      setUserItems(formatted);
    };

    loadUserMedia();

    return () => {
      // Revoke memory on unmount
      activeUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  // Merge INITIAL and User items
  useEffect(() => {
    // Put user uploaded items first, then static items
    setGalleryItems([...userItems, ...INITIAL_ITEMS]);
  }, [userItems]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, galleryItems]);

  // Lightbox handlers
  const handlePrev = () => {
    if (lightboxIndex === null) return;
    const filtered = getFilteredItems();
    const currentIndexInFiltered = filtered.findIndex(item => item.id === galleryItems[lightboxIndex]?.id);
    const prevIndexInFiltered = (currentIndexInFiltered - 1 + filtered.length) % filtered.length;
    const targetItem = filtered[prevIndexInFiltered];
    const actualIndex = galleryItems.findIndex(item => item.id === targetItem.id);
    setLightboxIndex(actualIndex);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const filtered = getFilteredItems();
    const currentIndexInFiltered = filtered.findIndex(item => item.id === galleryItems[lightboxIndex]?.id);
    const nextIndexInFiltered = (currentIndexInFiltered + 1) % filtered.length;
    const targetItem = filtered[nextIndexInFiltered];
    const actualIndex = galleryItems.findIndex(item => item.id === targetItem.id);
    setLightboxIndex(actualIndex);
  };

  // Filter Logic
  const categories = ["All", "Campus Tour", "Student Activities", "Photos", "Videos"];

  const getFilteredItems = () => {
    return galleryItems.filter((item) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Photos") return item.type === "image";
      if (activeFilter === "Videos") return item.type === "video";
      return item.category === activeFilter;
    });
  };

  const getCount = (filterName: string) => {
    return galleryItems.filter((item) => {
      if (filterName === "All") return true;
      if (filterName === "Photos") return item.type === "image";
      if (filterName === "Videos") return item.type === "video";
      return item.category === filterName;
    }).length;
  };

  // File Upload Handlers
  const handleFileChange = (file: File) => {
    if (!file) return;
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");
    if (!isImage && !isVideo) {
      alert("Invalid file format. Please upload an image or video file.");
      return;
    }

    setUploadedFile(file);
    // Create local object URL for instant preview inside form
    const previewUrl = URL.createObjectURL(file);
    setFilePreview(previewUrl);

    // Auto seed title from name
    const rawName = file.name.substring(0, file.name.lastIndexOf(".")) || file.name;
    const cleanTitle = rawName
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    setUploadTitle(cleanTitle);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Saving file to IndexedDB
  const handleSaveUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) return;

    setIsSaving(true);
    try {
      const type = uploadedFile.type.startsWith("video/") ? "video" : "image";
      const newId = `user-${Date.now()}`;
      
      const dbItem: DBItem = {
        id: newId,
        type: type,
        file: uploadedFile,
        fileName: uploadedFile.name,
        title: uploadTitle || "Untitled Media",
        category: uploadCategory,
        description: uploadDescription || "Uploaded WCIEC gallery item.",
        createdAt: Date.now()
      };

      await saveDBItem(dbItem);
      
      // Load it into userItems state
      const objectUrl = URL.createObjectURL(uploadedFile);
      const newGalleryItem = {
        id: dbItem.id,
        type: dbItem.type,
        url: objectUrl,
        thumbnail: dbItem.type === "video" ? "" : objectUrl,
        title: dbItem.title,
        category: dbItem.category,
        description: dbItem.description,
        isUserUploaded: true,
        originalName: uploadedFile.name,
        createdAt: dbItem.createdAt
      };

      setUserItems((prev) => [newGalleryItem, ...prev]);
      setUploadSuccess(true);
      
      // Reset form
      setTimeout(() => {
        setUploadedFile(null);
        setFilePreview("");
        setUploadTitle("");
        setUploadDescription("");
        setUploadSuccess(false);
      }, 1500);

    } catch (e) {
      console.error(e);
      alert("Failed to save media to database.");
    } finally {
      setIsSaving(false);
    }
  };

  // Deletion from Database
  const handleDeleteMedia = async (id: string, url: string) => {
    if (confirm("Are you sure you want to remove this item from the gallery?")) {
      try {
        await deleteDBItem(id);
        URL.revokeObjectURL(url);
        setUserItems((prev) => prev.filter((item) => item.id !== id));
      } catch (err) {
        console.error(err);
        alert("Failed to delete the item.");
      }
    }
  };

  // Generate code snippet for developers to save permanently
  const generateDevCode = () => {
    const itemsCode = userItems.map((item) => {
      const thumbnailUrl = item.type === "video"
        ? "/images/optimized/jalal-abad-banner.webp"
        : `/images/HomeGallery/${item.originalName}`;

      return `  {
    id: "${item.id}",
    type: "${item.type}",
    url: "/images/HomeGallery/${item.originalName}",
    thumbnail: "${thumbnailUrl}",
    title: "${item.title.replace(/"/g, '\\"')}",
    category: "${item.category}",
    description: "${item.description.replace(/"/g, '\\"')}"
  }`;
    }).join(",\n");

    return `// Copy this block of code and add it inside INITIAL_ITEMS inside 'src/components/sections/GallerySection.tsx':\n\n${itemsCode}`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateDevCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="gallery">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-medical/5 rounded-full blur-[120px] -z-10 -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-sm font-bold tracking-widest text-medical uppercase block">
              MOMENTS &amp; CAMPUS TOURS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-poppins">
              Our Gallery &amp; <span className="text-gradient">Student Life</span>
            </h2>
          </motion.div>
        </div>

        {/* Live Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-4 border-b border-gray-100 overflow-x-auto no-scrollbar">
          {categories.map((filter) => {
            const count = getCount(filter);
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-navy text-white shadow-lg shadow-navy/15 scale-105"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-navy"
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    isActive ? "bg-medical text-white" : "bg-gray-200/70 text-gray-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {getFilteredItems().map((item, idx) => {
              const actualIndex = galleryItems.findIndex((gi) => gi.id === item.id);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => setLightboxIndex(actualIndex)}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer h-72"
                >
                  {/* Media Cover */}
                  {item.type === "image" ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-navy overflow-hidden">
                      <img
                        src={item.thumbnail || "/images/optimized/jalal-abad-banner.webp"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 pointer-events-none"
                        loading="lazy"
                      />

                      {/* Pulse Play Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 transform group-hover:scale-115 transition-all duration-500 shadow-xl">
                          <Play size={28} className="fill-white translate-x-[2px]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gradient shadow for text readibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />


                  {/* Description Box */}
                  <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-white">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-medical transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs font-medium leading-relaxed mt-1.5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-500 overflow-hidden line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {getFilteredItems().length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200">
            <FolderOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <h4 className="font-bold text-lg text-navy">No media found</h4>
            <p className="text-gray-400 max-w-xs mx-auto text-sm mt-1">
              There are no items currently uploaded in the category "{activeFilter}". Select another category or click "Manage Gallery" to upload files!
            </p>
          </div>
        )}

        {/* Highlight Banner (Apply CTA Integration) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-navy to-[#0F2843] rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Glass background details */}
          <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-medical/20 to-transparent pointer-events-none -z-0" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left space-y-4">
              <span className="text-xs font-bold text-medical tracking-widest uppercase bg-medical/10 px-4 py-1.5 rounded-full">
                ADMISSIONS OPEN 2026
              </span>
              <h4 className="text-2xl md:text-4xl font-bold font-poppins">
                Begin Your Journey to Becoming a Doctor Today!
              </h4>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Connect with our expert team to secure medical seats in premium WHO/NMC recognized universities abroad with complete counseling, hostel support, and 100% transparency.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button
                onClick={openModal}
                className="w-full sm:w-auto bg-medical hover:bg-medical/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-medical/20 hover:-translate-y-1 active:translate-y-0 cursor-pointer text-center"
              >
                Apply Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- PREMIUM PORTAL LIGHTBOX --- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close Overlay Trigger */}
            <div className="absolute inset-0 cursor-default" onClick={() => setLightboxIndex(null)} />

            {/* Header Control Buttons */}
            <div className="absolute top-6 inset-x-6 flex items-center justify-between text-white z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-medical uppercase tracking-widest bg-medical/15 px-3 py-1 rounded-full w-max">
                  {galleryItems[lightboxIndex]?.category}
                </span>
                <span className="text-sm font-semibold text-gray-400 mt-1 hidden sm:inline">
                  {lightboxIndex + 1} / {galleryItems.length}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white hover:scale-105 cursor-pointer"
                  title="Close Screen"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
 
            {/* Media Content Slider Container */}
            <div className="relative w-full max-w-5xl h-[55vh] md:h-[65vh] flex items-center justify-center z-10">
              {/* Left Action Slide Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-0 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer -translate-x-2 md:-translate-x-12 transition-all hover:scale-110 active:scale-95 flex items-center justify-center z-20"
                title="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>
 
              {/* Main Content Render */}
              <motion.div
                key={galleryItems[lightboxIndex]?.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full h-full flex items-center justify-center"
              >
                {galleryItems[lightboxIndex]?.type === "image" ? (
                  <img
                    src={galleryItems[lightboxIndex]?.url}
                    alt={galleryItems[lightboxIndex]?.title}
                    className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10"
                  />
                ) : (
                  <div className="relative w-full max-h-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 max-w-4xl flex items-center justify-center">
                    {videoErrors[galleryItems[lightboxIndex]?.id] ? (
                      <div className="text-center p-8 space-y-4">
                        <div className="w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20 text-[#e2a613] flex items-center justify-center mx-auto shadow-inner">
                          <AlertCircle size={32} />
                        </div>
                        <h4 className="text-lg font-bold font-poppins text-white">Video Playback Unavailable</h4>
                        <p className="text-sm text-gray-400 max-w-xs mx-auto">
                          This video asset could not be fetched or loaded by your browser. Please check your internet connection or contact support.
                        </p>
                      </div>
                    ) : (
                      <video
                        key={galleryItems[lightboxIndex]?.url}
                        src={galleryItems[lightboxIndex]?.url}
                        controls
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                        autoPlay
                        onError={() => setVideoErrors(prev => ({ ...prev, [galleryItems[lightboxIndex]?.id]: true }))}
                        className="w-full h-full object-contain"
                      >
                        {/* Dynamically attach VTT captions for accessibility conformance */}
                        {galleryItems[lightboxIndex]?.id === "hg-classroomvideo" && (
                          <track
                            src="/captions/classroom-video.vtt"
                            kind="captions"
                            srcLang="en"
                            label="English"
                            default
                          />
                        )}
                        {galleryItems[lightboxIndex]?.id === "hg-eventvideo" && (
                          <track
                            src="/captions/event-video.vtt"
                            kind="captions"
                            srcLang="en"
                            label="English"
                            default
                          />
                        )}
                        {galleryItems[lightboxIndex]?.id === "hg-admissionvideo" && (
                          <track
                            src="/captions/admission-video.vtt"
                            kind="captions"
                            srcLang="en"
                            label="English"
                            default
                          />
                        )}
                      </video>
                    )}
                  </div>
                )}
              </motion.div>

              {/* Right Action Slide Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-0 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer translate-x-2 md:translate-x-12 transition-all hover:scale-110 active:scale-95 flex items-center justify-center z-20"
                title="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Details Information Bar */}
            <div className="w-full max-w-3xl mt-8 text-center text-white z-10 space-y-2 pointer-events-none select-none">
              <h3 className="text-xl md:text-3xl font-bold font-poppins text-white">
                {galleryItems[lightboxIndex]?.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                {galleryItems[lightboxIndex]?.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ADVANCED MEDIA MANAGER DRAWERS --- */}
      <AnimatePresence>
        {isManagerOpen && (
          <div className="fixed inset-0 z-[1000] flex justify-end">
            {/* Backdrop close layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsManagerOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Content Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col z-20 overflow-hidden"
            >
              {/* Sidebar Header */}
              <div className="p-6 bg-navy text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-medical animate-pulse" size={24} />
                  <div>
                    <h3 className="font-bold text-xl leading-tight font-poppins">WCIEC Media Studio</h3>
                    <p className="text-xs text-gray-400 font-medium">Upload &amp; Manage Portal Content</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsManagerOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Tab Selector */}
              <div className="flex border-b border-gray-100 bg-gray-50/50">
                <button
                  onClick={() => setActiveManagerTab("upload")}
                  className={`flex-1 py-4 text-center font-bold text-sm border-b-2 transition-all cursor-pointer ${
                    activeManagerTab === "upload"
                      ? "border-medical text-medical bg-white"
                      : "border-transparent text-gray-500 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  Upload New
                </button>
                <button
                  onClick={() => setActiveManagerTab("manage")}
                  className={`flex-1 py-4 text-center font-bold text-sm border-b-2 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    activeManagerTab === "manage"
                      ? "border-medical text-medical bg-white"
                      : "border-transparent text-gray-500 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  <span>Uploaded ({userItems.length})</span>
                </button>
                <button
                  onClick={() => setActiveManagerTab("dev")}
                  className={`flex-1 py-4 text-center font-bold text-sm border-b-2 transition-all cursor-pointer ${
                    activeManagerTab === "dev"
                      ? "border-medical text-medical bg-white"
                      : "border-transparent text-gray-500 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  Developer Guide
                </button>
              </div>

              {/* Drawer Body Contents */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* TAB 1: UPLOAD MEDIA ZONE */}
                {activeManagerTab === "upload" && (
                  <form onSubmit={handleSaveUpload} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">
                        Step 1: Choose or Drop Media File
                      </label>
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center ${
                          dragOver
                            ? "border-medical bg-medical/5"
                            : filePreview
                            ? "border-emerald-400 bg-emerald-50/10"
                            : "border-gray-300 hover:border-medical bg-gray-50"
                        }`}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleFileChange(e.target.files[0]);
                            }
                          }}
                          accept="image/*,video/*"
                          className="hidden"
                        />

                        {filePreview ? (
                          <div className="space-y-3 w-full">
                            {uploadedFile?.type.startsWith("image/") ? (
                              <img
                                src={filePreview}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded-2xl mx-auto shadow-md border border-gray-200"
                              />
                            ) : (
                              <div className="w-32 h-20 bg-navy/90 rounded-2xl mx-auto flex items-center justify-center text-white border border-gray-700 shadow-md">
                                <VideoIcon size={32} className="text-medical" />
                              </div>
                            )}
                            <div className="text-xs text-gray-500 truncate max-w-xs mx-auto">
                              {uploadedFile?.name} ({(uploadedFile!.size / 1024 / 1024).toFixed(2)} MB)
                            </div>
                            <span className="text-xs font-bold text-medical block">
                              Click or drop to replace file
                            </span>
                          </div>
                        ) : (
                          <>
                            <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                              <Upload size={28} />
                            </div>
                            <h4 className="font-bold text-navy text-sm">
                              Drag &amp; Drop or Browse File
                            </h4>
                            <p className="text-xs text-gray-400 max-w-xs mx-auto mt-1.5 leading-relaxed">
                              Supports student photos, clinical classroom images, university tours, and hostel room videos (.mp4, .png, .jpg, .webp). Max size 50MB.
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    {filePreview && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4 pt-2 border-t border-gray-100"
                      >
                        <h4 className="font-bold text-sm text-navy">Step 2: Add Metadata details</h4>
                        
                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                            Media Title *
                          </label>
                          <input
                            type="text"
                            required
                            value={uploadTitle}
                            onChange={(e) => setUploadTitle(e.target.value)}
                            placeholder="e.g. Osh State University Hostel Mess"
                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-medical font-medium text-sm text-navy"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                              Category *
                            </label>
                            <select
                              value={uploadCategory}
                              onChange={(e) => setUploadCategory(e.target.value)}
                              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-medical font-semibold text-sm text-navy bg-white"
                            >
                              <option>Campus Tour</option>
                              <option>Hostel &amp; Mess</option>
                              <option>Student Activities</option>
                              <option>Counselling</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                              Media Type
                            </label>
                            <input
                              type="text"
                              disabled
                              value={uploadedFile?.type.startsWith("video/") ? "Video File" : "Image File"}
                              className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 font-semibold text-sm text-gray-400 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                            Short Description *
                          </label>
                          <textarea
                            required
                            rows={3}
                            value={uploadDescription}
                            onChange={(e) => setUploadDescription(e.target.value)}
                            placeholder="Briefly describe what students can see in this video or photo..."
                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:border-medical font-medium text-sm text-navy resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSaving || uploadSuccess}
                          className={`w-full py-4 rounded-2xl text-white font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer ${
                            uploadSuccess
                              ? "bg-emerald-500"
                              : "bg-navy hover:bg-navy/90 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-navy/10"
                          }`}
                        >
                          {isSaving ? (
                            <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          ) : uploadSuccess ? (
                            <>
                              <Check size={20} />
                              <span>Saved Successfully!</span>
                            </>
                          ) : (
                            <>
                              <Plus size={20} />
                              <span>Add to Live Gallery</span>
                            </>
                          )}
                        </button>
                      </motion.div>
                    )}

                    {/* Quick Hint */}
                    <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 flex items-start gap-3 mt-4">
                      <Info size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-[11px] leading-relaxed text-slate-500">
                        <span className="font-bold text-primary block mb-0.5">High Capacity Storage</span>
                        Using HTML5 IndexedDB API, your uploaded files are stored securely in your browser's private database. They will persist on your device across reloads, so you can check and preview your layout changes instantly!
                      </div>
                    </div>
                  </form>
                )}

                {/* TAB 2: MANAGE UPLOADED ITEMS */}
                {activeManagerTab === "manage" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-navy">Locally Uploaded Files ({userItems.length})</h4>
                    </div>

                    {userItems.length === 0 ? (
                      <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-100">
                        <ImageIcon size={36} className="mx-auto text-gray-300 mb-3" />
                        <h5 className="font-bold text-navy text-sm">No local uploads</h5>
                        <p className="text-xs text-gray-400 max-w-xs mx-auto mt-1 leading-relaxed">
                          You haven't uploaded any media files yet. Head over to the "Upload New" tab to upload student images and tour videos!
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {userItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                          >
                            {/* Thumbnail preview */}
                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-navy flex-shrink-0 border border-gray-100 relative">
                              {item.type === "image" ? (
                                <img src={item.url} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-white bg-slate-900">
                                  <VideoIcon size={20} className="text-medical" />
                                </div>
                              )}
                            </div>

                            {/* Meta texts */}
                            <div className="flex-1 min-w-0">
                              <h5 className="font-bold text-navy text-sm leading-tight truncate">
                                {item.title}
                              </h5>
                              <p className="text-gray-400 text-xs truncate mt-0.5 font-semibold">
                                {item.category} • {item.type === "video" ? "Video File" : "Image File"}
                              </p>
                              <span className="text-[10px] text-gray-400 block truncate mt-1 max-w-[200px]">
                                File: {item.originalName}
                              </span>
                            </div>

                            {/* Actions buttons */}
                            <div className="flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => {
                                  const idx = galleryItems.findIndex((gi) => gi.id === item.id);
                                  setLightboxIndex(idx);
                                }}
                                className="p-2 hover:bg-gray-100 rounded-full text-navy cursor-pointer"
                                title="View Media"
                              >
                                <Eye size={16} />
                              </button>
                              <button
                                onClick={() => handleDeleteMedia(item.id, item.url)}
                                className="p-2 hover:bg-rose-50 rounded-full text-rose-500 cursor-pointer"
                                title="Delete Media"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 3: DEVELOPER/PERMANENT GUIDE */}
                {activeManagerTab === "dev" && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-bold text-navy text-sm">How to Save Media Permanently</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                        Since browser-based IndexedDB is client-specific and local, any uploads are only visible on your current device. 
                        To deploy these student photos and videos permanently so that <strong>every site visitor can view them</strong>, perform these three quick steps:
                      </p>
                    </div>

                    {/* Step Cards */}
                    <div className="space-y-4">
                      {/* Step 1 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center">
                            1
                          </span>
                          <h5 className="font-bold text-navy text-xs uppercase tracking-wider">
                            Save files into your repository
                          </h5>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                          Take the original image/video files you just uploaded and paste them inside the public assets folder of this project:
                          <code className="block mt-1.5 bg-gray-200/60 p-2 rounded text-[10px] font-mono text-navy font-bold select-all">
                            c:\Users\mdhas\OneDrive\Desktop\WCIEC\public\images\HomeGallery\
                          </code>
                        </p>
                      </div>

                      {/* Step 2 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center">
                            2
                          </span>
                          <h5 className="font-bold text-navy text-xs uppercase tracking-wider">
                            Copy dynamic config block
                          </h5>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed mb-3">
                          We have automatically generated the compliant JavaScript array entries for your uploaded assets. Copy the code snippet using the button below:
                        </p>
                        
                        <button
                          type="button"
                          onClick={handleCopyCode}
                          disabled={userItems.length === 0}
                          className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                            userItems.length === 0
                              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                              : copiedCode
                              ? "bg-emerald-500 text-white"
                              : "bg-navy hover:bg-navy/95 text-white"
                          }`}
                        >
                          {copiedCode ? (
                            <>
                              <Check size={14} />
                              <span>JSON Copied successfully!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>Copy JSON Configuration ({userItems.length} items)</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Step 3 */}
                      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-5 h-5 rounded-full bg-navy text-white text-[10px] font-bold flex items-center justify-center">
                            3
                          </span>
                          <h5 className="font-bold text-navy text-xs uppercase tracking-wider">
                            Paste into Gallery config list
                          </h5>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                          Open this gallery component file:
                          <code className="block mt-1 bg-gray-200/60 p-1 rounded text-[10px] font-mono text-navy font-bold select-all">
                            src/components/sections/GallerySection.tsx
                          </code>
                          Scroll up to line 98, locate the <code className="bg-gray-200 p-0.5 rounded text-[10px] font-mono">INITIAL_ITEMS</code> array declaration, and paste the copied block right at the top of the array!
                        </p>
                      </div>
                    </div>

                    {userItems.length > 0 && (
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-navy uppercase">
                          Preview Generated JSON Config code:
                        </label>
                        <pre className="p-3 bg-gray-900 rounded-2xl text-[10px] text-emerald-400 font-mono overflow-x-auto max-h-48 border border-white/5 no-scrollbar leading-relaxed">
                          {generateDevCode()}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Sidebar Footer Panel */}
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-semibold uppercase">
                  WCIEC Administrative tool
                </span>
                <span className="text-xs font-bold text-navy">
                  V1.2 Build
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
