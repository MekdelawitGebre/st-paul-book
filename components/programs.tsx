"use client";

import EventAnnouncement from "./event-announcement";

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-20"
      style={{
        backgroundImage: "url(/network-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#03304c" }}>
            መርሐ ግብራት
          </h2>
        </div>
        <EventAnnouncement />
      </div>
    </section>
  );
}
