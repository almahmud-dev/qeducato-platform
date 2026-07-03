"use client";

import { useMemo, useState } from "react";

const PER_PAGE = 6;

// Handles sorting + pagination for the courses grid.
// Kept separate from UI so the grid component stays clean.
export default function useCoursesFilter(courses) {
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedCourses = useMemo(() => {
    const list = [...courses];

    switch (sortBy) {
      case "rating":
        return list.sort((a, b) => b.rating - a.rating);
      case "latest":
        return list.sort((a, b) => b.id - a.id);
      case "price-low":
        return list.sort((a, b) => a.price - b.price);
      case "price-high":
        return list.sort((a, b) => b.price - a.price);
      case "popularity":
        return list.sort((a, b) => b.reviewCount - a.reviewCount);
      default:
        return list;
    }
  }, [courses, sortBy]);

  const totalPages = Math.max(1, Math.ceil(sortedCourses.length / PER_PAGE));

  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * PER_PAGE;
    return sortedCourses.slice(start, start + PER_PAGE);
  }, [sortedCourses, currentPage]);

  const changeSort = (value) => {
    setSortBy(value);
    setCurrentPage(1); // sort change hole page 1 e reset
  };

  const changePage = (page) => {
    setCurrentPage(page);
    // grid er top e smooth scroll, UX er jonno
    document
      .getElementById("courses-heading")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return {
    sortBy,
    changeSort,
    currentPage,
    totalPages,
    paginatedCourses,
    changePage,
  };
}
