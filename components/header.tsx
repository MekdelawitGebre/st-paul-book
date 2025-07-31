"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsAnimating(true);
    setIsMenuOpen(!isMenuOpen);
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  const closeMenu = () => {
    setIsAnimating(true);
    setIsMenuOpen(false);
    // Reset animation state after transition
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === "undefined") return;

    const handleScroll = () => {
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
      className="sticky top-0 shadow-2xl z-50 backdrop-blur-3xl border-b border-white/30 transition-all duration-500"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
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
                <span className="relative z-10 group-hover:text-[#03304c] transition-all duration-300 group-hover:scale-105 font-medium">
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
            className="md:hidden p-2 rounded-lg glass-hover"
            style={{ color: "#03304c" }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Glass Sidebar */}
      {isMenuOpen && (
        <>
          {/* Enhanced Backdrop with Blur */}
          <div
            className="fixed inset-0 glass-backdrop z-40 md:hidden transition-all duration-500"
            onClick={closeMenu}
            style={{
              background: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(20px)",
            }}
          />

          {/* Background Blur Overlay */}
          <div
            className="fixed inset-0 z-45 md:hidden transition-all duration-500 ease-out"
            style={{
              backdropFilter: isMenuOpen ? "blur(30px)" : "blur(0px)",
              background: isMenuOpen
                ? "rgba(0, 0, 0, 0.15)"
                : "rgba(0, 0, 0, 0)",
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "scale(1)" : "scale(0.98)",
            }}
          />

          {/* Targeted Sidebar Area Blur */}
          <div
            className={`fixed top-0 right-0 h-full w-80 z-40 md:hidden transition-all duration-500 ease-out ${
              isMenuOpen ? "sidebar-blur-area" : ""
            }`}
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          />

          {/* Extended Blur Area */}
          <div
            className={`fixed top-0 right-80 h-full w-40 z-40 md:hidden transition-all duration-500 ease-out ${
              isMenuOpen ? "sidebar-blur-fade" : ""
            }`}
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          />

          {/* Page Content Blur Effect */}
          <div
            className="fixed inset-0 z-35 md:hidden pointer-events-none transition-all duration-500 ease-out"
            style={{
              backdropFilter: isMenuOpen ? "blur(15px)" : "blur(0px)",
              opacity: isMenuOpen ? 1 : 0,
            }}
          />

          {/* Enhanced Glass Sidebar with Slide Animation */}
          <div
            className="fixed top-0 right-0 h-full w-80 z-50 md:hidden transform transition-all duration-500 ease-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div
              className="h-full w-full glass-sidebar"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.08) 0%, 
                    rgba(255, 255, 255, 0.06) 25%, 
                    rgba(255, 255, 255, 0.04) 50%, 
                    rgba(255, 255, 255, 0.02) 100%
                  ),
                  linear-gradient(45deg, 
                    rgba(255, 255, 255, 0.06) 0%, 
                    rgba(255, 255, 255, 0.03) 100%
                  )
                `,
                borderLeft: "1px solid rgba(255, 255, 255, 0.25)",
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                `,
              }}
            >
              <div className="flex flex-col h-full">
                {/* Enhanced Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/30 glass-hover">
                  <div
                    className="text-xl font-bold"
                    style={{ color: "#03304c" }}
                  >
                    ቅዱስ ጳውሎስ
                  </div>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg glass-hover hover:scale-110"
                    style={{ color: "#03304c" }}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Enhanced Navigation Items */}
                <nav className="flex-1 p-6">
                  <div className="space-y-6">
                    {navItems.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="block text-lg font-medium transition-all duration-500 hover:translate-x-3 hover:scale-105 relative overflow-hidden group"
                        style={{
                          color: "#03304c",
                          animationDelay: `${index * 100}ms`,
                          animation: "slideInRight 0.5s ease-out forwards",
                        }}
                      >
                        <span className="relative z-10 group-hover:text-[#03304c] transition-all duration-300">
                          {item.label}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                      </a>
                    ))}
                  </div>
                </nav>

                {/* Enhanced Footer */}
                <div className="p-6 border-t border-white/30 glass-hover">
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

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
