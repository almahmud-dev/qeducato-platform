"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import banner1 from "@/../public/images/home/banner/university.webp";
import banner2 from "@/../public/images/home/banner/students.webp";
import banner3 from "@/../public/images/home/banner/cap.webp";
import Container from "./Container";
import DirectionalButton from "../common/DirectionalButton";
import { FaArrowRight, FaUserGraduate } from "react-icons/fa";
import Link from "next/link";
import { MdMenuBook } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";

const featureCards = [
  {
    title: "Apply for Admission",
    desc: "Begin your academic journey with a simple and guided application process. Our admissions team is here to support you every step of the way.",
    icon: FaUserGraduate,
    href: "/apply",
    bgColor: "bg-[#104c64]/90",
  },
  {
    title: "Explore Our Programs",
    desc: "Discover undergraduate and postgraduate programs designed to equip you with industry-relevant knowledge and practical skills for the future.",
    icon: MdMenuBook,
    href: "/courses",
    // আগে ছিল: bg-[#ff6f4b] → সাদা টেক্সটের সাথে contrast fail করছিল (2.8:1)
    // এখন: theme secondary color, contrast 7.84:1
    bgColor: "bg-secondary/90",
  },
  {
    title: "Scholarships & Financial Aid",
    desc: "Explore scholarships and funding opportunities that help outstanding students achieve their academic goals with greater financial confidence.",
    icon: PiCertificateFill,
    href: "/scholarships",
    bgColor: "bg-[#104c64]/90",
  },
];

// প্রতিটা স্লাইডের জন্য আলাদা, বর্ণনামূলক alt text — accessibility best practice
const heroBanner = [
  { src: banner1, alt: "Qeducato University main campus building" },
  { src: banner2, alt: "Qeducato University students on campus" },
  { src: banner3, alt: "Qeducato University graduation cap ceremony" },
];

const heroImageProps = {
  fill: true,
  sizes: "100vw",
  className: "object-cover",
  placeholder: "blur",
  quality: 70,
};

const HeroSection = () => {
  const [activeID, setActiveID] = useState(0);
  const [currentID, setCurrentID] = useState(0);
  const [nextID, setNextID] = useState(null);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);
  const fadingRef = useRef(false);

  const changeBanner = useCallback(
    (newID) => {
      if (fadingRef.current || newID === currentID) return;

      fadingRef.current = true;
      setActiveID(newID);
      setNextID(newID);
      setFading(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setFading(true);
        });
      });

      setTimeout(() => {
        setCurrentID(newID);
        setNextID(null);
        setFading(false);
        fadingRef.current = false;
      }, 800);
    },
    [currentID],
  );

  const startAutoPlay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const next = (activeID + 1) % heroBanner.length;
      changeBanner(next);
    }, 5000);
  }, [activeID, changeBanner]);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoPlay]);

  const handleBannerClick = (id) => {
    if (fadingRef.current || id === activeID) return;
    changeBanner(id);
  };

  const handleDotKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleBannerClick(index);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBanner[currentID].src}
          alt={heroBanner[currentID].alt}
          priority
          {...heroImageProps}
        />

        {nextID !== null && (
          <div
            className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
              fading ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={heroBanner[nextID].src}
              alt={heroBanner[nextID].alt}
              {...heroImageProps}
            />
          </div>
        )}

        {/* Overlay — hero টেক্সটের contrast নিশ্চিত করার জন্য জরুরি, বাদ দেওয়া যাবে না */}
        <div
          className="absolute inset-0 bg-[#0c293a]/60 z-20"
          aria-hidden="true"
        />
      </div>

      <Container size="hero">
        <div className="relative z-30 w-full pt-20 md:pt-30 flex flex-col justify-center grow">
          <div className="max-w-[750px] text-white">
            <div className="flex items-center gap-3 mb-5">
              <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-semibold text-primary">
                Welcome to Qeducato University
              </span>
              <div
                className="w-12 h-0.5 bg-primary rounded-full"
                aria-hidden="true"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              <span className="text-white">Empowering</span>
              <br />
              <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Future Leaders
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-orange-400 to-white bg-clip-text text-transparent">
                Through Education
              </span>
            </h1>

            <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-8 mb-8">
              Join a university where academic excellence meets innovation.
              Explore industry-focused programs, experienced faculty, modern
              learning environments, and endless opportunities to build a
              successful future.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <DirectionalButton
                href="/about"
                label="Discover More"
                rightIcon={<FaArrowRight size={16} />}
                bgColor="#FF5101"
                flairColor="#125875"
                borderColor="#FF5101"
                // আগে ছিল: textColor="#ffffff" → contrast 2.83:1 fail করছিল
                // এখন: 5.47:1, pass
                textColor="#0f172a"
                textHoverColor="#ffffff"
                shadowHover=""
                size="md"
                className="font-semibold rounded-sm px-10 py-5.5"
              />

              <DirectionalButton
                href="/contact"
                label="Contact Us"
                rightIcon={<FaArrowRight size={16} />}
                bgColor="transparent"
                flairColor="#0d3d4f"
                borderColor="var(--text-primary)"
                textColor="var(--text-primary)"
                textHoverColor="#ffffff"
                shadowHover=""
                size="md"
                className="font-semibold rounded-sm px-8 py-5.5"
              />
            </div>
          </div>
        </div>

        <div className="relative z-30 w-full mt-16 lg:mt-24">
          <ul
            className="absolute -top-12 right-4 flex gap-x-2"
            role="tablist"
            aria-label="Hero banner slides"
          >
            {heroBanner.map((_, index) => (
              <li
                key={index}
                role="tab"
                tabIndex={0}
                aria-selected={activeID === index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => handleBannerClick(index)}
                onKeyDown={(e) => handleDotKeyDown(e, index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-150 ${
                  activeID === index ? "bg-primary scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featureCards.map((card, i) => {
              const Icon = card.icon;

              return (
                <Link
                  key={i}
                  href={card.href}
                  className={`${card.bgColor} text-white p-8 md:p-10 flex flex-col justify-between min-h-55 transition duration-300 hover:-translate-y-1.5`}
                >
                  <div>
                    <Icon
                      className="w-10 h-10 mb-5 text-white"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <span className="text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More
                    <span className="text-lg" aria-hidden="true">
                      <FaArrowRight size={16} />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
