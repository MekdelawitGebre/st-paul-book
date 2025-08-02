"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

const cardConfig = {
  active: {
    width: "350px",
    height: "500px",
    transform: "translateX(0) scale(1.05) rotate(0deg)",
    className: "scale-105 opacity-100 z-20",
    cardClasses: "border border-gray-200 shadow-xl bg-white",
    contentOpacity: "opacity-100",
    textBlur: "blur-0",
    fontSize: "text-xs",
  },
  previous: {
    width: "350px",
    height: "500px",
    transform: "translateX(-300px) scale(0.9) rotate(-8deg)",
    className: "scale-90 opacity-60 z-10",
    cardClasses: "border border-gray-200 shadow-sm bg-white",
    contentOpacity: "opacity-60",
    textBlur: "blur-sm",
    fontSize: "text-xs",
  },
  next: {
    width: "350px",
    height: "500px",
    transform: "translateX(300px) scale(0.9) rotate(8deg)",
    className: "scale-90 opacity-60 z-10",
    cardClasses: "border border-gray-200 shadow-sm bg-white",
    contentOpacity: "opacity-60",
    textBlur: "blur-sm",
    fontSize: "text-xs",
  },
};

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = testimonialsData.testimonials.length;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : (prev - 1 + totalSlides) % totalSlides
    );
  };

  return (
    <section
      id="testimonials"
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
          <h2 className="text-5xl font-bold mb-8" style={{ color: "#03304c" }}>
            መምሕራን
          </h2>
        </div>

        <div className="relative flex items-center justify-center w-full h-[600px]">
          {/* Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-80 transition-colors shadow-lg z-30"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:opacity-80 transition-colors shadow-lg z-30"
            style={{ backgroundColor: "#D9D9D9" }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          <div className="relative flex items-center justify-center w-full h-full">
            {testimonialsData.testimonials.map((testimonial, index) => {
              const position =
                index === currentSlide
                  ? "active"
                  : index === (currentSlide - 1 + totalSlides) % totalSlides
                  ? "previous"
                  : index === (currentSlide + 1) % totalSlides
                  ? "next"
                  : "hidden";

              if (position === "hidden") return null;

              const config =
                cardConfig[position as "active" | "previous" | "next"];

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out ${config.className}`}
                  style={{
                    width: config.width,
                    height: config.height,
                    transform: config.transform,
                  }}
                >
                  <Card className={`w-full h-full p-2 ${config.cardClasses}`}>
                    <CardContent
                      className={`flex flex-col items-center justify-center text-center h-full ${config.contentOpacity} transition-all duration-700 px-4 py-2`}
                    >
                      <div className="relative w-full h-full flex flex-col">
                        {/* Opening quote at top-left */}
                        <div className="absolute top-0 left-0">
                          <Quote className="w-6 h-6 text-gray-400" />
                        </div>

                        {/* Main content */}
                        <div className="flex-1 flex flex-col justify-center px-4 pt-8">
                          <p
                            className={`${config.fontSize} ${config.textBlur} text-justify`}
                          >
                            {testimonial.quote}
                          </p>

                          {/* Closing quote after description */}
                          <div className="flex justify-end mt-4">
                            <Quote className="w-6 h-6 text-gray-400 transform rotate-180" />
                          </div>
                        </div>

                        {/* Author section at bottom */}
                        <div className="flex flex-col items-center justify-center mt-auto pt-4">
                          <Image
                            src={testimonial.author.image}
                            alt={testimonial.author.name}
                            width={48}
                            height={48}
                            className="rounded-full mb-2"
                          />
                          <div className="text-center">
                            <p
                              className={`font-semibold text-gray-800 text-sm`}
                            >
                              {testimonial.author.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {testimonial.author.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
