"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactFormData } from "@/helper/contact/contactData";
import SectionHeader from "@/components/common/SectionHeader";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

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
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
      @keyframes drawRing { to { stroke-dashoffset: 0; } }
      @keyframes drawCheck { to { stroke-dashoffset: 0; } }
      .confirm-in { animation: fadeUp 0.5s ease-out; }
      .ring-draw { stroke-dasharray:207; stroke-dashoffset:207; animation: drawRing 0.7s ease-out forwards; }
      .check-draw { stroke-dasharray:40; stroke-dashoffset:40; animation: drawCheck 0.4s ease-out 0.6s forwards; }
      .spinner { width:14px; height:14px; border:2px solid rgba(255,255,255,0.4); border-top-color:#fff; border-radius:50%; animation:spin 0.7s linear infinite; display:inline-block; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

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
        }
      );
    }, panelRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
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
      return;
    }
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setSubmitted(true);
      setFormData(initialState);
      setErrors({});
    } finally {
      setLoading(false);
    }
  };

  const FloatingField = ({ id, name, type = "text", placeholder, value, error, half }) => (
    <div className={half ? "" : "sm:col-span-2"}>
      <div className="relative">
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder=" "
          className={`peer w-full bg-white rounded-xl px-4 pt-6 pb-2.5 text-[15px] text-foreground outline-none transition-all duration-300 border focus:border-primary ${error ? "border-red-300" : "border-border"}`}
        />
        <label
          htmlFor={id}
          className="absolute left-4 top-4 text-[15px] text-muted transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-primary"
        >
          {placeholder}
        </label>
      </div>
      {error && <p className="text-red-400 text-xs mt-1.5 ml-1">{error}</p>}
    </div>
  );

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 bg-primary" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-[350px] h-[350px] rounded-full blur-[120px] opacity-10 bg-secondary" />

      <Container>
        <SectionHeader
          label="Get In Touch"
          text={contactFormData.heading}
          colorWord="Inquire"
        />

        <div
          ref={panelRef}
          className="relative mt-12 max-w-3xl mx-auto rounded-3xl p-6 sm:p-10 bg-white border border-border shadow-[0_24px_60px_-24px_rgba(18,88,117,0.15)]"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <FloatingField
                  id="firstName"
                  name="firstName"
                  placeholder={contactFormData.fields[0].placeholder}
                  value={formData.firstName}
                  error={errors.firstName}
                  half
                />
                <FloatingField
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={contactFormData.fields[2].placeholder}
                  value={formData.phone}
                  error={errors.phone}
                  half
                />
                <FloatingField
                  id="email"
                  name="email"
                  type="email"
                  placeholder={contactFormData.fields[1].placeholder}
                  value={formData.email}
                  error={errors.email}
                />
              </div>

              <div className="relative mb-8">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows={contactFormData.textarea?.rows || 4}
                  className={`peer w-full bg-white rounded-xl px-4 pt-6 pb-2.5 text-[15px] text-foreground outline-none transition-all duration-300 resize-none border focus:border-primary ${errors.message ? "border-red-300" : "border-border"}`}
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-[15px] text-muted transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-primary"
                >
                  {contactFormData.textarea?.placeholder}
                </label>
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message}</p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted order-2 sm:order-1">
                  We usually reply within one business day.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 shadow-[0_12px_30px_-10px_rgba(255,107,53,0.45)]"
                >
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Sending
                    </>
                  ) : (
                    contactFormData.button
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="confirm-in flex flex-col items-center text-center py-8">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <circle cx="36" cy="36" r="33" stroke="#ffe0d3" strokeWidth="3" />
                <circle cx="36" cy="36" r="33" stroke="url(#primaryGrad)" strokeWidth="3" strokeLinecap="round" className="ring-draw" />
                <path d="M23 37.5L32 46L49 27" stroke="url(#primaryGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="check-draw" />
                <defs>
                  <linearGradient id="primaryGrad" x1="0" y1="0" x2="72" y2="72">
                    <stop offset="0" stopColor="#ff6b35" />
                    <stop offset="1" stopColor="#f45a22" />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                Message received
              </h3>
              <p className="mt-2 text-sm max-w-sm text-muted">
                Thanks for reaching out — our team will get back to you within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-medium text-primary hover:underline transition-all"
              >
                Send another message →
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}