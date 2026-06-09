import { Heart, BookOpen, Flag, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";

const tiers = [
  {
    name: "Vaquero Supporter",
    amount: "$25",
    icon: Heart,
    desc: "Your contribution helps us share the stories of the vaqueros and Mexican-American cowboys who shaped the West.",
    color: "border-sage/30 hover:border-sage",
  },
  {
    name: "Heritage Supporter",
    amount: "$50",
    icon: BookOpen,
    desc: "Support our educational programs that teach the true history of the American West and the cultures that built it.",
    color: "border-gold/30 hover:border-gold",
    featured: false,
  },
  {
    name: "Founding Patron",
    amount: "$100",
    icon: Landmark,
    desc: "Become a founding patron of the 1888 Americano Society. Your generosity helps preserve heritage for future generations.",
    color: "border-terracotta/30 hover:border-terracotta",
    featured: true,
  },
  {
    name: "Legacy Sponsor",
    amount: "$250+",
    icon: Flag,
    desc: "Our highest tier of individual support. Legacy sponsors receive special recognition and a personal thank you from the Society.",
    color: "border-adobe/30 hover:border-adobe",
  },
];

const impactItems = [
  "Community outreach and education programs",
  "Cultural preservation of vaquero and cowboy heritage",
  "4th of July Parade float and participation",
  "Historical research and story collection",
  "Events and celebrations that bring the community together",
];

export default function Donate() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-terracotta-800 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.12),transparent_60%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <SectionReveal>
            <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
              Support Our Mission
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Donate to the{" "}
              <span className="text-gold italic">1888 Society</span>
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              Every contribution helps us preserve the heritage and culture
              that shaped Prescott and the American West.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Supporter Tiers */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Choose Your Level
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Supporter{" "}
                <span className="text-terracotta italic">Tiers</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <SectionReveal key={tier.name} delay={i * 100}>
                <div
                  className={`rounded-2xl p-6 sm:p-8 border-2 ${tier.color} bg-white h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    tier.featured ? "ring-2 ring-gold/30 shadow-md" : ""
                  }`}
                >
                  {tier.featured && (
                    <span className="inline-block bg-gold/10 text-gold-600 text-xs font-body font-semibold px-3 py-1 rounded-full mb-4 self-start">
                      Most Popular
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mb-4">
                    <tier.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                    {tier.name}
                  </h3>
                  <p className="font-display text-2xl font-bold text-terracotta mb-4">
                    {tier.amount}
                  </p>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed flex-1">
                    {tier.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={500}>
            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-10 py-6 text-lg shadow-xl shadow-terracotta/20 transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <a
                  href="https://paypal.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become a Founding Supporter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <p className="font-body text-charcoal/40 text-sm mt-4">
                You'll be redirected to our secure donation platform.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Impact Section */}
      <section className="py-20 sm:py-28 bg-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal direction="left">
              <div>
                <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                  Where It Goes
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                  Your Support{" "}
                  <span className="text-terracotta italic">Makes an Impact</span>
                </h2>
                <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-8">
                  Every dollar donated to the 1888 Americano Society goes
                  directly toward preserving heritage and strengthening
                  community.
                </p>
                <ul className="space-y-4">
                  {impactItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-terracotta" />
                      </div>
                      <span className="font-body text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/15 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                  Business Sponsorship
                </h3>
                <p className="font-body text-charcoal/60 leading-relaxed mb-6">
                  Local businesses can support the 1888 Americano Society
                  through parade float sponsorship and other partnership
                  opportunities.
                </p>
                <p className="font-body text-charcoal/60 leading-relaxed mb-6">
                  Sponsorship provides visibility for your business while
                  supporting the preservation of Prescott's unique western
                  heritage.
                </p>
                <a href="mailto:info.1888society@gmail.com?subject=Business%20Sponsorship%20Inquiry">
                  <Button className="bg-gold hover:bg-gold-500 text-charcoal font-body rounded-xl px-6 py-3 transition-all duration-300 hover:-translate-y-0.5">
                    Inquire About Sponsorship
                  </Button>
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
