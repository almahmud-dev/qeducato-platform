import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import CoursesSection from "@/components/sections/CoursesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import EventsSection from "@/components/sections/EventsSection";
import ScholarshipBanner from "@/components/sections/ScholarshipBanner";
import FaqSection from "@/components/sections/FaqSection";
import TeachersSection from "@/components/sections/TeachersSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CoursesSection />
      <FeaturesSection />
      <EventsSection />
      <ScholarshipBanner />
      <FaqSection />
      <TeachersSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
}
