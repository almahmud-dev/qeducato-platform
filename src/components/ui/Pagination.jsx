"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) {
  const generatePages = () => {
    // Single page
    if (totalPages === 1) return [1];

    // 2-7 pages
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const pages = generatePages();

  return (
    <nav
      aria-label="Pagination"
      className={`mt-16 flex items-center justify-center gap-2 ${className}`}
    >
      {/* Previous */}

      <button
        type="button"
        aria-label="Previous Page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-600"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}

      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={`dots-${index}`}
            className="flex h-11 w-11 items-center justify-center text-slate-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            aria-current={currentPage === page ? "page" : undefined}
            onClick={() => onPageChange(page)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl font-semibold transition-all duration-300 ${
              currentPage === page
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                : "border border-slate-200 bg-white text-slate-700 hover:border-indigo-500 hover:bg-indigo-50"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}

      <button
        type="button"
        aria-label="Next Page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-indigo-500 hover:bg-indigo-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-600"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}