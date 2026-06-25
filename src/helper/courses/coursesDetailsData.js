export const coursesDetailsData = [
  {
    slug: "biochemistry",
    title: "The Biochemistry Course",
    image: "/images/courses/biochemistry.jpg",
    price: 59,
    originalPrice: 139,
    instructor: "Eleanor Fant",
    lectures: 14,
    duration: "6 weeks",
    enrolled: 20,
    language: "English",
    teacher: {
      avatar: "/images/teachers/eleanor.jpg", // 👈 public/images/teachers/ এ রাখো
      name: "Robto Jone",
      role: "Teacher",
      category: "Photoshop",
    },
    overview: [
      "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architects beatae vitae dicta sunt explicabo.",
      "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference.",
    ],
    whatYouWillLearn: [
      "Crawl accessibility so engines can read your website",
      "Share-worthy content that earns links, citations",
      "Keyword optimized to attract searchers & engines",
      "Title, URL & description to draw high CTR",
    ],
    studyOptions: [
      { qualification: "Bsc (Hons)", length: "3 years full time", code: "CDX3" },
      { qualification: "Bsc", length: "4 years full time", code: "CDX4" },
    ],
    faq: [
      {
        id: 1,
        question: "01 Cras turpis felis, elementum sed mi at arcu?",
        answer:
          "Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.",
      },
      {
        id: 2,
        question: "02 Vestibulum nibh risus, in neque eleifendulputate sem?",
        answer:
          "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis.",
      },
      {
        id: 3,
        question: "03 Donec maximus, sapien id auctor ornare?",
        answer:
          "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.",
      },
    ],
  },
  {
  slug: "major-in-economics",
  title: "Major in Economics",
  image: "/images/courses/economics.jpg",
  price: 69,
  originalPrice: 149,
  instructor: "Sarah Wilson",
  lectures: 16,
  duration: "8 weeks",
  enrolled: 35,
  language: "English",
  teacher: {
    avatar: "/images/teachers/sarah.jpg",
    name: "Sarah Wilson",
    role: "Teacher",
    category: "Economics",
  },
  overview: [
    "Gain a solid understanding of economic principles, market structures, and financial systems.",
    "Learn how economic policies influence businesses, governments, and global markets.",
  ],
  whatYouWillLearn: [
    "Micro and macroeconomic fundamentals",
    "Market analysis techniques",
    "Economic policy evaluation",
    "Global trade concepts",
  ],
  studyOptions: [
    { qualification: "BA Economics", length: "3 years full time", code: "ECO3" },
    { qualification: "BSc Economics", length: "4 years full time", code: "ECO4" },
  ],
  faq: [
    {
      id: 1,
      question: "Is this course beginner friendly?",
      answer: "Yes, this course starts with the fundamentals before moving into advanced topics.",
    },
  ],
},
{
  slug: "business-media",
  title: "Business Media",
  image: "/images/courses/business-media.jpg",
  price: 79,
  originalPrice: 169,
  instructor: "David Brown",
  lectures: 18,
  duration: "10 weeks",
  enrolled: 42,
  language: "English",
  teacher: {
    avatar: "/images/teachers/david.jpg",
    name: "David Brown",
    role: "Teacher",
    category: "Media",
  },
  overview: [
    "Explore media strategies used in modern businesses and organizations.",
    "Understand digital communication, branding, and media planning.",
  ],
  whatYouWillLearn: [
    "Digital media strategy",
    "Brand communication",
    "Content planning",
    "Business storytelling",
  ],
  studyOptions: [
    { qualification: "BA Media", length: "3 years full time", code: "MED3" },
  ],
  faq: [
    {
      id: 1,
      question: "Do I need media experience?",
      answer: "No prior experience is required.",
    },
  ],
},
{
  slug: "public-administration",
  title: "Public Administration",
  image: "/images/courses/public-administration.jpg",
  price: 65,
  originalPrice: 145,
  instructor: "Emily Clark",
  lectures: 15,
  duration: "7 weeks",
  enrolled: 28,
  language: "English",
  teacher: {
    avatar: "/images/teachers/emily.jpg",
    name: "Emily Clark",
    role: "Teacher",
    category: "Public",
  },
  overview: [
    "Learn how government institutions are managed and operated.",
    "Study public policy, governance, and administrative leadership.",
  ],
  whatYouWillLearn: [
    "Public policy analysis",
    "Government management",
    "Leadership principles",
    "Administrative processes",
  ],
  studyOptions: [
    { qualification: "BPA", length: "3 years full time", code: "PUB3" },
  ],
  faq: [
    {
      id: 1,
      question: "Who should take this course?",
      answer: "Students interested in government and public sector careers.",
    },
  ],
},
{
  slug: "biotechnology",
  title: "Biotechnology",
  image: "/images/courses/biotechnology.jpg",
  price: 89,
  originalPrice: 179,
  instructor: "Michael Scott",
  lectures: 20,
  duration: "12 weeks",
  enrolled: 55,
  language: "English",
  teacher: {
    avatar: "/images/teachers/michael.jpg",
    name: "Michael Scott",
    role: "Teacher",
    category: "Sciences",
  },
  overview: [
    "Discover innovations in genetics, molecular biology, and biotechnology.",
    "Learn how biotechnology transforms healthcare and agriculture.",
  ],
  whatYouWillLearn: [
    "Genetic engineering",
    "Biotechnology applications",
    "Laboratory techniques",
    "Research methodologies",
  ],
  studyOptions: [
    { qualification: "BSc Biotechnology", length: "4 years full time", code: "BIO4" },
  ],
  faq: [
    {
      id: 1,
      question: "Is laboratory work included?",
      answer: "Yes, practical laboratory concepts are covered.",
    },
  ],
},
{
  slug: "corporate-finance",
  title: "Corporate Finance",
  image: "/images/courses/corporate-finance.jpg",
  price: 99,
  originalPrice: 199,
  instructor: "James Anderson",
  lectures: 22,
  duration: "10 weeks",
  enrolled: 60,
  language: "English",
  teacher: {
    avatar: "/images/teachers/james.jpg",
    name: "James Anderson",
    role: "Teacher",
    category: "Finance",
  },
  overview: [
    "Master the fundamentals of corporate financial management.",
    "Learn investment decisions, risk analysis, and capital budgeting.",
  ],
  whatYouWillLearn: [
    "Financial statement analysis",
    "Capital budgeting",
    "Investment strategies",
    "Risk management",
  ],
  studyOptions: [
    { qualification: "BBA Finance", length: "4 years full time", code: "FIN4" },
  ],
  faq: [
    {
      id: 1,
      question: "Is finance knowledge required?",
      answer: "No, the course starts from the basics.",
    },
  ],
},
];