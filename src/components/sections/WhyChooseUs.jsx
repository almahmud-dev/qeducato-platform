import Image from "next/image";
import React from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlinePresentationChartLine,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import Container from "../ui/Container";

// ডান পাশের মেইন ইমেজ পাথ (আপনার প্রজেক্ট অনুযায়ী পাথ চেঞ্জ করতে পারেন)
import whyChooseImg from "@/../public/images/home/feature/_3.jpg";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";

const reasonsList = [
  {
    icon: (
      <HiOutlinePresentationChartLine className="w-5 h-5 text-orange-600" />
    ),
    iconBg: "bg-orange-50",
    title: "Industry-Focused Curriculum",
    desc: "Our programs are designed with industry input to ensure relevant, up-to-date, and future-ready skills.",
  },
  {
    icon: <HiOutlineUserGroup className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-50",
    title: "Expert Faculty",
    desc: "Learn from experienced educators, researchers, and industry professionals who are passionate about your success.",
  },
  {
    icon: <HiOutlineAcademicCap className="w-5 h-5 text-green-600" />,
    iconBg: "bg-green-50",
    title: "Modern Facilities",
    desc: "State-of-the-art labs, libraries, and digital resources that inspire innovation and enhance learning.",
  },
  {
    icon: <HiOutlineBriefcase className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-50",
    title: "Career Support",
    desc: "From internships to placement assistance, we support you at every step to achieve your career goals.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content & Features List */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <SectionHeader
            label="Why Choose Us"
            text="Education That Empowers."
            colorWord="Empowers."
            className="text-left  "
          />

          {/* Short Description */}
          <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed mb-8">
            We are committed to providing exceptional education, world-class
            resources, and a supportive environment to help you achieve your
            goals and shape a successful future.
          </p>

          {/* Vertical Features List */}
          <div className="flex flex-col gap-6 mb-10">
            {reasonsList.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                {/* Colored Rounded Square Icon Badge */}
                <div
                  className={`${item.iconBg} p-3 rounded-xl shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#031b4e] mb-1 transition-colors duration-300 group-hover:text-[#ff6f4b]">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed max-w-[480px]">
                    {item.desc}
                  </p>
                </div>j
              </div>
            ))}
          </div>

          <div>
            <DirectionalButton
              href="/"
              label="Discover More  "
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

        {/* Right Side: Image with Floating Overlapping Badges */}
        <div className="lg:col-span-7 relative w-full aspect-square flex items-center justify-center">
          {/* Main Huge Image Container */}
          <div className="w-[90%] h-[90%] relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(3,27,78,0.08)]">
            <Image
              src={whyChooseImg}
              alt="Group of students studying together with a laptop"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Floating Card 1: "Your Future Starts Here" (Dark Blue Banner at bottom-left of image) */}
          <div className="absolute left-0 bottom-[4%] bg-[#020d37] p-5 rounded-2xl shadow-[0_15px_35px_rgba(2,13,55,0.2)] flex items-center gap-4 max-w-[280px] sm:max-w-[320px] z-20 border border-blue-950">
            <div className="bg-[#ff6f4b] p-3 rounded-xl text-white shrink-0">
              <HiOutlineAcademicCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">
                Your Future Starts Here
              </h4>
              <p className="text-slate-400 text-[11px] leading-normal">
                Join a community that inspires you to learn, grow, and lead.
              </p>
            </div>
          </div>

          {/* Floating Card 2: "98% Student Satisfaction" (White Box at bottom-right of image) */}
          <div className="absolute right-0 bottom-[8%] bg-white p-5 rounded-2xl shadow-[0_15px_35px_rgba(3,27,78,0.1)] flex flex-col items-start gap-1 z-20 min-w-[150px] border border-slate-50">
            <h3 className="text-3xl font-black text-[#ff6f4b] leading-none">
              98%
            </h3>
            <span className="text-[11px] font-bold text-[#031b4e] mt-1">
              Student Satisfaction
            </span>
            {/* 5 Stars Group */}
            <div className="flex items-center gap-0.5 mt-1 text-orange-400">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
