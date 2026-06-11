import { Link } from "react-router-dom";

interface QuickLinkCardProps {
  to: string;
  title: string;
  description: string;
  gradient?: string;
}

const QuickLinkCard = ({ to, title, description, gradient }: QuickLinkCardProps) => {
  return (
    <Link to={to} className="group block">
      <div
        className={`relative h-64 rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl ${
          gradient || "bg-gradient-to-br from-[#C1440E] to-[#6B3A2A]"
        }`}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
          <h3 className="font-['Playfair_Display'] text-2xl text-white mb-3 group-hover:scale-105 transition-transform duration-500">
            {title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
            {description}
          </p>
          <div className="mt-4 w-8 h-[2px] bg-[#D4A853] group-hover:w-16 transition-all duration-500" />
        </div>
      </div>
    </Link>
  );
};

export default QuickLinkCard;
