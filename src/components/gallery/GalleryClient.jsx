"use client";

import { useEffect, useState, useMemo } from "react";
import Container from "@/components/ui/Container";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import FeaturedBento from "@/components/gallery/FeaturedBento";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryModal from "@/components/gallery/GalleryModal";
import { useGalleryModal } from "@/hooks/useGalleryModal";

export default function GalleryClient({ categories, albums, initialSlug }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const {
    isOpen,
    activeAlbum,
    albumIndex,
    allAlbums,
    openModal,
    closeModal,
    goNextAlbum,
    goPrevAlbum,
  } = useGalleryModal();
  // Direct-link / refresh entry point: if we landed on /gallery/[slug]
  // (server-rendered), open the modal for that album on mount. Uses the
  // full `albums` list (not `filtered`) since category-filter state
  // hasn't been established yet at this point.
  useEffect(() => {
    if (!initialSlug) return;
    const album = albums.find((a) => a.slug === initialSlug);
    if (album) openModal(album, albums);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSlug]);

  // Keep the URL bar in sync with modal state — WITHOUT triggering a
  // route navigation/remount. Covers open, close, and next/prev album
  // (all of which are pure client-state changes from useGalleryModal).
  useEffect(() => {
    const target =
      isOpen && activeAlbum ? `/gallery/${activeAlbum.slug}` : "/gallery";
    window.history.replaceState(null, "", target);
  }, [isOpen, activeAlbum]);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? albums
        : albums.filter((a) => a.category === activeCategory),
    [activeCategory, albums],
  );

  const featured = useMemo(
    () => filtered.filter((a) => a.featured).slice(0, 5),
    [filtered],
  );
  const rest = useMemo(() => filtered.filter((a) => !a.featured), [filtered]);
  const totalPhotos = filtered.reduce((sum, a) => sum + a.photoCount, 0);

  const handleOpen = (album) => openModal(album, filtered);

  return (
    <>
      <main className="min-h-screen bg-white pt-14 sm:pt-16 lg:pt-20">
        <Container size="xl">
          {/* ── Page Header ── */}
          <header className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#ff6b35] mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#ff6b35]"
                aria-hidden="true"
              />
              Campus Gallery
            </div>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold text-[#0f172a] leading-[1.15] tracking-tight mb-4">
              Life at{" "}
              <em className="italic text-[#ff6b35] not-italic">Qeducato</em>
            </h1>
            <p className="text-base text-[#64748b] leading-relaxed">
              {totalPhotos.toLocaleString()} photographs. Every moment, every
              milestone — archived with care.
            </p>
          </header>

          {/* ── Filter ── */}
          <div className="mb-12 sm:mb-14">
            <GalleryFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* ── Featured Bento ── */}
          {featured.length >= 3 && (
            <section className="mb-14" aria-label="Featured albums">
              <SectionLabel>Featured Albums</SectionLabel>
              <FeaturedBento albums={featured} onOpen={handleOpen} />
            </section>
          )}

          {/* ── More Albums grid ── */}
          {rest.length > 0 && (
            <section className="mb-14" aria-label="More albums">
              {featured.length >= 3 && <SectionLabel>More Albums</SectionLabel>}
              <GalleryGrid albums={rest} onOpen={handleOpen} />
            </section>
          )}

          {/* ── Filtered with no featured split ── */}
          {filtered.length > 0 && featured.length < 3 && (
            <section className="mb-14" aria-label="Gallery albums">
              <GalleryGrid albums={filtered} onOpen={handleOpen} />
            </section>
          )}

          {/* ── Empty state ── */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center text-center py-20 px-5 text-[#64748b]">
              <div className="w-18 h-18 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#94a3b8] mb-5">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <h3 className="font-playfair text-xl font-bold text-[#0f172a] mb-2">
                No albums in this category yet
              </h3>
              <p className="text-sm mb-6">
                Check back soon — more memories are being added.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#ff6b35] text-white text-sm font-semibold hover:bg-[#f45a22] transition-colors duration-200 cursor-pointer"
              >
                View all albums
              </button>
            </div>
          )}
        </Container>
      </main>

      {/* ── Modal ── */}
      <GalleryModal
        isOpen={isOpen}
        album={activeAlbum}
        allAlbums={allAlbums}
        albumIndex={albumIndex}
        onClose={closeModal}
        onNextAlbum={goNextAlbum}
        onPrevAlbum={goPrevAlbum}
      />
    </>
  );
}

// ── Small reusable section divider label ──
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#64748b]">
        {children}
      </span>
      <span className="flex-1 h-px bg-[#e2e8f0]" aria-hidden="true" />
    </div>
  );
}
