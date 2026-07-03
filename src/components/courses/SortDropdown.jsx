"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

const OPTIONS = [
  { value: "default", label: "Default sorting" },
  { value: "popularity", label: "Sort by popularity" },
  { value: "rating", label: "Sort by average rating" },
  { value: "latest", label: "Sort by latest" },
  { value: "price-low", label: "Sort by price: low to high" },
  { value: "price-high", label: "Sort by price: high to low" },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const activeLabel =
    OPTIONS.find((opt) => opt.value === value)?.label ?? OPTIONS[0].label;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full sm:w-64">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        <span className="truncate">
          Sort by: <span className="text-secondary">{activeLabel}</span>
        </span>
        <FiChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Sort courses"
          className="absolute right-0 z-20 mt-2 w-full overflow-hidden rounded-xl border border-black/10 bg-white py-1.5 shadow-lg"
        >
          {OPTIONS.map((opt) => {
            const isActive = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-foreground/80 hover:bg-black/5"
                  }`}
                >
                  {opt.label}
                  {isActive && <FiCheck className="h-4 w-4" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}