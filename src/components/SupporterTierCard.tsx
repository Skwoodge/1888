import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SupporterTierCardProps {
  title: string;
  amount: string;
  description: string;
  features?: string[];
  featured?: boolean;
  donateUrl: string;
}

const SupporterTierCard = ({
  title,
  amount,
  description,
  features,
  featured = false,
  donateUrl,
}: SupporterTierCardProps) => {
  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
        featured
          ? "bg-gradient-to-br from-[#C1440E] to-[#6B3A2A] text-white border-[#D4A853] shadow-lg shadow-[#C1440E]/20 hover:shadow-[#C1440E]/40"
          : "bg-[#1E1E1E]/50 border-[#D4A853]/20 text-white hover:border-[#D4A853]/50 hover:bg-[#1E1E1E]/80"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-[#D4A853] text-[#1E1E1E] text-xs font-bold px-3 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      <CardContent className="p-6 text-center">
        <h3 className="font-['Playfair_Display'] text-2xl mb-2 group-hover:text-[#D4A853] transition-colors duration-300">
          {title}
        </h3>
        <div className="text-3xl font-bold text-[#D4A853] mb-4">{amount}</div>
        <p
          className={`text-sm mb-6 leading-relaxed ${
            featured ? "text-white/90" : "text-white/60"
          }`}
        >
          {description}
        </p>

        {features && (
          <ul className="space-y-2 mb-6 text-left">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-center text-sm ${
                  featured ? "text-white/90" : "text-white/70"
                }`}
              >
                <span className="text-[#D4A853] mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <Button
          asChild
          className={`w-full transition-all duration-300 ${
            featured
              ? "bg-[#D4A853] text-[#1E1E1E] hover:bg-white hover:shadow-lg hover:shadow-white/20"
              : "bg-[#C1440E] text-white hover:bg-[#D4A853] hover:text-[#1E1E1E] hover:shadow-lg hover:shadow-[#C1440E]/30"
          }`}
        >
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Now
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SupporterTierCard;
