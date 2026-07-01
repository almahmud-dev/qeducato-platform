"use client";
import Image from "next/image";

export default function GalleryCard({ album, onOpen }) {
  return (
    <article
      className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer bg-foreground shadow-sm hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      onClick={() => onOpen(album)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(album)}
      aria-label={`Open ${album.title} gallery — ${album.photoCount} photos`}
    >
      {/* Image zoom on hover */}
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.07]">
        <Image
          src={album.image}
          alt={album.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(15,23,42,0.3)] to-[rgba(15,23,42,0.85)] transition-opacity duration-300 group-hover:opacity-[1.1]" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 transition-transform duration-300 group-hover:-translate-y-1">
        {/* Photo count badge */}
        <span className="self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-white/80 bg-white/10 border border-white/15 backdrop-blur-sm">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          {album.photoCount} Photos
        </span>

        {/* Bottom: title + arrow */}
        <div className="flex items-end justify-between gap-3">
          <div>
            <h3 className="font-playfair text-[1.05rem] sm:text-[1.15rem] font-bold text-white leading-snug">
              {album.title}
            </h3>
          </div>

          {/* Arrow */}
          <div
            aria-hidden="true"
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white bg-white/15 border border-white/25 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:translate-x-0.5 group-hover:shadow-[0_4px_12px_rgba(255,107,53,0.45)]"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
