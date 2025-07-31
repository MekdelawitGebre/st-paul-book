"use client";

import { Facebook, Mail, Instagram, MessageCircle } from "lucide-react";
import FooterBanner from "./footer-banner";

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{
        backgroundImage: "url(/network-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Footer Banner */}
      <div className="container mx-auto px-4 mb-8">
        <div className="glass-effect rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#03304c" }}
            >
              ቅዱስ ጳውሎስ መጽሐፍ
            </h2>
            <p
              className="text-lg md:text-xl mb-6 opacity-90"
              style={{ color: "#03304c" }}
            >
              የሃይማኖት እና የመንፈስ ቅድመ ሁኔታ ለማሻሻል የተዘጋጀ መጽሐፍ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 bg-[#03304c] text-white rounded-lg hover:bg-[#044a6b] transition-all duration-300 hover:scale-105 font-medium">
                መጽሐፍ ያግኙ
              </button>
              <button className="px-8 py-3 border-2 border-[#03304c] text-[#03304c] rounded-lg hover:bg-[#03304c] hover:text-white transition-all duration-300 hover:scale-105 font-medium">
                ተጨማሪ ይወቁ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Banner Component */}
      <FooterBanner />

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
              className="transition-colors hover:opacity-80"
              style={{ color: "#03304c" }}
            >
              መነሻ ገጽ
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: "#03304c" }}
            >
              ስለ እኛ
            </a>
            <a
              href="#"
              className="transition-colors hover:opacity-80"
              style={{ color: "#03304c" }}
            >
              ያግኙን
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/st.paul_book/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:text-pink-500"
              style={{ color: "#03304c" }}
              title="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://web.facebook.com/AbelKassahunMekuria12"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-600"
              style={{ color: "#03304c" }}
              title="Facebook"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="mailto:selam@dnabel.com"
              className="transition-all duration-300 hover:scale-110 hover:text-red-500"
              style={{ color: "#03304c" }}
              title="Email"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://t.me/Dnabel"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:text-blue-500"
              style={{ color: "#03304c" }}
              title="Telegram"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p style={{ color: "#03304c" }}>
            © 2024 ቅዱስ ዓቢይ ክርስቶስ. ሁሉም መብቶች የተጠበቁ ናቸው።
          </p>
        </div>
      </div>
    </footer>
  );
}
