import Image from "next/image";
import { aboutIntroData } from "@/helper/about/aboutData";
import Container from "../ui/Container";

const GraduationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-orange-500"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

export default function AboutIntro() {
  const { badge, badgeLabel, label, title, description1, description2, stats, images } = aboutIntroData;

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          <div className="relative w-full lg:w-[48%] shrink-0 flex gap-4 items-start">

            {/* Left tall image */}
            <div
              className="relative rounded-2xl overflow-hidden shrink-0"
              style={{ width: "45%", height: "520px" }}
            >
              <Image
                src={images.left}
                alt="About University"
                fill
                className="object-cover"
                sizes="20vw"
              />
            </div>

            {/* Right column: top image, badge, bottom image */}
            <div className="flex flex-col gap-4 flex-1 pt-10">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ height: "220px" }}
              >
                <Image
                  src={images.topRight}
                  alt="About top"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>

              {/* Badge between images */}
              <div className="bg-orange-500 text-white px-6 py-4 text-center">
                <p className="text-3xl font-bold leading-tight">{badge}</p>
                <p className="text-sm font-medium">{badgeLabel}</p>
              </div>

              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ height: "220px" }}
              >
                <Image
                  src={images.bottomRight}
                  alt="About bottom"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
            </div>

          </div>

          {/* Right content */}
          <div className="flex-1">
            <p className="text-orange-500 text-sm font-medium mb-3 flex items-center gap-2">
              <GraduationIcon /> {label}
            </p>
            <h2 className="text-5xl font-bold text-black mb-5 leading-tight">{title}</h2>
            <p className="text-sm leading-relaxed mb-3 font-medium" style={{ color: "#0d2e3e" }}>
              {description1}
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#777" }}>
              {description2}
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {stat.number}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-black mb-1">{stat.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#777" }}>
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}