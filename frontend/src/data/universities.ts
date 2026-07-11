export interface University {
  slug: string;
  name: string;
  location: string;
  about: string;
  detailedOverview: string;
  clinicalExposure: string;
  fmgePerformance: string;
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
  clinicalBeds?: string;
}

export const universities: University[] = [
  {
    slug: "osh-state-university",
    name: "Osh State University International Medical Faculty",
    location: "Osh, Kyrgyzstan",
    about: "Osh State University is the oldest and most prestigious medical university in Kyrgyzstan. The International Medical Faculty (IMF) has been training foreign students since 1992 and is renowned for its high academic standards, offering a premium MD/MBBS degree recognized globally.",
    detailedOverview: "Established in 1939, Osh State University (OSU) stands as a monumental pillar of higher education in Central Asia. The International Medical Faculty, specifically designed for international students, operates entirely in English. The university boasts an incredibly massive Indian alumni network, many of whom are now successful practicing doctors across top hospitals in India, the UK, and the USA. OSU is heavily funded by the Kyrgyz government, ensuring state-of-the-art infrastructure, massive digital libraries, and continuous academic innovation.",
    clinicalExposure: "Osh State University offers the highest volume of clinical exposure in Kyrgyzstan. Students have access to over 10 major affiliated government hospitals in Osh city, including the Osh Regional Clinical Hospital and the City Maternity Hospital. From the 3rd year onwards, Indian students participate in daily clinical rotations, interacting directly with real patients to master diagnosis and treatment protocols.",
    fmgePerformance: "OSU consistently ranks at the top for FMGE (Foreign Medical Graduates Examination) passing rates. The university provides specialized NExT/FMGE coaching from Indian professors starting from the 1st year, heavily focusing on clinical case studies and MCQs aligned with the Indian curriculum.",
    established: "1939",
    bannerImage: "/images/osu-gallery/osh-state-university-campus.webp",
    ranking: "Ranked #1 in Kyrgyzstan, Top 100 in Central Asia",
    clinicalBeds: "3,000+ Beds (across 10+ teaching hospitals)",
    quickFacts: [
      "Established: 1939",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Recognized by: WHO, NMC, ECFMG",
      "World Rank: Top in Kyrgyzstan"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,500", hostelFee: "$600", total: "$4,100" },
      { year: "2nd - 5th Year", tutionFee: "$3,500", hostelFee: "$600", total: "$4,100" }
    ],
    hostelDetails: "Separate Osh State University Hostels for boys and girls with top-tier 24/7 security, central heating systems, Wi-Fi, and laundry facilities. Indian wardens are available for student support. The Osh State University Hostel is located securely within the campus boundaries.",
    foodDetails: "A highly hygienic, dedicated Indian mess serves three meals a day. Expert Indian chefs prepare both North and South Indian food, offering a massive variety of vegetarian and non-vegetarian options.",
    admissionProcess: [
      "Submit 12th marksheet and NEET scorecard to WCIEC Delhi.",
      "Receive Osh State University Provisional Admission Letter within 48 hours.",
      "Ministry Visa Invitation processing (3-4 weeks).",
      "Visa Stamping at the Embassy in New Delhi.",
      "Pre-departure briefing and guided group travel to Osh State University."
    ],
    eligibility: [
      "Minimum 50% aggregate marks in Physics, Chemistry, and Biology in 12th standard (40% for reserved categories).",
      "Must have qualified the NEET-UG examination.",
      "Must be at least 17 years old by December 31st of the admission year."
    ],
    documentsRequired: [
      "10th & 12th passing certificates/marksheets (Apostilled)",
      "Original passport (minimum 2 years validity)",
      "NEET qualified score card copy",
      "10 Recent passport-size photographs (white background)",
      "Official Medical fitness certificate (HIV/TB negative)"
    ],
    advantages: [
      "The largest network of clinical hospitals in Kyrgyzstan.",
      "Exceptional FMGE/NExT passing rate due to specialized coaching.",
      "100% English medium instruction by highly experienced professors.",
      "A massive, supportive Indian student community (1,500+ students)."
    ],
    disadvantages: [
      "Highly competitive admission process; seats fill up rapidly by July.",
      "The cold winter climate in Osh requires a short adjustment period."
    ],
    faqs: [
      { question: "Is Osh State University NMC Approved?", answer: "Yes, Osh State University is fully recognized by the National Medical Commission (NMC) of India, WHO, and WDOMS. The degree is fully valid in India." },
      { question: "What is the Osh State University Ranking?", answer: "The Osh State University Ranking is widely considered #1 in Kyrgyzstan for medical studies among international and Indian students." },
      { question: "What are the Osh State University Fees for Indian Students?", answer: "The Osh State University Fees are highly affordable at $3,500 per year for tuition and $600 for the hostel, making the total $4,100 annually." },
      { question: "How to get Osh State University Admission 2026?", answer: "You can secure Osh State University Admission directly via WCIEC Delhi. You only need your 12th PCB transcripts and a qualified NEET scorecard." },
      { question: "Is the Osh State University Hostel safe for girls?", answer: "Absolutely. The Osh State University Hostel provides completely separate blocks for female students, guarded by 24/7 CCTV and strict entry protocols overseen by Indian wardens." },
      { question: "How is the Osh State University FMGE passing rate?", answer: "Osh State University FMGE results are historically among the highest in Kyrgyzstan, largely due to the mandatory, high-quality NExT coaching provided on campus." }
    ]
  },
  {
    slug: "jalal-abad-state-university",
    name: "Jalal Abad State University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Jalal Abad State University (JASU) is a premier public university in Kyrgyzstan providing high-quality medical education at an incredibly affordable cost. Formally known as Jalal-Abad State Medical University, it is one of the most popular choices for Indian students.",
    detailedOverview: "Founded in 1993, Jalal Abad State University operates under the Ministry of Education and Science of the Kyrgyz Republic. JASU is deeply committed to international education, maintaining a highly disciplined and strictly monitored academic environment. The university focuses heavily on producing competent medical professionals who can seamlessly integrate into global healthcare systems, making it a budget-friendly yet premium option for MBBS.",
    clinicalExposure: "JASU has strong affiliations with the Jalal-Abad Provincial Hospital and multiple city clinics. Students begin their hospital visits early in the curriculum, gaining hands-on experience in surgery, internal medicine, pediatrics, and gynecology. The patient inflow at Jalal-Abad hospitals ensures students witness a diverse range of medical cases.",
    fmgePerformance: "JASU has built a stellar reputation for its FMGE coaching. The university regularly invites guest lecturers from leading Indian medical coaching institutes. This rigorous preparation, combined with strict internal exams, results in a very high FMGE clearance rate for its Indian graduates.",
    established: "1993",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
    ranking: "Top 5 Medical Universities in Kyrgyzstan",
    clinicalBeds: "1,200+ Beds (Provincial Hospital & city clinics)",
    quickFacts: [
      "Established: 1993",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Fee Range: Highly Affordable",
      "Status: Government Public University"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,200", hostelFee: "$600", total: "$3,800" },
      { year: "2nd - 5th Year", tutionFee: "$3,200", hostelFee: "$600", total: "$3,800" }
    ],
    hostelDetails: "The Jalal Abad State University Hostel offers comfortable, secure rooms equipped with modern central heating systems, attached washrooms, high-speed internet, and dedicated quiet study rooms. Security is maintained around the clock.",
    foodDetails: "An excellent Indian food mess operates directly inside the campus. Professional Indian chefs ensure students receive nutritious, hygienic, and authentic home-style meals daily.",
    admissionProcess: [
      "Free profile evaluation and Eligibility Check by WCIEC.",
      "Submission of 10+2 marks and NEET scorecard.",
      "Issuance of the official JASU Admission Letter.",
      "Processing of Visa Invitation from the Kyrgyz Ministry.",
      "Forex, flight booking, and group departure to JASU."
    ],
    eligibility: [
      "Minimum 50% marks in Physics, Chemistry, and Biology (12th standard).",
      "Must be officially NEET qualified.",
      "Must possess a Valid Indian Passport."
    ],
    documentsRequired: [
      "10th and 12th original Certificates",
      "NEET Result / Score Card",
      "Original Passport",
      "Medical Insurance and Fitness Certificate"
    ],
    advantages: [
      "Extremely affordable tuition fees ($3,200/year) compared to Indian private colleges.",
      "Excellent, structured FMGE and NExT coaching programs.",
      "A highly secure, gated campus perfect for international students.",
      "Strong support system managed by WCIEC representatives on campus."
    ],
    disadvantages: [
      "Limited direct international flights to Jalal-Abad; students usually travel via Bishkek or Osh."
    ],
    faqs: [
      { question: "Is Jalal Abad State University NMC Approved?", answer: "Yes, Jalal Abad State University NMC Approved status is thoroughly verified. It complies with the latest FMGL 2021 regulations and is fully recognized by NMC and WHO." },
      { question: "What are the Jalal Abad State University Fees?", answer: "The Jalal Abad State University Fees are extremely budget-friendly, set at just $3,200 per year for tuition and $600 for the hostel." },
      { question: "How to apply for Jalal Abad State University Admission?", answer: "You can apply for Jalal Abad State University Admission securely through WCIEC Delhi. Simply submit your 10+2 marks and a valid NEET scorecard." },
      { question: "What is the Jalal Abad State University Ranking?", answer: "The Jalal Abad State University Ranking places it among the top government universities in Kyrgyzstan, particularly favored for its high academic discipline." },
      { question: "How is the Jalal Abad State University Hostel?", answer: "The Jalal Abad State University Hostel is completely secure with 24/7 CCTV surveillance, biometric entry, and provides high-quality Indian mess facilities." },
      { question: "What is the Jalal Abad State University FMGE passing rate?", answer: "The Jalal Abad State University FMGE passing rate is excellent, driven by its robust 100% English-medium curriculum and dedicated Indian faculty coaching." }
    ]
  },
  {
    slug: "jalal-abad-international-university",
    name: "Jalal-Abad International University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Jalal-Abad International University (JAIU) is a modern, rapidly expanding institution focused strictly on global medical education standards. It provides state-of-the-art facilities for a premium MBBS experience.",
    detailedOverview: "Established in 2015, Jalal-Abad International University represents the new wave of tech-forward medical education in Kyrgyzstan. The university was built specifically to cater to the modern needs of international students, featuring digital classrooms, interactive 3D anatomy tables (Anatomage), and fully equipped simulation centers. The campus environment is highly cosmopolitan, boasting an impressive faculty composed of visiting professors from India, Europe, and the CIS region.",
    clinicalExposure: "JAIU emphasizes early clinical exposure. Using advanced simulation labs, students practice procedural skills before interacting with real patients in the affiliated multi-specialty hospitals in the Jalal-Abad region. This structured transition from simulation to real-world clinical practice ensures high student confidence.",
    fmgePerformance: "JAIU's curriculum is inherently integrated with NExT/USMLE standards. The university employs specialized testing software that mimics the NExT exam interface, ensuring Indian students are hyper-prepared for their licensing exams upon graduation.",
    established: "2015",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
    ranking: "Fastest Growing Modern Medical University in Kyrgyzstan",
    clinicalBeds: "800+ Beds (regional multi-specialty clinics)",
    quickFacts: [
      "Established: 2015",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Tech-Forward Simulation Labs",
      "Highly International Faculty"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,800", hostelFee: "$700", total: "$4,500" },
      { year: "2nd - 5th Year", tutionFee: "$3,800", hostelFee: "$700", total: "$4,500" }
    ],
    hostelDetails: "The Jalal-Abad International University Hostel offers premium, modern rooms with luxury amenities, attached bathrooms, high-speed Wi-Fi, and heavy security protocols. It is designed for maximum student comfort.",
    foodDetails: "A high-end multi-cuisine mess operates on campus, serving excellent quality Indian vegetarian and non-vegetarian food alongside international dishes.",
    admissionProcess: [
      "Document Verification by WCIEC Delhi.",
      "Issuance of the Conditional Offer Letter.",
      "Online Interview / Orientation.",
      "Visa Invitation and Stamping.",
      "Flight to Kyrgyzstan."
    ],
    eligibility: [
      "Minimum 50% marks in PCB in 12th board exams.",
      "Must hold a valid NEET qualification score.",
      "Must be 17 years of age."
    ],
    documentsRequired: [
      "10th and 12th Academic Transcripts",
      "Valid Indian Passport",
      "NEET UG Scorecard",
      "Comprehensive Medical Insurance"
    ],
    advantages: [
      "Ultra-modern campus with cutting-edge medical simulation technology.",
      "Curriculum deeply integrated with NExT/USMLE testing patterns.",
      "Premium, highly comfortable hostel living conditions."
    ],
    disadvantages: [
      "Slightly higher fee structure compared to older government universities."
    ],
    faqs: [
      { question: "How to get Jalal-Abad International University Admission?", answer: "Jalal-Abad International University Admission requires you to submit your 12th transcripts and a qualified NEET scorecard to WCIEC Delhi for direct processing." },
      { question: "What are the Jalal-Abad International University Fees?", answer: "Jalal-Abad International University Fees are $3,800 per year for tuition and $700 for the premium hostel, totaling $4,500 annually." },
      { question: "What is the Jalal-Abad International University Ranking?", answer: "The Jalal-Abad International University Ranking reflects its high status as a rapidly growing, high-tech modern medical institute in Central Asia." },
      { question: "How is the Jalal-Abad International University Hostel?", answer: "The Jalal-Abad International University Hostel is equipped with modern luxury amenities, in-house laundry, fast internet, and strict warden supervision." },
      { question: "Is a Jalal-Abad International University MBBS valid in India?", answer: "Yes, the Jalal-Abad International University MBBS program strictly complies with the 54-month duration and 12-month internship rules mandated by the NMC." }
    ]
  },
  {
    slug: "central-asian-international-medical-university",
    name: "Central Asian International Medical University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Central Asian International Medical University (CAIMU) is widely recognized as the most affordable yet highly innovative medical university in Kyrgyzstan. It prepares Indian students to excel in global healthcare.",
    detailedOverview: "Established in 2018, CAIMU was developed from the ground up with a singular mission: to provide the highest quality, competency-based medical education at the lowest possible cost. CAIMU features modern, bright lecture halls, extensive anatomical museums, and a highly dedicated faculty that works closely with international students. The university has quickly become a top choice for students looking for an incredible return on investment without compromising on NMC standards.",
    clinicalExposure: "CAIMU operates with a direct focus on early patient interaction. The university has forged strong alliances with major regional hospitals in Jalal-Abad. Indian students are guided through intensive clinical rotations, ensuring they are well-versed in practical diagnostics and patient care.",
    fmgePerformance: "CAIMU places a massive emphasis on the FMGE/NExT exam. The academic board frequently reviews and adjusts the curriculum to perfectly align with Indian medical standards, resulting in excellent pass rates for hardworking students.",
    established: "2018",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
    ranking: "Most Affordable Top Medical University in Kyrgyzstan",
    clinicalBeds: "600+ Beds (affiliated teaching clinics)",
    quickFacts: [
      "Established: 2018",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Fees: Most Affordable",
      "Focus: Indian Curriculum Alignment"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$3,600", hostelFee: "$600", total: "$4,200" },
      { year: "2nd - 5th Year", tutionFee: "$3,600", hostelFee: "$600", total: "$4,200" }
    ],
    hostelDetails: "The Central Asian International Medical University Hostel provides secure, well-maintained, and fully furnished student housing. It features high-speed internet, recreational areas, and strict entry protocols to ensure safety.",
    foodDetails: "A high-quality Indian mess operates daily, providing hygienic, freshly cooked Indian meals to ensure students feel completely at home.",
    admissionProcess: [
      "Submit Application Form and Documents to WCIEC.",
      "WCIEC performs direct university verification.",
      "Receive CAIMU Admission Letter.",
      "Ministry Visa Processing.",
      "Travel Assistance to Campus."
    ],
    eligibility: [
      "12th Grade PCB (Minimum 50% aggregate).",
      "Must be NEET Qualified.",
      "Medically fit and valid passport holder."
    ],
    documentsRequired: [
      "Academic Transcripts (10th and 12th)",
      "Original Passport",
      "NEET Result / Rank Letter"
    ],
    advantages: [
      "One of the most cost-effective tuition fee structures in Kyrgyzstan.",
      "Curriculum is perfectly tailored for Indian medical students.",
      "Exceptional student support system and Indian mess."
    ],
    disadvantages: [
      "Newer university compared to Osh State, meaning a smaller (but rapidly growing) alumni network."
    ],
    faqs: [
      { question: "Is CAIMU NMC Approved?", answer: "Yes, CAIMU NMC Approved status is fully confirmed. It complies strictly with all National Medical Commission guidelines for Indian students." },
      { question: "What are the CAIMU Fees?", answer: "CAIMU Fees are highly affordable, offering incredible value with tuition set at just $3,600 per year." },
      { question: "How is the Central Asian International Medical University Hostel?", answer: "The Central Asian International Medical University Hostel is highly secure, clean, and provides a peaceful, study-focused environment for Indian students." },
      { question: "How to get CAIMU Admission?", answer: "CAIMU Admission is straightforward and transparent via WCIEC Delhi. Submit your NEET card and 12th marks to get guaranteed admission." },
      { question: "What is the CAIMU Ranking?", answer: "The CAIMU Ranking is highly competitive, positioned as a top-tier private medical college for international students in Central Asia." },
      { question: "Is CAIMU MBBS good for Indian students?", answer: "Absolutely. Studying CAIMU MBBS offers modern education, great hostel facilities, excellent NExT coaching, and high campus safety." }
    ]
  },
  {
    slug: "osh-international-medical-university",
    name: "Osh International Medical University",
    location: "Osh, Kyrgyzstan",
    about: "Osh International Medical University (OIMU) is a premium institution dedicated to providing high-quality medical education with a massive emphasis on practical training, research, and luxury student living.",
    detailedOverview: "Founded in 2019, Osh International Medical University is the crown jewel of modern medical education in Osh city. OIMU was built to provide an elite academic experience, keeping class sizes small to guarantee personalized attention from professors. The university features breathtaking infrastructure, highly advanced medical laboratories, and a curriculum that heavily integrates modern medical research and technology.",
    clinicalExposure: "OIMU has exclusive partnerships with the newest and most advanced clinical hospitals in Osh. Because of the smaller batch sizes, Indian students receive unprecedented, direct hands-on clinical exposure under the guidance of top-tier surgeons and physicians.",
    fmgePerformance: "OIMU leaves nothing to chance when it comes to the FMGE/NExT exam. The university provides intense, integrated coaching sessions with mock exams conducted monthly to track student progress and ensure 100% readiness.",
    established: "2019",
    bannerImage: "/images/osu-gallery/osh-state-university-campus.webp",
    ranking: "Fastest Growing Premium Medical University in Osh",
    clinicalBeds: "800+ Beds (exclusive partners and OIMU clinic)",
    quickFacts: [
      "Established: 2019",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Focus: Small Batch Sizes",
      "Hostels: Premium/Luxury"
    ],
    fees: [
      { year: "1st Year", tutionFee: "$4,000", hostelFee: "$700", total: "$4,700" },
      { year: "2nd - 5th Year", tutionFee: "$4,000", hostelFee: "$700", total: "$4,700" }
    ],
    hostelDetails: "The OIMU Hostel provides premium, hotel-style facilities. Rooms are incredibly spacious, featuring high-speed Wi-Fi, dedicated quiet study halls, modern laundry systems, and top-tier security.",
    foodDetails: "An elite Indian mess operates on campus, providing massive variety and highly nutritious, hygienic food tailored to Indian tastes.",
    admissionProcess: [
      "Apply Online via WCIEC Delhi for OIMU Admission.",
      "Fast-track Document Approval.",
      "Issuance of Official Invitation Letter.",
      "Group Departure from Delhi to Osh."
    ],
    eligibility: [
      "Minimum 50% in Physics, Chemistry, Biology.",
      "Must have qualified the NEET exam.",
      "Valid Passport holder."
    ],
    documentsRequired: [
      "12th Board Certificate/Marksheet",
      "Birth Certificate",
      "Valid Passport",
      "Passport-sized photographs"
    ],
    advantages: [
      "Small batch sizes guarantee personalized interaction with professors.",
      "Premium, luxury hostel living conditions.",
      "Cutting-edge clinical training facilities."
    ],
    disadvantages: [
      "Slightly higher tuition fee ($4,000/year) compared to government colleges."
    ],
    faqs: [
      { question: "What are the OIMU Fees?", answer: "OIMU Fees reflect its premium status at $4,000 per year for tuition and $700 for the luxury OIMU Hostel." },
      { question: "How to secure OIMU Admission?", answer: "OIMU Admission can be secured rapidly through WCIEC Delhi by providing your NEET score and 12th-grade academic documents." },
      { question: "What is the OIMU Ranking?", answer: "The OIMU Ranking places it as one of the fastest-growing, highly respected, and most modern universities in the city of Osh." },
      { question: "How is the OIMU Hostel?", answer: "The OIMU Hostel offers excellent 24/7 safety, delicious Indian food, and a highly comfortable, studious environment." },
      { question: "How is OIMU FMGE performance?", answer: "OIMU FMGE performance is exceptional because the academic curriculum is directly aligned with the rigorous NExT/FMGE syllabus requirements." },
      { question: "Is OIMU MBBS valid in India?", answer: "Yes, an OIMU MBBS degree is globally recognized, strictly complies with NMC guidelines, and is fully valid in India." }
    ]
  }
];
