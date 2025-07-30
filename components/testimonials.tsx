"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = testimonialsData.testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="testimonials"
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
            የመምህራን አስተያየት
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
            {testimonialsData.testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-4">
                <Card
                  className={`bg-gray-100 transition-all duration-300 shadow-2xl max-w-md mx-auto rounded-lg ${
                    currentSlide === index
                      ? "transform rotate-0 scale-100 blur-0 opacity-100"
                      : index === currentSlide - 1
                      ? "transform -rotate-12 scale-75 blur-sm opacity-50"
                      : index === currentSlide + 1
                      ? "transform rotate-12 scale-75 blur-sm opacity-50"
                      : "transform rotate-0 scale-75 blur-sm opacity-30"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="text-4xl text-gray-300 font-ketefa italic">
                      "
                    </div>
                    <p className="text-base leading-relaxed mb-1 text-gray-700">
                      {testimonial.quote}
                    </p>
                    <div className="text-4xl text-gray-300 text-right font-serif italic">
                      "
                    </div>
                    <div className="flex flex-col items-center text-center">
                      {testimonial.author.image ? (
                        <div className="w-30 h-30 rounded-full shadow-lg overflow-hidden flex items-center justify-center">
                          <Image
                            src={testimonial.author.image}
                            alt={testimonial.author.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-20 h-20 bg-${testimonial.author.avatarColor} rounded-full mb-3 shadow-lg flex items-center justify-center`}
                        >
                          <span className="text-white font-bold text-xl">
                            {testimonial.author.avatar}
                          </span>
                        </div>
                      )}
                      <div>
                        <p className="font-bold text-gray-900 text-base">
                          {testimonial.author.name}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {testimonial.author.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-80 transition-colors shadow-lg z-10"
            style={{ backgroundColor: "#D9D9D9" }}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-80 transition-colors shadow-lg z-10"
            style={{ backgroundColor: "#D9D9D9" }}
            disabled={currentSlide >= totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonialsData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index
                    ? "bg-gray-800"
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
