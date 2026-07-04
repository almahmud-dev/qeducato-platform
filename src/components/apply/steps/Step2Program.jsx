"use client";

import FormField from "@/components/apply/FormField";
import { programs, intakes, campuses, studyModes } from "@/lib/applyOptions";

export default function Step2Program({ data, errors, onChange }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField
        as="select"
        label="Program"
        required
        className="sm:col-span-2"
        value={data.program}
        error={errors.program}
        options={programs}
        placeholder="Select the program you're applying for"
        onChange={(v) => onChange("program", v)}
      />
      <FormField
        as="select"
        label="Intake"
        required
        value={data.intake}
        error={errors.intake}
        options={intakes}
        placeholder="Select intake semester"
        onChange={(v) => onChange("intake", v)}
      />
      <FormField
        as="select"
        label="Campus"
        required
        value={data.campus}
        error={errors.campus}
        options={campuses}
        placeholder="Select a campus"
        onChange={(v) => onChange("campus", v)}
      />
      <FormField
        as="select"
        label="Study Mode"
        required
        className="sm:col-span-2"
        value={data.studyMode}
        error={errors.studyMode}
        options={studyModes}
        placeholder="Select your preferred study mode"
        onChange={(v) => onChange("studyMode", v)}
      />
    </div>
  );
}
