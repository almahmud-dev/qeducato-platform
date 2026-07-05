"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import { statsData } from "@/helper/home/studentSuccessStats";

gsap.registerPlugin(ScrollTrigger);

function StudentSuccessStats() {
  const containerRef = useRef(null);
  const numRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Reduced motion বা কোনো কারণে JS আগে থেকে final value বসিয়ে রাখা ভালো,
      // যাতে animation fail/skip হলেও ইউজার সঠিক সংখ্যা দেখে
      if (prefersReducedMotion) {
        numRefs.current.forEach((el, i) => {
          if (el) el.textContent = statsData[i].targetValue.toLocaleString();
        });
        return;
      }

      numRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = statsData[i].targetValue;

        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { textContent: 1 },
            // বড় সংখ্যায় (15000) কমা ফরম্যাট বজায় রাখতে প্রতি ফ্রেমে ফরম্যাট করি
            onUpdate: function () {
              const val = Math.round(this.targets()[0].textContent);
              el.textContent = Number(val).toLocaleString();
            },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#f9fbff] overflow-hidden">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto">
          <SectionHeader
            label="Our Milestone"
            text="Empowering Futures by Student Success Stats"
            colorWord="Success"
          />
          <p className="text-muted text-sm md:text-base leading-relaxed mt-4">
            Our numbers speak for themselves. We take pride in cultivating an
            ecosystem that consistently drives excellence and real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-4">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="bg-background rounded-3xl shadow-[0_15px_40px_rgba(3,27,78,0.02)] border border-border/60 p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className={`${stat.iconBg} p-4 rounded-2xl mb-5 shadow-xs transition-transform duration-300 group-hover:scale-105`}
              >
                {stat.icon}
              </div>

              <div
                className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-2 flex items-center"
                aria-label={`${stat.targetValue.toLocaleString()}${stat.suffix} ${stat.label}`}
              >
                <span
                  ref={(el) => (numRefs.current[i] = el)}
                  aria-hidden="true"
                >
                  0
                </span>
                <span className="text-primary" aria-hidden="true">
                  {stat.suffix}
                </span>
              </div>

              <h4 className="text-sm md:text-[15px] font-bold text-muted group-hover:text-foreground transition-colors duration-200">
                {stat.label}
              </h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StudentSuccessStats;
