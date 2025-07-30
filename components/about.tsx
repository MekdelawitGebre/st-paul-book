"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 about relative"
      style={{
        backgroundImage: "url(/network-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 bg-white/10"></div>
      <div className="relative z-10 container mx-auto px-8">
        <div className="text-center mb-4">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#03304c" }}>
            ነገረ መጽሐፍ
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image - Shows first on mobile */}
          <div className="order-1 md:order-2 p-2 rounded-2xl text-center">
            <Image
              src="/book.png"
              alt="Book Cover"
              width={500}
              height={400}
              className="mx-auto object-cover"
            />
          </div>

          {/* Text - Shows second on mobile */}
          <div className="order-2 md:order-1">
            <h6
              className="text-4xl font-light mb-8"
              style={{
                color: "#03304c",
                fontSize: "4rem",
                fontFamily:
                  "Ketefa, Menbere, system-ui, -apple-system, sans-serif",
              }}
            >
              ቅ ዱ ስ&nbsp;&nbsp; ጳ ው ሎ ስ
            </h6>
            <p
              className="leading-relaxed mb-6 text-base text-justify"
              style={{ color: "#03304c" }}
            >
              በዚህ መጽሐፍ ከጳውሎስ ጋር በጠርሴስ እንድኻለን፣ በኢየሩሳሌም ከገማልያል እግር ስር እንቀመጠለን።
              በአይሁድ ሸንጎ ገብተንም ከእስጢፋኖስ ጋር እንሟገታለን፥ ጻድቁም ሲወገር እኛ ከሳውል ጋር የድንጋይ
              ወርዋሪዎቹን ልብስ እንጠብቃለን። ደግሞ ቤተ ክርስቲያንን እያፈረስን ክርስቲያኖቹን እናሳስራለን። ከዚያም
              ይህ አልበቃ ብሎን በደማስቆ ያሉ ክርስቲያኖችን ልናሳድ ከሊቀ ካህናቱ ፈቃድ ተቀብለን እንወጣለን። ወደ
              ደማስቆም ለጥፋት ስንገሰግስ ድንገት መለኮታዊ በሆነ ብርሃን ተመትተን እንወድቃለን። ከወደቅንበት ስንነሳ
              ግን የድሮ ማንነታችንን አስወግደን በትንሳኤ ልቡና አዲስ ሰው እንሆናለን። ወደ ደማስቆ ገብተን ያጠፋነውን
              እንክሳለን። ወደ አረብ በርሃም ሄደን ሦስት ዓመታትን በጾም በጸሎት ደጅ እንጠናለን። ቀጥለንም ወደ ረጅሙ
              የአገልግሎት መንገድ እንገባለን። ሐዋርያውንም በየአገራቱ እየተከተልን አብረነው እንደ ወፍ እንበራለን።
              በስተመጨረሻም ወደ ሮም ሄደን ከጨካኙ ኔሮ ፊት እንቆማለን። ሐዋርያው ሩጫውን የሚጨርስበትን ሰማዕትነት
              ሲቀበል እኛ ግን አይተን አዝነን እናለቅሳለን። ከዚያም መልስ ስድስቱን ምዕራፎች የጀመርነውን ጳውሎሳዊ
              ሕይወት እንቀጥላዋለን።
            </p>
            <div className="text-right">
              <p className="text-xl font-semibold" style={{ color: "#03304c" }}>
                ዲን.አቤል ካሳሁን <br />
                <p className="font-light">አዘጋጅ</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
