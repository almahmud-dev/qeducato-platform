// components/events/eventDetails/EventDetailsContent.jsx
// Design: image + title + description + countdown | sidebar with event info

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// --- Countdown Timer ---
function CountdownTimer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // eventDate string theke target banano — e.g. "20 March, 2023"
    const target = new Date(eventDate).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
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

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-[var(--secondary)] rounded-[var(--radius-md)] px-6 py-8 grid grid-cols-4 gap-4 text-center my-8">
      {units.map(({ label, value }) => (
        <div key={label}>
          <p className="headingThree text-white font-bold leading-none">
            {String(value).padStart(2, "0")}
          </p>
          <p className="caption text-white/60 uppercase tracking-widest mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}

// --- Sidebar meta row ---
function SidebarRow({ icon, value }) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-[var(--border)] last:border-0">
      <span className="text-[var(--primary)] shrink-0">{icon}</span>
      <span className="PeraThree text-[var(--foreground)]">{value}</span>
    </div>
  );
}

// --- Main component ---
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
  } = event;

  // Social links — static for now, data e add korte parbe later
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

  return (
    <section className="py-16 md:py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left: main content ── */}
          <div className="lg:col-span-2">

            {/* Hero image */}
            <div className="relative w-full aspect-video rounded-[var(--radius-md)] overflow-hidden">
              <Image
                src={image || "/images/events/placeholder.jpg"}
                alt={title}
                fill
                className="object-cover"
              />
            </div>

            {/* Countdown */}
            <CountdownTimer eventDate={date} />

            {/* Title */}
            <h2 className="headingThree text-[var(--foreground)] mb-5">{title}</h2>

            {/* Description */}
            <div className="space-y-4">
              {description
                .trim()
                .split("\n")
                .filter((p) => p.trim())
                .map((para, i) => (
                  <p key={i} className="PeraOne text-[var(--muted)]">
                    {para.trim()}
                  </p>
                ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-8">
              {socials.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] flex items-center justify-center transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: sidebar ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-[var(--radius-md)] border border-[var(--border)] overflow-hidden shadow-sm">

              {/* Sidebar header */}
              <div className="bg-[var(--secondary)] px-6 py-4">
                <h4 className="headingFive text-white">Event Details</h4>
              </div>

              {/* Meta rows */}
              <div className="bg-[var(--background)] px-6 py-2">
                <SidebarRow
                  value={time}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" d="M12 6v6l4 2" />
                    </svg>
                  }
                />
                <SidebarRow
                  value={date}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  }
                />
                <SidebarRow
                  value={location}
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
                      <circle cx="12" cy="8" r="2" />
                    </svg>
                  }
                />
                {email && (
                  <SidebarRow
                    value={email}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                )}
                {phone && (
                  <SidebarRow
                    value={phone}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    }
                  />
                )}
              </div>

              {/* Register button */}
              <div className="px-6 py-5">
                <button className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-3 px-6 rounded-[var(--radius-sm)] PeraTwo font-semibold transition-colors duration-200">
                  Book a Seat
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}