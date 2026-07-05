import Image from "next/image";
import React from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";
import { featuresList } from "@/helper/home/featureshome";

function FeaturesSection() {
  return (
    <section className="bg-[#f9fbff] py-16 md:py-24 overflow-hidden">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <SectionHeader
              label="Our Features"
              text="Explore Our Best Faculty"
              colorWord="Best Faculty"
              className="text-wrap text-left"
            />
            <p className="text-muted text-lg max-w-[650px] mt-4 leading-relaxed">
              Discover our core commitments and facilities designed to help you
              build the skills, knowledge, and experience for a successful
              future.
            </p>
          </div>

          <DirectionalButton
            href="/teachers"
            label="View All Faculty"
            rightIcon={<FiArrowRight size={16} aria-hidden="true" />}
            bgColor="transparent"
            flairColor="var(--color-secondary)"
            borderColor="var(--color-primary)"
            textColor="var(--color-primary)"
            textHoverColor="var(--color-background)"
            shadowHover=""
            size="md"
            className="font-semibold rounded-sm py-5.5 px-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className={`bg-background rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(3,27,78,0.03)] border border-border/50 flex flex-col min-h-[480px] border-b-4 ${feature.borderColor}`}
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />

                <div
                  className={`absolute top-4 left-4 ${feature.iconBg} w-10 h-10 rounded-xl flex items-center justify-center shadow-md z-10`}
                >
                  {feature.icon}
                </div>

                <div className="absolute left-4 bottom-4 bg-background/90 backdrop-blur-xs py-1 px-3 rounded-lg text-[10px] font-bold text-foreground/80 shadow-xs z-10">
                  {feature.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-foreground mb-2.5 transition-colors duration-300 hover:text-primary cursor-pointer">
                    {feature.title}
                  </h3>
                  <p className="text-muted/80 text-xs sm:text-[13px] leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/60 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="bg-surface p-1.5 rounded-lg text-muted">
                      <HiOutlineUsers className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-foreground">
                        {feature.students}
                      </div>
                      <div className="text-[10px] text-muted font-medium">
                        Students
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
                      <FiStar className="w-4 h-4 fill-current" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-foreground">
                        {feature.rating}
                      </div>
                      <div className="text-[10px] text-muted font-medium">
                        Rating
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-xs font-bold text-foreground hover:text-primary flex items-center gap-1 transition-colors duration-200"
                  >
                    Learn More{" "}
                    <FiArrowRight className="text-primary" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;