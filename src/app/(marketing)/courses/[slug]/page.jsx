// Courses details page — Events slug page pattern follow kora hoyeche

import { notFound } from "next/navigation";
import { allCoursesDetailsData } from "@/helper/courses/allCoursesDetailsData";
import CourseDetailsLayout from "@/components/courses/courseDetails/CourseDetailsLayout";

export async function generateStaticParams() {
  return allCoursesDetailsData.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = allCoursesDetailsData.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found | Qeducato" };
  return {
    title: `${course.title} | Qeducato`,
    description: course.subtitle?.trim().slice(0, 150),
  };
}

export default async function CourseDetailsPage({ params }) {
  const { slug } = await params;
  const course = allCoursesDetailsData.find((c) => c.slug === slug);
  if (!course) notFound();

  return <CourseDetailsLayout course={course} />;
}