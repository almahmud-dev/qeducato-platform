import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";

// app/coursestwo/page.jsx
export const metadata = metaDataMap["coursesTwo"];

export default function Coursestwo() {
  return (
    <>
      <PageHero {...heroDataMap.coursesTwo} />
    </>
  );
}