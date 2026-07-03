import { FiArrowRight, FiShield } from "react-icons/fi";
import {
  LuHouse,
  LuBookOpen,
  LuClock,
  LuUsers,
  LuGlobe,
  LuChartColumn,
} from "react-icons/lu";

const infoRows = (course) => [
  { icon: LuHouse, label: "Instructor", value: course.instructor },
  { icon: LuBookOpen, label: "Lectures", value: course.lectures },
  { icon: LuClock, label: "Duration", value: course.duration },
  { icon: LuUsers, label: "Enrolled", value: `${course.enrolled} students` },
  { icon: LuGlobe, label: "Language", value: course.language },
  { icon: LuChartColumn, label: "Level", value: course.level },
];

export default function CourseDetailsSidebar({ course }) {
  return (
    <aside className="lg:sticky lg:top-24 space-y-4">
      <div className="overflow-hidden rounded-2xl border border-black/5 shadow-sm">
        <div className="bg-secondary px-5 py-3">
          <p className="text-sm font-semibold text-white">Course Fee</p>
        </div>

        <div className="space-y-5 bg-white px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-primary">
              ${course.price.toFixed(2)}
            </span>

            {course.oldPrice && (
              <span className="text-sm text-foreground/40 line-through">
                ${course.oldPrice.toFixed(2)}
              </span>
            )}

            {course.discountPercent && (
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                {course.discountPercent}% OFF
              </span>
            )}
          </div>

          <dl className="space-y-3">
            {infoRows(course).map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-black/5 pb-3 text-sm last:border-none last:pb-0"
              >
                <dt className="flex items-center gap-2 text-foreground/60">
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </dt>

                <dd className="font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Enroll Now
            <FiArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm">
        <FiShield className="h-5 w-5 shrink-0 text-primary" />

        <div>
          <p className="text-sm font-semibold text-secondary">
            30-Day Money-Back
          </p>

          <p className="text-xs text-foreground/50">
            Full refund if you're not satisfied
          </p>
        </div>
      </div>
    </aside>
  );
}