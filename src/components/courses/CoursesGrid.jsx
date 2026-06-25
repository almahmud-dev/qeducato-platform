"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { coursesData } from "@/helper/courses/coursesData";
import Container from "../ui/Container";

const ITEMS_PER_PAGE = 6;

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export default function CoursesGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");

  const getSortedData = () => {
    const data = [...coursesData];
    if (sortOption === "a-z") return data.sort((a, b) => a.title.localeCompare(b.title));
    if (sortOption === "z-a") return data.sort((a, b) => b.title.localeCompare(a.title));
    return data;
  };

  const sortedData = getSortedData();
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCourses = sortedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="py-16">
      <Container>

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <p className="text-sm" style={{ color: "#777" }}>
            Showing {startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, sortedData.length)} of {sortedData.length} results
          </p>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 text-sm px-3 py-2 outline-none cursor-pointer"
            style={{ color: "#777" }}
          >
            <option value="default">Default sorting</option>
            <option value="a-z">Sort: A → Z</option>
            <option value="z-a">Sort: Z → A</option>
          </select>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="group border border-gray-200 overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute bottom-3 right-3 bg-orange-500 text-white text-sm px-4 py-1.5 flex items-center gap-1">
                  {course.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3
                  className="text-2xl font-semibold mb-2 transition-colors duration-300 group-hover:text-gray-800"
                
                >
                  {course.title}
                </h3>
                <p
                  className="text-sm mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-500"
                  style={{ color: "#777" }}
                >
                  {course.description}
                </p>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-4">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-orange-500 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200"
                  >
                    Read More <FaArrowRight size={12} />
                  </Link>

                  <span
                    style={{ color: "#777" }}
                    className="group-hover:text-gray-400 transition-colors duration-300"
                  >
                    <BookIcon />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 disabled:opacity-40 transition"
          >
            <FaAngleDoubleLeft size={12} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-9 h-9 rounded-full text-sm font-medium transition ${
                currentPage === page
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-orange-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 disabled:opacity-40 transition"
          >
            <FaAngleDoubleRight size={12} />
          </button>
        </div>

      </Container>
    </section>
  );
}