"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-2 md:py-2 overflow-hidden"
      style={{
        backgroundImage: "url(/network-bg2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-2 sm:px-6 md:px-8 relative z-4">
        <div className="flex justify-center items-center min-h-[400px] md:min-h-[600px] py-2 md:py-4">
          <div className="relative w-full h-[400px] md:h-[600px]">
            <Image
              src="/hero-text-image.png"
              alt="Saint Paul"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
