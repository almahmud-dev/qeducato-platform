// components/events/eventDetails/EventDetailsHero.jsx
// PageHero e breadcrumb prop nai — heroDataMap events entry use korbo
// title ta dynamically override korbo

import PageHero, { heroDataMap } from "@/components/common/PageHero";

export default function EventDetailsHero({ title }) {
  const heroData = {
    ...heroDataMap.events,
    title: title || "Event Details",
  };

  return <PageHero {...heroData} />;
}