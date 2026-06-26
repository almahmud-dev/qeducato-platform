"use client";

// Pricing Section — Monthly/Yearly toggle + 3 plan cards
// Stripe + Linear inspired, premium SaaS feel
// Accessibility: role="switch", aria-checked, aria-hidden on icons, sr-only labels
// Performance: prefers-reduced-motion respected, stable keys, no dead props

import { useState } from "react";
import { FiCheck, FiX, FiZap } from "react-icons/fi";

import { plans, trustMetrics } from "@/helper/pricing/pricingData";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

//==============================
// ─── Billing Toggle
//==============================
function BillingToggle({ yearly, onChange }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      {/* Monthly label */}
      <span
        id="billing-monthly-label"
        className={`PeraTwo font-medium transition-colors duration-200 ${
          !yearly
            ? "text-foreground"
            : "text-muted"
        }`}
      >
        Monthly
      </span>

      {/* Switch button — proper ARIA switch role */}
      <button
        role="switch"
        aria-checked={yearly}
        aria-label="Toggle billing period between monthly and yearly"
        onClick={() => onChange(!yearly)}
        className={`
          relative w-12 h-6 rounded-full transition-all duration-300
          focus:outline-none focus-visible:ring-2
          focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2
          ${yearly ? "bg-primary" : "bg-border"}
        `}
      >
        <span
          className={`
            absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm
            transition-transform duration-300 motion-reduce:transition-none
            ${yearly ? "translate-x-6" : "translate-x-0"}
          `}
          aria-hidden="true"
        />
      </button>

      {/* Yearly label */}
      <span
        id="billing-yearly-label"
        className={`PeraTwo font-medium transition-colors duration-200 ${
          yearly
            ? "text-foreground"
            : "text-muted"
        }`}
      >
        Yearly
        <span className="ml-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 caption font-semibold border border-emerald-100">
          <FiZap size={10} aria-hidden="true" />
          Save 20%
        </span>
      </span>
    </div>
  );
}

