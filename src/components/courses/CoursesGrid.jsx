"use client";

import CourseCard from "./CourseCard";
import ViewToggle from "./ViewToggle";
import SortDropdown from "./SortDropdown";
// import Pagination from "@/components/common/Pagination"; // tumar existing Pagination.jsx
import useCoursesFilter from "@/hooks/courses/useCoursesFilter";
import { useState } from "react";
import Pagination from "../common/Pagination";

export default function CoursesGrid({ courses }) {
  const [view, setView] = useState("grid");
  const {
    sortBy,
    changeSort,
    currentPage,
    totalPages,
    paginatedCourses,
    changePage,
  } = useCoursesFilter(courses);

  return (
    <section aria-labelledby="courses-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-secondary/70">All Courses</p>
          <h2
            id="courses-heading"
            className="mt-1 font-serif text-3xl font-bold text-foreground sm:text-4xl"
          >
            Explore Our <span className="text-primary">Courses</span>
          </h2>
          <p className="mt-2 text-sm text-foreground/60 sm:text-base">
            Choose from our wide range of industry-focused courses
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ViewToggle view={view} onChange={setView} />
          <SortDropdown value={sortBy} onChange={changeSort} />
        </div>
      </div>

      {/* Grid / List */}
      {paginatedCourses.length === 0 ? (
        <p className="py-16 text-center text-foreground/60">
          No courses found.
        </p>
      ) : (
        <div
          className={
            view === "grid"
              ? "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "mt-8 flex flex-col gap-5"
          }
        >
          {paginatedCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              view={view}
              priority={currentPage === 1 && index === 0}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={changePage}
        />
      )}
    </section>
  );
}