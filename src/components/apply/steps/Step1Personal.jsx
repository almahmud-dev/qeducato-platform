"use client";

import FormField from "@/components/apply/FormField";
import { nationalities } from "@/lib/applyOptions";

export default function Step1Personal({ data, errors, onChange }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField
        label="First Name"
        required
        value={data.firstName}
        error={errors.firstName}
        placeholder="e.g. Rafiul"
        onChange={(v) => onChange("firstName", v)}
      />
      <FormField
        label="Last Name"
        required
        value={data.lastName}
        error={errors.lastName}
        placeholder="e.g. Islam"
        onChange={(v) => onChange("lastName", v)}
      />
      <FormField
        label="Email Address"
        required
        type="email"
        value={data.email}
        error={errors.email}
        placeholder="you@example.com"
        onChange={(v) => onChange("email", v)}
      />
      <FormField
        label="Phone Number"
        required
        type="tel"
        value={data.phone}
        error={errors.phone}
        placeholder="+880 1XXX-XXXXXX"
        onChange={(v) => onChange("phone", v)}
      />
      <FormField
        as="select"
        label="Nationality"
        required
        value={data.nationality}
        error={errors.nationality}
        options={nationalities}
        placeholder="Select your nationality"
        onChange={(v) => onChange("nationality", v)}
      />
      <FormField
        label="Date of Birth"
        required
        type="date"
        value={data.dob}
        error={errors.dob}
        onChange={(v) => onChange("dob", v)}
      />
    </div>
  );
}
