"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";
import { blogData } from "@/helper/home/bloghome";

gsap.registerPlugin(ScrollTrigger);

function BlogSection() {
  const sectionRef = useRef(null);

  // slice(0, 3) দিয়ে কড়াভাবে ৩টি কার্ড ফিক্স করা হয়েছে
  const limitedBlogs = blogData.slice(0, 3);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".blog-card", { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".blog-grid",
            start: "top 85%",
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
      className="bg-background py-16 md:py-24 overflow-hidden"
    >
      <Container className="flex flex-col gap-12">
        {/* Top Header Layout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <SectionHeader
              label="Latest Blog"
              text="Stay Updated With Our Latest Blogs"
              colorWord="Blogs"
              className="text-left"
            />
            <p className="text-muted text-sm max-w-[600px] mt-4 leading-relaxed">
              Explore professional insights, research breakthroughs, academic
              tips, and stories directly written by our expert faculty and
              bright scholars.
            </p>
          </div>

          <div className="shrink-0 self-end sm:self-auto">
            <DirectionalButton
              href="/blog"
              label="View All Blogs"
              rightIcon={<FiArrowRight size={16} aria-hidden="true" />}
              bgColor="transparent"
              flairColor="var(--color-secondary)"
              borderColor="var(--color-primary)"
              textColor="var(--color-primary)"
              textHoverColor="var(--color-background)"
              shadowHover=""
              size="md"
              className="font-semibold rounded-sm py-5.5 px-8"
            />
          </div>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedBlogs.map((blog) => (
            <article
              key={blog.id}
              className="blog-card bg-background rounded-[24px] border border-border shadow-[0_15px_40px_rgba(3,27,78,0.01)] overflow-hidden flex flex-col group h-full transition-all duration-300 hover:shadow-[0_20px_45px_rgba(3,27,78,0.04)] hover:-translate-y-1"
            >
              {/* Blog Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface">
                <span className="absolute top-4 left-4 z-10 bg-primary text-background text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {blog.category}
                </span>

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Meta Tags: Date & Author */}
                  <div className="flex items-center gap-4 text-xs text-muted font-medium mb-3">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="text-primary" aria-hidden="true" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiUser className="text-primary" aria-hidden="true" />
                      <span className="truncate max-w-[120px]">
                        {blog.author}
                      </span>
                    </div>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-foreground mb-3 leading-snug transition-colors duration-300 group-hover:text-primary line-clamp-2">
                    <a href={`/blog/${blog.id}`}>{blog.title}</a>
                  </h3>

                  {/* Blog Description */}
                  <p className="text-muted/80 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-6">
                    {blog.desc}
                  </p>
                </div>

                {/* Read More Link Footer */}
                <div className="border-t border-border/60 pt-4 mt-auto">
                  <a
                    href={`/blog/${blog.id}`}
                    className="text-xs font-bold text-foreground hover:text-primary flex items-center gap-1 transition-colors duration-200"
                  >
                    Read Full Article{" "}
                    <FiArrowRight
                      className="text-primary transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default BlogSection;
