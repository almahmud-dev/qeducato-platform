import FAQHero from "@/components/common/FAQHero";
import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.faq;

export default function Faq() {
  return (
    <>
      <FAQHero/>
    </>
  );
}