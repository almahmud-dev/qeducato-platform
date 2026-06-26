import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";
import Container from "../ui/Container";

export default function FAQHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/commonhero/faqhero.webp"
        alt="Frequently Asked Questions"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative flex min-h-[260px] items-center sm:min-h-[320px] sm:px-6 md:min-h-[380px] lg:min-h-[450px] xl:min-h-[500px]">
        <Container size="xl">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary sm:px-4 sm:py-1.5 sm:text-xs">
            Help Center
          </span>

          {/* Heading */}
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Frequently Asked
            <span className="block bg-gradient-to-r from-primary to-[#f5c842] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-4 max-w-lg text-sm leading-5 lg:leading-7 text-white/85 sm:text-base md:text-lg pr-15 lg:pr-0">
            Find answers to admissions, academic programs, tuition fees,
            scholarships, campus life, student services, and other frequently
            asked questions about Qeducato.
          </p>

          {/* Breadcrumb */}
          <div className="mt-7 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 shadow-xl backdrop-blur-md sm:px-5 sm:py-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              <FiHome className="h-4 w-4" />
              Home
            </Link>

            <FiChevronRight className="h-4 w-4 text-muted" />

            <span className="text-sm font-semibold text-primary">FAQ</span>
          </div>
        </Container>
      </div>
    </section>
  );
}
