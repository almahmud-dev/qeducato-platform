import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.events;

export default function Events() {
  return (
    <>
      <PageHero {...heroDataMap.events} />
    </>
  );
}