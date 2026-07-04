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
  eligibility?: string[];
  advantages?: string[];
  disadvantages?: string[];
  ranking?: string;
  faqs: { question: string; answer: string }[];
  established?: string;
  bannerImage?: string;
}

export const universities: University[] = [
  {
    slug: "osh-state-university",
    name: "Osh State University International Medical Faculty",
    location: "Osh, Kyrgyzstan",
    about: "Osh State University is one of the oldest and largest universities in Kyrgyzstan. The International Medical Faculty has been training foreign students since 1992 and is renowned for its high academic standards, offering a premium MD/MBBS degree recognized globally.",
    established: "1939",
    bannerImage: "/images/osu-gallery/osh-state-university-campus.webp",
    ranking: "Ranked #1 in Kyrgyzstan, Top 100 in Central Asia",
    quickFacts: [
      "Established: 1939",
      "Medium: English",
      "Duration: 5 Years",
      "Recognized by: WHO, NMC, ECFMG",
      "World Rank: Top in Kyrgyzstan"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,500", hostelFee: "$600", total: "$4,100" },
      { year: "2nd - 5th Year", tutionFee: "$3,500", hostelFee: "$600", total: "$4,100" }
    ],
    hostelDetails: "Separate Osh State University Hostel for boys and girls with 24/7 security, Wi-Fi, and laundry facilities. Indian wardens are available. The Osh State University Hostel is located securely within the campus boundaries.",
    foodDetails: "Dedicated Indian mess serving North and South Indian food. Veg and Non-veg options available inside the Osh State University Hostel premises.",
    admissionProcess: [
      "Online Application Submission to WCIEC",
      "Osh State University Admission Letter Issuance",
      "Ministry Visa Invitation",
      "Visa Stamping",
      "Pre-departure & Travel Arrangement to Osh State University Kyrgyzstan"
    ],
    eligibility: [
      "50% marks in PCB in 12th standard (40% for reserved categories).",
      "Must be NEET qualified.",
      "Must be 17 years old by December 31st."
    ],
    documentsRequired: [
      "10th & 12th passing certificates/marksheets",
      "Original passport (minimum 2 years validity)",
      "NEET qualified score card copy",
      "Recent passport-size photographs",
      "Medical fitness certificate"
    ],
    advantages: [
      "Largest clinical hospitals in Osh State University Kyrgyzstan.",
      "Exceptional Osh State University FMGE passing rate.",
      "100% English medium."
    ],
    disadvantages: [
      "Highly competitive Osh State University Admission process.",
      "Cold winter climate requires adjustment."
    ],
    faqs: [
      { question: "Is Osh State University NMC Approved?", answer: "Yes, Osh State University is fully recognized by the National Medical Commission (NMC) of India, WHO, and WDOMS. Therefore, Osh State University NMC Approved status is guaranteed." },
      { question: "How to get Osh State University Admission?", answer: "Osh State University Admission is direct via WCIEC Delhi. You need your 12th PCB marks and a qualified NEET scorecard." },
      { question: "What is the Osh State University Ranking?", answer: "The Osh State University Ranking is widely considered #1 in Kyrgyzstan for medical studies among Indian students." },
      { question: "What are the Osh State University Fees?", answer: "The Osh State University Fees are $3,500 per year for tuition and $600 for the Osh State University Hostel, totaling $4,100 annually." },
      { question: "How is the Osh State University FMGE passing rate?", answer: "Osh State University FMGE results are historically among the highest in Kyrgyzstan due to targeted NExT coaching." },
      { question: "Why choose Osh State University Kyrgyzstan?", answer: "Osh State University Kyrgyzstan offers premium medical education, massive clinical exposure, and a very safe Osh State University Hostel environment." },
      { question: "Is Osh State University MBBS valid in India?", answer: "Yes, Osh State University MBBS degrees are fully valid in India after clearing the FMGE/NExT." },
      { question: "How is the Osh State University Hostel?", answer: "The Osh State University Hostel provides world-class security, Indian food, heating systems, and high-speed internet." }
    ]
  },
  {
    slug: "jalal-abad-state-university",
    name: "Jalal Abad State University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Jalal Abad State University (JASU) is a premier public university in Kyrgyzstan providing high-quality medical education at an affordable cost. Known formally as Jalal-Abad State Medical University, it offers one of the best Jalal Abad State University MBBS programs for international students.",
    established: "1993",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
    ranking: "Top 5 Medical Universities in Kyrgyzstan",
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
    hostelDetails: "The Jalal Abad State University Hostel offers comfortable rooms with heating systems, kitchen facilities, and study rooms.",
    foodDetails: "Indian food mess available on campus with professional Indian chefs.",
    admissionProcess: [
      "Eligibility Check for Jalal Abad State University Admission",
      "Admission Letter",
      "Ministry Approval",
      "Visa Processing",
      "Fly to JASU"
    ],
    eligibility: [
      "50% marks in PCB in 12th standard.",
      "NEET qualified.",
      "Valid Indian Passport."
    ],
    documentsRequired: [
      "10th/12th Certificates",
      "NEET Score Card",
      "Original Passport"
    ],
    advantages: [
      "Extremely affordable Jalal Abad State University Fees.",
      "Excellent Jalal Abad State University FMGE coaching.",
      "Very safe campus."
    ],
    disadvantages: [
      "Limited direct international flights to Jalal-Abad (travel via Bishkek/Osh)."
    ],
    faqs: [
      { question: "Is Jalal Abad State University NMC Approved?", answer: "Yes, Jalal Abad State University NMC Approved status is verified. It is fully recognized by NMC and WHO." },
      { question: "What are the Jalal Abad State University Fees?", answer: "The Jalal Abad State University Fees are very affordable at $3,200 per year for tuition." },
      { question: "How to apply for Jalal Abad State University Admission?", answer: "You can apply for Jalal Abad State University Admission through WCIEC Delhi with your 10+2 marks and NEET scorecard." },
      { question: "What is the Jalal Abad State University Ranking?", answer: "The Jalal Abad State University Ranking places it among the top government universities in Kyrgyzstan for medical studies." },
      { question: "How is the Jalal Abad State University Hostel?", answer: "The Jalal Abad State University Hostel is highly secure with 24/7 CCTV and provides Indian mess facilities." },
      { question: "What is the Jalal Abad State University FMGE passing rate?", answer: "The Jalal Abad State University FMGE passing rate is excellent due to its robust English-medium curriculum and dedicated Indian faculty." },
      { question: "Why choose Jalal Abad State University MBBS?", answer: "A Jalal Abad State University MBBS offers a balance of low cost, high-quality government education, and safety." }
    ]
  },
  {
    slug: "jalal-abad-international-university",
    name: "Jalal-Abad International University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Jalal-Abad International University is a modern institution focused on global medical education standards with state-of-the-art facilities for a premium Jalal-Abad International University MBBS experience.",
    established: "2015",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
    ranking: "Emerging Top Medical University in Kyrgyzstan",
    quickFacts: [
      "Established: 2015",
      "Medium: English",
      "Duration: 5 Years",
      "International Faculty",
      "Advanced Labs"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,800", hostelFee: "$700", total: "$4,500" },
      { year: "2nd - 5th Year", tutionFee: "$3,800", hostelFee: "$700", total: "$4,500" }
    ],
    hostelDetails: "The Jalal-Abad International University Hostel provides modern rooms with all necessary amenities and high security.",
    foodDetails: "International and Indian cuisines served in the university mess.",
    admissionProcess: [
      "Document Submission for Jalal-Abad International University Admission",
      "Interview",
      "Offer Letter",
      "Visa Support"
    ],
    eligibility: [
      "50% marks in PCB.",
      "Valid NEET score.",
      "17+ years of age."
    ],
    documentsRequired: [
      "Educational Certificates",
      "Passport",
      "Medical Insurance"
    ],
    faqs: [
      { question: "How to get Jalal-Abad International University Admission?", answer: "Jalal-Abad International University Admission requires you to submit 12th transcripts and a NEET scorecard to WCIEC Delhi." },
      { question: "What are the Jalal-Abad International University Fees?", answer: "Jalal-Abad International University Fees are $3,800 per year for tuition and $700 for the hostel." },
      { question: "What is the Jalal-Abad International University Ranking?", answer: "The Jalal-Abad International University Ranking reflects its status as a rapidly growing, high-tech modern medical institute." },
      { question: "How is the Jalal-Abad International University Hostel?", answer: "The Jalal-Abad International University Hostel is equipped with modern amenities, laundry, and fast internet." },
      { question: "Is a Jalal-Abad International University MBBS valid in India?", answer: "Yes, the Jalal-Abad International University MBBS program strictly complies with NMC guidelines." }
    ]
  },
  {
    slug: "central-asian-international-medical-university",
    name: "Central Asian International Medical University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Central Asian International Medical University (CAIMU) offers innovative medical programs designed to prepare students for global healthcare challenges. CAIMU MBBS is known for its modern infrastructure and strong clinical exposure.",
    established: "2018",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
    ranking: "Top Private Medical University in Kyrgyzstan",
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
    hostelDetails: "The Central Asian International Medical University Hostel provides well-maintained student housing with modern facilities.",
    foodDetails: "Indian and local food options available for international students.",
    admissionProcess: [
      "Application Form for CAIMU Admission",
      "Verification",
      "Admission Letter",
      "Visa Process"
    ],
    eligibility: [
      "12th Grade PCB (50%).",
      "NEET Qualified.",
      "Medically fit."
    ],
    documentsRequired: [
      "Academic Transcripts",
      "Passport",
      "NEET Result"
    ],
    faqs: [
      { question: "Is CAIMU NMC Approved?", answer: "Yes, CAIMU NMC Approved status is fully confirmed. It complies with all National Medical Commission guidelines." },
      { question: "What are the CAIMU Fees?", answer: "CAIMU Fees are highly affordable, with tuition at $3,600 per year." },
      { question: "How is the Central Asian International Medical University Hostel?", answer: "The Central Asian International Medical University Hostel is secure, clean, and provides a great environment for Indian students." },
      { question: "How to get CAIMU Admission?", answer: "CAIMU Admission is straightforward via WCIEC Delhi. Submit your NEET card and 12th marks to get started." },
      { question: "What is the CAIMU Ranking?", answer: "The CAIMU Ranking is highly competitive among private medical colleges in Central Asia." },
      { question: "How is the CAIMU FMGE pass percentage?", answer: "CAIMU FMGE results are strong due to their rigorous clinical practice and specialized coaching for Indian students." },
      { question: "Is CAIMU MBBS good for Indian students?", answer: "Yes, studying CAIMU MBBS offers modern education, great hostel facilities, and high safety." }
    ]
  },
  {
    slug: "osh-international-medical-university",
    name: "Osh International Medical University",
    location: "Osh, Kyrgyzstan",
    about: "Osh International Medical University (OIMU) is dedicated to providing high-quality medical education with a strong emphasis on practical training and research. OIMU MBBS is highly sought after by Indian students.",
    established: "2019",
    bannerImage: "/images/osu-gallery/osh-state-university-campus.webp",
    ranking: "Fastest Growing Medical University in Osh",
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
    hostelDetails: "The OIMU Hostel provides premium facilities with Wi-Fi, study halls, and laundry.",
    foodDetails: "Quality Indian mess provided on campus.",
    admissionProcess: [
      "Apply Online for OIMU Admission",
      "Document Approval",
      "Invitation Letter",
      "Departure"
    ],
    eligibility: [
      "Minimum 50% in Physics, Chemistry, Biology.",
      "Must have qualified NEET.",
      "Valid Passport."
    ],
    documentsRequired: [
      "12th Certificate",
      "Birth Certificate",
      "Valid Passport"
    ],
    faqs: [
      { question: "What are the OIMU Fees?", answer: "OIMU Fees are $4,000 per year for tuition and $700 for the premium OIMU Hostel." },
      { question: "How to secure OIMU Admission?", answer: "OIMU Admission can be secured easily through WCIEC Delhi by providing your NEET score and academic documents." },
      { question: "What is the OIMU Ranking?", answer: "The OIMU Ranking places it as one of the fastest-growing and highly respected modern universities in Osh." },
      { question: "How is the OIMU Hostel?", answer: "The OIMU Hostel offers excellent safety, Indian food, and a highly studious environment." },
      { question: "How is OIMU FMGE performance?", answer: "OIMU FMGE performance is excellent because the curriculum is directly aligned with NExT/FMGE syllabus requirements." },
      { question: "Is OIMU MBBS valid in India?", answer: "Yes, an OIMU MBBS degree is globally recognized and fully valid in India." }
    ]
  }
];
