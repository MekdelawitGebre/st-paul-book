"use client";

import { Card } from "@/components/ui/card";
import eventsData from "@/data/events.json";

interface Event {
  id: number;
  title: string;
  month: string;
  day: string;
  mainTitle: string;
  description: string;
  descriptionEn: string;
  dayOfWeek: string;
  dayOfWeekEn: string;
  time: string;
  location: string;
  locationEn: string;
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

export default function EventAnnouncement() {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        {eventsData.map((event: Event) => (
          <Card
            key={event.id}
            className={`${event.backgroundColor} ${event.textColor} overflow-hidden w-full rounded-none border-0 shadow-none p-6`}
            style={{ height: "auto" }}
          >
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-3 gap-6 items-start">
              {/* Left: Date */}
              <div className="text-left">
                <div className="text-2xl font-thin opacity-80">
                  {event.month}
                </div>
                <div className="text-8xl font-medium">{event.day}</div>
              </div>

              {/* Center: Title */}
              <div className="text-center flex items-center justify-center">
                <div className="text-6xl font-bold leading-tight">
                  {event.mainTitle}
                </div>
              </div>

              {/* Right: Description */}
              <div className="text-left text-sm leading-relaxed flex items-center">
                <div className="pr-8">{event.description}</div>
              </div>
            </div>

            {/* Bottom for desktop */}
            <div className="hidden md:grid grid-cols-3 gap-6 items-center mt-4">
              <div className="text-medium">{event.dayOfWeek}</div>
              <div className="text-center">{event.time}</div>
              <div className="text-sm font-bold text-left">
                {event.location}
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-2">
              {/* Title */}
              <div className="text-2xl font-bold">{event.mainTitle}</div>

              {/* Description */}
              <div className="text-sm">{event.description}</div>

              {/* Info row: date on left, time + location on right */}
              <div className="flex justify-between items-center text-sm font-medium mt-1 flex-wrap gap-y-1">
                <span className="whitespace-nowrap">
                  {event.month} {event.day}, {event.dayOfWeek}
                </span>
                <span className="whitespace-nowrap">
                  {event.time} {event.location}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
