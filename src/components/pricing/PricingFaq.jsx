"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Container from "../ui/Container";
import { faqs } from "@/helper/pricing/pricingData";

// ─── Single Accordion Item ─────────────────────────────────────────────────────
function FaqItem({ faq, isOpen, onToggle }) {
  const panelRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Measure real content height — no hardcoded 300px
  useEffect(() => {
    if (!panelRef.current) return;
    const el = panelRef.current;

    const measure = () => setHeight(el.scrollHeight);
    measure();

    // Re-measure on resize (font scale, orientation change)
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [faq.answer]);

  const panelId = `faq-panel-${faq.id}`;
  const triggerId = `faq-trigger-${faq.id}`;

  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
        isOpen
          ? "border-[var(--color-primary)]/40 bg-white shadow-sm shadow-orange-100/40"
          : "border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/20"
      }`}
    >
      {/* Trigger button */}
      <button
        id={triggerId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        // touch-action: manipulation removes 300ms tap delay on mobile
        style={{ touchAction: "manipulation" }}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-inset rounded-2xl cursor-pointer"
      >
        <span
          className={`PeraOne font-semibold transition-colors duration-200 pr-2 text-sm sm:text-base ${
            isOpen
              ? "text-[var(--color-primary)]"
              : "text-[var(--color-foreground)]"
          }`}
        >
          {faq.question}
        </span>

        {/* Icon — aria-hidden because button already has aria-expanded */}
        <span
          aria-hidden="true"
          className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "bg-[var(--color-primary)] text-white"
              : "bg-[var(--color-surface)] text-[var(--color-muted)]"
          }`}
        >
          {isOpen ? (
            <FiMinus size={13} strokeWidth={2.5} />
          ) : (
            <FiPlus size={13} strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/*
        Answer panel:
        - maxHeight driven by measured real height (no 300px guess)
        - prefers-reduced-motion: skip animation entirely
        - role="region" + aria-labelledby for screen readers
      */}
      <div
        id={panelId}
        ref={panelRef}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          transition:
            "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          // Respect reduced motion preference
          "@media (prefers-reduced-motion: reduce)": {
            transition: "none",
          },
        }}
      >
        <p className="px-5 pb-4 sm:px-6 sm:pb-5 PeraTwo text-[var(--color-muted)] leading-relaxed text-sm sm:text-base">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function PricingFaq() {
  const [openId, setOpenId] = useState(null);

  // useCallback — stable reference, no re-render churn on child items
  const toggle = useCallback(
    (id) => setOpenId((prev) => (prev === id ? null : id)),
    [],
  );

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-14 md:py-20 bg-[var(--color-surface)]"
    >
      <Container size="md">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="label text-[var(--color-primary)]">FAQ</span>
          <h2
            id="faq-heading"
            className="headingThree text-[var(--color-foreground)] mt-2 mb-3"
          >
            Questions we hear often
          </h2>
          <p className="PeraTwo text-[var(--color-muted)] max-w-md mx-auto text-sm sm:text-base">
            Still not sure? Reach out to our team — we typically respond within
            a few hours.
          </p>
        </div>

        {/* Accordion list — role="list" for screen readers */}
        <div className="space-y-3" role="list">
          {faqs.map((faq) => (
            <div key={faq.id} role="listitem">
              <FaqItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="text-center PeraThree text-[var(--color-muted)] mt-8 md:mt-10 text-sm">
          More questions?{" "}
          <a
            href="/contact"
            className="text-[var(--color-primary)] font-medium hover:underline underline-offset-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 rounded-sm"
          >
            Chat with our team →
          </a>
        </p>
      </Container>
    </section>
  );
}
