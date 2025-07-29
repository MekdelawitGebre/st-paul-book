"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import quotesData from "@/data/quotes.json";

export default function EthiopianOrthodoxSite() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentQuoteSlide, setCurrentQuoteSlide] = React.useState(0);
  const totalSlides = testimonialsData.testimonials.length;
  const totalQuoteSlides = quotesData.quotes.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className="shadow-sm"
        style={{
          backgroundImage: "url(/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              className="text-2xl font-bold"
              style={{
                color: "#03304c",
                fontFamily:
                  "Ketefa, Menbere, system-ui, -apple-system, sans-serif",
              }}
            >
              ቅዱስ ጳውሎስ
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="transition-colors text-sm hover:opacity-80"
                style={{ color: "#03304c" }}
              >
                ነገረ መጽሐፍ
              </a>
              <a
                href="#author"
                className="transition-colors text-sm hover:opacity-80"
                style={{ color: "#03304c" }}
              >
                ደራሲው
              </a>
              <a
                href="#fathers"
                className="transition-colors text-sm hover:opacity-80"
                style={{ color: "#03304c" }}
              >
                መምሕራን
              </a>
              <a
                href="#testimonials"
                className="transition-colors text-sm hover:opacity-80"
                style={{ color: "#03304c" }}
              >
                ጥቅሶች
              </a>
              <a
                href="#readers"
                className="transition-colors text-sm hover:opacity-80"
                style={{ color: "#03304c" }}
              >
                አንባብያን
              </a>
              <a
                href="#programs"
                className="transition-colors text-sm hover:opacity-80"
                style={{ color: "#03304c" }}
              >
                መርሐ ግብራት
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative py-2 overflow-hidden"
        style={{
          backgroundImage: "url(/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-2 relative z-4">
          <div className="flex justify-center items-center min-h-[600px] py-8">
            <div className="relative w-full">
              <Image
                src="/hero-text-image.png"
                alt="Saint Paul"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 about"
        style={{
          backgroundImage: "url(/network-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "#03304c" }}
            >
              ነገረ መጽሐፍ
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3
                className="text-4xl font-bold mb-8"
                style={{
                  color: "#03304c",
                  fontSize: "10rem",
                  fontFamily:
                    "Ketefa, Menbere, system-ui, -apple-system, sans-serif",
                }}
              >
                ቅዱስ ጳውሎስ
              </h3>
              <p
                className="leading-relaxed mb-6 text-lg"
                style={{ color: "#03304c" }}
              >
                ይህ መጽሐፍ በቅዱስ አባ ክርስቶስ ሳምራ የተጻፈ ሲሆን፣ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን
                ታሪክ፣ ትምህርት እና መንፈሳዊ ሕይወት ላይ ያተኮረ ነው። በዚህ መጽሐፍ ውስጥ የተካተቱት ትምህርቶች
                የቤተ ክርስቲያናችንን ታሪክ፣ የአባቶች ትምህርት እና የመንፈሳዊ ሕይወት መመሪያዎች ናቸው። መጽሐፉ
                በሶስት ዋና ዋና ክፍሎች የተከፈለ ሲሆን፣ እያንዳንዱ ክፍል የተለያዩ የመንፈሳዊ ትምህርቶችን እና
                የታሪክ ክስተቶችን ያካትታል። ለእያንዳንዱ የኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን አባል አስፈላጊ የሆኑ
                ትምህርቶች በዚህ መጽሐፍ ውስጥ በዝርዝር ተብራርተዋል። የመጽሐፉ ዋና ዓላማ የቤተ ክርስቲያናችንን
                ታሪክ እና ትምህርት ለወደፊቱ ትውልድ ማስተላለፍ ነው።
              </p>
              <div className="text-right">
                <p
                  className="text-xl font-semibold"
                  style={{ color: "#03304c" }}
                >
                  ዲን.አቤል ካሳሁን <br />
                  ደራሲው
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br p-12 rounded-2xl text-center ">
              <Image
                src="/book.png"
                alt="Book Cover"
                width={500}
                height={400}
                className="mx-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section
        id="author"
        className="py-20"
        style={{
          backgroundImage: "url(/network-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "#03304c" }}
            >
              ደራሲው
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <Image
                src="/auther.png"
                alt="Author - Kidus Aba Kristos"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl mx-auto object-cover"
              />
            </div>
            <div className="pt-0">
              <p
                className="leading-relaxed mb-6 text-lg"
                style={{ color: "#03304c" }}
              >
                Abel Kassahun Mekuria is a Deacon, Preacher and Author under the
                Ethiopian Orthodox Tewahido Church. He wrote 4 books. He reached
                to his readers by demystifying intricate themes with easy to
                understand and eloquent flow of ideas.
              </p>
              <div className="text-right">
                <p
                  className="text-xl font-semibold"
                  style={{ color: "#03304c" }}
                >
                  Dcn. Abel Kassahun
                  <br />
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Testimonials Section */}
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "#03304c" }}
            >
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
                      <div className="text-6xl  text-gray-300 font-ketefa italic">
                        "
                      </div>
                      <p className="text-lg leading-relaxed mb-1 text-gray-700">
                        {testimonial.quote}
                      </p>
                      <div className="text-6xl  text-gray-300 text-right font-serif italic">
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
                          <p className="font-bold text-gray-900 text-lg">
                            {testimonial.author.name}
                          </p>
                          <p className="text-gray-600">
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors shadow-lg z-10"
              disabled={currentSlide === 0}
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors shadow-lg z-10"
              disabled={currentSlide >= totalSlides - 1}
            >
              →
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

      {/* Main Quote Section */}
      <section
        className="py-20"
        style={{
          backgroundImage: "url(/network-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "#03304c" }}
            >
              ጥቅሶች
            </h2>
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentQuoteSlide * 100}%)` }}
            >
              {quotesData.quotes.map((quote, index) => (
                <div key={quote.id} className="w-full flex-shrink-0 px-4">
                  <Card
                    className={`bg-gray-100 transition-all duration-300 shadow-2xl max-w-md mx-auto rounded-lg ${
                      currentQuoteSlide === index
                        ? "transform rotate-0 scale-100 blur-0"
                        : index < currentQuoteSlide
                        ? "transform -rotate-12 scale-75 blur-sm opacity-50"
                        : "transform rotate-12 scale-75 blur-sm opacity-50"
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="text-6xl mb-1 text-gray-300 font-serif italic">
                        "
                      </div>
                      <p className="text-lg leading-relaxed mb-1 text-gray-700">
                        {quote.quote}
                      </p>
                      <div className="text-6xl mb-4 text-gray-300 text-right font-serif italic">
                        "
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900 text-lg">
                          {quote.author.name}፤ {quote.author.page}
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
                      ? "bg-gray-800"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section
        className="py-20"
        style={{
          backgroundImage: "url(/network-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "#03304c" }}
            >
              የአባቶች አስተያየት
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-900 text-white">
              <CardContent className="p-10">
                <div className="text-8xl mb-6 opacity-30">"</div>
                <p className="text-lg leading-relaxed mb-8">
                  ይህ መጽሐፍ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን መንፈሳዊ ሀብት ነው። በተለይ ለወጣቶች
                  ጠቃሚ የሆኑ ትምህርቶችን ያካትታል። የአባቶች ትምህርቶች በዚህ መጽሐፍ ውስጥ በግልጽ ተቀምጠዋል።
                </p>
                <div className="text-right">
                  <p className="font-bold text-lg">- አባ ተክለ ሃይማኖት</p>
                  <p className="text-blue-200 text-sm">የገዳም አባት</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-100">
              <CardContent className="p-10">
                <div className="text-8xl mb-6 text-gray-300">"</div>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  በዚህ መጽሐፍ ውስጥ የተካተቱት የአባቶች ትምህርቶች ለእኔ ብዙ መንፈሳዊ ጥቅም አምጥተዋል። እንደ
                  መመሪያ መጽሐፍ እጠቀምበታለሁ። ለሁሉም እመክራለሁ።
                </p>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-lg">
                    - ወ/ት ሄለን ገብሬ
                  </p>
                  <p className="text-gray-600 text-sm">የቤተ ክርስቲያን አባል</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900 text-white">
              <CardContent className="p-10">
                <div className="text-8xl mb-6 opacity-30">"</div>
                <p className="text-lg leading-relaxed mb-8">
                  የቤተ ክርስቲያናችን ታሪክ እና ትምህርት በዚህ መጽሐፍ ውስጥ በሚያምር ሁኔታ ተቀምጧል። ለሁሉም
                  ኦርቶዶክስ ተዋሕዶ አባላት አስፈላጊ ነው። ይህ መጽሐፍ የእኛ ሀብት ነው።
                </p>
                <div className="text-right">
                  <p className="font-bold text-lg">- ዲ/ን ሳሙኤል መንግስቱ</p>
                  <p className="text-blue-200 text-sm">ሊቀ ዲያቆን</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section
        id="orders"
        className="py-20"
        style={{
          backgroundImage: "url(/network-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "#03304c" }}
            >
              መርጃዎች
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3
                  className="text-4xl font-bold mb-8"
                  style={{ color: "#03304c" }}
                >
                  መጽሐፍ መረጃ
                </h3>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between">
                    <span className="font-semibold">ዋጋ:</span>
                    <span>150.00 ብር</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">ገጾች:</span>
                    <span>280 ገጽ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">ቋንቋ:</span>
                    <span>አማርኛ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">አዘጋጅ:</span>
                    <span>ቅዱስ አባ ክርስቶስ</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 text-white p-8 rounded-xl">
                  <h4 className="text-3xl font-bold mb-4">ለማዘዝ</h4>
                  <p className="text-xl mb-6">ስልክ: +251 911 123 456</p>
                  <p className="text-lg">ኢሜይል: info@kidusbook.et</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20"
        style={{
          backgroundImage: "url(/network-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-7xl font-bold mb-12 leading-tight">
                የመጽሐፍ
                <br />
                መርጃ
              </h2>
              <div className="space-y-6 text-xl">
                <div className="flex items-center">
                  <span className="font-bold mr-4">ዋጋ:</span>
                  <span>150.00 ብር</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold mr-4">አዘጋጅ:</span>
                  <span>ቅዱስ አባ ክርስቶስ</span>
                </div>
              </div>
            </div>
            <div>
              <h3
                className="text-3xl font-bold mb-8"
                style={{ color: "#03304c" }}
              >
                ለበለጠ መረጃ ያግኙን
              </h3>
              <div className="space-y-6">
                <div
                  className="flex items-center text-lg"
                  style={{ color: "#03304c" }}
                >
                  <Phone
                    className="w-8 h-8 mr-6"
                    style={{ color: "#03304c" }}
                  />
                  <span>+251 911 123 456</span>
                </div>
                <div
                  className="flex items-center text-lg"
                  style={{ color: "#03304c" }}
                >
                  <Mail className="w-8 h-8 mr-6" style={{ color: "#03304c" }} />
                  <span>info@kidusbook.et</span>
                </div>
                <div
                  className="flex items-center text-lg"
                  style={{ color: "#03304c" }}
                >
                  <MapPin
                    className="w-8 h-8 mr-6"
                    style={{ color: "#03304c" }}
                  />
                  <span>አዲስ አበባ፣ ኢትዮጵያ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12"
        style={{
          backgroundImage: "url(/network-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className="text-3xl font-bold mb-6 md:mb-0"
              style={{ color: "#03304c" }}
            >
              ቅዱስ ዓቢይ ክርስቶስ
            </div>
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a
                href="#"
                className="transition-colors"
                style={{ color: "#03304c" }}
              >
                መነሻ ገጽ
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: "#03304c" }}
              >
                ስለ እኛ
              </a>
              <a
                href="#"
                className="transition-colors"
                style={{ color: "#03304c" }}
              >
                ያግኙን
              </a>
            </div>
            <div className="flex space-x-6">
              <Facebook className="w-8 h-8 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-8 h-8 hover:text-blue-400 cursor-pointer transition-colors" />
              <Youtube className="w-8 h-8 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p style={{ color: "#03304c" }}>
              © 2024 ቅዱስ ዓቢይ ክርስቶስ. ሁሉም መብቶች የተጠበቁ ናቸው።
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
