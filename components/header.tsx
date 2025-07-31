"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail, Facebook, Instagram } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        const element =
          typeof document !== "undefined"
            ? document.getElementById(section)
            : null;
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
    { href: "#readers", label: "አንባብያን", id: "readers" },
    { href: "#programs", label: "መርሐ ግብራት", id: "programs" },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-500"
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold transition-all duration-300"
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
                style={{
                  color: "#03304c",
                }}
              >
                <span className="relative z-10 group-hover:text-[#03304c] transition-all duration-300 font-medium">
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
            <div
              className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            ></div>
            <div className="relative z-10">
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Glass Sidebar */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 glass-backdrop z-40 md:hidden transition-all duration-500"
            onClick={closeMenu}
          />

          {/* Sidebar Blur Area */}
          <div
            className="fixed top-0 right-0 h-full w-80 z-40 md:hidden transition-all duration-500 ease-out sidebar-blur-area"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          />

          {/* Glass Sidebar */}
          <div
            className="fixed top-0 right-0 h-full w-80 z-50 md:hidden transform transition-all duration-500 ease-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="h-full w-full glass-sidebar">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/30 glass-hover">
                  <div
                    className="text-xl font-bold"
                    style={{ color: "#03304c" }}
                  >
                    ቅዱስ ጳውሎስ
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg glass-hover"
                    style={{ color: "#03304c" }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-6 space-y-4">
                  {navItems.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="block p-4 rounded-lg glass-hover transition-all duration-300 group"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: isMenuOpen
                          ? "slideInRight 0.5s ease-out forwards"
                          : "none",
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#03304c] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <span
                          className="text-lg font-medium"
                          style={{ color: "#03304c" }}
                        >
                          {item.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-white/30 glass-hover">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      Connect with us
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="mailto:selam@dnabel.com"
                        className="p-2 rounded-lg glass-hover"
                        style={{ color: "#03304c" }}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href="https://web.facebook.com/AbelKassahunMekuria12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass-hover"
                        style={{ color: "#03304c" }}
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/st.paul_book/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass-hover"
                        style={{ color: "#03304c" }}
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
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
