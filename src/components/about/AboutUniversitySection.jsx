"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiBookOpen, FiUsers, FiGlobe, FiBriefcase } from "react-icons/fi";
import Container from "@/components/ui/Container";
import { missionPoints, aboutStats } from "@/helper/about/aboutSectionsData";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  book: FiBookOpen,
  users: FiUsers,
  globe: FiGlobe,
  briefcase: FiBriefcase,
};

export default function AboutUniversitySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-media",
        { opacity: 0, x: isMobile ? 0 : -40, y: isMobile ? 24 : 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".about-point",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".about-points-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".about-stats-row",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 bg-background">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="about-media relative">
            <div className="relative aspect-4/5 max-w-md mx-auto lg:mx-0">
              <div className="absolute top-0 left-0 w-[72%] h-[62%] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/university-building.jpg"
                  alt="University main building facade"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[62%] h-[52%] rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                <Image
                  src="/images/about/student-walking.jpg"
                  alt="Student walking through campus grounds"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-6 right-2 sm:right-6 bg-secondary text-white rounded-2xl px-5 py-4 shadow-lg">
                <p className="headingThree text-white leading-none">25+</p>
                <p className="caption text-white/80 mt-1">Years of Legacy</p>
              </div>
            </div>
          </div>

          <div>
            <p className="label text-primary mb-3">About Our University</p>
            <h2 className="headingTwo text-secondary mb-5">
              Shaping Minds, <span className="text-primary">Building Futures</span>
            </h2>
            <p className="PeraOne text-muted mb-8">
              For over two decades, Qeducato University has stood at the
              intersection of rigorous scholarship and real-world readiness.
              We build programs around what our students need to lead, not
              just graduate.
            </p>

            <div className="about-points-grid grid sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
              {missionPoints.map((point) => {
                const Icon = iconMap[point.icon];
                return (
                  <div key={point.id} className="about-point flex gap-3">
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      {Icon && <Icon size={20} />}
                    </span>
                    <div>
                      <h3 className="headingSix text-foreground mb-1">
                        {point.title}
                      </h3>
                      <p className="PeraThree text-muted">{point.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="about-stats-row flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-border">
              {aboutStats.map((stat) => (
                <div key={stat.id} className="about-stat">
                  <p className="headingFore text-secondary leading-none">
                    {stat.value}
                  </p>
                  <p className="caption text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}