import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.pricing;

export default function Pricing() {
  return (
    <>
      <PageHero {...heroDataMap.pricing} />
    </>
  );
}