//===============================
// ─── Feature Row 
//===============================
function FeatureRow({ text, included }) {
  return (
    <li className="flex items-start gap-3 py-1.5">
      {/* Icon with sr-only context — screen reader er "Included:" or "Not included:" porbe */}
      <span
        aria-hidden="true"
        className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
          included
            ? "bg-primary/10 text-primary"
            : "bg-border text-muted"
        }`}
      >
        {included ? (
          <FiCheck size={10} strokeWidth={3} />
        ) : (
          <FiX size={9} strokeWidth={3} />
        )}
      </span>

      <span
        className={`PeraThree ${
          included
            ? "text-foreground"
            : "text-muted"
        }`}
      >
        {/* Screen reader er jonno context */}
        <span className="sr-only">
          {included ? "Included:" : "Not included:"}
        </span>
        {text}
      </span>
    </li>
  );
}

//==================================
// ─── CTA Button Variants
//==================================

function PlanCta({ variant, label }) {
  const base =
    "w-full py-3 px-6 rounded-xl font-semibold PeraTwo text-center transition-all duration-200 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]";

  if (variant === "gradient") {
    return (
      <button
        className={`${base} bg-gradient-to-r from-primary to-orange-400 text-white hover:opacity-90 hover:shadow-lg hover:shadow-orange-200 active:scale-[0.98] motion-reduce:hover:shadow-none`}
      >
        {label}
      </button>
    );
  }

  if (variant === "dark") {
    return (
      <button
        className={`${base} bg-secondary text-white hover:bg-[var(--color-secondary)]/90 hover:shadow-lg active:scale-[0.98] motion-reduce:hover:shadow-none`}
      >
        {label}
      </button>
    );
  }

  // outline
  return (
    <button
      className={`${base} border-2 border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] active:scale-[0.98]`}
    >
      {label}
    </button>
  );
}

// ─── Plan Card ─────────────────────────────────────────────────────────────────
function PlanCard({ plan, yearly }) {
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
  const billingNote = yearly ? plan.billingNoteYearly : plan.billingNote;
  const isCustom = price === null;

  return (
    <article
      aria-label={`${plan.name} plan`}
      className={`
        relative flex flex-col rounded-3xl p-6 lg:p-8
        transition-all duration-300 motion-reduce:transition-none
        hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-sm
        ${
          plan.popular
            ? "bg-white border-2 border-[var(--color-primary)] shadow-xl shadow-orange-100/60"
            : "bg-white border border-[var(--color-border)] shadow-sm hover:border-[var(--color-primary)]/30"
        }
      `}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-orange-400 text-white caption font-semibold shadow-md shadow-orange-200 whitespace-nowrap">
            <FiZap size={10} aria-hidden="true" />
            Most Popular
          </span>
        </div>
      )}

      {/* Plan header */}
      <div className="mb-6">
        <h3 className="headingFive text-[var(--color-foreground)] mb-1">
          {plan.name}
          {/* sr-only তে badge text — visual badge aria-hidden তাই এখানে announce হবে */}
          {plan.popular && <span className="sr-only">(Most Popular)</span>}
        </h3>
        <p className="PeraThree text-[var(--color-muted)] leading-snug">
          {plan.tagline}
        </p>
      </div>

      {/* Price block */}
      <div className="mb-6 pb-6 border-b border-[var(--color-border)]">
        {isCustom ? (
          <div>
            <p className="headingThree text-[var(--color-foreground)] font-bold">
              Custom
            </p>
            <p className="caption text-[var(--color-muted)] mt-1">
              Tailored to your institution
            </p>
          </div>
        ) : (
          <div>
            <div
              className="flex items-end gap-1"
              aria-label={`Price: ${plan.currency}${price} ${yearly ? "per year" : "per month"}`}
            >
              <span
                className="headingFive text-[var(--color-muted)] font-medium self-start mt-2"
                aria-hidden="true"
              >
                {plan.currency}
              </span>
              <span
                className="headingTwo text-[var(--color-foreground)] font-bold leading-none"
                aria-hidden="true"
              >
                {price}
              </span>
            </div>
            <p className="caption text-[var(--color-muted)] mt-1.5">
              {billingNote}
            </p>
            {yearly && plan.savingsPercent && (
              <p className="caption text-emerald-600 font-semibold mt-1">
                You save {plan.savingsPercent}% vs monthly
              </p>
            )}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="mb-6">
        <PlanCta variant={plan.ctaVariant} label={plan.cta} />
      </div>

      {/* Feature list */}
      <ul className="space-y-0.5 flex-1" aria-label={`${plan.name} features`}>
        {plan.features.map((feat) => (
          <FeatureRow
            key={feat.text}
            text={feat.text}
            included={feat.included}
          />
        ))}
      </ul>
    </article>
  );
}

// ─── Trust Bar
function TrustBar() {
  return (
    <div
      className="mt-16 pt-10 border-t border-[var(--color-border)]"
      aria-label="Trust metrics"
    >
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[var(--color-border)]">
        {trustMetrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center text-center px-4 py-2"
          >
            <dt className="sr-only">{metric.label}</dt>
            <dd className="headingFour font-bold text-[var(--color-foreground)]">
              {metric.value}
            </dd>
            <span
              className="PeraTwo font-semibold text-[var(--color-foreground)] mt-0.5"
              aria-hidden="true"
            >
              {metric.label}
            </span>
            <span className="caption text-[var(--color-muted)] mt-0.5">
              {metric.sublabel}
            </span>
          </div>
        ))}
      </dl>
    </div>
  );
}
//==============================
// ─── Main Export
//==============================
export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      className="py-16 md:py-20 bg-surface"
      aria-labelledby="pricing-heading"
    >
      <Container size="xl">
        {/* Section header */}
        <SectionHeader
          label="Our Pricing"
          text="Simple, transparent pricing"
          colorWord="pricing"
        />

        <div className="text-center mb-4">
          <p className="lead text-muted max-w-xl mx-auto">
            No hidden fees. No setup costs. Pick the plan that fits your
            institution and scale whenever you're ready.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-8">
          <BillingToggle yearly={yearly} onChange={setYearly} />
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start"
          role="list"
          aria-label="Pricing plans"
        >
          {plans.map((plan) => (
            <div key={plan.id} role="listitem">
              <PlanCard plan={plan} yearly={yearly} />
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <TrustBar />
      </Container>
    </section>
  );
}
