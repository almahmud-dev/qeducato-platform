"use client";

import { useMemo, useState } from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import Container from "@/components/ui/Container";
// import StepIndicator from "@/components/apply/StepIndicator";
// import Step1Personal from "./steps/Step1Personal";
import Step2Program from "./steps/Step2Program";
import Step3Academic from "./steps/Step3Academic";
import Step4Documents from "./steps/Step4Documents";
import Step5Scholarship from "./steps/Step5Scholarship";
import Step6Review from "./steps/Step6Review";
import {
  initialApplyFormData,
  STEP_TITLES,
  STEP_SUBTITLES,
} from "@/lib/applyOptions";
import StepIndicator from "./StepIndicator";
import Step1Personal from "./steps/Step1Personal";

const TOTAL_STEPS = 6;

function validateStep(step, data) {
  const errors = {};

  if (step === 1) {
    const { firstName, lastName, email, phone, nationality, dob } =
      data.personal;
    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Enter a valid email";
    if (!phone.trim()) errors.phone = "Phone number is required";
    if (!nationality) errors.nationality = "Please select your nationality";
    if (!dob) errors.dob = "Date of birth is required";
  }

  if (step === 2) {
    const { program, intake, campus, studyMode } = data.program;
    if (!program) errors.program = "Please select a program";
    if (!intake) errors.intake = "Please select an intake";
    if (!campus) errors.campus = "Please select a campus";
    if (!studyMode) errors.studyMode = "Please select a study mode";
  }

  if (step === 3) {
    const { qualification, institution, gpa, graduationYear } = data.academic;
    if (!qualification) errors.qualification = "Please select a qualification";
    if (!institution.trim())
      errors.institution = "Institution name is required";
    if (!gpa.trim()) errors.gpa = "GPA / CGPA is required";
    if (!graduationYear)
      errors.graduationYear = "Please select graduation year";
  }

  if (step === 4) {
    const { passportPhoto, transcript, certificate, passportOrNid } =
      data.documents;
    if (!passportPhoto) errors.passportPhoto = "Passport photo is required";
    if (!transcript) errors.transcript = "Academic transcript is required";
    if (!certificate) errors.certificate = "Certificate is required";
    if (!passportOrNid) errors.passportOrNid = "Passport or NID is required";
  }

  if (step === 5 && data.scholarship.applying === "yes") {
    const { type, familyIncome, essay } = data.scholarship;
    if (!type) errors.type = "Please select a scholarship type";
    if (!familyIncome)
      errors.familyIncome = "Please select a family income range";
    if (!essay.trim() || essay.trim().length < 50)
      errors.essay = "Please write at least 50 characters";
  }

  if (step === 6 && !data.agreeTerms) {
    errors.agreeTerms = "You must accept the terms to continue";
  }

  return errors;
}

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [furthestStepReached, setFurthestStepReached] = useState(1);
  const [formData, setFormData] = useState(initialApplyFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const progressPercent = useMemo(
    () => Math.round((currentStep / TOTAL_STEPS) * 100),
    [currentStep],
  );

  function updateSection(section, value) {
    setFormData((prev) => ({ ...prev, [section]: value }));
  }

  function goToStep(step) {
    setErrors({});
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleNext() {
    const stepErrors = validateStep(currentStep, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    const next = Math.min(currentStep + 1, TOTAL_STEPS);
    setCurrentStep(next);
    setFurthestStepReached((prev) => Math.max(prev, next));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBack() {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    const stepErrors = validateStep(6, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      // TODO: replace with your real submission endpoint
      // const body = new FormData();
      // ... append formData fields and files ...
      // await fetch("/api/apply", { method: "POST", body });
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <Container size="xl">
        <div className="mx-auto max-w-lg py-16 text-center sm:py-24">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <HiOutlineCheckCircle className="h-9 w-9 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Application Submitted!
          </h1>
          <p className="mt-3 text-muted">
            Thank you, {formData.personal.firstName}. We've received your
            application for{" "}
            <span className="font-medium text-foreground">
              {formData.program.intake}
            </span>
            . Our admissions team will reach out to{" "}
            <span className="font-medium text-foreground">
              {formData.personal.email}
            </span>{" "}
            within 2–3 business days.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Back to Home
          </a>
        </div>
      </Container>
    );
  }

  return (
    <Container size="xl">
      <div className="py-10 sm:py-14">
        {/* Overall progress bar */}
        <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-border">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Sidebar / stepper on large screens, top bar on mobile */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Step {currentStep} of {TOTAL_STEPS}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-foreground sm:text-[28px]">
              {STEP_TITLES[currentStep - 1]}
            </h1>
            <p className="mt-1.5 text-sm text-muted">
              {STEP_SUBTITLES[currentStep - 1]}
            </p>

            <div className="mt-6 hidden lg:block">
              <ol className="space-y-1">
                {STEP_TITLES.map((title, idx) => {
                  const step = idx + 1;
                  const isActive = step === currentStep;
                  const isDone = step < currentStep;
                  const isClickable = step <= furthestStepReached;
                  return (
                    <li key={title}>
                      <button
                        type="button"
                        disabled={!isClickable}
                        onClick={() => isClickable && goToStep(step)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                          isActive
                            ? "bg-primary/10 font-semibold text-primary"
                            : isClickable
                              ? "text-foreground hover:bg-surface"
                              : "text-muted/60"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                            isDone
                              ? "bg-primary text-white"
                              : isActive
                                ? "bg-primary text-white"
                                : "bg-border text-muted"
                          }`}
                        >
                          {step}
                        </span>
                        {title}
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </aside>

          {/* Main step content */}
          <div>
            <div className="mb-6 lg:hidden">
              <StepIndicator
                currentStep={currentStep}
                totalSteps={TOTAL_STEPS}
                furthestStepReached={furthestStepReached}
                onStepClick={goToStep}
              />
            </div>

            <div className="rounded-2xl border border-border bg-background p-5 shadow-sm shadow-secondary/5 sm:p-8">
              {currentStep === 1 && (
                <Step1Personal
                  data={formData.personal}
                  errors={errors}
                  onChange={(field, value) =>
                    updateSection("personal", {
                      ...formData.personal,
                      [field]: value,
                    })
                  }
                />
              )}
              {currentStep === 2 && (
                <Step2Program
                  data={formData.program}
                  errors={errors}
                  onChange={(field, value) =>
                    updateSection("program", {
                      ...formData.program,
                      [field]: value,
                    })
                  }
                />
              )}
              {currentStep === 3 && (
                <Step3Academic
                  data={formData.academic}
                  errors={errors}
                  onChange={(field, value) =>
                    updateSection("academic", {
                      ...formData.academic,
                      [field]: value,
                    })
                  }
                />
              )}
              {currentStep === 4 && (
                <Step4Documents
                  data={formData.documents}
                  errors={errors}
                  onChange={(field, value) =>
                    updateSection("documents", {
                      ...formData.documents,
                      [field]: value,
                    })
                  }
                />
              )}
              {currentStep === 5 && (
                <Step5Scholarship
                  data={formData.scholarship}
                  errors={errors}
                  onChange={(field, value) =>
                    updateSection("scholarship", {
                      ...formData.scholarship,
                      [field]: value,
                    })
                  }
                />
              )}
              {currentStep === 6 && (
                <Step6Review
                  data={formData}
                  agreeTerms={formData.agreeTerms}
                  agreeError={errors.agreeTerms}
                  onAgreeChange={(value) => updateSection("agreeTerms", value)}
                  onEditStep={goToStep}
                />
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-muted transition-colors hover:text-foreground disabled:opacity-0"
                >
                  <HiArrowLeft className="h-4 w-4" />
                  Back
                </button>

                {currentStep < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-hover"
                  >
                    Next
                    <HiArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-hover disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
