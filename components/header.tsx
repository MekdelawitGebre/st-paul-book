"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: "ነገረ መጽሐፍ" },
    { href: "#author", label: "ደራሲው" },
    { href: "#testimonials", label: "መምሕራን" },
    { href: "#quotes", label: "ጥቅሶች" },
    { href: "#readers", label: "አንባብያን" },
    { href: "#programs", label: "መርሐ ግብራት" },
  ];

  return (
    <header
      className="shadow-sm relative z-50"
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
            ቅ ዱ ስ&nbsp;&nbsp; ጳ ው ሎ ስ
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative overflow-hidden transition-all duration-300 text-sm hover:opacity-80 group"
                style={{ color: "#03304c" }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#03304c" }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Glass Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* Glass Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 z-50 md:hidden">
            <div
              className="h-full w-full backdrop-blur-md bg-white/20 border-l border-white/30 shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                  <div
                    className="text-xl font-bold"
                    style={{ color: "#03304c" }}
                  >
                    ቅዱስ ጳውሎስ
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg transition-colors"
                    style={{ color: "#03304c" }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-6">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block text-lg font-medium transition-all duration-300 hover:translate-x-2"
                        style={{ color: "#03304c" }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-white/20">
                  <div
                    className="text-sm opacity-70"
                    style={{ color: "#03304c" }}
                  >
                    © 2024 ቅዱስ ጳውሎስ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
