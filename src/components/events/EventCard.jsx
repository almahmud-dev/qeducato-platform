// Single event card
// Hover: image zoom, card body bg -> secondary
// Image click -> event details page

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"
import Container from "../ui/Container";

export default function EventCard({ event }) {
  const { slug, title, excerpt, date, time, location, image } = event;

  const dateParts = date.split(",");
  const dateLine1 = dateParts[0]?.trim() + ",";
  const dateLine2 = dateParts[1]?.trim();

  return (
    <Container size="xl" noPadding>
        <div className="group rounded-md overflow-hidden border border-[var(--border)] bg-[var(--background)] transition-shadow duration-300 hover:shadow-xl">
      {/* Image — click korle details page e jabe, hover e zoom */}
      <Link
        href={`/events/${slug}`}
        className="block relative overflow-hidden aspect-4/3"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Date badge — image er bottom-left e half overlap */}
        <div className="absolute bottom-0 left-6 translate-y-1/2 bg-primary text-white px-4 py-2 rounded-sm text-center leading-snug z-10 min-w-20">
          <span className="PeraThree font-bold block">{dateLine1}</span>
          <span className="PeraThree font-bold block">{dateLine2}</span>
        </div>
      </Link>

      {/* Card body — hover e bg secondary, text white */}
      <div className="p-6 pt-8 transition-colors duration-300 bg-[var(--surface)] group-hover:bg-secondary">
        <h3 className="headingFive text-foreground group-hover:text-white mb-3 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        <p className="PeraThree text-muted group-hover:text-white mb-5 transition-colors duration-300 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="PeraThree text-muted group-hover:text-white/70 transition-colors duration-300">
            {time}
          </span>

          <Link
            href={`/events/${slug}`}
            className="PeraThree font-semibold flex items-center gap-1 transition-colors duration-300 text-primary group-hover:text-white"
          >
            {location}
            <FiArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
    </Container>
  );
}
