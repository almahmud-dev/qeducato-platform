import Image from "next/image";
import { aboutIntroData } from "@/helper/about/aboutData";
import Container from "../ui/Container";

export default function AboutIntro() {
  const { badge, badgeLabel, label, title, description1, description2, stats, images } = aboutIntroData;

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left: Images */}
          <div className="relative w-full lg:w-[45%] shrink-0">
            <div className="flex gap-3">
              <div className="relative w-1/2 h-80 mt-12">
                <Image src={images.top} alt="About 1" fill className="object-cover" />
              </div>
              <div className="relative w-1/2 h-80">
                <Image src={images.bottom} alt="About 2" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute bottom-0 left-4 bg-orange-500 text-white px-6 py-5 text-center">
              <p className="text-4xl font-bold leading-tight">{badge}</p>
              <p className="text-xs">{badgeLabel}</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <p className="text-orange-500 text-sm font-medium mb-3">{label}</p>
            <h2 className="text-5xl font-bold text-black mb-5">{title}</h2>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "#777" }}>{description1}</p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#777" }}>{description2}</p>

            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="flex gap-3 items-start">
                  <span className="text-orange-500 font-bold text-xl">{stat.number}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-black">{stat.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#777" }}>{stat.description}</p>
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