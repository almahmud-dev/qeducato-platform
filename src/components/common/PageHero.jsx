import Image from "next/image";
import Container from "@/components/ui/Container";
import Link from "next/link";

export const heroDataMap = {
  about: {
    title: "About",
    colorWord: "Qeducato",
    subtitle:
      "Discover our mission, values, and commitment to empowering future leaders through quality education.",
    breadcrumb: "About",
  },

  courses: {
    title: "Academic",
    colorWord: "Programs",
    subtitle:
      "Explore undergraduate, postgraduate, and professional programs designed for future success.",
    breadcrumb: "Academic Programs",
  },

  "courses-details": {
    title: "Program",
    colorWord: "Details",
    subtitle:
      "Learn more about the curriculum, admission requirements, and career opportunities.",
    breadcrumb: "Program Details",
  },

  teachers: {
    title: "Our",
    colorWord: "Faculty",
    subtitle:
      "Meet the experienced educators, researchers, and mentors dedicated to academic excellence.",
    breadcrumb: "Our Faculty",
  },

  "teachers-details": {
    title: "Faculty",
    colorWord: "Profile",
    subtitle:
      "Explore the academic background, research interests, and achievements of our faculty member.",
    breadcrumb: "Faculty Profile",
  },

  apply: {
    title: "Apply",
    colorWord: "Now",
    subtitle:
      "Take the first step toward your future. Start your application to Qeducato University today.",
    breadcrumb: "Apply Now",
  },

  scholarships: {
    title: "Scholarship",
    colorWord: "Opportunities",
    subtitle:
      "Discover financial aid and scholarship programs designed to support talented students.",
    breadcrumb: "Scholarships",
  },

  pricing: {
    title: "Tuition",
    colorWord: "Fees",
    subtitle:
      "View tuition fees and payment information for our academic programs.",
    breadcrumb: "Tuition Fees",
  },

  faq: {
    title: "Frequently Asked",
    colorWord: "Questions",
    subtitle:
      "Find answers to common questions about admissions, academics, tuition, and student life.",
    breadcrumb: "FAQ",
  },

  gallery: {
    title: "Campus",
    colorWord: "Gallery",
    subtitle:
      "Experience campus life through memorable moments, events, and student activities.",
    breadcrumb: "Campus Gallery",
  },

  events: {
    title: "University",
    colorWord: "Events",
    subtitle:
      "Stay connected with seminars, workshops, conferences, and campus activities.",
    breadcrumb: "Events",
  },

  "event-details": {
    title: "Event",
    colorWord: "Details",
    subtitle:
      "Everything you need to know about this upcoming university event.",
    breadcrumb: "Event Details",
  },

  blog: {
    title: "Latest",
    colorWord: "News",
    subtitle:
      "Stay informed with university news, research highlights, and campus stories.",
    breadcrumb: "News",
  },

  "blog-details": {
    title: "News",
    colorWord: "Details",
    subtitle:
      "Read the full story and stay updated with the latest university developments.",
    breadcrumb: "News Details",
  },

  contact: {
    title: "Contact",
    colorWord: "Us",
    subtitle:
      "Have a question? Our admissions and support teams are here to help you.",
    breadcrumb: "Contact",
  },

  admissions: {
    title: "University",
    colorWord: "Admissions",
    subtitle:
      "Learn everything you need to know about joining Qeducato University.",
    breadcrumb: "Admissions",
  },

  departments: {
    title: "Academic",
    colorWord: "Departments",
    subtitle:
      "Explore our diverse faculties and departments that inspire innovation and academic excellence.",
    breadcrumb: "Departments",
  },
};

// ── Gradient span — same pattern as SectionHeader
function GradientWord({ word }) {
  return (
    <span
      style={{
        backgroundImage: "linear-gradient(90deg, var(--primary), #f5c842)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {word}
    </span>
  );
}

export default function PageHero({ title, colorWord, subtitle, breadcrumb }) {
  return (
    <div className="relative w-full">
      <section className="relative w-full overflow-hidden min-h-[200px] xl:min-h-[400px]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/commonhero/pageheros.webp"
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
            <span className="block w-18 h-0.75 bg-primary mb-4 rounded-full" />

            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white leading-tight">
              {title && <>{title} </>}
              {colorWord && <GradientWord word={colorWord} />}
            </h1>

            {subtitle && (
              <p className="mt-3 text-sm md:text-base text-white/70 max-w-[560px]">
                {subtitle}
              </p>
            )}

            <span className="block w-18 h-0.75 bg-primary mt-4 rounded-full" />
          </div>
        </Container>
      </section>

      {/* Breadcrumb pill */}
      {breadcrumb && (
        <div className="page-hero-breadcrumb text-xs md:text-sm px-5 md:px-7 py-2 md:py-2.5 lg:py-5">
          <Link href="/" className="page-hero-breadcrumb-home transition-all">
            Home
          </Link>
          <span className="page-hero-breadcrumb-sep">|</span>
          <span>{breadcrumb}</span>
        </div>
      )}
    </div>
  );
}
