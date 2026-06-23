import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.contact;

export default function Contact() {
  return (
    <>
      <PageHero {...heroDataMap.contact} />
    </>
  );
}