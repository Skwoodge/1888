import { Heart, BookOpen, Flag, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";

const tiers = [
  {
    name: "Heritage Supporter",
    amount: "$25",
    icon: Heart,
    desc: "Help us share the stories of the vaqueros, veterans with Mexican heritage, and families who shaped our community.",
    color: "border-sage/30 hover:border-sage",
  },
  {
    name: "Community Supporter",
    amount: "$50",
    icon: BookOpen,
    desc: "Support heritage education programs that teach the true history of Americans with Mexican heritage in Prescott and the American West.",
    color: "border-gold/30 hover:border-gold",
    featured: false,
  },
  {
    name: "Founding Patron",
    amount: "$100",
    icon: Landmark,
    desc: "Become a founding patron of the 1888 Americano Society. Your generosity helps preserve heritage and honor veterans for future generations.",
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
  "Heritage education and community outreach programs",
  "Honoring veterans with Mexican heritage in Prescott and Yavapai County",
  "4th of July Parade float and veteran marchers",
  "Preserving the stories and history of local families",
  "Events and cultural celebrations that bring the community together",
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
              Every contribution helps us honor our heritage, recognize our
              veterans, and strengthen our community.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Choose Your Level
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Become a{" "}
                <span className="text-terracotta italic">Supporter</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <SectionReveal key={tier.name} delay={tier.featured ? 0 : 100}>
                <div
                  className={`rounded-2xl p-6 border-2 ${tier.color} ${
                    tier.featured
                      ? "shadow-xl ring-2 ring-terracotta/20"
                      : "shadow-sm"
                  } h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  {tier.featured && (
                    <span className="inline-block text-terracotta text-xs font-bold font-body uppercase tracking-widest mb-3">
                      Most Popular
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mb-4">
                    <tier.icon className="w-6 h-6 text-terracotta" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-1">
                    {tier.name}
                  </h3>
                  <p className="font-display text-2xl font-bold text-terracotta mb-3">
                    {tier.amount}
                  </p>
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed flex-1">
                    {tier.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* Impact */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Your Impact
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                Where Your{" "}
                <span className="text-terracotta italic">Donation Goes</span>
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impactItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-cream rounded-xl p-4 border border-gold/20"
                >
                  <span className="text-terracotta mt-1">★</span>
                  <span className="font-body text-charcoal/70">{item}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="mt-12 text-center">
              <p className="font-body text-charcoal/60 mb-6">
                All donations support the 1888 Americano Society's mission to
                honor heritage and recognize service.
              </p>
              <a href="mailto:info.1888society@gmail.com?subject=Donation%20Inquiry">
                <Button
                  size="lg"
                  className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-4 text-lg shadow-xl shadow-terracotta/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Donate via Email
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className="font-body text-charcoal/50 text-sm mt-4">
                Contact us at info.1888society@gmail.com to arrange your
                donation.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
