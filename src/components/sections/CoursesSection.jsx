"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import CourseCard from "@/components/courses/CourseCard";
import Pagination from "@/components/ui/Pagination";
import courses from "@/helper/courses/courses";

const sortOptions = [
  "Newest First",
  "Oldest First",
  "Highest Rated",
  "Most Popular",
];

const COURSES_PER_PAGE = 9;

export default function CoursesSection() {
  const [sortBy, setSortBy] = useState("Newest First");
  const [currentPage, setCurrentPage] = useState(1);

  const totalCourses = courses.length;
  const totalPages = Math.ceil(totalCourses / COURSES_PER_PAGE);

  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;

  const currentCourses = courses.slice(startIndex, endIndex);

  const showingFrom = startIndex + 1;
  const showingTo = Math.min(endIndex, totalCourses);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Top Toolbar */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium text-slate-600">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {showingFrom}-{showingTo}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-slate-900">
              {totalCourses}
            </span>{" "}
            results
          </p>

          <div className="relative">
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-12 min-w-[220px] appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm font-medium text-slate-700 outline-none transition duration-300 hover:border-indigo-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            >
              {sortOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentCourses.map((course) => (
            <CourseCard
              key={course.id}
              image={course.image}
              category={course.category}
              title={course.title}
              duration={course.duration}
              level={course.level}
              mode={course.mode}
              rating={course.rating}
              reviews={course.reviews}
              students={course.students}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className="mt-16"
        />
      </div>
    </section>
  );
}