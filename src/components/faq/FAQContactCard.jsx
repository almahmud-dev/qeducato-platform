import { HiOutlineChatAlt2 } from "react-icons/hi";
import Link from "next/link";

export default function FAQContactCard() {
  return (
    <aside
      aria-label="Contact support"
      className="mt-6 bg-[var(--surface)] border border-[var(--border)] rounded-[16px] p-6"
    >
      <p className="label text-[var(--muted)] mb-1">Still Have</p>
      <h2 className="headingFive text-[var(--primary)] mb-3 leading-tight">
        Questions?
      </h2>
      <p className="PeraThree text-[var(--muted)] mb-5 leading-relaxed">
        Can&apos;t find the answer you&apos;re looking for? Contact our support
        team.
      </p>

      <Link
        href="/contact"
        className="
          inline-flex items-center gap-2 px-5 py-2.5
          bg-[var(--primary)] hover:bg-[var(--primary-hover)]
          text-white PeraThree font-semibold rounded-[10px]
          transition-colors duration-200
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]
        "
        aria-label="Contact our support team"
      >
        Contact Us
        <HiOutlineChatAlt2 className="w-4 h-4" aria-hidden="true" />
      </Link>
    </aside>
  );
}
