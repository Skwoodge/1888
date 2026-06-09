interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  side?: "left" | "right";
  delay?: number;
}

export default function TimelineItem({ year, title, description, side = "left", delay = 0 }: TimelineItemProps) {
  return (
    <div
      className={`flex items-start gap-6 ${side === "right" ? "sm:flex-row-reverse sm:text-right" : ""}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Dot */}
      <div className="hidden sm:flex flex-col items-center shrink-0">
        <div className="w-4 h-4 rounded-full bg-terracotta border-4 border-gold/30" />
        <div className="w-0.5 h-full bg-gold/20 min-h-[60px]" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="inline-block bg-terracotta text-cream font-display font-bold text-sm px-3 py-1 rounded-lg mb-2">
          {year}
        </div>
        <h3 className="font-display text-xl font-bold text-charcoal mt-2">{title}</h3>
        <p className="text-sm text-charcoal/60 mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
