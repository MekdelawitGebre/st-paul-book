"use client";

import Image from "next/image";

export default function Author() {
  return (
    <section
      id="author"
      className="py-20"
      style={{
        backgroundImage: "url(/network-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#03304c" }}>
            ደራሲው
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Image
              src="/auther.png"
              alt="Author - Dcn. Abel Kassahun"
              width={400}
              height={500}
              className="rounded-2xl shadow-xl mx-auto object-cover"
            />
          </div>
          <div className="pt-0">
            <p
              className="leading-relaxed mb-6 text-lg text-justify"
              style={{
                color: "#03304c",
                fontFamily: "Poppins, system-ui, -apple-system, sans-serif",
              }}
            >
              Abel Kassahun Mekuria is a devoted Deacon, dynamic preacher, and
              accomplished author serving under the Ethiopian Orthodox Tewahedo
              Church. With a deep commitment to the spiritual and theological
              heritage of the ancient faith, he has authored four insightful
              books that reflect his passion for making complex religious and
              philosophical ideas accessible to the wider public. Through his
              writings and sermons, Abel Kassahun is known for his unique
              ability to break down intricate theological concepts into clear,
              relatable language while maintaining a graceful and eloquent flow
              of thought. His work continues to inspire and educate both the
              faithful and those seeking a deeper understanding of Orthodox
              Christianity.
            </p>
            <div className="text-right">
              <p
                className="text-xl font-semibold"
                style={{
                  color: "#03304c",
                  fontFamily: "Poppins, system-ui, -apple-system, sans-serif",
                }}
              >
                Dcn. Abel Kassahun
                <br />
                Author
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
