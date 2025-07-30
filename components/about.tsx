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
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/5"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#03304c" }}>
            ነገረ መጽሐፍ
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3
              className="text-4xl font-bold mb-8"
              style={{
                color: "#03304c",
                fontSize: "10rem",
                fontFamily:
                  "Ketefa, Menbere, system-ui, -apple-system, sans-serif",
              }}
            >
              ቅዱስ ጳውሎስ
            </h3>
            <p
              className="leading-relaxed mb-6 text-lg"
              style={{ color: "#03304c" }}
            >
              ይህ መጽሐፍ በቅዱስ አባ ክርስቶስ ሳምራ የተጻፈ ሲሆን፣ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን
              ታሪክ፣ ትምህርት እና መንፈሳዊ ሕይወት ላይ ያተኮረ ነው። በዚህ መጽሐፍ ውስጥ የተካተቱት ትምህርቶች
              የቤተ ክርስቲያናችንን ታሪክ፣ የአባቶች ትምህርት እና የመንፈሳዊ ሕይወት መመሪያዎች ናቸው። መጽሐፉ
              በሶስት ዋና ዋና ክፍሎች የተከፈለ ሲሆን፣ እያንዳንዱ ክፍል የተለያዩ የመንፈሳዊ ትምህርቶችን እና የታሪክ
              ክስተቶችን ያካትታል። ለእያንዳንዱ የኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን አባል አስፈላጊ የሆኑ ትምህርቶች
              በዚህ መጽሐፍ ውስጥ በዝርዝር ተብራርተዋል። የመጽሐፉ ዋና ዓላማ የቤተ ክርስቲያናችንን ታሪክ እና
              ትምህርት ለወደፊቱ ትውልድ ማስተላለፍ ነው።
            </p>
            <div className="text-right">
              <p className="text-xl font-semibold" style={{ color: "#03304c" }}>
                ዲን.አቤል ካሳሁን <br />
                ደራሲው
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br p-12 rounded-2xl text-center ">
            <Image
              src="/book.png"
              alt="Book Cover"
              width={500}
              height={400}
              className="mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
