import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white">
      {/* Dramatic Quote Section */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-white/80 leading-relaxed">
            "For all Americans with Mexican heritage — preserving our past,
            <span className="text-[#D4A853]"> honoring our heroes</span>,
            strengthening our community."
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-['Playfair_Display'] text-xl font-bold text-[#D4A853]">
                1888 Americano Society
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed italic mb-4">
              Honoring the Heritage & Service of Mexican Americans in Prescott and the American West.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#D4A853] text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/heritage", label: "Our Heritage" },
                { to: "/events", label: "Events & Sponsorship" },
                { to: "/get-involved", label: "Get Involved" },
                { to: "/donate", label: "Donate" },
                { to: "/merch", label: "Merch" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-[#D4A853] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#D4A853] text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-white/60 text-sm">
                <Mail size={16} className="text-[#C1440E] shrink-0" />
                <a
                  href="mailto:info.1888society@gmail.com"
                  className="hover:text-[#D4A853] transition-colors"
                >
                  info.1888society@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/60 text-sm">
                <Phone size={16} className="text-[#C1440E] shrink-0" />
                <a
                  href="tel:+19287138216"
                  className="hover:text-[#D4A853] transition-colors"
                >
                  (928) 713-8216
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/60 text-sm">
                <MapPin size={16} className="text-[#C1440E] shrink-0" />
                <span>Prescott, Arizona</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-['Playfair_Display'] text-[#D4A853] text-lg font-semibold mb-4">
              Connect With Us
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Join us in honoring the heritage and service of Mexican Americans
              in Prescott and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:info.1888society@gmail.com"
                className="w-10 h-10 bg-[#C1440E]/20 rounded-full flex items-center justify-center text-[#C1440E] hover:bg-[#C1440E] hover:text-white transition-all duration-300"
                aria-label="Email us"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} 1888 Americano Society. All rights reserved.
          </p>
          <p className="text-white/30 text-xs italic font-display">
            Est. 1888 — Prescott, Arizona
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
