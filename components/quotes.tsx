"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import quotesData from "@/data/quotes.json";

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
      <div className="container mx-auto px-4">
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
            {quotesData.quotes.map((quote, index) => (
              <div key={quote.id} className="w-1/3 flex-shrink-0 px-4">
                <Card
                  className={`transition-all duration-300 shadow-2xl max-w-md mx-auto rounded-lg cursor-pointer hover:scale-105 ${
                    currentQuoteSlide === index
                      ? "bg-[#0a2233] text-white transform rotate-0 scale-100 opacity-100"
                      : "bg-white text-gray-800 transform rotate-0 scale-75 opacity-70"
                  }`}
                  onClick={() => goToQuoteSlide(index)}
                >
                  <CardContent className="p-6">
                    <div
                      className={`text-6xl mb-1 font-serif italic ${
                        currentQuoteSlide === index
                          ? "text-gray-300"
                          : "text-gray-400"
                      }`}
                    >
                      "
                    </div>
                    <p
                      className={`text-lg leading-relaxed mb-1 ${
                        currentQuoteSlide === index
                          ? "text-white"
                          : "text-gray-800"
                      }`}
                    >
                      {quote.quote}
                    </p>
                    <div
                      className={`text-6xl mb-4 text-right font-serif italic ${
                        currentQuoteSlide === index
                          ? "text-gray-300"
                          : "text-gray-400"
                      }`}
                    >
                      "
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
            ))}
          </div>

          {/* Quote Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {quotesData.quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToQuoteSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentQuoteSlide === index
                    ? "bg-black"
                    : "bg-white hover:bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
