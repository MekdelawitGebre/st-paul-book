"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, QuoteIcon, ChevronLeft, ChevronRight } from "lucide-react";
import quotesData from "@/data/quotes.json";

export default function Quotes() {
  const [currentQuoteSlide, setCurrentQuoteSlide] = React.useState(1);
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

  return (
    <section
      id="quotes"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: "url(/network-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/network-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "translateZ(-1px) scale(2)",
          zIndex: -1,
        }}
      />
      <div className="container mx-auto px-8">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#03304c" }}>
            ጥቅሶች
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                Math.max(0, currentQuoteSlide - 1) * 33.333
              }%)`,
            }}
          >
            {quotesData.quotes.map((quote, index) => {
              const isActive = currentQuoteSlide === index;
              const isLeft = index === currentQuoteSlide - 1;
              const isRight = index === currentQuoteSlide + 1;

              return (
                <div
                  key={quote.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4 transition-all duration-500 ease-in-out"
                  style={{
                    fontFamily: "Kefa, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <Card
                    className={`transition-all duration-300 shadow-2xl max-w-md mx-auto rounded-lg cursor-pointer hover:scale-105 ${
                      isActive
                        ? "bg-[#03304c] text-white transform rotate-0 scale-100 opacity-100 z-20"
                        : isLeft || isRight
                        ? "bg-white text-gray-800 transform rotate-0 scale-75 opacity-70 z-10"
                        : "bg-white text-gray-800 transform rotate-0 scale-75 opacity-70 z-10 md:block hidden"
                    }`}
                    onClick={() => goToQuoteSlide(index)}
                  >
                    <CardContent className="p-6">
                      <div className="text-4xl text-gray-300 flex items-start mb-2">
                        <QuoteIcon
                          className="text-4xl"
                          style={{
                            color:
                              currentQuoteSlide === index
                                ? "#ffffff"
                                : "#9ca3af",
                            transform: "rotate(180deg)",
                          }}
                        />
                      </div>
                      <p
                        className={`text-lg leading-relaxed mb-4 ${
                          currentQuoteSlide === index
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                        style={{
                          fontFamily:
                            "Kefa, system-ui, -apple-system, sans-serif",
                        }}
                      >
                        {quote.quote}
                      </p>
                      <div className="text-4xl text-gray-300 flex justify-end mb-2 ">
                        <Quote
                          className="text-4xl text-gray-300  "
                          style={{
                            color: "#002942",
                            transform: "rotate(-360deg)",
                          }}
                        />
                      </div>

                      <div className="text-right">
                        <p
                          className={`font-bold text-lg ${
                            currentQuoteSlide === index
                              ? "text-white"
                              : "text-gray-800"
                          }`}
                        >
                          {quote.author.name}፤ ገጽ: {quote.author.page}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevQuoteSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-80 transition-colors shadow-lg z-10"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextQuoteSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-80 transition-colors shadow-lg z-10"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Quote Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {quotesData.quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuoteSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentQuoteSlide === index
                    ? "bg-gray-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
