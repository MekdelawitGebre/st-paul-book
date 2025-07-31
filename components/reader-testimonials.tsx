"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, QuoteIcon } from "lucide-react";
import readerTestimonialsData from "@/data/reader-testimonials.json";

export default function ReaderTestimonials() {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const totalSlides = readerTestimonialsData.readerTestimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="readers"
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
            አንባብያን
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                Math.max(0, currentSlide - 1) * 33.333
              }%)`,
            }}
          >
            {readerTestimonialsData.readerTestimonials.map(
              (testimonial, index) => {
                const isActive = currentSlide === index;
                const isLeft = index === currentSlide - 1;
                const isRight = index === currentSlide + 1;

                return (
                  <div
                    key={testimonial.id}
                    className="w-full md:w-1/3 flex-shrink-0 px-4 transition-all duration-500 ease-in-out"
                  >
                    <Card
                      className={`transition-all duration-300 shadow-2xl max-w-md mx-auto rounded-lg cursor-pointer hover:scale-105 ${
                        isActive
                          ? "bg-white text-gray-800 transform rotate-0 scale-100 opacity-100 z-20"
                          : isLeft || isRight
                          ? "bg-[#032f4b] text-white transform rotate-0 scale-75 opacity-70 z-10"
                          : "bg-[#032f4b] text-white transform rotate-0 scale-75 opacity-70 z-10 md:block hidden"
                      }`}
                      onClick={() => goToSlide(index)}
                    >
                      <CardContent className="p-6">
                        <div className="text-4xl text-gray-300 flex items-start mb-2">
                          <QuoteIcon
                            className="text-4xl"
                            style={{
                              color: isActive ? "#032f4b" : "#ffffff",
                            }}
                          />
                        </div>
                        <p
                          className={`text-lg leading-relaxed mb-4 ${
                            isActive ? "text-gray-800" : "text-white"
                          }`}
                        >
                          {testimonial.quote}
                        </p>
                        <div className="text-4xl text-gray-300 flex justify-end mb-2">
                          <Quote className="text-4xl text-gray-300" />
                        </div>
                        <div className="text-right">
                          <p
                            className={`font-bold text-lg ${
                              isActive ? "text-gray-800" : "text-white"
                            }`}
                          >
                            {testimonial.author.name}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              }
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-80 transition-colors shadow-lg z-10"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-80 transition-colors shadow-lg z-10"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Reader Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {readerTestimonialsData.readerTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index
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
