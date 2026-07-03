// components/contact/ContactInfo.jsx
"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { contactInfoData } from "@/helper/contact/contactData";
import SectionHeader from "@/components/common/SectionHeader";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  FaPhone: <FaPhone size={20} />,
  FaEnvelope: <FaEnvelope size={20} />,
  FaMapMarkerAlt: <FaMapMarkerAlt size={20} />,
};

export default function ContactInfo() {
  const gridRef = useRef(null);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      const cards = gridRef.current.children;
      gsap.set(cards, { willChange: "transform, opacity" });
      gsap.fromTo(
        cards,
        { opacity: 0, y: isMobile ? 18 : 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          force3D: true,
          scrollTrigger: {
            trigger: gridRef.current,
            start: isMobile ? "top 92%" : "top 85%",
            end: "bottom top",
            ...(isMobile
              ? { once: true }
              : { toggleActions: "play none none reverse" }),
          },
          onComplete: isMobile
            ? () => gsap.set(cards, { clearProps: "willChange,transform" })
            : undefined,
        },
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-20 sm:py-24 bg-background">
      <Container>
        <SectionHeader label="Contact Info" text="Get In Touch" colorWord="Touch" />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
        >
          {contactInfoData.map((item, i) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-center text-center py-12 px-6 rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30"
            >
              <span className="absolute top-5 right-6 text-xs font-semibold text-muted/40 tracking-widest">
                0{i + 1}
              </span>

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                {iconMap[item.icon]}
              </div>

              <span className="text-[11px] uppercase tracking-[3px] text-muted mb-2">
                {item.subtitle}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-secondary break-words">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}