import { notFound } from "next/navigation";
import { coursesTwoDetailsData } from "@/helper/coursesTwo/coursesTwoDetailsData";
import CourseDetailsContent from "@/components/courses/CourseDetailsContent";
import PageHero, { heroDataMap } from "@/components/common/PageHero";

export async function generateStaticParams() {
  return coursesTwoDetailsData.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = coursesTwoDetailsData.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found | Qeducato" };
  return {
    title: `${course.title} | Qeducato`,
    description: course.overview?.[0]?.slice(0, 150),
  };
}

export default async function CoursesTwoDetailsPage({ params }) {
  const { slug } = await params;
  const course = coursesTwoDetailsData.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <PageHero {...heroDataMap["courses-details"]} />
      <CourseDetailsContent course={course} />
    </>
  );
}