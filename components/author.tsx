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
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#03304c" }}>
            ደራሲው
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Image
              src="/auther.png"
              alt="Author - Kidus Aba Kristos"
              width={400}
              height={500}
              className="rounded-2xl shadow-xl mx-auto object-cover"
            />
          </div>
          <div className="pt-0">
            <p
              className="leading-relaxed mb-6 text-lg"
              style={{ color: "#03304c" }}
            >
              Abel Kassahun Mekuria is a Deacon, Preacher and Author under the
              Ethiopian Orthodox Tewahido Church. He wrote 4 books. He reached
              to his readers by demystifying intricate themes with easy to
              understand and eloquent flow of ideas.
            </p>
            <div className="text-right">
              <p className="text-xl font-semibold" style={{ color: "#03304c" }}>
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
