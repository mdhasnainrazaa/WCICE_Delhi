export interface University {
  slug: string;
  name: string;
  location: string;
  about: string;
  quickFacts: string[];
  fees: {
    year: string;
    tutionFee: string;
    hostelFee: string;
    total: string;
  }[];
  hostelDetails: string;
  foodDetails: string;
  admissionProcess: string[];
  documentsRequired: string[];
  faqs: { question: string; answer: string }[];
}

export const universities: University[] = [
  {
    slug: "osh-state-university",
    name: "Osh State University International Medical Faculty",
    location: "Osh, Kyrgyzstan",
    about: "Osh State University is one of the oldest and largest universities in Kyrgyzstan. The International Medical Faculty has been training foreign students since 1992 and is renowned for its high academic standards.",
    quickFacts: [
      "Established: 1951",
      "Medium: English",
      "Duration: 5+1 Years",
      "Recognized by: WHO, NMC, ECFMG",
      "World Rank: Top in Kyrgyzstan"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,500", hostelFee: "$600", total: "$4,100" },
      { year: "2nd - 6th Year", tutionFee: "$3,500", hostelFee: "$600", total: "$4,100" }
    ],
    hostelDetails: "Separate hostels for boys and girls with 24/7 security, Wi-Fi, and laundry facilities. Indian wardens are available.",
    foodDetails: "Dedicated Indian mess serving North and South Indian food. Veg and Non-veg options available.",
    admissionProcess: [
      "Online Application",
      "Admission Letter Issuance",
      "Visa Invitation",
      "Visa Stamping",
      "Travel Arrangement"
    ],
    documentsRequired: [
      "10th & 12th Marksheets",
      "Passport Copy",
      "NEET Score Card",
      "Photographs"
    ],
    faqs: [
      { question: "Is Osh State University NMC recognized?", answer: "Yes, it is fully recognized by the National Medical Commission (NMC) and WHO." }
    ]
  },
  {
    slug: "jalal-abad-state-university",
    name: "Jalal-Abad State University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Jalal-Abad State University (JASU) is a premier public university in Kyrgyzstan providing high-quality medical education at an affordable cost.",
    quickFacts: [
      "Established: 1993",
      "Medium: English",
      "Duration: 5 Years",
      "Affordable Fee Structure",
      "Modern Infrastructure"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,200", hostelFee: "$600", total: "$3,800" },
      { year: "2nd - 5th Year", tutionFee: "$3,200", hostelFee: "$600", total: "$3,800" }
    ],
    hostelDetails: "Comfortable hostels with heating systems, kitchen facilities, and study rooms.",
    foodDetails: "Indian food mess available on campus with Indian chefs.",
    admissionProcess: [
      "Eligibility Check",
      "Admission Letter",
      "Ministry Approval",
      "Visa Processing",
      "Fly to JASU"
    ],
    documentsRequired: [
      "10th/12th Certificates",
      "NEET Score Card",
      "Original Passport"
    ],
    faqs: [
      { question: "Is JASU safe for Indian students?", answer: "Yes, Kyrgyzstan is very safe and the university provides 24/7 security." }
    ]
  },
  {
    slug: "jalal-abad-international-university",
    name: "Jalal-Abad International University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Jalal-Abad International University is a modern institution focused on global medical education standards with state-of-the-art facilities.",
    quickFacts: [
      "Established: Recent",
      "Medium: English",
      "Duration: 5 Years",
      "International Faculty",
      "Advanced Labs"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,800", hostelFee: "$700", total: "$4,500" },
      { year: "2nd - 5th Year", tutionFee: "$3,800", hostelFee: "$700", total: "$4,500" }
    ],
    hostelDetails: "Modern hostel rooms with all necessary amenities and security.",
    foodDetails: "International and Indian cuisines served in the university mess.",
    admissionProcess: [
      "Document Submission",
      "Interview",
      "Offer Letter",
      "Visa Support"
    ],
    documentsRequired: [
      "Educational Certificates",
      "Passport",
      "Medical Insurance"
    ],
    faqs: [
      { question: "What is the medium of instruction?", answer: "The medium of instruction is 100% English." }
    ]
  },
  {
    slug: "central-asian-international-medical-university",
    name: "Central Asian International Medical University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Central Asian International Medical University (CAIMU) offers innovative medical programs designed to prepare students for global healthcare challenges.",
    quickFacts: [
      "Established: 2018",
      "Medium: English",
      "Duration: 5 Years",
      "Modern Curriculum",
      "Clinical Training"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,600", hostelFee: "$600", total: "$4,200" },
      { year: "2nd - 5th Year", tutionFee: "$3,600", hostelFee: "$600", total: "$4,200" }
    ],
    hostelDetails: "Well-maintained student housing with modern facilities.",
    foodDetails: "Indian and local food options available for international students.",
    admissionProcess: [
      "Application Form",
      "Verification",
      "Admission Letter",
      "Visa Process"
    ],
    documentsRequired: [
      "Academic Transcripts",
      "Passport",
      "NEET Result"
    ],
    faqs: [
      { question: "Are there Indian students at CAIMU?", answer: "Yes, there is a large community of Indian students studying at CAIMU." }
    ]
  },
  {
    slug: "osh-international-medical-university",
    name: "Osh International Medical University",
    location: "Osh, Kyrgyzstan",
    about: "Osh International Medical University is dedicated to providing high-quality medical education with a strong emphasis on practical training and research.",
    quickFacts: [
      "Established: 2019",
      "Medium: English",
      "Duration: 5 Years",
      "Practical Focus",
      "Experienced Faculty"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$4,000", hostelFee: "$700", total: "$4,700" },
      { year: "2nd - 5th Year", tutionFee: "$4,000", hostelFee: "$700", total: "$4,700" }
    ],
    hostelDetails: "Premium hostel facilities with Wi-Fi, study halls, and laundry.",
    foodDetails: "Quality Indian mess provided on campus.",
    admissionProcess: [
      "Apply Online",
      "Document Approval",
      "Invitation Letter",
      "Departure"
    ],
    documentsRequired: [
      "12th Certificate",
      "Birth Certificate",
      "Valid Passport"
    ],
    faqs: [
      { question: "How is the clinical exposure?", answer: "The university is affiliated with major hospitals in Osh providing excellent clinical exposure." }
    ]
  }
];

