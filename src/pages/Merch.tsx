import { ShoppingBag, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";

const merchItems = [
  {
    name: "1888 Society T-Shirt",
    price: "$25",
    desc: "Classic terracotta tee with the 1888 Americano Society logo.",
    badge: "Coming Soon",
  },
  {
    name: "Heritage Snapback Hat",
    price: "$30",
    desc: "Embroidered logo on a structured snapback. Available in charcoal and sand.",
    badge: "Coming Soon",
  },
  {
    name: "Americano Sticker Pack",
    price: "$8",
    desc: "Die-cut vinyl stickers featuring the 1888 logo and western heritage designs.",
    badge: "Coming Soon",
  },
  {
    name: "Heritage Poster",
    price: "$20",
    desc: "24×36 poster celebrating Prescott's western heritage and the World's Oldest Rodeo.",
    badge: "Coming Soon",
  },
  {
    name: "1888 Tote Bag",
    price: "$18",
    desc: "Durable canvas tote with the society logo. Perfect for events and everyday use.",
    badge: "Coming Soon",
  },
  {
    name: "Cowboy Coffee Mug",
    price: "$15",
    desc: "Ceramic mug with heritage design. Start every morning like a vaquero.",
    badge: "Coming Soon",
  },
];

export default function Merch() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-adobe to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(139,154,123,0.12),transparent_60%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <SectionReveal>
            <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
              Show Your Pride
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              1888 Society{" "}
              <span className="text-gold italic">Merchandise</span>
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              Wear the heritage. Share the story. Every item supports the
              mission of the 1888 Americano Society.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Merch Grid */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {merchItems.map((item, i) => (
              <SectionReveal key={item.name} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gold/15 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-sand to-sand-dark flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-terracotta/20 group-hover:text-terracotta/40 transition-colors duration-300" />
                    <span className="absolute top-4 right-4 bg-terracotta text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                      {item.name}
                    </h3>
                    <p className="font-display text-xl font-bold text-terracotta mb-3">
                      {item.price}
                    </p>
                    <p className="font-body text-charcoal/60 text-sm leading-relaxed flex-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* CTA */}
          <SectionReveal delay={500}>
            <div className="mt-16 text-center bg-white rounded-2xl p-8 sm:p-12 border border-gold/15 shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-terracotta" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-3">
                Ready to Order?
              </h2>
              <p className="font-body text-charcoal/60 text-lg max-w-xl mx-auto mb-6">
                Items are available for order. Contact us to place your order
                and support the 1888 Americano Society.
              </p>
              <a href="mailto:info.1888society@gmail.com?subject=Merchandise%20Order%20Inquiry">
                <Button className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-5 text-lg shadow-lg shadow-terracotta/20 transition-all duration-300 hover:-translate-y-0.5">
                  Contact Us to Order
                </Button>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}