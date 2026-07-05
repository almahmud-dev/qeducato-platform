"use client";

import {
  HiOutlineUser,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineDocumentCheck,
  HiOutlineBanknotes,
  HiPencil,
} from "react-icons/hi2";
import { programs, campuses } from "@/lib/applyOptions";

function ReviewRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4 py-1.5 text-sm">
      <span className="text-muted">{label}</span>
      <span className="text-right font-medium text-foreground">
        {value || "—"}
      </span>
    </div>
  );
}

function ReviewCard({ icon, title, step, onEdit, children }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </span>
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        </div>
        <button
          type="button"
          onClick={() => onEdit(step)}
          className="flex items-center gap-1 text-xs font-semibold text-secondary hover:underline"
        >
          <HiPencil className="h-3.5 w-3.5" />
          Edit
        </button>
      </div>
      <div className="divide-y divide-border/70">{children}</div>
    </div>
  );
}

export default function Step6Review({
  data,
  agreeTerms,
  onAgreeChange,
  agreeError,
  onEditStep,
}) {
  const programLabel = programs.find(
    (p) => p.value === data.program.program,
  )?.label;
  const campusLabel = campuses.find(
    (c) => c.value === data.program.campus,
  )?.label;

  const uploadedDocs = Object.values(data.documents).filter(Boolean).length;

  return (
    <div className="space-y-4">
      <ReviewCard
        icon={<HiOutlineUser className="h-4 w-4" />}
        title="Personal Information"
        step={1}
        onEdit={onEditStep}
      >
        <ReviewRow
          label="Name"
          value={`${data.personal.firstName} ${data.personal.lastName}`}
        />
        <ReviewRow label="Email" value={data.personal.email} />
        <ReviewRow label="Phone" value={data.personal.phone} />
        <ReviewRow label="Nationality" value={data.personal.nationality} />
        <ReviewRow label="Date of Birth" value={data.personal.dob} />
      </ReviewCard>

      <ReviewCard
        icon={<HiOutlineAcademicCap className="h-4 w-4" />}
        title="Program Selection"
        step={2}
        onEdit={onEditStep}
      >
        <ReviewRow label="Program" value={programLabel ?? ""} />
        <ReviewRow label="Intake" value={data.program.intake} />
        <ReviewRow label="Campus" value={campusLabel ?? ""} />
        <ReviewRow label="Study Mode" value={data.program.studyMode} />
      </ReviewCard>

      <ReviewCard
        icon={<HiOutlineBookOpen className="h-4 w-4" />}
        title="Academic Qualification"
        step={3}
        onEdit={onEditStep}
      >
        <ReviewRow label="Qualification" value={data.academic.qualification} />
        <ReviewRow label="Institution" value={data.academic.institution} />
        <ReviewRow label="GPA / CGPA" value={data.academic.gpa} />
        <ReviewRow
          label="Graduation Year"
          value={data.academic.graduationYear}
        />
      </ReviewCard>

      <ReviewCard
        icon={<HiOutlineDocumentCheck className="h-4 w-4" />}
        title="Documents"
        step={4}
        onEdit={onEditStep}
      >
        <ReviewRow label="Files Uploaded" value={`${uploadedDocs} of 5`} />
      </ReviewCard>

      <ReviewCard
        icon={<HiOutlineBanknotes className="h-4 w-4" />}
        title="Scholarship"
        step={5}
        onEdit={onEditStep}
      >
        <ReviewRow
          label="Applying for Scholarship"
          value={data.scholarship.applying === "yes" ? "Yes" : "No"}
        />
        {data.scholarship.applying === "yes" && (
          <>
            <ReviewRow label="Type" value={data.scholarship.type} />
            <ReviewRow
              label="Family Income"
              value={data.scholarship.familyIncome}
            />
          </>
        )}
      </ReviewCard>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background p-4">
        <input
          type="checkbox"
          checked={agreeTerms}
          onChange={(e) => onAgreeChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary accent-primary focus:ring-primary/30"
        />
        <span className="text-sm text-foreground">
          I confirm that the information provided is accurate and I agree to the{" "}
          <a
            href="/terms"
            className="font-medium text-secondary hover:underline"
          >
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            className="font-medium text-secondary hover:underline"
          >
            Privacy Policy
          </a>
          .
        </span>
      </label>
      {agreeError && (
        <p className="text-xs font-medium text-red-500">{agreeError}</p>
      )}
    </div>
  );
}
