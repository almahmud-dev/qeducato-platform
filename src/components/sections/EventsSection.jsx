"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiMapPin, FiClock } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";
import { eventsData } from "@/helper/home/eventshome";


gsap.registerPlugin(ScrollTrigger);

function EventsSection() {
  const sectionRef = useRef(null);

  // slice(0, 3) দিয়ে নিশ্চিত করা হয়েছে যে কোনোভাবেই ৩টার বেশি কার্ড রেন্ডার হবে না
  const limitedEvents = eventsData.slice(0, 3);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".event-card", { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".event-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".events-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f9fbff] py-16 md:py-24 overflow-hidden">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <SectionHeader
              label="Upcoming Events"
              text="Join Our Events & Masterclasses"
              colorWord="Events"
              className="text-left"
            />
            <p className="text-muted text-sm md:text-base max-w-[600px] mt-4 leading-relaxed">
              Never miss a beat. Stay updated with our latest academic
              conferences, tech symposiums, and dynamic workshops scheduled all
              year long.
            </p>
          </div>

          <div className="shrink-0 self-end sm:self-auto">
            <DirectionalButton
              href="/events"
              label="View All Events"
              rightIcon={<FiArrowRight size={16} aria-hidden="true" />}
              bgColor="transparent"
              flairColor="var(--color-secondary)"
              borderColor="var(--color-primary)"
              textColor="var(--color-primary)"
              textHoverColor="var(--color-background)"
              shadowHover=""
              size="md"
              className="font-semibold rounded-sm px-8 py-5.5"
            />
          </div>
        </div>

        <div className="events-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedEvents.map((event) => (
            <div
              key={event.id}
              className="event-card bg-background rounded-3xl shadow-[0_15px_40px_rgba(3,27,78,0.02)] border border-border/70 p-6 flex flex-col justify-between min-h-[320px] relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-primary/10 border border-primary/20 w-16 h-18 rounded-2xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-2xl font-black text-primary leading-none mb-0.5">
                      {event.date}
                    </span>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-wider">
                      {event.month}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-1">
                    <div className="flex items-center gap-1.5 text-xs text-muted font-medium">
                      <FiClock className="text-primary shrink-0" aria-hidden="true" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted font-medium">
                      <FiMapPin className="text-primary shrink-0" aria-hidden="true" />
                      <span className="truncate max-w-[180px] sm:max-w-[220px]">
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-foreground mb-2.5 transition-colors duration-300 group-hover:text-primary cursor-pointer line-clamp-2 leading-snug">
                  {event.title}
                </h3>

                <p className="text-muted/80 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                  {event.desc}
                </p>
              </div>

              <div className="border-t border-border/60 pt-4 mt-6">
                <a
                  href={`/events/${event.id}`}
                  className="text-xs font-bold text-foreground hover:text-primary flex items-center gap-1 transition-colors duration-200"
                >
                  Get Ticket & Details{" "}
                  <FiArrowRight className="text-primary" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default EventsSection;