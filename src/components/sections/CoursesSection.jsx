import CourseCard from "@/components/courses/CourseCard";
import courses from "@/helper/courses";

export default function CoursesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              category={course.category}
              title={course.title}
              duration={course.duration}
              level={course.level}
              mode={course.mode}
              rating={course.rating}
              reviews={course.reviews}
              students={course.students}
            />
          ))}
        </div>
      </div>
    </section>
  );
}