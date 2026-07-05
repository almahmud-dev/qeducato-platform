"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import Container from "../ui/Container";
import DirectionalButton from "../common/DirectionalButton";

gsap.registerPlugin(ScrollTrigger);

function CtaBannerSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".cta-card", { opacity: 1, scale: 1 });
        return;
      }

      gsap.fromTo(
        ".cta-card",
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background">
      <Container>
        {/* মেইন প্রিমিয়াম মিনিমালিস্ট কার্ড */}
        <div className="cta-card relative w-full bg-secondary rounded-4xl p-8 md:p-14 overflow-hidden border border-background/5 shadow-[0_30px_70px_-15px_rgba(3,27,78,0.3)]">
          {/* রাইট সাইড অ্যাবস্ট্রাক্ট কোণাল শেড */}
          <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none hidden md:block" />

          {/* ২-কলাম গ্রিড লেআউট */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* বাম কলাম */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
              {/* মিনি ট্যাগ */}
              <div className="inline-flex items-center gap-2 bg-background/5 border border-background/10 px-3 py-1.5 rounded-full">
                <span
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-background text-xs font-semibold uppercase tracking-wider">
                  Admissions Open 2026
                </span>
              </div>

              {/* মেইন বোল্ড হেডলাইন */}
              <h2 className="text-2xl sm:text-3xl md:text-[2.75rem] font-black text-background leading-[1.15]">
                Ready to take the <br className="hidden md:inline" />
                next big step in your career?
              </h2>

              {/* শর্ট ডেসক্রিপশন */}
              <p className="text-background/70 text-sm md:text-base max-w-[580px] leading-relaxed">
                Join an elite ecosystem of innovators, researchers, and global
                leaders. Our simplified online application takes less than 10
                minutes to complete.
              </p>

              {/* কুইক ট্রাস্ট ফ্যাক্টরস */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-background/80">
                  <FiCheckCircle
                    className="text-primary"
                    size={14}
                    aria-hidden="true"
                  />
                  <span>No Application Fee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-background/80">
                  <FiCheckCircle
                    className="text-primary"
                    size={14}
                    aria-hidden="true"
                  />
                  <span>100% Online Process</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-background/80">
                  <FiCheckCircle
                    className="text-primary"
                    size={14}
                    aria-hidden="true"
                  />
                  <span>Scholarships Available</span>
                </div>
              </div>
            </div>

            {/* ডান কলাম: অ্যাকশন বাটন প্যানেল */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-stretch gap-4 w-full">
              <div className="w-full sm:w-auto lg:w-full">
                <DirectionalButton
                  href="/apply"
                  label="Apply Online Now"
                  rightIcon={<FiArrowUpRight size={18} aria-hidden="true" />}
                  bgColor="var(--color-primary)"
                  flairColor="var(--color-secondary)"
                  borderColor="var(--color-primary)"
                  textColor="var(--color-background)"
                  textHoverColor="#ffffff"
                  shadowHover="0px 15px 30px rgba(255, 111, 75, 0.25)"
                  size="lg"
                  className="font-bold rounded-2xl w-full justify-center py-4 text-center"
                />
              </div>
              <DirectionalButton
                href="/contact"
                label="Talk to an Advisor"
                rightIcon={<FiArrowRight size={16} aria-hidden="true" />}
                bgColor="transparent"
                flairColor="var(--color-primary)"
                borderColor="var(--color-background)"
                textColor="var(--color-background)"
                textHoverColor="var(--color-secondary)"
                shadowHover=""
                size="md"
                className="font-semibold rounded-2xl w-full justify-center py-4 text-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CtaBannerSection;
