import AboutIntro from "@/components/about/AboutIntro";
import Scholarship from "@/components/about/Scholarship";
import AboutFaqContact from "@/components/about/AboutFaqContact";
import CampusSections from "@/components/about/CampusSections";
import Testimonials from "@/components/about/Testimonials";
import PageHero, { heroDataMap } from "@/components/common/PageHero";


export default function AboutPage() {
  return (
    <>
      <PageHero {...heroDataMap.about} />
      <AboutIntro />
      <Scholarship />
      <AboutFaqContact />
      <CampusSections />
      <Testimonials />
    </>
  );
}