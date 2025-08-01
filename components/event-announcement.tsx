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
                <div className="grid grid-cols-3 gap-6 items-start flex-1">
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
                <div className="grid grid-cols-3 gap-6 items-center mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{event.dayOfWeek}</span>
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="text-center">
                    {/* Empty center column to maintain grid alignment */}
                  </div>
                  <div className="text-sm text-left flex items-center">
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
