"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import quotesData from "@/data/quotes.json";

const cardConfig = {
  active: {
    width: "w-[90vw] sm:w-[420px] md:w-[450px]",
    height: "h-[550px]",
    transform: "translateX(0) scale(1.05)",
    className: "scale-105 opacity-100 z-20",
    contentOpacity: "opacity-100",
    fontSize: "text-xs sm:text-sm md:text-base", // smaller font for mobile
    bg: "bg-[#03304c] text-white",
  },
  previous: {
    width: "w-[300px]",
    height: "h-[550px]",
    transform: "translateX(-420px) scale(0.9)",
    className: "scale-90 opacity-60 z-10",
    contentOpacity: "opacity-60",
    fontSize: "text-xs",
    bg: "bg-white text-gray-800",
  },
  next: {
    width: "w-[300px]",
    height: "h-[550px]",
    transform: "translateX(420px) scale(0.9)",
    className: "scale-90 opacity-60 z-10",
    contentOpacity: "opacity-60",
    fontSize: "text-xs",
    bg: "bg-white text-gray-800",
  },
};

export default function Quotes() {
  const [currentQuoteSlide, setCurrentQuoteSlide] = React.useState(0);
  const totalQuoteSlides = quotesData.quotes.length;

  const nextQuoteSlide = () => {
    setCurrentQuoteSlide((prev) => (prev + 1) % totalQuoteSlides);
  };

  const prevQuoteSlide = () => {
    setCurrentQuoteSlide(
      (prev) => (prev - 1 + totalQuoteSlides) % totalQuoteSlides
    );
  };

  const goToQuoteSlide = (index: number) => {
    setCurrentQuoteSlide(index);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextQuoteSlide(),
    onSwipedRight: () => prevQuoteSlide(),
    trackMouse: true,
  });

  return (
    <section
      id="quotes"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url(/network-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="absolute inset-0 z-[-1]" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-5xl font-bold mb-4"
            style={{ color: "#03304c" }}
          >
            ጥቅሶች
          </h2>
        </div>

        <div
          {...handlers}
          className="relative flex items-center justify-center w-full h-[600px]"
        >
          {/* Arrows for Desktop */}
          <button
            onClick={prevQuoteSlide}
            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full shadow-lg z-30"
            style={{ backgroundColor: "#D9D9D9" }}
            aria-label="Previous quote"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextQuoteSlide}
            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full shadow-lg z-30"
            style={{ backgroundColor: "#D9D9D9" }}
            aria-label="Next quote"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="relative flex items-center justify-center w-full h-full">
            {quotesData.quotes.map((quote, index) => {
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
                  className={`absolute transition-all duration-700 ease-in-out px-6 sm:px-10 md:px-0 ${config.className} ${config.width} ${config.height}`}
                  style={{
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
                      className={`flex flex-col justify-between h-full px-4 py-6 sm:px-6 md:px-8 ${config.contentOpacity} transition-opacity duration-500`}
                    >
                      <div className="text-left">
                        <Quote className="w-6 h-6 transform rotate-180 m-4" />
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
                        <p className="font-bold text-sm">
                          {quote.author.name}፤ ገጽ: {quote.author.page}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots / Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {quotesData.quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToQuoteSlide(index)}
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
