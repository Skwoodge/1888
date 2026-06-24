import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Users } from "lucide-react";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~60vh (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#1E1E1E]/95 backdrop-blur-md border-t border-[#D4A853]/20 px-4 py-3 safe-area-bottom">
        <div className="flex gap-3 max-w-lg mx-auto">
          <Link
            to="/get-involved"
            className="flex-1 flex items-center justify-center gap-2 bg-[#C1440E] hover:bg-[#9E370B] text-white font-body font-semibold text-sm rounded-xl py-3.5 transition-colors duration-200"
          >
            <Users className="w-4 h-4" />
            Volunteer
          </Link>
          <Link
            to="/donate"
            className="flex-1 flex items-center justify-center gap-2 bg-transparent border-2 border-[#D4A853]/60 text-[#D4A853] hover:bg-[#D4A853] hover:text-[#1E1E1E] font-body font-semibold text-sm rounded-xl py-3.5 transition-colors duration-200"
          >
            <Heart className="w-4 h-4" />
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}
