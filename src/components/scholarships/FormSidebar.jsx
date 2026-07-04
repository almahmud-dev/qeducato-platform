"use client";

import { LuCheck } from "react-icons/lu";
import { formSteps } from "@/helper/scholarships/scholarshipsData";

function FormSidebar({ currentStep, onStepClick }) {
  return (
    <nav aria-label="Application progress" className="lg:w-72 lg:flex-shrink-0">
      <ol className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
        {formSteps.map((step) => {
          const isComplete = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <li key={step.id} className="flex-shrink-0 lg:flex-shrink">
              <button
                type="button"
                onClick={() => onStepClick(step.id)}
                disabled={step.id > currentStep}
                aria-current={isActive ? "step" : undefined}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors duration-200 ${
                  isActive
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background"
                } ${step.id > currentStep ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
              >
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    isActive
                      ? "bg-primary text-white"
                      : isComplete
                        ? "bg-secondary text-white"
                        : "bg-surface text-muted"
                  }`}
                >
                  {isComplete ? (
                    <LuCheck className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    step.id
                  )}
                </span>
                <span
                  className={`label whitespace-nowrap text-sm lg:whitespace-normal ${isActive ? "font-semibold text-foreground" : "text-muted"}`}
                >
                  {step.label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default FormSidebar;
