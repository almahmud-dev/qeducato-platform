"use client";

export default function GalleryFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="group" aria-label="Filter gallery by category">
      {categories.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            aria-pressed={isActive}
            className={[
              "inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-medium",
              "whitespace-nowrap cursor-pointer border transition-all duration-200",
              "-translate-y-0 hover:-translate-y-px",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b35]",
              isActive
                ? "bg-[#ff6b35] border-[#ff6b35] text-white shadow-[0_4px_14px_rgba(255,107,53,0.32)] hover:bg-[#f45a22] hover:border-[#f45a22]"
                : "bg-white border-[#e2e8f0] text-[#64748b] hover:border-[#ff6b35] hover:text-[#ff6b35] hover:bg-[#fff5f1]",
            ].join(" ")}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}