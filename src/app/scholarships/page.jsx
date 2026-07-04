import PageHero, { heroDataMap } from '@/components/common/PageHero'
import { metaDataMap } from '@/lib/metadata'
export const metadata = metaDataMap.scholarships;

function Scholarships() {
  return (
    <PageHero {...heroDataMap.scholarships } />
  )
}

export default Scholarships