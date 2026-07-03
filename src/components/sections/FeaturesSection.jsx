import Image from "next/image";
import React from "react";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineLocalOffer } from "react-icons/md";

import featureBg from "@/../public/images/home/feature/_3.jpg";
import { BiAtom } from "react-icons/bi";
import Container from "../ui/Container";

const featuresList = [
  {
    icon: <HiOutlineAcademicCap className="w-6 h-6 text-white" />,
    title: "Skilled Teachers",
    desc: "Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.",
  },
  {
    icon: <MdOutlineLocalOffer className="w-6 h-6 text-white" />,
    title: "Affordable Courses",
    desc: "Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.",
  },
  {
    icon: <BiAtom className="w-6 h-6 text-white" />,
    title: "Efficient & Flexible",
    desc: "Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.",
  },
];

function FeaturesSection() {
  return (
    <section className=" bg-[#07293d] relative overflow-hidden">
      <div className="absolute left-12.5 -bottom-5 text-[#0d344d] opacity-40 pointer-events-none select-none z-0">
        <BiAtom size={280} />
      </div>
      <Container className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        <div className="lg:col-span-6 p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10 max-w-[500px]">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Best Features
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-10">
              Special wedding garments are often worn, and the ceremony is
              sometimes followed by a wedding reception. Music, poetry.
            </p>

            <div className="flex flex-col gap-8">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#ff6f4b] hover:bg-[#e05e3a] transition-colors duration-300 flex items-center justify-center shrink-0 shadow-md">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-1.5 transition-colors group-hover:text-[#ff6f4b]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 relative w-full min-h-[350px] lg:min-h-full">
          <Image
            src={featureBg}
            alt="Water reflection background texture"
            fill
            priority
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;
