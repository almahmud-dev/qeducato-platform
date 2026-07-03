// components/contact/ContactForm.jsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast, Toaster } from "react-hot-toast";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaEdit,
  FaArrowRight,
} from "react-icons/fa";
import { contactFormData } from "@/helper/contact/contactData";
import SectionHeader from "@/components/common/SectionHeader";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  FaUser: <FaUser size={13} />,
  FaEnvelope: <FaEnvelope size={13} />,
  FaPhone: <FaPhone size={13} />,
  FaEdit: <FaEdit size={13} />,
};

const initialState = {
  firstName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const panelRef = useRef(null);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      gsap.set(panelRef.current, { willChange: "transform, opacity" });
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: isMobile ? 20 : 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: panelRef.current,
            start: isMobile ? "top 92%" : "top 85%",
            end: "bottom top",
            ...(isMobile
              ? { once: true }
              : { toggleActions: "play none none reverse" }),
          },
          onComplete: isMobile
            ? () => gsap.set(panelRef.current, { clearProps: "willChange,transform" })
            : undefined,
        },
      );
    }, panelRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Your request has been submitted successfully!");
      setFormData(initialState);
      setErrors({});
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "peer w-full bg-white border border-border rounded-xl px-4 py-3.5 pr-10 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors duration-300 focus:border-primary";

  return (
    <section className="relative py-20 sm:py-24 bg-surface">
      <Toaster position="top-right" />

      <Container>
        <SectionHeader
          label="Get A Quote"
          text={contactFormData.heading}
          colorWord="Inquire"
        />

        <div
          ref={panelRef}
          className="relative mt-12 max-w-4xl mx-auto rounded-2xl border border-border bg-white p-6 sm:p-10 shadow-sm"
        >
          <div className="absolute top-0 left-8 h-[3px] w-16 rounded-full bg-primary" />

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {contactFormData.fields.map((field) => (
                <div key={field.id} className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className={fieldClass}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/50 peer-focus:text-primary transition-colors">
                    {iconMap[field.icon]}
                  </span>
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1.5 ml-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="relative mb-8">
              <textarea
                name={contactFormData.textarea.name}
                value={formData.message}
                onChange={handleChange}
                placeholder={contactFormData.textarea.placeholder}
                rows={contactFormData.textarea.rows}
                className={`${fieldClass} resize-none`}
              />
              <span className="absolute right-4 top-4 text-muted/50 peer-focus:text-primary transition-colors">
                {iconMap[contactFormData.textarea.icon]}
              </span>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1.5 ml-1">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center gap-2 text-white text-sm font-semibold px-9 py-3.5 rounded-full bg-primary transition-all duration-300 hover:bg-primary-hover hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? "Sending..." : contactFormData.button}
                {!loading && (
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}