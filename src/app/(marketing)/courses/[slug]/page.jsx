import { notFound } from "next/navigation";
import { coursesDetailsData } from "@/helper/courses/coursesDetailsData";
import CourseDetailsContent from "@/components/courses/CourseDetailsContent";

export async function generateStaticParams() {
  return coursesDetailsData.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = coursesDetailsData.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found | Qeducato" };
  return {
    title: `${course.title} | Qeducato`,
    description: course.overview?.[0]?.slice(0, 150),
  };
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;
  const course = coursesDetailsData.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      {/* <PageHero title="Course Details" /> তোমার already আছে */}
      <CourseDetailsContent course={course} />
    </>
  );
}