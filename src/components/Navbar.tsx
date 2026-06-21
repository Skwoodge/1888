import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/heritage", label: "Heritage" },
  { path: "/events", label: "Events & Sponsorships" },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/donate", label: "Donate" },
  { path: "/merch", label: "Merch" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#1E1E1E]/95 backdrop-blur-md shadow-lg border-b border-[#D4A853]/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center shrink-0 group">
            <span className="font-['Playfair_Display'] text-xl font-bold text-[#D4A853] tracking-wide transition-all duration-300 group-hover:text-white">
              1888 Americano Society
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md relative",
                  location.pathname === link.path
                    ? "text-[#D4A853] bg-[#D4A853]/10"
                    : "text-white/80 hover:text-[#D4A853] hover:bg-white/5"
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#D4A853] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#1E1E1E]/98 backdrop-blur-md border-t border-[#D4A853]/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-md transition-all duration-200",
                  location.pathname === link.path
                    ? "text-[#D4A853] bg-[#D4A853]/10"
                    : "text-white/80 hover:text-[#D4A853] hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#C1440E] via-[#D4A853] to-[#C1440E] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
