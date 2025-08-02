"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, QuoteIcon } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

// Type definitions
interface TestimonialCardProps {
  testimonial: any;
  isActive: boolean;
  isPrevious: boolean;
  isNext: boolean;
}

interface NavigationButtonProps {
  onClick: () => void;
  direction: "left" | "right";
  className: string;
}

interface SlideIndicatorProps {
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}

// Reusable card component
const TestimonialCard = ({
  testimonial,
  isActive,
  isPrevious,
  isNext,
}: TestimonialCardProps) => {
  // Unified styling configuration for book-like size
  const cardConfig = {
    active: {
      width: "320px",
      height: "480px",
      transform: "translateX(0) scale(1.05) rotate(0deg)",
      className: "scale-105 opacity-100 z-20",
      cardClasses: "border border-gray-200 shadow-xl",
      contentOpacity: "opacity-100",
      textBlur: "blur-0",
    },
    previous: {
      width: "280px",
      height: "360px",
      transform: "translateX(-60px) scale(0.9) rotate(-6deg)",
      className: "scale-90 opacity-60 z-10",
      cardClasses: "border border-gray-200 shadow-sm",
      contentOpacity: "opacity-60",
      textBlur: "blur-sm",
    },
    next: {
      width: "280px",
      height: "360px",
      transform: "translateX(60px) scale(0.9) rotate(6deg)",
      className: "scale-90 opacity-60 z-10",
      cardClasses: "border border-gray-200 shadow-sm",
      contentOpacity: "opacity-60",
      textBlur: "blur-sm",
    },
  };

  // Determine card type and get configuration
  const getCardType = () => {
    if (isActive) return "active";
    if (isPrevious) return "previous";
    if (isNext) return "next";
    return "previous"; // fallback
  };

  const cardType = getCardType();
  const config = cardConfig[cardType];

  const baseStyles = "transition-all duration-700 ease-in-out transform";
  const baseCardClasses =
    "bg-white rounded-lg transition-all duration-700 ease-in-out";

  return (
    <div
      key={testimonial.id}
      className={`${baseStyles} ${config.className}`}
      style={{
        width: config.width,
        height: config.height,
        transform: config.transform,
      }}
    >
      <Card className={`${baseCardClasses} ${config.cardClasses} h-full`}>
        <CardContent className="p-3 sm:p-4 transition-all duration-500 h-full flex flex-col">
          {/* Quote Icon - Always clear */}
          <div
            className={`text-xl sm:text-2xl text-gray-400 flex items-start transition-all duration-300 ${config.contentOpacity}`}
          >
            <QuoteIcon
              className="text-xl sm:text-2xl transition-all duration-300"
              style={{ color: "#9ca3af" }}
            />
          </div>

          {/* Quote Text - Only this gets blurred for non-active cards */}
          <p
            className={`text-xs leading-relaxed mb-2 text-gray-600 text-justify px-1 sm:px-2 transition-all duration-300 ${config.contentOpacity} ${config.textBlur} flex-grow`}
          >
            {testimonial.quote}
          </p>

          {/* Closing Quote - Always clear */}
          <div
            className={`text-xl sm:text-2xl text-gray-400 flex justify-end transition-all duration-300 ${config.contentOpacity}`}
          >
            <Quote className="text-xl sm:text-2xl text-gray-400 transition-all duration-300" />
          </div>

          {/* Author Section - Always clear */}
          <div
            className={`flex flex-col items-center text-center transition-all duration-500 ${config.contentOpacity} mt-auto`}
          >
            {testimonial.author.image ? (
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-sm overflow-hidden flex items-center justify-center transition-all duration-300">
                <Image
                  src={testimonial.author.image}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>
            ) : (
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 bg-${testimonial.author.avatarColor} rounded-full mb-1 shadow-sm flex items-center justify-center transition-all duration-300`}
              >
                <span className="text-white font-bold text-xs sm:text-sm transition-all duration-300">
                  {testimonial.author.avatar}
                </span>
              </div>
            )}

            <div className="mt-1 transition-all duration-300">
              <p className="font-semibold text-gray-800 text-xs transition-all duration-300">
                {testimonial.author.name}
              </p>
              <p className="text-gray-500 text-xs transition-all duration-300">
                {testimonial.author.title}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Reusable navigation button component
const NavigationButton = ({
  onClick,
  direction,
  className,
}: NavigationButtonProps) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={`absolute ${className} top-1/2 transform -translate-y-1/2 text-gray-800 p-3 sm:p-4 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg z-30 bg-white border-2 border-gray-300 hover:scale-110 hover:shadow-xl`}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" />
    </button>
  );
};

// Reusable indicator component
const SlideIndicator = ({ index, isActive, onClick }: SlideIndicatorProps) => (
  <button
    onClick={() => onClick(index)}
    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
      isActive ? "bg-gray-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
    }`}
  />
);

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = testimonialsData.testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Get visible cards with their positions
  const getVisibleCards = () => {
    const cards = [];

    // Always show exactly 3 cards: previous, current, next
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;

    // Add previous card
    cards.push({
      testimonial: testimonialsData.testimonials[prevIndex],
      index: prevIndex,
      isActive: false,
      isPrevious: true,
      isNext: false,
    });

    // Add current card
    cards.push({
      testimonial: testimonialsData.testimonials[currentSlide],
      index: currentSlide,
      isActive: true,
      isPrevious: false,
      isNext: false,
    });

    // Add next card
    cards.push({
      testimonial: testimonialsData.testimonials[nextIndex],
      index: nextIndex,
      isActive: false,
      isPrevious: false,
      isNext: true,
    });

    return cards;
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
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-5xl font-bold mb-4"
            style={{ color: "#03304c" }}
          >
            የመምህራን አስተያየት
          </h2>
        </div>

        <div className="relative overflow-hidden">
          {/* Main Carousel Container */}
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center gap-2 sm:gap-4 transition-all duration-700 ease-in-out relative">
              {getVisibleCards().map((cardData, positionIndex) => (
                <TestimonialCard
                  key={`${cardData.testimonial.id}-${cardData.index}-${positionIndex}`}
                  testimonial={cardData.testimonial}
                  isActive={cardData.isActive}
                  isPrevious={cardData.isPrevious}
                  isNext={cardData.isNext}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <NavigationButton
            onClick={prevSlide}
            direction="left"
            className="left-2 sm:left-4"
          />
          <NavigationButton
            onClick={nextSlide}
            direction="right"
            className="right-2 sm:right-4"
          />

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonialsData.testimonials.map((_, index) => (
              <SlideIndicator
                key={index}
                index={index}
                isActive={currentSlide === index}
                onClick={goToSlide}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
