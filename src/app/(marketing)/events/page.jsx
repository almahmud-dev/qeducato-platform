// app/events/page.jsx

import PageHero, { heroDataMap } from "@/components/common/PageHero";
import EventsGrid from "@/components/events/EventsGrid";
import { metaDataMap } from "@/lib/metadata";

export const metadata = metaDataMap.events;

export default function Events() {
  return (
    <>
      <PageHero {...heroDataMap.events} />
      <EventsGrid />
    </>
  );
}