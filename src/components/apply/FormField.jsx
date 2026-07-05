"use client";

import { HiExclamationCircle } from "react-icons/hi2";

const baseFieldStyles =
  "w-full rounded-xl border bg-background px-4 py-2.5 text-[15px] text-foreground placeholder:text-muted/70 outline-none transition-colors duration-150 focus:ring-2 focus:ring-primary/30";

export default function FormField(props) {
  const { label, error, required, hint, className, as } = props;

  const fieldStyles = `${baseFieldStyles} ${
    error
      ? "border-red-400 focus:border-red-400"
      : "border-border focus:border-primary"
  }`;

  return (
    <div className={className}>
      <label className="mb-1.5 flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="ml-0.5 text-primary">*</span>}
        </span>
        {hint && !error && <span className="text-xs text-muted">{hint}</span>}
      </label>

      {as === "select" ? (
        <select
          className={`${fieldStyles} appearance-none bg-no-repeat`}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            backgroundPosition: "right 12px center",
          }}
        >
          <option value="" disabled>
            {props.placeholder ?? "Select an option"}
          </option>
          {props.options.map((opt) =>
            typeof opt === "string" ? (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ) : (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ),
          )}
        </select>
      ) : as === "textarea" ? (
        <>
          <textarea
            className={`${fieldStyles} resize-none`}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder={props.placeholder}
            rows={props.rows ?? 5}
            maxLength={props.maxLength}
          />
          {props.maxLength && (
            <div className="mt-1 text-right text-xs text-muted">
              {props.value.length} / {props.maxLength}
            </div>
          )}
        </>
      ) : (
        <input
          className={fieldStyles}
          type={props.type ?? "text"}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder={props.placeholder}
        />
      )}

      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-500">
          <HiExclamationCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}
