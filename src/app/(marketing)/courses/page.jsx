import PageHero, { heroDataMap } from "@/components/common/PageHero";

import CoursesSection from "@/components/sections/CoursesSection";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.courses;

export default function Courses() {
  return (
    <>
      <PageHero {...heroDataMap.courses} />
      <CoursesSection/>
    </>
  );
}