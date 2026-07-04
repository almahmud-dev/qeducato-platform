"use client";

import FileUploadField from "@/components/apply/FileUploadField";
import { requiredDocuments } from "@/lib/applyOptions";

export default function Step4Documents({ data, errors, onChange }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {requiredDocuments.map((doc) => (
        <FileUploadField
          key={doc.key}
          label={doc.label}
          hint={doc.hint}
          accept={doc.accept}
          optional={doc.optional}
          value={data[doc.key]}
          error={errors[doc.key]}
          onChange={(file) => onChange(doc.key, file)}
        />
      ))}
    </div>
  );
}
