"use client";

import { useState } from "react";
import EventCard from "./EventCard";
import Pagination from "./Pagination";
import { allEventsData, EVENTS_PER_PAGE } from "@/helper/events/allEventsData";

const TOTAL_PAGES = Math.ceil(allEventsData.length / EVENTS_PER_PAGE);

export default function EventsGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  // Current page er events slice kore nao
  const start = (currentPage - 1) * EVENTS_PER_PAGE;
  const currentEvents = allEventsData.slice(start, start + EVENTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentEvents.map((event, index) => (
            <EventCard
              key={event.slug}
              event={event}
              priority={index === 0 && currentPage === 1}
            />
          ))}
        </div>

        <Pagination
          totalPages={TOTAL_PAGES}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}