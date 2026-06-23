import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.gallery;

export default function Gallery() {
  return (
    <>
      <PageHero {...heroDataMap.gallery} />
    </>
  );
}