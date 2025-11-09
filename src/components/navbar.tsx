import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navs = [
    { title: "الرئيسية", path: "#hero" },
    { title: "من نحن", path: "#about" },
    { title: "خدماتنا", path: "#services" },
    { title: "تواصل معنا", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollOrNavigate = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#fffaf0]/90 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.08)] border-b border-[#d4af37]/20"
          : "bg-gradient-to-b from-[#faf8f4]/20 to-transparent backdrop-blur-sm"
      }`}
    >
      <header className="container mx-auto px-5 xl:px-0 flex items-center justify-between h-[80px] transition-colors duration-300">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo.png"
            alt="شعار شركة أنوار القلعة"
            className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.2)]"
          />
          <span
            className={`font-semibold text-lg tracking-wide transition-colors ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            } group-hover:text-[#b8911a]`}
          >
            أنوار القلعة
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navs.map((n) => (
            <a
              key={n.title + n.path}
              href={n.path}
              onClick={(e) => handleScrollOrNavigate(e, n.path)}
              className={`text-lg font-medium transition-all duration-300 ${
                scrolled
                  ? "text-[#1a1a1a] hover:text-[#b8911a] hover:underline underline-offset-8"
                  : "text-white hover:text-[#d4af37] hover:underline underline-offset-8"
              }`}
            >
              {n.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="https://www.facebook.com/anwaralqalaa"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ${
              scrolled
                ? "border-[#b8911a]/30 text-[#1a1a1a] hover:bg-[#b8911a]/10"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <FaFacebookF className="w-4 h-4" />
          </a>

          <a
            href="mailto:info@anwar-alqalaa.com.ly"
            className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ${
              scrolled
                ? "border-[#b8911a]/30 text-[#1a1a1a] hover:bg-[#b8911a]/10"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden p-2 rounded-md transition-all duration-300 ${
              scrolled
                ? "text-[#1a1a1a] hover:bg-[#b8911a]/10"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div
        className={`absolute top-[80px] left-0 w-full md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } ${
          scrolled
            ? "bg-[#fffaf0]/95 text-[#1a1a1a] border-t border-[#b8911a]/20"
            : "bg-[#1a1a1a]/90 text-white"
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-4">
          {navs.map((n) => (
            <a
              key={n.title + n.path}
              href={n.path}
              onClick={(e) => handleScrollOrNavigate(e, n.path)}
              className="text-lg font-medium hover:text-[#b8911a] transition-all"
            >
              {n.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
