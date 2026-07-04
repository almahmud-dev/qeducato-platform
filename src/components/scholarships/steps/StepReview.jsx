"use client";

import { documentRequirements } from "@/helper/scholarships/scholarshipsData";

function SummaryRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border py-2 text-sm last:border-0">
      <span className="text-muted">{label}</span>
      <span className="text-right font-medium text-foreground">
        {value || "—"}
      </span>
    </div>
  );
}

function StepReview({ formData, files, updateField }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="headingSix text-foreground">Summary</h3>
        <div className="mt-4 rounded-xl border border-border bg-surface p-5">
          <SummaryRow
            label="Scholarship Type"
            value={formData.scholarshipType}
          />
          <SummaryRow label="Program" value={formData.program} />
          <SummaryRow label="Academic Year" value={formData.academicYear} />
          <SummaryRow label="Intake" value={formData.intake} />
          <SummaryRow label="Current GPA" value={formData.currentGpa} />
          <SummaryRow
            label="Previous Institution"
            value={formData.previousInstitution}
          />
          <SummaryRow
            label="Documents Uploaded"
            value={`${documentRequirements.filter((d) => files[d.id]).length}/${documentRequirements.length}`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.agreedToTerms}
            onChange={(e) => updateField("agreedToTerms", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
          />
          <span className="PeraTwo text-sm text-foreground">
            I agree to the{" "}
            <a href="/terms" className="text-primary underline">
              Terms & Conditions
            </a>{" "}
            of the scholarship program.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.declarationConfirmed}
            onChange={(e) =>
              updateField("declarationConfirmed", e.target.checked)
            }
            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary/30"
          />
          <span className="PeraTwo text-sm text-foreground">
            I declare that all information provided is true and accurate to the
            best of my knowledge.
          </span>
        </label>
      </div>
    </div>
  );
}

export default StepReview;
