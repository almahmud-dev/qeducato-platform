"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
} from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    targetValue: 15000,
    suffix: "+",
    label: "Success Graduates",
    icon: <HiOutlineAcademicCap className="w-6 h-6 text-orange-600" />,
    iconBg: "bg-orange-50",
  },
  {
    targetValue: 98,
    suffix: "%",
    label: "Employment Rate",
    icon: <HiOutlineBriefcase className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-50",
  },
  {
    targetValue: 200,
    suffix: "+",
    label: "Global Partners",
    icon: <HiOutlineGlobeAlt className="w-6 h-6 text-green-600" />,
    iconBg: "bg-green-50",
  },
  {
    targetValue: 150,
    suffix: "+",
    label: "Expert Faculty",
    icon: <HiOutlineUserGroup className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-50",
  },
];

function StudentSuccessStats() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsData.forEach((_, index) => {
        const numEl = document.querySelector(`.counter-num-${index}`);
        if (!numEl) return;

        const target = parseInt(numEl.getAttribute("data-target"), 10);

        gsap.fromTo(
          numEl,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: numEl,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#f9fbff] py-16 md:py-24 overflow-hidden"
    >
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-center text-center max-w-175 mx-auto">
          <SectionHeader
            label="Our Milestone"
            text="Empowering Futures by Student Success Stats"
            colorWord="Success"
          />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
            Our numbers speak for themselves. We take pride in cultivating an
            ecosystem that consistently drives excellence and real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-4">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(3,27,78,0.02)] border border-slate-100/60 p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                className={`${stat.iconBg} p-4 rounded-2xl mb-5 shadow-xs transition-transform duration-300 group-hover:scale-105`}
              >
                {stat.icon}
              </div>

              <div className="text-4xl md:text-5xl font-black text-[#031b4e] tracking-tight mb-2 flex items-center">
                <span
                  className={`counter-num-${i}`}
                  data-target={stat.targetValue}
                >
                  0
                </span>
                <span className="text-[#ff6f4b]">{stat.suffix}</span>
              </div>

              <h4 className="text-sm md:text-[15px] font-bold text-slate-500 group-hover:text-[#031b4e] transition-colors duration-200">
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
