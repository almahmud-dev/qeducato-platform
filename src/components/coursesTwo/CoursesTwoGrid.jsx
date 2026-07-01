// components/coursesTwo/CoursesTwoGrid.jsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { coursesTwoData } from "@/helper/coursesTwo/coursesTwoData";
import Container from "../ui/Container";

const ITEMS_PER_PAGE = 6;

const StarRating = ({ rating, max = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: max }, (_, i) => (
      i < rating
        ? <FaStar key={i} size={12} className="text-orange-400" />
        : <FaRegStar key={i} size={12} className="text-orange-300" />
    ))}
  </div>
);

export default function CoursesTwoGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");

  const getSortedData = () => {
    const data = [...coursesTwoData];
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCourses.map((course) => (
            <Link
              key={course.id}
              href={`/coursesTwo/${course.slug}`}
              className="group border border-gray-200 overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-xl block"
            >
              {/* Image + Teacher Overlay */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Teacher info bottom-left */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white shrink-0">
                    <Image
                      src={course.teacher.avatar}
                      alt={course.teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">
                      {course.teacher.name}
                    </p>
                    <p className="text-gray-300 text-xs">{course.teacher.role}</p>
                  </div>
                </div>

                {/* Star rating bottom-right */}
                <div className="absolute bottom-4 right-3">
                  <StarRating rating={course.rating} />
                </div>
              </div>

              {/* Info Row */}
              <div className="grid grid-cols-4 border-b border-gray-100 px-3 py-3 gap-1">
                {[
                  { label: "Age:", value: course.age },
                  { label: "Time:", value: course.time },
                  { label: "Class Size:", value: course.classSize },
                  { label: "Fee:", value: `$${course.fee}`, orange: true },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-orange-500 text-xs font-semibold">{item.label}</span>
                    <span
                      className="text-xs"
                      style={{ color: item.orange ? "#f97316" : "#777" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Body */}
              <div className="px-4 py-4">
                <h3
                  className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-gray-800"
                  style={{ color: "#777" }}
                >
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#777" }}>
                  {course.description}
                </p>
              </div>
            </Link>
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