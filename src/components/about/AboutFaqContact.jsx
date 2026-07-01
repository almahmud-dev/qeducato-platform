"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaArrowRight } from "react-icons/fa";
import { aboutFaqData, aboutContactFormData } from "@/helper/about/aboutData";
import Container from "../ui/Container";
import { toast, Toaster } from "react-hot-toast";

const initialState = { firstName: "", email: "", phone: "", message: "" };

const validate = (formData) => {
  const errors = {};
  if (!formData.firstName.trim()) errors.firstName = "First name is required";
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email address";
  }
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (!formData.message.trim()) errors.message = "Message is required";
  return errors;
};

export default function AboutFaqContact() {
  const [openFaq, setOpenFaq] = useState(aboutFaqData.faqs[0]?.id || null);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Your message has been sent successfully!");
      setFormData(initialState);
      setErrors({});
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <Toaster position="top-right" />
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
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                {aboutContactFormData.fields.map((field) => (
                  <div key={field.id}>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-gray-800 text-white placeholder:text-gray-500 px-4 py-4 text-sm outline-none border border-transparent focus:border-orange-400 transition"
                    />
                    {errors[field.name] && (
                      <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <textarea
                    name={aboutContactFormData.textarea.name}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={aboutContactFormData.textarea.placeholder}
                    rows={5}
                    className="w-full bg-gray-800 text-white placeholder:text-gray-500 px-4 py-4 text-sm outline-none border border-transparent focus:border-orange-400 transition resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-4 flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? "Sending..." : aboutContactFormData.button}
                  {!loading && <FaArrowRight size={12} />}
                </button>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}