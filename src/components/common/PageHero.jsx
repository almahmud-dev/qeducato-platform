import Image from "next/image";
import Container from "@/components/ui/Container";

export const heroDataMap = {
  blog: { title: "Blog" },
  "blog-details": { title: "Blog Details" },
  teachers: { title: "Teacher" },
  "teachers-details": { title: "Teachers Details" },
  pricing: { title: "Pricing" },
  faq: { title: "FAQ" },
  gallery: { title: "Gallery" },
  event: { title: "Event" },
  "event-details": { title: "Event Details" },
  about: { title: "About Us" },
};

// Props:
//   title    — string
//   subtitle — optional string
export default function PageHero({ title, subtitle }) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/commonhero/pagehero.png"
          alt="Page Hero Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0d2e1c]/70" />
      </div>

      {/* Content */}
      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-28 text-center">
          <span className="block w-12 h-[3px] bg-[#c49a1a] mb-4 rounded-full" />

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-sm md:text-base text-white/70 max-w-[560px]">
              {subtitle}
            </p>
          )}

          <span className="block w-12 h-[3px] bg-[#c49a1a] mt-4 rounded-full" />
        </div>
      </Container>
    </section>
  );
}
