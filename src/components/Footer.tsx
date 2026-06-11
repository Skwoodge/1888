import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

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
                <img
                  src="/assets/logo.png"
                  alt="1888 Americano Society Logo"
                  className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-gold/30"
                />
              <div>
                <span className="font-display text-xl font-bold text-white leading-tight block">
                  1888 Americano Society
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

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-gold mb-4">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info.1888society@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm font-body"
              >
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>info.1888society@gmail.com</span>
              </a>
              <a
                href="tel:9287138216"
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm font-body"
              >
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>(928) 713-8216</span>
              </a>
              <div className="flex items-center gap-2 text-white/60 text-sm font-body">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Prescott, Arizona</span>
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