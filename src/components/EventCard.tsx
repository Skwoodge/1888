import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location?: string;
  description: string;
  highlight?: boolean;
}

const EventCard = ({ title, date, location, description, highlight = false }: EventCardProps) => {
  return (
    <div
      className={`group relative p-6 rounded-xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        highlight
          ? "bg-gradient-to-br from-[#C1440E]/10 via-[#1E1E1E] to-[#D4A853]/10 border-[#D4A853]/30 hover:border-[#D4A853]/60 hover:shadow-[#C1440E]/10"
          : "bg-[#1E1E1E]/50 border-white/10 hover:border-[#D4A853]/40 hover:bg-[#1E1E1E]/80 hover:shadow-[#D4A853]/5"
      }`}
    >
      <div className="flex items-center space-x-2 text-[#D4A853] text-sm mb-3">
        <Calendar size={16} className="group-hover:scale-110 transition-transform duration-300" />
        <span className="font-medium">{date}</span>
        {location && (
          <>
            <span className="text-white/30">•</span>
            <MapPin size={14} />
            <span className="text-white/60">{location}</span>
          </>
        )}
      </div>
      <h3 className="text-xl font-['Playfair_Display'] text-white mb-2 group-hover:text-[#D4A853] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default EventCard;
