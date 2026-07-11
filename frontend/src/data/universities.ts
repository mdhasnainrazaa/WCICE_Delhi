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

  // New optional layout-specific fields
  nearestAirport?: string;
  addressLocation?: string;
  totalFeeStatsValue?: string;
  uspStatsValue?: string;
  affiliationAndRecognition?: string[];
  reasonsToSelect?: string[] | { title: string; description: string }[];
  quickHighlights?: { particular: string; statistics: string }[];
  feeTableHeaders?: string[];
  feeTableRows?: string[][];
  faculties?: string[];
  courseDurationText?: string;
  syllabus?: {
    year: string;
    semester?: string;
    subjects: string;
    rowSpan?: number;
  }[];
  rankingTable?: {
    headers: string[];
    rows: string[][];
  };
  accommodationList?: string[];
  accommodationCostText?: string;
  scholarshipsDetails?: string;
  careerOpportunitiesText?: string | string[];
  howWCIeCAssistsText?: string | string[];
  faqList?: { question: string; answer: string }[];
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
    quickFacts: [
      "Established: 1939",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Recognized by: WHO, NMC, ECFMG",
      "World Rank: Top in Kyrgyzstan"
    ],
    fees: [
      { year: "Year 1", tutionFee: "4000 USD", hostelFee: "600 USD", total: "4600 USD" },
      { year: "Year 2", tutionFee: "4000 USD", hostelFee: "600 USD", total: "4600 USD" },
      { year: "Year 3", tutionFee: "4000 USD", hostelFee: "600 USD", total: "4600 USD" },
      { year: "Year 4", tutionFee: "4000 USD", hostelFee: "600 USD", total: "4600 USD" },
      { year: "Year 5", tutionFee: "4000 USD", hostelFee: "600 USD", total: "4600 USD" },
      { year: "Year 6", tutionFee: "4000 USD", hostelFee: "600 USD", total: "4600 USD" }
    ],
    hostelDetails: "Osh State University offers affordable hostel accommodations for students. The hostels are equipped with essential amenities like beds, study tables, and common areas. The cost of accommodation is budget-friendly, making it accessible for both local and international students.",
    foodDetails: "A highly hygienic, dedicated Indian mess serves three meals a day. Expert Indian chefs prepare both North and South Indian food, offering a massive variety of vegetarian and non-vegetarian options.",
    admissionProcess: [
      "Fill out the online application on the university's official website or on the WCIEC Delhi consultancy website.",
      "Please share your complete contact information, including your current address, active email ID, and mobile number. This will help us stay in touch with you regarding updates, admission details, and any important communication throughout the application process.",
      "Correctly upload all the required documents as mentioned in the application guidelines.",
      "Pay the tuition fee online and make sure to save or print the payment receipt for future use.",
      "Apply for your student VISA once the admission is confirmed.",
      "When you reach the university, submit all your documents in hard copy at the admission office."
    ],
    eligibility: [
      "Students must have scored a minimum of 50% in PCB in their 12th grade.",
      "They should also be at least 17 years old by December 31st of the admission year.",
      "The NEET UG test must be qualified for admission."
    ],
    documentsRequired: [
      "Scanned copy of original passport",
      "Scanned copy of 10+2 mark sheets",
      "Scanned copy of application form",
      "Scanned copy of NEET report card",
      "Birth certificate",
      "Medical certificate",
      "Passport-size photographs"
    ],
    advantages: [
      "Affordable tuition and living costs.",
      "English-medium MBBS program.",
      "Recognized by WHO and NMC.",
      "Experienced faculty and modern infrastructure.",
      "Diverse student community with many Indian students.",
      "Good hostel and food facilities."
    ],
    disadvantages: [
      "Harsh winters may be tough for some students.",
      "Limited local language knowledge can be a barrier in clinical practice."
    ],
    faqs: [
      { question: "Is Osh State University a private or government?", answer: "Osh State University is a leading public (government) university in Kyrgyzstan." },
      { question: "Is Osh State University good for MBBS?", answer: "Yes, it is the oldest, most prestigious, and highest-ranked university in southern Kyrgyzstan, fully recognized by WHO and NMC." },
      { question: "What are the MBBS fees at Osh State University?", answer: "The annual tuition fee is 4000 USD, and hostel fees are 600 USD per year." },
      { question: "What are the MBBS fees for Indian students at Osh State University?", answer: "The total cost including tuition and hostel is approximately $4600 per year, which is highly cost-effective." }
    ],

    // Layout Specific Enriched Data
    nearestAirport: "Osh Airport",
    addressLocation: "331 Lenin Avenue, Osh 723500, Kyrgyzstan.",
    totalFeeStatsValue: "4600 $",
    uspStatsValue: "Founded in 1939. Approved by NMC & WHO",
    affiliationAndRecognition: [
      "Recognized by MCI (Medical Council of India)",
      "Recognized by FAIMER",
      "NMC and WHO approved",
      "Affiliation by IMED"
    ],
    reasonsToSelect: [
      "Osh State Medical University offers instruction in English.",
      "The faculty comprises well-qualified and experienced professionals.",
      "The university provides well-equipped hostel facilities with all necessary amenities.",
      "No donation or hidden charges are required for admission.",
      "Students can take part in various cultural events and extracurricular activities."
    ],
    quickHighlights: [
      { particular: "University Type", statistics: "Public" },
      { particular: "Intake for the MBBS Course", statistics: "September" },
      { particular: "Processing Time for MBBS Admission", statistics: "45-60 days" },
      { particular: "Entrance Exam", statistics: "NEET Exam" },
      { particular: "Location", statistics: "Lenin Avenue, Osh, Kyrgyzstan" },
      { particular: "Eligibility Criteria", statistics: "50% in PCB" },
      { particular: "NEET Exam", statistics: "Yes, it is compulsory" },
      { particular: "Annual Tuition Fees", statistics: "4000 USD" },
      { particular: "Course Duration", statistics: "6 years (with internship)" },
      { particular: "Medium of Education", statistics: "English Language" },
      { particular: "University Ranking", statistics: "Country - 6 | World - 8915" },
      { particular: "University Recognition", statistics: "Approved by WHO and NMC" }
    ],
    feeTableHeaders: ["Particulars", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"],
    feeTableRows: [
      ["Tuition Fee", "4000 USD", "4000 USD", "4000 USD", "4000 USD", "4000 USD", "4000 USD"],
      ["Hostel Fees", "600 USD", "600 USD", "600 USD", "600 USD", "600 USD", "600 USD"]
    ],
    faculties: [
      "Faculty of Medicine",
      "Faculty of Dentistry",
      "Language faculty",
      "Nursing Faculty",
      "Faculty of Preparatory course",
      "Faculty for Diploma courses",
      "Faculty of academic council"
    ],
    courseDurationText: "Students begin with a 5-year MBBS program supervised by knowledgeable and experienced instructors. Upon completing the course, they are required to undergo a 1-year internship, obtaining practical experience by caring for patients in medical facilities.",
    syllabus: [
      { year: "1st Year", semester: "1st Semester", subjects: "Anatomy", rowSpan: 2 },
      { year: "1st Year", semester: "2nd Semester", subjects: "Anatomy and Histology" },
      { year: "2nd Year", semester: "3rd Semester", subjects: "General Pathology, Anatomy, Physiology, Cell Biology, Microbiology, Histology, Biochemistry", rowSpan: 2 },
      { year: "2nd Year", semester: "4th Semester", subjects: "Biochemistry, Microbiology, Physiology" },
      { year: "3rd Year", semester: "5th Semester", subjects: "Pathology, Path Physiology, Microbiology", rowSpan: 2 },
      { year: "3rd Year", semester: "6th Semester", subjects: "Pathology, Pharmacology" },
      { year: "4th to 6th Year", semester: "Semester 7th to 12th", subjects: "General Surgery, Neurology, Primary Care medicine, Oncology, Internal Medicine, Paediatrics, Obstetrics and Gynaecology, Neurology and Psychiatry, Psychology, ENT, Emergency Medicine, Cardiology" }
    ],
    rankingTable: {
      headers: ["Institution Ranking", "Position"],
      rows: [
        ["Ranking in the World", "8915"],
        ["Ranking in the Country", "6"]
      ]
    },
    scholarshipsDetails: "Osh State University offers scholarships to students who demonstrate strong academic performance or require financial assistance. These scholarships aim to support students in their educational pursuits by reducing tuition fees or providing financial assistance. Students are encouraged to apply through the university's scholarship programs.",
    careerOpportunitiesText: "The university's programs are designed to prepare students for roles in hospitals, clinics, and research institutions. Additionally, the university's reputation and international recognition can enhance employment prospects both locally and abroad.",
    howWCIeCAssistsText: "WCIEC Delhi is a reliable choice for students aiming to pursue MBBS in Kyrgyzstan and other overseas destinations. With over 12,000 successful placements in international institutions, we offer excellent education options without donation fees. WCIEC guides students throughout the entire admissions process, from selecting the right university to visa assistance. Our experienced consultants provide personalised advice and support, ensuring a smooth and successful overseas education journey."
  },
  {
    slug: "jalal-abad-state-university",
    name: "Jalalabad State University",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Jalal Abad State University (JASU) is a premier public university in Kyrgyzstan providing high-quality medical education at an incredibly affordable cost. Formally known as Jalal-Abad State Medical University, it is one of the most popular choices for Indian students.",
    detailedOverview: "Founded in 1993, Jalal Abad State University operates under the Ministry of Education and Science of the Kyrgyz Republic. JASU is deeply committed to international education, maintaining a highly disciplined and strictly monitored academic environment. The university focuses heavily on producing competent medical professionals who can seamlessly integrate into global healthcare systems, making it a budget-friendly yet premium option for MBBS.",
    clinicalExposure: "JASU has strong affiliations with the Jalal-Abad Provincial Hospital and multiple city clinics. Students begin their hospital visits early in the curriculum, gaining hands-on experience in surgery, internal medicine, pediatrics, and gynecology. The patient inflow at Jalal-Abad hospitals ensures students witness a diverse range of medical cases.",
    fmgePerformance: "JASU has built a stellar reputation for its FMGE coaching. The university regularly invites guest lecturers from leading Indian medical coaching institutes. This rigorous preparation, combined with strict internal exams, results in a very high FMGE clearance rate for its Indian graduates.",
    established: "1993",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
    ranking: "Top 5 Medical Universities in Kyrgyzstan",
    quickFacts: [
      "Established: 1993",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Fee Range: Highly Affordable",
      "Status: Government Public University"
    ],
    fees: [
      { year: "1st Year", tutionFee: "2870 USD", hostelFee: "800 USD", total: "3670 USD" }
    ],
    hostelDetails: "Jalalabad State University offers comfortable hostel accommodations for both local and international students. The hostel facilities are equipped with basic amenities like beds, study tables, and common areas for socialising. The cost of accommodation varies depending on the type of room and the number of students sharing. Typically, the monthly cost ranges between $30 to $60, making it an affordable option for students. Separate hostels for boys and girls.",
    foodDetails: "An excellent Indian food mess operates directly inside the campus. Professional Indian chefs ensure students receive nutritious, hygienic, and authentic home-style meals daily.",
    admissionProcess: [
      "Fill out the online application on the university's official website or on the WCIEC Delhi admission portal.",
      "Please provide your address, email ID, and phone number so we can stay in touch.",
      "Correctly upload all the required documents as mentioned in the application guidelines.",
      "Pay the tuition fee online and make sure to save or print the payment receipt for future use.",
      "Apply for your student VISA once the admission is confirmed.",
      "When you reach the university, submit all your documents in hard copy at the admission office."
    ],
    eligibility: [
      "At least fifty per cent in biology, chemistry, and physics in class twelfth is required.",
      "Applicant must be 17 years old as of Dec 31st of the year of admission.",
      "The NEET UG test must be qualified for admission."
    ],
    documentsRequired: [
      "Scanned copy of original passport",
      "Scanned copy of 10+2 mark sheets",
      "Scanned copy of application form",
      "Scanned copy of NEET report card",
      "Birth certificate",
      "Medical certificate",
      "Passport-size photographs"
    ],
    advantages: [
      "Affordable tuition fees compared to other countries.",
      "Experienced faculty with reputed doctors.",
      "Modern infrastructure, including a well-equipped library.",
      "Supportive environment for international students, with Indian food and comfortable hostels.",
      "Easy admission process with no entrance exams."
    ],
    disadvantages: [
      "Limited exposure to advanced medical research facilities.",
      "The campus may not have extensive recreational options."
    ],
    faqs: [
      { question: "Is Jalalabad State University a private or government university?", answer: "Jalalabad State University is a prestigious public (government) university in Kyrgyzstan." },
      { question: "Is Jalalabad State University good for MBBS?", answer: "Yes, it is highly reputable for its English-medium MBBS program, extremely affordable tuition fees, and complete NMC/WHO accreditations." }
    ],

    // Layout Specific Enriched Data
    nearestAirport: "Jalal-Abad Airport",
    addressLocation: "57 Lenin Street Jalal-Abad, 715600, Kyrgyzstan.",
    totalFeeStatsValue: "3670 $",
    uspStatsValue: "Founded in 1993. Approved by NMC & WHO",
    affiliationAndRecognition: [
      "World Health Organization (WHO)"
    ],
    reasonsToSelect: [
      { title: "Experienced Faculty", description: "Over 250 trained professionals, including reputed doctors." },
      { title: "Affordable Tuition", description: "Cost-effective education without compromising on quality." },
      { title: "Modern Infrastructure", description: "Well-equipped campus with a vast library and advanced facilities." },
      { title: "Student Support", description: "Comfortable hostels with Indian food and free internet." },
      { title: "Easy Admission", description: "No entrance exams required." },
      { title: "Quality Education", description: "Strong reputation in medical and healthcare education." }
    ],
    quickHighlights: [
      { particular: "University Type", statistics: "Public" },
      { particular: "Intake for the MBBS Course", statistics: "September" },
      { particular: "Processing Time for MBBS Admission", statistics: "45-60 days" },
      { particular: "Entrance Exam", statistics: "NEET Exam" },
      { particular: "Location", statistics: "Lenin Street, Jalal-Abad, Kyrgyzstan" },
      { particular: "Eligibility Criteria", statistics: "50% in PCB" },
      { particular: "NEET Exam", statistics: "Yes, it is compulsory" },
      { particular: "Annual Tuition Fees", statistics: "2870 USD Approx." },
      { particular: "Course Duration", statistics: "6 years (with internship)" },
      { particular: "Medium of Education", statistics: "English Language" },
      { particular: "University Ranking", statistics: "Country - 30 | World - 12097" },
      { particular: "University Recognition", statistics: "Approved by WHO" }
    ],
    feeTableHeaders: ["Particulars", "Tuition Fee/Year", "Hostel Fee/Year"],
    feeTableRows: [
      ["Fees in USD", "2870 USD", "800 USD"],
      ["Fees in Rupees (INR) approx.", "2,00,900 Rupees/yr.", "56,000 Rupees/yr."]
    ],
    faculties: [
      "Medicine", "Nursing", "Computer Science", "Physics", "Mathematics",
      "Social Sciences & Humanities", "Russian Language & Literature",
      "Kyrgyz Language & Literature", "English Language", "Biology",
      "Pedagogy & Psychology", "Physical Education", "Ecology",
      "Forestry & Park Services", "Mechanics", "Food Technology",
      "Chemistry", "Chemical Engineering", "Industrial Water Engineering",
      "Construction & Civil Engineering", "Electricity & Power Engineering",
      "Sports", "Preparatory Studies"
    ],
    courseDurationText: "Students begin with a 5-year MBBS program supervised by knowledgeable and experienced instructors. Upon completing the course, they are required to undergo a 1-year internship, obtaining practical experience by caring for patients in medical facilities.",
    rankingTable: {
      headers: ["Institution Ranking", "Position"],
      rows: [
        ["Ranking in the World", "12097"],
        ["Ranking in the Country", "30"]
      ]
    },
    scholarshipsDetails: "JaSU provides several scholarships to both local and international students based on academic performance, financial need, and specific programs. The university offers partial and full scholarships. Scholarships based on government schemes for reserved categories. Merit-based scholarships for top-performing students.",
    careerOpportunitiesText: "Jalalabad State University is committed to preparing students for successful careers by providing various career services. The university has strong connections with industries and offers internship programs, job fairs, and career counselling. Graduates of JASU often find opportunities in government sectors, healthcare, engineering, education, and more. The university's career services help students build their resumes, improve interview skills, and connect with potential employers.",
    howWCIeCAssistsText: "WCIEC Delhi is a reliable choice for students aiming to pursue MBBS in Kyrgyzstan and other overseas destinations. With over 12,000 successful placements in international institutions, we offer excellent education options without donation fees. WCIEC guides students throughout the entire admissions process, from selecting the right university to visa assistance. Our experienced consultants provide personalised advice and support, ensuring a smooth and successful overseas education journey."
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
    quickFacts: [
      "Established: 2015",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Tech-Forward Simulation Labs",
      "Highly International Faculty"
    ],
    fees: [
      { year: "1st Year", tutionFee: "3800 USD", hostelFee: "700 USD", total: "4500 USD" }
    ],
    hostelDetails: "Jalal-Abad International University offers comfortable hostel accommodations for both local and international students. The hostel facilities are equipped with basic amenities like beds, study tables, and common areas for socialising. The cost of accommodation varies depending on the type of room and the number of students sharing. Typically, the monthly cost ranges between $30 to $60, making it an affordable option for students. Separate hostels for boys and girls.",
    foodDetails: "A high-end multi-cuisine mess operates on campus, serving excellent quality Indian vegetarian and non-vegetarian food alongside international dishes.",
    admissionProcess: [
      "Document Verification by WCIEC Delhi.",
      "Issuance of the Conditional Offer Letter.",
      "Online Interview / Orientation.",
      "Visa Invitation and Stamping.",
      "Flight to Kyrgyzstan.",
      "On-campus enrollment and hostel allotment in Jalal-Abad."
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
      "Comprehensive Medical Insurance",
      "Passport-size photographs"
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
      { question: "Is Jalal-Abad International University a private or government university?", answer: "Jalal-Abad International University is a modern private international university in Kyrgyzstan." },
      { question: "Is Jalal-Abad International University good for MBBS?", answer: "Yes, it features ultra-modern simulation technology, interactive 3D Anatomage tables, and is fully recognized by WHO & NMC for licensing eligibility in India." }
    ],

    // Layout Specific Enriched Data
    nearestAirport: "Jalal-Abad Airport",
    addressLocation: "Jalal-Abad, Kyrgyzstan.",
    totalFeeStatsValue: "4500 $",
    uspStatsValue: "Founded in 2015. Approved by NMC & WHO",
    affiliationAndRecognition: [
      "World Health Organization (WHO) & National Medical Commission (NMC)"
    ],
    reasonsToSelect: [
      { title: "Experienced Faculty", description: "Composed of visiting professors from India, Europe, and CIS." },
      { title: "Tech-Forward Simulation", description: "Features digital classrooms and 3D interactive Anatomage tables." },
      { title: "Modern Infrastructure", description: "Fully equipped simulation centers and multi-specialty clinical centers." },
      { title: "Premium Student Support", description: "Comfortable hostels with attach baths, Wi-Fi, and Indian mess." },
      { title: "Curriculum Integration", description: "Deeply integrated with licensing exam preparations (USMLE & NExT)." },
      { title: "Quality Education", description: "Strong reputation for tech-driven modern clinical diagnostics." }
    ],
    quickHighlights: [
      { particular: "University Type", statistics: "Private / International" },
      { particular: "Intake for the MBBS Course", statistics: "September" },
      { particular: "Processing Time for MBBS Admission", statistics: "45-60 days" },
      { particular: "Entrance Exam", statistics: "NEET Exam" },
      { particular: "Location", statistics: "Jalal-Abad, Kyrgyzstan" },
      { particular: "Eligibility Criteria", statistics: "50% in PCB" },
      { particular: "NEET Exam", statistics: "Yes, it is compulsory" },
      { particular: "Annual Tuition Fees", statistics: "3800 USD Approx." },
      { particular: "Course Duration", statistics: "6 years (with internship)" },
      { particular: "Medium of Education", statistics: "English Language" },
      { particular: "University Ranking", statistics: "Fastest Growing Modern Medical University in Kyrgyzstan" },
      { particular: "University Recognition", statistics: "Approved by WHO & NMC" }
    ],
    feeTableHeaders: ["Particulars", "Tuition Fee/Year", "Hostel Fee/Year"],
    feeTableRows: [
      ["Fees in USD", "3800 USD", "700 USD"],
      ["Fees in Rupees (INR) approx.", "2,66,000 Rupees/yr.", "49,000 Rupees/yr."]
    ],
    faculties: [
      "General Medicine", "Pediatrics", "Nursing", "Dentistry", 
      "Computer Science in Healthcare", "Medical Diagnostics & Radiology",
      "Preparatory Studies", "Language & Literature Department"
    ],
    courseDurationText: "Students begin with a 5-year MBBS program supervised by highly qualified instructors. Upon completing the course, they are required to undergo a 1-year internship, obtaining practical experience by caring for patients in medical facilities.",
    rankingTable: {
      headers: ["Institution Ranking", "Position"],
      rows: [
        ["Ranking in the World", "Top Modern University"],
        ["Ranking in the Country", "Top Modern Private University"]
      ]
    },
    scholarshipsDetails: "Jalal-Abad International University provides several scholarships to both local and international students based on academic performance, financial need, and specific programs. The university offers partial and full scholarships, and scholarships based on government schemes for reserved categories. Merit-based scholarships for top-performing students.",
    careerOpportunitiesText: "Jalal-Abad International University is committed to preparing students for successful careers by providing various career services. The university has strong connections with industries and offers internship programs, job fairs, and career counselling. Graduates of JAIU often find opportunities in government sectors, healthcare, engineering, education, and more. The university's career services help students build their resumes, improve interview skills, and connect with potential employers.",
    howWCIeCAssistsText: "WCIEC Delhi is a reliable choice for students aiming to pursue MBBS in Kyrgyzstan and other overseas destinations. With over 12,000 successful placements in international institutions, we offer excellent education options without donation fees. WCIEC guides students throughout the entire admissions process, from selecting the right university to visa assistance. Our experienced consultants provide personalised advice and support, ensuring a smooth and successful overseas education journey."
  },
  {
    slug: "central-asian-international-medical-university",
    name: "Central Asian International Medical University (CAIMU)",
    location: "Jalal-Abad, Kyrgyzstan",
    about: "Central Asian International Medical University (CAIMU) is widely recognized as the most affordable yet highly innovative medical university in Kyrgyzstan. It prepares Indian students to excel in global healthcare.",
    detailedOverview: "Established in 2020, CAIMU was developed from the ground up with a singular mission: to provide the highest quality, competency-based medical education at the lowest possible cost. CAIMU features modern, bright lecture halls, extensive anatomical museums, and a highly dedicated faculty that works closely with international students. The university has quickly become a top choice for students looking for an incredible return on investment without compromising on NMC standards.",
    clinicalExposure: "CAIMU operates with a direct focus on early patient interaction. The university has forged strong alliances with major regional hospitals in Jalal-Abad. Indian students are guided through intensive clinical rotations, ensuring they are well-versed in practical diagnostics and patient care.",
    fmgePerformance: "CAIMU places a massive emphasis on the FMGE/NExT exam. The academic board frequently reviews and adjusts the curriculum to perfectly align with Indian medical standards, resulting in excellent pass rates for hardworking students.",
    established: "2020",
    bannerImage: "/images/optimized/jalal-abad-banner.webp",
    ranking: "Most Affordable Top Medical University in Kyrgyzstan",
    quickFacts: [
      "Established: 2020",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Fees: Most Affordable",
      "Focus: Indian Curriculum Alignment"
    ],
    fees: [
      { year: "1st Year", tutionFee: "3500 $ per year", hostelFee: "", total: "3500 $ per year" }
    ],
    hostelDetails: "CAIMU provides comfortable hostel facilities for both local and international students. Well-furnished rooms with 24/7 security. Separate hostels for boys and girls. Indian food available in the mess. Common kitchen and laundry facilities.",
    foodDetails: "A high-quality Indian mess operates daily, providing hygienic, freshly cooked Indian meals to ensure students feel completely at home.",
    admissionProcess: [
      "Fill out the online application on the university's official website or on the WCIEC Delhi consultancy website.",
      "Provide your contact details like address, email ID, and mobile number for communication.",
      "Correctly upload all the required documents as mentioned in the application guidelines.",
      "Pay the tuition fee online and make sure to save or print the payment receipt for future use.",
      "Apply for your student VISA once the admission is confirmed.",
      "When you reach the university, submit all your documents in hard copy at the admission office."
    ],
    eligibility: [
      "Students must have scored a minimum of 50% in Physics, Chemistry, and Biology in their 12th grade.",
      "They should also be at least 17 years old by December 31st of the admission year.",
      "The NEET UG test must be qualified for admission."
    ],
    documentsRequired: [
      "Scanned copy of original passport",
      "Scanned copy of 10+2 mark sheets",
      "Scanned copy of application form",
      "Scanned copy of NEET report card",
      "Birth certificate",
      "Medical certificate",
      "Passport-size photographs"
    ],
    advantages: [
      "Affordable tuition and living costs.",
      "English-medium MBBS program.",
      "Recognized by WHO and NMC.",
      "Experienced faculty and modern infrastructure.",
      "Diverse student community with many Indian students.",
      "Good hostel and food facilities."
    ],
    disadvantages: [
      "Harsh winters may be tough for some students.",
      "Limited local language knowledge can be a barrier in clinical practice."
    ],
    faqs: [
      { question: "Is Central Asian International Medical University (CAIMU) a private or government university?", answer: "Central Asian International Medical University (CAIMU) is a public university recognized by the Ministry of Education and Science of the Kyrgyz Republic." },
      { question: "Is Central Asian International Medical University (CAIMU) good for MBBS?", answer: "Yes, it offers modern laboratories, experienced faculty, WHO & NMC recognition, and an exceptionally budget-friendly curriculum." },
      { question: "What are the fees for MBBS at Central Asian International Medical University (CAIMU)?", answer: "The total tuition fees including hostel are highly affordable, set at 3500 $ per year." },
      { question: "What are the fees of the International University of Kyrgyzstan for MBBS?", answer: "Please refer to the fees section of the respective university page or contact WCIEC consultants for detailed cost breakups." }
    ],

    // Layout Specific Enriched Data
    nearestAirport: "Jalal-Abad Airport",
    addressLocation: "Jalal-Abad, Kyrgyzstan.",
    totalFeeStatsValue: "3500 $",
    uspStatsValue: "Approved by NMC & WHO",
    affiliationAndRecognition: [
      "World Health Organization (WHO)",
      "National Medical Commission (NMC), India",
      "Ministry of Education and Science, Kyrgyz Republic"
    ],
    reasonsToSelect: [
      "Affordable tuition fees and low cost of living in Kyrgyzstan.",
      "English-medium MBBS program.",
      "No donation or capitation fee required for admission.",
      "Safe and student-friendly environment in Jalal-Abad.",
      "Global recognition of medical degree from CAIMU.",
      "Indian food and separate hostel facilities available.",
      "Strong academic foundation with practical exposure."
    ],
    quickHighlights: [
      { particular: "University Type", statistics: "Public" },
      { particular: "Intake for the MBBS Course", statistics: "September" },
      { particular: "Processing Time for MBBS Admission", statistics: "45-60 days" },
      { particular: "Entrance Exam", statistics: "NEET Exam" },
      { particular: "Location", statistics: "Jalal-Abad, Kyrgyzstan" },
      { particular: "Eligibility Criteria", statistics: "50% in PCB" },
      { particular: "NEET Exam", statistics: "Yes, it is compulsory" },
      { particular: "Course Duration", statistics: "6 years (with internship)" },
      { particular: "Medium of Education", statistics: "English Language" },
      { particular: "University Recognition", statistics: "Approved by WHO, NMC" }
    ],
    feeTableHeaders: ["Particulars", "Estimated Cost"],
    feeTableRows: [
      ["Total Tuition Fees (Including Hostel)", "3500 $ per year"]
    ],
    faculties: [
      "Faculty of General Medicine", 
      "Faculty of Dentistry", 
      "Faculty of Pharmacy", 
      "Faculty of Nursing", 
      "Faculty of Public Health"
    ],
    courseDurationText: "Students begin with a 5-year MBBS program supervised by knowledgeable and experienced instructors. Upon completing the course, they are required to undergo a 1-year internship, obtaining practical experience by caring for patients in medical facilities.",
    accommodationList: [
      "CAIMU provides comfortable hostel facilities for both local and international students.",
      "Well-furnished rooms with 24/7 security.",
      "Separate hostels for boys and girls.",
      "Indian food available in the mess.",
      "Common kitchen and laundry facilities."
    ],
    accommodationCostText: "Approx. INR 60,000 – INR 75,000",
    careerOpportunitiesText: [
      "Appear for FMGE/NExT in India.",
      "Apply for USMLE, PLAB for the USA/UK.",
      "Pursue post-graduation abroad or in India.",
      "Work in reputed hospitals, clinics, or start their own practice.",
      "Join research or academic positions."
    ],
    howWCIeCAssistsText: [
      "Free career counseling",
      "Application and documentation assistance",
      "Admission confirmation and seat booking",
      "Visa processing support",
      "Travel and accommodation arrangements",
      "Pre-departure briefing",
      "Post-arrival support in Kyrgyzstan"
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
    quickFacts: [
      "Established: 2019",
      "Medium: 100% English",
      "Duration: 5 Years + 1 Year Internship",
      "Focus: Small Batch Sizes",
      "Hostels: Premium/Luxury"
    ],
    fees: [
      { year: "1st Year", tutionFee: "3500 USD", hostelFee: "500 USD", total: "4000 USD" },
      { year: "2nd Year", tutionFee: "3500 USD", hostelFee: "500 USD", total: "4000 USD" },
      { year: "3rd Year", tutionFee: "3500 USD", hostelFee: "500 USD", total: "4000 USD" },
      { year: "4th Year", tutionFee: "3500 USD", hostelFee: "500 USD", total: "4000 USD" },
      { year: "5th Year", tutionFee: "3500 USD", hostelFee: "500 USD", total: "4000 USD" },
      { year: "6th Year", tutionFee: "3500 USD", hostelFee: "500 USD", total: "4000 USD" }
    ],
    hostelDetails: "The university provides separate hostels for boys and girls with all basic amenities like beds, study tables, heating, and Wi-Fi. Indian food is also available. The cost is affordable, usually around $100-$120 per month.",
    foodDetails: "An elite Indian mess operates on campus, providing massive variety and highly nutritious, hygienic food tailored to Indian tastes.",
    admissionProcess: [
      "Fill out the online application on the university's official website or on the WCIEC Delhi consultancy website.",
      "Correctly upload all the required documents as mentioned in the application guidelines.",
      "Pay the tuition fee online and make sure to save or print the payment receipt for future use.",
      "Apply for your student VISA once the admission is confirmed.",
      "When you reach the university, submit all your documents in hard copy at the admission office."
    ],
    eligibility: [
      "Students must have scored a minimum of 50% in PCB in their 12th grade.",
      "They should also be at least 17 years old by December 31st of the admission year.",
      "The NEET UG test must be qualified for admission."
    ],
    documentsRequired: [
      "Scanned copy of original passport",
      "Scanned copy of 10+2 mark sheets",
      "Scanned copy of application form",
      "Scanned copy of NEET report card",
      "Birth certificate",
      "Medical certificate",
      "Passport-size photographs",
      "HIV test report",
      "COVID-19 report",
      "Affidavit document"
    ],
    advantages: [
      "Affordable tuition and living costs.",
      "English-medium MBBS program.",
      "Recognized by WHO and NMC.",
      "Experienced faculty and modern infrastructure.",
      "Diverse student community with many Indian students.",
      "Good hostel and food facilities."
    ],
    disadvantages: [
      "Harsh winters may be tough for some students.",
      "Limited local language knowledge can be a barrier in clinical practice."
    ],
    faqs: [
      { question: "Is Osh International Medical University a private or government university?", answer: "Osh International Medical University is a modern private medical institution in Kyrgyzstan." },
      { question: "Is Osh International Medical University good for MBBS?", answer: "Yes, it is highly reputable for its English-medium MBBS program, offering extensive hospital training and globally recognized degree credentials." },
      { question: "What are the fees for MBBS at Osh International Medical University?", answer: "The annual tuition fee is 3500 USD, and the hostel fee is 500 USD per year, making it $4000 annually in total." }
    ],

    // Layout Specific Enriched Data
    nearestAirport: "Osh International Airport",
    addressLocation: "2, K. Sabirova Street Kyzyl Kyshtak, Osh city, 723500, Kyrgyzstan.",
    totalFeeStatsValue: "4000 $",
    uspStatsValue: "Founded in 2019. Approved by NMC & WHO",
    affiliationAndRecognition: [
      "National Medical Commission (NMC)",
      "World Health Organization (WHO)",
      "International Medical Education Directory (IMED)",
      "US Education Department & GMC of Great Britain",
      "ECFMG for Foreign Medical Graduates",
      "Ministry of Education, Kyrgyzstan",
      "World Federation for Medical Education (WFME)",
      "FAIMER"
    ],
    reasonsToSelect: [
      "Advanced medical technology, hands-on training, and an innovative curriculum.",
      "Learn under experienced doctors and professors with global accreditations (WHO, NMC, USMLE).",
      "Exchange programs offer international exposure and strong career opportunities.",
      "Comfortable hostel rooms and hygienic Indian meals available in spacious dining areas."
    ],
    quickHighlights: [
      { particular: "University Type", statistics: "Private" },
      { particular: "Intake for the MBBS Course", statistics: "September" },
      { particular: "Processing Time for MBBS Admission", statistics: "45-60 days" },
      { particular: "Entrance Exam", statistics: "NEET Exam" },
      { particular: "Location", statistics: "Osh, Kyrgyzstan" },
      { particular: "Eligibility Criteria", statistics: "50% in PCB" },
      { particular: "NEET Exam", statistics: "Yes, it is compulsory" },
      { particular: "Annual Tuition Fees", statistics: "3500 USD" },
      { particular: "Course Duration", statistics: "6 years (with internship)" },
      { particular: "Medium of Education", statistics: "English Language" },
      { particular: "University Ranking", statistics: "Fastest Growing Premium Medical University in Osh" },
      { particular: "University Recognition", statistics: "Approved by WHO and NMC" }
    ],
    feeTableHeaders: ["Particulars", "1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "6th Year"],
    feeTableRows: [
      ["Tuition Fees", "3500 USD", "3500 USD", "3500 USD", "3500 USD", "3500 USD", "3500 USD"],
      ["Hostel Fees", "500 USD", "500 USD", "500 USD", "500 USD", "500 USD", "500 USD"]
    ],
    faculties: [
      "Department of Anatomy & Physiology",
      "Department of Hospital Therapy",
      "Department of General Surgery",
      "Department of Obstetrics and Pediatrics",
      "Department of Propedeutics of Internal disease and family medicine",
      "Department of Morphological Disciplines and Public Health",
      "Department of Pharmaceutical Technology and Chemistry",
      "Department of Biomedical Disciplines",
      "Department of Surgery and traumatology"
    ],
    courseDurationText: "Osh International Medical University offers a 6-year full-time MBBS (MD) program in English for international students. Taught by experienced professors from global universities, the course combines modern teaching methods with strong theoretical and practical training. After completing the 6 years, students must also complete a 1-year mandatory internship to gain real-world experience.",
    syllabus: [
      { year: "First Year", subjects: "Anatomy and Histology" },
      { year: "Second Year", subjects: "Histology, Biochemistry, Anatomy, Physiology cell biology, Microbiology, General Pathology" },
      { year: "Third Year", subjects: "Pathology, Pharmacology, Microbiology, Pathophysiology, Genetics" },
      { year: "Fourth to Sixth Year", subjects: "General Surgery, Neurology, Primary Care Medicine, Obstetrics, Gynecology, Oncology, Internal Medicine, Pediatrics, Neurology & Psychiatry, Psychology, ENT, Emergency Medicine & Cardiology" }
    ],
    rankingTable: {
      headers: ["Institution Ranking", "Position"],
      rows: [
        ["Ranking in the World", "Premium Medical University"],
        ["Ranking in the Country", "Fastest Growing Premium Medical University in Osh"]
      ]
    },
    scholarshipsDetails: "While full scholarships are limited, the university offers merit-based and need-based financial support to deserving students. Special discounts may also be available for early applicants or top performers.",
    careerOpportunitiesText: [
      "Graduates of OSHIMU are eligible to work globally after clearing licensing exams like NMC, USMLE, or PLAB.",
      "The university also supports internships, hospital training, and placements to boost students' medical careers."
    ],
    howWCIeCAssistsText: "WCIEC Delhi is a trusted partner for students aiming to study abroad, particularly in Kyrgyzstan for MBBS. With over 12,000 successful placements in international institutions, we offer excellent education options without donation fees. WCIEC guides students throughout the entire admissions process, from selecting the right university to visa assistance. Our experienced consultants provide personalized advice and support, ensuring a smooth and successful overseas education journey."
  }
];
