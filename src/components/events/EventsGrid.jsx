// Events page er main grid section
// allEventsData loop kore EventCard render korbe

import EventCard from "./EventCard";
import { allEventsData } from "@/helper/events/allEventsData";

export default function EventsGrid() {
  return (
    <section className="py-16 md:py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allEventsData.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
