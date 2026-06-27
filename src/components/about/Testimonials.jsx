"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonialsData } from "@/helper/about/aboutData";
import Container from "../ui/Container";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-medium mb-2">Testimonial</p>
          <h2 className="text-5xl font-bold text-black">What Our Clients Says</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border border-gray-200 p-8">
                <FaQuoteLeft size={32} className="text-orange-400 mb-5" />
                <p className="text-sm leading-relaxed mb-8" style={{ color: "#777" }}>
                  {item.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">{item.name}</p>
                    <p className="text-xs" style={{ color: "#777" }}>{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}