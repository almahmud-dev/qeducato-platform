// app/(public)/pricing/page.jsx
// Pricing page — all sections assembled here, no UI logic in this file

import PageHero, { heroDataMap } from "@/components/common/PageHero";
import PricingSection from "@/components/pricing/PricingSection";
import PricingComparison from "@/components/pricing/PricingComparison";
import PricingFaq from "@/components/pricing/PricingFaq";
import PricingCta from "@/components/pricing/PricingCta";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.pricing;

export default function Pricing() {
  return (
    <>
      <PageHero {...heroDataMap.pricing} />
      <PricingSection />
      <PricingComparison />
      <PricingFaq />
      <PricingCta />
    </>
  );
}