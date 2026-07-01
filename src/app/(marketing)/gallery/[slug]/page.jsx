import { notFound } from "next/navigation";
import PageHero, { heroDataMap } from "@/components/common/PageHero";
import GalleryClient from "@/components/gallery/GalleryClient";
import {
  galleryCategories,
  galleryData,
  getAlbumBySlug,
  generateGallerySlugs,
} from "@/helper/gallery/galleryData";

export function generateStaticParams() {
  return generateGallerySlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);
  if (!album) return {};

  return {
    title: `${album.title} | Qeducato Gallery`,
    description: album.description,
    openGraph: {
      title: album.title,
      description: album.description,
      images: album.image ? [{ url: album.image }] : undefined,
    },
  };
}

export default async function GalleryAlbumPage({ params }) {
  const { slug } = await params;
  const album = getAlbumBySlug(slug);

  if (!album) notFound();

  return (
    <>
      <PageHero {...heroDataMap.gallery} />
      <GalleryClient
        categories={galleryCategories}
        albums={galleryData}
        initialSlug={slug}
      />
    </>
  );
}