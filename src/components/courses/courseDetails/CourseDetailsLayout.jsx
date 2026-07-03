import CourseDetailsHero from "./CourseDetailsHero";
import CourseDetailsOverview from "./CourseDetailsOverview";
import CourseDetailsSidebar from "./CourseDetailsSidebar";

export default function CourseDetailsLayout({ course }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">
        <div>
          <CourseDetailsHero course={course} />
          <CourseDetailsOverview course={course} />
        </div>

        <CourseDetailsSidebar course={course} />
      </div>
    </section>
  );
}