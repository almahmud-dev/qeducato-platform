// data/faqData.js
// Central data source for the FAQ section. Keeping content here means
// copy edits never require touching component/render logic.

export const faqBadge = {
  icon: "clock",
  label: "Help Center",
};

export const faqHeading = {
  label: "Help Center",
  text: "Frequently Asked Questions",
  colorWord: "Questions",
  description:
    "Get quick answers to the most common questions about admissions, programs, tuition, scholarships, and student services.",
};

export const faqHighlights = [
  {
    id: "support",
    icon: "headset",
    title: "24/7 Support",
    subtitle: "We're here to help anytime.",
  },
  {
    id: "students",
    icon: "users",
    title: "5000+ Students",
    subtitle: "Trusted by thousands of learners.",
  },
  {
    id: "reliable",
    icon: "shield",
    title: "Fast & Reliable",
    subtitle: "Get accurate answers instantly.",
  },
];

export const faqItems = [
  {
    id: "faq-admission",
    question: "How do I apply for admission?",
    answer:
      "You can apply online through our admissions portal by submitting your academic records, a completed application form, and the required documents. Our admissions team reviews applications on a rolling basis.",
  },
  {
    id: "faq-scholarships",
    question: "Do you offer scholarships?",
    answer:
      "Yes! We offer merit-based and need-based scholarships for eligible students. You can check the scholarship page for detailed information and eligibility criteria.",
  },
  {
    id: "faq-tuition",
    question: "What is the tuition fee structure?",
    answer:
      "Tuition fees vary by program and are billed per semester. A detailed fee breakdown, including any lab or material charges, is available on each program's page and can be paid online or in installments.",
  },
  {
    id: "faq-online",
    question: "Can I study online?",
    answer:
      "Many of our programs offer flexible online or hybrid learning options, so you can attend live sessions or access recorded lectures from anywhere.",
  },
  {
    id: "faq-support",
    question: "How can I contact student support?",
    answer:
      "Our student support team is available 24/7 via live chat, email, or phone. You can also visit the help desk on campus for in-person assistance.",
  },
];
