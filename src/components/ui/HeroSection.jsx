"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import banner1 from "@/../public/images/banner/banner1.webp";
import banner2 from "@/../public/images/banner/banner2.jpg";
import banner3 from "@/../public/images/banner/banner3.webp";

const HeroSection = () => {
  const heroBanner = [banner1, banner2, banner3];

  const [currentID, setCurrentID] = useState(0);
  const [nextID, setNextID] = useState(null);
  const [fading, setFading] = useState(false);

  const intervalRef = useRef(null);
  const fadingRef = useRef(false);

  // preload images
  useEffect(() => {
    heroBanner.slice(1).forEach((banner) => {
      const img = new window.Image();
      img.src = banner.src;
    });
  }, []);

  const changeBanner = (newID) => {
    if (fadingRef.current || newID === currentID) return;

    fadingRef.current = true;
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
      const next = (currentID + 1) % heroBanner.length;
      changeBanner(next);
    }, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentID((prev) => {
        const next = (prev + 1) % heroBanner.length;

        if (!fadingRef.current) {
          changeBanner(next);
        }

        return prev;
      });
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [currentID]);

  const handleBannerClick = (id) => {
    changeBanner(id);

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const next = (id + 1) % heroBanner.length;
      changeBanner(next);
    }, 5000);
  };

  return (
    <section className=" aspect-video w-screen ">
      <div className=" h-full w-full relative">
        <div className="absolute inset-0 z-0">
          {/* Current Image */}
          <Image
            src={heroBanner[currentID]}
            alt={`hero-banner-${currentID}`}
            fill
            sizes="100vw"
            priority={currentID === 0}
            className="rounded-[6px] object-cover"
          />

          {/* Next Image */}
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
                sizes="100vw"
                className="rounded-[6px] object-cover"
              />
            </div>
          )}

          <div className="absolute inset-0 bg-[#02090f30] z-20" />
        </div>

        {/* Thumbnail buttons */}
        <ul className="absolute bottom-[15px] right-[15px] sm:bottom-[20px] sm:right-[20px] md:bottom-[25px] md:right-[25px] lg:bottom-[30px] lg:right-[30px] xl:bottom-[35px] xl:right-[35px] z-[20] flex gap-x-2 sm:gap-x-3 md:gap-x-4 xl:gap-x-5">
          {heroBanner.map((item, index) => (
            <li
              key={index}
              className={`rounded-[6px] overflow-hidden border cursor-pointer ${
                currentID === index
                  ? "border-white"
                  : "border-bg-secondaryTwo"
              }`}
              onClick={() => handleBannerClick(index)}
            >
              <Image
                src={item}
                alt={`hero-banner-${index}`}
                width={153}
                height={153}
                className="object-cover hover:scale-110 transition duration-400 ease-in-out !h-[80px] !w-[80px] sm:!h-[100px] sm:!w-[100px] md:!h-[120px] md:!w-[120px] lg:!h-[135px] lg:!w-[135px] xl:!h-[153px] xl:!w-[153px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;