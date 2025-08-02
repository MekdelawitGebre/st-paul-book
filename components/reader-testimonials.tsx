"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import quotesData from "@/data/reader-testimonials.json";

const cardConfig = {
  active: {
    width: "300px",
    height: "450px",
    transform: "translateX(0) scale(1.05)",
    className: "scale-105 opacity-100 z-20",
    contentOpacity: "opacity-100",
    fontSize: "text-xs md:text-base", // 👈 Reduced for mobile
    bg: "bg-white text-gray-800",
  },
  previous: {
    width: "310px",
    height: "410px",
    transform: "translateX(-440px) scale(0.9)",
    className: "scale-90 opacity-80 z-10",
    contentOpacity: "opacity-100",
    fontSize: "text-[10px]",
    bg: "bg-[#355970] text-white",
  },
  next: {
    width: "310px",
    height: "410px",
    transform: "translateX(440px) scale(0.9)",
    className: "scale-90 opacity-80 z-10",
    contentOpacity: "opacity-100",
    fontSize: "text-[10px]",
    bg: "bg-[#355970] text-white",
  },
};

export default function ReaderQuotes() {
  const [currentQuoteSlide, setCurrentQuoteSlide] = React.useState(0);
  const totalQuoteSlides = quotesData.readerTestimonials.length;

  const nextQuoteSlide = () => {
    setCurrentQuoteSlide((prev) => (prev + 1) % totalQuoteSlides);
  };

  const prevQuoteSlide = () => {
    setCurrentQuoteSlide(
      (prev) => (prev - 1 + totalQuoteSlides) % totalQuoteSlides
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextQuoteSlide(),
    onSwipedRight: () => prevQuoteSlide(),
    trackMouse: true,
  });

  return (
    <section
      id="readers-testimonials"
      className="py-10 relative overflow-hidden"
      style={{
        backgroundImage: "url(/network-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        <div className="text-center mb-2">
          <h2 className="text-5xl md:text-5xl font-bold mb-1 text-[#03304c]">
            የአንባብያን አስተያየት
          </h2>
        </div>

        <div
          {...handlers}
          className="relative flex items-center justify-center w-full h-[600px]"
        >
          {/* Arrows (hidden on mobile) */}
          <button
            onClick={prevQuoteSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-lg z-30"
            style={{ backgroundColor: "#D9D9D9" }}
            aria-label="Previous quote"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextQuoteSlide}
            className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-lg z-30"
            style={{ backgroundColor: "#D9D9D9" }}
            aria-label="Next quote"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          <div className="relative flex items-center justify-center w-full h-full">
            {quotesData.readerTestimonials.map((quote, index) => {
              const position =
                index === currentQuoteSlide
                  ? "active"
                  : index ===
                    (currentQuoteSlide - 1 + totalQuoteSlides) %
                      totalQuoteSlides
                  ? "previous"
                  : index === (currentQuoteSlide + 1) % totalQuoteSlides
                  ? "next"
                  : "hidden";

              if (position === "hidden") return null;

              const config = cardConfig[position as keyof typeof cardConfig];

              return (
                <div
                  key={quote.id}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    config.className
                  } ${
                    position === "active"
                      ? "w-[80%] mx-8 sm:w-[70%] sm:mx-12 md:w-[450px] md:mx-0"
                      : "w-[310px]"
                  }`}
                  style={{
                    height: config.height,
                    transform: config.transform,
                  }}
                >
                  <Card
                    className={`w-full h-full p-0 rounded-xl shadow-xl ${config.bg}`}
                    tabIndex={0}
                    role="group"
                    aria-label={`Quote by ${quote.author.name}`}
                  >
                    <CardContent
                      className={`flex flex-col justify-between h-full ${config.contentOpacity} transition-opacity duration-500`}
                    >
                      <div className="text-left">
                        <Quote className="w-6 h-6 rotate-180 m-2 sm:m-4" />
                        <p
                          className={`${config.fontSize} mb-4 text-justify`}
                          style={{
                            fontFamily:
                              "Kefa, system-ui, -apple-system, sans-serif",
                          }}
                        >
                          {quote.quote}
                        </p>
                        <div className="flex justify-end">
                          <Quote className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="text-right mt-4">
                        <p className="font-bold text-[11px] md:text-sm">
                          {quote.author.name}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {quotesData.readerTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuoteSlide(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === currentQuoteSlide
                  ? "bg-[#03304c]"
                  : "bg-gray-300 hover:bg-[#03304c]/70"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
