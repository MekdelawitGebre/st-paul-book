import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function EthiopianOrthodoxSite() {
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
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Author - Kidus Aba Kristos"
                width={400}
                height={500}
                className="rounded-2xl shadow-xl mx-auto object-cover"
              />
            </div>
            <div>
              <h3
                className="text-4xl font-bold mb-8"
                style={{ color: "#03304c" }}
              >
                ቅዱስ ጳውሎስ
              </h3>
              <p
                className="leading-relaxed mb-6 text-lg"
                style={{ color: "#03304c" }}
              >
                በዚህ መጽሐፍ ከጳውሎስ ጋር በጠርሴስ እንድኻለን፣ በኢየሩሳሌም ከገማልያል እግር ስር እንቀመጠለን።
                በአይሁድ ሸንጎ ገብተንም ከእስጢፋኖስ ጋር እንሟገታለን፥ ጻድቁም ሲወገር እኛ ከሳውል ጋር የድንጋይ
                ወርዋሪዎቹን ልብስ እንጠብቃለን። ደግሞ ቤተ ክርስቲያንን እያፈረስን ክርስቲያኖቹን እናሳስራለን።
                ከዚያም ይህ አልበቃ ብሎን በደማስቆ ያሉ ክርስቲያኖችን ልናሳድ ከሊቀ ካህናቱ ፈቃድ ተቀብለን
                እንወጣለን። ወደ ደማስቆም ለጥፋት ስንገሰግስ ድንገት መለኮታዊ በሆነ ብርሃን ተመትተን እንወድቃለን።
                ከወደቅንበት ስንነሳ ግን የድሮ ማንነታችንን አስወግደን በትንሳኤ ልቡና አዲስ ሰው እንሆናለን። ወደ
                ደማስቆ ገብተን ያጠፋነውን እንክሳለን። ወደ አረብ በርሃም ሄደን ሦስት ዓመታትን በጾም በጸሎት ደጅ
                እንጠናለን። ቀጥለንም ወደ ረጅሙ የአገልግሎት መንገድ እንገባለን። ሐዋርያውንም በየአገራቱ እየተከተልን
                አብረነው እንደ ወፍ እንበራለን። በስተመጨረሻም ወደ ሮም ሄደን ከጨካኙ ኔሮ ፊት እንቆማለን። ሐዋርያው
                ሩጫውን የሚጨርስበትን ሰማዕትነት ሲቀበል እኛ ግን አይተን አዝነን እናለቅሳለን። ከዚያም መልስ
                ስድስቱን ምዕራፎች የጀመርነውን ጳውሎሳዊ ሕይወት እንቀጥላዋለን።
              </p>
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
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-900 text-white transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-10">
                <div className="text-8xl mb-6 opacity-30">"</div>
                <p className="text-lg leading-relaxed mb-8">
                  ይህ መጽሐፍ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን ታሪክ እና ትምህርት ላይ ጠቃሚ
                  መረጃዎችን ያካትታል። ለእያንዳንዱ ኦርቶዶክስ ተዋሕዶ አባል አስፈላጊ የሆነ መጽሐፍ ነው። በተለይ
                  የአባቶች ትምህርቶች በዚህ መጽሐፍ ውስጥ በሚያምር ሁኔታ ተቀምጠዋል።
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">አ</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">አባ ገብረ ሚካኤል</p>
                    <p className="text-blue-200">የቤተ ክርስቲያን መምህር</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-10">
                <div className="text-8xl mb-6 text-gray-300">"</div>
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  በዚህ መጽሐፍ ውስጥ የተካተቱት መንፈሳዊ ትምህርቶች ለእኔ ብዙ ጠቃሚ ሆነዋል። የጸሎት እና የጾም
                  ትምህርቶቹ በተለይ አስተማሪ ናቸው። ለሁሉም የቤተ ክርስቲያን አባላት እመክራለሁ።
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ሳ</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      ወ/ሮ ሳራ ተስፋዬ
                    </p>
                    <p className="text-gray-600">የቤተ ክርስቲያን አባል</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-900 text-white transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-10">
                <div className="text-8xl mb-6 opacity-30">"</div>
                <p className="text-lg leading-relaxed mb-8">
                  ቅዱስ አባ ክርስቶስ ሳምራ በዚህ መጽሐፍ ውስጥ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያንን
                  ጥልቅ ትምህርቶች በሚያምር ሁኔታ አቅርበዋል። ይህ መጽሐፍ የእኛ ቤተ ክርስቲያን ሀብት ነው።
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full mr-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ዮ</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">ዲ/ን ዮሐንስ ወልደ</p>
                    <p className="text-blue-200">የቤተ ክርስቲያን ሊቀ ዲያቆን</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
              ተጨማሪ
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="bg-blue-900 text-white">
              <CardContent className="p-16 text-center">
                <div className="text-9xl mb-8 opacity-30">"</div>
                <p className="text-2xl leading-relaxed mb-12 max-w-4xl mx-auto">
                  ይህ መጽሐፍ የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን መንፈሳዊ ሀብት ነው። በዚህ መጽሐፍ
                  ውስጥ የተካተቱት ትምህርቶች የአባቶቻችንን ጥልቅ ዕውቀት እና የመንፈሳዊ ሕይወት መመሪያዎች ናቸው።
                  ለእያንዳንዱ ኦርቶዶክስ ተዋሕዶ አባል ይህ መጽሐፍ እንደ መንፈሳዊ መመሪያ ሊያገለግል ይችላል።
                  የቤተ ክርስቲያናችን ታሪክ፣ ትምህርት እና ወግ በዚህ መጽሐፍ ውስጥ በሚያምር ሁኔታ ተቀምጧል።
                </p>
                <div className="text-right">
                  <p className="text-2xl font-bold">ቅዱስ አባቶች ገጽ-22</p>
                </div>
              </CardContent>
            </Card>
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
