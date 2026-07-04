"use client";

import { HiCheck } from "react-icons/hi2";
import { STEP_TITLES } from "@/lib/applyOptions";

export default function StepIndicator({
  currentStep,
  totalSteps,
  onStepClick,
  furthestStepReached,
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
          const isCompleted = step < currentStep;
          const isActive = step === currentStep;
          const isClickable = step <= furthestStepReached && onStepClick;

          return (
            <div key={step} className="flex flex-1 items-center last:flex-none">
              <button
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick?.(step)}
                className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 ${
                  isCompleted
                    ? "bg-primary text-white"
                    : isActive
                      ? "bg-primary text-white ring-4 ring-primary/20"
                      : "bg-surface text-muted ring-1 ring-inset ring-border"
                } ${isClickable ? "cursor-pointer hover:opacity-90" : "cursor-default"}`}
                aria-current={isActive ? "step" : undefined}
                aria-label={`${STEP_TITLES[step - 1]}${isCompleted ? " (completed)" : ""}`}
              >
                {isCompleted ? <HiCheck className="h-4.5 w-4.5" /> : step}
              </button>

              {step !== totalSteps && (
                <div className="mx-1.5 h-0.5 flex-1 rounded-full bg-border sm:mx-2.5">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-300"
                    style={{ width: isCompleted ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 hidden justify-between sm:flex">
        {STEP_TITLES.map((title, idx) => (
          <span
            key={title}
            className={`w-9 flex-1 text-center text-[11px] font-medium first:text-left last:text-right ${
              idx + 1 === currentStep ? "text-secondary" : "text-muted/70"
            }`}
          >
            {title}
          </span>
        ))}
      </div>
    </div>
  );
}
