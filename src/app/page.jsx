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
import Trusted from "@/components/sections/Trusted";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <AboutSection />
      <FeaturesSection />
      <WhyChooseUs/>
      
      <CoursesSection />
      <EventsSection />
      <ScholarshipBanner />
      <FaqSection />
      <TeachersSection />
      <TestimonialsSection />
      <BlogSection />
      {/* 
          ↓
          Campus Experience / Virtual Tour
          ↓
          Student Success Stats
          ↓
          Upcoming Events
          ↓
          Student Testimonials
          ↓
          Latest Blog
          ↓
          FAQ
          ↓
          CTA Banner (Apply Now)
          ↓
          Newsletter
          ↓
          Footer 
      */}
    </>
  );
}
