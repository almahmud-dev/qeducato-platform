"use client";
import GalleryCard from "./GalleryCard";

/**
 * Target bottom row (matches design image):
 *
 * Desktop (4 col):
 * ┌────────┬────────┬────────┬────────┐
 * │ sports │  fest  │cultural│ clubs  │
 * └────────┴────────┴────────┴────────┘
 *
 * All equal height — simple clean 4-col grid.
 * No span tricks that break layout.
 */
export default function GalleryGrid({ albums, onOpen }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
      {albums.map((album) => (
        <div key={album.id} className="h-[200px] sm:h-[220px] md:h-[240px]">
          <GalleryCard album={album} onOpen={onOpen} />
        </div>
      ))}
    </div>
  );
}
