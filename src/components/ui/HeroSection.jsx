"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import banner1 from "@/../public/images/home/banner/banner1.webp";
import banner2 from "@/../public/images/home/banner/banner2.jpg";
import banner3 from "@/../public/images/home/banner/banner3.webp";
import Container from "./Container";

const featureCards = [
  {
    title: "Education Services",
    desc: "Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing listically",
    bgColor: "bg-[#104c64]/90",
  },
  {
    title: "International Hubs",
    desc: "Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing listically",
    bgColor: "bg-[#ff6f4b]",
  },
  {
    title: "Bachelor's and Master's",
    desc: "Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing listically",
    bgColor: "bg-[#104c64]/90",
  },
];

const HeroSection = () => {
  const heroBanner = [banner1, banner2, banner3];

  // ইনস্ট্যান্ট কালার চেঞ্জের জন্য activeID স্টেট ব্যবহার করা হয়েছে
  const [activeID, setActiveID] = useState(0);
  const [currentID, setCurrentID] = useState(0);
  const [nextID, setNextID] = useState(null);
  const [fading, setFading] = useState(false);

  const intervalRef = useRef(null);
  const fadingRef = useRef(false);

  // Preload images
  useEffect(() => {
    heroBanner.slice(1).forEach((banner) => {
      const img = new window.Image();
      img.src = banner.src;
    });
  }, []);

  const changeBanner = (newID) => {
    if (fadingRef.current || newID === currentID) return;

    fadingRef.current = true;
    setActiveID(newID); // ডটের কালার সাথে সাথে চেঞ্জ হবে
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
  };

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const next = (activeID + 1) % heroBanner.length;
      changeBanner(next);
    }, 5000);
  };

  // AutoPlay setup
  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [activeID]);

  const handleBannerClick = (id) => {
    if (fadingRef.current || id === activeID) return;
    changeBanner(id);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBanner[currentID]}
          alt={`hero-banner-${currentID}`}
          fill
          priority
          className="object-cover"
        />

        {nextID !== null && (
          <div
            className={`absolute inset-0 z-10 transition-opacity duration-700 ease-in-out ${
              fading ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={heroBanner[nextID]}
              alt={`hero-banner-${nextID}`}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="absolute inset-0 bg-[#0c293a]/60 z-20" />
      </div>

      <Container>
        <div className="relative z-30  w-full  pt-32 md:pt-44 flex flex-col justify-center grow">
          <div className="max-w-160 text-white">
            <div className="flex items-center gap-3 mb-4">
              <span className="uppercase tracking-widest text-sm font-semibold text-gray-200">
                Welcome to Qeducato
              </span>
              <div className="w-10 h-0.5 bg-[#ff6f4b]" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Education is the best key success in life
            </h1>

            <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed">
              Donec vitae libero non enim placerat eleifend aliquam erat
              volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl
              tristique, commodo gravida lectus non.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ff6f4b] hover:bg-[#e05e3a] text-white px-8 py-3.5 rounded font-medium transition duration-300 flex items-center gap-2">
                Discover More <span>→</span>
              </button>
              <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded font-medium transition duration-300 flex items-center gap-2">
                Contact Us <span>→</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative z-30 w-full mt-16 lg:mt-24">
          <ul className="absolute -top-12 right-4 flex gap-x-2">
            {heroBanner.map((_, index) => (
              <li
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-150 ${
                  activeID === index ? "bg-[#ff6f4b] scale-125" : "bg-white/50"
                }`}
                onClick={() => handleBannerClick(index)}
              />
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 max-w-300mx-auto gap-6 md:gap-8">
            {featureCards.map((card, i) => (
              <div
                key={i}
                className={`${card.bgColor} text-white p-8 md:p-10 flex flex-col justify-between min-h-55 transition duration-300 hover:-translate-y-1.25`}
              >
                <div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold flex items-center gap-2 hover:underline w-fit"
                >
                  Read More <span className="text-lg">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
