"use client";

export default function Header() {
  return (
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
              href="#testimonials"
              className="transition-colors text-sm hover:opacity-80"
              style={{ color: "#03304c" }}
            >
              መምሕራን
            </a>
            <a
              href="#quotes"
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
  );
}
