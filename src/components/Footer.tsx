import { Link } from "react-router-dom";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/history", label: "Our History" },
  { to: "/juan-leivas", label: "Juan Leivas" },
  { to: "/events", label: "Events" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/donate", label: "Donate" },
  { to: "/merch", label: "Merch" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      {/* Rope divider top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-terracotta flex items-center justify-center text-white font-display font-bold text-lg shadow-lg">
                1888
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white leading-tight block">
                  Americano Society
                </span>
                <span className="text-xs text-gold tracking-widest uppercase">
                  Prescott, Arizona
                </span>
              </div>
            </div>
            <p className="text-white/60 font-body max-w-md leading-relaxed mt-4">
              Honoring America, Preserving Heritage, Strengthening Community.
              Celebrating the Mexican-American heritage behind the World's Oldest
              Rodeo and the American West.
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-white/50">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Prescott, Arizona</span>
            </div>
            <a
              href="mailto:info.1888society@gmail.com"
              className="flex items-center gap-2 mt-2 text-sm text-white/50 hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span>info.1888society@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/60 hover:text-gold transition-colors duration-200 text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-4">
              Connect With Us
            </h3>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-6">
              Stay updated on events, heritage celebrations, and community
              initiatives in Prescott.
            </p>
            <div className="w-32 h-32 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-lg flex items-center justify-center text-charcoal font-display font-bold text-xs mb-1">
                  QR CODE
                </div>
                <span className="text-[10px] text-white/40">Scan to connect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            &copy; {new Date().getFullYear()} 1888 Americano Society. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs font-body">
              Honoring the heritage of Prescott, Arizona
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
