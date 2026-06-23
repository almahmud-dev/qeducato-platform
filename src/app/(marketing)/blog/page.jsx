import PageHero, { heroDataMap } from "@/components/common/PageHero";
import { metaDataMap } from "@/lib/metadata";
export const metadata = metaDataMap.blog;
function Blog() {
  return (
    <>
      <PageHero {...heroDataMap.blog} />
    </>
  );
}

export default Blog;
