import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";
import AboutUniversitySection from "@/components/about/AboutUniversitySection";
import ScholarshipBanner from "@/components/about/ScholarshipBanner";
import ContactSection from "@/components/about/ContactSection";
import CampusAlumniSection from "@/components/about/CampusAlumniSection";
import TestimonialsSlider from "@/components/about/TestimonialsSlider";

export const metadata = metaDataMap.about;

export default function About() {
  return (
    <>
      <PageHero {...heroDataMap.about} />
       <AboutUniversitySection />
      <ScholarshipBanner />
      <CampusAlumniSection />
      <TestimonialsSlider />
      <ContactSection />
    </>
  );
}
