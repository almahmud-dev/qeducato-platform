"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

import CourseCard from "../courses/CourseCard";
import { allCoursesDetailsData } from "@/helper/courses/allCoursesDetailsData";

const dummyCourses = allCoursesDetailsData

function CoursesSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#f4f9fc] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🎓</span>
              <span className="text-[#ff6f4b] font-bold text-sm tracking-wider uppercase">
                Our Courses
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#104c64]">
              Graduate Programs
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              ref={prevRef}
              className="w-12 h-12 flex items-center justify-center bg-[#ff6f4b] hover:bg-[#e05e3a] text-white text-xl rounded transition shadow-sm"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 flex items-center justify-center bg-[#ff6f4b] hover:bg-[#e05e3a] text-white text-xl rounded transition shadow-sm"
              aria-label="Next slide"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="mySwiper overflow-visible!"
        >
          {dummyCourses.map((course) => (
            <SwiperSlide key={course.slug} className="py-2">
              <CourseCard course={course} view="grid" />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default CoursesSection;