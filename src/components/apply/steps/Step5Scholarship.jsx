"use client";

import { HiOutlineAcademicCap } from "react-icons/hi2";
import FormField from "@/components/apply/FormField";
import { scholarshipTypes, familyIncomeRanges } from "@/lib/applyOptions";

export default function Step5Scholarship({ data, errors, onChange }) {
  const isApplying = data.applying === "yes";

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-xl bg-secondary/5 p-4">
        <HiOutlineAcademicCap className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
        <p className="text-sm text-secondary/90">
          Scholarships are awarded based on merit, need, or talent. This section
          is optional — you can skip it and still complete your application.
        </p>
      </div>

      <div>
        <span className="mb-2 block text-sm font-medium text-foreground">
          Would you like to apply for a scholarship?
        </span>
        <div className="flex gap-3">
          {["yes", "no"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onChange("applying", option)}
              className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold capitalize transition-all duration-150 sm:flex-none sm:px-8 ${
                data.applying === option
                  ? "border-primary bg-primary text-white shadow-sm shadow-primary/30"
                  : "border-border bg-background text-muted hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {errors.applying && (
          <p className="mt-1.5 text-xs font-medium text-red-500">
            {errors.applying}
          </p>
        )}
      </div>

      {isApplying && (
        <div className="grid gap-5 border-t border-border pt-5 sm:grid-cols-2">
          <FormField
            as="select"
            label="Scholarship Type"
            required
            value={data.type}
            error={errors.type}
            options={scholarshipTypes}
            placeholder="Select a scholarship type"
            onChange={(v) => onChange("type", v)}
          />
          <FormField
            as="select"
            label="Family Monthly Income"
            required
            value={data.familyIncome}
            error={errors.familyIncome}
            options={familyIncomeRanges}
            placeholder="Select income range"
            onChange={(v) => onChange("familyIncome", v)}
          />
          <FormField
            as="textarea"
            label="Essay"
            required
            hint="Why do you deserve this scholarship?"
            className="sm:col-span-2"
            value={data.essay}
            error={errors.essay}
            placeholder="Write a short essay (150–300 words) about your goals and why you need this scholarship..."
            rows={6}
            maxLength={1800}
            onChange={(v) => onChange("essay", v)}
          />
        </div>
      )}
    </div>
  );
}
