import Link from "next/link";
import { FiCalendar, FiMessageSquare, FiArrowRight } from "react-icons/fi";
import Container from "../ui/Container";

export default function PricingCta() {
  return (
    <section
      aria-labelledby="enterprise-heading"
      className="py-5 md:py-10 bg-white"
    >
      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-secondary)] px-8 py-14 md:px-16 md:py-20 text-center">
          {/* Background blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />
            {/* Fix: /8 → /10 */}
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 caption font-semibold text-white/60 tracking-widest uppercase mb-6">
              Enterprise
            </span>

            {/* Fix: id added */}
            <h2
              id="enterprise-heading"
              className="headingTwo text-white font-bold mb-4 max-w-2xl mx-auto"
            >
              Need a custom solution?{" "}
              <span className="text-[var(--color-primary)]">Let's talk.</span>
            </h2>

            <p className="lead text-white/60 max-w-lg mx-auto mb-10">
              Large networks, government institutions, or complex workflows —
              we'll build a plan around your exact requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Fix: <a> → <Link>, touchAction added */}
              <Link
                href="/demo"
                style={{ touchAction: "manipulation" }}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--color-primary)] text-white PeraTwo font-semibold hover:bg-[var(--color-primary-hover)] hover:shadow-xl hover:shadow-orange-500/20 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-secondary)]"
              >
                <FiCalendar size={16} aria-hidden="true" />
                Book a Demo
                <FiArrowRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/contact"
                style={{ touchAction: "manipulation" }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/20 text-white PeraTwo font-semibold hover:bg-white/10 hover:border-white/30 active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-secondary)]"
              >
                <FiMessageSquare size={16} aria-hidden="true" />
                Contact Sales
              </Link>
            </div>

            <p className="caption text-white/40 mt-8">
              No commitment required · Response within 24 hours · Custom SLA
              available
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
