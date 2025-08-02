"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "author",
        "testimonials",
        "quotes",
        "readers",
        "programs",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "ነገረ መጽሐፍ", id: "about" },
    { href: "#author", label: "ደራሲው", id: "author" },
    { href: "#testimonials", label: "መምሕራን", id: "testimonials" },
    { href: "#quotes", label: "ጥቅሶች", id: "quotes" },
    { href: "#readers-testimonials", label: "አንባብያን", id: "readers" },
    { href: "#programs", label: "መርሐ ግብራት", id: "programs" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
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
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm group px-2 py-1 transition-all duration-300"
                style={{ color: "#03304c" }}
              >
                <span className="relative z-10 group-hover:text-[#03304c] font-medium">
                  {item.label}
                  <div
                    className={`absolute -bottom-1 left-0 bg-[#03304c] transition-all duration-500 ease-out rounded-full ${
                      activeSection === item.id
                        ? "w-full h-1"
                        : "w-0 h-1 group-hover:w-full"
                    }`}
                  ></div>
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-xl transition-all duration-300 relative overflow-hidden"
            style={{
              color: "#03304c",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
            }}
          >
            <div className="relative z-10">
              {isMenuOpen ? (
                <X className="w-6 h-6 rotate-90 transition-transform" />
              ) : (
                <Menu className="w-6 h-6 transition-transform" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={closeMenu}
            style={{
              background: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          ></div>

          {/* Sidebar Panel */}
          <div
            className="fixed top-0 right-0 h-screen w-[320px] z-50 md:hidden"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(80px)",
              WebkitBackdropFilter: "blur(80px)",
              borderLeft: "1px solid rgba(255,255,255,0.4)",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.5)",
              transition: "transform 0.5s ease-out",
            }}
          >
            <div className="h-full flex flex-col">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/30">
                <div
                  className="text-xl font-bold"
                  style={{
                    color: "#03304c",
                    fontFamily:
                      "Ketefa, Menbere, system-ui, -apple-system, sans-serif",
                  }}
                >
                  ቅ ዱ ስ&nbsp;&nbsp; ጳ ው ሎ ስ
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                  style={{ color: "#03304c" }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 p-6 space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block p-3 rounded-lg hover:bg-white/30 transition-all duration-300 group relative overflow-hidden"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMenuOpen
                        ? "slideInRight 0.5s ease-out forwards"
                        : "none",
                      color: "#03304c",
                    }}
                  >
                    <span className="text-lg font-medium group-hover:text-[#1a4a6b]">
                      {item.label}
                    </span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a4a6b] transition-all duration-300 group-hover:w-full"></div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
