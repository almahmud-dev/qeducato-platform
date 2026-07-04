"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FiArrowRight, FiStar } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlinePresentationChartLine,
  HiOutlineBriefcase,
} from "react-icons/hi2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";

import whyChooseImg from "@/../public/images/home/feature/_3.jpg";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";

gsap.registerPlugin(ScrollTrigger);

const reasonsList = [
  {
    icon: <HiOutlinePresentationChartLine className="w-5 h-5 text-orange-600" />,
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
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightImageWrapperRef = useRef(null);
  const badgeLeftRef = useRef(null);
  const badgeRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftElements = leftContentRef.current.children;
      const features = leftContentRef.current.querySelectorAll(".feature-item");

      const leftTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      leftTimeline.fromTo(
        [leftElements[0], leftElements[1], leftElements[3]],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 }
      );

      leftTimeline.fromTo(
        features,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", stagger: 0.15 },
        "-=0.6"
      );

      gsap.fromTo(
        rightImageWrapperRef.current,
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: rightImageWrapperRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        [badgeLeftRef.current, badgeRightRef.current],
        { opacity: 0, scale: 0.7, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: rightImageWrapperRef.current,
            start: "top 60%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24 overflow-hidden">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div ref={leftContentRef} className="lg:col-span-5 flex flex-col justify-center">
          <div>
            <SectionHeader
              label="Why Choose Us"
              text="Education That Empowers."
              colorWord="Empowers."
              className="text-left"
            />
          </div>

          <p className="text-slate-500 text-sm md:text-[15px] leading-relaxed mb-8">
            We are committed to providing exceptional education, world-class
            resources, and a supportive environment to help you achieve your
            goals and shape a successful future.
          </p>

          <div className="flex flex-col gap-6 mb-10">
            {reasonsList.map((item, index) => (
              <div key={index} className="feature-item flex items-start gap-4 group">
                <div className={`${item.iconBg} p-3 rounded-xl shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#031b4e] mb-1 transition-colors duration-300 group-hover:text-[#ff6f4b]">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed max-w-120">
                    {item.desc}
                  </p>
                </div>
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

        <div className="lg:col-span-7 relative w-full aspect-square flex items-center justify-center">
          
          <div 
            ref={rightImageWrapperRef} 
            className="w-[90%] h-[90%] relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(3,27,78,0.08)]"
          >
            <Image
              src={whyChooseImg}
              alt="Group of students studying together with a laptop"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div 
            ref={badgeLeftRef} 
            className="absolute left-0 bottom-[4%] bg-[#020d37] p-5 rounded-2xl shadow-[0_15px_35px_rgba(2,13,55,0.2)] flex items-center gap-4 max-w-[280px] sm:max-w-[320px] z-20 border border-blue-950"
          >
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

          <div 
            ref={badgeRightRef} 
            className="absolute right-0 bottom-[8%] bg-white p-5 rounded-2xl shadow-[0_15px_35px_rgba(3,27,78,0.1)] flex flex-col items-start gap-1 z-20 min-w-[150px] border border-slate-50"
          >
            <h3 className="text-3xl font-black text-[#ff6f4b] leading-none">
              98%
            </h3>
            <span className="text-[11px] font-bold text-[#031b4e] mt-1">
              Student Satisfaction
            </span>
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