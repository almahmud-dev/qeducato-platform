"use client";

import { HiPlus, HiMinus } from "react-icons/hi";

export default function FAQItem({ item, index, isOpen, onToggle }) {
  const headingId = `faq-heading-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <div className="border border-[var(--border)] rounded-[10px] overflow-hidden">
      <h3>
        <button
          id={headingId}
          onClick={() => onToggle(item.id)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={`
            w-full flex items-center gap-4 px-5 py-4 text-left
            transition-colors duration-200 cursor-pointer
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]
            ${isOpen ? "bg-[var(--surface)]" : "bg-white hover:bg-[var(--surface)]"}
          `}
        >
          {/* Number badge */}
          <span
            className={`
              shrink-0 w-8 h-8 rounded-full flex items-center justify-center
              caption font-bold transition-colors duration-200
              ${isOpen ? "bg-[var(--primary)] text-white" : "bg-[var(--surface)] text-[var(--secondary)]"}
            `}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Question */}
          <span className="flex-1 headingSix text-[var(--foreground)]">
            {item.question}
          </span>

          {/* Toggle icon */}
          <span
            className={`
              shrink-0 w-8 h-8 rounded-full border flex items-center justify-center
              transition-all duration-200
              ${
                isOpen
                  ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                  : "border-[var(--border)] text-[var(--muted)]"
              }
            `}
            aria-hidden="true"
          >
            {isOpen ? (
              <HiMinus className="w-4 h-4" />
            ) : (
              <HiPlus className="w-4 h-4" />
            )}
          </span>
        </button>
      </h3>

      {/* Answer panel — CSS height transition */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-5 pb-5 pt-1 pl-[4.25rem]">
          <p className="PeraTwo text-[var(--muted)] leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
