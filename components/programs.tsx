"use client";

import EventAnnouncement from "./event-announcement";

export default function Programs() {
  return (
    <section
      id="programs"
      className="pt-20 pb-0"
      style={{
        backgroundImage: "url(/network-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "auto",
      }}
    >
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#03304c" }}>
            መርሐ ግብራት
          </h2>
        </div>
      </div>
      <EventAnnouncement />
    </section>
  );
}
