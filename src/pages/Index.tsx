import { Link } from "react-router-dom";
import { History, Users, Calendar, Heart, BookOpen, MapPin, ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";
import QuickLinkCard from "@/components/QuickLinkCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="1888 Americano Society"
        tagline="Honoring America · Preserving Heritage · Strengthening Community"
        subtitle="Celebrating the Mexican-American heritage behind the World's Oldest Rodeo and the pioneers who shaped the American West."
        bgImage="/assets/hero-bg.jpg"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/history">
            <Button size="lg" className="bg-gold hover:bg-gold-500 text-charcoal font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5">
              Learn Our Story
            </Button>
          </Link>
          <Link to="/get-involved">
            <Button size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10 px-8 py-6 text-base rounded-xl transition-all hover:-translate-y-0.5">
              Get Involved
            </Button>
          </Link>
        </div>
      </HeroSection>

      {/* Scroll indicator */}
      <div className="relative -mt-20 z-20 flex justify-center pb-8">
        <div className="animate-scroll-hint text-gold/60">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div>
                <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">Our Purpose</span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3 leading-tight">
                  Preserving the Legacy of the <span className="text-terracotta italic">Vaquero</span>
                </h2>
                <p className="mt-6 text-charcoal/60 leading-relaxed text-lg">
                  The 1888 Americano Society exists to honor, educate, and celebrate the rich Mexican-American heritage that gave birth to the American cowboy tradition and the World's Oldest Rodeo in Prescott, Arizona.
                </p>
                <p className="mt-4 text-charcoal/60 leading-relaxed">
                  From the vaqueros of Spain and Mexico who first brought horsemanship to the American Southwest, to the cowboys who gathered in Prescott in 1888 for the first documented cowboy tournament — our story is America's story.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal direction="right">
              <div className="relative">
                <div className="bg-gradient-to-br from-terracotta to-adobe rounded-3xl p-10 sm:p-14 text-cream relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-10">
                    <span className="font-display text-[120px] sm:text-[160px] font-bold leading-none">1888</span>
                  </div>
                  <div className="relative z-10">
                    <span className="font-display italic text-gold text-2xl">"</span>
                    <p className="font-display italic text-xl sm:text-2xl text-cream/90 leading-relaxed mt-2">
                      Where the spirit of the vaquero lives on, the American story finds its truest roots.
                    </p>
                    <span className="font-display italic text-gold text-2xl">"</span>
                    <div className="mt-6 h-0.5 w-12 bg-gold/40" />
                    <p className="mt-4 text-cream/60 text-sm uppercase tracking-wider">1888 Americano Society</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* Three Pillars */}
      <section className="py-20 sm:py-28 bg-sand/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">What We Do</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3">
                Our Three Pillars
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Historical Education",
                description: "Preserving and sharing the documented history of the World's Oldest Rodeo and the vaquero traditions that made it possible.",
              },
              {
                icon: Heart,
                title: "Cultural Preservation",
                description: "Safeguarding the Mexican-American cowboy heritage, stories, and artifacts that define Prescott's unique western identity.",
              },
              {
                icon: Users,
                title: "Community Fellowship",
                description: "Bringing together Prescott residents, veterans, and heritage enthusiasts to celebrate our shared American story.",
              },
            ].map((pillar, i) => (
              <SectionReveal key={i} delay={i * 150}>
                <div className="text-center p-8 sm:p-10 rounded-2xl border border-gold/20 bg-cream hover:border-gold/40 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group">
                  <div className="w-16 h-16 rounded-2xl bg-terracotta/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-terracotta group-hover:scale-110 transition-all duration-500">
                    <pillar.icon className="h-8 w-8 text-terracotta group-hover:text-cream transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">{pillar.title}</h3>
                  <p className="text-sm text-charcoal/50 leading-relaxed">{pillar.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* Quick Links / Explore */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">Explore</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3">
                Discover Our Story
              </h2>
              <p className="mt-4 text-charcoal/50 max-w-xl mx-auto">
                From the dusty arenas of 1888 Prescott to the modern celebration of western heritage — explore every chapter.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectionReveal delay={0}>
              <QuickLinkCard
                to="/history"
                title="Our History"
                description="The World's Oldest Rodeo, vaquero traditions, and the Mexican-American cowboy legacy."
                icon={History}
                gradient="from-adobe to-terracotta-800"
              />
            </SectionReveal>
            <SectionReveal delay={100}>
              <QuickLinkCard
                to="/juan-leivas"
                title="Juan Leivas"
                description="The first champion of the World's Oldest Rodeo and his enduring legacy."
                icon={MapPin}
                gradient="from-terracotta to-terracotta-600"
              />
            </SectionReveal>
            <SectionReveal delay={200}>
              <QuickLinkCard
                to="/events"
                title="Events"
                description="America's 250th Anniversary celebration and our 4th of July parade debut."
                icon={Calendar}
                gradient="from-gold-600 to-gold"
              />
            </SectionReveal>
            <SectionReveal delay={300}>
              <QuickLinkCard
                to="/get-involved"
                title="Get Involved"
                description="Volunteer, attend meetings, and help preserve Prescott's western heritage."
                icon={Users}
                gradient="from-sage to-sage-dark"
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* America 250 Banner */}
      <section className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(193,68,14,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="text-lg">🇺🇸</span>
              <span className="uppercase tracking-wider">Special Event</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight">
              Celebrating America's <span className="text-gold">250th Anniversary</span>
            </h2>
            <p className="mt-6 text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed">
              The 1888 Americano Society makes its debut in the legendary Prescott 4th of July Parade — honoring 250 years of the American spirit that began with the vaqueros.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/events">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta-600 text-cream font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-terracotta/30 transition-all hover:shadow-xl hover:-translate-y-0.5">
                  View Event Details
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 px-8 py-6 text-base rounded-xl transition-all hover:-translate-y-0.5">
                  Support the Cause
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
