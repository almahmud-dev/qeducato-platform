"use client";

import { useEffect, useId, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiClock,
  FiHeadphones,
  FiUsers,
  FiShield,
  FiPlus,
  FiMinus,
  FiArrowRight,
} from "react-icons/fi";
import {
  faqBadge,
  faqHeading,
  faqHighlights,
  faqCta,
  faqItems,
} from "@/helper/home/faqhome";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Icon lookup keeps data files framework-agnostic (plain strings in,
// real components out) and avoids importing every icon everywhere.
const iconMap = {
  clock: FiClock,
  headset: FiHeadphones,
  users: FiUsers,
  shield: FiShield,
};

function FaqAccordionItem({ item, isOpen, onToggle, index }) {
  const panelRef = useRef(null);
  const contentId = useId();

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Kill any in-flight tween before starting a new one so rapid
    // open/close clicks never fight each other or leak tweens.
    gsap.killTweensOf(panel);

    if (isOpen) {
      panel.style.display = "block";
      if (prefersReducedMotion) {
        gsap.set(panel, { height: "auto", opacity: 1 });
        return;
      }
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
      );
    } else {
      if (prefersReducedMotion) {
        gsap.set(panel, { height: 0, opacity: 0 });
        panel.style.display = "none";
        return;
      }
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          panel.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      className={[
        "faq-item overflow-hidden rounded-2xl border transition-colors duration-300",
        isOpen
          ? "border-primary bg-primary/5"
          : "border-border bg-background hover:border-primary/40",
      ].join(" ")}
    >
      <h3 className="m-0">
        <button
          type="button"
          onClick={() => onToggle(index)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-6"
        >
          <span
            className={[
              "text-[15px] font-semibold sm:text-base",
              isOpen ? "text-primary" : "text-foreground",
            ].join(" ")}
          >
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className={[
              "flex h-7 w-7 flex-none items-center justify-center rounded-lg text-sm transition-colors duration-300",
              isOpen ? "bg-primary text-white" : "bg-surface text-foreground",
            ].join(" ")}
          >
            {isOpen ? <FiMinus /> : <FiPlus />}
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        ref={panelRef}
        role="region"
        style={{
          display: isOpen ? "block" : "none",
          height: isOpen ? "auto" : 0,
        }}
        className="px-5 sm:px-6"
      >
        <p className="m-0 pb-5 text-sm leading-relaxed text-muted sm:pb-6 sm:text-[15px]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(1);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-intro",
        { opacity: 0, y: isMobile ? 16 : 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".faq-highlight",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".faq-highlights-row",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: isMobile ? 14 : 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: isMobile ? 0.06 : 0.1,
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const BadgeIcon = iconMap[faqBadge.icon] ?? FiClock;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="faq-heading"
      className="bg-background4"
    >
      <Container size="xl">
        <div className="grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16 pb-10">
          {/* Left column: intro copy + highlights + CTA */}
          <div className="faq-intro">
            <SectionHeader
              label={faqHeading.label}
              text={faqHeading.text}
              colorWord={faqHeading.colorWord}
              className="text-left"
            />

            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              {faqHeading.description}
            </p>

            <ul className="faq-highlights-row mt-8 flex flex-col gap-5 sm:flex-row sm:gap-8 pb-5">
              {faqHighlights.map((item) => {
                const Icon = iconMap[item.icon] ?? FiHeadphones;
                return (
                  <li
                    key={item.id}
                    className="faq-highlight flex items-center gap-3"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-background text-secondary shadow-sm ring-1 ring-border">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted">
                        {item.subtitle}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
            <DirectionalButton
              href="/faq"
              label="View All FAQ"
              rightIcon={<FiArrowRight size={16} aria-hidden="true" />}
              bgColor="transparent"
              flairColor="var(--color-secondary)"
              borderColor="var(--color-primary)"
              textColor="var(--color-primary)"
              textHoverColor="var(--color-background)"
              shadowHover=""
              size="md"
              className="font-semibold rounded-sm px-8 py-5.5"
            />
          </div>

          {/* Right column: accordion */}
          <div className="faq-list flex flex-col gap-4 rounded-3xl bg-surface p-4 sm:p-6">
            {faqItems.map((item, index) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
