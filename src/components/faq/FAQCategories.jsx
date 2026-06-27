"use client";

import {
  HiOutlineInformationCircle,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCreditCard,
  HiOutlineOfficeBuilding,
  HiOutlineSupport,
} from "react-icons/hi";

const categoryIcons = {
  general: HiOutlineInformationCircle,
  admissions: HiOutlineAcademicCap,
  academics: HiOutlineBookOpen,
  fees: HiOutlineCreditCard,
  campus: HiOutlineOfficeBuilding,
  support: HiOutlineSupport,
};

export default function FAQCategories({
  categories,
  activeCategory,
  onSelect,
}) {
  return (
    <nav aria-label="FAQ Categories">
      <ul className="flex flex-col gap-1" role="list">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat.id];
          const isActive = activeCategory === cat.id;

          return (
            <li key={cat.id}>
              <button
                onClick={() => onSelect(cat.id)}
                aria-pressed={isActive}
                aria-label={`Show ${cat.label} FAQs`}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-[10px]
                  text-left transition-all duration-200 cursor-pointer
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }
                `}
              >
                {Icon && (
                  <Icon
                    className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : "text-muted"}`}
                    aria-hidden="true"
                  />
                )}
                <span className="PeraTwo font-medium leading-tight">
                  {cat.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
