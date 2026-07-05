"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineUsers } from "react-icons/hi2";
import about1 from "@/../public/images/home/about/about2.jpg";
import about2 from "@/../public/images/home/about/about1.png";
import Container from "../ui/Container";
import DirectionalButton from "../common/DirectionalButton";
import SectionHeader from "../common/SectionHeader";
import { features, stats } from "@/helper/home/abouthome";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Reduced motion হলে সব statically visible রেখে count শুধু final value বসিয়ে দাও
      if (prefersReducedMotion) {
        gsap.set(".about-media, .about-point, .about-stat", { opacity: 1 });
        document.querySelectorAll(".stat-value").forEach((el) => {
          el.textContent = `${el.dataset.prefix || ""}${el.dataset.count}${
            el.dataset.suffix || ""
          }`;
        });
        return;
      }

      // 1. Media (images + floating cards) fade + slide in
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

      // 2. Feature points stagger in
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

      // 3. Stat cards stagger in (fade/slide only — cheap on GPU)
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

      // 4. Count-up animation — একবারই চলবে, প্রতিটা stat নিজের ট্রিগারে
      gsap.utils.toArray(".stat-value").forEach((el) => {
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const counter = { val: 0 };

        gsap.to(counter, {
          val: target,
          duration: 1.4,
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
    <section ref={sectionRef} className="bg-[#f9fbff] overflow-hidden">
      <Container size="xl">
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* MEDIA COLUMN */}
            <div className="about-media lg:col-span-6 relative w-full h-[520px] sm:h-[600px]">
              {/* Main image */}
              <div className="absolute left-0 top-0 w-[58%] h-[88%] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(3,27,78,0.08)] z-10">
                <Image
                  src={about1}
                  alt="University main building"
                  fill
                  priority
                  sizes="(max-width: 1024px) 58vw, 30vw"
                  className="object-cover"
                />
              </div>

              {/* Secondary image */}
              <div className="absolute right-6 bottom-0 w-[52%] h-[75%] rounded-3xl overflow-hidden shadow-[0_15px_35px_rgba(3,27,78,0.06)] z-0">
                <Image
                  src={about2}
                  alt="Student walking on campus"
                  fill
                  sizes="(max-width: 1024px) 52vw, 27vw"
                  className="object-cover"
                />
              </div>

              {/* Top-right stat card */}
              <div className="absolute right-0 top-[6%] bg-background p-4 rounded-2xl shadow-[0_10px_35px_rgba(3,27,78,0.1)] flex flex-col items-start gap-1 z-20 min-w-[180px] sm:min-w-[200px] border border-border">
                <div className="bg-primary/10 p-2 rounded-xl text-primary">
                  <HiOutlineAcademicCap
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-foreground mt-1">
                  25+
                </h3>
                <p className="text-[11px] font-bold text-muted leading-tight">
                  Years of Excellence <br />
                  <span className="text-muted/80 font-normal">
                    in Education
                  </span>
                </p>
              </div>

              {/* Bottom-left community card */}
              <div className="absolute left-[4%] bottom-[4%] bg-background py-3.5 px-4 rounded-2xl shadow-[0_12px_35px_rgba(3,27,78,0.1)] flex flex-col gap-2.5 z-20 min-w-[180px] sm:min-w-[220px] border border-border">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary p-1.5 rounded-lg text-background">
                    <HiOutlineUsers
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-[11px] font-extrabold text-foreground">
                    Join a Global Community
                  </span>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-2">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <div className="inline-block h-6 w-6 rounded-full ring-2 ring-background bg-muted/40" />
                    <div className="inline-block h-6 w-6 rounded-full ring-2 ring-background bg-muted/60" />
                    <div className="inline-block h-6 w-6 rounded-full ring-2 ring-background bg-muted/80" />
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-background ring-2 ring-background">
                      +
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-black text-foreground">
                      10K+
                    </div>
                    <div className="text-[9px] text-muted font-medium">
                      Students
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXT COLUMN */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionHeader
                label="About Our University"
                text="Shaping Minds, Building  Futures"
                colorWord="Future"
                className="text-left"
              />

              <p className="text-muted text-sm md:text-[15px] leading-relaxed mb-8">
                We are more than a university we are a community of innovators,
                leaders, and global citizens. Our mission is to deliver
                world-class education and create impactful experiences that
                shape the future.
              </p>

              <div className="about-points-grid grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="about-point flex items-start gap-3.5"
                  >
                    <div
                      className={`${item.iconBg} p-2.5 rounded-xl shrink-0 shadow-sm`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted/80 text-xs leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <DirectionalButton
                  href="/about"
                  label="Discover More About Us"
                  rightIcon={<FiArrowRight size={16} aria-hidden="true" />}
                  bgColor="transparent"
                  flairColor="var(--color-secondary)"
                  borderColor="var(--color-primary)"
                  textColor="var(--color-primary)"
                  textHoverColor="var(--color-background)"
                  shadowHover=""
                  size="md"
                  className="font-semibold rounded-sm py-5.5"
                />
              </div>
            </div>
          </div>

          {/* STATS ROW */}
          <div className="about-stats-row bg-background rounded-3xl shadow-[0_15px_50px_rgba(3,27,78,0.03)] border border-border/80 p-6 md:p-8 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-border">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`about-stat group flex items-center gap-4 px-2 transition-all duration-300 ${
                    i > 0 ? "pt-6 sm:pt-0 lg:pl-6" : ""
                  }`}
                >
                  <div
                    className={`${stat.iconBg} p-3 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md`}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <h3
                      className="stat-value text-2xl md:text-[26px] font-black text-foreground leading-tight tracking-tight"
                      data-count={stat.countTo}
                      data-prefix={stat.prefix}
                      data-suffix={stat.suffix}
                    >
                      {stat.prefix}0{stat.suffix}
                    </h3>
                    <h4 className="text-xs font-bold text-foreground/80 mt-0.5">
                      {stat.label}
                    </h4>
                    <p className="text-muted text-[10px] font-medium leading-none mt-1">
                      {stat.subLabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
