import PageHero, { heroDataMap } from "@/components/common/PageHero";
import ScholarshipSummaryCards from "@/components/scholarships/ScholarshipSummaryCards";
import EligibilityBenefits from "@/components/scholarships/EligibilityBenefits";
import ScholarshipApplicationForm from "@/components/scholarships/ScholarshipApplicationForm";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.scholarships;

function Scholarships() {
  return (
    <>
      <PageHero {...heroDataMap.scholarships} />
      <ScholarshipSummaryCards />
      <EligibilityBenefits />
      <ScholarshipApplicationForm />
    </>
  );
}

export default Scholarships;
