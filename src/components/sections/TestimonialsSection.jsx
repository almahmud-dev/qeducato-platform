"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RiDoubleQuotesR } from "react-icons/ri";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

// Swiper Components এবং Modules (Pagination বাদ দেওয়া হয়েছে)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// মক ইমেজেস
import avatar1 from "@/../public/images/testimonials/avatar1.jpg";
import avatar2 from "@/../public/images/testimonials/avatar2.jpg";
import avatar3 from "@/../public/images/testimonials/avatar3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "B.Sc. in Software Engineering",
    image: avatar1,
    rating: 5,
    quote: "The industry-focused curriculum and top-tier labs completely transformed my learning approach. The career support team didn't just help me build a resume; they landed me an internship at a Fortune 500 company before graduation.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "MBA Graduate",
    image: avatar2,
    rating: 5,
    quote: "Studying here was a life-changing experience. The faculty members are industry leaders who bring real-world case studies into the classroom. The flexible schedule allowed me to manage my full-time startup flawlessly.",
  },
  {
    id: 3,
    name: "Michael Chang",
    role: "M.Sc. in Data Science",
    image: avatar3,
    rating: 5,
    quote: "The global network and collaborative research opportunities gave me exposure I couldn't find anywhere else. Truly a vibrant campus culture committed to excellence and turning innovative ideas into real-world impact.",
  },
];

function TestimonialsSection() {
  const swiperRef = useRef(null);

  return (
    <section className="relative py-16 md:py-24 bg-[#031b4e] overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড গ্লোয়িং ইফেক্ট */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#ff6f4b]/10 rounded-full blur-[150px] pointer-events-none" />

      <Container className="flex flex-col gap-12 relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="flex flex-col items-center text-center max-w-[700px] mx-auto">
          <SectionHeader
            label="Testimonials"
            text="What Our Students Say About Us"
            colorWord="Students"
          />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4">
            Hear directly from our brilliant students and alumni about their academic journeys, campus life, and career breakthroughs.
          </p>
        </div>

        {/* স্লাইডার কন্টেইনার র্যাপার */}
        <div className="relative max-w-4xl mx-auto w-full px-4 mt-4 testimonial-swiper-wrapper">
          
          {/* জায়ান্ট কোটেশন ব্যাকগ্রাউন্ড আইকন */}
          <div className="absolute -top-12 -left-4 text-white/5 pointer-events-none select-none z-0">
            <RiDoubleQuotesR size={140} />
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {testimonials.map((slide) => (
              <SwiperSlide key={slide.id}>
                {/* মেইন প্রিমিয়াম গ্লাস কার্ড */}
                <div className="bg-white/[0.04] backdrop-blur-xl rounded-[32px] border border-white/[0.08] p-8 md:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] flex flex-col md:flex-row gap-8 items-center z-10 relative">
                  
                  {/* স্টুডেন্ট অবতার */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-white/10 shadow-md">
                    <Image
                      src={slide.image}
                      alt={slide.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* রিভিউ টেক্সট */}
                  <div className="flex flex-col flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start items-center gap-1 text-orange-400 mb-3">
                      {[...Array(slide.rating)].map((_, i) => (
                        <FiStar key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-200 text-sm md:text-base leading-relaxed italic mb-6">
                      "{slide.quote}"
                    </p>

                    <div>
                      <h4 className="text-base font-black text-white">{slide.name}</h4>
                      <p className="text-[#ff6f4b] text-xs font-semibold tracking-wide mt-0.5">{slide.role}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* শুধু দুটি কাস্টম অ্যারো বাটন পাশাপাশি সেন্টারে */}
          <div className="flex items-center justify-center gap-4 mt-8 relative z-20">
            
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff6f4b] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md group backdrop-blur-md active:scale-95 shrink-0"
              aria-label="Previous Slide"
            >
              <FiChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#ff6f4b] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md group backdrop-blur-md active:scale-95 shrink-0"
              aria-label="Next Slide"
            >
              <FiChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            
          </div>

        </div>

      </Container>
    </section>
  );
}

export default TestimonialsSection;