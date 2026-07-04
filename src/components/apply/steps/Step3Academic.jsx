"use client";

import FormField from "@/components/apply/FormField";
import { qualifications, graduationYears } from "@/lib/applyOptions";

export default function Step3Academic({ data, errors, onChange }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField
        as="select"
        label="Highest Academic Qualification"
        required
        className="sm:col-span-2"
        value={data.qualification}
        error={errors.qualification}
        options={qualifications}
        placeholder="Select your highest qualification"
        onChange={(v) => onChange("qualification", v)}
      />
      <FormField
        label="Previous School / College"
        required
        className="sm:col-span-2"
        value={data.institution}
        error={errors.institution}
        placeholder="e.g. Notre Dame College, Dhaka"
        onChange={(v) => onChange("institution", v)}
      />
      <FormField
        label="GPA / CGPA"
        required
        value={data.gpa}
        error={errors.gpa}
        placeholder="e.g. 4.83 or 3.7"
        onChange={(v) => onChange("gpa", v)}
      />
      <FormField
        as="select"
        label="Graduation Year"
        required
        value={data.graduationYear}
        error={errors.graduationYear}
        options={graduationYears}
        placeholder="Select year"
        onChange={(v) => onChange("graduationYear", v)}
      />
    </div>
  );
}
