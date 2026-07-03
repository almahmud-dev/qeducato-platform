import Image from "next/image";
import React from "react";

import about1 from "@/../public/images/about/about2.jpg";
import about2 from "@/../public/images/about/about1.png";
import Container from "../ui/Container";

function AboutSection() {
  return (
    <section className="bg-[#f4f9fc] py-16 md:py-24 overflow-hidden">
      <Container className=" grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-end relative">
          <div className="col-span-7 relative rounded-[20px] overflow-hidden border-[6px] border-[#ff6f4b] aspect-9/16">
            <Image
              src={about1}
              alt="University building"
              fill
              className="object-cover"
            />
          </div>

          <div className="col-span-5 flex flex-col gap-4">
            <div className="bg-[#ff6f4b] text-white p-6 rounded-xl text-center shadow-lg border-[3px] border-[#104c64]">
              <h3 className="text-4xl md:text-5xl font-bold mb-1">25+</h3>
              <p className="text-xs md:text-sm font-medium tracking-wide text-white/90">
                Years of Experience
              </p>
            </div>

            <div className="relative rounded-[20px] overflow-hidden border-[6px] border-[#104c64] aspect-[3/4]">
              <Image
                src={about2}
                alt="Student walking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🎓</span>
            <span className="text-[#ff6f4b] font-bold text-sm tracking-wider uppercase">
              About Our University
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#104c64] leading-tight mb-6">
            A Few Words About the University
          </h2>

          <p className="text-[#104c64] font-medium text-sm md:text-base mb-4 leading-relaxed">
            Our community is being called to reimagine the future. As the only
            university where a renowned design school comes together with
            premier colleges, we are making learning more relevant and
            transformational.
          </p>

          <p className="text-gray-500 text-xs md:text-sm mb-8 leading-relaxed">
            We are proud to offer top range in employment services such as asser
            payroll and benefits administrate managemen and assistance with
            global business range ployment employer readings from religious
            texts or literature are also commonly inc compliance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#ff6f4b] text-white font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md">
                01
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#104c64] mb-1">
                  Doctoral Degrees
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  consectetur adipiscing elit sed do eiusmod tem incid idunt.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#ff6f4b] text-white font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md">
                02
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#104c64] mb-1">
                  Global Students
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  consectetur adipiscing elit sed do eiusmod tem incid idunt.
                </p>
              </div>
            </div>
          </div>

          <button className="bg-[#104c64] hover:bg-[#0c3749] text-white px-8 py-3.5 rounded font-semibold transition duration-300 flex items-center gap-2 shadow-md">
            Read More <span>→</span>
          </button>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
