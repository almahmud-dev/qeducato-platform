import PageHero, { heroDataMap } from "@/components/common/PageHero";
import TeachersGrid from "@/components/teachers/TeachersGrid";
import PartnersStrip from "@/components/teachers/PartnersStrip";
import ExpertTeachers from "@/components/teachers/ExpertTeachers";

export const metadata = {
  title: "Our Teacher | EduFilos",
  description: "Meet our expert teaching staff",
};

export default function Teachers() {
  return (
    <>
      <PageHero {...heroDataMap.teachers} />
      <TeachersGrid />
      <PartnersStrip />
      <ExpertTeachers />
    </>
  );
}