export interface BlogPost { title: string; excerpt: string; date: string; author: string; reviewer: string; category: string; seoTitle: string; seoDescription: string; introduction: string; sections: { heading: string; content: string[]; }[]; faqs: { question: string; answer: string; }[]; slug: string; }

export const BLOG_DATA: Record<string, Omit<BlogPost, 'slug'>> = {
  "why-study-mbbs-in-uzbekistan-2026": {
    title: "Why Study MBBS in Uzbekistan in 2026? (Complete Guide)",
    excerpt: "Uzbekistan is becoming the top choice for Indian students. Learn about the affordable fees, NMC approved universities, and student lifestyle in this complete guide.",
    date: "June 15, 2026",
    author: "Dr. Anjali Verma",
    reviewer: "WCIEC Senior Medical Counsellor",
    category: "Uzbekistan",
    seoTitle: "Why Study MBBS in Uzbekistan in 2026? | Fees & Admission",
    seoDescription: "Discover why Indian students are choosing Uzbekistan for their MBBS in 2026. Explore NMC approved medical universities, low fees, and Indian food facilities.",
    introduction: "With the rising competition and exorbitant fees of private medical colleges in India, thousands of NEET aspirants are looking for affordable alternatives. In 2026, Uzbekistan has emerged as one of the most preferred destinations for Indian students to study MBBS. But why is it so popular?",
    sections: [
      {
        heading: "1. Ultra-Affordable MBBS in Uzbekistan Fees",
        content: [
          "One of the primary reasons students choose Uzbekistan is the highly affordable tuition fees. Top government medical universities like Tashkent Medical Academy and Samarkand State Medical University offer tuition fees ranging from USD 3,000 to USD 3,500 per year.",
          "When combined with low hostel fees (around $500/year) and affordable living expenses, the total package for a 5-6 year course easily fits into a budget of INR 16-20 Lakhs, making it significantly cheaper than Indian private colleges."
        ]
      },
      {
        heading: "2. 100% English Medium Curriculum",
        content: [
          "Unlike some European or Asian countries where the medium of instruction switches to the local language in later years, medical universities in Uzbekistan teach the entire MBBS course in English. This ensures Indian students can focus entirely on medical science without the burden of mastering a foreign language for academics."
        ]
      },
      {
        heading: "3. NMC Approved Medical Universities in Uzbekistan",
        content: [
          "All major state medical universities in Uzbekistan are recognized by the World Health Organization (WHO) and strictly adhere to the latest National Medical Commission (NMC) guidelines for Indian students.",
          "This means graduates are fully eligible to appear for the FMGE or NExT licensing exams upon returning to India."
        ]
      }
    ],
    faqs: [
      { question: "Is MBBS in Uzbekistan valid in India?", answer: "Yes, the degree is 100% valid in India provided the university is WHO-recognized and you complete the NMC-mandated 54-month course and 12-month internship." },
      { question: "Is Indian food available in Uzbekistan?", answer: "Yes, most top medical universities have dedicated Indian messes offering vegetarian and non-vegetarian meals prepared by Indian chefs." }
    ]
  },
  "osh-state-vs-jalal-abad-state-university": {
    title: "Osh State University vs Jalal Abad State University: Which is Better?",
    excerpt: "Comparing the two giants of medical education in Kyrgyzstan. We break down the fees, FMGE passing rates, and campus life to help you decide.",
    date: "June 18, 2026",
    author: "WCIEC Research Group",
    reviewer: "Senior Admission Counsellor",
    category: "Kyrgyzstan",
    seoTitle: "Osh State University vs Jalal Abad State University MBBS Comparison",
    seoDescription: "Should you choose Osh State University or Jalal Abad State University (JASU) for your MBBS? Compare tuition fees, FMGE results, and hostel facilities.",
    introduction: "When Indian students research MBBS in Kyrgyzstan, two names constantly dominate the list: Osh State University and Jalal Abad State University (JASU). Both are prestigious government institutions, fully recognized by NMC and WHO. But which one is the right fit for you? Let’s break down the differences.",
    sections: [
      {
        heading: "1. Tuition Fees and Affordability",
        content: [
          "Osh State University charges approximately $3,500 per year for tuition, making it a highly reasonable option given its massive clinical infrastructure.",
          "Jalal Abad State University (JASU) is slightly more affordable, with tuition fees hovering around $3,200 per year. For students strictly maximizing their budget, JASU offers a slight financial advantage."
        ]
      },
      {
        heading: "2. Campus and Clinical Exposure",
        content: [
          "Osh State University is one of the oldest and largest universities in Central Asia. It boasts massive affiliated government hospitals, giving students unparalleled clinical exposure and hands-on patient interaction.",
          "Jalal Abad State University, while slightly smaller, offers a very tight-knit, highly secure campus environment. It is famous for its dedicated focus on international students and excellent student support systems."
        ]
      },
      {
        heading: "3. FMGE Passing Rates and Coaching",
        content: [
          "Both universities excel in FMGE/NExT preparation. They both have dedicated Indian faculty who conduct regular screening test classes right from the third year of the MBBS program, resulting in consistently high FMGE passing percentages."
        ]
      }
    ],
    faqs: [
      { question: "Are both universities NMC approved?", answer: "Yes, both Osh State University and Jalal Abad State University strictly comply with the National Medical Commission (NMC) regulations." },
      { question: "Which city is better, Osh or Jalal-Abad?", answer: "Osh is the second-largest city in Kyrgyzstan and offers a more vibrant city life. Jalal-Abad is quieter and highly peaceful, making it ideal for highly focused studies." }
    ]
  },
  "mbbs-in-uzbekistan-fees-structure-2026": {
    title: "MBBS in Uzbekistan Fees Structure 2026 (Hidden Costs Revealed)",
    excerpt: "A complete, transparent breakdown of the MBBS in Uzbekistan fees for 2026, including tuition, hostel, food, and hidden visa charges.",
    date: "June 20, 2026",
    author: "WCIEC Finance Committee",
    reviewer: "Senior Operations Manager",
    category: "Uzbekistan",
    seoTitle: "MBBS in Uzbekistan Fees Structure 2026 | Cost Breakdown",
    seoDescription: "Get the exact MBBS in Uzbekistan Fees Structure for 2026. Discover the actual costs for tuition, Indian mess, hostels, and visa extensions.",
    introduction: "The primary factor driving Indian students to Central Asia is affordability. However, many agents hide the actual costs until after the student arrives. In this guide, we provide a 100% transparent breakdown of the true MBBS in Uzbekistan fees for the 2026 intake.",
    sections: [
      {
        heading: "1. University Tuition Fees",
        content: [
          "The tuition fees for NMC-approved state medical universities in Uzbekistan typically range between USD 3,000 and USD 3,500 per academic year. For a 5-6 year program, this totals roughly $15,000 to $21,000."
        ]
      },
      {
        heading: "2. Hostel and Accommodation Costs",
        content: [
          "Government university hostels are highly subsidized. You can expect to pay between USD 500 and USD 700 per year for a shared, fully furnished room equipped with heating and internet."
        ]
      },
      {
        heading: "3. Indian Mess and Food",
        content: [
          "Food is a crucial factor for Indian students. Dedicated Indian messes run by professional chefs usually cost between USD 100 to USD 130 per month, offering three nutritious meals a day."
        ]
      },
      {
        heading: "4. Hidden Costs (Visa, Insurance, Medical)",
        content: [
          "Students must budget for annual visa extensions (approx. $150-$200), mandatory medical insurance ($100-$150), and annual medical checkups ($50)."
        ]
      }
    ],
    faqs: [
      { question: "Is education loan available for MBBS in Uzbekistan?", answer: "Yes, Indian banks easily provide education loans for students studying in WHO-recognized medical universities abroad. WCIEC provides the necessary admission letters to support your loan application." },
      { question: "Can I pay the fees in installments?", answer: "Most universities require the tuition fee to be paid annually or semi-annually at the beginning of the semester." }
    ]
  },
  "understanding-nmc-guidelines-mbbs-abroad-2026": {
    title: "Understanding NMC Guidelines for MBBS Abroad 2026",
    excerpt: "Don't risk your medical career. Understand the exact National Medical Commission (NMC) rules you must follow to practice in India.",
    date: "June 22, 2026",
    author: "WCIEC Legal Department",
    reviewer: "Chief Medical Consultant",
    category: "Legal Guidance",
    seoTitle: "NMC Guidelines for MBBS Abroad 2026 | Important Rules",
    seoDescription: "Ensure your foreign MBBS degree is valid in India. Read the complete breakdown of the latest NMC guidelines for studying medicine abroad in 2026.",
    introduction: "The National Medical Commission (NMC) has set strict regulations (the FMGL Regulations 2021) that every Indian student must follow if they intend to study MBBS abroad and eventually practice medicine in India. Ignoring these rules will render your degree invalid.",
    sections: [
      {
        heading: "1. Minimum Course Duration (54 Months + 12 Months)",
        content: [
          "The NMC clearly states that the foreign medical degree course must have a minimum duration of 54 months of theoretical and practical training.",
          "Furthermore, the student must complete an additional 12-month mandatory clinical internship at the same foreign medical institution where they studied."
        ]
      },
      {
        heading: "2. English Medium Requirement",
        content: [
          "The entire course of study must be conducted in the English language. Universities that teach clinical subjects in the local language are strictly prohibited under the new rules."
        ]
      },
      {
        heading: "3. Subject Equivalency",
        content: [
          "The syllabus of the foreign medical university must be equivalent to the MBBS curriculum in India, encompassing mandatory subjects like Community Medicine, General Surgery, Pediatrics, and more."
        ]
      },
      {
        heading: "4. Registration in the Host Country",
        content: [
          "The student must be registered with the respective professional regulatory body in the country where the degree is awarded, granting them the license to practice medicine in that specific country on par with local citizens."
        ]
      }
    ],
    faqs: [
      { question: "Are 5-year MBBS programs valid under NMC rules?", answer: "Yes, a 5-year program (60 months) perfectly satisfies the NMC's requirement of a minimum 54-month academic course, provided there is a 1-year internship included or done subsequently." },
      { question: "Is NEET qualification mandatory?", answer: "Absolutely. Qualifying the NEET-UG exam before departing for the foreign medical university is a non-negotiable legal requirement set by the NMC." }
    ]
  },
  "cost-of-living-kyrgyzstan-vs-india": {
    title: "Cost of Living in Kyrgyzstan vs India: A Guide for Students",
    excerpt: "Is living in Kyrgyzstan cheaper than living in an Indian metro? We compare housing, food, and transport costs for Indian medical students.",
    date: "June 25, 2026",
    author: "WCIEC Student Support Team",
    reviewer: "Senior Operations Manager",
    category: "Kyrgyzstan",
    seoTitle: "Cost of Living in Kyrgyzstan vs India for Students",
    seoDescription: "Compare the cost of living in Kyrgyzstan vs India. Find out how much Indian students spend on hostels, food, and transport while studying MBBS.",
    introduction: "One of the biggest concerns for parents sending their children abroad is the monthly living expense. Surprisingly, for Indian students pursuing their MBBS, the cost of living in Kyrgyzstan is incredibly similar—and sometimes even cheaper—than living in a major Indian metropolitan city like Delhi or Mumbai.",
    sections: [
      {
        heading: "1. Accommodation (Hostels vs Flats)",
        content: [
          "In Kyrgyzstan, university hostels cost around $50 to $70 per month. If a student chooses to rent a private apartment off-campus, a shared flat usually costs between $100 and $150 per month per student.",
          "Compared to metro cities in India where decent student housing can cost INR 10,000 to 15,000 ($120-$180) monthly, Kyrgyzstan is highly affordable."
        ]
      },
      {
        heading: "2. Food and Groceries",
        content: [
          "Enrolling in an Indian mess on campus usually costs about $100 to $130 per month. For students who prefer cooking, buying local groceries like fresh fruits, vegetables, and dairy is extremely cheap due to Kyrgyzstan's heavy agricultural output.",
          "A monthly grocery bill for a student cooking at home rarely exceeds $60 to $80."
        ]
      },
      {
        heading: "3. Transportation and Utilities",
        content: [
          "Public transportation in cities like Bishkek, Osh, and Jalal-Abad is incredibly cheap. A typical marshrutka (minibus) ride costs just 15-20 KGS (around INR 15). Internet and mobile data plans are also very cheap, costing around $5 for unlimited monthly data."
        ]
      }
    ],
    faqs: [
      { question: "What is the currency of Kyrgyzstan?", answer: "The currency is the Kyrgyzstani Som (KGS). Currently, 1 INR is roughly equivalent to 1.05 KGS, making currency conversion incredibly simple for Indian students." },
      { question: "How much pocket money does a student need per month?", answer: "Including food, transport, and basic leisure, a student can comfortably live in Kyrgyzstan with a monthly pocket money allowance of USD 120 to USD 150." }
    ]
  }
};

// Convert object to array for mapping
export const blogPostsArray = Object.keys(BLOG_DATA).map(slug => ({ ...BLOG_DATA[slug], slug }));