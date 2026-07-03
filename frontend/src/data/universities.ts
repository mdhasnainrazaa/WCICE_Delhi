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
    hostelDetails: "Separate hostels for boys and girls with 24/7 security, Wi-Fi, and laundry facilities. Indian wardens are available.",
    foodDetails: "Dedicated Indian mess serving North and South Indian food. Veg and Non-veg options available.",
    admissionProcess: [
      "Online Application Submission",
      "Admission Letter Issuance",
      "Ministry Visa Invitation",
      "Visa Stamping",
      "Pre-departure & Travel Arrangement"
    ],
    documentsRequired: [
      "10th & 12th passing certificates/marksheets",
      "Original passport (minimum 2 years validity)",
      "NEET qualified score card copy",
      "Recent passport-size photographs",
      "Medical fitness certificate"
    ],
    faqs: [
      {
        question: "Is Osh State University NMC approved?",
        answer: "Yes, Osh State University is fully recognized by the National Medical Commission (NMC) of India, WHO, and WDOMS. Graduates are eligible to appear for the FMGE and NExT screening tests."
      },
      {
        question: "Is Osh State University good for Indian students?",
        answer: "Yes, Osh State University is highly recommended. It offers 100% English medium courses, separate hostels for boys and girls, authentic Indian food, FMGE exam coaching, and a large supportive community of over 3,000 Indian students."
      },
      {
        question: "What are Osh State University MBBS fees?",
        answer: "The tuition fee is highly affordable at $3,500 per year, and the hostel fee is $600 per year. The total tuition and accommodation cost amounts to approximately $4,100 annually."
      },
      {
        question: "Is NEET compulsory for admission at Osh State University?",
        answer: "Yes, qualifying the NEET exam is mandatory for Indian students to secure MBBS admission at Osh State University if they wish to return and practice medicine in India."
      },
      {
        question: "Can Indian students study here safely?",
        answer: "Absolutely. Kyrgyzstan is very friendly and safe for international students. The university has active security teams, CCTV monitoring, and dedicated Indian student wardens in the hostels."
      },
      {
        question: "What is the FMGE eligibility or pass rate of Osh State University?",
        answer: "Graduates are fully eligible to appear for FMGE/NExT. The university consistently ranks among the top institutions in Kyrgyzstan for FMGE pass percentages due to its rigorous curriculum and special coaching faculty."
      },
      {
        question: "What are the hostel facilities like at Osh State University?",
        answer: "The university provides modern separate hostels for male and female students with laundry, high-speed Wi-Fi, heating systems, and study desks."
      },
      {
        question: "Is Indian food available at the hostel mess?",
        answer: "Yes, there is an on-campus Indian mess serving nutritious vegetarian and non-vegetarian meals prepared by professional Indian cooks."
      },
      {
        question: "What is the duration of the MBBS program at Osh State University?",
        answer: "The MD (equivalent to MBBS) program is a 5-year course, satisfying the NMC's requirement of a minimum 54-month duration for foreign medical degrees."
      },
      {
        question: "Does the university offer scholarships for Indian students?",
        answer: "The tuition is already highly subsidized by the government. However, outstanding students may apply for merit-based scholarships during their studies based on semesters' performance."
      },
      {
        question: "What is the ranking of Osh State University?",
        answer: "Osh State University is ranked as the premier public university in the Kyrgyz Republic and is highly respected globally for its academic standard."
      },
      {
        question: "What documents are required for MBBS admission at Osh State University?",
        answer: "You need passing certificates and marksheets of 10th and 12th grades (minimum 50% in PCB), a valid passport, a qualified NEET scorecard, and recent passport-size photos."
      },
      {
        question: "What is the admission process for Osh State University through WCIEC Delhi?",
        answer: "The process involves submitting marksheets and passport scans to WCIEC Delhi, receiving the offer/admission letter, processing the visa invitation from the Ministry of Education, visa stamping, and flying to the university."
      },
      {
        question: "What clinical exposure does Osh State University offer?",
        answer: "Students receive rich clinical training starting from the third year at major state and private affiliated hospitals in Osh city, interacting with local patients under expert medical supervision."
      },
      {
        question: "Who is the official partner for Osh State University admission?",
        answer: "WCIEC Delhi (World Choice International Education Consultant) is the official trusted admission partner, helping students from application, visa processing to hostelling and local registrations."
      },
      {
        question: "Can I apply for Osh State University MBBS admission online?",
        answer: "Yes, you can apply online through the official WCIEC Delhi website. Our expert counselors will handle your entire application process smoothly."
      },
      {
        question: "What is the medium of instruction for MBBS at Osh State University?",
        answer: "The entire course is taught in 100% English. Local language classes (Russian/Kyrgyz) are also conducted to help students interact with patients during clinical rotations."
      },
      {
        question: "Is there any entrance exam required for Osh State University other than NEET?",
        answer: "No, there is no additional entrance exam or donation required. Admission is based directly on your 12th PCB percentage and NEET qualifying scores."
      },
      {
        question: "How does WCIEC Delhi support students after arrival in Kyrgyzstan?",
        answer: "WCIEC Delhi provides extensive after-arrival support including airport pickup, hostel check-in, registration with the local ministry, medical insurance setup, and local SIM card assistance."
      },
      {
        question: "What is the climate like in Osh, Kyrgyzstan?",
        answer: "Osh has a temperate climate. Winters are cold with occasional snowfall, while summers are warm and pleasant. Hostels and classrooms are equipped with central heating."
      },
      {
        question: "Are graduates of Osh State University eligible to work in countries other than India?",
        answer: "Yes, because the university is WHO listed and ECFMG recognized, graduates are eligible to sit for international medical licensing exams such as USMLE (USA), PLAB (UK), and AMC (Australia)."
      },
      {
        question: "What is the FMGE passing ratio of Osh State University graduates?",
        answer: "Osh State University historically has had one of the highest FMGE passing ratios among medical colleges in Kyrgyzstan, with dedicated FMGE/NExT coaching seminars offered on campus."
      },
      {
        question: "Is there a library available for medical students?",
        answer: "Yes, the university has a massive medical library containing thousands of physical books, research journals, and online digital databases accessible to all students."
      },
      {
        question: "Does Osh State University have clinical simulation centers?",
        answer: "Yes, the university features state-of-the-art simulation labs where students practice clinical skills on advanced medical manikins before actual hospital training."
      },
      {
        question: "Why should I choose WCIEC Delhi for my MBBS admission?",
        answer: "WCIEC Delhi has over 15+ years of experience, having successfully guided 5000+ Indian students. We offer complete documentation, visa support, pre-departure briefings, and dedicated 24/7 post-arrival assistance."
      }
    ]
  },
  {
    slug: "jalal-abad-state-university",
    name: "Jalal-Abad State University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Jalal-Abad State University (JASU) is a premier public university in Kyrgyzstan providing high-quality medical education at an affordable cost.",
    established: "1993",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
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
    established: "2015",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
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
    established: "2018",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
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
    established: "2019",
    bannerImage: "/images/osu-gallery/osh-state-university-campus.webp",
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

