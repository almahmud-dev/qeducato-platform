"use client";

import React from "react";
import { FiArrowRight, FiMapPin, FiClock } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import DirectionalButton from "../common/DirectionalButton";

// ৩টি ইভেন্টের মক ডাটা (বেশি ডেটা থাকলেও আমরা এখানে শুধু ৩টি রেন্ডার করব)
const eventsData = [
  {
    id: 1,
    date: "12",
    month: "July",
    time: "10:00 AM - 02:00 PM",
    location: "Main Auditorium, Campus A",
    title: "International Research Symposium on AI & Robotics",
    desc: "Join global tech pioneers and research scholars to discuss the massive future and ethical implications of Automation and AI systems.",
  },
  {
    id: 2,
    date: "18",
    month: "July",
    time: "11:30 AM - 04:00 PM",
    location: "Seminar Hall 3, Science Block",
    title: "Annual Career Fair & Corporate Networking Meet 2026",
    desc: "Directly connect with 50+ multinational companies, unlock top internship opportunities, and build strong professional profiles.",
  },
  {
    id: 3,
    date: "25",
    month: "Aug",
    time: "09:00 AM - 01:00 PM",
    location: "Conference Room, Business School",
    title: "Global Entrepreneurship & Startup Pitch Workshop",
    desc: "Learn from top venture capitalists on how to perfectly pitch your startup ideas, manage funds, and scale tech ventures effectively.",
  },
];

function EventsSection() {
  // slice(0, 3) দিয়ে নিশ্চিত করা হয়েছে যে কোনোভাবেই ৩টার বেশি কার্ড রেন্ডার হবে না
  const limitedEvents = eventsData.slice(0, 3);

  return (
    <section className="bg-[#f9fbff] py-16 md:py-24 overflow-hidden">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <SectionHeader
              label="Upcoming Events"
              text="Join Our Events & Masterclasses"
              colorWord="Events"
              className="text-left"
            />
            <p className="text-slate-500 text-sm max-w-[600px] mt-4 leading-relaxed">
              Never miss a beat. Stay updated with our latest academic
              conferences, tech symposiums, and dynamic workshops scheduled all
              year long.
            </p>
          </div>

          <div className="shrink-0 self-end sm:self-auto">
            <DirectionalButton
              href="/events"
              label="View All Events"
              rightIcon={<FiArrowRight size={16} />}
              bgColor="transparent"
              flairColor="#0d3d4f"
              borderColor="var(--text-primary)"
              textColor="var(--text-primary)"
              textHoverColor="#ffffff"
              shadowHover=""
              size="md"
              className="font-semibold rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-[24px] shadow-[0_15px_40px_rgba(3,27,78,0.02)] border border-slate-100/70 p-6 flex flex-col justify-between min-h-[320px] relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="bg-orange-50 border border-orange-100/50 w-16 h-18 rounded-2xl flex flex-col items-center justify-center shrink-0">
                    <span className="text-2xl font-black text-[#ff6f4b] leading-none mb-0.5">
                      {event.date}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {event.month}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <FiClock className="text-[#ff6f4b] shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <FiMapPin className="text-[#ff6f4b] shrink-0" />
                      <span className="truncate max-w-[180px] sm:max-w-[220px]">
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-[#031b4e] mb-2.5 transition-colors duration-300 group-hover:text-[#ff6f4b] cursor-pointer line-clamp-2 leading-snug">
                  {event.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                  {event.desc}
                </p>
              </div>

              <div className="border-t border-slate-50 pt-4 mt-6">
                <a
                  href={`/events/${event.id}`}
                  className="text-xs font-bold text-[#031b4e] hover:text-[#ff6f4b] flex items-center gap-1 transition-colors duration-200"
                >
                  Get Ticket & Details{" "}
                  <FiArrowRight className="text-[#ff6f4b]" />
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
