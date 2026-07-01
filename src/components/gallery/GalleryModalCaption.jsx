"use client";

import Image from "next/image";

/**
 * Bottom overlay for GalleryModal — title, description, meta row,
 * prev/next album nav, thumbnail strip, and the desktop keyboard hint.
 * Rendered as an absolute overlay by the parent (not a layout-height
 * consumer), so it floats over the photo instead of shrinking it.
 */
export default function GalleryModalCaption({
  album,
  albumIndex,
  allAlbums,
  photos,
  photoIndex,
  onGoToPhoto,
  onPrevAlbum,
  onNextAlbum,
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 pt-10 sm:pt-14 pb-4 bg-gradient-to-t from-[rgba(8,12,20,0.98)] via-[rgba(8,12,20,0.85)] to-transparent flex flex-col gap-3">
      <div>
        <h2 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-1.5">
          {album.title}
        </h2>
        <p className="hidden sm:block text-[13px] text-white/50 leading-relaxed mb-2.5 max-w-2xl">
          {album.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <MetaItem label={album.date}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </MetaItem>
          <MetaItem label={album.location}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </MetaItem>
          <MetaItem label={`${album.photoCount} Photos total`}>
            <svg
              width="13"
              height="13"
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
          </MetaItem>
        </div>
      </div>

      {/* ── Switch to a different album ── */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/10">
        <button
          onClick={onPrevAlbum}
          className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Previous Album
        </button>
        <span className="text-[11px] text-white/30 tracking-wide">
          Album {albumIndex + 1} of {allAlbums.length}
        </span>
        <button
          onClick={onNextAlbum}
          className="flex items-center gap-1.5 text-xs font-medium text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Next Album
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Thumbnail strip ── */}
      <div className="flex gap-2 overflow-x-auto pt-1 pb-0.5 scrollbar-none">
        {photos.map((src, i) => (
          <button
            key={src + i}
            onClick={() => onGoToPhoto(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === photoIndex}
            className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-sm overflow-hidden border-2 transition-colors duration-200 cursor-pointer ${
              i === photoIndex
                ? "border-primary"
                : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Keyboard hint — desktop only */}
      <div className="hidden sm:flex justify-center gap-5 pt-1">
        {["← → switch photo", "ESC close", "pinch / double-tap to zoom"].map(
          (hint) => (
            <span
              key={hint}
              className="text-[10px] tracking-wide text-white/20"
            >
              {hint}
            </span>
          ),
        )}
      </div>
    </div>
  );
}

function MetaItem({ children, label }) {
  return (
    <span className="flex items-center gap-1.5 text-[12px] font-medium text-white/45">
      {children}
      {label}
    </span>
  );
}
