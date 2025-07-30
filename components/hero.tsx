"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-2 md:py-2 py-1 overflow-hidden"
      style={{
        backgroundImage: "url(/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-8 relative z-4">
        <div className="flex justify-center items-center min-h-[400px] md:min-h-[600px] py-2 md:py-4">
          <div className="relative w-full">
            <Image
              src="/hero-text-image.png"
              alt="Saint Paul"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
