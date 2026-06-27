import { HiOutlineChatAlt2 } from "react-icons/hi";
import Link from "next/link";
import DirectionalButton from "../common/DirectionalButton";

export default function FAQContactCard() {
  return (
    <aside
      aria-label="Contact support"
      className="mt-6 bg-surface border border-border rounded-2xl p-6"
    >
      <p className="label text-muted mb-1">Still Have</p>
      <h2 className="headingFive text-primary mb-3 leading-tight">
        Questions?
      </h2>
      <p className="PeraThree text-muted mb-5 leading-relaxed">
        Can&apos;t find the answer you&apos;re looking for? Contact our support
        team.
      </p>

      <DirectionalButton
        href="/contact"
        label="Contact Us"
        rightIcon={<HiOutlineChatAlt2 size={18} />}
        bgColor="#FF5101"
        flairColor="#125875"
        borderColor="#FF5101"
        textColor="#ffffff"
        textHoverColor="#ffffff"
        shadowHover=""
        size="md"
        className="font-semibold rounded-sm px-5 py-3.5"
        ariaLabel="Contact our support team"
      />
    </aside>
  );
}
