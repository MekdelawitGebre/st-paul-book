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
    <div className="w-full px-0">
      <div className="flex flex-col w-full">
        {eventsData.map((event: Event, index: number) => (
          <Card
            key={event.id}
            className={`
              ${event.backgroundColor} 
              ${event.textColor} 
              w-full 
              rounded-none 
              border-0 
              p-6 
              transition-all 
              duration-300 
              ${index !== 0 ? "mt-4" : ""} 
            `}
          >
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-3 gap-6 items-start">
              <div className="text-left">
                <div className="text-2xl font-thin opacity-80">
                  {event.month}
                </div>
                <div className="text-8xl font-medium">{event.day}</div>
              </div>

              <div className="text-center flex items-center justify-center">
                <div className="text-6xl font-bold leading-tight">
                  {event.mainTitle}
                </div>
              </div>

              <div className="text-left text-sm leading-relaxed flex items-center">
                <div className="pr-0 sm:pr-8">{event.description}</div>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-6 items-center mt-4">
              <div className="text-medium">{event.dayOfWeek}</div>
              <div className="text-center">{event.time}</div>
              <div className="text-sm font-bold text-left">
                {event.location}
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-2">
              <div className="text-2xl font-bold">{event.mainTitle}</div>
              <div className="text-sm">{event.description}</div>
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
