"use client";

import { useScholarshipForm } from "@/hooks/useScholarshipForm";
import { formSteps } from "@/helper/scholarships/scholarshipsData";
import { LuChevronLeft, LuChevronRight, LuLoaderCircle } from "react-icons/lu";
import FormSidebar from "./FormSidebar";
import StepScholarshipType from "./steps/StepScholarshipType";
import StepEligibility from "./steps/StepEligibility";
import StepDocuments from "./steps/StepDocuments";
import StepEssay from "./steps/StepEssay";
import StepReview from "./steps/StepReview";
import Container from "../ui/Container";

function ScholarshipApplicationForm() {
  const {
    currentStep,
    totalSteps,
    formData,
    files,
    errors,
    isSubmitting,
    isSubmitted,
    updateField,
    updateFile,
    goNext,
    goBack,
    goToStep,
    submit,
  } = useScholarshipForm(5);

  const activeStep = formSteps.find((s) => s.id === currentStep);
  const isLastStep = currentStep === totalSteps;
  const canProceed =
    currentStep === 5
      ? formData.agreedToTerms && formData.declarationConfirmed
      : true;

  const handlePrimaryAction = () => (isLastStep ? submit() : goNext());

  if (isSubmitted) {
    return (
      <section className="py-20">
        <Container size="lg">
          <div className="mx-auto max-w-lg rounded-2xl border border-border bg-surface p-10 text-center">
            <h2 className="headingTwo text-foreground">
              Application Submitted
            </h2>
            <p className="PeraTwo mt-3 text-muted">
              Thank you for applying. Our scholarship committee will review your
              application and get back to you by email within 10 business days.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <Container size="xl">
        <div className="mb-10 text-center">
          <span className="label text-primary">
            STEP {currentStep} OF {totalSteps}
          </span>
          <h2 className="headingTwo mt-2 text-foreground">
            {activeStep?.label}
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <FormSidebar currentStep={currentStep} onStepClick={goToStep} />

          <div className="flex-1 rounded-2xl border border-border bg-background p-6 md:p-10">
            {currentStep === 1 && (
              <StepScholarshipType
                formData={formData}
                updateField={updateField}
                errors={errors}
              />
            )}
            {currentStep === 2 && (
              <StepEligibility formData={formData} updateField={updateField} />
            )}
            {currentStep === 3 && (
              <StepDocuments files={files} updateFile={updateFile} />
            )}
            {currentStep === 4 && (
              <StepEssay formData={formData} updateField={updateField} />
            )}
            {currentStep === 5 && (
              <StepReview
                formData={formData}
                files={files}
                updateField={updateField}
              />
            )}

            <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
              <button
                type="button"
                onClick={goBack}
                disabled={currentStep === 1}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LuChevronLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </button>

              <button
                type="button"
                onClick={handlePrimaryAction}
                disabled={!canProceed || isSubmitting}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <LuLoaderCircle
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    Submitting...
                  </>
                ) : isLastStep ? (
                  "Submit Scholarship Application"
                ) : (
                  <>
                    Continue
                    <LuChevronRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ScholarshipApplicationForm;
