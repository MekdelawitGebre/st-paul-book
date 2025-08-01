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
          <div key={event.id} className="w-full">
            {/* Main card */}
            <Card
              className={`${event.backgroundColor} ${event.textColor} overflow-hidden w-full rounded-none border-0 shadow-none`}
              style={{ margin: 0, padding: "0", height: "275px" }}
            >
              {/* Main content area */}
              <div className="p-6 h-full flex flex-col">
                <div
                  className="grid grid-cols-3 items-start flex-1"
                  style={{ gap: "24px" }}
                >
                  {/* Left side - Month and Day */}
                  <div className="text-left">
                    <div className="text-2xl font-thin opacity-80">
                      {event.month}
                    </div>
                    <div className="text-8xl font-medium">{event.day}</div>
                  </div>

                  {/* Center - Main title */}
                  <div className="text-center flex items-center">
                    <div className="text-6xl font-bold leading-tight">
                      {event.mainTitle}
                    </div>
                  </div>

                  {/* Right side - Description */}
                  <div className="text-left text-sm leading-relaxed flex items-center">
                    <div className="pr-8">{event.description}</div>
                  </div>
                </div>

                {/* Bottom section */}
                <div
                  className="grid grid-cols-3 items-center mt-4"
                  style={{ gap: "24px" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-medium">{event.dayOfWeek}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-medium">{event.time}</span>
                  </div>
                  <div className="text-sm font-bold text-left flex items-center">
                    <div className="pr-8">{event.location}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
