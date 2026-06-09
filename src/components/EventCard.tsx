interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  featured?: boolean;
  delay?: number;
}

export default function EventCard({ title, date, location, description, featured = false, delay = 0 }: EventCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
        featured
          ? "border-terracotta/30 bg-gradient-to-br from-terracotta/5 to-gold/5"
          : "border-gold/20 bg-cream hover:border-gold/40"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className={`shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center ${
          featured ? "bg-terracotta text-cream" : "bg-terracotta/10 text-terracotta"
        }`}>
          <span className="text-xs font-bold uppercase leading-none">
            {date.split(" ")[0]}
          </span>
          <span className="text-xl font-display font-bold leading-none mt-0.5">
            {date.split(" ")[1]}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-bold text-charcoal">{title}</h3>
          <p className="text-xs text-charcoal/40 mt-1 uppercase tracking-wider">{location}</p>
          <p className="text-sm text-charcoal/60 mt-3 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
