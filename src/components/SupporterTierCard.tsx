interface SupporterTierCardProps {
  name: string;
  amount: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay?: number;
}

export default function SupporterTierCard({
  name,
  amount,
  description,
  features,
  highlighted = false,
  delay = 0,
}: SupporterTierCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 sm:p-8 border-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
        highlighted
          ? "border-terracotta bg-terracotta text-cream shadow-lg shadow-terracotta/20"
          : "border-gold/30 bg-cream hover:border-gold"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className={`font-display text-xl font-bold ${highlighted ? "text-cream" : "text-charcoal"}`}>
          {name}
        </h3>
        <div className="mt-3">
          <span className={`font-display text-4xl font-bold ${highlighted ? "text-gold" : "text-terracotta"}`}>
            {amount}
          </span>
        </div>
        <p className={`mt-2 text-sm ${highlighted ? "text-cream/70" : "text-charcoal/60"}`}>
          {description}
        </p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${highlighted ? "bg-gold" : "bg-terracotta"}`} />
            <span className={`text-sm ${highlighted ? "text-cream/80" : "text-charcoal/60"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
