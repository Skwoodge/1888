interface MerchCardProps {
  name: string;
  price: string;
  description: string;
  comingSoon?: boolean;
  delay?: number;
}

export default function MerchCard({ name, price, description, comingSoon = true, delay = 0 }: MerchCardProps) {
  return (
    <div
      className="rounded-2xl border border-gold/20 bg-cream overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-gold/40 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-square bg-gradient-to-br from-terracotta/5 to-gold/10 flex items-center justify-center relative overflow-hidden">
        <div className="w-24 h-24 rounded-full bg-terracotta/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <span className="font-display text-3xl font-bold text-terracotta/40">1888</span>
        </div>
        {comingSoon && (
          <div className="absolute top-4 right-4 bg-charcoal/80 text-cream text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Coming Soon
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-charcoal">{name}</h3>
        <p className="text-sm text-charcoal/50 mt-1">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-display text-xl font-bold text-terracotta">{price}</span>
          <span className="text-xs text-charcoal/40 uppercase tracking-wider">Contact to Order</span>
        </div>
      </div>
    </div>
  );
}
