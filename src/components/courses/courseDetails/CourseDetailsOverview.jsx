import { FiCheckCircle } from "react-icons/fi";

export default function CourseDetailsOverview({ course }) {
  const { overview, whatYouWillLearn, studyOptions } = course;

  return (
    <div className="mt-10 space-y-10">
      {/* Overview */}
      <section aria-labelledby="course-overview-heading">
        <h2
          id="course-overview-heading"
          className="font-serif text-xl font-bold text-secondary"
        >
          Course Overview
        </h2>
        <div className="mt-3 space-y-3">
          {overview.map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-foreground/70 sm:text-base">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* What you will learn */}
      <section aria-labelledby="course-learn-heading">
        <h2
          id="course-learn-heading"
          className="font-serif text-xl font-bold text-secondary"
        >
          What You Will Learn
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {whatYouWillLearn.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 rounded-xl bg-primary/5 px-4 py-3 text-sm text-foreground/80"
            >
              <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* Study options */}
      {studyOptions?.length > 0 && (
        <section aria-labelledby="course-study-heading">
          <h2
            id="course-study-heading"
            className="font-serif text-xl font-bold text-secondary"
          >
            Study Options
          </h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-black/5">
            <table className="w-full min-w-[420px] text-left text-sm">
              <thead>
                <tr className="bg-secondary text-white">
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Qualification
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Length
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Code
                  </th>
                </tr>
              </thead>
              <tbody>
                {studyOptions.map((row, i) => (
                  <tr
                    key={row.code}
                    className={i % 2 === 0 ? "bg-white" : "bg-black/[0.02]"}
                  >
                    <td className="px-4 py-3 text-foreground/80">
                      {row.qualification}
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      {row.length}
                    </td>
                    <td className="px-4 py-3 text-foreground/80">
                      {row.code}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}