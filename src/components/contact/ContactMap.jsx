// components/contact/ContactMap.jsx
"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMapMarkerAlt } from "react-icons/fa";
import { contactMapData, contactInfoData } from "@/helper/contact/contactData";

gsap.registerPlugin(ScrollTrigger);

export default function ContactMap() {
  const wrapperRef = useRef(null);
  const officeAddress = contactInfoData?.find((i) => i.icon === "FaMapMarkerAlt");

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      gsap.set(wrapperRef.current, { willChange: "transform, opacity" });
      gsap.fromTo(
        wrapperRef.current,
        { opacity: 0, y: isMobile ? 18 : 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: isMobile ? "top 92%" : "top 85%",
            end: "bottom top",
            ...(isMobile
              ? { once: true }
              : { toggleActions: "play none none reverse" }),
          },
          onComplete: isMobile
            ? () => gsap.set(wrapperRef.current, { clearProps: "willChange,transform" })
            : undefined,
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-background">
      <div
        ref={wrapperRef}
        className="relative w-full overflow-hidden border-y border-border h-[420px] sm:h-[500px] lg:h-[560px]"
      >
        <iframe
          src={contactMapData.src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office location map"
        />

        {officeAddress && (
          <div className="absolute bottom-5 left-5 flex items-center gap-3 pr-5 pl-3 py-3 rounded-2xl border border-border bg-white/95 backdrop-blur-md shadow-md">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-primary bg-primary/10 shrink-0">
              <FaMapMarkerAlt size={16} />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[2px] text-muted mb-0.5">
                {officeAddress.subtitle}
              </p>
              <p className="text-sm font-medium text-secondary">
                {officeAddress.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}