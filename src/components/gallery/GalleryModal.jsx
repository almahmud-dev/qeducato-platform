// GalleryModal.jsx — summary:

// 1. Fill-image collapse fix:
//    - Swiper-এ observer, observeParents, resizeObserver props add
//    - onSwiper + album change effect-e requestAnimationFrame diye swiper.update() force call
//    - zoom-container er vitore alada absolute inset-0 wrapper div (Image fill er jonno dimension)

// 2. Layout restructure (image chuto dekhano fixed):
//    - Outer container flex-col theke plain relative kora hoyeche
//    - Photo stage ekhn absolute inset-0 (puru screen, top bar/caption ar height kata jabe na image er)
//    - Top bar এখন absolute top-0 (gradient overlay, photo- r upore float kore)
//    - Caption panel deffernet component GalleryModalCaption.jsx e move kora hoyeche absolute bottom-0 diye photo-r top overlay

// 3. Mobile gap fix:
//    - Image className: object-cover sm:object-contain
//      (mobile-e crop kore screen borai, sm+ e puru image contain kore dekhai)

// 4. Extra:
//    - ESC key diye modal close korar keydown listener add
//    - Share/Download icon button top bar-e add (IconButton component)
//    - File split: caption/meta/thumbnails/keyboard-hint অংশ GalleryModalCaption.jsx e defferent
"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Zoom, A11y } from "swiper/modules";

import GalleryModalCaption from "./GalleryModalCaption";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/zoom";

export default function GalleryModal({
  isOpen,
  album,
  allAlbums,
  albumIndex,
  onClose,
  onNextAlbum,
  onPrevAlbum,
}) {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const photoSwiperRef = useRef(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Focus close button on open (a11y)
  useEffect(() => {
    if (isOpen) closeBtnRef.current?.focus();
  }, [isOpen]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Reset photo index whenever the album changes, and force Swiper to
  // re-measure its container. This is the key fix for the "image not
  // filling" bug: Swiper caches slide height on init/update, and if the
  // parent flex box hadn't finished laying out yet, fill-images collapse.
  useEffect(() => {
    setPhotoIndex(0);
    const swiper = photoSwiperRef.current;
    if (!swiper) return;
    swiper.slideTo(0, 0);
    // Re-measure on next two frames (covers late layout + image decode)
    requestAnimationFrame(() => {
      swiper.update();
      requestAnimationFrame(() => swiper.update());
    });
  }, [album]);

  // Also re-measure whenever the modal opens or the viewport resizes,
  // since Swiper only auto-observes if explicitly told to.
  useEffect(() => {
    if (!isOpen) return;
    const swiper = photoSwiperRef.current;
    const measure = () => swiper?.update();
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isOpen]);

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen || !album) return null;

  const photos = album.images?.length ? album.images : [album.image];
  const isFirstPhoto = photoIndex === 0;
  const isLastPhoto = photoIndex === photos.length - 1;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${album.title}`}
      // Plain relative box (not flex-col) — the photo stage below is
      // absolutely positioned to inset-0, i.e. TRUE full-screen. The top
      // bar and bottom caption are separate absolute overlays layered on
      // top of it, so neither one steals height from the image anymore.
      className="fixed inset-0 z-9999 h-[100dvh] bg-[rgba(8,12,20,0.97)] backdrop-blur-2xl animate-[fadeIn_0.25s_ease]"
    >
      {/* ── Top bar (floats over the photo) ── */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-b from-[rgba(8,12,20,0.85)] to-transparent">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-white/40 shrink-0">
            {photoIndex + 1} / {photos.length}
          </span>
          <span className="text-sm font-medium text-white/70 truncate hidden sm:inline">
            {album.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IconButton label="Share">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
            </svg>
          </IconButton>
          <IconButton label="Download">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 3v12M7 10l5 5 5-5" />
              <path d="M4 19h16" />
            </svg>
          </IconButton>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close photo viewer"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 bg-white/[0.07] border border-white/10 hover:bg-white/13 hover:text-white transition-colors duration-200 cursor-pointer shrink-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Photo Swiper — browses THIS album's photos ── */}
      {/* absolute inset-0 = truly full-screen. GalleryModalCaption is a
          separate absolute overlay layered ON TOP of this, not a sibling
          that shares/steals height — that's what was squeezing the image
          down before. Swiper now gets the ENTIRE viewport height, so a
          wide image renders at its real max size. */}
      <div className="absolute inset-0 w-full h-full">
        <Swiper
          modules={[Navigation, Keyboard, Zoom, A11y]}
          onSwiper={(s) => {
            photoSwiperRef.current = s;
            requestAnimationFrame(() => s.update());
          }}
          observer
          observeParents
          resizeObserver
          slidesPerView={1}
          zoom={{ maxRatio: 3, minRatio: 1 }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          navigation={{ prevEl: ".gm-photo-prev", nextEl: ".gm-photo-next" }}
          a11y={{
            prevSlideMessage: "Previous photo",
            nextSlideMessage: "Next photo",
            slideLabelMessage: "{{index}} of {{slidesLength}}",
          }}
          onSlideChange={(s) => setPhotoIndex(s.activeIndex)}
          className="h-full! w-full!"
        >
          {photos.map((src, i) => (
            <SwiperSlide
              key={src + i}
              className="h-full! flex! items-center justify-center"
            >
              {/* swiper-zoom-container's default CSS is display:flex, which
                  is fine for the outer wrapper, but the fill-image itself
                  needs an absolutely-positioned block ancestor with real
                  dimensions — hence the inner absolute inset-0 div. */}
              <div className="swiper-zoom-container relative w-full h-full">
                <div className="absolute inset-0">
                  <Image
                    src={src}
                    alt={`${album.title} — photo ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover sm:object-contain select-none"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                    draggable={false}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev / Next photo (within album) */}
        <button
          className="gm-photo-prev absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 border border-white/15 backdrop-blur-md hover:bg-primary hover:border-primary hover:shadow-[0_4px_16px_rgba(255,107,53,0.4)] transition-colors duration-200 cursor-pointer disabled:opacity-20 disabled:pointer-events-none"
          aria-label="Previous photo"
          disabled={isFirstPhoto && photos.length <= 1}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="gm-photo-next absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center text-white bg-white/10 border border-white/15 backdrop-blur-md hover:bg-primary hover:border-primary hover:shadow-[0_4px_16px_rgba(255,107,53,0.4)] transition-colors duration-200 cursor-pointer disabled:opacity-20 disabled:pointer-events-none"
          aria-label="Next photo"
          disabled={isLastPhoto && photos.length <= 1}
        >
          <svg
            width="19"
            height="19"
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

      <GalleryModalCaption
        album={album}
        albumIndex={albumIndex}
        allAlbums={allAlbums}
        photos={photos}
        photoIndex={photoIndex}
        onGoToPhoto={(i) => photoSwiperRef.current?.slideTo(i)}
        onPrevAlbum={onPrevAlbum}
        onNextAlbum={onNextAlbum}
      />
    </div>
  );
}

function IconButton({ children, label }) {
  return (
    <button
      aria-label={label}
      className="w-9 h-9 rounded-xl flex items-center justify-center text-white/70 bg-white/[0.07] border border-white/10 hover:bg-white/13 hover:text-white transition-colors duration-200 cursor-pointer shrink-0"
    >
      {children}
    </button>
  );
}
