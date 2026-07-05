"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight, FiCalendar, FiUser } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";

// মক ব্লগ ইমেজ (আপনার public/images/ পাথে সেট করে নেবেন)
import blogImg1 from "@/../public/images/campus/gallery1.jpg";
import blogImg2 from "@/../public/images/campus/gallery2.jpg";
import blogImg3 from "@/../public/images/campus/gallery3.jpg";

const blogData = [
  {
    id: 1,
    image: blogImg1,
    date: "June 28, 2026",
    author: "Dr. Sarah Alami",
    category: "Technology",
    title: "The Future of AI in Modern Higher Education Landscapes",
    desc: "Explore how generative AI tools and automated grading systems are reshaping classrooms, empowering tutors, and altering student learning habits.",
  },
  {
    id: 2,
    image: blogImg2,
    date: "June 15, 2026",
    author: "Prof. Ahmed Rayan",
    category: "Career",
    title: "7 Essential Skills Tech Graduates Need to Master in 2026",
    desc: "From advanced prompt engineering to decentralized architecture, discover the core technical skills that top multinational employers are searching for.",
  },
  {
    id: 3,
    image: blogImg3,
    date: "May 22, 2026",
    author: "Elena Rostova",
    category: "Research",
    title: "Choosing the Right Research Topic: A Graduate's Manual",
    desc: "A comprehensive, step-by-step framework to identify breakthrough research questions, manage dynamic literature reviews, and construct bulletproof methodologies.",
  },
];

function BlogSection() {
  // slice(0, 3) দিয়ে কড়াভাবে ৩টি কার্ড ফিক্স করা হয়েছে
  const limitedBlogs = blogData.slice(0, 3);

  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
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
            <p className="text-slate-500 text-sm max-w-[600px] mt-4 leading-relaxed">
              Explore professional insights, research breakthroughs, academic tips, and stories directly written by our expert faculty and bright scholars.
            </p>
          </div>

          {/* Right Side View All Button */}
          <div className="shrink-0 self-end sm:self-auto">
            <DirectionalButton
              href="/blog"
              label="View All Blogs"
              rightIcon={<FiArrowRight size={16} />}
              bgColor="transparent"
              flairColor="#0d3d4f"
              borderColor="var(--text-primary)"
              textColor="var(--text-primary)"
              textHoverColor="#ffffff"
              shadowHover=""
              size="md"
              className="font-semibold rounded-lg"
            />
          </div>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-[24px] border border-slate-100 shadow-[0_15px_40px_rgba(3,27,78,0.01)] overflow-hidden flex flex-col group h-full transition-all duration-300 hover:shadow-[0_20px_45px_rgba(3,27,78,0.04)] hover:-translate-y-1"
            >
              {/* Blog Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                {/* Category Badge */}
                <span className="absolute top-4 left-4 z-10 bg-[#ff6f4b] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm">
                  {blog.category}
                </span>
                
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Meta Tags: Date & Author */}
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-3">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="text-[#ff6f4b]" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiUser className="text-[#ff6f4b]" />
                      <span className="truncate max-w-[120px]">{blog.author}</span>
                    </div>
                  </div>

                  {/* Blog Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-[#031b4e] mb-3 leading-snug transition-colors duration-300 group-hover:text-[#ff6f4b] line-clamp-2 cursor-pointer">
                    <a href={`/blog/${blog.id}`}>{blog.title}</a>
                  </h3>

                  {/* Blog Description */}
                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed line-clamp-3 mb-6">
                    {blog.desc}
                  </p>
                </div>

                {/* Read More Link Footer */}
                <div className="border-t border-slate-50 pt-4 mt-auto">
                  <a
                    href={`/blog/${blog.id}`}
                    className="text-xs font-bold text-[#031b4e] hover:text-[#ff6f4b] flex items-center gap-1 transition-colors duration-200"
                  >
                    Read Full Article <FiArrowRight className="text-[#ff6f4b] transition-transform group-hover:translate-x-0.5" />
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