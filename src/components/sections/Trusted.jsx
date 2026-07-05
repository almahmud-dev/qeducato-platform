"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheckCircle } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import { brandLogos, statsData } from "@/helper/home/trusted";

gsap.registerPlugin(ScrollTrigger);

const Trusted = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".brand-logo, .trust-stat", { opacity: 1, y: 0 });
        document.querySelectorAll(".trust-stat-value").forEach((el) => {
          el.textContent = `${el.dataset.prefix || ""}${el.dataset.count}${
            el.dataset.suffix || ""
          }`;
        });
        return;
      }

      // 1. Logo grid — stagger fade + slight lift
      gsap.fromTo(
        ".brand-logo",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".brand-logo-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // 2. Stats card block — stagger fade + slide up
      gsap.fromTo(
        ".trust-stat",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".trust-stats-row",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // 3. Count-up for stat numbers — runs once, direct DOM write (no re-render)
      gsap.utils.toArray(".trust-stat-value").forEach((el) => {
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const counter = { val: 0 };

        gsap.to(counter, {
          val: target,
          duration: 1.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(counter.val)}${suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-12">
          <SectionHeader
            label="Trusted By"
            text="Trusted by Leading Institutions"
            colorWord="Leading"
          />
          <p className="text-muted text-sm sm:text-base leading-relaxed mt-4">
            We collaborate with top universities, organizations, and industry
            leaders to deliver world-class education and opportunities.
          </p>
        </div>

        <div className="brand-logo-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="brand-logo bg-background rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-border flex items-center justify-center h-24 transition duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative w-[70%] h-[60%]">
                <Image
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="(max-width: 768px) 30vw, 15vw"
                  className="object-contain filter grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="trust-stats-row bg-background border border-border rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-border">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className={`trust-stat flex flex-col items-center text-center px-4 ${
                  i > 0 ? "pt-6 sm:pt-0 lg:pl-6" : ""
                }`}
              >
                <div
                  className={`${stat.iconBg} p-3.5 rounded-full mb-4 shadow-sm`}
                >
                  {stat.icon}
                </div>
                <h3
                  className="trust-stat-value text-3xl font-extrabold text-secondary mb-1"
                  data-count={stat.countTo}
                  data-prefix={stat.prefix}
                  data-suffix={stat.suffix}
                >
                  {stat.prefix}0{stat.suffix}
                </h3>
                <h4 className="text-sm font-bold text-foreground/80 mb-2">
                  {stat.label}
                </h4>
                <p className="text-muted text-xs leading-relaxed max-w-[200px]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10 text-xs sm:text-sm text-muted font-medium">
          <FiCheckCircle className="text-primary" aria-hidden="true" />
          <span>Committed to excellence. Trusted worldwide.</span>
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
