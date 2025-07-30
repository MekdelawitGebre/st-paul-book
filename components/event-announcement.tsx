"use client";

import { Card } from "@/components/ui/card";
import eventsData from "@/data/events.json";

interface Event {
  id: number;
  title: string;
  month: string;
  day: string;
  mainTitle: string | { line1: string; line2: string };
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
    <div className="w-full py-4">
      <div className="flex flex-col">
        {eventsData.map((event: Event) => (
          <Card
            key={event.id}
            className={`${event.backgroundColor} ${event.textColor} overflow-hidden`}
          >
            {/* Top black bar */}
            <div className="h-1 bg-black"></div>

            {/* Title section */}
            <div className="text-center py-4">
              <h2 className={`text-xl font-bold ${event.accentColor}`}>
                {event.title}
              </h2>
            </div>

            {/* Main content area */}
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4 items-start">
                {/* Left side - Month and Day */}
                <div className="text-left">
                  <div className="text-sm opacity-80">{event.month}</div>
                  <div className="text-4xl font-bold mt-1">{event.day}</div>
                </div>

                {/* Center - Main title */}
                <div className="text-center">
                  {typeof event.mainTitle === "string" ? (
                    <div className="text-2xl font-bold leading-tight">
                      {event.mainTitle}
                    </div>
                  ) : (
                    <div className="text-2xl font-bold leading-tight">
                      <div>{event.mainTitle.line1}</div>
                      <div>{event.mainTitle.line2}</div>
                    </div>
                  )}
                </div>

                {/* Right side - Description */}
                <div className="text-right text-sm leading-relaxed">
                  {event.description}
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="px-4 pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{event.dayOfWeek}</span>
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="text-sm">{event.location}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
