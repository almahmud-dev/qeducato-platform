"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import DirectionalButton from "@/components/common/DirectionalButton";
import { scholarshipData } from "@/helper/about/aboutSectionsData";

gsap.registerPlugin(ScrollTrigger);

export default function ScholarshipBanner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 sm:py-14">
      <Container size="xl">
        <div
          ref={sectionRef}
          className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-10 sm:px-12 sm:py-12"
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary/10" />
          <div className="absolute -left-10 -bottom-20 w-56 h-56 rounded-full bg-white/5" />

          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="label text-primary mb-3">
                {scholarshipData.eyebrow}
              </p>
              <h2 className="headingThree text-white mb-3">
                {scholarshipData.title}
              </h2>
              <p className="PeraTwo text-white/75">{scholarshipData.desc}</p>
            </div>

            <div className="flex items-center gap-8 shrink-0">
              <div className="hidden sm:flex gap-8">
                {scholarshipData.highlights.map((item) => (
                  <div key={item.id}>
                    <p className="headingFore text-white leading-none">
                      {item.value}
                    </p>
                    <p className="caption text-white/70 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              <DirectionalButton
                label={scholarshipData.ctaLabel}
                href={scholarshipData.ctaHref}
                bgColor="var(--color-primary)"
                borderColor="var(--color-primary)"
                borderHoverColor="#ffffff"
                textColor="#ffffff"
                textHoverColor="var(--color-secondary)"
                flairColor="#ffffff"
                rightIcon={<FiArrowUpRight />}
                size="md"
                className="whitespace-nowrap"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}