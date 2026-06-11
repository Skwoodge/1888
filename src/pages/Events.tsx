import { Calendar, MapPin, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";

const sponsorshipTiers = [
  {
    name: "Community Sponsor",
    amount: "$100",
    desc: "Your name on the float banner. A show of community pride and support for Prescott's heritage.",
    color: "bg-sage/10 border-sage/30",
  },
  {
    name: "Heritage Sponsor",
    amount: "$250",
    desc: "Featured recognition on the float and in parade communications. Help us tell the story of the vaquero.",
    color: "bg-gold/10 border-gold/30",
  },
  {
    name: "Parade Sponsor",
    amount: "$500",
    desc: "Premier placement on the float with prominent logo display. Be a cornerstone of our parade debut.",
    color: "bg-terracotta/10 border-terracotta/30",
  },
];

const upcomingEvents = [
  {
    name: "Society Meeting",
    date: "Check back for updated times",
    location: "Prescott, AZ",
    desc: "Join us for our regular community meetings to discuss upcoming events and heritage initiatives.",
  },
  {
    name: "4th of July Parade",
    date: "July 4, 2026",
    location: "Downtown Prescott",
    desc: "The 1888 Americano Society's debut in the Independence Day parade — celebrating America's 250th birthday.",
  },
  {
    name: "Heritage Celebration",
    date: "TBA",
    location: "Prescott, AZ",
    desc: "A cultural gathering honoring the Mexican-American heritage of the American West.",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-terracotta-800 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,83,0.1),transparent_60%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <SectionReveal>
            <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
              Join the Celebration
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Events &{" "}
              <span className="text-gold italic">Celebrations</span>
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              From the 4th of July Parade to heritage celebrations — be part of
              something historic.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 4th of July Feature */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden min-h-[400px] flex items-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/flag-backdrop.webp)' }} />
              <div className="absolute inset-0 bg-charcoal/70" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-gold mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="font-body font-semibold">July 4, 2026</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  4th of July Parade{" "}
                  <span className="text-gold italic">Debut</span>
                </h2>
                <p className="font-body text-white/80 text-lg leading-relaxed max-w-3xl mb-8">
                  The 1888 Americano Society is proud to make its inaugural
                  appearance in Prescott's legendary 4th of July Parade. This
                  year's celebration carries extra significance as America
                  marks its 250th anniversary — and we're bringing our heritage
                  to the streets with a spectacular parade float.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="font-body text-sm font-semibold">Location</span>
                    </div>
                    <p className="font-body text-white/80">Downtown Prescott, AZ</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <Star className="w-4 h-4" />
                      <span className="font-body text-sm font-semibold">Celebration</span>
                    </div>
                    <p className="font-body text-white/80">America's 250th Birthday</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-gold mb-2">
                      <Users className="w-4 h-4" />
                      <span className="font-body text-sm font-semibold">We Need</span>
                    </div>
                    <p className="font-body text-white/80">Volunteers & Sponsors</p>
                  </div>
                </div>

                <Link to="/get-involved">
                  <Button className="bg-gold hover:bg-gold-500 text-charcoal font-body rounded-xl px-8 py-5 text-lg shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Volunteer for the Parade
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Float Sponsorship */}
      <section className="py-20 sm:py-28 bg-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Support the Float
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Parade Float{" "}
                <span className="text-terracotta italic">Sponsorship</span>
              </h2>
              <p className="font-body text-charcoal/60 text-lg max-w-2xl mx-auto">
                Help us build a float that honors Prescott's western heritage.
                Every contribution makes a difference.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier, i) => (
              <SectionReveal key={tier.name} delay={i * 150}>
                <div className={`rounded-2xl p-8 border-2 ${tier.color} h-full flex flex-col`}>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                    {tier.name}
                  </h3>
                  <p className="font-display text-3xl font-bold text-terracotta mb-4">
                    {tier.amount}
                  </p>
                  <p className="font-body text-charcoal/60 leading-relaxed flex-1">
                    {tier.desc}
                  </p>
                  <Link to="/get-involved">
                    <Button
                      variant="outline"
                      className="mt-6 w-full border-terracotta/30 text-terracotta hover:bg-terracotta hover:text-white font-body rounded-xl transition-all duration-300"
                    >
                      Become a Sponsor
                    </Button>
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={450}>
            <div className="mt-12 text-center">
              <p className="font-body text-charcoal/50 text-sm mb-4">
                Want to sponsor at a custom level? Have questions?
              </p>
              <a href="mailto:info.1888society@gmail.com?subject=Float%20Sponsorship%20Inquiry">
                <Button className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-4 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  Contact Us About Sponsorship
                </Button>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Upcoming Events */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Mark Your Calendar
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Upcoming{" "}
                <span className="text-terracotta italic">Events</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <SectionReveal key={event.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gold/15 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-bold text-charcoal mb-1">
                        {event.name}
                      </h3>
                      <p className="font-body text-terracotta font-medium text-sm mb-2">
                        {event.date}
                      </p>
                      <p className="font-body text-charcoal/60 leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/40 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                      <span className="font-body text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}