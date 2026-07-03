"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// totalPages: total page count
// currentPage: active page (1-indexed)
// onPageChange: (page) => void
export default function Pagination({
  totalPages = 3,
  currentPage,
  onPageChange,
}) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Page numbers logic: always show 1, last, and pages around current
  const getPages = () => {
    const pages = [];

    if (totalPages <= 5) {
      // 5 er niche hole sob show korbo
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return pages;
  };

  const btnBase =
    "w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer select-none";
  const activeCls = "bg-foreground text-white shadow-lg";
  const inactiveCls =
    "bg-primary text-white hover:bg-primary/80 hover:scale-105";
  const disabledCls = "bg-primary/40 text-white/60 cursor-not-allowed";

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center gap-2 justify-center py-8"
    >
      {/* Prev button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`${btnBase} ${currentPage === 1 ? disabledCls : inactiveCls}`}
      >
        <FiChevronLeft className="w-4 h-4" strokeWidth={2.5} />
        <FiChevronLeft className="w-4 h-4 -ml-2.5" strokeWidth={2.5} />
      </button>

      {/* Page numbers */}
      {getPages().map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className={`${btnBase} bg-primary text-white font-semibold text-sm`}
            aria-hidden="true"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            className={`${btnBase} font-semibold text-sm ${
              currentPage === page ? activeCls : inactiveCls
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`${btnBase} ${
          currentPage === totalPages ? disabledCls : inactiveCls
        }`}
      >
        <FiChevronRight className="w-4 h-4" strokeWidth={2.5} />
        <FiChevronRight className="w-4 h-4 -ml-2.5" strokeWidth={2.5} />
      </button>
    </nav>
  );
}
