"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import readerTestimonialsData from "@/data/reader-testimonials.json";

interface Testimonial {
  id: number;
  quote: string;
  author: {
    name: string;
  };
}

export default function ReaderTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonials = readerTestimonialsData.readerTestimonials;

  // Dynamic programming approach for smooth transitions
  const [slideStates, setSlideStates] = useState<{
    [key: number]: { opacity: number; transform: string; zIndex: number };
  }>({});

  // Calculate slide states using dynamic programming
  const calculateSlideStates = useCallback(
    (activeIndex: number) => {
      const states: {
        [key: number]: { opacity: number; transform: string; zIndex: number };
      } = {};

      testimonials.forEach((_, index) => {
        const distance = Math.abs(index - activeIndex);

        if (distance === 0) {
          // Active slide (center)
          states[index] = {
            opacity: 1,
            transform: "translateX(0) scale(1)",
            zIndex: 10,
          };
        } else if (distance === 1) {
          // Adjacent slides (left and right)
          const direction = index > activeIndex ? 1 : -1;
          states[index] = {
            opacity: 0.85,
            transform: `translateX(${direction * 12}%) scale(0.95)`,
            zIndex: 5,
          };
        } else {
          // Distant slides (shouldn't happen with 3 cards)
          const direction = index > activeIndex ? 1 : -1;
          states[index] = {
            opacity: 0.7,
            transform: `translateX(${direction * 25}%) scale(0.9)`,
            zIndex: 1,
          };
        }
      });

      return states;
    },
    [testimonials]
  );

  // Update slide states when current index changes
  useEffect(() => {
    setSlideStates(calculateSlideStates(currentIndex));
  }, [currentIndex, calculateSlideStates]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  }, [testimonials.length]);

  return (
    <section id="readers" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4" style={{ color: "#03304c" }}>
            አንባብያን
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center items-center space-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full max-w-md transition-all duration-700 ease-in-out"
                style={{
                  opacity: slideStates[index]?.opacity || 0,
                  transform: slideStates[index]?.transform || "translateX(0)",
                  zIndex: slideStates[index]?.zIndex || 1,
                }}
              >
                <Card
                  className={`h-full transition-all duration-300 ${
                    index === 1 ? "bg-gray-200 text-gray-800" : "text-white"
                  }`}
                  style={{
                    backgroundColor: index === 1 ? undefined : "#03304c",
                  }}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-blue-400">
                        "
                      </span>
                    </div>

                    {/* Quote Text */}
                    <div className="flex-1">
                      <p
                        className={`text-sm leading-relaxed ${
                          index === 1 ? "text-gray-700" : "text-blue-100"
                        }`}
                      >
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="mt-6 pt-4">
                      <div className="text-center">
                        <p
                          className={`font-semibold ${
                            index === 1 ? "text-gray-800" : "text-white"
                          }`}
                        >
                          {testimonial.author.name}
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
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors shadow-lg z-20"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors shadow-lg z-20"
          >
            →
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-400 scale-125"
                  : "bg-white opacity-60 hover:opacity-80"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 flex justify-center">
          <div className="w-32 h-1 bg-blue-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-400 transition-all duration-300 ease-out"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
