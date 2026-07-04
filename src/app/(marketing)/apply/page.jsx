import ApplicationForm from '@/components/apply/ApplicationForm';
import PageHero, { heroDataMap } from '@/components/common/PageHero'
import { metaDataMap } from '@/lib/metadata'
export const metadata = metaDataMap.apply;
function Apply() {
  return (
    <>
    <PageHero {...heroDataMap.apply } />
    <ApplicationForm />
    </>
  )
}

export default Apply