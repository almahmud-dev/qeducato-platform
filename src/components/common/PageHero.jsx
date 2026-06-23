import Image from "next/image";
import Container from "@/components/ui/Container";

export const heroDataMap = {
  blog: {
    title: "Our Blog",
    subtitle: "News, research, and insights from Qeducato University",
  },
  "blog-details": {
    title: "Blog Details",
  },
  teachers: {
    title: "Our Faculty",
    subtitle:
      "Meet the distinguished academics and educators shaping the next generation",
  },
  "teachers-details": {
    title: "Faculty Profile",
  },
  pricing: {
    title: "Tuition & Fees",
    subtitle:
      "Transparent and affordable plans for every student — no hidden charges",
  },
  faq: {
    title: "FAQ",
    subtitle:
      "Find answers to the most common questions about Qeducato University",
  },
  gallery: {
    title: "Campus Gallery",
    subtitle: "A visual journey through campus life, events, and achievements",
  },
  event: {
    title: "Events & Programs",
    subtitle: "Discover upcoming seminars, workshops, and university events",
  },
  "event-details": {
    title: "Event Details",
  },
  about: {
    title: "About Qeducato",
    subtitle:
      "Empowering minds and shaping futures through world-class university education",
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "Reach out to our admissions or support team — we are happy to help",
  },
  courses: {
    title: "Academic Programs",
    subtitle:
      "Explore undergraduate, postgraduate, and professional courses at Qeducato",
  },
  "courses-02": {
    title: "All Courses",
    subtitle:
      "Browse our full catalogue of programs designed for every academic goal",
  },
  "courses-details": {
    title: "Course Details",
  },
  admissions: {
    title: "Admissions",
    subtitle:
      "Begin your journey at Qeducato — learn how to apply and what to expect",
  },
  departments: {
    title: "Departments",
    subtitle:
      "Explore our faculties and academic departments across diverse disciplines",
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
