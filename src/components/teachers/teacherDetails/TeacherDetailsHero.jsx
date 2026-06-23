import PageHero, { heroDataMap } from "@/components/common/PageHero";

// Details page er hero — heroDataMap theke "teachers-details" use korchi
export default function TeacherDetailsHero() {
  return <PageHero {...heroDataMap["teachers-details"]} />;
}