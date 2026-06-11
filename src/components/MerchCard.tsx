import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MerchCardProps {
  name: string;
  price: string;
  image?: string;
  available?: boolean;
}

const MerchCard = ({ name, price, image, available = false }: MerchCardProps) => {
  return (
    <Card className="group overflow-hidden bg-[#1E1E1E]/50 border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#D4A853]/40 hover:bg-[#1E1E1E]/80">
      <div className="aspect-square bg-gradient-to-br from-[#C1440E]/5 to-[#D4A853]/5 flex items-center justify-center overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="text-[#D4A853]/20 text-6xl font-['Playfair_Display'] transition-transform duration-500 group-hover:scale-110 group-hover:text-[#D4A853]/30">
            1888
          </div>
        )}
        {!available && (
          <Badge className="absolute top-3 right-3 bg-[#C1440E] text-white text-xs">
            Coming Soon
          </Badge>
        )}
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-['Playfair_Display'] text-white text-lg mb-1 group-hover:text-[#D4A853] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-[#D4A853] font-semibold">{price}</p>
      </CardContent>
    </Card>
  );
};

export default MerchCard;
