import PageHero, { heroDataMap } from "@/components/common/PageHero";
import CoursesGrid from "@/components/courses/CoursesGrid";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.courses;

export default function Courses() {
  return (
    <>
      <PageHero {...heroDataMap.courses} />
      <CoursesGrid/>
    </>
  );
}