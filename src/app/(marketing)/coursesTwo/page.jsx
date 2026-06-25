import PageHero, { heroDataMap } from "@/components/common/PageHero";
import CoursesTwoGrid from "@/components/coursesTwo/CoursesTwoGrid";
import { metaDataMap } from "@/lib/metadata";

// app/coursestwo/page.jsx
export const metadata = metaDataMap["coursesTwo"];

export default function CoursesTwoPag() {
  return (
    <>
      <PageHero {...heroDataMap.coursesTwo} />
       <CoursesTwoGrid />
    </>
  );
}