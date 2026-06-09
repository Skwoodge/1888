import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Landmark, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Index() {
  const heroRef = useScrollReveal({ threshold: 0.05, rootMargin: "0px" });

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section
        ref={heroRef.ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: "url(/assets/hero-bg.jpg)",
              transform: `translateY(${heroRef.isRevealed ? "0%" : "5%"}) scale(1.05)`,
              transition: "transform 1.5s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-terracotta/40 to-charcoal/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
          <div
            className={`transition-all duration-1000 delay-200 ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-terracotta/90 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-gold/50">
              <span className="text-white font-display font-bold text-3xl sm:text-4xl">
                1888
              </span>
            </div>
          </div>

          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-500 ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            1888 Americano{" "}
            <span className="text-gold italic">Society</span>
          </h1>

          <p
            className={`font-display italic text-xl sm:text-2xl md:text-3xl text-gold/90 mb-4 transition-all duration-1000 delay-700 ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Honoring America, Preserving Heritage, Strengthening Community
          </p>

          <p
            className={`font-body text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-900 ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Celebrating the Mexican-American heritage behind the World's Oldest
            Rodeo and the American West — from Prescott, Arizona.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-[1100ms] ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to="/history">
              <Button
                size="lg"
                className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-6 text-lg shadow-xl shadow-terracotta/30 hover:shadow-terracotta/50 transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold/60 text-gold hover:bg-gold hover:text-charcoal font-body rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/50 animate-scroll-hint">
            <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div>
                <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                  Our Purpose
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                  Our{" "}
                  <span className="text-terracotta italic">Mission</span>
                </h2>
                <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-6">
                  The 1888 Americano Society is a Prescott, Arizona nonprofit
                  dedicated to honoring and preserving the rich Mexican-American
                  heritage that shaped the American West. We celebrate the
                  vaquero traditions, the cowboy culture, and the pioneering
                  spirit that gave rise to the World's Oldest Rodeo in 1888.
                </p>
                <p className="font-body text-charcoal/70 text-lg leading-relaxed">
                  Through historical education, cultural preservation, and
                  community fellowship, we ensure these vital stories are never
                  forgotten — and continue to inspire future generations.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal direction="right">
              <div className="relative">
                <div className="bg-terracotta/5 border-2 border-gold/20 rounded-3xl p-10 sm:p-12">
                  <div className="text-center">
                    <span className="font-display text-8xl sm:text-9xl font-bold text-terracotta/10 absolute top-4 right-6 select-none">
                      1888
                    </span>
                    <span className="font-display text-7xl sm:text-8xl font-bold text-terracotta/20">
                      1888
                    </span>
                    <p className="font-display italic text-xl text-adobe mt-4 leading-relaxed">
                      "The year that defined the cowboy, the community, and the
                      spirit of the American West."
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* ============ THREE PILLARS ============ */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                What We Do
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Three Pillars of{" "}
                <span className="text-terracotta italic">Purpose</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Historical Education",
                desc: "Teaching the true stories of the vaqueros, Mexican-American cowboys, and the communities that built the American West from Prescott, Arizona.",
                delay: 0,
              },
              {
                icon: Landmark,
                title: "Cultural Preservation",
                desc: "Safeguarding the heritage, traditions, and living memory of the cultures that shaped our region — from the 1888 rodeo to the present day.",
                delay: 150,
              },
              {
                icon: Users,
                title: "Community Fellowship",
                desc: "Bringing people together through events, parades, and celebrations that strengthen bonds and honor shared history.",
                delay: 300,
              },
            ].map((pillar) => (
              <SectionReveal key={pillar.title} delay={pillar.delay}>
                <div className="bg-cream rounded-2xl p-8 border border-gold/20 shadow-sm hover:shadow-lg hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-terracotta/10 flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:scale-110 transition-all duration-300">
                    <pillar.icon className="w-7 h-7 text-terracotta group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-charcoal/60 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* ============ EXPLORE ============ */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Explore
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Discover Our{" "}
                <span className="text-terracotta italic">Story</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                to: "/history",
                title: "Our History",
                desc: "From the World's Oldest Rodeo to vaquero traditions — the full story of Prescott's western heritage.",
                gradient: "from-terracotta to-terracotta-700",
              },
              {
                to: "/juan-leivas",
                title: "Juan Leivas",
                desc: "Meet the first champion of the World's Oldest Rodeo — a Mexican-American cowboy whose legacy endures.",
                gradient: "from-adobe to-adobe-light",
              },
              {
                to: "/events",
                title: "Events",
                desc: "4th of July Parade, America 250 celebrations, and upcoming community gatherings.",
                gradient: "from-gold-600 to-gold",
              },
              {
                to: "/get-involved",
                title: "Get Involved",
                desc: "Volunteer, attend meetings, and help us preserve the heritage of the American West.",
                gradient: "from-sage-dark to-sage",
              },
            ].map((card) => (
              <SectionReveal key={card.to} delay={0}>
                <Link to={card.to} className="block group h-full">
                  <div className="relative overflow-hidden rounded-2xl h-full min-h-[280px] flex flex-col justify-end p-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="relative z-10">
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="font-body text-white/70 text-sm leading-relaxed mb-3">
                        {card.desc}
                      </p>
                      <span className="inline-flex items-center text-gold text-sm font-semibold font-body group-hover:translate-x-1 transition-transform duration-300">
                        Explore <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* ============ AMERICA 250 ============ */}
      <section className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 via-transparent to-gold/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Special Event
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Celebrating America's{" "}
                <span className="text-gold italic">250th Anniversary</span>
              </h2>
              <p className="font-body text-white/60 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                The 1888 Americano Society proudly makes its debut in the 4th of
                July Parade — celebrating America's 250th birthday with a
                spectacular float honoring Prescott's western heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/events">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-500 text-charcoal font-body rounded-xl px-8 py-6 text-lg shadow-xl shadow-gold/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    View Event Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 font-body rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Float Sponsorship
                  </Button>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 sm:py-28 bg-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Be Part of the <span className="text-terracotta italic">Legacy</span>
            </h2>
            <p className="font-body text-charcoal/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you volunteer, donate, or simply share our story — you
              become part of preserving the heritage that shaped the American
              West.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button
                  size="lg"
                  className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-6 text-lg shadow-xl shadow-terracotta/30 transition-all duration-300 hover:-translate-y-1"
                >
                  Donate Now
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-terracotta/30 text-terracotta hover:bg-terracotta hover:text-white font-body rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Join Us
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}