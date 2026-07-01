import PageHero, { heroDataMap } from "@/components/common/PageHero";
import GalleryClient from "@/components/gallery/GalleryClient";
import { galleryCategories, galleryData } from "@/helper/gallery/galleryData";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.gallery;

export default function Gallery() {
  return (
    <>
      <PageHero {...heroDataMap.gallery} />
      <GalleryClient
      categories={galleryCategories}
      albums={galleryData}
    />
    </>
  );
}