"use client";

import {
  scholarshipTypeOptions,
  programOptions,
  academicYearOptions,
  intakeOptions,
} from "@/helper/scholarships/scholarshipsData";

const selectClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

function FormField({ label, htmlFor, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="label text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
    </div>
  );
}

function StepScholarshipType({ formData, updateField }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField label="Scholarship Type" htmlFor="scholarshipType" required>
        <select
          id="scholarshipType"
          className={selectClass}
          value={formData.scholarshipType}
          onChange={(e) => updateField("scholarshipType", e.target.value)}
        >
          <option value="">Select scholarship type</option>
          {scholarshipTypeOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Program" htmlFor="program" required>
        <select
          id="program"
          className={selectClass}
          value={formData.program}
          onChange={(e) => updateField("program", e.target.value)}
        >
          <option value="">Select program</option>
          {programOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Academic Year" htmlFor="academicYear" required>
        <select
          id="academicYear"
          className={selectClass}
          value={formData.academicYear}
          onChange={(e) => updateField("academicYear", e.target.value)}
        >
          <option value="">Select academic year</option>
          {academicYearOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Intake" htmlFor="intake" required>
        <select
          id="intake"
          className={selectClass}
          value={formData.intake}
          onChange={(e) => updateField("intake", e.target.value)}
        >
          <option value="">Select intake</option>
          {intakeOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Applying for Admission?" htmlFor="applyingForAdmission">
        <select
          id="applyingForAdmission"
          className={selectClass}
          value={formData.applyingForAdmission}
          onChange={(e) => updateField("applyingForAdmission", e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="yes">Yes, applying for admission too</option>
          <option value="no">No, already admitted</option>
        </select>
      </FormField>

      <FormField label="Application ID" htmlFor="applicationId">
        <input
          id="applicationId"
          type="text"
          placeholder="If already admitted"
          className={selectClass}
          value={formData.applicationId}
          onChange={(e) => updateField("applicationId", e.target.value)}
        />
      </FormField>
    </div>
  );
}

export default StepScholarshipType;
