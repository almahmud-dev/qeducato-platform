"use client";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20";

function FormField({ label, htmlFor, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="label text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
    </div>
  );
}

function StepEligibility({ formData, updateField }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField label="Current GPA" htmlFor="currentGpa" required>
        <input
          id="currentGpa"
          type="number"
          step="0.01"
          min="0"
          max="5"
          placeholder="e.g. 3.75"
          className={inputClass}
          value={formData.currentGpa}
          onChange={(e) => updateField("currentGpa", e.target.value)}
        />
      </FormField>

      <FormField
        label="Previous Institution"
        htmlFor="previousInstitution"
        required
      >
        <input
          id="previousInstitution"
          type="text"
          placeholder="Name of your last school/college"
          className={inputClass}
          value={formData.previousInstitution}
          onChange={(e) => updateField("previousInstitution", e.target.value)}
        />
      </FormField>

      <div className="md:col-span-2">
        <FormField label="Leadership Activities" htmlFor="leadershipActivities">
          <textarea
            id="leadershipActivities"
            rows={3}
            placeholder="Club roles, committees, organized events..."
            className={inputClass}
            value={formData.leadershipActivities}
            onChange={(e) =>
              updateField("leadershipActivities", e.target.value)
            }
          />
        </FormField>
      </div>

      <div className="md:col-span-2">
        <FormField label="Community Service" htmlFor="communityService">
          <textarea
            id="communityService"
            rows={3}
            placeholder="Volunteering, social work, community projects..."
            className={inputClass}
            value={formData.communityService}
            onChange={(e) => updateField("communityService", e.target.value)}
          />
        </FormField>
      </div>

      <FormField label="Awards & Achievements" htmlFor="awards">
        <input
          id="awards"
          type="text"
          placeholder="Academic or extracurricular awards"
          className={inputClass}
          value={formData.awards}
          onChange={(e) => updateField("awards", e.target.value)}
        />
      </FormField>

      <FormField label="Family Income (Monthly)" htmlFor="familyIncome">
        <input
          id="familyIncome"
          type="text"
          placeholder="e.g. BDT 25,000"
          className={inputClass}
          value={formData.familyIncome}
          onChange={(e) => updateField("familyIncome", e.target.value)}
        />
      </FormField>
    </div>
  );
}

export default StepEligibility;
