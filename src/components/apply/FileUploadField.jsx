"use client";

import { useRef, useState } from "react";
import {
  HiOutlineCloudArrowUp,
  HiOutlineDocumentText,
  HiOutlinePhoto,
  HiXMark,
  HiCheckCircle,
} from "react-icons/hi2";

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function FileUploadField({
  label,
  hint,
  accept,
  optional,
  value,
  error,
  onChange,
}) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    onChange({ name: file.name, size: file.size, type: file.type, file });
  };

  const isImage = value?.type.startsWith("image/");

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">
          {label}
          {!optional && <span className="ml-0.5 text-primary">*</span>}
          {optional && (
            <span className="ml-1.5 text-xs font-normal text-muted">
              (optional)
            </span>
          )}
        </span>
      </div>

      {value ? (
        <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {isImage ? (
                <HiOutlinePhoto className="h-5 w-5" />
              ) : (
                <HiOutlineDocumentText className="h-5 w-5" />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {value.name}
              </p>
              <p className="text-xs text-muted">{formatSize(value.size)}</p>
            </div>
            <HiCheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
          </div>
          <button
            type="button"
            onClick={() => onChange(null)}
            className="ml-3 shrink-0 rounded-full p-1.5 text-muted transition-colors hover:bg-border/60 hover:text-foreground"
            aria-label={`Remove ${label}`}
          >
            <HiXMark className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFile(e.dataTransfer.files?.[0]);
          }}
          className={`flex w-full flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed px-4 py-6 text-center transition-colors duration-150 ${
            isDragging
              ? "border-primary bg-primary/5"
              : error
                ? "border-red-300 bg-red-50/40"
                : "border-border bg-surface hover:border-primary/50 hover:bg-primary/5"
          }`}
        >
          <HiOutlineCloudArrowUp
            className={`h-6 w-6 ${isDragging ? "text-primary" : "text-muted"}`}
          />
          <p className="text-sm text-foreground">
            <span className="font-medium text-primary">Choose a file</span> or
            drag it here
          </p>
          <p className="text-xs text-muted">{hint}</p>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}
