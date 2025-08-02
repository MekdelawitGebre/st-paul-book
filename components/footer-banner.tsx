"use client";

import { Mail, Facebook, Instagram, MessageSquare } from "lucide-react";

export default function FooterBanner() {
  return (
    <div className="w-full bg-gray-100 py-4 px-1 sm:px-6 md:px-8">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between">
        <div className="flex-1">
          <h3
            className="text-blue-800 font-bold text-lg"
            style={{
              color: "#03304c",
              fontFamily:
                "Ketefa, Menbere, system-ui, -apple-system, sans-serif",
            }}
          >
            ቅዱስ ጳውሎስ
          </h3>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex-1 flex justify-center space-x-8">
          <a
            href="#about"
            className="text-[10px] text-blue-900 hover:text-blue-700 transition-colors duration-300"
          >
            ነገረ መጽሐፍ
          </a>
          <a
            href="#author"
            className="text-[10px] text-blue-900 hover:text-blue-900 transition-colors duration-300"
          >
            ደራሲው
          </a>
          <a
            href="#testimonials"
            className="text-[10px] text-blue-900 hover:text-blue-700 transition-colors duration-300"
          >
            አስተያየቶች
          </a>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex-1 flex justify-end space-x-4">
          <a
            href="mailto:selam@dnabel.com"
            className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://web.facebook.com/AbelKassahunMekuria12"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300"
            title="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/st.paul_book/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://t.me/Dnabel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300"
            title="Telegram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.14-.04-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.11 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile and Tablet Layout */}
      <div className="lg:hidden">
        {/* Logo and Navigation on same line */}
        <div className="flex items-center justify-between mb-4">
          {/* Logo on the left */}
          <div>
            <h3
              className="text-blue-900 font-bold text-lg"
              style={{
                color: "#03304c",
                fontFamily:
                  "Ketefa, Menbere, system-ui, -apple-system, sans-serif",
              }}
            >
              ቅዱስ ጳውሎስ
            </h3>
          </div>

          {/* Navigation Links centered */}
          <div className="flex-1 flex justify-center space-x-4">
            <a
              href="#about"
              className="text-[10px] text-blue-900 hover:text-blue-700 transition-colors duration-300"
            >
              ነገረ መጽሐፍ
            </a>
            <a
              href="#author"
              className="text-[10px] text-blue-900 hover:text-blue-700 transition-colors duration-300"
            >
              ደራሲው
            </a>
            <a
              href="#testimonials"
              className="text-[10px] text-blue-900 hover:text-blue-700 transition-colors duration-300"
            >
              አስተያየቶች
            </a>
          </div>
        </div>

        {/* Social Media Icons below */}
        <div className="flex justify-center space-x-4 ml-12">
          <a
            href="mailto:selam@dnabel.com"
            className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://web.facebook.com/AbelKassahunMekuria12"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white transition-all duration-300"
            title="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/st.paul_book/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all duration-300"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://t.me/Dnabel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border-2 border-blue-900 rounded-full flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all duration-300"
            title="Telegram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.14-.04-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.11 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
