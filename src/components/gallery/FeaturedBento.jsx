"use client";
import GalleryCard from "./GalleryCard";

/**
 * Desktop layout:
 * ┌─────────────────────┬──────────┬──────────┐  ← row 1
 * │                     │  card 2  │  card 3  │
 * │       hero          ├──────────┼──────────┤
 * │   (spans 2 rows)    │  card 4  │  card 5  │  ← row 2
 * └─────────────────────┴──────────┴──────────┘
 */
export default function FeaturedBento({ albums, onOpen }) {
  const [hero, c2, c3, c4, c5] = albums;

  return (
    <>
      {/* ── Desktop ── */}
      <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-3.5 h-[460px]">
        {/* Hero spans both rows */}
        <div className="row-span-2">
          <GalleryCard album={hero} onOpen={onOpen} />
        </div>
        <div><GalleryCard album={c2} onOpen={onOpen} /></div>
        <div><GalleryCard album={c3} onOpen={onOpen} /></div>
        <div><GalleryCard album={c4} onOpen={onOpen} /></div>
        <div><GalleryCard album={c5} onOpen={onOpen} /></div>
      </div>

      {/* ── Mobile ── */}
      <div className="flex flex-col gap-3 md:hidden">
        <div className="h-[260px]">
          <GalleryCard album={hero} onOpen={onOpen} />
        </div>
        <div className="grid grid-cols-2 gap-3 h-[160px]">
          <GalleryCard album={c2} onOpen={onOpen} />
          <GalleryCard album={c3} onOpen={onOpen} />
        </div>
        <div className="grid grid-cols-2 gap-3 h-[160px]">
          <GalleryCard album={c4} onOpen={onOpen} />
          <GalleryCard album={c5} onOpen={onOpen} />
        </div>
      </div>
    </>
  );
}