import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { scholarshipData } from "@/helper/about/aboutData";

export default function Scholarship() {
  const { title, description, buttonText, buttonLink } = scholarshipData;

  return (
    <section className="py-16" style={{ backgroundColor: "#0d2e3e" }}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-sm text-white/80 leading-relaxed">{description}</p>
        </div>
        <Link
          href={buttonLink}
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-8 py-4 flex items-center gap-2 shrink-0 transition-colors duration-200"
        >
          {buttonText} <FaArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
}