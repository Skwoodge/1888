import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface QuickLinkCardProps {
  to: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient?: string;
  delay?: number;
}

export default function QuickLinkCard({
  to,
  title,
  description,
  icon: Icon,
  gradient = "from-terracotta to-terracotta-700",
  delay = 0,
}: QuickLinkCardProps) {
  return (
    <Link to={to} className="group block" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 h-full border border-gold/20 bg-cream hover:border-gold/40 transition-all duration-500 hover:shadow-xl hover:shadow-terracotta/10 hover:-translate-y-1">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-500">
            <Icon className="h-6 w-6 text-terracotta group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-white transition-colors duration-500 mb-2">
            {title}
          </h3>
          <p className="text-sm text-charcoal/60 group-hover:text-white/70 transition-colors duration-500 leading-relaxed">
            {description}
          </p>
          <div className="mt-4 text-terracotta group-hover:text-gold text-sm font-semibold flex items-center gap-1 transition-colors duration-500">
            Learn More
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
