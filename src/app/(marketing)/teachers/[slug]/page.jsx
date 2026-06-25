import { notFound } from "next/navigation";
import { allTeachersData } from "@/helper/teachers/allTeachersData";
import TeacherDetailsHero from "@/components/teachers/teacherDetails/TeacherDetailsHero";
import TeacherDetailsContent from "@/components/teachers/teacherDetails/TeacherDetailsContent";

export async function generateStaticParams() {
  return allTeachersData.map((teacher) => ({ slug: teacher.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const teacher = allTeachersData.find((t) => t.slug === slug);
  if (!teacher) return { title: "Teacher Not Found | Qeducato" };
  return {
    title: `${teacher.name} | Qeducato`,
    description: teacher.bio?.slice(0, 150),
  };
}

export default async function TeacherDetailsPage({ params }) {
  const { slug } = await params;
  const teacher = allTeachersData.find((t) => t.slug === slug);
  if (!teacher) notFound();

  return (
    <>
      <TeacherDetailsHero />
      <TeacherDetailsContent teacher={teacher} />
    </>
  );
}