import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineGlobeAlt,
  HiOutlineBookOpen,
  HiOutlineHeart,
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineTrophy,
} from "react-icons/hi2";
import { RiBankLine } from "react-icons/ri";

import about1 from "@/../public/images/home/about/about2.jpg";
import about2 from "@/../public/images/home/about/about1.png";
import Container from "../ui/Container";
import DirectionalButton from "../common/DirectionalButton";
import SectionHeader from "../common/SectionHeader";

const features = [
  {
    icon: <HiOutlineAcademicCap className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Academic Excellence",
    desc: "Top-ranked programs taught by world-class faculty.",
  },
  {
    icon: <HiOutlineGlobeAlt className="w-5 h-5 text-orange-600" />,
    iconBg: "bg-orange-50",
    title: "Global Opportunities",
    desc: "International partnerships and global exposure.",
  },
  {
    icon: <HiOutlineBookOpen className="w-5 h-5 text-green-600" />,
    iconBg: "bg-green-50",
    title: "Innovative Learning",
    desc: "Modern resources and technology for future-ready skills.",
  },
  {
    icon: <HiOutlineHeart className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-50",
    title: "Student Support",
    desc: "Personalized guidance for every step of your journey.",
  },
];

const stats = [
  {
    icon: <HiOutlineUserGroup className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-50",
    value: "15K+",
    label: "Global Students",
    subLabel: "from 120+ countries",
  },
  {
    icon: <RiBankLine className="w-5 h-5 text-orange-600" />,
    iconBg: "bg-orange-50",
    value: "200+",
    label: "Academic Programs",
    subLabel: "Undergraduate & Graduate",
  },
  {
    icon: <HiOutlineTrophy className="w-5 h-5 text-green-600" />,
    iconBg: "bg-green-50",
    value: "98%",
    label: "Employment Rate",
    subLabel: "Graduates working globally",
  },
  {
    icon: <HiOutlineHeart className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-50",
    value: "#1",
    label: "Top Ranked University",
    subLabel: "For Innovation & Impact",
  },
];

function AboutSection() {
  return (
    <section className="bg-[#f9fbff] py-16 md:py-24 overflow-hidden">
      <Container className="flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative w-full h-[520px] sm:h-[600px]">
            <div className="absolute left-0 top-0 w-[58%] h-[88%] rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(3,27,78,0.08)] z-10">
              <Image
                src={about1}
                alt="University main building"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute right-6 bottom-0 w-[52%] h-[75%] rounded-[24px] overflow-hidden shadow-[0_15px_35px_rgba(3,27,78,0.06)] z-0">
              <Image
                src={about2}
                alt="Student walking on campus"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 top-[6%] bg-white p-4 rounded-2xl shadow-[0_10px_35px_rgba(3,27,78,0.1)] flex flex-col items-start gap-1 z-20 min-w-50 border border-slate-50">
              <div className="bg-orange-50 p-2 rounded-xl text-[#ff6f4b]">
                <HiOutlineAcademicCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-[#031b4e] mt-1">
                25+
              </h3>
              <p className="text-[11px] font-bold text-slate-500 leading-tight">
                Years of Excellence <br />
                <span className="text-gray-400 font-normal">in Education</span>
              </p>
            </div>

            <div className="absolute left-[4%] bottom-[4%] bg-white py-3.5 px-4 rounded-2xl shadow-[0_12px_35px_rgba(3,27,78,0.1)] flex flex-col gap-2.5 z-20 min-w-[220px] border border-slate-50">
              <div className="flex items-center gap-2">
                <div className="bg-[#031b4e] p-1.5 rounded-lg text-white">
                  <HiOutlineUsers className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-extrabold text-[#031b4e]">
                  Join a Global Community
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-300" />
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-400" />
                  <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-slate-500" />
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff6f4b] text-[9px] font-bold text-white ring-2 ring-white">
                    +
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-[#031b4e]">10K+</div>
                  <div className="text-[9px] text-gray-400 font-medium">
                    Students
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <SectionHeader
              label="About Our University"
              text="Shaping Minds, Building  Futures"
              colorWord="Future"
              className="text-left"
            />

            <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed mb-8">
              We are more than a university — we are a community of innovators,
              leaders, and global citizens. Our mission is to deliver
              world-class education and create impactful experiences that shape
              the future.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 mb-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div
                    className={`${item.iconBg} p-2.5 rounded-xl shrink-0 shadow-sm`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#031b4e] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <DirectionalButton
                href="/contact"
                label="Discover More About Us "
                rightIcon={<FiArrowRight size={16} />}
                bgColor="transparent"
                flairColor="#0d3d4f"
                borderColor="var(--text-primary)"
                textColor="var(--text-primary)"
                textHoverColor="#ffffff"
                shadowHover=""
                size="md"
                className="font-semibold rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] shadow-[0_15px_50px_rgba(3,27,78,0.03)] border border-slate-50/80 p-6 md:p-8 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 px-2 ${
                  i > 0 ? "pt-6 sm:pt-0 lg:pl-6" : ""
                }`}
              >
                <div className={`${stat.iconBg} p-3 rounded-full shrink-0`}>
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#031b4e] leading-tight">
                    {stat.value}
                  </h3>
                  <h4 className="text-xs font-bold text-slate-700 mt-0.5">
                    {stat.label}
                  </h4>
                  <p className="text-gray-400 text-[10px] font-medium leading-none mt-0.5">
                    {stat.subLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
