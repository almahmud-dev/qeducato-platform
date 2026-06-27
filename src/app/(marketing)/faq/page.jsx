import FAQHero from "@/components/common/FAQHero";
import PageHero, { heroDataMap } from "@/components/common/PageHero";
import FAQSection from "@/components/faq/FAQSection";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.faq;

export default function Faq() {
  return (
    <>
      <FAQHero/>
      <FAQSection/>
    </>
  );
}