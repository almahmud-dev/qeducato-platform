"use client";

const WORD_LIMIT = 1000;
const wordCount = (text) =>
  text.trim().length ? text.trim().split(/\s+/).length : 0;

function StepEssay({ formData, updateField }) {
  const essayWords = wordCount(formData.essay);
  const goalsWords = wordCount(formData.futureGoals);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="essay" className="label text-foreground">
            Why should we choose you? <span className="text-primary">*</span>
          </label>
          <span
            className={`text-sm ${essayWords > WORD_LIMIT ? "text-primary" : "text-muted"}`}
          >
            {essayWords}/{WORD_LIMIT} words
          </span>
        </div>
        <textarea
          id="essay"
          rows={10}
          placeholder="Tell us about your achievements, challenges you've overcome, and why you deserve this scholarship..."
          className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
          value={formData.essay}
          onChange={(e) => updateField("essay", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="futureGoals" className="label text-foreground">
            Future Goals <span className="text-primary">*</span>
          </label>
          <span
            className={`text-sm ${goalsWords > WORD_LIMIT ? "text-primary" : "text-muted"}`}
          >
            {goalsWords}/{WORD_LIMIT} words
          </span>
        </div>
        <textarea
          id="futureGoals"
          rows={8}
          placeholder="Share your academic and career goals, and how this scholarship helps you get there..."
          className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
          value={formData.futureGoals}
          onChange={(e) => updateField("futureGoals", e.target.value)}
        />
      </div>
    </div>
  );
}

export default StepEssay;
