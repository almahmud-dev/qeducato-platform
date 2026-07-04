"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

const faqData = [
  {
    id: 1,
    question: "What are the admission requirements for international students?",
    answer: "International students must provide official academic transcripts, proof of English language proficiency (IELTS, TOEFL, or equivalent), a valid passport copy, and a statement of purpose. Specific program requirements may vary, so please check our admissions guide.",
  },
  {
    id: 2,
    question: "Are there any scholarship or financial aid opportunities available?",
    answer: "Yes, we offer both merit-based and need-based scholarships for qualifying students. Merit scholarships are automatically evaluated during the admission process based on your previous academic performance and GPA.",
  },
  {
    id: 3,
    question: "Can I transfer credits from another university or college?",
    answer: "Credit transfers are possible subject to academic evaluation. You need to submit detailed course syllabi from your previous institution. Our academic registry department will review the course content compatibility to determine transferable credits.",
  },
  {
    id: 4,
    question: "What is the hybrid learning structure, and how does it work?",
    answer: "Our hybrid learning model combines real-time interactive online lectures with mandatory on-campus practical lab sessions and workshops. This ensures maximum flexibility without compromising hands-on engineering or research work.",
  },
  {
    id: 5,
    question: "How does the campus career support center help students find jobs?",
    answer: "The Career Services team hosts bi-annual job fairs, provides resume workshops, conducts mock interviews, and maintains exclusive job portals connected with over 150+ corporate partners to help students land internships and full-time positions.",
  },
];

function FaqSection() {
  // প্রথম অ্যাকোর্ডিয়নটি ডিফল্টভাবে ওপেন রাখার জন্য initial state ০ সেট করা হয়েছে
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24 overflow-hidden">
      <Container className="flex flex-col gap-12 max-w-4xl mx-auto">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto">
          <SectionHeader
            label="FAQ"
            text="Frequently Asked Questions"
            colorWord="Questions"
          />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
            Got questions about admissions, courses, or campus life? Find clear, detailed answers to the most common queries right below.
          </p>
        </div>

        {/* অ্যাকোর্ডিয়ন লিস্ট কন্টেইনার */}
        <div className="flex flex-col gap-4 mt-4 w-full">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`w-full rounded-2xl bg-white border transition-all duration-300 ${
                  isOpen 
                    ? "border-[#ff6f4b]/30 shadow-[0_15px_30px_rgba(3,27,78,0.03)]" 
                    : "border-slate-100 shadow-[0_10px_20px_rgba(3,27,78,0.005)]"
                }`}
              >
                {/* অ্যাকোর্ডিয়ন ক্লিকেবল হেডার */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left p-5 sm:p-6 gap-4 font-bold text-sm sm:text-base text-[#031b4e] hover:text-[#ff6f4b] transition-colors duration-200 cursor-pointer focus:outline-hidden group"
                >
                  <span className="leading-snug">{faq.question}</span>
                  
                  {/* চমৎকার প্লাস-মাইনাস আইকন অ্যানিমেশন */}
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-[#ff6f4b] border-[#ff6f4b] text-white rotate-180"
                        : "bg-slate-50 border-slate-100 text-[#031b4e] group-hover:bg-[#ff6f4b]/5 group-hover:border-[#ff6f4b]/20 group-hover:text-[#ff6f4b]"
                    }`}
                  >
                    {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                  </div>
                </button>

                {/* সিএসএস গ্রিড দিয়ে তৈরি স্মুথ স্লাইডিং প্যানেল */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* ইনার ডেসক্রিপশন টেক্সট */}
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-400 text-xs sm:text-[13px] sm:text-sm leading-relaxed border-t border-slate-50/50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

export default FaqSection;