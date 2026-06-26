// components/events/eventDetails/EventDetailsContent.jsx
// Design: image + title + description + countdown | sidebar with event info

"use client";

import DirectionalButton from "@/components/common/DirectionalButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiClock, FiCalendar, FiMapPin, FiMail, FiPhone } from "react-icons/fi";

// --- Countdown Timer ---
function CountdownTimer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const target = new Date(eventDate).getTime();

    const tick = () => {
      const diff = target - Date.now();

      if (diff <= 0) {
        setEnded(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [eventDate]);

  // Hydration er age null thake — flicker avoid
  if (timeLeft === null) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div
      role="timer"
      aria-label={ended ? "Event has ended" : "Time remaining until event"}
      className="bg-secondary rounded-md px-6 py-8 my-8"
    >
      {ended ? (
        <p className="headingFive text-white text-center">
          This event has ended.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-4 text-center">
          {units.map(({ label, value }) => (
            <div key={label}>
              <p
                aria-live="polite"
                className="headingThree text-white font-bold leading-none"
              >
                {String(value).padStart(2, "0")}
              </p>
              <p
                className="caption text-white/60 uppercase tracking-widest mt-1"
                aria-hidden="true"
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Sidebar meta row ---
function SidebarRow({ icon, value, href }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-border last:border-0">
      <span className="text-primary shrink-0" aria-hidden="true">
        {icon}
      </span>
      {href ? (
        <a
          href={href}
          className="PeraThree text-foreground hover:text-primary transition-colors duration-200 break-all"
        >
          {value}
        </a>
      ) : (
        <span className="PeraThree text-foreground">{value}</span>
      )}
    </div>
  );
}
//===============================
// --- Main component ---
//===============================
export default function EventDetailsContent({ event }) {
  const {
    title,
    date,
    time,
    location,
    image,
    email,
    phone,
    description,
    speaker,
  } = event;

  const socials = [
    {
      href: "#",
      label: "Facebook",
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    },
    {
      href: "#",
      label: "Twitter",
      path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    },
    {
      href: "#",
      label: "LinkedIn",
      path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
    },
  ];

const sidebarItems = [
  {
    value: time,
    icon: FiClock,
  },
  {
    value: date,
    icon: FiCalendar,
  },
  {
    value: location,
    icon: FiMapPin,
  },
  {
    value: email,
    href: email && `mailto:${email}`,
    icon: FiMail,
  },
  {
    value: phone,
    href: phone && `tel:${phone}`,
    icon: FiPhone,
  },
];
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── Left: main content ── */}
          <div className="lg:col-span-2">
            {/* Hero image */}
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
              <Image
                src={image || "/images/events/placeholder.jpg"}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
                className="object-cover"
              />
            </div>

            {/* Countdown */}
            <CountdownTimer eventDate={date} />

            {/* Title */}
            <h2 className="headingThree text-foreground mb-5">{title}</h2>

            {/* Description */}
            <div>
              {description
                .trim()
                .split("\n")
                .filter((p) => p.trim())
                .map((para, i) => (
                  <p key={`para-${i}`} className="PeraOne text-muted">
                    {para.trim()}
                  </p>
                ))}
            </div>
            {/* Speaker card */}
            {speaker && (
              <div className="flex items-center gap-5 mt-8 p-5 rounded-md border border-border bg-surface">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="PeraTwo font-semibold text-foreground">
                    {speaker.name}
                  </p>
                  <p className="PeraThree text-primary mb-1">{speaker.role}</p>
                  <p className="PeraThree text-muted">{speaker.bio}</p>
                </div>
              </div>
            )}
            {/* Social icons */}
            <div
              className="flex items-center gap-3 mt-8"
              aria-label="Share on social media"
            >
              {socials.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Share on ${label}`}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary hover:scale-110 hover:shadow-lg transition-all duration-700 ease-out"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={path}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: sidebar ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-md border border-border overflow-hidden shadow-sm">
              {/* Sidebar header */}
              <div className="bg-secondary px-6 py-4">
                <h4 className="headingFive text-white">Event Details</h4>
              </div>

              {/* Meta rows */}
              <div className="bg-background px-6 py-2">
                <SidebarRow
                  value={time}
                  icon={<FiClock className="w-5 h-5" />}
                />

                <SidebarRow
                  value={date}
                  icon={<FiCalendar className="w-5 h-5" />}
                />

                <SidebarRow
                  value={location}
                  icon={<FiMapPin className="w-5 h-5" />}
                />

                {email && (
                  <SidebarRow
                    value={email}
                    href={`mailto:${email}`}
                    icon={<FiMail className="w-5 h-5" />}
                  />
                )}

                {phone && (
                  <SidebarRow
                    value={phone}
                    href={`tel:${phone}`}
                    icon={<FiPhone className="w-5 h-5" />}
                  />
                )}
              </div>

              {/* Register button */}
              <div className="px-6 py-5">
                <DirectionalButton
                  href="/teachers"
                  label="Read More"
                  rightIcon={<BsArrowRight size={16} />}
                  bgColor="#FF5101"
                  flairColor="#125875"
                  borderColor="#FF5101"
                  textColor="#ffffff"
                  textHoverColor="#ffffff"
                  shadowHover=""
                  size="md"
                  className="font-semibold rounded-sm px-15 py-5.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
