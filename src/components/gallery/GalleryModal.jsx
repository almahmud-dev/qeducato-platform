"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function GalleryModal({
  isOpen,
  album,
  allAlbums,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}) {
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => { setZoomed(false); }, [album]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? onNext() : onPrev();
    touchStartX.current = null;
  };

  const handleThumbClick = (i) => {
    const diff = i - activeIndex;
    if (diff > 0) for (let j = 0; j < diff; j++) onNext();
    else if (diff < 0) for (let j = 0; j < Math.abs(diff); j++) onPrev();
  };

  if (!isOpen || !album) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col bg-[rgba(8,12,20,0.96)] backdrop-blur-2xl animate-[fadeIn_0.25s_ease]"
      onClick={(e) => e.target === overlayRef.current && onClose()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery: ${album.title}`}
    >
      {/* Top bar */}
      <div className="flex-none flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-white/40">
            {activeIndex + 1} / {allAlbums.length}
          </span>
          <span className="text-sm font-medium text-white/70 hidden sm:inline">
            {album.title}
          </span>
        </div>
        <div className="flex gap-2">
          {/* Zoom toggle */}
          <button
            onClick={() => setZoomed((z) => !z)}
            aria-label={zoomed ? "Zoom out" : "Zoom in"}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 bg-white/[0.07] border border-white/10 hover:bg-white/[0.13] hover:text-white transition-all duration-200 cursor-pointer"
          >
            {zoomed ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M8 11h6" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
              </svg>
            )}
          </button>
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 bg-white/[0.07] border border-white/10 hover:bg-white/[0.13] hover:text-white transition-all duration-200 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main image stage */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden min-h-0">
        {/* Prev */}
        <button
          onClick={onPrev}
          aria-label="Previous album"
          className="absolute left-3 sm:left-5 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 border border-white/15 backdrop-blur-md hover:bg-[#ff6b35] hover:border-[#ff6b35] hover:shadow-[0_4px_16px_rgba(255,107,53,0.4)] transition-all duration-200 cursor-pointer"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Image */}
        <div
          className={[
            "relative w-full h-full transition-transform duration-400 ease-out",
            zoomed ? "scale-[1.6] cursor-zoom-out" : "cursor-zoom-in",
          ].join(" ")}
          onDoubleClick={() => setZoomed((z) => !z)}
        >
          <Image
            src={album.image}
            alt={album.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          aria-label="Next album"
          className="absolute right-3 sm:right-5 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 border border-white/15 backdrop-blur-md hover:bg-[#ff6b35] hover:border-[#ff6b35] hover:shadow-[0_4px_16px_rgba(255,107,53,0.4)] transition-all duration-200 cursor-pointer"
        >
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Info + thumbnails panel */}
      <div className="flex-none px-4 sm:px-6 pt-4 pb-3 bg-gradient-to-t from-[rgba(8,12,20,0.98)] to-[rgba(8,12,20,0.6)] flex flex-col gap-3">
        {/* Album info */}
        <div>
          <h2 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-1.5">
            {album.title}
          </h2>
          <p className="hidden sm:block text-[13px] text-white/50 leading-relaxed mb-2.5 max-w-2xl">
            {album.description}
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              {
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                ),
                label: album.date,
              },
              {
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
                  </svg>
                ),
                label: album.location,
              },
              {
                icon: (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                  </svg>
                ),
                label: `${album.photoCount} Photos`,
              },
            ].map(({ icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-[12px] font-medium text-white/45">
                {icon}
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none pb-0.5" role="list" aria-label="Album thumbnails">
          {allAlbums.map((a, i) => (
            <button
              key={a.id}
              onClick={() => handleThumbClick(i)}
              aria-label={`Go to ${a.title}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className={[
                "relative shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-200",
                i === activeIndex
                  ? "border-[#ff6b35] opacity-100 shadow-[0_0_0_1px_#ff6b35]"
                  : "border-transparent opacity-50 hover:opacity-80",
              ].join(" ")}
            >
              <Image
                src={a.image}
                alt={a.title}
                fill
                sizes="56px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard hint — hidden on mobile */}
      <div className="hidden sm:flex flex-none justify-center gap-5 px-6 pb-3">
        {["← → navigate", "ESC close", "double-click to zoom"].map((hint) => (
          <span key={hint} className="text-[10px] tracking-wide text-white/20">
            {hint}
          </span>
        ))}
      </div>
    </div>
  );
}