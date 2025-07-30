"use client";

import { Facebook, Twitter, Youtube } from "lucide-react";

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
  );
}
