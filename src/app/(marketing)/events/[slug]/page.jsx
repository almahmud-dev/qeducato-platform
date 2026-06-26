// app/events/[slug]/page.jsx
// Teacher slug page pattern follow kora hoyeche

import { notFound } from "next/navigation";
import { allEventDetailsData } from "@/helper/events/allEventDetailsData";
import EventDetailsHero from "@/components/events/eventDetails/EventDetailsHero";
import EventDetailsContent from "@/components/events/eventDetails/EventDetailsContent";

export async function generateStaticParams() {
  return allEventDetailsData.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = allEventDetailsData.find((e) => e.slug === slug);
  if (!event) return { title: "Event Not Found | Qeducato" };
  return {
    title: `${event.title} | Qeducato`,
    description: event.description?.trim().slice(0, 150),
  };
}

export default async function EventDetailsPage({ params }) {
  const { slug } = await params;
  const event = allEventDetailsData.find((e) => e.slug === slug);
  if (!event) notFound();

  return (
    <>
      <EventDetailsHero title={event.title} />
      <EventDetailsContent event={event} />
    </>
  );
}
