"use client";

import { FiGrid, FiList } from "react-icons/fi";

export default function ViewToggle({ view, onChange }) {
  const base =
    "flex h-10 w-10 items-center justify-center rounded-lg transition-colors";
  const active = "bg-primary text-white";
  const inactive = "bg-white text-foreground/60 hover:bg-black/5";

  return (
    <div
      role="group"
      aria-label="Toggle course layout"
      className="flex items-center gap-1 rounded-xl border border-black/10 bg-white p-1"
    >
      <button
        type="button"
        aria-pressed={view === "grid"}
        aria-label="Grid view"
        onClick={() => onChange("grid")}
        className={`${base} ${view === "grid" ? active : inactive}`}
      >
        <FiGrid className="h-4.5 w-4.5" />
      </button>
      <button
        type="button"
        aria-pressed={view === "list"}
        aria-label="List view"
        onClick={() => onChange("list")}
        className={`${base} ${view === "list" ? active : inactive}`}
      >
        <FiList className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}