import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/history", label: "Our History" },
  { to: "/juan-leivas", label: "Juan Leivas" },
  { to: "/events", label: "Events" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/donate", label: "Donate" },
  { to: "/merch", label: "Merch" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-white font-display font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
            1888
          </div>
          <div className="hidden sm:block">
            <span className={cn(
              "font-display text-lg font-bold leading-tight block transition-colors duration-500",
              scrolled ? "text-charcoal" : "text-white"
            )}>
              Americano Society
            </span>
            <span className={cn(
              "text-xs font-body tracking-widest uppercase transition-colors duration-500",
              scrolled ? "text-adobe" : "text-gold"
            )}>
              Prescott, AZ
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium font-body transition-all duration-300",
                location.pathname === link.to
                  ? "bg-terracotta text-white shadow-md"
                  : scrolled
                    ? "text-charcoal hover:bg-sand hover:text-terracotta"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate">
            <Button className="ml-3 bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-5 shadow-lg shadow-terracotta/20 hover:shadow-terracotta/40 transition-all duration-300 hover:-translate-y-0.5">
              Donate
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-xl",
                scrolled ? "text-charcoal hover:bg-sand" : "text-white hover:bg-white/10"
              )}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-cream w-72 p-0">
            <div className="p-6">
              <SheetTitle className="font-display text-xl text-charcoal mb-6">
                1888 Americano Society
              </SheetTitle>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium font-body transition-all duration-200",
                      location.pathname === link.to
                        ? "bg-terracotta text-white"
                        : "text-charcoal hover:bg-sand hover:text-terracotta"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link to="/donate" className="block mt-6">
                <Button className="w-full bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl py-6 text-base shadow-lg">
                  Donate Now
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}