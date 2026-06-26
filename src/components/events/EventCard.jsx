// Single event card
// Hover: image zoom, card body bg -> secondary
// Image click -> event details page

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function EventCard({ event, priority = false }) {
  const { slug, title, excerpt, date, time, location, image } = event;

  const dateParts = date.split(",");
  const dateLine1 = dateParts[0]?.trim() + ",";
  const dateLine2 = dateParts[1]?.trim();

  return (
    <div className="group rounded-md overflow-hidden border border-[var(--border)] bg-[var(--background)] transition-shadow duration-300 hover:shadow-xl">
      {/* Image — click korle details page, hover e zoom */}
      <Link
        href={`/events/${slug}`}
        aria-label={`View details for ${title}`}
        className="block relative aspect-4/3"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Date badge */}
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-6 translate-y-1/2 bg-primary text-white px-4 py-2 text-center leading-snug z-10 min-w-20"
        >
          <span className="PeraThree font-bold block">{dateLine1}</span>
          <span className="PeraThree font-bold block">{dateLine2}</span>
        </div>
      </Link>

      {/* Card body */}
      <div className="p-6 pt-8 transition-colors duration-300 bg-[var(--surface)] group-hover:bg-secondary">
        <h3 className="headingFive text-foreground group-hover:text-white mb-3 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        <p className="PeraThree text-muted group-hover:text-white mb-5 transition-colors duration-300 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-2">
          {/* Date — screen reader er jonno, badge aria-hidden tai ekhane full date */}
          <time
            dateTime={date}
            className="PeraThree text-muted group-hover:text-white/80 transition-colors duration-300"
          >
            {time}
          </time>

          <Link
            href={`/events/${slug}`}
            aria-label={`${location} — Read more about ${title}`}
            className="PeraThree font-semibold flex items-center gap-1 transition-colors duration-300 text-primary group-hover:text-white"
          >
            {location}
            <FiArrowRight
              aria-hidden="true"
              className="w-3.5 h-3.5"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
