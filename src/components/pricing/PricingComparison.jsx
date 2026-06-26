"use client";

// Feature Comparison Table
// Desktop: full table layout | Mobile: per-plan card layout
// Accessibility: ARIA roles, scope attrs, sr-only labels
// Performance: no layout thrash, minimal re-renders, contain: content

import { Fragment } from "react";
import { FiCheck, FiX } from "react-icons/fi";

import { comparisonCategories } from "@/helper/pricing/pricingData";
import Container from "../ui/Container";

// ─── Cell Value Renderer ───────────────────────────────────────────────────────
function CellValue({ value, highlight = false, featureLabel, planLabel }) {
  if (value === true) {
    return (
      <span
        aria-label={`${featureLabel} ${planLabel} এ আছে`}
        role="img"
        className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
          highlight
            ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
            : "bg-emerald-50 text-emerald-600"
        }`}
      >
        <FiCheck size={12} strokeWidth={3} aria-hidden="true" />
      </span>
    );
  }

  if (value === false) {
    return (
      <span
        aria-label={`${featureLabel} ${planLabel} এ নেই`}
        role="img"
        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-surface)] text-[var(--color-muted)]"
      >
        <FiX size={11} strokeWidth={2.5} aria-hidden="true" />
      </span>
    );
  }

  // String value
  return (
    <span
      className={`PeraThree font-medium ${
        highlight
          ? "text-[var(--color-primary)]"
          : "text-[var(--color-foreground)]"
      }`}
    >
      {value}
    </span>
  );
}

// ─── Desktop Table ─────────────────────────────────────────────────────────────
function DesktopTable() {
  return (
    <div
      className="hidden md:block overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-sm"
      style={{ contain: "content" }}
    >
      <table
        className="w-full border-collapse"
        role="table"
        aria-label="Plan feature comparison"
      >
        <thead>
          <tr
            className="bg-white border-b border-[var(--color-border)]"
            role="row"
          >
            <th scope="col" className="text-left px-6 py-5 w-[40%]">
              <span className="PeraTwo font-semibold text-[var(--color-foreground)]">
                Feature
              </span>
            </th>

            <th scope="col" className="text-center px-6 py-5 w-[20%]">
              <span className="PeraTwo font-semibold text-[var(--color-muted)]">
                Starter
              </span>
            </th>

            <th
              scope="col"
              className="text-center px-6 py-5 w-[20%] bg-orange-50/60"
              aria-label="Growth — Most Popular"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="PeraTwo font-bold text-[var(--color-primary)]">
                  Growth
                </span>
                <span
                  className="caption text-[var(--color-primary)]/70 font-medium"
                  aria-hidden="true"
                >
                  Popular
                </span>
              </div>
            </th>

            <th scope="col" className="text-center px-6 py-5 w-[20%]">
              <span className="PeraTwo font-semibold text-[var(--color-secondary)]">
                Enterprise
              </span>
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-[var(--color-border)]/60">
          {comparisonCategories.map((cat) => (
            <Fragment key={cat.category}>
              {/* Category header row */}
              <tr
                className="bg-[var(--color-surface)]"
                role="row"
                aria-label={`Category: ${cat.category}`}
              >
                <td colSpan={4} className="px-6 py-3" role="columnheader">
                  <div className="flex items-center gap-2">
                    <cat.icon
                      size={14}
                      className="text-[var(--color-primary)] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="label text-[var(--color-muted)]">
                      {cat.category}
                    </span>
                  </div>
                </td>
              </tr>

              {/* Feature rows */}
              {cat.features.map((feat) => (
                <tr
                  key={feat.label}
                  className="hover:bg-[var(--color-surface)]/50 transition-colors"
                  role="row"
                >
                  <td scope="row" className="px-6 py-3.5">
                    <span className="PeraThree text-[var(--color-foreground)]">
                      {feat.label}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-center" role="cell">
                    <CellValue
                      value={feat.starter}
                      featureLabel={feat.label}
                      planLabel="Starter"
                    />
                  </td>
                  <td
                    className="px-6 py-3.5 text-center bg-orange-50/40"
                    role="cell"
                  >
                    <CellValue
                      value={feat.growth}
                      highlight
                      featureLabel={feat.label}
                      planLabel="Growth"
                    />
                  </td>
                  <td className="px-6 py-3.5 text-center" role="cell">
                    <CellValue
                      value={feat.enterprise}
                      featureLabel={feat.label}
                      planLabel="Enterprise"
                    />
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Mobile Card Layout ────────────────────────────────────────────────────────
const PLAN_KEYS = ["starter", "growth", "enterprise"];

const PLAN_META = {
  starter: { label: "Starter", popular: false },
  growth: { label: "Growth", popular: true },
  enterprise: { label: "Enterprise", popular: false },
};

function MobileComparison() {
  return (
    <div
      className="md:hidden space-y-4"
      role="region"
      aria-label="Mobile plan comparison"
    >
      {PLAN_KEYS.map((planKey) => {
        const { label, popular } = PLAN_META[planKey];

        return (
          <div
            key={planKey}
            className={`rounded-2xl border overflow-hidden ${
              popular
                ? "border-[var(--color-primary)] shadow-md shadow-orange-100/60"
                : "border-[var(--color-border)]"
            }`}
            style={{ contain: "content" }}
          >
            {/* Plan header */}
            <div
              className={`px-5 py-4 ${
                popular
                  ? "bg-gradient-to-r from-[var(--color-primary)] to-orange-400"
                  : "bg-[var(--color-surface)]"
              }`}
            >
              <h3
                className={`headingSix ${
                  popular ? "text-white" : "text-[var(--color-foreground)]"
                }`}
              >
                {label}
                {popular && (
                  <span
                    className="ml-2 caption text-orange-100 font-medium"
                    aria-label="Most Popular plan"
                  >
                    Most Popular
                  </span>
                )}
              </h3>
            </div>

            {/* Feature list */}
            <div
              className="bg-white divide-y divide-[var(--color-border)]/50"
              role="list"
              aria-label={`${label} plan features`}
            >
              {comparisonCategories.map((cat) => (
                <div key={cat.category}>
                  {/* Category label */}
                  <div
                    className="px-5 py-2.5 bg-[var(--color-surface)] flex items-center gap-2"
                    aria-label={`Category: ${cat.category}`}
                  >
                    <cat.icon
                      size={13}
                      className="text-[var(--color-primary)]"
                      aria-hidden="true"
                    />
                    <span className="caption font-semibold text-[var(--color-muted)] uppercase tracking-wide">
                      {cat.category}
                    </span>
                  </div>

                  {cat.features.map((feat) => (
                    <div
                      key={feat.label}
                      className="px-5 py-3 flex items-center justify-between gap-4"
                      role="listitem"
                    >
                      <span className="PeraThree text-[var(--color-foreground)] flex-1">
                        {feat.label}
                      </span>
                      <CellValue
                        value={feat[planKey]}
                        highlight={popular}
                        featureLabel={feat.label}
                        planLabel={label}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function PricingComparison() {
  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-labelledby="comparison-heading"
    >
      <Container size="xl">
        {/* Section header */}
        <div className="text-center mb-10">
          <span
            className="label text-[var(--color-primary)]"
            aria-hidden="true"
          >
            Compare Plans
          </span>
          <h2
            id="comparison-heading"
            className="headingThree text-[var(--color-foreground)] mt-2 mb-3"
          >
            Everything side by side
          </h2>
          <p className="PeraTwo text-[var(--color-muted)] max-w-lg mx-auto">
            See exactly what's included in each plan so you can make the right
            call for your institution.
          </p>
        </div>

        <DesktopTable />
        <MobileComparison />
      </Container>
    </section>
  );
}
