"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlay, FiLinkedin } from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { campusGallery, alumniData } from "@/helper/about/aboutSectionsData";

gsap.registerPlugin(ScrollTrigger);

export default function CampusAlumniSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".campus-tile",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".campus-gallery",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".alumni-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".alumni-grid",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-28 bg-background">
      <Container size="xl">
        <SectionHeader
          label="Campus Life"
          text="Explore Our Vibrant Campus Tour"
          colorWord="Campus"
        />

        <div className="campus-gallery grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div className="campus-tile relative col-span-2 row-span-2 rounded-2xl overflow-hidden aspect-square lg:aspect-auto group cursor-pointer">
            <Image
              src={campusGallery[0].image}
              alt={campusGallery[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center">
                <FiPlay size={22} />
              </span>
            </div>
          </div>

          {campusGallery.slice(1).map((item) => (
            <div
              key={item.id}
              className="campus-tile relative rounded-2xl overflow-hidden aspect-square"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <SectionHeader
          label="Our Legacy"
          text="Notable Alumni"
          colorWord="Alumni"
        />

        <div className="alumni-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumniData.map((alumnus) => (
            <div
              key={alumnus.id}
              className="alumni-card group bg-surface rounded-2xl p-6 text-center border border-border hover:border-primary/40 transition-colors"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={alumnus.image}
                  alt={alumnus.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <h3 className="headingSix text-foreground mb-1">
                {alumnus.name}
              </h3>
              <p className="PeraThree text-primary font-semibold mb-1">
                {alumnus.role}, {alumnus.company}
              </p>
              <p className="caption text-muted mb-4">{alumnus.year}</p>
              <span className="inline-flex w-9 h-9 rounded-full bg-secondary/10 text-secondary items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                <FiLinkedin size={16} />
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}