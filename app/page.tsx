"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Author from "@/components/author";
import Testimonials from "@/components/testimonials";
import Quotes from "@/components/quotes";
import ReaderTestimonials from "@/components/reader-testimonials";
import Programs from "@/components/programs";
import FooterBanner from "@/components/footer-banner";

export default function EthiopianOrthodoxSite() {
  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Hero />
      <About />
      <Author />
      <Testimonials />
      <Quotes />
      <ReaderTestimonials />
      <Programs />
      <FooterBanner />
    </div>
  );
}
