"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiStar, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import { testimonialsData } from "@/helper/about/aboutSectionsData";

import "swiper/css";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSlider() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-secondary relative overflow-hidden"
    >
      <div className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-white/5" />
      <div className="absolute -right-16 bottom-0 w-64 h-64 rounded-full bg-primary/10" />

      <Container size="lg" className="relative">
        <div className="text-center mb-14">
          <p className="label text-primary mb-3">Testimonials</p>
          <h2 className="headingTwo text-white">
            What Our <span className="text-primary">Students</span> Say
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={32}
          loop
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="max-w-2xl mx-auto text-center px-4">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar
                      key={i}
                      size={18}
                      className={
                        i < item.rating
                          ? "fill-primary text-primary"
                          : "text-white/30"
                      }
                    />
                  ))}
                </div>
                <p className="lead text-white/90 mb-8">"{item.quote}"</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="PeraTwo text-white font-semibold">
                      {item.name}
                    </p>
                    <p className="caption text-white/60">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-12">
          <button
            aria-label="Previous testimonial"
            className="testimonial-prev w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer"
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            aria-label="Next testimonial"
            className="testimonial-next w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer"
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}