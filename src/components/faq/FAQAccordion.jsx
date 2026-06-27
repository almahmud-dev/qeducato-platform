"use client";

import FAQItem from "./FAQItem";

export default function FAQAccordion({ items, openId, onToggle }) {
  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="PeraTwo text-muted">No questions found.</p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-3"
      role="list"
      aria-label="Frequently asked questions"
    >
      {items.map((item, index) => (
        <div key={item.id} role="listitem">
          <FAQItem
            item={item}
            index={index}
            isOpen={openId === item.id}
            onToggle={onToggle}
          />
        </div>
      ))}
    </div>
  );
}
