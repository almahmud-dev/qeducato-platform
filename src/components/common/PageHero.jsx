import Image from "next/image";
import Container from "@/components/ui/Container";

export const heroDataMap = {
  blog: {
    title: "Our Blog",
    subtitle: "Insights, updates, and stories from the EduFilos team",
  },
  "blog-details": {
    title: "Blog Details",
  },
  teachers: {
    title: "Our Teachers",
    subtitle:
      "Learn from experienced and passionate educators dedicated to your growth",
  },
  "teachers-details": {
    title: "Teacher Profile",
  },
  pricing: {
    title: "Simple Pricing",
    subtitle:
      "Transparent plans designed for madrasas of every size — no hidden fees",
  },
  faq: {
    title: "FAQ",
    subtitle: "Have questions? We have got the answers you need",
  },
  gallery: {
    title: "Gallery",
    subtitle:
      "A glimpse into life and learning at EduFilos-powered institutions",
  },
  event: {
    title: "Events",
    subtitle:
      "Stay updated with upcoming programs, seminars, and community events",
  },
  "event-details": {
    title: "Event Details",
  },
  about: {
    title: "About Us",
    subtitle:
      "Building the future of madrasa education through technology and care",
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "We would love to hear from you — reach out and we will respond promptly",
  },
  courses: {
    title: "Our Courses",
    subtitle:
      "Explore a wide range of courses designed to nurture knowledge and character",
  },
  "courses-02": {
    title: "Our Courses",
    subtitle:
      "Browse our carefully curated curriculum built for every level of learner",
  },
  "courses-details": {
    title: "Course Details",
  },
};

// Props:
//   title    — string
//   subtitle — optional string
export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative w-full overflow-hidden xl:min-h-[500px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/commonhero/pagehero.png"
          alt="Page Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0d2e1c]/20" />
      </div>

      {/* Content */}
      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-28 text-center">
          <span className="block w-18 h-0.75 bg-[#c49a1a] mb-4 rounded-full" />

          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-[560px]">
              {subtitle}
            </p>
          )}

          <span className="block w-18 h-0.75 bg-[#c49a1a] mt-4 rounded-full" />
        </div>
      </Container>
    </section>
  );
}
