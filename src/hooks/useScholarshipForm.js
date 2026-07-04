"use client";

import { useCallback, useState } from "react";
import { documentRequirements } from "@/helper/scholarships/scholarshipsData";

const initialFormData = {
  scholarshipType: "",
  program: "",
  academicYear: "",
  intake: "",
  applyingForAdmission: "",
  applicationId: "",
  currentGpa: "",
  previousInstitution: "",
  leadershipActivities: "",
  communityService: "",
  awards: "",
  familyIncome: "",
  essay: "",
  futureGoals: "",
  agreedToTerms: false,
  declarationConfirmed: false,
};

const initialFiles = documentRequirements.reduce((acc, doc) => {
  acc[doc.id] = null;
  return acc;
}, {});

export function useScholarshipForm(totalSteps = 5) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [files, setFiles] = useState(initialFiles);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  const updateFile = useCallback((docId, file) => {
    setFiles((prev) => ({ ...prev, [docId]: file }));
    setErrors((prev) => ({ ...prev, [docId]: undefined }));
  }, []);

  const goNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  }, [totalSteps]);

  const goBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback(
    (step) => {
      if (step >= 1 && step <= totalSteps) setCurrentStep(step);
    },
    [totalSteps],
  );

  const submit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      // TODO: connect real API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return {
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
  };
}
