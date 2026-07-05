import Image from "next/image";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import {
  RiBankLine,
  RiGroupLine,
  RiGlobalLine,
  RiAwardLine,
} from "react-icons/ri";
import Container from "../ui/Container";

import harvard from "@/../public/images/brand/harvard.png";
import mit from "@/../public/images/brand/mit.png";
import stanford from "@/../public/images/brand/stanford.png";
import microsoft from "@/../public/images/brand/microsoft.png";
import google from "@/../public/images/brand/google.jpg";
import ibm from "@/../public/images/brand/ibm.png";
import SectionHeader from "../common/SectionHeader";

const brandLogos = [
  { name: "Harvard University", src: harvard },
  { name: "MIT", src: mit },
  { name: "Stanford University", src: stanford },
  { name: "Microsoft", src: microsoft },
  { name: "Google", src: google },
  { name: "IBM", src: ibm },
];

const statsData = [
  {
    icon: <RiBankLine className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-50",
    value: "150+",
    label: "Partner Institutions",
    desc: "We partner with top universities and organizations worldwide.",
  },
  {
    icon: <RiGroupLine className="w-6 h-6 text-orange-600" />,
    iconBg: "bg-orange-50",
    value: "500+",
    label: "Industry Collaborations",
    desc: "Strong connections with leading companies and organizations.",
  },
  {
    icon: <RiGlobalLine className="w-6 h-6 text-green-600" />,
    iconBg: "bg-green-50",
    value: "50+",
    label: "Countries Impacted",
    desc: "Our global network spans across 50+ countries.",
  },
  {
    icon: <RiAwardLine className="w-6 h-6 text-amber-600" />,
    iconBg: "bg-amber-50",
    value: "25+",
    label: "Years of Excellence",
    desc: "Delivering quality education and building lasting partnerships.",
  },
];

const Trusted = () => {
  return (
    <section className=" py-16 md:py-24">
      <Container>
       <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-12">
          <SectionHeader
            label="Trusted By"
            text="Trusted by Leading Institutions"
            colorWord="Leading"
          />
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
            We collaborate with top universities, organizations, and industry
            leaders to deliver world-class education and opportunities.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 flex items-center justify-center h-24 transition duration-300 hover:shadow-md hover:-translate-y-0.5 "
            >
              <div className="relative w-full h-full ">
                <Image
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition duration-300 bor"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {statsData.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center px-4 ${
                  i > 0 ? "pt-6 sm:pt-0 lg:pl-6" : ""
                }`}
              >
                {" "}
                <div
                  className={`${stat.iconBg} p-3.5 rounded-full mb-4 shadow-sm`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-extrabold text-[#104c64] mb-1">
                  {stat.value}
                </h3>
                <h4 className="text-sm font-bold text-slate-700 mb-2">
                  {stat.label}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed max-w-50">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-10 text-xs sm:text-sm text-gray-400 font-medium">
          <FiCheckCircle className="text-[#ff6f4b]" />
          <span>Committed to excellence. Trusted worldwide.</span>
        </div>
      </Container>
    </section>
  );
};

export default Trusted;
