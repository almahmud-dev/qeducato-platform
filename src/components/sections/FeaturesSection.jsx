import Image from "next/image";
import React from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { HiOutlineAcademicCap, HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiAtom } from "react-icons/bi";
import Container from "../ui/Container";

// কার্ডের ইমেজের জন্য ডামি ইমেজ পাথ
import featureImg1 from "@/../public/images/home/feature/_3.jpg";
import featureImg2 from "@/../public/images/home/feature/_3.jpg";
import featureImg3 from "@/../public/images/home/feature/_3.jpg";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";

const featuresList = [
  {
    image: featureImg1,
    icon: <HiOutlineAcademicCap className="w-5 h-5 text-white" />,
    iconBg: "bg-[#ff6f4b]",
    tag: "B.Sc. / M.Sc.",
    title: "Skilled Teachers",
    desc: "Innovate the future with cutting-edge programs taught by highly experienced, supportive, and dedicated expert faculty members.",
    students: "4,250+",
    rating: "4.8/5",
    borderColor: "border-b-[#ff6f4b]",
  },
  {
    image: featureImg2,
    icon: <MdOutlineLocalOffer className="w-5 h-5 text-white" />,
    iconBg: "bg-[#0c3749]",
    tag: "BBA / MBA",
    title: "Affordable Courses",
    desc: "Develop leadership and strategic skills with our cost-effective and budget-friendly global educational modules.",
    students: "6,150+",
    rating: "4.7/5",
    borderColor: "border-b-[#0c3749]",
  },
  {
    image: featureImg3,
    icon: <BiAtom className="w-5 h-5 text-white" />,
    iconBg: "bg-green-600",
    tag: "B.Sc. / M.Sc.",
    title: "Efficient & Flexible",
    desc: "Explore the world of modern learning with schedule models that seamlessly blend with your professional life goals.",
    students: "3,780+",
    rating: "4.6/5",
    borderColor: "border-b-green-600",
  },
];

function FeaturesSection() {
  return (
    <section className="bg-[#f9fbff] py-16 md:py-24 overflow-hidden">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <SectionHeader
              label="Our Features"
              text="Explore Our Best Features"
              colorWord="Best Features"
              className="text-wrap text-left"
            />
            <p className="text-slate-500 text-sm max-w-[650px] mt-4 leading-relaxed">
              Discover our core commitments and facilities designed to help you
              build the skills, knowledge, and experience for a successful
              future.
            </p>
          </div>

          <DirectionalButton
            href="/"
            label="View All Features "
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(3,27,78,0.03)] border border-slate-100/50 flex flex-col min-h-[480px] border-b-[4px] ${feature.borderColor}`}
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />

                <div
                  className={`absolute top-4 left-4 ${feature.iconBg} w-10 h-10 rounded-xl flex items-center justify-center shadow-md z-10`}
                >
                  {feature.icon}
                </div>

                <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-xs py-1 px-3 rounded-lg text-[10px] font-bold text-slate-700 shadow-xs z-10">
                  {feature.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-[#031b4e] mb-2.5 transition-colors duration-300 hover:text-[#ff6f4b] cursor-pointer">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="bg-slate-50 p-1.5 rounded-lg text-slate-500">
                      <HiOutlineUsers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#031b4e]">
                        {feature.students}
                      </div>
                      <div className="text-[10px] text-gray-400 font-medium">
                        Students
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="bg-orange-50 p-1.5 rounded-lg text-orange-400">
                      <FiStar className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#031b4e]">
                        {feature.rating}
                      </div>
                      <div className="text-[10px] text-gray-400 font-medium">
                        Rating
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-xs font-bold text-[#031b4e] hover:text-[#ff6f4b] flex items-center gap-1 transition-colors duration-200"
                  >
                    Learn More <FiArrowRight className="text-[#ff6f4b]" />
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
