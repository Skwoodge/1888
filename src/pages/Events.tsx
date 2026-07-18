import { Calendar, MapPin, Star, ArrowRight, Download, Clock, MapPinned, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";

const sponsorshipTiers = [
  {
    name: "Platinum Sponsor",
    amount: "$1,500",
    desc: "Banner on the float plus your logo on our website with a link to your business for one year. Premier recognition for premier support.",
    color: "bg-gold/10 border-gold/40",
    featured: true,
  },
  {
    name: "Gold Sponsor",
    amount: "$1,000",
    desc: "Banner on the float displaying your business. A visible show of community pride and support for Prescott's Mexican heritage.",
    color: "bg-terracotta/10 border-terracotta/30",
    featured: false,
  },
];

const upcomingEvents = [
  {
    name: "4th of July Parade",
    date: "July 4, 2026",
    location: "Downtown Prescott",
    desc: "The 1888 Americano Society's debut in the Independence Day parade — honoring veterans with Mexican heritage and celebrating America's 250th birthday.",
    featured: true,
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
              <span className="text-gold italic">Sponsorship</span>
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              From the 4th of July Parade to heritage celebrations — be part of
              something historic. Support the 1888 Americano Society through
              sponsorship or join us at upcoming events.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 4th of July Feature */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="bg-charcoal rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 via-transparent to-gold/10" />
              <div className="relative z-10">
                <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                  Featured Event
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                  4th of July Parade{" "}
                  <span className="text-gold italic">2026</span>
                </h2>
                <p className="font-body text-white/60 text-lg max-w-3xl mb-6 leading-relaxed">
                  This year's parade celebrates America's 250th Anniversary. The
                  1888 Americano Society is making its debut — honoring the
                  Americans with Mexican heritage from Yavapai County who served our country.
                  We are looking for service men and women with Mexican heritage
                  to march in the parade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/get-involved">
                    <Button
                      size="lg"
                      className="bg-gold hover:bg-gold-500 text-charcoal font-body rounded-xl px-8 py-4 text-lg shadow-xl shadow-gold/20 transition-all duration-300 hover:-translate-y-1"
                    >
                      Volunteer to March
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Parade Day Information */}
      <section className="py-20 sm:py-28 bg-sand/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                For Participants
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Parade Day{" "}
                <span className="text-gradient italic">Information</span>
              </h2>
            </div>
          </SectionReveal>

          {/* Quick Facts */}
          <SectionReveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-cream rounded-2xl p-6 border border-gold/20 text-center">
                <Clock className="w-8 h-8 text-terracotta mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-charcoal mb-1">Arrival Time</h3>
                <p className="font-body text-charcoal/70 font-semibold">Arrive by 7:00 AM</p>
                <p className="font-body text-charcoal/50 text-sm">No later than 8:00 AM</p>
              </div>
              <div className="bg-cream rounded-2xl p-6 border border-gold/20 text-center">
                <MapPinned className="w-8 h-8 text-terracotta mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-charcoal mb-1">Staging Area 6</h3>
                <p className="font-body text-charcoal/70 font-semibold">Entry #43 & 43A</p>
                <p className="font-body text-charcoal/50 text-sm">1888 Americano Society</p>
              </div>
              <div className="bg-cream rounded-2xl p-6 border border-gold/20 text-center">
                <Calendar className="w-8 h-8 text-terracotta mx-auto mb-3" />
                <h3 className="font-display text-lg font-bold text-charcoal mb-1">Parade Starts</h3>
                <p className="font-body text-charcoal/70 font-semibold">9:00 AM, July 4th</p>
                <p className="font-body text-charcoal/50 text-sm">Saturday, Downtown Prescott</p>
              </div>
            </div>
          </SectionReveal>

          {/* Staging Map + Rules */}
          <SectionReveal delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Staging Map */}
              <div className="lg:col-span-3">
                <div className="bg-cream rounded-2xl border border-gold/20 overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-gold/10">
                    <h3 className="font-display text-xl font-bold text-charcoal">
                      Staging Area Map
                    </h3>
                    <p className="font-body text-charcoal/50 text-sm mt-1">
                      Your position in Staging Area 6 — look for Entry #43
                    </p>
                  </div>
                  <div className="p-4">
                    <img
                      src="/assets/staging_info.png"
                      alt="Staging Area 6 map showing 1888 Americano Society entry positions"
                      loading="lazy"
                      className="w-full rounded-xl border border-gold/10"
                    />
                  </div>
                </div>
              </div>

              {/* Rules & Contacts */}
              <div className="lg:col-span-2 space-y-6">
                {/* Download Rules */}
                <div className="bg-cream rounded-2xl p-6 border border-gold/20">
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    Official Rules
                  </h3>
                  <p className="font-body text-charcoal/60 text-sm mb-4">
                    Full rules and regulations from Prescott Frontier Days — including float limits, safety requirements, and judging criteria.
                  </p>
                  <a
                    href="/assets/parade_rules_2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-terracotta/30 text-terracotta hover:bg-terracotta hover:text-white font-body rounded-xl transition-all duration-300"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Rules (PDF)
                    </Button>
                  </a>
                </div>

                {/* Parade Contacts */}
                <div className="bg-cream rounded-2xl p-6 border border-gold/20">
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    Parade Contacts
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-terracotta shrink-0" />
                      <div>
                        <p className="font-body text-charcoal font-semibold text-sm">Frank Sanderson</p>
                        <p className="font-body text-charcoal/50 text-xs">Parade Chairman</p>
                        <a href="tel:+16025407815" className="font-body text-terracotta text-sm hover:underline">(602) 540-7815</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-terracotta shrink-0" />
                      <div>
                        <p className="font-body text-charcoal font-semibold text-sm">Suzy Davidson</p>
                        <p className="font-body text-charcoal/50 text-xs">Parade Director</p>
                        <a href="tel:+19283085518" className="font-body text-terracotta text-sm hover:underline">(928) 308-5518</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Rules Quick Reference */}
                <div className="bg-terracotta/5 rounded-2xl p-6 border border-terracotta/20">
                  <h3 className="font-display text-lg font-bold text-terracotta mb-3">
                    Key Rules
                  </h3>
                  <ul className="space-y-2 font-body text-charcoal/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">•</span>
                      <span>No throwing items — hand them to crowd</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">•</span>
                      <span>Max float length: 60 ft / Max height: 13'6"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">•</span>
                      <span>Fire extinguishers required on all floats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">•</span>
                      <span>Stay 20 ft from entry in front of you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">•</span>
                      <span>No alcohol or drugs before or during parade</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Sponsorship Tiers */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Business Sponsorship
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
                <span className="text-gradient italic">Sponsorships</span>
              </h2>
              <p className="font-body text-charcoal/60 text-lg max-w-2xl mx-auto">
                Support the 1888 Americano Society's debut in the 4th of July
                Parade. Your sponsorship helps us honor our heritage and the
                veterans who served.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Platinum Sponsor */}
            <SectionReveal delay={0}>
              <div className="relative rounded-3xl overflow-hidden group card-hover">
                {/* Animated gold border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold via-terracotta to-gold p-[2px]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/50 via-gold to-gold/50 animate-pulse" />
                </div>
                {/* Card content */}
                <div className="relative bg-cream rounded-3xl p-8 sm:p-10 h-full flex flex-col">
                  {/* Premium badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-terracotta flex items-center justify-center shadow-lg">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gold text-xs font-bold font-body uppercase tracking-widest">
                      Premier Sponsor
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-charcoal mb-2">
                    Platinum
                  </h3>
                  <p className="font-display text-5xl font-bold text-terracotta mb-6">
                    $1,500
                  </p>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                      <p className="font-body text-charcoal/70">Banner on the parade float</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                      <p className="font-body text-charcoal/70">Logo on our website with a link to your business</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                      <p className="font-body text-charcoal/70 font-semibold">Link active for one full year</p>
                    </div>
                  </div>
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-3xl" />
                </div>
              </div>
            </SectionReveal>

            {/* Gold Sponsor */}
            <SectionReveal delay={150}>
              <div className="relative rounded-3xl overflow-hidden group card-hover">
                {/* Gold border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/40 via-gold/20 to-gold/40 p-[2px]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/30 via-gold/10 to-gold/30" />
                </div>
                {/* Card content */}
                <div className="relative bg-cream rounded-3xl p-8 sm:p-10 h-full flex flex-col">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/80 to-gold flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gold/80 text-xs font-bold font-body uppercase tracking-widest">
                      Supporting Sponsor
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-charcoal mb-2">
                    Gold
                  </h3>
                  <p className="font-display text-5xl font-bold text-terracotta mb-6">
                    $1,000
                  </p>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <p className="font-body text-charcoal/70">Banner displayed on the parade float</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <p className="font-body text-charcoal/70">Your business recognized as a community supporter</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={300}>
            <div className="mt-12 text-center">
              <p className="font-body text-charcoal/60 mb-6">
                Interested in sponsoring? Contact us for more details.
              </p>
              <Link to="/get-involved">
                <Button
                  size="lg"
                  className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-4 text-lg shadow-xl shadow-terracotta/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Upcoming Events */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Calendar
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Upcoming{" "}
                <span className="text-gradient italic">Events</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <SectionReveal key={event.name}>
                <div
                  className={`rounded-2xl p-8 ${
                    event.featured
                      ? "bg-terracotta/5 border-2 border-terracotta/20"
                      : "bg-sand/50 border border-gold/20"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    <div className="flex items-center gap-3 text-charcoal/60 shrink-0">
                      <Calendar className="w-5 h-5 text-terracotta" />
                      <span className="font-body font-semibold">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-charcoal/60 shrink-0">
                      <MapPin className="w-5 h-5 text-terracotta" />
                      <span className="font-body">{event.location}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mt-4 mb-2">
                    {event.name}
                  </h3>
                  <p className="font-body text-charcoal/60 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
