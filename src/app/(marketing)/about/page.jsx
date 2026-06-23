import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.about;

export default function About() {
  return (
    <>
      <PageHero {...heroDataMap.about} />
    </>
  );
}
