"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiPlay, FiExternalLink, FiEye } from "react-icons/fi";
import Container from "../ui/Container";

import campusBg from "@/../public/images/campus/campus-main.jpg";
import tourBg from "@/../public/images/campus/tourBg.jpg";
import gallery1 from "@/../public/images/campus/gallery1.jpg";
import gallery2 from "@/../public/images/campus/gallery2.jpg";
import gallery3 from "@/../public/images/campus/gallery3.jpg";
import gallery4 from "@/../public/images/campus/gallery4.jpg";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";

const galleryImages = [
  { src: gallery1, alt: "Modern Library Study Space" },
  { src: gallery2, alt: "Advanced Science Research Lab" },
  { src: gallery3, alt: "Student Activity Lounge" },
  { src: gallery4, alt: "University Sports Complex" },
];

function CampusExperience() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto">
          <SectionHeader
            label="Campus Experience"
            text="Explore Our Vibrant Campus Life"
            colorWord="Vibrant"
          />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4">
            Take a closer look at our world-class facilities, modern
            infrastructure, and the dynamic environment that awaits you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 relative bg-slate-900 rounded-[24px] overflow-hidden group shadow-lg min-h-[350px] md:min-h-[450px] flex items-center justify-center">
            {!isVideoPlaying ? (
              <>
                <Image
                  src={campusBg}
                  alt="Campus Tour Video Thumbnail"
                  fill
                  className="object-cover opacity-80 group-hover:scale-102 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 z-10 text-white">
                  <span className="text-xs font-bold tracking-widest text-[#ff6f4b] uppercase bg-white/10 backdrop-blur-md px-3 py-1 rounded-md mb-2 inline-block">
                    Video Tour
                  </span>
                  <h3 className="text-xl md:text-2xl font-black">
                    Take a Virtual Campus Tour
                  </h3>
                </div>

                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="w-20 h-20 flex items-center justify-center bg-[#ff6f4b] hover:bg-[#e05e3a] text-white rounded-full transition duration-300 shadow-xl cursor-pointer hover:scale-110 z-10 relative group-hover:ring-4 group-hover:ring-orange-200"
                  aria-label="Play Campus Video"
                >
                  <FiPlay size={32} className="ml-1" />
                </button>
              </>
            ) : (
              <iframe
                className="w-full h-full absolute inset-0 rounded-[24px]"
                src="https://www.youtube.com/embed/9XInD8vC-4E?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden shadow-xs h-[165px] md:h-[212px] group bg-slate-100"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#031b4e]/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <div className="bg-white/20 p-3 rounded-full text-white backdrop-blur-xs">
                    <FiEye size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] rounded-[32px] overflow-hidden mt-4 shadow-md group">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000"
            style={{ backgroundImage: `url(${tourBg.src})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#031b4e]/90 via-[#031b4e]/50 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 max-w-[600px] z-10 text-white">
            <span className="text-xs font-black tracking-widest text-[#ff6f4b] uppercase bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md mb-4">
              Interactive 360°
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 leading-tight">
              Can't Visit in Person?
              <br />
              Explore <span className="text-[#ff6f4b]">Virtual Tour</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Experience our classrooms, laboratories, and beautiful campus
              grounds from the comfort of your home using our immersive
              360-degree tool.
            </p>
            <div>
              <DirectionalButton
                href="/"
                label="Explore Virtual Tour"
                rightIcon={<FiExternalLink size={16} />}
                bgColor="#FF5101"
                flairColor="#125875"
                borderColor="#FF5101"
                textColor="#ffffff"
                textHoverColor="#ffffff"
                shadowHover=""
                size="md"
                className="font-semibold rounded-sm px-8 py-5.5"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CampusExperience;
