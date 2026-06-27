"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { aboutFaqData, aboutContactFormData } from "@/helper/about/aboutData";
import Container from "../ui/Container";

const initialState = { firstName: "", email: "", phone: "", message: "" };

export default function AboutFaqContact() {
  const [openFaq, setOpenFaq] = useState(aboutFaqData.faqs[0]?.id || null);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialState);
  };

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-14">

          {/* Left: FAQ */}
          <div className="flex-1 min-w-0">
            <h2 className="text-5xl font-bold text-black mb-3">{aboutFaqData.heading}</h2>
            <p className="text-sm mb-8" style={{ color: "#777" }}>{aboutFaqData.description}</p>

            <div className="flex flex-col gap-3">
              {aboutFaqData.faqs.map((item) => (
                <div key={item.id} className="border border-gray-200">
                  <button
                    onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium" style={{ color: "#777" }}>
                      {item.question}
                    </span>
                    {openFaq === item.id
                      ? <FaChevronDown size={12} style={{ color: "#777" }} />
                      : <FaChevronLeft size={12} style={{ color: "#777" }} />
                    }
                  </button>
                  {openFaq === item.id && (
                    <div className="px-5 pb-4">
                      <p className="text-sm leading-relaxed" style={{ color: "#777" }}>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-96 shrink-0">
            <div className="bg-gray-900 p-10 h-full">
              <h3 className="text-white font-bold text-2xl mb-8">{aboutContactFormData.heading}</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {aboutContactFormData.fields.map((field) => (
                  <input
                    key={field.id}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full bg-gray-800 text-white placeholder:text-gray-500 px-4 py-4 text-sm outline-none border border-transparent focus:border-orange-400 transition"
                  />
                ))}
                <textarea
                  name={aboutContactFormData.textarea.name}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={aboutContactFormData.textarea.placeholder}
                  rows={5}
                  className="w-full bg-gray-800 text-white placeholder:text-gray-500 px-4 py-4 text-sm outline-none border border-transparent focus:border-orange-400 transition resize-none"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-4 flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  {aboutContactFormData.button} <FaArrowRight size={12} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}