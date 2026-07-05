"use client";

import { useCallback, useId, useState } from "react";
import { LuUpload, LuFile, LuX } from "react-icons/lu";

function DocumentDropzone({
  icon: Icon,
  label,
  description,
  required,
  file,
  onFileChange,
}) {
  const inputId = useId();
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = useCallback(
    (fileList) => {
      const selected = fileList?.[0];
      if (selected) onFileChange(selected);
    },
    [onFileChange],
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={`relative flex flex-col items-center gap-3 rounded-xl border-2 border-dashed p-6 text-center transition-colors duration-200 ${
        isDragging ? "border-primary bg-primary/5" : "border-border bg-surface"
      }`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <div>
        <p className="label text-foreground">
          {label} {required && <span className="text-primary">*</span>}
        </p>
        <p className="PeraTwo text-sm text-muted">{description}</p>
      </div>

      {file ? (
        <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm">
          <LuFile className="h-4 w-4 text-secondary" aria-hidden="true" />
          <span className="max-w-[10rem] truncate text-foreground">
            {file.name}
          </span>
          <button
            type="button"
            onClick={() => onFileChange(null)}
            aria-label={`Remove ${label}`}
            className="text-muted transition-colors hover:text-primary"
          >
            <LuX className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ) : (
        <label
          htmlFor={inputId}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover"
        >
          <LuUpload className="h-4 w-4" aria-hidden="true" />
          Choose file
        </label>
      )}

      <input
        id={inputId}
        type="file"
        className="sr-only"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}

export default DocumentDropzone;
